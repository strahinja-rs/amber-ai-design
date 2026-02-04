# Prompt History Log

Track all significant prompts across tools for hackathon documentation.

---

## Session Overview

**Product:** Amber — AI pendant for conversation preservation
**Final Positioning:** "Never lose what matters" (audio-first, security-focused)
**Primary Audience:** Medical/Caregivers
**Tools Used:** Claude Code, Gemini Deep Research, Claude Research

---

## Phase 1: Infrastructure Setup

### Claude Code — Project Setup
**Outcome:** Worked

Initial setup establishing hackathon infrastructure. Created:
- Directory structure (`/foundation/`, `/deliverables/`, `/research/`)
- CLAUDE.md (project context for Claude Code)
- STATUS.md (persistent tracker)
- PROMPTS.md (this file)
- Installed frontend-design skill from Anthropic repo

**Key Decision:** Use JTBD (Jobs to Be Done) framework for product development. Foundation docs structured in dependency order: Philosophy → JTBD → Audience → Positioning → Brand → PRD.

---

### Claude Code — Initial Foundation Drafts
**Outcome:** Worked

Drafted 01-PHILOSOPHY.md, 02-JTBD.md, 05-BRAND.md from user's Initial Idea.md.

**Key Concepts Captured:**
- Device is "part of you" not a separate entity (solves "third presence" problem)
- Name: Amber (fossilized resin, jewelry, warm colors)
- Language: Say "preserve/keep" not "record/capture"
- Intentional use: "Wear it when it matters"

---

## Phase 2: Research

### Gemini Deep Research — Market Landscape
**Outcome:** Worked

**Prompt:**
```
The research goal is to understand the AI wearable market landscape and identify which audience segments have the most urgent need for a "memory preservation" device.

Context: We're designing "Amber" — an AI pendant positioned as "wear it when it matters." Unlike competitors (Friend, Humane Pin, Rabbit R1), Amber is NOT positioned as a companion or AI assistant. It's positioned as part of you — like glasses help you see, Amber helps you remember. Intentional use, not always-on.

I need to understand:

1. COMPETITOR ANALYSIS
- How did Humane Pin, Friend, Rabbit R1, Rewind, and other AI wearables position themselves?
- Why did some fail commercially or face backlash?
- What positioning is saturated (AI companion, assistant, friend)?
- What positioning is underserved?

2. AUDIENCE SEGMENTS
For "memory preservation" use cases (not AI assistant use cases), which segments have the MOST urgent need:
- Professionals (meetings, negotiations, client context)
- Healthcare situations (patients remembering diagnoses, caregivers)
- Parents (capturing childhood moments)
- Travelers/life-loggers
- People with memory conditions (early cognitive decline, ADHD)
- Students/learners

For each segment: pain points, current alternatives, willingness to pay, social acceptability of wearing such a device.

3. POSITIONING GAPS
- Is "intentional use" (wear it when it matters) a differentiator in this market?
- Has anyone positioned an AI wearable as a "tool" rather than "companion"?

Output: Structured report with citations. Flag conflicting information rather than averaging it.
```

**Key Findings:**
- Plaud Note: $10M+ sales, audio-only, utilitarian positioning = success
- Meta acquired Limitless (Dec 2025), killed hardware → privacy gap opportunity
- Companion/friend positioning is saturated and problematic
- Tool positioning is underserved

---

### Claude Research — Audience Deep-Dive
**Outcome:** Worked

**Prompt:**
```
<context>
I'm designing Amber — an AI pendant for memory preservation. Key positioning: "Wear it when it matters." Intentional use, not 24/7. Not a companion or friend — a tool that's part of you, like glasses.
</context>

<task>
Deep analysis on these specific questions:

1. For the "professional context" use case (meetings, negotiations, client relationships):
   - What do professionals currently use to capture meeting context?
   - What's the pain of forgetting names, faces, prior conversations?
   - Would wearing a visible device be socially acceptable in professional settings?
   - What's the ROI argument for such a device?

2. For the "high-stakes medical" use case (patients/caregivers):
   - Research on patient recall of medical consultations (what % is forgotten?)
   - Legal/ethical considerations of recording medical appointments
   - Existing solutions (recording apps, note-takers)
   - Emotional weight of this use case

3. For the "memory support" use case (early cognitive decline, ADHD):
   - Is there stigma around assistive memory devices?
   - What do people with ADHD currently use for context capture?
   - Sensitivity considerations for marketing to this segment

Provide confidence levels for each claim. Note areas of uncertainty.
</task>
```

