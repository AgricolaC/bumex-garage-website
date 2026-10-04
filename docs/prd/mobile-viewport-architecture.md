# PRD: Mobile Viewport Architecture & Conversion Streamline

**Initiative Slug:** `mobile-viewport-architecture`  
**Target Surface:** Public Showcase Mobile Viewports (`< 768px`)  
**Domain Authority:** [`CONTEXT.md`](../../CONTEXT.md) | [ADR-0004](../../docs/adr/0004-mobile-cta-hierarchy-and-cognitive-declutter.md)  
**Status:** Approved / Ready for Plan Decomposition  
**Author:** Pair Programming Agent & Operator  

---

## 1. Problem Statement & Motivation

### 1.1 The Problem
Bumex Garage's public showcase was designed with desktop widescreen proportions (16:9 / 16:10), where multi-column grids, comprehensive package comparison tables, and case study narratives look spacious and authoritative. 

When rendered on mobile smartphones (375px–412px wide, 9:16 / 19.5:9 aspect ratio), standard responsive grid collapse (`grid-cols-1 md:grid-cols-3`) produces a **punishing ~8,000px vertical scroll wall** (10 to 12 full thumb swipes):
1. **Vertical Scroll Fatigue:** Customers looking for rapid answers (pricing, wash availability, or Park & Wash drop-off) must scroll past hundreds of stacked elements before reaching their decision point.
2. **Screen Real-Estate Pinch:** A fixed top header plus a 64px fixed bottom call bar consume more than 30% of the visible vertical screen height, pinching the reading area on smaller displays (e.g. iPhone SE / mini).
3. **Touch Gesture Conflicts:** Horizontal touch dragging on the Before/After comparison slider or interacting with the Google review marquee conflicts with vertical page scrolling, triggering scroll jank or inadvertent touch traps.
4. **Dead Margin Waste:** Desktop section paddings (`py-16` / `py-20`) waste 120px–160px per section in empty margins on mobile, consuming ~20% of the physical screen height in blank space.

### 1.2 Why Now
Mobile traffic accounts for 70%+ of local automotive discovery in Ankara (drivers searching while in traffic near Bahçelievler or researching during their daily commute). Eliminating mobile friction directly increases WhatsApp consultation initiation, call velocity, and Park & Wash utilization without modifying backend or data structures.

---

## 2. Personas & User Stories

### Persona 1: Can (Bahçelievler Local / Immediate Need)
Can is driving near 7. Cadde looking for secure parking or an express wash while attending meetings.
* **User Story 1.1:** As an immediate local driver, I want to see Park & Wash availability, walking distance, and a 1-tap WhatsApp booking button without scrolling 4,000 pixels, so that I can hand over my car and proceed to my appointment immediately.
* **User Story 1.2:** As a mobile user, I want a persistent floating thumb button for direct calling and WhatsApp that stays above my phone's home indicator, so that I can reach technicians with a single tap from anywhere on the page.

### Persona 2: Burak (High-Ticket Restorer / Detail-Oriented Car Owner)
Burak recently purchased a BMW 4 Series and is researching ceramic coating and paint correction packages.
* **User Story 2.1:** As a high-ticket vehicle owner, I want to swipe through package cards horizontally with instant Sedan/SUV pricing toggles, so that I can compare tier costs without wrestling with an overwhelming multi-column desktop table.
* **User Story 2.2:** As an analytical car enthusiast, I want to tap clear "Önce", "50/50", and "Sonra" buttons on the Before/After transformation photos, so that I can evaluate paint finish quality instantly without fighting slider drag conflicts.
* **User Story 2.3:** As an analytical buyer, I want the technical case study log (problem, application, duration, proof) to be available on-demand inside an expandable drawer, so that it doesn't inflate page height unless I actively choose to read the scientific data.

### Persona 3: Deniz (Sportbike / Motorcycle Enthusiast)
Deniz rides a Yamaha MT-09 and needs dielectric dry-steam cleaning and chain maintenance.
* **User Story 3.1:** As a motorcycle rider, I want switching to the "Motosiklet" segment in the hero to immediately update the mobile intent cards, pricing packages, and hotlines without page reloads, so that I never see irrelevant car wash tables.

