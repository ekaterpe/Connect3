# Design System - Senior Connect

## Design Principles

### 1. Accessibility First
- **Minimum font size:** 18px (body text should be 20-24px)
- **Touch targets:** Minimum 44x44px for all interactive elements
- **Color contrast:** WCAG AAA standards (7:1 for normal text, 4.5:1 for large text)
- **Voice alternatives:** Every action can be performed via voice command

### 2. Visual Clarity
- **High contrast** between text and backgrounds
- **Clear visual hierarchy** with size and weight
- **Generous spacing** to prevent crowding
- **Consistent iconography** from Lucide React

### 3. Emotional Warmth
- **Soft, friendly colors** - pastels and gentle gradients
- **Rounded shapes** - rounded-3xl (24px radius) standard
- **Welcoming language** - conversational and supportive
- **Human-centered** - focus on relationships and connection

---

## Color Palette

### Primary Colors

#### Purple (Primary Actions)
```css
50:  #F5F3FF  - Backgrounds
100: #EDE9FE  - Light fills
200: #DDD6FE  - Borders
300: #C4B5FD
400: #A78BFA
500: #8B5CF6  - Primary purple
600: #7C3AED  - Hover states
700: #6D28D9
```
**Use for:** Primary buttons, reminders, medication tracking, navigation highlights

#### Blue (Communication)
```css
50:  #EFF6FF  - Backgrounds
100: #DBEAFE  - Light fills
200: #BFDBFE  - Borders
300: #93C5FD
400: #60A5FA
500: #3B82F6  - Primary blue
600: #2563EB  - Hover states
700: #1D4ED8
```
**Use for:** Family contacts, communication features, info messages

#### Green (Success & Health)
```css
50:  #F0FDF4  - Backgrounds
100: #DCFCE7  - Light fills
200: #BBF7D0  - Borders
300: #86EFAC
400: #4ADE80
500: #22C55E  - Primary green
600: #16A34A  - Hover states
700: #15803D
```
**Use for:** Events, health tracking, success states, completion

#### Amber (Tasks & Warnings)
```css
50:  #FFFBEB  - Backgrounds
100: #FEF3C7  - Light fills
200: #FDE68A  - Borders
300: #FCD34D
400: #FBBF24
500: #F59E0B  - Primary amber
600: #D97706  - Hover states
700: #B45309
```
**Use for:** Daily tasks, diary, gentle warnings, streaks

#### Rose/Pink (Family & Social)
```css
50:  #FFF1F2  - Backgrounds
100: #FFE4E6  - Light fills
200: #FECDD3  - Borders
300: #FDA4AF
400: #FB7185
500: #F43F5E  - Primary rose
600: #E11D48  - Hover states
```
**Use for:** Family photos, social features, love/connection

### Neutral Colors (Grays)
```css
50:  #F9FAFB  - Lightest background
100: #F3F4F6  - Card backgrounds
200: #E5E7EB  - Borders
300: #D1D5DB  - Disabled states
400: #9CA3AF
500: #6B7280  - Secondary text
600: #4B5563  - Body text
700: #374151
800: #1F2937  - Headings
900: #111827  - Darkest text
```

---

## Typography

### Font Sizes (Tailwind Classes)

```
text-xs:   12px (0.75rem)  - Not recommended for seniors
text-sm:   14px (0.875rem) - Not recommended for seniors
text-base: 16px (1rem)     - Minimum size
text-lg:   18px (1.125rem) - Small labels
text-xl:   20px (1.25rem)  - Body text
text-2xl:  24px (1.5rem)   - Subheadings
text-3xl:  30px (1.875rem) - Section titles
text-4xl:  36px (2.25rem)  - Page headings
text-5xl:  48px (3rem)     - Hero text
```

### Font Weights

```
font-normal: 400 - Body text, descriptions
font-semibold: 600 - Labels, secondary emphasis
font-bold: 700 - Headings, buttons, primary emphasis
```

### Usage Guidelines

- **Headings:** text-3xl to text-5xl, font-bold
- **Subheadings:** text-2xl, font-bold
- **Body text:** text-xl, font-normal
- **Button text:** text-xl to text-2xl, font-bold
- **Labels:** text-lg to text-xl, font-semibold
- **Never use:** text-xs or text-sm

---

## Spacing

### Padding Scale (Tailwind)
```
p-2:  8px   - Minimal
p-3:  12px  - Icon containers
p-4:  16px  - Small buttons
p-5:  20px  - Inputs, standard buttons
p-6:  24px  - Card padding
p-8:  32px  - Large card padding
```

