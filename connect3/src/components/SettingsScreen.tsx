import { Settings, Bell, Eye, Volume2, Info, ChevronRight, ToggleLeft, ToggleRight } from 'lucide-react';
import { useState } from 'react';
import { ScreenHeader } from './ScreenHeader';

export function SettingsScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const [notifications, setNotifications] = useState({
    reminders: true,
    familyPhotos: true,
    events: false,
    dailyCheckIn: true
  });

  const [accessibility, setAccessibility] = useState({
    largeText: false,
    highContrast: true,
    voiceGuidance: true,
    reduceMotion: false
  });

  const appVersion = '2.0.1';
  const buildDate = 'November 2025';

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <ScreenHeader
        onMenuClick={onMenuClick}
        onTextSizeToggle={onTextSizeToggle}
        textSizeMultiplier={textSizeMultiplier}
        showTasksButton={false}
      />

      <div className="p-6 space-y-6">
        {/* Page Title */}
        <div className="flex items-center gap-4">
          <Settings className="w-10 h-10 text-gray-700" strokeWidth={2.5} />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
            <p className="text-xl text-gray-600">Customize your app experience</p>
          </div>
        </div>

        {/* App Version Info */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 rounded-2xl p-3">
              <Info className="w-9 h-9 text-blue-600" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">App Information</h2>
          </div>
          <div className="space-y-3 pl-16">
            <div>
              <p className="text-lg text-gray-600">Version</p>
              <p className="text-2xl font-bold text-gray-800">{appVersion}</p>
            </div>
            <div>
              <p className="text-lg text-gray-600">Last Updated</p>
              <p className="text-2xl font-bold text-gray-800">{buildDate}</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 rounded-2xl p-3">
              <Bell className="w-9 h-9 text-purple-600" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Notifications</h2>
          </div>

          <div className="space-y-4">
            {/* Reminders */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Medication Reminders</h3>
                <p className="text-lg text-gray-600">Get alerts for medications</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, reminders: !notifications.reminders })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  notifications.reminders ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {notifications.reminders ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>

            {/* Family Photos */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Family Photos</h3>
                <p className="text-lg text-gray-600">New photo notifications</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, familyPhotos: !notifications.familyPhotos })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  notifications.familyPhotos ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {notifications.familyPhotos ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>

            {/* Events */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Events Nearby</h3>
                <p className="text-lg text-gray-600">Local activity alerts</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, events: !notifications.events })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  notifications.events ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {notifications.events ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>

            {/* Daily Check-In */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Daily Check-In</h3>
                <p className="text-lg text-gray-600">Morning wellness reminder</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, dailyCheckIn: !notifications.dailyCheckIn })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  notifications.dailyCheckIn ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {notifications.dailyCheckIn ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 rounded-2xl p-3">
              <Eye className="w-9 h-9 text-green-600" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Accessibility</h2>
          </div>

          <div className="space-y-4">
            {/* Large Text */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Extra Large Text</h3>
                <p className="text-lg text-gray-600">Increase text size</p>
              </div>
              <button
                onClick={() => setAccessibility({ ...accessibility, largeText: !accessibility.largeText })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  accessibility.largeText ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {accessibility.largeText ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">High Contrast</h3>
                <p className="text-lg text-gray-600">Better visibility</p>
              </div>
              <button
                onClick={() => setAccessibility({ ...accessibility, highContrast: !accessibility.highContrast })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  accessibility.highContrast ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {accessibility.highContrast ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>

            {/* Voice Guidance */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Voice Guidance</h3>
                <p className="text-lg text-gray-600">Spoken instructions</p>
              </div>
              <button
                onClick={() => setAccessibility({ ...accessibility, voiceGuidance: !accessibility.voiceGuidance })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  accessibility.voiceGuidance ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {accessibility.voiceGuidance ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>

            {/* Reduce Motion */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Reduce Motion</h3>
                <p className="text-lg text-gray-600">Minimize animations</p>
              </div>
              <button
                onClick={() => setAccessibility({ ...accessibility, reduceMotion: !accessibility.reduceMotion })}
                className={`p-2 rounded-2xl transition-all active:scale-95 ${
                  accessibility.reduceMotion ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {accessibility.reduceMotion ? (
                  <ToggleRight className="w-14 h-14 text-white" strokeWidth={2.5} />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-gray-600" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Sound Settings */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-amber-100 rounded-2xl p-3">
              <Volume2 className="w-9 h-9 text-amber-600" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Sound</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Notification Sound</h3>
              <button className="w-full bg-white border-2 border-gray-300 rounded-2xl p-4 text-xl text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between">
                <span>Default</span>
                <ChevronRight className="w-7 h-7 text-gray-400" strokeWidth={2.5} />
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ringtone</h3>
              <button className="w-full bg-white border-2 border-gray-300 rounded-2xl p-4 text-xl text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between">
                <span>Classic</span>
                <ChevronRight className="w-7 h-7 text-gray-400" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h3>
          <p className="text-xl text-gray-700 mb-4">
            Contact support or view the help guide
          </p>
          <button className="w-full bg-blue-500 text-white rounded-2xl p-5 text-xl font-bold hover:bg-blue-600 transition-colors active:scale-95">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}