import { Pill, Clock, Check, Plus, X, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ScreenHeader } from './ScreenHeader';
import { useApp } from '../context/AppContext';

interface Reminder {
  id: string;
  medicationName: string;
  time: string;
  dosage: string;
  taken: boolean;
}

export function RemindersScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const { reminders, addReminder, updateReminder, deleteReminder } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedicationName, setNewMedicationName] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newDosage, setNewDosage] = useState('1 tablet');

  const markAsTaken = (reminderId: string) => {
    const reminder = reminders.find(r => r.id === reminderId);
    if (reminder) {
      updateReminder(reminderId, { taken: !reminder.taken });
    }
  };

  const handleAddReminder = () => {
    if (newMedicationName.trim() && newTime.trim()) {
      addReminder({
        medicationName: newMedicationName,
        time: newTime,
        dosage: newDosage,
        taken: false,
      });
      setNewMedicationName('');
      setNewTime('');
      setNewDosage('1 tablet');
      setShowAddForm(false);
      alert('Напоминание добавлено!');
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  const handleDeleteReminder = (reminderId: string) => {
    if (confirm('Удалить это напоминание?')) {
      deleteReminder(reminderId);
    }
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

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleDeleteReminder(reminder.id)}
                  className="p-4 bg-red-100 text-red-700 rounded-2xl hover:bg-red-200 transition-colors"
                  title="Удалить напоминание"
                >
                  <Trash2 className="w-8 h-8" strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => markAsTaken(reminder.id)}
                  className={`flex-1 rounded-3xl p-6 text-2xl font-bold transition-all active:scale-98 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl ${
                    reminder.taken
                      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                  }`}
                >
                  {reminder.taken ? (
                    <>
                      <Check className="w-10 h-10" strokeWidth={3} />
                      Принято
                    </>
                  ) : (
                    <>
                      Отметить как принято
                    </>
                  )}
                </button>
              </div>
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

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-800">Новое напоминание</h3>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setNewMedicationName('');
                  setNewTime('');
                  setNewDosage('1 tablet');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-8 h-8" strokeWidth={2.5} />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-3">
                  Название лекарства
                </label>
                <input
                  type="text"
                  value={newMedicationName}
                  onChange={(e) => setNewMedicationName(e.target.value)}
                  placeholder="Например: Таблетки от давления"
                  className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-3">
                  Время приема
                </label>
                <input
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full text-3xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-3">
                  Дозировка
                </label>
                <input
                  type="text"
                  value={newDosage}
                  onChange={(e) => setNewDosage(e.target.value)}
                  placeholder="Например: 1 таблетка"
                  className="w-full text-2xl p-6 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setNewMedicationName('');
                    setNewTime('');
                    setNewDosage('1 tablet');
                  }}
                  className="bg-gray-200 text-gray-700 rounded-2xl p-5 text-xl font-bold hover:bg-gray-300 transition-all active:scale-98"
                >
                  Отмена
                </button>
                <button
                  onClick={handleAddReminder}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-5 text-xl font-bold hover:shadow-lg transition-all active:scale-98"
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}