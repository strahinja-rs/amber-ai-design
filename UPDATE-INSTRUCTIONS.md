# Foundation Docs Update Instructions

**Created:** Session conversation ~13:30, Feb 3 2026
**Purpose:** Preserve context for updating foundation docs after pivot from visual-moments to audio-first positioning.

---

## The Pivot Summary

**Original concept:** "Preserve moments" — visual + audio, sacred memories, nostalgic
**New concept:** "Never forget what was said" — audio-first, conversations, security/comfort

---

## Key Decisions Made

| Decision | Final Answer |
|----------|--------------|
| Core promise | "Never forget what was said" / "Never lose what matters" |
| Primary capture | Audio (continuous when worn) |
| Video role | Context only — periodic stills, face detection. NOT the hero. |
| Primary audience | Medical/Caregivers (40-80% forgotten, highest stakes) |
| Secondary audience | Professionals (meetings, agreements, context) |
| Tertiary audience | Personal high-stakes conversations |
| Form factor | Pendant-first, aesthetic badge option |
| Interaction | Wear = record. Take off = stop. Radically simple. |
| Architecture | File-first (your files, your storage — like Obsidian) |
| Warmth meaning | Comfort object, psychological security — NOT visual warmth |

---

## Files to Update

### 1. foundation/01-PHILOSOPHY.md

**Changes needed:**
- Shift from "preserve moments" to "preserve conversations/words"
- Warmth = comfort/security in anxious situations, not visual nostalgia
- Core insight still holds: device is part of you
- "Wear it when it matters" still holds
- Add: Peace of mind, not frantically note-taking
- Add: Audio-first rationale (you can't frame video from a pendant)

**Key lines to update:**
- "Everything I get in touch with gets preserved" → "Never lose what matters" or "Every word, kept"
- Remove/reduce visual nostalgia language
- Add comfort object framing

### 2. foundation/02-JTBD.md

**Changes needed:**
- Primary JTBD: "preserve what was said" not "preserve moments"
- Emotional job: Feel secure, peace of mind (not nostalgic)
- Update use cases to emphasize conversations

**New Primary JTBD:**
> When I'm in a conversation that matters — medical, professional, personal —
> I want to preserve exactly what was said without disrupting my presence
> So I can recall it accurately later and be fully present now.

### 3. foundation/03-AUDIENCE.md (CREATE NEW)

**Content needed:**
- Primary: Medical/Caregivers
  - 40-80% of medical info forgotten immediately
  - 53M family caregivers in US
  - HIPAA doesn't restrict patient recording
  - Pain: anxiety, overwhelm, forgotten instructions
  - Current alternatives: note-taking (disrupts presence), asking to repeat (embarrassing), phone recording (awkward)

- Secondary: Professionals
  - Hallway conversations, networking, dinners
  - Context that software can't capture
  - Name/face/context recall
  - Current alternatives: CRM (manual entry), meeting transcription (scheduled calls only)

- Tertiary: Personal high-stakes conversations
  - Important relationship discussions
  - Less urgent but valuable

### 4. foundation/04-POSITIONING.md (CREATE NEW)

**Content needed:**
- Category: Personal audio preservation device (not AI assistant, not meeting recorder)
- Differentiation from Plaud: Warm vs cold, personal vs professional, comfort vs utility
- Differentiation from Meta/Limitless: Privacy-first, file-first, no surveillance capitalism
- Positioning statement format:
  > For [audience] who [situation], Amber is the [category] that [benefit] because [reason to believe].

### 5. foundation/05-BRAND.md

**Changes needed:**
- Update tagline from "Everything I get in touch with" to audio-focused
- Warmth = comfort/security, not visual
- Voice: still warm, quiet, honest
- Add: "comfort object" framing
- Keep: Say preserve/keep. Don't say record/capture.
- Keep: Amber colors, jewelry aesthetic

**Tagline candidates:**
- "Never lose what matters."
- "Every word, kept."
- "Wear it when it matters." (still works)
- "Be present. Remember everything."

### 6. foundation/06-PRD-DEVICE.md

**Changes needed:**
- Update to reflect audio-first
- Video section: context capture (stills, face detection), not continuous video
- Remove any "bookmark" feature complexity
- Interaction: Wear = record. That's it.
- Add file-first architecture details
- Keep hardware specs as-is

### 7. foundation/07-DELIVERABLES-SPEC.md (CREATE NEW)

**Content needed:**
- Brand Identity spec (20%)
  - Logo: amber/golden, warm, jewelry-like
  - Colors: confirmed palette
  - Typography: TBD, characterful
  - Guidelines: voice, usage

- Marketing Website spec (30%)
  - Page 1: Hero/Universal — "Never forget what was said"
  - Page 2: Medical — "Never forget what the doctor said"
  - Page 3: Professional — "Conversations that matter happen off the record"

- Product Interface spec (30%)
  - Companion app screens: Timeline, Search, People, Moment Detail, Settings
  - Design principles: Pull not push, search-first, minimal UI

- Campaign Visuals spec (20%)
  - Medical audience creative
  - Professional audience creative
  - Universal/emotional creative

---

## Update Order

1. 01-PHILOSOPHY.md (update existing)
2. 02-JTBD.md (update existing)
3. 03-AUDIENCE.md (create new)
4. 04-POSITIONING.md (create new)
5. 05-BRAND.md (update existing)
6. 06-PRD-DEVICE.md (update existing)
7. 07-DELIVERABLES-SPEC.md (create new)
8. Update CLAUDE.md with new summary
9. Update STATUS.md with progress

---

## Research Findings to Incorporate

**From Gemini research:**
- Plaud Note success: $10M+, audio-only, utility focus
- Meta bought Limitless, killed hardware — privacy gap opportunity
- "Calm Technology" principles: peripheral communication, invisible interface
- ADHD community as early adopters (but don't market to condition)
- Pricing: $199-249, avoid subscription-only

**From Claude research:**
- 40-80% of medical info forgotten immediately
- HIPAA doesn't restrict patient recording
- 39 states one-party consent
- 53M family caregivers
- Privacy is #1 concern (34%), beats stigma (18%)
- "Never market to the condition"
- Stigma is a design problem, not marketing

---

## Voice/Language Guidelines

**Say:** preserve, keep, held, remember, words, conversation, peace of mind, security, comfort
**Don't say:** record, capture, store, footage, surveillance, AI assistant, companion

---

## After Updates Complete

1. Verify all docs are consistent
2. Update CLAUDE.md summary
3. Update STATUS.md to mark foundation complete
4. Begin design execution
