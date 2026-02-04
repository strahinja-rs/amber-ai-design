# PRD: Amber Device

## Product Overview

**Amber** is a wearable audio preservation device. You wear it when conversations matter.

Unlike AI companions or assistants, Amber has no personality, no voice, no opinions. It's part of you — like glasses help you see, Amber helps you remember what was said.

**Core promise:** Never lose what matters.

---

## Physical Form

### Form Factor
- **Primary:** Pendant (worn on neck)
- **Secondary:** Badge clip option (for professional contexts)
- **Weight:** Light enough for all-day wear when needed

### Industrial Design Specification

**Shape:**
- Asymmetric pebble form, one end slightly narrower (seed/mango reference)
- ~38mm × 46mm × 10mm
- C2 curvature continuity (no visible break lines between surfaces)
- Gently domed front, slight concavity on back for body contact
- 40-60% roundness score (massive curves, approaching oval)

**Material:**
- Yttria-stabilized zirconia ceramic (YSZ)
- Satin glazed finish — soft warmth, not clinical gloss
- Kaolin-inspired warm cream with champagne undertones
- RF-transparent (antennas internal, no plastic break lines)
- Warm to touch (lower thermal conductivity than metal)

**Accent:**
- Hairline rose gold chamfer (optional) — a detail you discover, not a frame
- OR eliminate metal accent entirely (pure ceramic like Oura)
- No thick rim (reads as locket)

**Microphones:**
- 3-mic array integrated into ceramic texture
- "Texture camouflage" — mics appear as natural imperfections
- No visible pinhole array

**Chain/Cord:**
- Primary: Woven silk or cotton cord (warmer, organic)
- Optional: Thin gold chain (jewelry contexts)
- Clasp integrates with wear detection

### Status Indication (Trust Light)
- Translucent ceramic edge emits warm glow when preserving
- Material IS the diffuser — glow comes from within
- No separate LED dot or ring visible
- Warm amber color temperature
- "The device warms when it's listening" — metaphorically and literally

### Wear Detection
| Mode | Detection |
|------|-----------|
| Pendant | Clasp closure / movement sensor |
| Badge | Clip engagement / magnetic contact |

---

## Hardware Specifications

| Component | Spec | Capability |
|-----------|------|------------|
| Processor | Qualcomm QCS8550 (8-core, 4nm, NPU) | On-device ML, real-time processing |
| RAM | 2GB LPDDR5 | Smooth processing |
| Storage | 64GB NVMe | Weeks of preserved audio locally |
| Audio | 3-mic array, bone conduction | Clear conversation capture, voice isolation |
| Connectivity | BT 5.3 LE, WiFi 6E, NFC | Phone pairing, sync, tap-to-pair |
| Battery | 580mAh (18hr typical) | Full day of intentional use |
| Housing | Zirconia ceramic, satin glazed | Warm, durable, RF-transparent |

---

## Interaction Model

### Core Principle
**Wear = Record. Take off = Stop.**

Radically simple. No buttons to press, no voice commands, no decisions in the moment.

### What Happens When Worn
- Audio recording starts automatically
- On-device transcription runs
- Speaker diarization identifies voices
- Warm edge glow indicates active state

### What Amber Does NOT Do
- No proactive notifications
- No voice assistant
- No personality or opinions
- No "Hey Amber" wake word
- No reaching out unprompted
- No continuous video (audio-first)

### Input Methods
1. **Wear/Remove** — Primary interaction
2. **Companion app** — Review, search, query
3. *(Optional)* Single tap — mark moment as highlight

---

## Audio-First Philosophy

### Why Audio, Not Video

A pendant can't be aimed like a camera. You have no viewfinder, no framing, no control.

But audio captures everything — the exact words, the tone, the pauses, the voice. Audio doesn't need framing.

| Capture Type | Role |
|--------------|------|
| **Audio** | Primary. Continuous. Complete. |
| **No Camera** | Audio is complete. No visual capture needed. |

---

## Core Features

### 1. Conversation Preservation
- Continuous high-quality audio when worn
- On-device transcription (searchable text)
- Speaker diarization (who said what)
- 64GB = weeks of conversations locally

### 2. Speaker Recognition (Voice-Based)
- Speaker diarization identifies distinct voices
- Learn and remember voice signatures over time
- Associate names with voices
- "Who was in that conversation?" (via voice, not face)

### 3. Natural Language Query
- "What did Dr. Chen say about the medication?"
- "What did we agree on in that meeting?"
- "When did I last talk to Sarah?"
- Searches transcripts + voice signatures

### 4. File-First Sync
- See Architecture section below

---

## File-First Architecture

### Philosophy: Your Files, Your Storage

Like Obsidian — you own your data. The app is just a viewer.

```
┌─────────────────────────────────────────────────────────┐
│  AMBER DEVICE                                           │
│  Audio recording → Local storage (64GB)                 │
│  On-device transcription, face detection                │
└─────────────────────────────────────────────────────────┘
                          ↓ WiFi sync
┌─────────────────────────────────────────────────────────┐
│  YOUR CHOSEN STORAGE                                    │
│  • iCloud Drive                                         │
│  • Google Drive                                         │
│  • Dropbox                                              │
│  • Amber Sync (zero-knowledge encrypted)                │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  AMBER APP (renderer only)                              │
│  Reads your files. Provides search, timeline, queries.  │
│  Delete the app? Your files still exist.                │
└─────────────────────────────────────────────────────────┘
```

### File Format
- Audio files (standard format)
- JSON/Markdown sidecar with metadata:
  - Transcript
  - Faces detected
  - Timestamps
  - Highlights

### Key Principles
- No vendor lock-in
- If Amber (company) disappears, your files remain
- Export anytime
- Open standards where possible

---

## Privacy Architecture

### On-Device First
- All ML processing on-device
- Transcription on-device
- Face recognition on-device
- Nothing leaves device without explicit choice

### Transparency
- Warm glow indicates active state
- Others can see Amber is on
- No hidden recording

### User Control
- Choose when to wear (intentional)
- Choose where to sync
- Choose what to delete
- No data harvesting, no ads

---

## Companion App (High-Level)

### Purpose
The app is where you reach into your preserved conversations.

### Core Screens
1. **Timeline** — Chronological view of conversations
2. **Search** — Natural language queries
3. **People** — Faces encountered, with conversation history
4. **Conversation Detail** — Audio playback, transcript, faces, highlights

### Interaction Principles
- Pull, don't push (no notifications by default)
- Search-first (query your memory)
- Minimal UI (content is the focus)
- Warmth in design (matches device aesthetic)

---

## What's NOT in Scope

- No AR/VR features
- No real-time translation
- No social features (no sharing, no feeds)
- No gamification
- No AI personality
- No proactive summaries
- No continuous video recording
- No cloud dependency

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Audio clarity | Clear voice capture in normal environments |
| Transcription accuracy | 95%+ for clear speech |
| Query relevance | 90%+ useful results |
| Battery life | 18hr typical use |
| Sync reliability | Seamless background sync |
| User control | Full ownership of files |
