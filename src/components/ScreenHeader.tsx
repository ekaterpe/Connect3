import { Award } from 'lucide-react';

interface ScreenHeaderProps {
  onMenuClick?: () => void;
  onTextSizeToggle?: () => void;
  textSizeMultiplier?: number;
  showTasksButton?: boolean;
  onTasksClick?: () => void;
  tasksData?: {
    totalPoints: number;
    currentStreak: number;
    tasksLeft: number;
  };
}

export function ScreenHeader({
  onMenuClick,
  onTextSizeToggle,
  textSizeMultiplier = 1,
  showTasksButton = true,
  onTasksClick,
  tasksData = { totalPoints: 0, currentStreak: 0, tasksLeft: 0 }
}: ScreenHeaderProps) {
  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-blue-50 to-purple-50 pb-3 pt-3 shadow-md">
        <div className="max-w-lg mx-auto px-4 flex items-center justify-between gap-3">
          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="bg-white rounded-full p-4 shadow-lg border-2 border-purple-200 hover:bg-purple-50 transition-colors flex-shrink-0"
            title="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-700"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          {/* Center Content - Daily Tasks Button or Empty Space */}
          {showTasksButton ? (
            <button
              onClick={onTasksClick}
              className="flex-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full px-4 py-4 shadow-lg border-2 border-amber-200 hover:shadow-xl transition-all active:scale-98"
            >
              <div className="flex items-center justify-center gap-2">
                <Award
                  className="w-6 h-6 text-amber-600"
                  strokeWidth={2.5}
                />
                <span className="text-base font-bold text-gray-800">Daily Tasks</span>
                <span className="text-base text-amber-600">{tasksData.totalPoints} pts</span>
              </div>
            </button>
          ) : (
            <div className="flex-1"></div>
          )}

          {/* Text Size Toggle */}
          <button
            onClick={onTextSizeToggle}
            className="bg-white rounded-full p-4 shadow-lg border-2 border-purple-200 hover:bg-purple-50 transition-colors flex-shrink-0"
            title="Toggle larger text"
          >
            <span className="text-xl font-bold text-purple-700">
              {textSizeMultiplier === 1.5 ? 'A-' : 'A+'}
            </span>
          </button>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-28"></div>
    </>
  );
}