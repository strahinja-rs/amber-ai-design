# Deliverables Specification

## Overview

| Deliverable | Weight | Status |
|-------------|--------|--------|
| Brand Identity | 20% | Pending |
| Marketing Website | 30% | Pending |
| Product Interface (Companion App) | 30% | Pending |
| Campaign Visuals | 20% | Pending |

---

## 1. Brand Identity (20%)

### Requirements
- Logo
- Color palette (confirmed)
- Typography selection
- Brand guidelines document

### Logo Direction
- Amber-inspired: warm, glowing, organic
- Could incorporate: drop shape, pendant silhouette, warm glow
- NOT: geometric tech logos, circuit patterns, AI clichés
- Feels like jewelry brand, not tech startup

### Color Palette (Confirmed)
| Role | Color | Hex |
|------|-------|-----|
| Primary | Amber/Golden | #D4A253 |
| Secondary | Deep Warm Brown | #4A3728 |
| Accent | Soft Cream | #F5EDE0 |
| Background | Rich Black | #1A1614 |

### Typography Needs
- Display: Characterful, not geometric. Serif or humanist sans.
- Body: Warm, readable
- Avoid: Inter, Roboto, system fonts

### Brand Guidelines Should Include
- Logo usage rules
- Color specifications
- Typography hierarchy
- Voice & tone summary
- Do's and don'ts

---

## 2. Marketing Website (30%)

### Requirements
- Minimum 3 landing pages for different audiences
- Responsive design
- Consistent brand application

### Page Structure

#### Page 1: Hero / Universal
**URL:** `/` (home)
**Audience:** Universal
**Headline:** "Never lose what matters."
**Subhead:** Amber preserves conversations so you can be fully present.
**Content:**
- Hero section with product shot
- Value proposition (audio-first, file-first, privacy)
- Use case previews (medical, professional, personal)
- How it works (wear → preserve → recall)
- CTA: Learn more / Pre-order

#### Page 2: Medical / Caregivers
**URL:** `/medical` or `/health`
**Audience:** Patients, caregivers, family members
**Headline:** "Never forget what the doctor said."
**Subhead:** 40-80% of medical information is forgotten immediately. Amber changes that.
**Content:**
- The problem (anxiety, forgotten instructions, overwhelm)
- How Amber helps (be present, recall later)
- Privacy & legal clarity (HIPAA, consent)
- Testimonial-style scenarios
- CTA: Learn more / Pre-order

#### Page 3: Professionals
**URL:** `/professional` or `/work`
**Audience:** Salespeople, executives, networkers
**Headline:** "Conversations that matter happen off the record."
**Subhead:** Meeting software captures scheduled calls. Amber captures the rest.
**Content:**
- The problem (hallway conversations, networking, context loss)
- How Amber helps (names, faces, context recall)
- Use cases (conferences, client dinners, negotiations)
- Badge form factor mention
- CTA: Learn more / Pre-order

### Design Principles
- Warm, amber-toned aesthetic
- NOT generic tech startup look
- Photography: real people in real conversations
- Generous whitespace, clear hierarchy
- Mobile-first responsive

---

## 3. Product Interface - Companion App (30%)

### Requirements
- Mobile app design (iOS primary)
- Key screens demonstrating core functionality
- Consistent with brand

### Core Screens to Design

#### 1. Timeline
- Chronological list of preserved conversations
- Date groupings
- Preview: duration, speakers detected, location hint
- Search access

#### 2. Search
- Natural language query input
- "What did Dr. Chen say about medication?"
- Results: relevant conversation segments
- Filter by date, person, location

#### 3. Speakers
- List of recognized voices
- Name (if assigned), conversation count
- Tap to see all conversations with this person
- Voice-based recognition (no camera)

#### 4. Conversation Detail
- Audio playback with waveform
- Transcript (scrollable, synced with audio)
- Speakers present (voice-identified)
- Highlights (if any)
- Date, duration, location

#### 5. Settings
- Storage configuration (iCloud, Drive, Amber Sync)
- Privacy controls
- Speaker/voice management
- Device status

#### 6. Onboarding (optional)
- Welcome
- Storage setup
- First pairing

### Design Principles
- Minimal UI — content is the focus
- Warm color accents (amber tones)
- Dark mode primary (matches brand)
- Pull, don't push — no notification clutter
- Search-first paradigm

---

## 4. Campaign Visuals (20%)

### Requirements
- Ad creatives for target segments
- Multiple formats (social, display)
- Consistent brand application

### Campaign 1: Medical / Caregivers
**Message:** "Never forget what the doctor said."
**Visual:** Warm, comforting — patient at ease with doctor, pendant visible
**Tone:** Reassuring, peaceful
**Formats:** Instagram/Facebook square, story, display

### Campaign 2: Professional
**Message:** "Conversations that matter happen off the record."
**Visual:** Professional context — networking, conference, coffee meeting
**Tone:** Confident, capable
**Formats:** LinkedIn, display

### Campaign 3: Universal / Emotional
**Message:** "Never lose what matters."
**Visual:** Intimate conversation moment — warm, human
**Tone:** Emotional, meaningful
**Formats:** Hero imagery, social

### Visual Guidelines
- Always warm lighting (golden hour feel)
- Real people, not stock
- Pendant subtle, not hero
- Avoid: blue tones, tech aesthetic, staged shots

---

## Bonus Deliverables (Optional)

### Physical Product Render
- 3D render of the Amber pendant
- Asymmetric pebble form (~38mm × 46mm)
- Kaolin-inspired zirconia ceramic, satin glazed
- Warm champagne/cream undertones
- Warm edge glow effect (Trust Light)
- Optional hairline rose gold chamfer
- Multiple angles

### Mobile + Dashboard (if time)
- If companion app is mobile, add web dashboard
- Or vice versa

---

## Technical Notes for Execution

### Website
- Can be built with Claude Code (HTML/CSS/JS or React)
- Or use tool like Bolt/Lovable if available
- Prioritize: looks great, brand-consistent, responsive

### App
- Design mockups (not functional code unless time)
- Can use Claude Code for React Native prototype
- Or design-focused output (Figma-style screens via AI)

### Campaign Visuals
- Use Nano Banana for image generation
- Product renders may need iteration
- Focus on 2-3 strong hero images over many mediocre ones
