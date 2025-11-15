# Senior Connect - Voice-First Companion App

## Overview
A comprehensive mobile application designed specifically for older adults, built around a voice-first AI companion that supports independence, connection, and daily routines. The interface features extremely simple navigation, high-contrast design, large typography (20-32pt), soft colors, and big touch targets throughout.

---

## Core Features

### 🏠 **Home Screen**
The central hub with intuitive navigation and quick access to all features:

**Top Section:**
- **Daily Tasks Button** - Opens a dialog with micro-tasks:
  - Morning Stretch (10 pts)
  - Walk to the Shop (15 pts)
  - Drink Water (5 pts)
  - Take Medication (10 pts)
  - 7-day streak tracking
  - Soft amber/orange color scheme

**Quick Stats:**
- Large number displays showing:
  - "3 Reminders Today"
  - "2 Events This Week"
- Positioned high on the page for visibility

**Daily Activity Tracker:**
- Progress ring showing step count
- Goal percentage
- Motivational messages
- Routine reminders when scheduled

**Family Updates:**
- Quick-view cards for family members
- Recent activity status
- Direct call/message buttons

**Main Navigation Cards:**
- Family Photos (soft rose/pink gradient)
- Family Contacts (blue gradient)
- Events Nearby (green gradient)
- My Diary (amber gradient)
- Reminders/Medications (purple gradient)

**Voice Command Hints:**
- Helpful suggestions for voice interactions
- Examples of what users can say

---

### 🔐 **Authentication**

#### Sign Up Screen
- Simple, clear form with large input fields:
  - Name (required)
  - Phone Number (required)
  - Email (optional)
  - PIN Code (4-6 digits, required)
- No voice unlock option (removed for simplicity)
- Help section with support phone number
- Large CTA button
- Step-by-step process indicators

#### Login Screen
- PIN entry with large number pad
- "Remember Me" option
- Clear error messages
- Link to sign up

---

### 📸 **Family Photos Feed**
Social-style feed designed for easy family connection:

**Features:**
- Large, high-quality photos
- Clear author identification with profile picture
- Captions and timestamps
- Big "Like" button (heart icon)
- Big "Comment" button
- Voice-to-text commenting option
- Real-time interaction feedback

**Visual Design:**
- Warm, inviting colors
- Soft shadows and rounded corners
- High contrast for readability
- Easy scrolling

---

### 👨‍👩‍👧‍👦 **Family & Contacts**
Direct access to loved ones with large, clear buttons:

**Contact Cards:**
- Large profile photos
- Name and relationship clearly displayed
- Status indicators (Available, At Work, etc.)
- Three action buttons per contact:
  - Phone Call (blue)
  - Video Call (purple)
  - Send Message (green)

**Voice Commands:**
- "Call Sarah"
- "Video call Michael"
- "Send message to Emma"

---

### 📅 **Events Nearby**
Single unified screen for local activities and community events:

**Event Cards Include:**
- Large photo/illustration
- Event title
- Type badge (Fitness, Social, Shopping)
- Location and distance
- Date and time
- Senior-friendly indicator
- Description
- "Add Reminder" button

**Voice Features:**
- Voice search capability
- Text search option
- Commands:
  - "Show events"
  - "Any events today?"
  - "Remind me about this"

**Example Events:**
- Senior Yoga Class
- Knitting Circle
- Farmers Market
- Water Aerobics
- Book Club
- Community Lunch

---

### 📖 **Personal Diary**
Two-part diary system for activity tracking and wellness:

#### Activity Log Tab
- Auto-generated entries:
  - Phone/video calls with timestamps
  - Completed routines
  - Photo viewing activity
  - Message interactions
  - Walking/exercise activities
- Share toggle for family visibility
- Individual entry privacy controls
- Color-coded by activity type

#### Daily Check-In Tab
- AI-generated wellness questions timeline:
  - "How are you feeling this morning?"
  - "Did you sleep well?"
  - "Do you want to talk to someone today?"
  - "Any pain or discomfort?"
  - "Do you want me to remind you to drink water?"
- Answered status with green checkmarks
- User responses displayed in speech bubbles
- Daily summary at bottom
- Easy scrolling through history
- Purple color scheme

**Privacy Features:**
- Master share toggle
- Per-entry privacy controls
- Lock icon for private entries
- Clear visual indicators

---

### 💊 **Reminders (Medications)**
Medication tracking and reminder system:

**Features:**
- Large medication cards showing:
  - Medication name
  - Time to take
  - Dosage information
  - Current time display
- Visual status (taken/pending)
- Big "Mark as Taken" button
- Strike-through for completed
- Green confirmation when taken
- Add new reminder form

**Visual Design:**
- Purple/green color coding
- Large pill icons
- High contrast
- Clear typography

---

### ⚙️ **Routine Settings**
Manage daily routine reminders:

**Routine Configuration:**
- Choose routine type:
  - Walk, Stretching, Hydration, Medication, Exercise, Breathing, Reading
- Set frequency:
  - Every day, Every 2 days, Weekly, Weekdays only, etc.
- Set time of day
- Enable/disable toggle
- Delete option

**Features:**
- Large toggle switches
- Color-coded active/inactive states
- Easy editing
- Trash button for removal
- Info card explaining how it works

---

### 🎤 **Voice Control Mode**
Simplified voice-first interface:

