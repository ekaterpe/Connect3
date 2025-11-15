import { Footprints, TrendingUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function ActivityTracker() {
  const steps = 6547;
  const goal = 8000;
  const percentage = Math.round((steps / goal) * 100);
  const [showRoutineReminder, setShowRoutineReminder] = useState(true);
  
  // Calculate stroke dash offset for progress ring
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const motivationalMessages = [
    "You're doing great! Keep moving!",
    "Almost there! Just a few more steps!",
    "Excellent progress today!",
    "You're on the right track!",
    "Keep up the good work!"
  ];
  
  const message = percentage >= 80 
    ? motivationalMessages[2] 
    : percentage >= 50 
    ? motivationalMessages[3]
    : motivationalMessages[0];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-6 shadow-lg border-2 border-green-200">
      <div className="flex items-center justify-between gap-6">
        {/* Left side - Title and Progress */}
        <div className="flex items-center gap-4 flex-1">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <Footprints className="w-10 h-10 text-green-600" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Daily Activity</h2>
            <p className="text-xl text-gray-700 font-semibold">{steps.toLocaleString()} / {goal.toLocaleString()} steps</p>
            {message && (
              <p className="text-lg text-green-700 mt-2 font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5" strokeWidth={2.5} />
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Right side - Progress circle and percentage */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="text-right">
            <p className="text-4xl font-bold text-green-600">{percentage}%</p>
            <p className="text-lg text-gray-600 font-semibold">of goal</p>
          </div>
          <div className="relative flex-shrink-0">
            <svg width="80" height="80" className="transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#22c55e"
                strokeWidth="8"
                fill="none"
                strokeDasharray={2 * Math.PI * 32}
                strokeDashoffset={2 * Math.PI * 32 - (percentage / 100) * 2 * Math.PI * 32}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-green-600" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}