**Key Findings:**
- 40-80% of medical information forgotten immediately after appointment
- 53M family caregivers in US
- HIPAA doesn't restrict patients from recording own appointments
- 39 US states are one-party consent
- 75% of professionals already use AI tools
- "Never market to the condition" — market to the job instead

---

## Phase 3: Major Pivot — Audio-First

### The Problem
Initial assumption was video + audio for "preserving moments" (nostalgic framing).

User challenged this with a key insight:
> "You're still not seeing what you're capturing. There's no video like on the camera. I don't see the use case, we're going in circles. What does the research say?"

### The Realization
A pendant can't be aimed like a camera. You have no viewfinder, no framing, no control over what's captured visually. But audio captures everything — the exact words, tone, pauses.

### Resolution
**Audio-first architecture:**
- Audio = Primary. Continuous. Complete.
- Video/Stills = Context only. Face detection. Setting awareness.
- NOT user-triggered continuous video

This aligned with research showing Plaud Note's success (audio-only) and the core JTBD of "never forget what was said."

---

## Phase 4: Audience Selection

### Ranking by Urgency
When the job is "never forget what was said," which audience has the highest stakes?

| Segment | Urgency | Why |
|---------|---------|-----|
| Medical/Caregivers | Highest | 40-80% forgotten, health consequences |
| Professionals | High | Deals lost, context missing |
| Personal | Medium | Meaningful but lower frequency |
| Parents | Lower | User isn't a parent, less authentic |

**Decision:** Medical/Caregivers as primary audience. The stakes are highest, the pain is documented, and the use case is clear.

---

## Phase 5: Brand Reframe

### Original Concept
- Nostalgic framing: "Everything I get in touch with gets preserved"
- Visual preservation focus
- Memory as treasure

### Problem
After audio-first pivot, nostalgic framing felt misaligned. Also, medical audience needs reassurance, not sentimentality.

### New Framing
- Security/comfort: "Never lose what matters"
- **Warmth = psychological security**, not visual aesthetic
- The pendant is a "comfort object for anxious situations"
- Peace of mind in high-stakes conversations

**Updated Taglines:**
- Universal: "Never lose what matters."
- Medical: "Never forget what the doctor said."
- Professional: "Conversations that matter happen off the record."

---

## Phase 6: Architecture Decision — File-First

### The Concept
Inspired by Obsidian — your data is yours. The app is just a viewer.

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

### Key Principles
- No vendor lock-in
- If Amber (company) disappears, your files remain
- Export anytime
- Open standards where possible
- Competitive differentiation vs. Meta (surveillance capitalism)

---

## Phase 7: Design Execution

### Brand Identity
**Outcome:** Worked

Created comprehensive brand guidelines:
- Colors: #D4A253 (amber), #4A3728 (brown), #F5EDE0 (cream), #1A1614 (black)
- Typography: Fraunces (display), Source Serif 4 (body), Plus Jakarta Sans (UI)
- Voice: Warm, quiet, honest, secure, timeless
- Anti-patterns: No blue, no purple, no AI clichés, no cold/clinical

**Files Created:**
- `deliverables/brand/BRAND-GUIDELINES.md`
- `deliverables/brand/tokens.css`

---

### Marketing Website
**Outcome:** Worked

Three landing pages targeting different audiences:

**Universal Home (`index.html`):**
- Hero: "Never lose what matters"
- Value props: Be present, Search memory, File-first
- Use case previews linking to segment pages
- How it works: Wear → Preserve → Recall

**Medical (`medical.html`):**
- Hero: "Never forget what the doctor said"
- Problem: 40-80% forgotten stat
- Solution: Be present, Amber remembers
- Legal clarity: HIPAA, consent info
- Scenarios: Diagnosis, medications, hospital visits

**Professional (`professional.html`):**
- Hero: "Conversations that matter happen off the record"
- Gap: Meeting software vs. hallway conversations
- Use cases: Networking, client dinners, conferences, negotiations
- Form factor: Pendant or badge option

