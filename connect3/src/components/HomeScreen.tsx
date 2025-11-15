import {
  Users,
  Calendar,
  Bell,
  Sun,
  Image,
  Award,
  BookOpen,
  Check,
  Droplets,
  Footprints,
  Pill,
  Sparkles,
  X,
  Plus,
} from "lucide-react";
import { FamilyPhotoCard } from "./FamilyPhotoCard";
import { ActivityTracker } from "./ActivityTracker";
import { useState } from "react";
import { useApp } from "../context/AppContext";

interface HomeScreenProps {
  onNavigate: (
    screen:
      | "family"
      | "events"
      | "reminders"
      | "feed"
      | "diary"
      | "settings"
      | "profile",
  ) => void;
  onMenuClick?: () => void;
  onTextSizeToggle?: () => void;
  textSizeMultiplier?: number;
}

export function HomeScreen({
  onNavigate,
  onMenuClick,
  onTextSizeToggle,
  textSizeMultiplier = 1,
}: HomeScreenProps) {
  const { tasks, addTask, updateTask, deleteTask } = useApp();
  const [showTasksDialog, setShowTasksDialog] = useState(false);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPoints, setNewTaskPoints] = useState(10);

  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const greeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleToggleTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      updateTask(taskId, { completed: !task.completed });
    }
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const iconMap: { [key: string]: React.ReactNode } = {
        stretch: <Sparkles className="w-6 h-6 text-orange-500" />,
        walk: <Footprints className="w-6 h-6 text-green-500" />,
        water: <Droplets className="w-6 h-6 text-blue-500" />,
        medication: <Pill className="w-6 h-6 text-purple-500" />,
      };
      
      const titleLower = newTaskTitle.toLowerCase();
      let icon = <Sparkles className="w-6 h-6 text-amber-500" />;
      
      if (titleLower.includes('stretch') || titleLower.includes('exercise')) {
        icon = iconMap.stretch;
      } else if (titleLower.includes('walk') || titleLower.includes('step')) {
        icon = iconMap.walk;
      } else if (titleLower.includes('water') || titleLower.includes('drink')) {
        icon = iconMap.water;
      } else if (titleLower.includes('medication') || titleLower.includes('pill')) {
        icon = iconMap.medication;
      }
      
      addTask({
        title: newTaskTitle,
        icon,
        completed: false,
        points: newTaskPoints,
      });
      
      setNewTaskTitle("");
      setNewTaskPoints(10);
      setShowAddTaskForm(false);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    if (confirm("Удалить эту задачу?")) {
      deleteTask(taskId);
    }
  };

  const completedTasks = tasks.filter(
    (t) => t.completed,
  ).length;
  const tasksLeft = tasks.length - completedTasks;
  const totalPoints = tasks
    .filter((t) => t.completed)
    .reduce((sum, t) => sum + t.points, 0);
  const currentStreak = 7;

  return (
    <div className="max-w-lg mx-auto">
      {/* Fixed Header - Daily Tasks Button with Menu & Text Size Toggle */}
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

          {/* Daily Tasks Button - Same height as menu button */}
          <button
            onClick={() => setShowTasksDialog(true)}
            className="flex-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full px-4 py-4 shadow-lg border-2 border-amber-200 hover:shadow-xl transition-all active:scale-98"
          >
            <div className="flex items-center justify-center gap-2">
              <Award
                className="w-6 h-6 text-amber-600"
                strokeWidth={2.5}
              />
              <span className="text-base font-bold text-gray-800">Daily Tasks</span>
              <span className="text-base text-amber-600">{totalPoints} pts</span>
            </div>
          </button>

          {/* Text Size Toggle - Right */}
          <button
            onClick={onTextSizeToggle}
            className="bg-white rounded-full p-4 shadow-lg border-2 border-purple-200 hover:bg-purple-50 transition-colors flex-shrink-0"
            title="Toggle larger text"
          >
            <span className="text-xl font-bold text-purple-700">
              {textSizeMultiplier === 1.5 ? "A-" : "A+"}
            </span>
          </button>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-28"></div>

      {/* Daily Tasks Dialog */}
      {showTasksDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b-2 border-gray-200 sticky top-0 bg-white rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award
                    className="w-9 h-9 text-amber-600"
                    strokeWidth={2.5}
                  />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Daily Tasks
                  </h2>
                </div>
                <button
                  onClick={() => setShowTasksDialog(false)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
                >
                  <X
                    className="w-8 h-8 text-gray-600"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Stats */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl px-6 py-4 border-2 border-amber-200">
                  <p className="text-lg text-gray-600">
                    Points
                  </p>
                  <p className="text-3xl font-bold text-amber-600">
                    {totalPoints}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl px-6 py-4 border-2 border-amber-200">
                  <p className="text-lg text-gray-600">
                    Streak
                  </p>
                  <p className="text-3xl font-bold text-amber-600">
                    🔥 {currentStreak}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl px-6 py-4 border-2 border-purple-200">
                  <p className="text-lg text-gray-600">Left</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {tasksLeft}
                  </p>
                </div>
              </div>

              {/* Tasks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tasks.length === 0 ? (
                  <div className="col-span-2 text-center py-8">
                    <p className="text-2xl text-gray-500 mb-4">Нет задач на сегодня</p>
                    <button
                      onClick={() => setShowAddTaskForm(true)}
                      className="bg-purple-500 text-white rounded-2xl px-6 py-3 text-xl font-bold hover:bg-purple-600 transition-colors"
                    >
                      Добавить задачу
                    </button>
                  </div>
                ) : (
                  tasks.map((task) => (
                    <div
                      key={task.id}
                      className={`rounded-2xl p-6 border-2 transition-all ${
                        task.completed
                          ? "bg-white border-green-200"
                          : "bg-amber-50/50 border-amber-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`rounded-xl p-3 ${
                            task.completed
                              ? "bg-green-50"
                              : "bg-white"
                          }`}
                        >
                          {task.icon}
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-2xl font-bold ${
                              task.completed
                                ? "text-gray-600 line-through"
                                : "text-gray-800"
                            }`}
                          >
                            {task.title}
                          </h3>
                          <p className="text-lg text-amber-600 font-semibold">
                            {task.points} очков
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                          title="Удалить задачу"
                        >
                          <X className="w-6 h-6" strokeWidth={2.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => handleToggleTask(task.id)}
                        className={`w-full rounded-xl px-4 py-3 text-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${
                          task.completed
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-500 text-white hover:bg-amber-600"
                        }`}
                      >
                        {task.completed ? (
                          <>
                            <Check
                              className="w-6 h-6"
                              strokeWidth={2.5}
                            />
                            Выполнено
                          </>
                        ) : (
                          "Выполнить"
                        )}
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Add Task Form */}
              {showAddTaskForm && (
                <div className="mt-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 border-2 border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-800">Добавить задачу</h3>
                    <button
                      onClick={() => {
                        setShowAddTaskForm(false);
                        setNewTaskTitle("");
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-8 h-8" strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xl font-bold text-gray-800 mb-2">
                        Название задачи
                      </label>
                      <input
                        type="text"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                        placeholder="Например: Утренняя зарядка"
                      />
                    </div>
                    <div>
                      <label className="block text-xl font-bold text-gray-800 mb-2">
                        Очки за выполнение
                      </label>
                      <input
                        type="number"
                        value={newTaskPoints}
                        onChange={(e) => setNewTaskPoints(Number(e.target.value))}
                        className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                        min="1"
                        max="50"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setShowAddTaskForm(false);
                          setNewTaskTitle("");
                        }}
                        className="flex-1 bg-gray-200 text-gray-700 rounded-2xl p-5 text-xl font-bold hover:bg-gray-300 transition-colors"
                      >
                        Отмена
                      </button>
                      <button
                        onClick={handleAddTask}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-5 text-xl font-bold hover:shadow-lg transition-all"
                      >
                        <Plus className="w-6 h-6 inline mr-2" strokeWidth={2.5} />
                        Добавить
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Add Task Button */}
              {!showAddTaskForm && tasks.length > 0 && (
                <button
                  onClick={() => setShowAddTaskForm(true)}
                  className="w-full mt-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-5 text-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-3"
                >
                  <Plus className="w-8 h-8" strokeWidth={2.5} />
                  Добавить новую задачу
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Content */}
      <div className="p-6 pt-0 space-y-6">
        {/* Greeting Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-6 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-2">
            <Sun className="w-8 h-8" strokeWidth={2.5} />
            <h1 className="text-2xl font-bold">
              {greeting()}!
            </h1>
          </div>
          <p className="text-lg opacity-90">{dateString}</p>
        </div>

        {/* Activity Tracker */}
        <ActivityTracker />

        {/* Family Updates */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Family Updates
          </h2>
          <div className="space-y-4">
            <FamilyPhotoCard
              name="Sarah"
              status="Available"
              lastActive="Active now"
            />
            <FamilyPhotoCard
              name="Michael"
              status="At Work"
              lastActive="2 hours ago"
            />
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => onNavigate("feed")}
            className="w-full bg-gradient-to-r from-rose-200 to-pink-200 text-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
          >
            <div className="bg-white/80 rounded-2xl p-4">
              <Image
                className="w-12 h-12 text-rose-600"
                strokeWidth={2.5}
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-1">
                Family Photos
              </h2>
              <p className="text-xl text-gray-700">
                See what family is sharing
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate("family")}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
          >
            <div className="bg-white/20 rounded-2xl p-4">
              <Users className="w-12 h-12" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-1">
                Family
              </h2>
              <p className="text-xl text-blue-100">
                Call or message your loved ones
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate("events")}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
          >
            <div className="bg-white/20 rounded-2xl p-4">
              <Calendar
                className="w-12 h-12"
                strokeWidth={2.5}
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-1">
                Events Nearby
              </h2>
              <p className="text-xl text-green-100">
                Find activities in your area
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate("diary")}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
          >
            <div className="bg-white/20 rounded-2xl p-4">
              <BookOpen
                className="w-12 h-12"
                strokeWidth={2.5}
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-1">
                My Diary
              </h2>
              <p className="text-xl text-amber-100">
                View your daily activities
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate("reminders")}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
          >
            <div className="bg-white/20 rounded-2xl p-4">
              <Bell className="w-12 h-12" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-1">
                Reminders
              </h2>
              <p className="text-xl text-purple-100">
                View your medications & tasks
              </p>
            </div>
          </button>
        </div>

        {/* Voice Command Hints */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            💡 Voice Commands
          </h3>
          <p className="text-xl text-purple-800 mb-3">
            Use the microphone button at the bottom to try:
          </p>
          <ul className="space-y-2 text-lg text-purple-700">
            <li>• "Show family photos"</li>
            <li>• "Call Sarah"</li>
            <li>• "What events are today?"</li>
            <li>• "Show my reminders"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}