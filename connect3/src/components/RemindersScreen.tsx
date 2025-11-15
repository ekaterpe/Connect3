import { Pill, Clock, Check, Plus } from 'lucide-react';
import { useState } from 'react';
import { ScreenHeader } from './ScreenHeader';

interface Reminder {
  id: string;
  medicationName: string;
  time: string;
  dosage: string;
  taken: boolean;
}

const initialReminders: Reminder[] = [
  {
    id: '1',
    medicationName: 'Blood Pressure Medication',
    time: '8:00 AM',
    dosage: '1 tablet',
    taken: true
  },
  {
    id: '2',
    medicationName: 'Vitamin D',
    time: '12:00 PM',
    dosage: '1 capsule',
    taken: false
  },
  {
    id: '3',
    medicationName: 'Evening Medication',
    time: '6:00 PM',
    dosage: '2 tablets',
    taken: false
  }
];

export function RemindersScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const [reminders, setReminders] = useState(initialReminders);
  const [showAddForm, setShowAddForm] = useState(false);

  const markAsTaken = (reminderId: string) => {
    setReminders(reminders.map(reminder => 
      reminder.id === reminderId 
        ? { ...reminder, taken: !reminder.taken }
        : reminder
    ));
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

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
          <Pill className="w-10 h-10 text-purple-600" strokeWidth={2.5} />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Reminders</h1>
            <p className="text-xl text-gray-600">Today's medications</p>
          </div>
        </div>

        {/* Reminder Cards */}
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className={`bg-white rounded-3xl p-6 shadow-lg border-2 transition-all ${
                reminder.taken 
                  ? 'border-green-300 bg-green-50 opacity-75' 
                  : 'border-purple-200'
              }`}
            >
              {/* Reminder Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`rounded-2xl p-4 ${
                  reminder.taken ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  <Pill className={`w-12 h-12 ${
                    reminder.taken ? 'text-green-600' : 'text-purple-600'
                  }`} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className={`text-2xl font-bold mb-2 ${
                    reminder.taken ? 'text-gray-500 line-through' : 'text-gray-800'
                  }`}>
                    {reminder.medicationName}
                  </h2>
                  <div className="space-y-1">
                    <p className="text-xl text-gray-600">
                      <span className="font-semibold">Time:</span> {reminder.time}
                    </p>
                    <p className="text-xl text-gray-600">
                      <span className="font-semibold">Dosage:</span> {reminder.dosage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => markAsTaken(reminder.id)}
                className={`w-full rounded-2xl p-5 text-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-3 ${
                  reminder.taken
                    ? 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {reminder.taken ? (
                  <>
                    <Check className="w-8 h-8" strokeWidth={3} />
                    Taken
                  </>
                ) : (
                  <>
                    Mark as Taken
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Add New Reminder Button */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-4"
        >
          <Plus className="w-10 h-10" strokeWidth={2.5} />
          <span className="text-2xl font-bold">Add New Reminder</span>
        </button>

        {/* Simple Add Form (placeholder) */}
        {showAddForm && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">New Reminder</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xl font-semibold text-gray-700 mb-3">
                  Medication Name
                </label>
                <input
                  type="text"
                  placeholder="Enter medication name"
                  className="w-full text-xl p-4 border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xl font-semibold text-gray-700 mb-3">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full text-xl p-4 border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-200 text-gray-700 rounded-2xl p-4 text-xl font-bold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Reminder added!');
                    setShowAddForm(false);
                  }}
                  className="bg-purple-500 text-white rounded-2xl p-4 text-xl font-bold hover:bg-purple-600 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}