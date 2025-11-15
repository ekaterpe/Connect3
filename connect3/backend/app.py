from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import sqlite3
import os

app = Flask(__name__)
CORS(app)

# Ініціалізація бази даних
def init_db():
    conn = sqlite3.connect('family_app.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            age INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS family_members (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            name TEXT NOT NULL,
            relationship TEXT NOT NULL,
            phone TEXT,
            photo_url TEXT,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')
    
    conn.commit()
    conn.close()

init_db()

def get_db_connection():
    conn = sqlite3.connect('family_app.db')
    conn.row_factory = sqlite3.Row
    return conn

# Реєстрація
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute(
            'INSERT INTO users (name, email, password, age) VALUES (?, ?, ?, ?)',
            (data['name'], data['email'], data['password'], data['age'])
        )
        conn.commit()
        user_id = cursor.lastrowid
        
        return jsonify({
            'success': True,
            'user': {
                'id': user_id,
                'name': data['name'],
                'email': data['email'],
                'age': data['age']
            },
            'token': 'mock-jwt-token'
        })
    except sqlite3.IntegrityError:
        return jsonify({'success': False, 'message': 'Email already exists'}), 400
    finally:
        conn.close()

# Логін
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    
    conn = get_db_connection()
    user = conn.execute(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        (data['email'], data['password'])
    ).fetchone()
    conn.close()
    
    if user:
        return jsonify({
            'success': True,
            'user': {
                'id': user['id'],
                'name': user['name'],
                'email': user['email'],
                'age': user['age']
            },
            'token': 'mock-jwt-token'
        })
    else:
        return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

# Тестовий ендпоінт
@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({'message': 'Backend is working!'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)