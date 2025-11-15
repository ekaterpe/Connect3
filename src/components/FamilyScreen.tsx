import { Phone, Video, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Contact {
  id: string;
  name: string;
  relationship: string;
  photo: string;
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah',
    relationship: 'Daughter',
    photo: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '2',
    name: 'Michael',
    relationship: 'Son',
    photo: 'https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxOTM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '3',
    name: 'Emma',
    relationship: 'Granddaughter',
    photo: 'https://images.unsplash.com/photo-1758686254563-5c5ab338c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2MzE5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '4',
    name: 'Robert',
    relationship: 'Brother',
    photo: 'https://images.unsplash.com/photo-1758686253859-8ef7e940096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '5',
    name: 'Linda & Tom',
    relationship: 'Friends',
    photo: 'https://images.unsplash.com/photo-1761839257647-df30867afd54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function FamilyScreen() {
  const handleCall = (name: string) => {
    alert(`Calling ${name}...`);
  };

  const handleVideoCall = (name: string) => {
    alert(`Starting video call with ${name}...`);
  };

  const handleMessage = (name: string) => {
    alert(`Opening message to ${name}...`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-100">
        <h1 className="text-4xl font-bold text-gray-800">Family & Friends</h1>
        <p className="text-xl text-gray-600 mt-2">Tap to connect</p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
          >
            {/* Contact Info */}
            <div className="flex items-center gap-6 mb-6">
              <ImageWithFallback
                src={contact.photo}
                alt={contact.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{contact.name}</h2>
                <p className="text-xl text-gray-500">{contact.relationship}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleCall(contact.name)}
                className="flex flex-col items-center gap-3 bg-green-500 text-white rounded-2xl p-4 hover:bg-green-600 transition-colors active:scale-95"
              >
                <Phone className="w-10 h-10" strokeWidth={2.5} />
                <span className="text-lg font-semibold">Call</span>
              </button>

              <button
                onClick={() => handleVideoCall(contact.name)}
                className="flex flex-col items-center gap-3 bg-blue-500 text-white rounded-2xl p-4 hover:bg-blue-600 transition-colors active:scale-95"
              >
                <Video className="w-10 h-10" strokeWidth={2.5} />
                <span className="text-lg font-semibold">Video</span>
              </button>

              <button
                onClick={() => handleMessage(contact.name)}
                className="flex flex-col items-center gap-3 bg-purple-500 text-white rounded-2xl p-4 hover:bg-purple-600 transition-colors active:scale-95"
              >
                <MessageCircle className="w-10 h-10" strokeWidth={2.5} />
                <span className="text-lg font-semibold">Message</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