**Features:**
- Huge microphone button for activation
- Voice status indicators
- Large family photo cards
- Voice-accessible family photos:
  - "Show family photos"
  - "Next photo"
  - "Previous photo"
  - "Like this"
  - "Who is this?"
  - "Call them"

**Visual Design:**
- Simplified UI
- Prominent microphone button
- Real-time listening feedback
- Command confirmation
- Full-screen photo viewing

**Voice Command Examples:**
- "Call [name]"
- "Video call [name]"
- "Send message to [name]"
- "Show family photos"
- "What events are today?"
- "Show my reminders"

---

## Design System

### Color Palette
**Primary Colors:**
- Purple: #8B5CF6, #A78BFA (Primary actions, reminders)
- Blue: #3B82F6, #60A5FA (Family, communication)
- Green: #10B981, #34D399 (Events, health, success)
- Amber: #F59E0B, #FCD34D (Tasks, diary, warnings)
- Rose/Pink: #FDA4AF, #FCA5A5 (Family photos, social)

**Neutral Colors:**
- Gray scale from 50 to 900
- High contrast ratios for accessibility

**Soft Gradients:**
- Pastel backgrounds (from-X-50 to-Y-50)
- Gentle button gradients
- Warm, inviting feel

### Typography
- **Headers:** 32-48pt (text-3xl to text-5xl)
- **Subheaders:** 24-28pt (text-2xl)
- **Body Text:** 20-24pt (text-xl)
- **Small Text:** 18pt minimum (text-lg)
- **Font Weight:** Bold for emphasis, regular for body

### Components
- **Buttons:** Large (min 44px tap target), rounded-3xl
- **Cards:** Rounded-3xl with soft shadows
- **Inputs:** Large padding (p-5, p-6), rounded-2xl
- **Icons:** 8-12 units (w-8 to w-12), strokeWidth 2-2.5

### Spacing
- Generous padding throughout (p-6, p-8)
- Clear visual hierarchy
- Breathing room between elements

---

## Navigation

### Bottom Tab Bar (6 tabs):
1. **Home** - Central hub
2. **Photos** - Family photo feed
3. **Family** - Contact list
4. **Events** - Local activities
5. **Diary** - Personal journal
6. **Meds** - Medication reminders

### Top Menu (Hamburger):
- Standard Mode (default)
- Voice Control Mode
- Routine Settings

### Accessibility Toggle:
- Text size multiplier (1x / 1.5x)
- Top-right corner button

### Persistent Features:
- Floating microphone button (bottom-right)
- Always accessible voice commands
- Mode switcher
- Text size control

---

## Accessibility Features

1. **Visual:**
   - High contrast ratios (WCAG AAA)
   - Large text sizes
   - Clear icons with labels
   - Color coding with text labels

2. **Touch:**
   - Minimum 44x44pt touch targets
   - Generous spacing between elements
   - Clear active states
   - Haptic feedback ready

3. **Voice:**
   - Complete voice control option
   - Voice-to-text for all inputs
   - Voice commands throughout
   - Real-time feedback

4. **Cognitive:**
   - Simple, consistent navigation
   - Clear hierarchy
   - One action per screen
   - Confirmation messages
   - Helpful hints and examples

5. **Customization:**
   - Adjustable text size
   - Mode switching
   - Privacy controls
   - Notification settings

---

## Technical Stack

- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State Management:** React hooks (useState)
- **Routing:** Component-based navigation
- **Responsive:** Mobile-first design

---

## User Flow Examples

### Making a Call:
1. Tap "Family" from home or bottom nav
2. View large contact cards
3. Tap blue "Call" button
4. Or say "Call Sarah" with voice

### Checking Medications:
1. Tap "Meds" from bottom nav
2. View today's medications
3. Tap large "Mark as Taken" button
4. See green confirmation

### Viewing Events:
1. Tap "Events Nearby" from home
2. Scroll through event cards
3. Tap "Add Reminder" on event
4. Or say "Show events today"

### Completing Daily Tasks:
1. Tap "Daily Tasks" at top of home
2. View dialog with 4 tasks
3. Tap "Complete" on each task
4. See points accumulate
5. View streak badge

### Using Voice Mode:
1. Tap hamburger menu (top-left)
2. Select "Voice Control"
3. Tap large microphone button
4. Speak command
5. See action executed

---

## Key Principles

1. **Simplicity First** - Maximum 1-2 taps to any function
2. **Voice-Forward** - Every action has voice alternative
3. **High Contrast** - Easy to read in all lighting
4. **Gentle Colors** - Warm, non-aggressive palette
5. **Clear Feedback** - Immediate response to all actions
6. **Family Connection** - Emphasize relationships
7. **Independence** - Empower daily activities
8. **Warmth** - Emotionally supportive design
9. **Privacy** - User control over sharing
10. **Consistency** - Same patterns throughout

---

## Success Metrics

- **Engagement:** Daily task completion rate
- **Connection:** Family photo views and comments
- **Health:** Medication adherence rate
- **Activity:** Event attendance and step counts
- **Social:** Call/message frequency
- **Wellbeing:** Daily check-in response rate

---

## Future Enhancements

- Emergency contact integration
- Health tracking sensors
- Calendar integration
- Shopping list features
- Transportation booking
- Telehealth connections
- Group video calls
- Photo sharing from device
- Custom routine types
- Family notifications

---

**Built with ❤️ for seniors and their families**