**Files Created:**
- `deliverables/website/index.html`
- `deliverables/website/medical.html`
- `deliverables/website/professional.html`
- `deliverables/website/styles.css`
- `deliverables/website/medical.css`
- `deliverables/website/professional.css`

---

### Companion App
**Outcome:** Worked

Five key screens demonstrating core functionality:

1. **Timeline** — Chronological conversation list with date groupings, previews
2. **Search** — Natural language queries ("What did Dr. Chen say about medication?")
3. **People** — Face grid with conversation counts
4. **Conversation Detail** — Audio player, synced transcript, faces present
5. **Settings** — Device status, storage config, privacy controls

**Design Principles:**
- Dark mode primary
- Amber accents for interactive elements
- Minimal UI — content is focus
- Pull, don't push (no notification clutter)

**Files Created:**
- `deliverables/app/index.html`
- `deliverables/app/app.css`

---

### Campaign Visuals
**Outcome:** Worked (briefs ready)

Three campaign briefs with Nano Banana prompts:

**Campaign 1: Medical**
- Message: "Never forget what the doctor said"
- Visual: Warm medical consultation, patient at ease
- Tone: Reassuring, peaceful

**Campaign 2: Professional**
- Message: "Conversations that matter happen off the record"
- Visual: Conference networking, evening ambient lighting
- Tone: Confident, capable

**Campaign 3: Universal**
- Message: "Never lose what matters"
- Visual: Intimate conversation moment
- Tone: Emotional, meaningful

**Example Nano Banana Prompt (Medical Hero):**
```
Intimate medical consultation scene, warm golden lighting, woman in her 50s sitting across from doctor, engaged and calm expression, modern comfortable office with natural light from window, shallow depth of field, amber pendant visible on woman's chest with subtle glow, warm color palette with honey and cream tones, professional photography style, no harsh shadows, atmosphere of trust and presence
```

**Files Created:**
- `deliverables/campaign/CAMPAIGN-BRIEFS.md`

---

## Key Prompts That Worked

### For Research
- Structured prompts with clear sections (1. COMPETITOR, 2. AUDIENCE, 3. GAPS)
- Explicit request for citations and flagging conflicting info
- Context block + task block format for Claude Research

### For Pivots
- "What does the research say?" — grounding decisions in data
- Asking "which audience has this job MOST urgently?" — forcing prioritization

### For Design Execution
- Reading foundation docs before designing (context loading)
- Creating token systems before components
- Building pages in parallel once styles established

---

## Key Stats (For Future Reference)

- 40-80% of medical info forgotten immediately
- 53M family caregivers in US
- HIPAA doesn't restrict patient recording
- 39 states one-party consent
- 75% of professionals already use AI tools
- Plaud Note: $10M+ sales (audio-only, utilitarian)

---

## Files Created This Session

### Foundation (`/foundation/`)
- 01-PHILOSOPHY.md
- 02-JTBD.md
- 03-AUDIENCE.md
- 04-POSITIONING.md
- 05-BRAND.md
- 06-PRD-DEVICE.md
- 07-DELIVERABLES-SPEC.md

### Deliverables (`/deliverables/`)
- brand/BRAND-GUIDELINES.md
- brand/tokens.css
- website/index.html
- website/medical.html
- website/professional.html
- website/styles.css
- website/medical.css
- website/professional.css
- app/index.html
- app/app.css
- campaign/CAMPAIGN-BRIEFS.md

---

## Phase 8: Product Render — Midjourney

### Goal
Create physical product render of the Amber pendant for bonus points.

### Current Best Result
`research/midjourney/fav.png`

### Working Prompt (v1)
```
wearable tech pendant, soft rounded disc with chamfered edges, matte ceramic finish in warm champagne sand color, small device the size of a coin, subtle beveled rim catching light, three tiny pinhole microphones arranged in arc near top edge, delicate warm amber LED ring around perimeter, thin minimal gold chain, clean refined industrial design inspired by Bang Olufsen, product photography floating against deep charcoal background, soft dramatic rim lighting, subtle contact shadow
```

### Refined Prompt (v2 — hairline gold, visible glow, warmer color)
```
wearable tech pendant, soft rounded disc with chamfered edges, matte ceramic finish in warm honey sand color, small device the size of a coin, hairline thin gold edge accent, three tiny pinhole microphones arranged in arc near top, subtle warm amber LED glow visible at edge indicating active state, thin minimal gold chain, clean refined industrial design inspired by Bang Olufsen, product photography floating against deep charcoal background, soft dramatic rim lighting --ar 1:1 --s 75 --no thick bezel frame locket compact mirror cold white cream
```

