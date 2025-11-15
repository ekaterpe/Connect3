import { Users, Calendar, Bell, Sun } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: 'family' | 'events' | 'reminders') => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const greeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-8">
      {/* Greeting Section */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-100">
        <div className="flex items-center gap-4 mb-4">
          <Sun className="w-16 h-16 text-yellow-500" strokeWidth={2} />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{greeting()}!</h1>
            <p className="text-xl text-gray-600">{dateString}</p>
          </div>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="space-y-4">
        <button
          onClick={() => onNavigate('family')}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
        >
          <div className="bg-white/20 rounded-2xl p-4">
            <Users className="w-12 h-12" strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-1">Family</h2>
            <p className="text-xl text-blue-100">Call or message your loved ones</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('events')}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
        >
          <div className="bg-white/20 rounded-2xl p-4">
            <Calendar className="w-12 h-12" strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-1">Events Nearby</h2>
            <p className="text-xl text-green-100">Find activities in your area</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('reminders')}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center gap-6"
        >
          <div className="bg-white/20 rounded-2xl p-4">
            <Bell className="w-12 h-12" strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-1">Reminders</h2>
            <p className="text-xl text-purple-100">View your medications & tasks</p>
          </div>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow border-2 border-blue-100 text-center">
          <p className="text-5xl font-bold text-blue-600 mb-2">3</p>
          <p className="text-lg text-gray-600">Reminders Today</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow border-2 border-green-100 text-center">
          <p className="text-5xl font-bold text-green-600 mb-2">2</p>
          <p className="text-lg text-gray-600">Events This Week</p>
        </div>
      </div>
    </div>
  );
}
