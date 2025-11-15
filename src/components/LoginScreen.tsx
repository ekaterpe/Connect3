import { Phone, Mail, LogIn } from 'lucide-react';
import { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export function LoginScreen({ onLogin, onSignUp }: LoginScreenProps) {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [inputValue, setInputValue] = useState('');

  const handleLogin = () => {
    if (inputValue.trim()) {
      onLogin();
    } else {
      alert('Please enter your phone number or email');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full space-y-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-100 text-center">
          <div className="bg-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-12 h-12 text-purple-600" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome!</h1>
          <p className="text-2xl text-gray-600">Stay connected with family and community</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sign In</h2>

          {/* Login Method Toggle */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex items-center justify-center gap-3 p-5 rounded-2xl text-xl font-bold transition-all ${
                loginMethod === 'phone'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Phone className="w-8 h-8" strokeWidth={2.5} />
              Phone
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex items-center justify-center gap-3 p-5 rounded-2xl text-xl font-bold transition-all ${
                loginMethod === 'email'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Mail className="w-8 h-8" strokeWidth={2.5} />
              Email
            </button>
          </div>

          {/* Input Field */}
          <div>
            <label className="block text-xl font-semibold text-gray-700 mb-4">
              {loginMethod === 'phone' ? 'Phone Number' : 'Email Address'}
            </label>
            <input
              type={loginMethod === 'phone' ? 'tel' : 'email'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={loginMethod === 'phone' ? '(555) 123-4567' : 'your@email.com'}
              className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
              autoFocus
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-7 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-4"
          >
            <LogIn className="w-10 h-10" strokeWidth={2.5} />
            <span className="text-3xl font-bold">Sign In</span>
          </button>

          {/* Help Text */}
          <p className="text-xl text-gray-500 text-center mt-6">
            Need help? Call support: <span className="font-bold text-purple-600">(555) 000-0000</span>
          </p>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <button
            onClick={onSignUp}
            className="text-2xl text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            Don't have an account? Create one
          </button>
        </div>
      </div>
    </div>
  );
}