### Issues Hit
1. "Amber" → literal gemstone
2. "Pebble" → river rock
3. Visible camera → surveillance feeling
4. Gold rim keeps going thick → reads as locket
5. Ceramic → renders cream/white, not warm honey
6. LED glow → MJ rarely renders it
7. Lack of concrete industrial design references for "warm wearable tech"

### Research Done
- Oura Ring Ceramic — zirconia ceramic, glazed pottery finish, "doesn't look like tech"
- B&O Gold Tone — "pearl-blasted, hairline-brushed to soft sheen"
- Limitless Pendant — dual aluminum disc, magnetic clasp, Ammunition Group design
- Humane AI Pin — squircle, ex-Apple team, two-piece magnetic

### Design Direction Locked
- Soft rounded disc (works as pendant + badge)
- Matte ceramic (warm to touch, not cold like aluminum)
- Warm honey/sand color (not cream/white)
- Hairline gold edge (not thick rim)
- 3 mic pinholes (subtle, near top)
- Warm LED glow (status indicator, transparency)
- No visible camera lens (audio-first, camera is incidental)

### Further Research Needed
Use `Meta prompt for research.md` to write Gemini/Claude Research prompts for:
- Warm ceramic wearables (pendants/badges, not rings/watches)
- Camera integration without surveillance feel
- Subtle LED indicators in premium electronics
- "Warm technology" designers/studios
- Midjourney-friendly terminology

---

## Phase 9: Industrial Design Research

### Research Prompts Written
- `research/gemini-industrial-design.md` — breadth scan
- `research/claude-industrial-design.md` — depth analysis

### Key Insight
**Device aesthetics determine brand aesthetics.** The physical product is the source of truth. Colors, materials, and visual language flow from the device design outward to brand, website, app, and campaign.

If research reveals that "honey ceramic" should be "warm bisque porcelain" or gold accent should be "brushed brass" — the entire brand palette may shift.

### Workflow (DO NOT SKIP STEPS)

**Step 1: Run Research**
- Gemini Deep Research first (edit plan before execution)
- Claude Research second (answer clarifying questions)

**Step 2: Review & Discuss (BLOCKING)**
Bring research outputs back. Discuss before proceeding:
- Which product references are most relevant to Amber?
- Which material terminology solves MJ rendering issues?
- Which designer aesthetics align with "warm tech" vision?
- Any color/material pivots needed?

**Step 3: Update Foundation Documents**
Based on confirmed findings, update in order:

1. `foundation/06-PRD-DEVICE.md` — Industrial design spec
   - Exact materials (trade names, finishes)
   - Dimensions and proportions
   - Camera placement and treatment
   - LED/indicator approach
   - Color specifications

2. `foundation/05-BRAND.md` — Brand guidelines
   - Color palette (may change based on material research)
   - Visual language
   - Photography/render style direction

3. `CLAUDE.md` — Update brand tokens if colors change

**Step 4: Write Midjourney Prompts**
Derive prompts directly from updated PRD — exact product description, not abstract concepts.

### Products to Investigate
- Humane AI Pin
- Narrative Clip
- Senstone
- Bellabeat Leaf
- Cuff Smart Jewelry
- Limitless Pendant
- Rewind Pendant

### Problems to Solve
1. "Amber" in MJ → literal gemstone
2. "Pebble" in MJ → river rock
3. Visible camera → surveillance feeling
4. Gold rim renders thick → locket aesthetic
5. "Ceramic" → cold cream/white, not warm honey
6. LED glow → MJ rarely renders correctly
7. Lack of concrete industrial design references

### Status
- [x] Research prompts written
- [x] Gemini research complete
- [x] Claude research complete
- [x] Research reviewed and discussed
- [x] PRD-DEVICE.md updated
- [x] BRAND.md updated
- [x] CLAUDE.md updated
- [x] DELIVERABLES-SPEC.md updated
- [x] Midjourney product render achieved
- [ ] Campaign lifestyle photos (blocked — omni ref not working for scenes)

---

## Phase 10: Midjourney Product Iteration

