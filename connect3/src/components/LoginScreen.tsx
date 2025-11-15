import { useState } from 'react';
import { LoginScreenProps } from '../types';
import { LogIn, Mail, Lock, Heart } from 'lucide-react';

export function LoginScreen({ onLogin, onSignUp }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-100 w-full max-w-lg">
        {/* Header with Icon */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-6 shadow-lg">
              <Heart className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Welcome Back
          </h1>
          <p className="text-2xl text-gray-600">
            Sign in to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Mail className="w-8 h-8 text-purple-600" strokeWidth={2.5} />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Lock className="w-8 h-8 text-purple-600" strokeWidth={2.5} />
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-98 text-2xl font-bold flex items-center justify-center gap-3"
          >
            <LogIn className="w-8 h-8" strokeWidth={2.5} />
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <p className="text-xl text-center text-gray-600 mb-4">
            New to Senior Connect?
          </p>
          <button
            onClick={onSignUp}
            className="w-full bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 rounded-3xl p-5 text-xl font-bold hover:from-blue-100 hover:to-purple-100 transition-all active:scale-98 border-2 border-purple-200"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}