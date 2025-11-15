import { ChevronLeft, ChevronRight, Heart, Mic, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhotoPost {
  id: string;
  authorName: string;
  authorPhoto: string;
  photo: string;
  caption?: string;
  isLiked: boolean;
}

const photos: PhotoPost[] = [
  {
    id: '1',
    authorName: 'Sarah',
    authorPhoto: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1726731819337-d337f181bd85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjBoYXBweXxlbnwxfHx8fDE3NjMyMDE5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Sunday dinner with the family!',
    isLiked: false
  },
  {
    id: '2',
    authorName: 'Emma',
    authorPhoto: 'https://images.unsplash.com/photo-1758686254563-5c5ab338c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2MzE5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1617362253085-742c88e3385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMGdyYW5kY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc2MzIwMTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Playing in the backyard!',
    isLiked: true
  },
  {
    id: '3',
    authorName: 'Michael',
    authorPhoto: 'https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxOTM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1639165426321-f3520a0a555c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwYXJrJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjMyMDE5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Beautiful day at the park',
    isLiked: false
  },
  {
    id: '4',
    authorName: 'Sarah',
    authorPhoto: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1664289597477-d5b2d266169d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjMxNzA5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: "Dad's birthday celebration! 🎉",
    isLiked: true
  },
  {
    id: '5',
    authorName: 'Robert',
    authorPhoto: 'https://images.unsplash.com/photo-1758686253859-8ef7e940096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    photo: 'https://images.unsplash.com/photo-1719728615484-063bf2ab17c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBmbG93ZXJzJTIwbmF0dXJlfGVufDF8fHx8MTc2MzEzODMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'My garden is blooming beautifully',
    isLiked: false
  }
];

interface VoiceFamilyPhotosProps {
  onClose: () => void;
}

export function VoiceFamilyPhotos({ onClose }: VoiceFamilyPhotosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photoData, setPhotoData] = useState(photos);
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');

  const currentPhoto = photoData[currentIndex];

  const nextPhoto = () => {
    if (currentIndex < photoData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousPhoto = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleLike = () => {
    setPhotoData(photoData.map(photo => 
      photo.id === currentPhoto.id 
        ? { ...photo, isLiked: !photo.isLiked }
        : photo
    ));
  };

  const startListening = () => {
    setIsListening(true);
    setVoiceCommand('Listening...');
    
    // Simulate voice recognition
    setTimeout(() => {
      const commands = ['Next photo', 'Like this', 'Previous photo'];
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      setVoiceCommand(randomCommand);
      
      // Execute command
      setTimeout(() => {
        if (randomCommand === 'Next photo') {
          nextPhoto();
        } else if (randomCommand === 'Like this') {
          handleLike();
        } else if (randomCommand === 'Previous photo') {
          previousPhoto();
        }
        setIsListening(false);
        setVoiceCommand('');
      }, 1000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-black/80 to-transparent p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ImageWithFallback
            src={currentPhoto.authorPhoto}
            alt={currentPhoto.authorName}
            className="w-16 h-16 rounded-full object-cover border-4 border-white"
          />
          <div>
            <h2 className="text-3xl font-bold text-white">{currentPhoto.authorName}</h2>
            <p className="text-xl text-gray-300">Photo {currentIndex + 1} of {photoData.length}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors"
        >
          <X className="w-10 h-10 text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* Voice Status */}
      {isListening && (
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-purple-500 rounded-3xl px-8 py-6 shadow-xl z-10 animate-pulse">
          <p className="text-3xl font-bold text-white text-center">{voiceCommand}</p>
        </div>
      )}

      {/* Main Photo */}
      <div className="flex-1 flex items-center justify-center p-6">
        <ImageWithFallback
          src={currentPhoto.photo}
          alt={`Photo by ${currentPhoto.authorName}`}
          className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
        />
      </div>

      {/* Caption */}
      {currentPhoto.caption && (
        <div className="px-8 py-4">
          <p className="text-3xl text-white text-center font-semibold">{currentPhoto.caption}</p>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="bg-gradient-to-t from-black/80 to-transparent p-6 space-y-6">
        {/* Navigation Buttons */}
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          <button
            onClick={previousPhoto}
            disabled={currentIndex === 0}
            className={`flex items-center justify-center gap-3 p-6 rounded-3xl text-2xl font-bold transition-all ${
              currentIndex === 0
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-800 hover:bg-gray-100 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-12 h-12" strokeWidth={2.5} />
            Previous
          </button>

          <button
            onClick={handleLike}
            className={`flex items-center justify-center gap-3 p-6 rounded-3xl text-2xl font-bold transition-all active:scale-95 ${
              currentPhoto.isLiked
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            <Heart className={`w-12 h-12 ${currentPhoto.isLiked ? 'fill-white' : ''}`} strokeWidth={2.5} />
            {currentPhoto.isLiked ? 'Liked' : 'Like'}
          </button>

          <button
            onClick={nextPhoto}
            disabled={currentIndex === photoData.length - 1}
            className={`flex items-center justify-center gap-3 p-6 rounded-3xl text-2xl font-bold transition-all ${
              currentIndex === photoData.length - 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-800 hover:bg-gray-100 active:scale-95'
            }`}
          >
            Next
            <ChevronRight className="w-12 h-12" strokeWidth={2.5} />
          </button>
        </div>

        {/* Voice Button */}
        <button
          onClick={startListening}
          disabled={isListening}
          className={`w-full max-w-2xl mx-auto flex items-center justify-center gap-4 p-8 rounded-3xl text-3xl font-bold transition-all active:scale-95 ${
            isListening
              ? 'bg-red-500 hover:bg-red-600 animate-pulse'
              : 'bg-purple-500 hover:bg-purple-600'
          }`}
        >
          <Mic className="w-14 h-14 text-white" strokeWidth={2.5} />
          <span className="text-white">{isListening ? 'Listening...' : 'Voice Command'}</span>
        </button>

        {/* Voice Commands Help */}
        <div className="text-center space-y-2">
          <p className="text-xl text-gray-300">Try saying:</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <span className="text-lg text-white bg-white/20 px-4 py-2 rounded-full">"Next photo"</span>
            <span className="text-lg text-white bg-white/20 px-4 py-2 rounded-full">"Previous photo"</span>
            <span className="text-lg text-white bg-white/20 px-4 py-2 rounded-full">"Like this"</span>
          </div>
        </div>
      </div>
    </div>
  );
}