### Working Product Prompt
```
Industrial design product photography, wearable tech pendant with bright vivid amber edge glow, solid precision ceramic body in champagne cream, asymmetric teardrop-pebble form tapered at top, kaolin-inspired zirconia with satin finish, soft amber light bleeding through translucent ceramic perimeter, subsurface scattering glow effect, designed by Naoto Fukasawa, minimal woven cord, dramatic low-key lighting on dark charcoal background, 8K --ar 4:5 --s 75 --style raw --no hollow cavity opening lamp hole gemstone cold white
```

### Key MJ Learnings
- "ceramic" alone → cold white. Use "kaolin-inspired zirconia"
- "pebble" alone → river rock. Use "asymmetric teardrop-pebble form tapered at top"
- "amber" → literal gemstone. Avoid the word, use "warm champagne cream"
- V7 Omni Reference (--oref) for object consistency
- Omni weight 100-150 for objects
- `--style raw` + `--s 50-75` for realism

### Blocked: Campaign Lifestyle Shots
Omni Reference doesn't composite product well into lifestyle scenes. Need alternative:
- Generate scenes without product, composite in Photoshop
- Or describe product abstractly in scene prompts
- Or use different tool

---

## Phase 9b: Research Synthesis & Decisions

### Research Outputs
- `research/gemini-output-Warm Tech Wearable Design Research.md`
- `research/claude-output-Designing Warm Wearable Tech Without the Creep Factor.md`

### Key Research Findings

**The Camera Question:**
Both reports converge: cameras trigger surveillance response regardless of aesthetics.
- Friend (Tab → Friend): Removed camera in redesign, won iF Design Award 2025
- Narrative Clip: Passive/hidden camera = "worse than Google Glass"
- Humane AI Pin: Trust Light helped but still read as surveillance
- Audio-only wearables (Plaud, Bellabeat) succeed commercially

**Material Terminology (Solves MJ Problem):**
Instead of "ceramic" (renders cold white), use:
- "Kaolin-inspired" (Oura Cloud) — warm off-white, pottery feel
- "Celadon-glazed" — traditional Asian warmth
- "Champagne zirconia" (Apple Starlight) — gold undertones
- "Satin glazed" — soft warmth vs clinical gloss

**Shape Language:**
- Apple's Roundness Principle: body-contact objects need 40-60% roundness
- C2 curvature continuity: no visible "break lines" where curves begin
- Natural forms: river stone, worry stone, seed — inherently asymmetric
- Perfect circles read as manufactured; asymmetric reads as organic

**Indicator Strategy:**
- Trust Light (Humane): Making recording visible is better than hiding
- Haptic-only (Bellabeat): Completely eliminates "blinking gadget"
- Edge-glow through material (Spktrl, Ringly): Material IS the diffuser

**Designer References for MJ:**
- Naoto Fukasawa: "Without Thought" — dissolves into behavior
- Jasper Morrison: "Super Normal" — quiet sophistication
- Benjamin Hubert / LAYER: Experience-driven wearables
- Map Project Office: "Little Signals" — calm notifications

### Decisions Made

| Question | Decision | Rationale |
|----------|----------|-----------|
| **Camera** | REMOVE | Research unanimous: cameras trigger surveillance. Audio-only succeeds. |
| **Shape** | Asymmetric pebble, ~38mm × 46mm | Pendant-first. One end narrower (seed/mango form). Works as badge too. |
| **Material** | Kaolin-inspired zirconia ceramic | Warm, pottery feel. Not cold white. |
| **Finish** | Satin glazed | Soft warmth, not clinical gloss |
| **Color** | Warm champagne/cream undertones | "Kaolin-inspired cream" — not pure honey (no precedent) |
| **Gold accent** | Hairline chamfer or eliminate | Research: "detail you discover, not a frame." Thick rim = locket. |
| **Chain** | Woven cord (primary), gold chain (optional) | Cord is warmer, more organic |
| **Mics** | Integrated into texture | "Texture camouflage" — no visible pinhole array |
| **Indicator** | Edge glow through translucent ceramic | Trust Light concept + material-as-diffuser. Warm glow when preserving. |

### Implications

**Face Recognition Removed:**
No camera = no face detection. Options:
1. Remove "People" feature entirely
2. Rework as "Speakers" using voice recognition (speaker diarization)

