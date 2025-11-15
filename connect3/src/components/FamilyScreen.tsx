import { Phone, Video, MessageSquare, UserPlus, Users, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { ScreenHeader } from './ScreenHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Contact {
  phoneNumber: string; // Unique key
  name: string;
  relationship: string;
  photo: string;
}

// Mock database for auto-population based on phone number
const contactDatabase: { [key: string]: { name: string; relationship: string; photo: string } } = {
  '5551234567': {
    name: 'Sarah Johnson',
    relationship: 'Daughter',
    photo: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  '5559876543': {
    name: 'Michael Thompson',
    relationship: 'Son',
    photo: 'https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxOTM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  '5552223333': {
    name: 'Emma Davis',
    relationship: 'Granddaughter',
    photo: 'https://images.unsplash.com/photo-1758686254563-5c5ab338c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2MzE5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
};

const initialContacts: Contact[] = [
  {
    phoneNumber: '5551234567',
    name: 'Sarah Johnson',
    relationship: 'Daughter',
    photo: 'https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExODIzMnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    phoneNumber: '5559876543',
    name: 'Michael Thompson',
    relationship: 'Son',
    photo: 'https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxOTM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    phoneNumber: '5552223333',
    name: 'Emma Davis',
    relationship: 'Granddaughter',
    photo: 'https://images.unsplash.com/photo-1758686254563-5c5ab338c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2MzE5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    phoneNumber: '5558887777',
    name: 'Robert',
    relationship: 'Brother',
    photo: 'https://images.unsplash.com/photo-1758686253859-8ef7e940096e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    phoneNumber: '5554445555',
    name: 'Linda & Tom',
    relationship: 'Friends',
    photo: 'https://images.unsplash.com/photo-1761839257647-df30867afd54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzYzMTk2MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function FamilyScreen({ onMenuClick, onTextSizeToggle, textSizeMultiplier = 1 }: { onMenuClick?: () => void; onTextSizeToggle?: () => void; textSizeMultiplier?: number }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [showAddForm, setShowAddForm] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [autoPopulated, setAutoPopulated] = useState(false);
  const [previewContact, setPreviewContact] = useState<Contact | null>(null);

  const handleCall = (name: string, phone: string) => {
    alert(`Calling ${name} at ${phone}...`);
  };

  const handleVideoCall = (name: string, phone: string) => {
    alert(`Starting video call with ${name} at ${phone}...`);
  };

  const handleMessage = (name: string, phone: string) => {
    alert(`Opening message to ${name} at ${phone}...`);
  };

  const handlePhoneNumberChange = (phone: string) => {
    // Remove non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    setPhoneInput(cleanPhone);

    // Check if phone number exists in database
    if (cleanPhone.length === 10 && contactDatabase[cleanPhone]) {
      const data = contactDatabase[cleanPhone];
      setPreviewContact({
        phoneNumber: cleanPhone,
        ...data
      });
      setAutoPopulated(true);
    } else {
      setPreviewContact(null);
      setAutoPopulated(false);
    }
  };

  const handleAddContact = () => {
    if (phoneInput.length === 10) {
      // Check if contact already exists
      if (contacts.some(c => c.phoneNumber === phoneInput)) {
        alert('This contact is already in your list!');
        return;
      }

      if (previewContact) {
        // Auto-populated contact
        setContacts([...contacts, previewContact]);
        alert(`${previewContact.name} added successfully!`);
      } else {
        // Manual entry (phone not in database)
        const newContact: Contact = {
          phoneNumber: phoneInput,
          name: 'Unknown Contact',
          relationship: 'Contact',
          photo: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBsYWNlaG9sZGVyfGVufDF8fHx8MTc2MzIwMTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
        };
        setContacts([...contacts, newContact]);
        alert('Contact added! (No profile found - manual setup needed)');
      }
      
      setPhoneInput('');
      setPreviewContact(null);
      setAutoPopulated(false);
      setShowAddForm(false);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const formatPhoneNumber = (phone: string) => {
    if (phone.length === 10) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    }
    return phone;
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
          <Users className="w-10 h-10 text-blue-600" strokeWidth={2.5} />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Family & Friends</h1>
            <p className="text-xl text-gray-600">Tap to connect</p>
          </div>
        </div>

        {/* Add Person Button */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-4"
        >
          <UserPlus className="w-10 h-10" strokeWidth={2.5} />
          <span className="text-2xl font-bold">Add Person</span>
        </button>

        {/* Add Person Form */}
        {showAddForm && (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 shadow-lg border-2 border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Add New Person</h2>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setPhoneInput('');
                  setPreviewContact(null);
                  setAutoPopulated(false);
                }}
                className="bg-white rounded-2xl p-3 hover:bg-gray-100 transition-colors"
              >
                <X className="w-8 h-8 text-gray-600" strokeWidth={2.5} />
              </button>
            </div>

            <div className="space-y-5">
              {/* Phone Number Input */}
              <div>
                <label className="block text-2xl font-bold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formatPhoneNumber(phoneInput)}
                  onChange={(e) => handlePhoneNumberChange(e.target.value)}
                  className="w-full text-3xl p-6 border-4 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none"
                  placeholder="(555) 123-4567"
                  maxLength={14}
                />
                <p className="text-lg text-gray-600 mt-2">
                  Enter the phone number - other details will auto-fill if available
                </p>
              </div>

              {/* Auto-populated Preview */}
              {autoPopulated && previewContact && (
                <div className="bg-white rounded-2xl p-6 border-2 border-green-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 rounded-full p-2">
                      <Heart className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700">Contact Found!</h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src={previewContact.photo}
                      alt={previewContact.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-green-200"
                    />
                    <div>
                      <p className="text-2xl font-bold text-gray-800">{previewContact.name}</p>
                      <p className="text-xl text-gray-600">{previewContact.relationship}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* No Match Message */}
              {!autoPopulated && phoneInput.length === 10 && (
                <div className="bg-amber-50 rounded-2xl p-5 border-2 border-amber-200">
                  <p className="text-xl text-amber-800">
                    No profile found for this number. You can still add them, but you'll need to set up their details manually later.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setPhoneInput('');
                    setPreviewContact(null);
                    setAutoPopulated(false);
                  }}
                  className="bg-gray-200 text-gray-700 rounded-2xl p-5 text-xl font-bold hover:bg-gray-300 transition-colors active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddContact}
                  className="bg-blue-500 text-white rounded-2xl p-5 text-xl font-bold hover:bg-blue-600 transition-colors active:scale-95"
                >
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Cards */}
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.phoneNumber}
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
                  <p className="text-lg text-gray-400 mt-1">{formatPhoneNumber(contact.phoneNumber)}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleCall(contact.name, contact.phoneNumber)}
                  className="flex flex-col items-center gap-3 bg-green-500 text-white rounded-2xl p-4 hover:bg-green-600 transition-colors active:scale-95"
                >
                  <Phone className="w-10 h-10" strokeWidth={2.5} />
                  <span className="text-lg font-semibold">Call</span>
                </button>

                <button
                  onClick={() => handleVideoCall(contact.name, contact.phoneNumber)}
                  className="flex flex-col items-center gap-3 bg-blue-500 text-white rounded-2xl p-4 hover:bg-blue-600 transition-colors active:scale-95"
                >
                  <Video className="w-10 h-10" strokeWidth={2.5} />
                  <span className="text-lg font-semibold">Video</span>
                </button>

                <button
                  onClick={() => handleMessage(contact.name, contact.phoneNumber)}
                  className="flex flex-col items-center gap-3 bg-purple-500 text-white rounded-2xl p-4 hover:bg-purple-600 transition-colors active:scale-95"
                >
                  <MessageSquare className="w-10 h-10" strokeWidth={2.5} />
                  <span className="text-lg font-semibold">Message</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}