# Midjourney Session Handover

## Context
Hackathon project: Amber — wearable audio preservation pendant. We spent this session doing industrial design research and iterating on product renders in Midjourney.

## What Was Accomplished

### 1. Industrial Design Research Complete
- Ran Gemini + Claude Research on warm wearable tech precedents
- Research outputs saved in `/research/`
- Key findings integrated into foundation docs

### 2. Foundation Docs Updated
All docs updated to reflect research findings:
- **Camera removed** — audio-only device now
- **Shape**: Asymmetric pebble, ~38mm × 46mm, one end narrower (seed/mango form)
- **Material**: Kaolin-inspired zirconia ceramic, satin glazed
- **Color**: Warm champagne cream body (quiet, neutral)
- **Trust Light**: Amber edge glow when active — brand color = glow
- **Chain**: Woven cord primary, gold chain optional

### 3. Product Render Achieved
We have a LOCKED product design in Midjourney:
- Asymmetric cream ceramic pebble with amber edge glow
- Location: Should be in user's MidJourney account, upscaled
- The user has the image URL for use as Omni Reference

## What's NOT Working

### Campaign/Lifestyle Prompts
The prompts for campaign visuals (medical consultation, professional networking, etc.) are NOT producing good results. Issues:
- Omni Reference isn't compositing the product well into scenes
- Need actual **photorealistic lifestyle photography**, not composited renders
- May need different approach: generate scenes separately, composite in Photoshop, or use different tool

## Key Decisions Made

| Decision | Choice |
|----------|--------|
| Camera | REMOVED — audio only |
| Shape | Asymmetric pebble (seed/mango), not egg |
| Body color | Champagne cream (quiet) |
| Glow color | Amber #D4A253 (Trust Light = brand) |
| Gold accent | Hairline chamfer or none |
| Indicator | Edge glow through ceramic (not LED dot) |

## Brand-Device Relationship
- Device at rest = quiet cream (disappears, Fukasawa philosophy)
- Device active = amber glow (brand appears when listening)
- "The brand appears when Amber is listening"

## MidJourney Learnings

### What Worked for Product Renders
- "Industrial design product photography" up front
- "Naoto Fukasawa aesthetic" for designed-organic feel
- "kaolin-inspired zirconia" for warm ceramic (not "ceramic" alone)
- "asymmetric teardrop-pebble form tapered at top"
- `--s 50-75` for more natural results
- `--style raw` for realism
- `--no hollow cavity lamp opening gemstone egg symmetrical cold white`

### Working Product Prompt (Reference)
```
Industrial design product photography, wearable tech pendant with bright vivid amber edge glow, solid precision ceramic body in champagne cream, asymmetric teardrop-pebble form tapered at top, kaolin-inspired zirconia with satin finish, soft amber light bleeding through translucent ceramic perimeter, subsurface scattering glow effect, designed by Naoto Fukasawa, minimal woven cord, dramatic low-key lighting on dark charcoal background, 8K --ar 4:5 --s 75 --style raw --no hollow cavity opening lamp hole gemstone cold white
```

### V7 Consistency Features
- **--oref / Omni Reference**: For object consistency (slider in UI)
- **--ow / Omni Weight**: 100 default, 150-200 for stricter
- **--sref**: Style reference for aesthetic consistency
- **--cref**: Character reference (faces)
- Best practice: Remove background from reference, save as JPEG not PNG

### What's NOT Working
- Using Omni Reference to composite product into lifestyle scenes
- The product doesn't integrate naturally into photographs
- Need different approach for campaign visuals

## Files Updated This Session
- `/prompts.md` — Added Phase 9b with research synthesis
- `/foundation/01-PHILOSOPHY.md` — Removed video reference
- `/foundation/05-BRAND.md` — Added industrial design refs, device-brand relationship
- `/foundation/06-PRD-DEVICE.md` — Major update with industrial design spec, removed camera
- `/foundation/07-DELIVERABLES-SPEC.md` — Face → Speaker, updated product render spec
- `/CLAUDE.md` — Updated key decisions, hardware, brand tokens

## Next Steps Needed

1. **Product render**: May have final version — confirm with user
2. **Campaign visuals**: Need new approach
   - Option A: Generate lifestyle photos WITHOUT product, add product in Photoshop
   - Option B: Use different AI tool for compositing
   - Option C: Describe product in scene more abstractly ("pendant with warm glow")
3. **Website**: Ready to build based on specs
4. **App mockups**: Ready to design

## Time Status
Hackathon ends 18:00. Check STATUS.md for current time remaining.

## Key Files to Read
1. `CLAUDE.md` — Quick context
2. `STATUS.md` — Current phase
3. `foundation/06-PRD-DEVICE.md` — Product spec with industrial design
4. `deliverables/campaign/CAMPAIGN-BRIEFS.md` — Campaign visual specs
5. This file — MidJourney session context
