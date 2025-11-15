import { useState } from "react";
import { SignUpScreen } from "./components/SignUpScreen";
import { LoginScreen } from "./components/LoginScreen";
import { HomeScreen } from "./components/HomeScreen";
import { FamilyScreen } from "./components/FamilyScreen";
import { EventsScreen } from "./components/EventsScreen";
import { RemindersScreen } from "./components/RemindersScreen";
import { FamilyFeedScreen } from "./components/FamilyFeedScreen";
import { PersonalDiaryScreen } from "./components/PersonalDiaryScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { VoiceControlMode } from "./components/VoiceControlMode";
import { PersistentMicButton } from "./components/PersistentMicButton";
import {
  Home,
  Users,
  Calendar,
  Bell,
  Mic,
  Menu,
  Image,
  BookOpen,
  User,
  Settings,
  PhoneCall,
} from "lucide-react";

type Screen =
  | "home"
  | "family"
  | "events"
  | "reminders"
  | "feed"
  | "diary"
  | "profile"
  | "settings";
type AppMode = "standard" | "voice";
type AuthScreen = "login" | "signup";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authScreen, setAuthScreen] =
    useState<AuthScreen>("login");
  const [appMode, setAppMode] = useState<AppMode>("standard");
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("home");
  const [textSizeMultiplier, setTextSizeMultiplier] =
    useState(1);
  const [showModeMenu, setShowModeMenu] = useState(false);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle signup
  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  // Handle emergency call
  const handleEmergencyCall = () => {
    if (confirm("Call Emergency Services (112)?")) {
      alert(
        "Calling 112...\n\nIn a real app, this would dial emergency services.",
      );
    }
  };

  // If not logged in, show auth screens
  if (!isLoggedIn) {
    if (authScreen === "signup") {
      return (
        <SignUpScreen
          onSignUp={handleSignUp}
          onBackToLogin={() => setAuthScreen("login")}
        />
      );
    }
    return (
      <LoginScreen
        onLogin={handleLogin}
        onSignUp={() => setAuthScreen("signup")}
      />
    );
  }

  // If in voice mode, show voice control interface
  if (appMode === "voice") {
    return (
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
    );
  }

  const renderScreen = () => {
    const headerProps = {
      onMenuClick: () => setShowModeMenu(!showModeMenu),
      onTextSizeToggle: () =>
        setTextSizeMultiplier(
          textSizeMultiplier === 1 ? 1.5 : 1,
        ),
      textSizeMultiplier,
    };

    switch (currentScreen) {
      case "home":
        return (
          <HomeScreen
            onNavigate={setCurrentScreen}
            onMenuClick={headerProps.onMenuClick}
            onTextSizeToggle={headerProps.onTextSizeToggle}
            textSizeMultiplier={headerProps.textSizeMultiplier}
          />
        );
      case "family":
        return <FamilyScreen {...headerProps} />;
      case "events":
        return <EventsScreen {...headerProps} />;
      case "reminders":
        return <RemindersScreen {...headerProps} />;
      case "feed":
        return <FamilyFeedScreen {...headerProps} />;
      case "diary":
        return <PersonalDiaryScreen {...headerProps} />;
      case "profile":
        return <ProfileScreen {...headerProps} />;
      case "settings":
        return <SettingsScreen {...headerProps} />;
      default:
        return (
          <HomeScreen
            onNavigate={setCurrentScreen}
            {...headerProps}
          />
        );
    }
  };

  return (
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
  );
}