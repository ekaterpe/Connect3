import { UserPlus, Phone, Mail, User, Lock } from 'lucide-react';
import { useState } from 'react';

interface SignUpScreenProps {
  onSignUp: () => void;
  onBackToLogin: () => void;
}

export function SignUpScreen({ onSignUp, onBackToLogin }: SignUpScreenProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');

  const handleSignUp = () => {
    if (name.trim() && phone.trim() && pin.length >= 4) {
      onSignUp();
    } else {
      alert('Please enter your name, phone number, and a PIN (4-6 digits)');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6 overflow-y-auto">
      <div className="max-w-lg mx-auto space-y-6 py-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-100 text-center">
          <div className="bg-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserPlus className="w-12 h-12 text-purple-600" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Create Account</h1>
          <p className="text-2xl text-gray-600">Just a few simple steps to get started</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 space-y-8">
          {/* Step 1: Basic Info */}
          <div>
            <div className="bg-blue-50 rounded-2xl p-4 mb-6">
              <p className="text-2xl text-blue-800 font-semibold">Step 1: Your Information</p>
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="flex items-center gap-3 text-xl font-semibold text-gray-700 mb-4">
                <User className="w-7 h-7 text-purple-600" />
                Your Name (Required)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="flex items-center gap-3 text-xl font-semibold text-gray-700 mb-4">
                <Phone className="w-7 h-7 text-purple-600" />
                Phone Number (Required)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="flex items-center gap-3 text-xl font-semibold text-gray-700 mb-4">
                <Mail className="w-7 h-7 text-purple-600" />
                Email (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Step 2: Security */}
          <div>
            <div className="bg-blue-50 rounded-2xl p-4 mb-6">
              <p className="text-2xl text-blue-800 font-semibold">Step 2: Create Your PIN</p>
              <p className="text-lg text-blue-700 mt-2">Choose a 4-6 digit PIN to keep your account secure</p>
            </div>

            {/* PIN Input */}
            <div>
              <label className="flex items-center gap-3 text-xl font-semibold text-gray-700 mb-4">
                <Lock className="w-7 h-7 text-purple-600" />
                Create a PIN Code
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter your PIN"
                maxLength={6}
                className="w-full text-3xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none text-center tracking-widest"
              />
              <p className="text-lg text-gray-500 mt-3 text-center">
                Make it easy to remember, like your birthday
              </p>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            onClick={handleSignUp}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-7 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-4"
          >
            <UserPlus className="w-10 h-10" strokeWidth={2.5} />
            <span className="text-3xl font-bold">Create Account</span>
          </button>
        </div>

        {/* Back to Login */}
        <div className="text-center">
          <button
            onClick={onBackToLogin}
            className="text-2xl text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            Already have an account? Sign In
          </button>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-3xl p-6 border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help?</h3>
          <p className="text-xl text-blue-800 mb-4">
            Ask a family member for assistance, or call our support team:
          </p>
          <p className="text-3xl font-bold text-blue-600">(555) 000-0000</p>
        </div>
      </div>
    </div>
  );
}