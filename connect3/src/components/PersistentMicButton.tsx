import { Mic } from 'lucide-react';
import { useState } from 'react';

interface PersistentMicButtonProps {
  onVoiceCommand?: (command: string) => void;
}

export function PersistentMicButton({ onVoiceCommand }: PersistentMicButtonProps) {
  const [isListening, setIsListening] = useState(false);

  const handleMicClick = () => {
    setIsListening(true);
    
    // Simulate voice recognition
    setTimeout(() => {
      const commands = [
        'Call Sarah',
        'Show family photos',
        'What events are today?',
        'Show my reminders',
        'What did I do today?'
      ];
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      
      if (onVoiceCommand) {
        onVoiceCommand(randomCommand);
      } else {
        alert(`Voice command: "${randomCommand}"`);
      }
      
      setIsListening(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleMicClick}
      disabled={isListening}
      className={`fixed bottom-28 right-6 z-40 rounded-full p-6 shadow-2xl transition-all active:scale-95 ${
        isListening
          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
          : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-3xl'
      }`}
      title="Voice Assistant"
    >
      <Mic className="w-12 h-12 text-white" strokeWidth={2.5} />
      {isListening && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white px-6 py-3 rounded-2xl whitespace-nowrap">
          <p className="text-lg font-bold">Listening...</p>
        </div>
      )}
    </button>
  );
}