### Gap Scale
```
gap-2: 8px   - Icon + text
gap-3: 12px  - Related elements
gap-4: 16px  - Cards in lists
gap-6: 24px  - Sections
gap-8: 32px  - Major sections
```

### Margin Scale
```
mb-2: 8px   - Tight spacing
mb-4: 16px  - Standard spacing
mb-6: 24px  - Section spacing
mb-8: 32px  - Large section breaks
```

---

## Border Radius

```
rounded-lg:   8px  (0.5rem)  - Small elements
rounded-xl:   12px (0.75rem) - Icons, badges
rounded-2xl:  16px (1rem)    - Buttons, inputs
rounded-3xl:  24px (1.5rem)  - Cards, main elements
rounded-full: 50%            - Circular elements
```

**Standard:** rounded-3xl for most cards and containers
**Buttons:** rounded-2xl to rounded-3xl
**Icons:** rounded-xl to rounded-2xl

---

## Shadows

```css
shadow-sm:  0 1px 2px rgba(0,0,0,0.05)
shadow:     0 1px 3px rgba(0,0,0,0.1)
shadow-md:  0 4px 6px rgba(0,0,0,0.1)
shadow-lg:  0 10px 15px rgba(0,0,0,0.1)
shadow-xl:  0 20px 25px rgba(0,0,0,0.1)
shadow-2xl: 0 25px 50px rgba(0,0,0,0.25)
```

**Usage:**
- Cards: shadow-lg
- Buttons (default): shadow-lg
- Buttons (hover): shadow-xl
- Dialogs/modals: shadow-2xl
- Floating elements: shadow-xl

---

## Buttons

### Primary Button
```tsx
className="bg-gradient-to-r from-purple-500 to-purple-600 
           text-white rounded-3xl p-6 
           shadow-lg hover:shadow-xl 
           transition-all active:scale-98"
```

### Secondary Button
```tsx
className="bg-white text-purple-600 
           border-2 border-purple-200 
           rounded-3xl p-6 
           shadow-lg hover:bg-purple-50 
           transition-all active:scale-98"
```

### Danger/Cancel Button
```tsx
className="bg-gray-200 text-gray-700 
           rounded-2xl p-5 
           hover:bg-gray-300 
           transition-all active:scale-98"
```

### Success Button
```tsx
className="bg-green-500 text-white 
           rounded-2xl p-5 
           hover:bg-green-600 
           transition-all active:scale-98"
```

### Button Guidelines
- Minimum height: 44px
- Minimum padding: p-5 (20px)
- Large text: text-xl or text-2xl
- Bold font weight
- Active state: scale-98 (slight press effect)
- Include icon when appropriate (w-8 h-8)

---

## Cards

### Standard Card
```tsx
className="bg-white rounded-3xl p-6 
           shadow-lg border-2 border-gray-100"
```

### Colored Card (Purple)
```tsx
className="bg-gradient-to-br from-purple-50 to-blue-50 
           rounded-3xl p-6 
           shadow-lg border-2 border-purple-100"
```

### Interactive Card/Button
```tsx
className="bg-white rounded-3xl p-8 
           shadow-lg hover:shadow-xl 
           transition-all active:scale-98 
           border-2 border-gray-100"
```

---

## Inputs

### Text Input
```tsx
className="w-full text-2xl p-6 
           border-4 border-gray-300 
           rounded-2xl 
           focus:border-purple-500 
           focus:outline-none"
```

### Time Input
```tsx
className="w-full text-3xl p-5 
           border-4 border-gray-300 
           rounded-2xl 
           focus:border-purple-500 
           focus:outline-none"
```

### Select/Dropdown
```tsx
className="w-full text-2xl p-5 
           border-4 border-gray-300 
           rounded-2xl 
           focus:border-purple-500 
           focus:outline-none"
```

### Input Guidelines
- Border width: border-4 (4px) for visibility
- Large padding: p-5 or p-6
- Large text: text-2xl or text-3xl
- Clear focus states
- High contrast borders

---

## Icons

### Sizing
```
w-6 h-6:   24px - Small icons, inline
w-7 h-7:   28px - Navigation icons
w-8 h-8:   32px - Standard icons
w-10 h-10: 40px - Large icons in cards
w-12 h-12: 48px - Featured icons
```

### Stroke Width
```
strokeWidth={2}    - Subtle, detailed
strokeWidth={2.5}  - Standard (recommended)
strokeWidth={3}    - Bold emphasis
```

### Guidelines
- Always pair with text labels
- Use consistent sizing within sections
- strokeWidth={2.5} is the standard
- Color should match or complement text