**App Screen Changes:**
- Timeline: Remove "faces detected" → "speakers detected"
- People: Remove or rework as voice-based Speakers
- Conversation Detail: Remove "Faces present"
- Settings: Remove "Face management"

### The Core Insight

> "Amber is attempting something genuinely unprecedented—a warm ceramic audio pendant. The research provides strong foundations in adjacent categories (camera badges, warm ceramic rings, haptic-only pendants), but the specific combination has no direct precedent. This is design innovation territory, not iteration on existing solutions."
> — Claude Research output

### Amber Material Reference

The name "Amber" references fossilized tree resin:
- Translucent, golden-orange to honey-brown
- Warm to touch (unlike stone)
- Literally glows when backlit
- Range: pale yellow ("butter amber") to deep cognac
- Baltic amber = warm honey with internal inclusions

MJ solution: describe the *quality* without the word. "Fossilized honey tone," "warm translucent," "Baltic amber color."

---

## Phase 11: Nano Banana Prompts

### Nano Banana Campaign Prompts
Updated `NANO-BANANA-PROMPTS.md` to align with foundation docs:
- Changed device description from "translucent honey teardrop" to "asymmetric cream ceramic pebble"
- Glow changed from "throughout" to "edge glow only (Trust Light)"
- Added woven cord as primary, gold chain as optional
- All prompts now reference "the pendant from the attached image" for image-to-image generation
- Added badge form factor section for professional contexts

### Badge Form Factor Prompts Added
- Badge — Product Shot
- Badge — Conference Setting
- Badge — Meeting Room
- Badge — Close-up on Lapel
- Badge — Walking the Floor

---

## Phase 12: Logo & App Icon

### Logo Generation Prompt (Nano Banana)

```
Design a logo and app icon for "Amber" based on the attached product image and brand guidelines.

**Product:** The attached image shows Amber — a wearable audio pendant in warm cream ceramic with an asymmetric pebble form.

**Brand Essence:**
- Tagline: "Never lose what matters"
- Personality: Warm, quiet, honest, secure, timeless
- NOT an AI assistant — a tool that's part of you

**Color Palette:**
- Primary: #D4A253 (amber/golden) — the Trust Light glow
- Secondary: #4A3728 (deep warm brown)
- Accent: #F5EDE0 (soft cream) — device body
- Background: #1A1614 (warm black)

**Logo Direction:**
- Inspired by the pendant's asymmetric pebble form
- Could suggest: warmth, glow, preservation, conversation
- Feels like jewelry brand, NOT tech startup
- Simple enough to work as app icon
- Works on light and dark backgrounds

**What to AVOID:**
- Geometric/angular shapes
- Blue or purple tones
- AI clichés (neural networks, circuits, speech bubbles)
- Cold, clinical aesthetics
- Literal amber gemstone
- Generic tech startup look

**Deliverables:**
1. Primary logo (wordmark + symbol)
2. App icon (symbol only, works at 1024×1024 down to 16×16)
3. Favicon variant
```

### Symbol-Only Prompt (Final — for website icon)

```
Design a simple symbol/icon for "Amber" — a wearable audio pendant.

Based on the attached product: asymmetric pebble shape with warm amber edge glow.

**Requirements:**
- Symbol only, no text
- Asymmetric organic pebble silhouette with subtle glow suggestion
- Works at small sizes (favicon, nav icon)
- Single color: #D4A253 (amber/golden)
- Minimal, clean, iconic

**Avoid:** Gemstones, circles, tech symbols, complexity.
```

---

## Phase 13: Campaign Visuals Organization

### Image Generation Complete
Generated 13 images via Nano Banana covering all campaign needs.

### Final Organization
Organized from raw screenshots (`/assets/final/`) to proper deliverable structure:

```
/deliverables/campaign/
├── CAMPAIGN-BRIEFS.md
├── brand/
│   ├── logo-glow.png          — Abstract amber glow graphic
│   ├── unboxing-cream.png     — Hands opening cream box
│   └── unboxing-premium.png   — AMBER branded box unboxing
├── medical/
│   ├── caregiver-hands.png    — Hands holding elderly person
│   └── doctor-consultation.png — Woman with pendant, doctor visit
├── product/
│   ├── hero-pendant.png       — Dramatic hero shot, dark bg
│   ├── pendant-dramatic.png   — Strong amber glow, dark bg
│   ├── pendant-flat-glow.png  — Flat lay, cream bg
│   ├── pendant-on-sweater.png — Close-up on dark knit sweater
│   └── pendant-velvet.png     — On dark velvet
├── professional/
│   ├── badge-blazer.png       — Badge form on suit lapel
│   └── networking-event.png   — Two professionals conversing
└── universal/
    └── grandmother-moment.png — Grandmother/granddaughter intimate
```

