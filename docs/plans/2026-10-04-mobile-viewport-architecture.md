# Mobile Viewport Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `core:swarm-orchestrator` / `craft:feature-work` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-architect the public landing page for 9:16 mobile viewports (< 768px), slashing vertical scroll friction by ~65% (from ~8,000px to ~2,800px) through native CSS horizontal snap carousels, a floating action capsule, touch-safe controls, and progressive disclosure drawers, while preserving 100% of SEO content and desktop styling.

**Architecture:** Maintain a single Next.js App Router tree with zero extra runtime dependencies. Use responsive CSS breakpoints (`md:`) to branch mobile layouts: horizontal native CSS snap carousels (`flex overflow-x-auto snap-x snap-mandatory`) for dense card grids, collapsible local state drawers for technical logs and comparison matrices, and dynamic viewport units (`100dvh` / `90svh`).

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript 5, Tailwind CSS, Lucide React icons.

**Spec:** [`docs/specs/2026-10-04-mobile-viewport-architecture.md`](../specs/2026-10-04-mobile-viewport-architecture.md)  
**PRD:** [`docs/prd/mobile-viewport-architecture.md`](../prd/mobile-viewport-architecture.md)  

## Global Constraints
- **Zero internal platform leakage**: Static showcase isolation; no operational DB or API keys (`AGENTS.md`).
- **Strict typing**: Zero `any` types; all components must pass `tsc --noEmit`.
- **Deterministic verification**: Must pass `./check.sh` at every checkpoint.
- **Dedicated hotlines**: Automotive `0552 470 36 10` and motorcycle `0546 533 28 44` strictly preserved (`CONTEXT.md`).
- **Marquee retention**: Client-preferred sliding Google review marquee remains active; condensed to 160px and made touch-safe.

---

### Task 1: Navigation Frame & Floating Action Pill

- **Write Scope**: `["src/components/landing/LandingNavbar.tsx", "src/components/landing/MobileCallBar.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/LandingNavbar.tsx`
- Modify: `src/components/landing/MobileCallBar.tsx`

**Interfaces:**
- Consumes: `useWorkshopSegment()`, `useLandingTheme()`
- Produces: Floating centered capsule on mobile (< 768px), non-sticky mobile header.

- [ ] **Step 1: Update LandingNavbar for mobile non-sticky positioning**
  In `src/components/landing/LandingNavbar.tsx`, change the outer container class so on mobile it is static/absolute and on desktop (`md:`) it remains sticky:
  ```tsx
  // Outer header tag
  className="absolute md:sticky top-0 left-0 right-0 z-50 transition-colors duration-200 ..."
  ```

- [ ] **Step 2: Refactor MobileCallBar into floating glassmorphic capsule**
  In `src/components/landing/MobileCallBar.tsx`, replace the full-width bottom rectangle with a centered floating pill:
  ```tsx
  <div
    className={`fixed bottom-3 inset-x-4 z-40 md:hidden max-w-sm mx-auto p-1.5 rounded-full border shadow-2xl backdrop-blur-xl transition-colors duration-200 pb-[max(0.375rem,env(safe-area-inset-bottom))] ${
      isCream
        ? 'bg-[#EFECE6]/90 border-[#686D7A]/25'
        : 'bg-[#0C0D10]/90 border-white/15'
    }`}
  >
    <div className="grid grid-cols-2 gap-2">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-mechanical flex items-center justify-center gap-1.5 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs py-2.5 px-3 rounded-full shadow-sm transition active:scale-95"
      >
        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${phone}`}
        className="btn-mechanical flex items-center justify-center gap-1.5 text-white font-bold text-xs py-2.5 px-3 rounded-full shadow-md transition active:scale-95 bg-[#1E3A8A] hover:bg-[#1D4ED8]"
      >
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span>{phoneDisplay}</span>
      </a>
    </div>
  </div>
  ```

- [ ] **Step 3: Run check.sh verification**
  Run: `./check.sh`
  Expected: PASS

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/landing/LandingNavbar.tsx src/components/landing/MobileCallBar.tsx
  git commit -m "feat(mobile): convert navbar to static mobile and callbar to floating pill"
  ```

