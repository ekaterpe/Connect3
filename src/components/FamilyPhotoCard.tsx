import { Clock, Heart, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FamilyPhotoCardProps {
  name: string;
  relationship: string;
  photo: string;
  status?: string;
  lastActivity?: string;
  healthNote?: string;
}

export function FamilyPhotoCard({ 
  name, 
  relationship, 
  photo, 
  status, 
  lastActivity,
  healthNote 
}: FamilyPhotoCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-blue-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Photo */}
        <ImageWithFallback
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-sm flex-shrink-0"
        />
        
        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-lg text-gray-600 mb-3">{relationship}</p>
          
          {/* Status & Activity */}
          <div className="space-y-2">
            {status && (
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="text-base text-gray-700">{status}</p>
              </div>
            )}
            
            {lastActivity && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <p className="text-base text-gray-600">{lastActivity}</p>
              </div>
            )}
            
            {healthNote && (
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-base text-gray-700">{healthNote}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