---

## Gradients

### Background Gradients (Soft)
```tsx
from-purple-50 to-blue-50    // Purple-blue soft
from-amber-50 to-orange-50   // Warm tasks
from-green-50 to-blue-50     // Success/health
from-rose-50 to-pink-50      // Family/social
```

### Button Gradients (Vibrant)
```tsx
from-purple-500 to-purple-600  // Primary actions
from-blue-500 to-blue-600      // Communication
from-green-500 to-green-600    // Success
from-amber-500 to-amber-600    // Tasks
```

---

## Transitions

### Standard Transition
```tsx
className="transition-all duration-300"
```

### Hover Effects
```tsx
hover:shadow-xl      // Elevate on hover
hover:bg-gray-100    // Background change
hover:scale-105      // Slight grow
```

### Active/Press Effects
```tsx
active:scale-98      // Press down effect
active:scale-95      // Deeper press
```

---

## Component Patterns

### Dialog/Modal Overlay
```tsx
// Backdrop
className="fixed inset-0 bg-black/50 z-40"

// Dialog
className="fixed inset-x-4 top-20 max-w-lg mx-auto z-50 
           bg-white rounded-3xl p-6 shadow-2xl"
```

### Bottom Navigation
```tsx
className="fixed bottom-0 left-0 right-0 
           bg-white border-t-4 border-purple-200 
           shadow-lg"
```

### Floating Action Button
```tsx
className="fixed bottom-24 right-6 
           bg-purple-500 text-white 
           rounded-full p-5 
           shadow-xl hover:shadow-2xl"
```

### Status Badge
```tsx
className="bg-blue-100 text-blue-800 
           px-4 py-1 rounded-full 
           text-lg font-semibold"
```

---

## Voice UI Elements

### Microphone Button (Large)
```tsx
className="w-full rounded-3xl p-12 
           bg-gradient-to-r from-purple-500 to-purple-600 
           shadow-xl hover:shadow-2xl 
           transition-all active:scale-95"
// Icon: w-32 h-32
```

### Listening State
```tsx
className="bg-red-500 animate-pulse 
           text-white rounded-3xl p-12"
```

### Voice Status Card
```tsx
className="bg-purple-100 border-purple-300 
           rounded-3xl p-8 border-2 
           animate-pulse"
```

---

## Accessibility Checklist

### Visual
- [ ] Text minimum 18px (prefer 20-24px)
- [ ] Contrast ratio 7:1 or better
- [ ] Icons paired with text labels
- [ ] Color not sole indicator
- [ ] Clear visual hierarchy

### Interactive
- [ ] Touch targets 44x44px minimum
- [ ] Generous spacing between buttons
- [ ] Clear hover/active states
- [ ] No time-limited interactions
- [ ] Visible focus indicators

### Content
- [ ] Simple, clear language
- [ ] Concise headings
- [ ] Descriptive button text
- [ ] Error messages helpful
- [ ] Success confirmations clear

### Technical
- [ ] Alt text on images
- [ ] Semantic HTML
- [ ] Keyboard navigation
- [ ] Screen reader friendly
- [ ] Voice control alternative

---

## Responsive Considerations

### Mobile-First Approach
```tsx
// Standard mobile (default)
className="p-6"

// Larger screens (if needed)
className="p-6 md:p-8 lg:p-10"
```

### Max Width Container
```tsx
className="max-w-lg mx-auto"  // 512px max width
```

### Grid Layouts
```tsx
// Two columns
className="grid grid-cols-2 gap-4"

// Responsive
className="grid grid-cols-1 md:grid-cols-2 gap-4"
```

---

## Animation Guidelines

### Subtle Animations Only
- Fade ins for new content
- Slide ins for dialogs
- Scale for button presses
- No auto-playing animations
- No flashing/strobing

### Duration Standards
```
duration-150: 150ms - Quick feedback
duration-300: 300ms - Standard (recommended)
duration-500: 500ms - Slow/gentle
```

---

## Testing Checklist

### Visual Testing
- [ ] Test in bright sunlight
- [ ] Test with reduced brightness
- [ ] Test with color blindness filters
- [ ] Test at arm's length

### Interaction Testing
- [ ] Test with large fingers
- [ ] Test with stylus
- [ ] Test with voice commands
- [ ] Test with shaky hands

### Content Testing
- [ ] Read aloud to verify clarity
- [ ] Check for jargon
- [ ] Verify instructions clear
- [ ] Test with real seniors

---

**Last Updated:** 2024
**Maintained by:** Senior Connect Design Team
