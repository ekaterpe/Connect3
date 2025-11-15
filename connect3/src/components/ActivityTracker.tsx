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
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-4 shadow-lg border-2 border-green-100">
      <div className="flex items-center justify-between gap-4">
        {/* Left side - Title and Progress */}
        <div className="flex items-center gap-3">
          <Footprints className="w-6 h-6 text-green-600" strokeWidth={2.5} />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Daily Activity</h2>
            <p className="text-base text-gray-600">{steps.toLocaleString()} / {goal.toLocaleString()} steps</p>
          </div>
        </div>

        {/* Right side - Progress circle and percentage */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">{percentage}%</p>
            <p className="text-sm text-gray-600">of goal</p>
          </div>
          <div className="relative flex-shrink-0">
            <svg width="60" height="60" className="transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="30"
                cy="30"
                r="25"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="30"
                cy="30"
                r="25"
                stroke="#10b981"
                strokeWidth="6"
                fill="none"
                strokeDasharray={2 * Math.PI * 25}
                strokeDashoffset={2 * Math.PI * 25 - (percentage / 100) * 2 * Math.PI * 25}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}