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
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all active:scale-98">
      <div className="flex items-start gap-5">
        {/* Photo */}
        <div className="relative flex-shrink-0">
          <ImageWithFallback
            src={photo}
            alt={name}
            className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-lg flex-shrink-0"
          />
          {status === "Available" && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-sm"></div>
          )}
        </div>
        
        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-xl text-gray-600 mb-4 font-semibold">{relationship}</p>
          
          {/* Status & Activity */}
          <div className="space-y-3">
            {status && (
              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-3 py-2">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Activity className="w-6 h-6 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                </div>
                <p className="text-lg text-gray-800 font-semibold">{status}</p>
              </div>
            )}
            
            {lastActivity && (
              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-3 py-2">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Clock className="w-6 h-6 text-purple-600 flex-shrink-0" strokeWidth={2.5} />
                </div>
                <p className="text-lg text-gray-700 font-semibold">{lastActivity}</p>
              </div>
            )}
            
            {healthNote && (
              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-3 py-2">
                <div className="bg-red-100 rounded-lg p-2">
                  <Heart className="w-6 h-6 text-red-600 flex-shrink-0" strokeWidth={2.5} />
                </div>
                <p className="text-lg text-gray-800 font-semibold">{healthNote}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
