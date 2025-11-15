import { Heart, Users, Calendar, Shield, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50 p-6 flex flex-col justify-between">
      <div className="max-w-lg mx-auto w-full space-y-8 flex-1 flex flex-col justify-center">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-8 shadow-2xl">
              <Heart className="w-24 h-24 text-white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-800">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Senior Connect
            </span>
          </h1>
          
          <p className="text-3xl text-gray-700 leading-relaxed">
            Your companion for staying connected with family and living independently
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4 mt-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100 flex items-center gap-5">
            <div className="bg-blue-100 rounded-2xl p-4 flex-shrink-0">
              <Users className="w-10 h-10 text-blue-600" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Stay Connected</h3>
              <p className="text-xl text-gray-600">Easy calls & messages with family</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-green-100 flex items-center gap-5">
            <div className="bg-green-100 rounded-2xl p-4 flex-shrink-0">
              <Calendar className="w-10 h-10 text-green-600" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Stay Active</h3>
              <p className="text-xl text-gray-600">Find events & activities nearby</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100 flex items-center gap-5">
            <div className="bg-purple-100 rounded-2xl p-4 flex-shrink-0">
              <Sparkles className="w-10 h-10 text-purple-600" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Voice Control</h3>
              <p className="text-xl text-gray-600">Just speak - we'll help you</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-amber-100 flex items-center gap-5">
            <div className="bg-amber-100 rounded-2xl p-4 flex-shrink-0">
              <Shield className="w-10 h-10 text-amber-600" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Simple & Safe</h3>
              <p className="text-xl text-gray-600">Large buttons, easy to use</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="max-w-lg mx-auto w-full mt-8">
        <button
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all active:scale-98"
        >
          <span className="text-4xl font-bold">Get Started</span>
        </button>
        
        <p className="text-center text-xl text-gray-600 mt-6">
          No complicated setup - just sign up and connect!
        </p>
      </div>
    </div>
  );
}