---

## 3. Scope & Boundaries

### 3.1 In Scope
1. **Dynamic 9:16 Viewport Geometry:**
   - Enforce `min-h-[100dvh]` and `min-h-[90svh]` on full-bleed sections, eliminating Safari address-bar jumps (`design:adapt` §2).
   - Recalibrate mobile section margins to `py-10 px-4` (down from `py-20`), expanding content density by 35%.
2. **Non-Sticky Mobile Top Header:**
   - `LandingNavbar` stays static/absolute on mobile (`< md:`), scrolling away naturally so 100% of the upper screen is dedicated to vehicle imagery and editorial content.
3. **Floating Glassmorphic Thumb Capsule:**
   - Refactor `MobileCallBar` from a screen-wide bottom block into a centered floating capsule (`max-w-xs mx-auto mb-3 inset-x-4 fixed bottom-0`), padded with `env(safe-area-inset-bottom)`.
4. **Native CSS Horizontal Snap Carousels:**
   - Convert `IntentCards` (6 items) into a smooth horizontal snap slider (`flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 scrollbar-none`) on screens `< 768px`.
   - Convert `ProcessSection` (4 steps) into a horizontal sequential snap chain on screens `< 768px`.
5. **Touch-Safe Before/After Slider:**
   - Introduce 3 tactile tap chips (`Önce`, `50/50`, `Sonra`) as the primary mobile control below the comparison viewport.
   - Set `touch-action: pan-y` on container to ensure vertical scrolling is never locked.
   - Collapse the 3-column Case Study box into an on-demand expandable disclosure: *"Vaka Kaydı: Operasyon Süresi ve Rapor (3 Saat) ▾"*.
6. **Mobile Pricing Snap Deck & Comparison Drawer:**
   - Render the 3 pricing tiers as swipeable horizontal cards on mobile, each with an internal Sedan/SUV toggle.
   - Hide the full matrix comparison table by default on mobile, placing it inside a collapsible drawer: *"Tüm Paket Özelliklerini Karşılaştır ▾"*.
7. **Client Marquee Optimization (Google Reviews):**
   - Retain the sliding marquee per client preference, but condense height from 320px to 160px on mobile.
   - Slow animation speed by 50% for legible ambient drift.
   - Apply `touch-action: pan-y` and tap-to-pause so thumb swipes pass through without jank.

### 3.2 Non-Goals (Out of Scope)
- **No Route Forking:** No separate `/mobile` or subdomain `m.bumexgarage.com`; all improvements are executed via standard responsive CSS and component breakpoints within the existing Next.js App Router.
- **No Content Deletion:** No SEO copy, schema markup, price figures, or technical procedures will be deleted; all content remains in the DOM for indexing and is disclosed progressively.
- **No Global State Additions:** Drawer expansion states remain local component states (`useState`); no Redux, Zustand, or global stores.
- **No Heavy Third-Party Slider Libraries:** Horizontal carousels use pure native CSS scroll-snap (`snap-x snap-mandatory`), avoiding Swiper or Slick bundle bloat.

---

## 4. Functional Contracts & Acceptance Criteria

### 4.1 Layout & Navigation
- [ ] On viewports `< 768px`, total vertical page height is measured at $\le 3,200\text{px}$ (down from $\sim 8,200\text{px}$).
- [ ] On viewports `< 768px`, `LandingNavbar` scrolls away with the page; on viewports $\ge 768px$, top navbar behavior remains unaffected.
- [ ] `MobileCallBar` renders as a floating rounded capsule with safe-area bottom offset:
  ```tsx
  pb-[max(0.375rem,env(safe-area-inset-bottom))]
  ```
- [ ] Tapping "WhatsApp" in the floating pill opens WhatsApp with the active segment's pre-filled message; tapping "Ara" triggers direct phone dialing to the active hotline (`0552 470 36 10` for cars, `0546 533 28 44` for bikes).

