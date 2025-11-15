import {
  Bell,
  BookOpen,
  Calendar,
  Home,
  Image,
  Menu,
  Mic,
  PhoneCall,
  Settings,
  User,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { EventsScreen } from "./src/components/EventsScreen";
import { FamilyFeedScreen } from "./src/components/FamilyFeedScreen";
import { FamilyScreen } from "./src/components/FamilyScreen";
import { HomeScreen } from "./src/components/HomeScreen";
import { LoginScreen } from "./src/components/LoginScreen";
import { PersonalDiaryScreen } from "./src/components/PersonalDiaryScreen";
import { ProfileScreen } from "./src/components/ProfileScreen";
import { RemindersScreen } from "./src/components/RemindersScreen";
import { SettingsScreen } from "./src/components/SettingsScreen";
import { SignUpScreen } from "./src/components/SignUpScreen";
import { VoiceControlMode } from "./src/components/VoiceControlMode";
import { AppProvider } from "./src/context/AppContext";

// Імпортуємо типи з правильним шляхом
import {
  AppMode,
  AuthScreen,
  Screen,
  ScreenProps,
  User as UserType
} from "./src/types";

// Базовий URL для API
const API_BASE_URL = 'http://localhost:5000/api';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>("login");
  const [appMode, setAppMode] = useState<AppMode>("standard");
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [textSizeMultiplier, setTextSizeMultiplier] = useState(1);
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  // Функція для API запитів
  const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  // Оновлена функція логіну
  const handleLogin = async (email: string, password: string) => {
    try {
      const data = await apiRequest('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      
      if (data.success) {
        setIsLoggedIn(true);
        setUser(data.user);
        // Збережіть токен для майбутніх запитів
        localStorage.setItem('authToken', data.token);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  // Оновлена функція реєстрації
  const handleSignUp = async (userData: any) => {
    try {
      const data = await apiRequest('/signup', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      
      if (data.success) {
        setIsLoggedIn(true);
        setUser(data.user);
        localStorage.setItem('authToken', data.token);
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      alert('Signup failed. Please try again.');
    }
  };

  // Оновлена функція екстреного виклику
  const handleEmergencyCall = async () => {
    if (confirm("Call Emergency Services (112)?")) {
      try {
        const data = await apiRequest('/emergency-call', {
          method: 'POST',
          body: JSON.stringify({ user_id: user?.id }),
        });
        
        if (data.success) {
          alert("Emergency services notified and family members alerted");
        }
      } catch (error) {
        // У разі помилки API, все одно намагаємося здійснити виклик
        alert("Calling 112...\n\nIn a real app, this would dial emergency services.");
      }
    }
  };

  // Завантаження даних при вході
  useEffect(() => {
    if (isLoggedIn && user) {
      // Завантажити дані для поточного екрану
      loadScreenData(currentScreen);
    }
  }, [isLoggedIn, currentScreen]);

  const loadScreenData = async (screen: Screen) => {
    try {
      switch (screen) {
        case 'family':
          const familyData = await apiRequest('/family-members');
          // Передайте дані в компонент FamilyScreen
          console.log('Family data:', familyData);
          break;
        case 'events':
          const eventsData = await apiRequest('/events');
          // Передайте дані в компонент EventsScreen
          console.log('Events data:', eventsData);
          break;
        case 'reminders':
          const remindersData = await apiRequest('/reminders');
          // Передайте дані в компонент RemindersScreen
          console.log('Reminders data:', remindersData);
          break;
        case 'feed':
          const feedData = await apiRequest('/feed');
          console.log('Feed data:', feedData);
          break;
        case 'diary':
          const diaryData = await apiRequest('/diary');
          console.log('Diary data:', diaryData);
          break;
        // ... інші екрани
      }
    } catch (error) {
      console.error('Failed to load screen data:', error);
    }
  };

  // Якщо не залогінений, показуємо auth екрани
  if (!isLoggedIn) {
    if (authScreen === "signup") {
      return (
        <AppProvider>
          <SignUpScreen
            onSignUp={handleSignUp}
            onBackToLogin={() => setAuthScreen("login")}
          />
        </AppProvider>
      );
    }
    return (
      <AppProvider>
        <LoginScreen
          onLogin={handleLogin}
          onSignUp={() => setAuthScreen("signup")}
        />
      </AppProvider>
    );
  }

  // Якщо в voice mode, показуємо voice control interface
  if (appMode === "voice") {
    return (
      <AppProvider>
        <div
          className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50"
          style={{
            fontSize:
              textSizeMultiplier === 1.5 ? "1.5rem" : "1rem",
          }}
        >
          <VoiceControlMode />

        {/* Mode Switch Button */}
        <button
          onClick={() => setAppMode("standard")}
          className="fixed top-4 left-4 bg-white rounded-full p-4 shadow-lg border-2 border-purple-200 z-50 flex items-center gap-2"
        >
          <Menu className="w-8 h-8 text-purple-700" />
          <span className="text-lg font-bold text-purple-700">
            Standard Mode
          </span>
        </button>

        {/* Text Size Toggle */}
        <button
          onClick={() =>
            setTextSizeMultiplier(
              textSizeMultiplier === 1 ? 1.5 : 1,
            )
          }
          className="fixed top-4 right-4 bg-white rounded-full p-4 shadow-lg border-2 border-purple-200 z-50"
          title="Toggle larger text"
        >
          <span className="text-2xl font-bold text-purple-700">
            A{textSizeMultiplier === 1 ? "-" : "+"}
          </span>
        </button>

        {/* Emergency Call Button */}
        <button
          onClick={handleEmergencyCall}
          className="fixed bottom-28 left-4 bg-red-500 rounded-full p-4 shadow-lg hover:shadow-xl transition-all active:scale-95 z-50 border-2 border-red-700"
          title="Emergency Call - Tap to call 112"
        >
          <PhoneCall
            className="w-8 h-8 text-white"
          strokeWidth={3}
        />
      </button>
      </div>
      </AppProvider>
    );
  }

  // Оновіть ваші компоненти, щоб вони приймали дані з API
  const renderScreen = () => {
    const screenProps: ScreenProps = {
      onMenuClick: () => setShowModeMenu(!showModeMenu),
      onTextSizeToggle: () => setTextSizeMultiplier(textSizeMultiplier === 1 ? 1.5 : 1),
      textSizeMultiplier,
      user,
      onApiRequest: apiRequest,
    };

    switch (currentScreen) {
      case "home":
        return <HomeScreen {...screenProps} onNavigate={setCurrentScreen} />;
      case "family":
        return <FamilyScreen {...screenProps} />;
      case "events":
        return <EventsScreen {...screenProps} />;
      case "reminders":
        return <RemindersScreen {...screenProps} />;
      case "feed":
        return <FamilyFeedScreen {...screenProps} />;
      case "diary":
        return <PersonalDiaryScreen {...screenProps} />;
      case "profile":
        return <ProfileScreen {...screenProps} />;
      case "settings":
        return <SettingsScreen {...screenProps} />;
      default:
        return <HomeScreen {...screenProps} onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <AppProvider>
      <div
        className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col"
        style={{
          fontSize:
            textSizeMultiplier === 1.5 ? "1.5rem" : "1rem",
        }}
      >
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {renderScreen()}
      </div>

      {/* Persistent Mic Button - Smaller */}
      <button
        onClick={() => {
          alert("Voice Assistant activated");
        }}
        className="fixed bottom-28 right-4 z-40 rounded-full p-4 shadow-lg transition-all active:scale-95 bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-xl"
        title="Voice Assistant"
      >
        <Mic className="w-8 h-8 text-white" strokeWidth={2.5} />
      </button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-purple-200 shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-6 items-center py-2 px-1">
          <button
            onClick={() => setCurrentScreen("home")}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-colors ${
              currentScreen === "home"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600"
            }`}
          >
            <Home className="w-7 h-7" strokeWidth={2.5} />
            <span className="text-xs font-semibold">Home</span>
          </button>

          <button
            onClick={() => setCurrentScreen("feed")}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-colors ${
              currentScreen === "feed"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600"
            }`}
          >
            <Image className="w-7 h-7" strokeWidth={2.5} />
            <span className="text-xs font-semibold">
              Photos
            </span>
          </button>

          <button
            onClick={() => setCurrentScreen("family")}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-colors ${
              currentScreen === "family"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600"
            }`}
          >
            <Users className="w-7 h-7" strokeWidth={2.5} />
            <span className="text-xs font-semibold">
              Family
            </span>
          </button>

          <button
            onClick={() => setCurrentScreen("events")}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-colors ${
              currentScreen === "events"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600"
            }`}
          >
            <Calendar className="w-7 h-7" strokeWidth={2.5} />
            <span className="text-xs font-semibold">
              Events
            </span>
          </button>

          <button
            onClick={() => setCurrentScreen("diary")}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-colors ${
              currentScreen === "diary"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600"
            }`}
          >
            <BookOpen className="w-7 h-7" strokeWidth={2.5} />
            <span className="text-xs font-semibold">Diary</span>
          </button>

          <button
            onClick={() => setCurrentScreen("reminders")}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-colors ${
              currentScreen === "reminders"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600"
            }`}
          >
            <Bell className="w-7 h-7" strokeWidth={2.5} />
            <span className="text-xs font-semibold">Meds</span>
          </button>
        </div>
      </nav>

      {showModeMenu && (
        <div className="fixed top-20 left-4 bg-white rounded-3xl p-4 shadow-xl border-2 border-purple-200 z-50 space-y-3 min-w-[280px]">
          <button
            onClick={() => {
              setCurrentScreen("profile");
              setShowModeMenu(false);
            }}
            className={`w-full text-left px-6 py-4 rounded-2xl text-xl font-bold transition-colors flex items-center gap-3 ${
              currentScreen === "profile"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <User className="w-6 h-6" />
            My Profile
          </button>
          <button
            onClick={() => {
              setCurrentScreen("settings");
              setShowModeMenu(false);
            }}
            className={`w-full text-left px-6 py-4 rounded-2xl text-xl font-bold transition-colors flex items-center gap-3 ${
              currentScreen === "settings"
                ? "bg-purple-100 text-purple-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Settings className="w-6 h-6" />
            Settings
          </button>
          <div className="border-t-2 border-gray-200 my-2"></div>
          <button
            onClick={() => {
              setAppMode("voice");
              setShowModeMenu(false);
            }}
            className="w-full text-left px-6 py-4 rounded-2xl text-xl font-bold text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-3"
          >
            <Mic className="w-6 h-6" />
            Voice Control Mode
          </button>
        </div>
      )}

      {/* Emergency Call Button - Smaller */}
      <button
        onClick={handleEmergencyCall}
        className="fixed bottom-28 left-4 bg-red-500 rounded-full p-4 shadow-lg hover:shadow-xl transition-all active:scale-95 z-50 border-2 border-red-700"
        title="Emergency Call - Tap to call 112"
      >
        <PhoneCall
          className="w-8 h-8 text-white"
          strokeWidth={3}
        />
      </button>
    </div>
    </AppProvider>
  );
}