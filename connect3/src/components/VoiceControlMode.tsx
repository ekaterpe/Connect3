import { Mic, MicOff, Volume2, Phone, Video, MessageCircle, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VoiceFamilyPhotos } from './VoiceFamilyPhotos';

interface Contact {
  id: string;
  name: string;
  relationship: string;
  photo: string;
  status?: string;
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah',
    relationship: 'Daughter',
    photo: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Available now'
  },
  {
    id: '2',
    name: 'Michael',
    relationship: 'Son',
    photo: 'https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxOTM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'At work'
  },
  {
    id: '3',
    name: 'Emma',
    relationship: 'Granddaughter',
    photo: 'https://images.unsplash.com/photo-1758686254563-5c5ab338c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2MzE5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Online'
  },
  {
    id: '4',
    name: 'Robert',
    relationship: 'Brother',
    photo: 'https://images.unsplash.com/photo-1758686253859-8ef7e940096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Available'
  },
  {
    id: '5',
    name: 'Linda & Tom',
    relationship: 'Friends',
    photo: 'https://images.unsplash.com/photo-1761839257647-df30867afd54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Available'
  }
];

export function VoiceControlMode() {
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const [lastCommand, setLastCommand] = useState('');
  const [showFamilyPhotos, setShowFamilyPhotos] = useState(false);

  const startListening = () => {
    setIsListening(true);
    setVoiceCommand('Listening...');
    
    // Simulate voice recognition
    setTimeout(() => {
      const commands = [
        'Call Sarah',
        'Show my reminders',
        'What events are today?',
        'Video call Michael',
        'Show family photos'
      ];
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      setVoiceCommand(randomCommand);
      setLastCommand(randomCommand);
      
      setTimeout(() => {
        setIsListening(false);
        setVoiceCommand('');
        
        // Handle "Show family photos" command
        if (randomCommand === 'Show family photos') {
          setShowFamilyPhotos(true);
        }
      }, 2000);
    }, 1500);
  };

  // Show family photos viewer if triggered
  if (showFamilyPhotos) {
    return <VoiceFamilyPhotos onClose={() => setShowFamilyPhotos(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Volume2 className="w-12 h-12 text-purple-600" strokeWidth={2.5} />
            <h1 className="text-4xl font-bold text-gray-800">Voice Control</h1>
          </div>
          <p className="text-2xl text-gray-600">Say a name to call or ask a question</p>
        </div>

        {/* Voice Status */}
        {(isListening || lastCommand) && (
          <div className={`rounded-3xl p-8 shadow-lg border-2 text-center ${
            isListening 
              ? 'bg-purple-100 border-purple-300 animate-pulse' 
              : 'bg-green-100 border-green-300'
          }`}>
            <p className="text-3xl font-bold text-gray-800">
              {isListening ? '🎤 Listening...' : '✓ Command Received'}
            </p>
            <p className="text-2xl text-gray-600 mt-3">
              {voiceCommand || lastCommand}
            </p>
          </div>
        )}

        {/* Large Microphone Button */}
        <button
          onClick={() => startListening()}
          disabled={isListening}
          className={`w-full rounded-3xl p-12 shadow-xl transition-all active:scale-95 ${
            isListening
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-2xl'
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            {isListening ? (
              <MicOff className="w-32 h-32 text-white" strokeWidth={2} />
            ) : (
              <Mic className="w-32 h-32 text-white" strokeWidth={2} />
            )}
            <span className="text-4xl font-bold text-white">
              {isListening ? 'Listening...' : 'Tap to Speak'}
            </span>
          </div>
        </button>

        {/* Voice Commands Help */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Try saying:</h3>
          <ul className="space-y-3 text-xl text-gray-600">
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-500" />
              "Call [name]"
            </li>
            <li className="flex items-center gap-3">
              <Video className="w-6 h-6 text-blue-500" />
              "Video call [name]"
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-blue-500" />
              "Send message to [name]"
            </li>
            <li className="flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-blue-500" />
              "Show family photos"
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}