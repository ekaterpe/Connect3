import { BookOpen, Phone, Video, MessageCircle, Image, Footprints, Share2, Lock, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { ScreenHeader } from './ScreenHeader';

interface DiaryEntry {
  id: string;
  type: 'call' | 'video' | 'message' | 'photo' | 'activity';
  title: string;
  description: string;
  time: string;
  isShared: boolean;
}

interface CheckInEntry {
  id: string;
  date: string;
  questions: {
    question: string;
    answered: boolean;
    response?: string;
  }[];
  summary: string;
}

const diaryEntries: DiaryEntry[] = [
  {
    id: '1',
    type: 'call',
    title: 'Phone Call with Sarah',
    description: 'You talked to Sarah today',
    time: '10:42 AM',
    isShared: false
  },
  {
    id: '2',
    type: 'activity',
    title: 'Morning Stretch',
    description: 'You completed your morning stretch routine',
    time: '9:15 AM',
    isShared: false
  },
  {
    id: '3',
    type: 'photo',
    title: 'Viewed Family Photos',
    description: 'You viewed family photos',
    time: '2 hours ago',
    isShared: false
  },
  {
    id: '4',
    type: 'video',
    title: 'Video Call with Emma',
    description: 'You had a video call with Emma',
    time: 'Yesterday at 3:30 PM',
    isShared: true
  },
  {
    id: '5',
    type: 'message',
    title: 'Message from Michael',
    description: 'You received and read a message from Michael',
    time: 'Yesterday at 11:20 AM',
    isShared: false
  },
  {
    id: '6',
    type: 'activity',
    title: 'Afternoon Walk',
    description: 'You walked 2,547 steps in the park',
    time: 'Yesterday at 4:00 PM',
    isShared: true
  }
];

const checkInEntries: CheckInEntry[] = [
  {
    id: '1',
    date: 'Today',
    questions: [
      { question: 'How are you feeling this morning?', answered: true, response: 'Feeling good!' },
      { question: 'Did you sleep well?', answered: true, response: 'Yes, slept 7 hours' },
      { question: 'Do you want to talk to someone today?', answered: true, response: 'Yes, want to call Anna' },
      { question: 'Any pain or discomfort?', answered: true, response: 'No pain today' },
      { question: 'Do you want me to remind you to drink water?', answered: true, response: 'Yes please' }
    ],
    summary: 'Today you said you slept well and wanted to call Anna. No pain reported. Water reminders set.'
  },
  {
    id: '2',
    date: 'Yesterday',
    questions: [
      { question: 'How are you feeling this morning?', answered: true, response: 'A bit tired' },
      { question: 'Did you sleep well?', answered: true, response: 'Slept okay, woke up twice' },
      { question: 'Do you want to talk to someone today?', answered: true, response: 'Video call with Emma' },
      { question: 'Any pain or discomfort?', answered: true, response: 'Mild knee pain' },
      { question: 'Did you take your morning medication?', answered: true, response: 'Yes, all taken' }
    ],
    summary: 'Yesterday you felt a bit tired and reported mild knee pain. You video called Emma and took all medications.'
  }
];

export function PersonalDiaryScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const [entries, setEntries] = useState(diaryEntries);
  const [shareWithFamily, setShareWithFamily] = useState(true);
  const [activeTab, setActiveTab] = useState<'activity' | 'checkin'>('activity');

  const toggleShare = (entryId: string) => {
    setEntries(entries.map(entry => 
      entry.id === entryId 
        ? { ...entry, isShared: !entry.isShared }
        : entry
    ));
  };

  const getIcon = (type: DiaryEntry['type']) => {
    switch (type) {
      case 'call':
        return <Phone className="w-8 h-8 text-blue-600" strokeWidth={2.5} />;
      case 'video':
        return <Video className="w-8 h-8 text-purple-600" strokeWidth={2.5} />;
      case 'message':
        return <MessageCircle className="w-8 h-8 text-green-600" strokeWidth={2.5} />;
      case 'photo':
        return <Image className="w-8 h-8 text-pink-600" strokeWidth={2.5} />;
      case 'activity':
        return <Footprints className="w-8 h-8 text-orange-600" strokeWidth={2.5} />;
    }
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
          <BookOpen className="w-10 h-10 text-blue-600" strokeWidth={2.5} />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Diary</h1>
            <p className="text-xl text-gray-600">Your daily activities and connections</p>
          </div>
        </div>

        {/* Share Toggle */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-6 shadow-lg border-2 border-green-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Share2 className="w-10 h-10 text-green-600" strokeWidth={2.5} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Share with Family</h2>
                <p className="text-lg text-gray-600">Let family see your daily activities</p>
              </div>
            </div>
            <button
              onClick={() => setShareWithFamily(!shareWithFamily)}
              className={`w-24 h-12 rounded-full transition-all ${
                shareWithFamily ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div className={`w-10 h-10 bg-white rounded-full shadow-md transition-all ${
                shareWithFamily ? 'ml-12' : 'ml-1'
              }`} />
            </button>
          </div>
          {shareWithFamily ? (
            <p className="text-lg text-green-700 font-semibold">✓ Family can see your activity summary</p>
          ) : (
            <p className="text-lg text-gray-600 flex items-center gap-2">
              <Lock className="w-5 h-5" /> Your diary is private
            </p>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-3xl p-2 shadow-lg border-2 border-gray-100 grid grid-cols-2 gap-2">
          <button
            onClick={() => setActiveTab('activity')}
            className={`py-4 px-6 rounded-2xl text-xl font-bold transition-all ${
              activeTab === 'activity'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            Activity Log
          </button>
          <button
            onClick={() => setActiveTab('checkin')}
            className={`py-4 px-6 rounded-2xl text-xl font-bold transition-all ${
              activeTab === 'checkin'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            Daily Check-In
          </button>
        </div>

        {/* Activity Log Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Activity Log</h2>
            
            <div className="space-y-4">
              {entries.map((entry, index) => (
                <div
                  key={entry.id}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-white rounded-xl p-3 flex-shrink-0 shadow-sm">
                      {getIcon(entry.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{entry.title}</h3>
                      <p className="text-xl text-gray-600 mb-2">{entry.description}</p>
                      <p className="text-lg text-gray-500">{entry.time}</p>
                    </div>

                    {/* Share Toggle for Individual Entry */}
                    {shareWithFamily && (
                      <button
                        onClick={() => toggleShare(entry.id)}
                        className={`flex-shrink-0 p-3 rounded-xl transition-all ${
                          entry.isShared 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-500'
                        }`}
                        title={entry.isShared ? 'Shared with family' : 'Private'}
                      >
                        {entry.isShared ? (
                          <Share2 className="w-7 h-7" strokeWidth={2.5} />
                        ) : (
                          <Lock className="w-7 h-7" strokeWidth={2.5} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Daily Check-In Tab */}
        {activeTab === 'checkin' && (
          <div className="space-y-4">
            {checkInEntries.map((checkIn) => (
              <div key={checkIn.id} className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-10 h-10 text-purple-600" strokeWidth={2.5} />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{checkIn.date}</h3>
                    <p className="text-lg text-gray-600">Daily Check-In</p>
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-4 mb-6">
                  {checkIn.questions.map((q, idx) => (
                    <div key={idx} className="bg-purple-50 rounded-2xl p-5 border-2 border-purple-100">
                      <div className="flex items-start gap-3 mb-2">
                        {q.answered ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="text-xl font-semibold text-gray-800 mb-2">{q.question}</p>
                          {q.answered && q.response && (
                            <p className="text-lg text-purple-700 bg-white rounded-xl p-3 border border-purple-200">
                              💬 "{q.response}"
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-5 text-white">
                  <p className="text-lg font-semibold mb-2">📝 Daily Summary:</p>
                  <p className="text-xl">{checkIn.summary}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Voice Instructions */}
        <div className="bg-purple-50 rounded-3xl p-6 border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Voice Commands</h3>
          <ul className="space-y-3 text-xl text-purple-800">
            <li>• "Show my diary"</li>
            <li>• "What did I do today?"</li>
            <li>• "Share today with my son"</li>
            <li>• "Show daily check-in"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}