### Image Mapping (Screenshot → Deliverable)

| Original Filename | Deliverable Name | Campaign |
|-------------------|------------------|----------|
| Screenshot at Feb 03 17-12-04.png | medical/caregiver-hands.png | Medical |
| Screenshot at Feb 03 17-12-28.png | product/pendant-flat-glow.png | Product |
| Screenshot at Feb 03 17-12-44.png | brand/unboxing-cream.png | Brand |
| Screenshot at Feb 03 17-13-17.png | professional/networking-event.png | Professional |
| Screenshot at Feb 03 17-13-36.png | product/pendant-velvet.png | Product |
| Screenshot at Feb 03 17-13-50.png | medical/doctor-consultation.png | Medical |
| Screenshot at Feb 03 17-14-08.png | universal/grandmother-moment.png | Universal |
| Screenshot at Feb 03 17-14-21.png | product/pendant-on-sweater.png | Product |
| Screenshot at Feb 03 17-14-32.png | professional/badge-blazer.png | Professional |
| Screenshot at Feb 03 17-14-51.png | product/pendant-dramatic.png | Product |
| Screenshot at Feb 03 17-16-20.png | brand/unboxing-premium.png | Brand |
| Hero image.png | product/hero-pendant.png | Product |
| logo.png | brand/logo-glow.png | Brand |

### Coverage Check

| Campaign | Brief Requirement | Images Available |
|----------|-------------------|------------------|
| Medical | Hero, Social, Story | doctor-consultation, caregiver-hands |
| Professional | Hero, Social, LinkedIn | networking-event, badge-blazer |
| Universal | Hero, Social, Story | grandmother-moment |
| Product | Multiple renders | 5 product shots |
| Brand | Logo, Unboxing | logo-glow, 2 unboxing shots |

### Status
- [x] Images generated (Nano Banana)
- [x] Images copied to website/images for presentation
- [x] Images organized in deliverables/campaign with proper names
- [x] Prompt log updated

---

## Phase 14: App Alignment & Polish

### Goal
Update companion app mockups to align with website design system and foundation docs.

### Analysis Done
1. Read all foundation docs (01-07)
2. Reviewed app deliverables (index.html, app.css)
3. Reviewed website deliverables for alignment reference

### Issues Identified

| Issue | Gap | Fix |
|-------|-----|-----|
| Typography | Website uses Fraunces for display headings; app only had Plus Jakarta Sans + Source Serif 4 | Added Fraunces font |
| Visual polish | Website has glow effects, lift animations; app was static | Added transitions and amber glow |
| Onboarding | Foundation spec recommended it; app was missing | Added Screen 1: Onboarding |
| Showcase presentation | Basic grid with plain labels | Added amber pill badges, subtle gradient |

### Changes Made

**Typography:**
- Added Fraunces font import
- Created `--font-display: 'Fraunces'` variable
- Applied to `.showcase-title` and `.header-title`
- Added letter-spacing for refined typography

**Visual Polish:**
- Phone frames: Subtle amber glow (`rgba(212, 162, 83, 0.08)`) + hover lift
- Conversation cards: Hover lift + shadow
- Result cards: Hover lift + shadow
- Person cards: Hover lift + shadow
- Play buttons: Glow on hover (`0 0 20px rgba(212, 162, 83, 0.4)`)
- Tab items: Smooth color transitions
- Waveform: Pulse animation for "active" bars

**New Onboarding Screen (now Screen 1):**
- Device illustration with animated amber glow
- Tagline: "Never lose what matters."
- Subtitle explaining value proposition
- Three feature highlights with icons:
  - "Wear it when it matters"
  - "Your files, your storage"
  - "Search your memory"
- "Get Started" CTA button

**Showcase Refinement:**
- Subtle amber gradient at page top
- Screen labels changed to amber pill badges (matching website hero labels)
- Decorative accent line below subtitle

