import { Music, Dumbbell, Coffee, BookOpen, Users, Heart, MapPin } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  type: 'music' | 'exercise' | 'social' | 'learning' | 'health';
  attending: boolean;
}

const eventIcons = {
  music: Music,
  exercise: Dumbbell,
  social: Coffee,
  learning: BookOpen,
  health: Heart
};

const initialEvents: Event[] = [
  {
    id: '1',
    title: 'Community Choir Practice',
    date: 'Monday, Nov 18',
    time: '2:00 PM',
    description: 'Join us for a fun afternoon of singing together',
    location: 'Community Center',
    type: 'music',
    attending: false
  },
  {
    id: '2',
    title: 'Chair Yoga Class',
    date: 'Tuesday, Nov 19',
    time: '10:00 AM',
    description: 'Gentle exercise class for all fitness levels',
    location: 'Senior Center',
    type: 'exercise',
    attending: true
  },
  {
    id: '3',
    title: 'Coffee & Conversation',
    date: 'Wednesday, Nov 20',
    time: '9:00 AM',
    description: 'Meet neighbors and make new friends',
    location: 'Local Café',
    type: 'social',
    attending: false
  },
  {
    id: '4',
    title: 'Tech Help Workshop',
    date: 'Thursday, Nov 21',
    time: '3:00 PM',
    description: 'Learn about smartphones and tablets',
    location: 'Library',
    type: 'learning',
    attending: false
  },
  {
    id: '5',
    title: 'Health Screening',
    date: 'Friday, Nov 22',
    time: '11:00 AM',
    description: 'Free blood pressure and wellness check',
    location: 'Health Clinic',
    type: 'health',
    attending: false
  }
];

export function EventsScreen() {
  const [events, setEvents] = useState(initialEvents);

  const toggleAttending = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, attending: !event.attending }
        : event
    ));
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-green-100">
        <h1 className="text-4xl font-bold text-gray-800">Events Nearby</h1>
        <p className="text-xl text-gray-600 mt-2">Activities in your community</p>
      </div>

      {/* Event Cards */}
      <div className="space-y-4">
        {events.map((event) => {
          const IconComponent = eventIcons[event.type];
          
          return (
            <div
              key={event.id}
              className={`bg-white rounded-3xl p-6 shadow-lg border-2 transition-all ${
                event.attending ? 'border-green-400 bg-green-50' : 'border-gray-100'
              }`}
            >
              {/* Event Header */}
              <div className="flex gap-4 mb-4">
                <div className={`rounded-2xl p-4 ${
                  event.attending ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <IconComponent className={`w-12 h-12 ${
                    event.attending ? 'text-green-600' : 'text-blue-600'
                  }`} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{event.title}</h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <p className="text-lg">{event.location}</p>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="mb-4 space-y-2">
                <p className="text-xl font-semibold text-gray-700">{event.date}</p>
                <p className="text-xl text-gray-600">{event.time}</p>
                <p className="text-xl text-gray-600 leading-relaxed">{event.description}</p>
              </div>

              {/* Attend Button */}
              <button
                onClick={() => toggleAttending(event.id)}
                className={`w-full rounded-2xl p-5 text-xl font-bold transition-colors active:scale-95 ${
                  event.attending
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {event.attending ? '✓ You\'re Attending' : 'I Want to Attend'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
