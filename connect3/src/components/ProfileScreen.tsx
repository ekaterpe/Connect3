import { User, Phone, Heart, Edit, Save, Camera } from 'lucide-react';
import { useState } from 'react';
import { ScreenHeader } from './ScreenHeader';

export function ProfileScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Robert Johnson',
    age: '72',
    hobbies: 'Gardening, Reading, Walking',
    interests: 'History, Classical Music, Photography',
    aboutMe: 'Retired teacher who loves spending time with family and staying active.',
    preferredContact: 'Sarah (Daughter)',
    emergencyContact: 'Sarah - (555) 123-4567'
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, save to backend
    alert('Profile saved successfully!');
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
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 shadow-lg text-white">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold">My Profile</h1>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-white text-purple-600 rounded-2xl px-6 py-3 flex items-center gap-2 font-bold text-xl hover:bg-purple-50 transition-all active:scale-95"
              >
                <Edit className="w-7 h-7" strokeWidth={2.5} />
                Edit
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white rounded-2xl px-6 py-3 flex items-center gap-2 font-bold text-xl hover:bg-green-600 transition-all active:scale-95"
              >
                <Save className="w-7 h-7" strokeWidth={2.5} />
                Save
              </button>
            )}
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white flex items-center justify-center overflow-hidden">
                <User className="w-20 h-20 text-white" strokeWidth={2} />
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-3 border-4 border-white hover:bg-purple-700 transition-all active:scale-95">
                  <Camera className="w-6 h-6 text-white" strokeWidth={2.5} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-3">
              Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
              />
            ) : (
              <p className="text-2xl text-gray-800 bg-gray-50 p-5 rounded-2xl">{profile.name}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-3">
              Age (optional)
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                placeholder="Your age"
              />
            ) : (
              <p className="text-2xl text-gray-800 bg-gray-50 p-5 rounded-2xl">{profile.age}</p>
            )}
          </div>

          {/* Hobbies */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-3">
              Hobbies
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.hobbies}
                onChange={(e) => setProfile({ ...profile, hobbies: e.target.value })}
                className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                placeholder="What do you enjoy doing?"
              />
            ) : (
              <p className="text-2xl text-gray-800 bg-gray-50 p-5 rounded-2xl">{profile.hobbies}</p>
            )}
          </div>

          {/* Interests */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-3">
              Interests
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.interests}
                onChange={(e) => setProfile({ ...profile, interests: e.target.value })}
                className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                placeholder="What interests you?"
              />
            ) : (
              <p className="text-2xl text-gray-800 bg-gray-50 p-5 rounded-2xl">{profile.interests}</p>
            )}
          </div>

          {/* About Me */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-3">
              About Me
            </label>
            {isEditing ? (
              <textarea
                value={profile.aboutMe}
                onChange={(e) => setProfile({ ...profile, aboutMe: e.target.value })}
                className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none min-h-32"
                placeholder="Tell us about yourself"
              />
            ) : (
              <p className="text-2xl text-gray-800 bg-gray-50 p-5 rounded-2xl">{profile.aboutMe}</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 shadow-lg border-2 border-blue-200 space-y-5">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-9 h-9 text-blue-600" strokeWidth={2.5} />
            <h2 className="text-3xl font-bold text-gray-800">Contact Info</h2>
          </div>

          {/* Preferred Contact */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-3">
              Preferred Contact Person
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.preferredContact}
                onChange={(e) => setProfile({ ...profile, preferredContact: e.target.value })}
                className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none"
                placeholder="Who should we contact?"
              />
            ) : (
              <p className="text-2xl text-gray-800 bg-white p-5 rounded-2xl flex items-center gap-3">
                <Heart className="w-7 h-7 text-blue-500" strokeWidth={2.5} />
                {profile.preferredContact}
              </p>
            )}
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-3">
              Emergency Contact
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.emergencyContact}
                onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                className="w-full text-2xl p-5 border-4 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none"
                placeholder="Emergency contact name & number"
              />
            ) : (
              <p className="text-2xl text-gray-800 bg-white p-5 rounded-2xl flex items-center gap-3">
                <Phone className="w-7 h-7 text-red-500" strokeWidth={2.5} />
                {profile.emergencyContact}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons (when editing) */}
        {isEditing && (
          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-gray-200 text-gray-700 rounded-3xl p-6 text-2xl font-bold hover:bg-gray-300 transition-all active:scale-98"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-6 text-2xl font-bold hover:shadow-xl transition-all active:scale-98"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}