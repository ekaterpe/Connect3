import {
  Calendar,
  MapPin,
  Plus,
  Mic,
  Search,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScreenHeader } from "./ScreenHeader";

interface Event {
  id: string;
  title: string;
  type: string;
  location: string;
  distance: string;
  date: string;
  time: string;
  photo: string;
  description: string;
  seniorFriendly: boolean;
}

const events: Event[] = [
  {
    id: "1",
    title: "Senior Yoga Class",
    type: "Fitness",
    location: "Community Center",
    distance: "0.5 miles away",
    date: "Today",
    time: "10:00 AM",
    photo:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc2VuaW9yfGVufDF8fHx8MTczNjc0NTYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Gentle yoga designed for seniors. All levels welcome.",
    seniorFriendly: true,
  },
  {
    id: "2",
    title: "Knitting Circle",
    type: "Social",
    location: "Public Library",
    distance: "1.2 miles away",
    date: "Tomorrow",
    time: "2:00 PM",
    photo:
      "https://images.unsplash.com/photo-1619773669837-d3fe2d049dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMGdyb3VwfGVufDB8fHx8MTczNjc0NTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Weekly gathering for knitting enthusiasts. Bring your project!",
    seniorFriendly: true,
  },
  {
    id: "3",
    title: "Farmers Market",
    type: "Shopping",
    location: "Town Square",
    distance: "0.8 miles away",
    date: "Saturday",
    time: "8:00 AM",
    photo:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwbWFya2V0fGVufDB8fHx8MTczNjc0NTY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Fresh local produce and handmade goods. Wheelchair accessible.",
    seniorFriendly: true,
  },
  {
    id: "4",
    title: "Water Aerobics",
    type: "Fitness",
    location: "Recreation Center Pool",
    distance: "2.1 miles away",
    date: "Monday & Wednesday",
    time: "11:00 AM",
    photo:
      "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGFlcm9iaWNzfGVufDB8fHx8MTczNjc0NTY5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Low-impact exercise in the pool. Great for joints!",
    seniorFriendly: true,
  },
  {
    id: "5",
    title: "Book Club",
    type: "Social",
    location: "Coffee Shop",
    distance: "1.5 miles away",
    date: "Next Thursday",
    time: "3:00 PM",
    photo:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY2x1YnxlbnwwfHx8fDE3MzY3NDU3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Monthly book discussion. This month: classic literature.",
    seniorFriendly: true,
  },
  {
    id: "6",
    title: "Community Lunch",
    type: "Social",
    location: "Senior Center",
    distance: "0.3 miles away",
    date: "Today",
    time: "12:00 PM",
    photo:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBsdW5jaHxlbnwwfHx8fDE3MzY3NDU3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Join neighbors for a shared meal and conversation.",
    seniorFriendly: true,
  },
];

export function EventsScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    setIsListening(true);

    // Simulate voice recognition
    setTimeout(() => {
      const queries = [
        "events today",
        "fitness classes",
        "social events",
      ];
    }, 2000);
  };

  const handleAddReminder = (event: Event) => {
    alert(
      `Adding reminder for "${event.title}" on ${event.date} at ${event.time}`,
    );
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
          <Calendar className="w-10 h-10 text-green-600" strokeWidth={2.5} />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Events Nearby</h1>
            <p className="text-xl text-gray-600">Local activities & community gatherings</p>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden"
            >
              {/* Event Image */}
              <ImageWithFallback
                src={event.photo}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              {/* Event Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-lg font-semibold">
                        {event.type}
                      </span>
                      {event.seniorFriendly && (
                        <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-lg font-semibold">
                          ✓ Senior Friendly
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-700 mb-4">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin
                      className="w-6 h-6 text-green-600"
                      strokeWidth={2.5}
                    />
                    <span className="text-xl">
                      {event.location} • {event.distance}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar
                      className="w-6 h-6 text-blue-600"
                      strokeWidth={2.5}
                    />
                    <span className="text-xl">
                      {event.date} at {event.time}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleAddReminder(event)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-5 text-2xl font-bold hover:shadow-lg transition-all active:scale-98 flex items-center justify-center gap-3"
                >
                  <Plus className="w-8 h-8" strokeWidth={2.5} />
                  Add Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}