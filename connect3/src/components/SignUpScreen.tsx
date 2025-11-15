import { useState } from 'react';
import { SignUpScreenProps } from '../types';
import { UserPlus, User, Mail, Lock, Calendar, Sparkles } from 'lucide-react';

export function SignUpScreen({ onSignUp, onBackToLogin }: SignUpScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-100 w-full max-w-lg">
        {/* Header with Icon */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-6 shadow-lg">
              <UserPlus className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Join Senior Connect
          </h1>
          <p className="text-2xl text-gray-600">
            Create your account to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label className="block text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <User className="w-8 h-8 text-purple-600" strokeWidth={2.5} />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
              placeholder="John Smith"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Mail className="w-8 h-8 text-purple-600" strokeWidth={2.5} />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Age Input */}
          <div>
            <label className="block text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-purple-600" strokeWidth={2.5} />
              Age (Optional)
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
              placeholder="65"
              min="1"
              max="120"
            />
            <p className="text-lg text-gray-500 mt-2 ml-2">
              This helps us personalize your experience
            </p>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Lock className="w-8 h-8 text-purple-600" strokeWidth={2.5} />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
              placeholder="Create a secure password"
              required
            />
            <p className="text-lg text-gray-500 mt-2 ml-2">
              Use at least 6 characters
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-98 text-2xl font-bold flex items-center justify-center gap-3"
          >
            <Sparkles className="w-8 h-8" strokeWidth={2.5} />
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <p className="text-xl text-center text-gray-600 mb-4">
            Already have an account?
          </p>
          <button
            onClick={onBackToLogin}
            className="w-full bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 rounded-3xl p-5 text-xl font-bold hover:from-blue-100 hover:to-purple-100 transition-all active:scale-98 border-2 border-purple-200"
          >
            Sign In Instead
          </button>
        </div>
      </div>
    </div>
  );
}