### Screen Order (Final)
1. **Onboarding** — Welcome/value prop
2. **Timeline** — Conversation list
3. **Search** — Query results
4. **People** — Voice-identified contacts
5. **Conversation Detail** — Audio player + transcript
6. **Settings** — Device, storage, privacy

### Files Modified
- `deliverables/app/index.html`
- `deliverables/app/app.css`

### CSS Additions Summary
```css
/* New variables */
--font-display: 'Fraunces', Georgia, serif;

/* Key new styles */
.phone-frame:hover { transform: translateY(-4px); box-shadow: ... }
.conversation-card:hover { transform: translateY(-2px); }
.play-button:hover { box-shadow: 0 0 20px rgba(212, 162, 83, 0.4); }
.onboarding-screen { ... }
.device-glow { animation: pulse-glow 4s ease-in-out infinite; }
.screen-label { background: rgba(212, 162, 83, 0.1); border-radius: 20px; }
```

### Status
- [x] Foundation docs reviewed
- [x] App/website alignment gaps identified
- [x] Typography updated (Fraunces)
- [x] Visual polish added (glow, transitions)
- [x] Onboarding screen added
- [x] Onboarding moved to first position
- [x] Prompt log updated

---

## Phase 15: Final Polish & Students Page

### Goals
Final 40-minute sprint to polish all deliverables and add missing pieces.

### Changes Made

**1. Logo Integration (PNG)**
- Replaced `<span class="logo-symbol">◈</span>` with `<img src="images/logo.png" alt="Amber" class="logo-symbol">`
- Updated CSS `.logo-symbol` from text styling to image sizing:
  ```css
  .logo-symbol {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
  ```
- Applied to: index.html, medical.html, professional.html, students.html, presentation.html

**2. Favicon Addition**
- Added to all HTML files:
  ```html
  <link rel="icon" type="image/png" href="images/logo.png">
  <link rel="apple-touch-icon" href="images/logo.png">
  ```

**3. Hero Image Size Increase**
- `.product-pendant` increased from 280×340px to 420×520px
- Removed `<div class="product-glow"></div>` element (amber glow didn't match new images)

**4. Nav Link Fixes**
- Changed absolute paths (`/medical.html`) to relative paths (`medical.html`)
- Fixes local file browsing without server

**5. Students Landing Page (NEW)**
- Created `students.html` — "Never miss what the professor said."
- Created `students.css` — page-specific styles
- Sections: Hero, Problem (retention stats), Solution, Scenarios, Search, Privacy, Legal, CTA
- Added nav link to all pages

**Use Cases on Students Page:**
- Lectures (fast-paced, hard to take notes)
- Office hours (1-on-1 guidance)
- Study groups (collaborative discussions)
- Lab sessions (technical instructions)

**6. Homepage Use Cases Update**
- Removed "Personal" card (kept 3 audience-specific)
- Added "Students" card linking to students.html
- Updated grid: `grid-template-columns: repeat(3, 1fr)`
- Final cards: Healthcare, Professional, Students

**7. Foundation Doc Update**
- Updated `foundation/03-AUDIENCE.md` with Students/Learners as tertiary audience
- Added: problem statement, who they are, alternatives table, why Amber fits, key insight
- Updated positioning table to show 3 dedicated landing pages

### Image Allocations
Analyzed all images in `assets/final/` and allocated:
- `logo.png` → favicon, nav logo, footer
- `hero-main.png` → homepage hero
- `medical-hero.png` → medical.html hero (placeholder reference)
- `students-hero.png` → students.html hero
- `students-office-hours.png` → students.html solution section
- `badge-professional.png` → professional.html form factor section

### Files Modified
- `deliverables/website/index.html`
- `deliverables/website/medical.html`
- `deliverables/website/professional.html`
- `deliverables/website/styles.css`
- `deliverables/website/presentation.html`
- `foundation/03-AUDIENCE.md`

### Files Created
- `deliverables/website/students.html`
- `deliverables/website/students.css`

### Status
- [x] Logo PNG integrated across all pages
- [x] Favicon added to all HTML files
- [x] Hero image enlarged, glow removed
- [x] Nav links fixed for local browsing
- [x] Students landing page created
- [x] Homepage updated with 3 audience cards
- [x] Foundation 03-AUDIENCE.md updated
- [x] STATUS.md updated
- [x] PROMPTS.md updated