---

### Task 2: Hero Section Viewport Geometry & Calibrated Rhythm

- **Write Scope**: `["src/components/landing/HeroSection.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/HeroSection.tsx`

**Interfaces:**
- Consumes: `useWorkshopSegment()`, `useLandingTheme()`
- Produces: 9:16 calibrated mobile hero with `min-h-[100dvh]` and responsive content padding.

- [ ] **Step 1: Update viewport height bounds and vertical spacing in HeroSection**
  In `src/components/landing/HeroSection.tsx`, update the section container and content inner wrapper:
  ```tsx
  // Section container:
  className="relative min-h-[92svh] md:min-h-[92vh] flex flex-col justify-between overflow-hidden border-b transition-colors duration-300"
  
  // Inner content box:
  className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-8 py-4 sm:py-8 lg:py-12 flex flex-col justify-between flex-1"
  ```

- [ ] **Step 2: Calibrate mobile typography and action buttons**
  Ensure headline on mobile does not cause excessive wrapping:
  ```tsx
  <h1 className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
  ```
  Ensure CTA buttons on mobile use compact padding (`px-3 py-2 text-xs`).

- [ ] **Step 3: Run check.sh verification**
  Run: `./check.sh`
  Expected: PASS

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/landing/HeroSection.tsx
  git commit -m "feat(mobile): calibrate hero section viewport height and typography for 9:16"
  ```

---

### Task 3: Intent Cards Horizontal Snap Carousel

- **Write Scope**: `["src/components/landing/IntentCards.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/IntentCards.tsx`

**Interfaces:**
- Consumes: `INTENT_ITEMS`
- Produces: Horizontal snap slider on `< md:` saving ~700px vertical space, 3-column grid on `md:`.

- [ ] **Step 1: Recalibrate section vertical padding**
  Change section padding from `py-16 sm:py-20` to `py-10 md:py-20`:
  ```tsx
  className={`py-10 md:py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${...}`}
  ```

- [ ] **Step 2: Convert 6-card grid to horizontal snap carousel on mobile**
  In `src/components/landing/IntentCards.tsx`, replace the grid wrapper:
  ```tsx
  {/* Mobile Snap Carousel (< md) + Desktop Grid (md:) */}
  <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
    {INTENT_ITEMS.map((item) => {
      const Icon = item.icon;
      return (
        <Link
          key={item.id}
          href={item.href}
          className={`btn-mechanical group snap-start shrink-0 w-[78vw] max-w-[280px] md:w-auto p-4 sm:p-6 rounded-2xl border flex flex-col justify-between transition-all duration-150 ${
            isCream
              ? 'bg-white border-[#686D7A]/15 hover:border-[#1E3A8A] hover:shadow-lg'
              : 'bg-[#141519] border-white/10 hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#1E3A8A]/10'
          }`}
        >
          {/* Card internals remain untouched */}
        </Link>
      );
    })}
  </div>
  ```

- [ ] **Step 3: Run check.sh verification**
  Run: `./check.sh`
  Expected: PASS

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/landing/IntentCards.tsx
  git commit -m "feat(mobile): convert intent cards to horizontal snap carousel on mobile"
  ```

---

### Task 4: Before/After Slider Touch-Safe Chips & Case Study Drawer

- **Write Scope**: `["src/components/landing/BeforeAfterSlider.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/BeforeAfterSlider.tsx`

**Interfaces:**
- Consumes: `TRANSFORMATIONS`, `useWorkshopSegment()`
- Produces: Tap-chip comparison buttons, `touch-action: pan-y`, collapsible case study drawer.

- [ ] **Step 1: Recalibrate section vertical padding**
  Change section padding from `py-20` to `py-10 md:py-20`.

- [ ] **Step 2: Add touch-action hygiene to slider container**
  On the slider container div (`ref={containerRef}`), add `touch-action: pan-y` in class:
  ```tsx
  className={`relative w-full ${activeItem.aspectClass} rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border bg-black touch-pan-y ${...}`}
  ```

- [ ] **Step 3: Promote 3 tap chips above/below slider**
  Ensure the 3 quick comparison buttons (`Ham Hali (Önce)`, `50/50 Bölünmüş`, `Atölye Çıkışı (Sonra)`) have high-contrast active states and $\ge 44\text{px}$ touch targets.

- [ ] **Step 4: Implement collapsible Case Study Drawer on mobile**
  Add state:
  ```tsx
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  ```
  Wrap the Case Study box so on desktop (`md:block`) it is always visible, and on mobile (`md:hidden`) it is preceded by a trigger button:
  ```tsx
  {activeItem.caseStudy && (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setIsCaseStudyOpen(!isCaseStudyOpen)}
        className={`w-full md:hidden flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition ${
          isCream
            ? 'bg-white border-[#1E3A8A]/25 text-[#0D0D0D]'
            : 'bg-[#1F2226] border-white/10 text-white'
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
          <span>Vaka Raporu & Detay ({activeItem.caseStudy.duration})</span>
        </span>
        <span className="text-[11px] text-[#1E3A8A] dark:text-[#60A5FA]">
          {isCaseStudyOpen ? 'Kapat ▲' : 'İncele ▼'}
        </span>
      </button>

      <div className={`${isCaseStudyOpen ? 'block' : 'hidden'} md:block mt-2 md:mt-0`}>
        {/* Existing Case Study Box Contents */}
      </div>
    </div>
  )}
  ```

- [ ] **Step 5: Run check.sh verification**
  Run: `./check.sh`
  Expected: PASS

- [ ] **Step 6: Commit**
  ```bash
  git add src/components/landing/BeforeAfterSlider.tsx
  git commit -m "feat(mobile): add touch-safe chips and collapsible case study drawer to before/after slider"
  ```

---

### Task 5: Process Section Snap Chain & Compact Park & Wash

- **Write Scope**: `["src/components/landing/ProcessSection.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/ProcessSection.tsx`

**Interfaces:**
- Consumes: `PROCESS_STEPS`
- Produces: Horizontal snap chain on `< md:`, compact Park & Wash banner.

- [ ] **Step 1: Recalibrate section padding**
  Change section padding from `py-16 sm:py-20` to `py-10 md:py-20`.

- [ ] **Step 2: Convert 4-step grid to horizontal snap chain on mobile**
  In `src/components/landing/ProcessSection.tsx`, update the steps container:
  ```tsx
  <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 mb-8 md:mb-12 scrollbar-none">
    {PROCESS_STEPS.map((item) => {
      const Icon = item.icon;
      return (
        <div
          key={item.step}
          className={`snap-start shrink-0 w-[72vw] max-w-[260px] md:w-auto p-5 sm:p-6 rounded-2xl border flex flex-col justify-between transition-all duration-150 ${...}`}
        >
          {/* Step content */}
        </div>
      );
    })}
  </div>
  ```

- [ ] **Step 3: Compact Park & Wash card layout for mobile**
  Ensure the Park & Wash callout on mobile uses `p-5 sm:p-8` with direct touch-friendly action buttons.

- [ ] **Step 4: Run check.sh verification**
  Run: `./check.sh`
  Expected: PASS

- [ ] **Step 5: Commit**
  ```bash
  git add src/components/landing/ProcessSection.tsx
  git commit -m "feat(mobile): convert process steps to horizontal snap chain and optimize park & wash"
  ```

---

### Task 6: Pricing Section Snap Deck & Comparison Matrix Drawer

- **Write Scope**: `["src/components/landing/PricingSection.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/PricingSection.tsx`

**Interfaces:**
- Consumes: `useWorkshopSegment()`, vehicle pricing packages
- Produces: Horizontal snap cards on mobile, inline Sedan/SUV price switch, collapsible comparison sheet drawer.

- [ ] **Step 1: Recalibrate section padding**
  Change section padding from `py-20` to `py-10 md:py-20`.

- [ ] **Step 2: Convert the 3 pricing tier cards to horizontal snap carousel on mobile**
  Wrap the 3 package cards (`Start`, `Temizlik & Kuaför`, `Detailing & Seramik`) in a container that snaps horizontally on mobile:
  ```tsx
  <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
    {/* Each card has: className="snap-start shrink-0 w-[85vw] max-w-[340px] md:w-auto ..." */}
  </div>
  ```

- [ ] **Step 3: Enclose the 15-row comparison matrix table in an on-demand drawer on mobile**
  Add state:
  ```tsx
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  ```
  Wrap the comparison table section so on mobile it is toggled with a button:
  ```tsx
  <div className="mt-8 md:mt-12">
    <button
      type="button"
      onClick={() => setIsComparisonOpen(!isComparisonOpen)}
      className={`w-full md:hidden py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition ${
        isCream
          ? 'bg-white border-[#1E3A8A]/30 text-[#111215]'
          : 'bg-[#141519] border-white/15 text-white'
      }`}
    >
      <span>Tüm Paket Özelliklerini Karşılaştır</span>
      <span>{isComparisonOpen ? 'Kapat ▲' : 'Genişlet ▼'}</span>
    </button>

    <div className={`${isComparisonOpen ? 'block' : 'hidden'} md:block mt-3 md:mt-0`}>
      {/* Existing Full Comparison Table */}
    </div>
  </div>
  ```

- [ ] **Step 4: Run check.sh verification**
  Run: `./check.sh`
  Expected: PASS

- [ ] **Step 5: Commit**
  ```bash
  git add src/components/landing/PricingSection.tsx
  git commit -m "feat(mobile): add snap carousel and collapsible comparison drawer to pricing section"
  ```

---

### Task 7: Google Reviews Marquee Condensation & Gesture Safety

- **Write Scope**: `["src/components/landing/GoogleMapsSection.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/GoogleMapsSection.tsx`

**Interfaces:**
- Consumes: `VERIFIED_GOOGLE_REVIEWS`
- Produces: 160px condensed review marquee on mobile, slowed cycle, `touch-action: pan-y`, tap-to-pause.

- [ ] **Step 1: Recalibrate section vertical padding**
  Change section padding from `py-20` to `py-10 md:py-20`.

- [ ] **Step 2: Condense marquee height and apply touch-action: pan-y**
  In `src/components/landing/GoogleMapsSection.tsx`, update the marquee container:
  ```tsx
  <div className="relative overflow-hidden h-[160px] md:h-[320px] rounded-xl border border-black/5 dark:border-white/10 mt-2 touch-pan-y">
  ```

- [ ] **Step 3: Slow down cycle and enable touch-pause**
  Ensure the animation container pauses on touch/hover:
  ```tsx
  <div className="animate-floating-reviews hover:[animation-play-state:paused] active:[animation-play-state:paused] flex flex-col gap-3 p-2 select-none">
  ```

- [ ] **Step 4: Run check.sh verification**
  Run: `./check.sh`
  Expected: PASS

- [ ] **Step 5: Commit**
  ```bash
  git add src/components/landing/GoogleMapsSection.tsx
  git commit -m "feat(mobile): condense google review marquee to 160px with touch-safe scrolling"
  ```

---

### Task 8: End-to-End Verification Gate

- **Write Scope**: `[]`
- **Test Scope**: `["./check.sh"]`

- [ ] **Step 1: Execute full verification script**
  Run: `./check.sh`
  Expected: TypeScript clean, Next.js build clean.

- [ ] **Step 2: Verify git status and commit cleanliness**
  Run: `git status`
  Expected: Working tree clean.