### 4.2 Interactive Components
- [ ] In `IntentCards`, all 6 cards are horizontally swipeable on `< 768px` with CSS snap-alignment, occupying $\le 240\text{px}$ vertical height.
- [ ] In `BeforeAfterSlider`, tapping `[ Önce ]` snaps position to 0%, `[ 50/50 ]` snaps to 50%, and `[ Sonra ]` snaps to 100%.
- [ ] In `BeforeAfterSlider`, vertical thumb swiping across the image smoothly scrolls the page without gesture trapping (`touch-action: pan-y`).
- [ ] In `BeforeAfterSlider`, the Case Study block is collapsed by default on mobile, expanding with a clean animated disclosure when tapped.
- [ ] In `ProcessSection`, the 4 workflow steps swipe horizontally on `< 768px`, while the Park & Wash card displays compactly below.
- [ ] In `PricingSection`, the 3 packages render as horizontal snap cards on `< 768px`, with a tap toggle for Sedan vs. SUV pricing inside each card.
- [ ] In `PricingSection`, the comparison table is closed by default on `< 768px`, expanding upon tapping *"Tüm Paket Özelliklerini Karşılaştır ▾"*.
- [ ] In `GoogleMapsSection`, the review marquee height is capped at $160\text{px}$ on `< 768px`, features a relaxed 40s cycle, and pauses on touch.

### 4.3 Technical & Type Verification
- [ ] Zero TypeScript errors (`any` types strictly forbidden).
- [ ] Build passes cleanly with zero warnings:
  ```bash
  ./check.sh
  ```
- [ ] Verified across mobile viewports: 375px (iPhone SE), 390px (iPhone 14/15/16), 412px (Android Pixel/Galaxy).

---

## 5. Domain Glossary & Anti-Synonyms

Mapped strictly to [`CONTEXT.md`](../../CONTEXT.md):

* **Persistent Mobile Anchor (`MobileCallBar`)**: The floating, safe-area-aware thumb capsule serving as the single persistent contact channel on mobile (< 768px).  
  _Anti-synonyms_: Not full-width screen bricks, not intrusive modal popups, not floating notification badges.
* **Progressive Disclosure**: Exposing high-priority summary cards immediately while placing detailed technical tables and case studies behind on-demand collapsible drawers.  
  _Anti-synonyms_: Not content deletion, not hidden doorway pages.
* **Contextual Inquiry Action**: In-card buttons passing specific package names into WhatsApp rather than repeating raw phone numbers.  
  _Anti-synonyms_: Not raw telephone number link spam, not lead capture friction forms.
* **Calm Atelier Posture**: Restrained, quiet visual confidence with zero aggressive sales pressure or fake urgency.  
  _Anti-synonyms_: Not conversion apathy, not hidden contact info, not countdown badges.

---

## 6. Architectural Dependencies & ADRs

* **ADR-0004: Mobile CTA Hierarchy and Cognitive Declutter** ([`docs/adr/0004-mobile-cta-hierarchy-and-cognitive-declutter.md`](../../docs/adr/0004-mobile-cta-hierarchy-and-cognitive-declutter.md))  
  *Enforces*: Single persistent mobile anchor, deduplicated first-screen CTAs, contextual WhatsApp parameters.
* **ADR-0002: Segmented Studio Router** ([`docs/adr/0002-segmented-studio-router-and-media-hygiene.md`](../../docs/adr/0002-segmented-studio-router-and-media-hygiene.md))  
  *Enforces*: Segment-specific phone line routing (`0552 470 36 10` vs `0546 533 28 44`) and client-side segment synchronization.
* **Field-Kit Design Skills**:
  * [`design:adapt`](/Users/berkcalisir/dev/field-kit/plugins/design/skills/adapt/SKILL.md) (§1 Touch Ergonomics, §2 Safe Areas & `100dvh`, §3 Horizontal Scroll Carousels).
  * [`design:design`](/Users/berkcalisir/dev/field-kit/plugins/design/skills/design/SKILL.md) (Measured Calibration, anti-cliché bans on stacking card grids).
