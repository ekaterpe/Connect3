import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { FamilyScreen } from './components/FamilyScreen';
import { EventsScreen } from './components/EventsScreen';
import { RemindersScreen } from './components/RemindersScreen';
import { Home, Users, Calendar, Bell } from 'lucide-react';

type Screen = 'home' | 'family' | 'events' | 'reminders';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [textSizeMultiplier, setTextSizeMultiplier] = useState(1);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'family':
        return <FamilyScreen />;
      case 'events':
        return <EventsScreen />;
      case 'reminders':
        return <RemindersScreen />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col" style={{ fontSize: textSizeMultiplier === 1.5 ? '1.5rem' : '1rem' }}>
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-purple-200 shadow-lg">
        <div className="max-w-lg mx-auto flex justify-around items-center py-4 px-4">
          <button
            onClick={() => setCurrentScreen('home')}
            className={`flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl transition-colors ${
              currentScreen === 'home' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
            }`}
          >
            <Home className="w-10 h-10" strokeWidth={2.5} />
            <span className="text-lg font-semibold">Home</span>
          </button>

          <button
            onClick={() => setCurrentScreen('family')}
            className={`flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl transition-colors ${
              currentScreen === 'family' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
            }`}
          >
            <Users className="w-10 h-10" strokeWidth={2.5} />
            <span className="text-lg font-semibold">Family</span>
          </button>

          <button
            onClick={() => setCurrentScreen('events')}
            className={`flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl transition-colors ${
              currentScreen === 'events' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
            }`}
          >
            <Calendar className="w-10 h-10" strokeWidth={2.5} />
            <span className="text-lg font-semibold">Events</span>
          </button>

          <button
            onClick={() => setCurrentScreen('reminders')}
            className={`flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl transition-colors ${
              currentScreen === 'reminders' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
            }`}
          >
            <Bell className="w-10 h-10" strokeWidth={2.5} />
            <span className="text-lg font-semibold">Reminders</span>
          </button>
        </div>
      </nav>

      {/* Accessibility Toggle */}
      <button
        onClick={() => setTextSizeMultiplier(textSizeMultiplier === 1 ? 1.5 : 1)}
        className="fixed top-4 right-4 bg-white rounded-full p-4 shadow-lg border-2 border-purple-200 z-50"
        title="Toggle larger text"
      >
        <span className="text-2xl font-bold text-purple-700">A{textSizeMultiplier === 1.5 ? '-' : '+'}</span>
      </button>
    </div>
  );
}
