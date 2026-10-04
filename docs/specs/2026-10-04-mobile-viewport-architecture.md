# Tech Spec: Mobile Viewport Architecture & Responsive Overhaul

**Target Modules:** `LandingView`, `LandingNavbar`, `HeroSection`, `IntentCards`, `BeforeAfterSlider`, `ProcessSection`, `PricingSection`, `GoogleMapsSection`, `MobileCallBar`  
**Related PRD:** [`docs/prd/mobile-viewport-architecture.md`](../prd/mobile-viewport-architecture.md)  
**Related Intent:** [`docs/intent/2026-10-04-mobile-viewport-architecture.md`](../intent/2026-10-04-mobile-viewport-architecture.md)  
**Verification Gate:** `./check.sh`  

---

## 1. Problem Statement
On viewports `< 768px`, desktop-optimized multi-column flex and grid structures collapse into an ~8,000px linear vertical stack. Sections utilize oversized vertical padding (`py-16` / `py-20`), fixed top and bottom chrome pinch usable reading areas, and gesture conflicts disrupt both the interactive before/after image slider and the auto-scrolling Google review marquee.

---

## 2. Proposed Architecture & Seams

### 2.1 Viewport Budget & Container Rhythm
- **Dynamic Height Units**: Transition hero and full-bleed containers to `min-h-[100dvh]` and `min-h-[90svh]`, eliminating address bar jump.
- **Responsive Padding Seam**:
  ```tsx
  // Desktop maintains airy editorial spacing; mobile reclaims ~120px per section
  className="py-10 px-4 md:py-20 md:px-8"
  ```

### 2.2 Navigation Frame Contracts
- **`LandingNavbar`**:
  - Desktop: `sticky top-0 z-50` with full menu navigation.
  - Mobile (`< md:`): Positioned `absolute top-0 left-0 right-0 z-40`, naturally scrolling away to liberate 100% of the upper viewport.
- **`MobileCallBar`**:
  - Refactored from full-width bottom rectangle (`inset-x-0 bottom-0`) into a floating, centered capsule:
  ```tsx
  <div className="fixed bottom-3 inset-x-4 z-40 max-w-sm mx-auto flex items-center justify-between p-1.5 rounded-full bg-[#111215]/90 dark:bg-black/90 backdrop-blur-xl border border-white/15 shadow-2xl pb-[max(0.375rem,env(safe-area-inset-bottom))]">
  ```

### 2.3 Horizontal Snap Carousel Pattern (Zero Dependency)
Applied to `IntentCards` and `ProcessSection` on mobile viewports:
```tsx
<div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 scrollbar-none">
  {items.map((item) => (
    <div key={item.id} className="snap-start shrink-0 w-[82vw] max-w-[320px] md:w-auto">
      {/* Card Content */}
    </div>
  ))}
</div>
```

### 2.4 Touch-Safe Before/After Image Architecture
- Primary mobile control: 3 tap chips (`Önce`, `50/50`, `Sonra`) setting `sliderPosition` to 0, 50, and 100 directly.
- Touch action guard: Add `touch-action: pan-y` to the container to prevent vertical gesture trapping.
- Case Study Drawer: Controlled via local boolean `isCaseStudyOpen`:
```tsx
const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

<button 
  type="button" 
  onClick={() => setIsCaseStudyOpen(!isCaseStudyOpen)}
  className="w-full flex items-center justify-between p-3.5 rounded-xl border md:hidden"
>
  <span>Vaka Raporu & İşlem Süresi ({activeItem.caseStudy?.duration})</span>
  <ChevronDown className={`w-4 h-4 transition-transform ${isCaseStudyOpen ? 'rotate-180' : ''}`} />
</button>

<div className={`${isCaseStudyOpen ? 'block' : 'hidden'} md:block mt-4`}>
  {/* Full 3-phase case study record */}
</div>
```

### 2.5 Pricing Snap Deck & Comparison Drawer
- The 3 packages (`Start`, `Temizlik & Kuaför`, `Detailing & Seramik`) render in a horizontal snap slider on mobile.
- Each card incorporates an inline Sedan vs. SUV segmented pill to instantly update prices without scrolling.
- The 15-row comparison table is enclosed in an on-demand drawer:
```tsx
const [isComparisonOpen, setIsComparisonOpen] = useState(false);
```

### 2.6 Ambient Google Review Marquee (Client Feature)
- Retained for the client, but adapted on mobile:
  - Height restricted: `h-[160px] md:h-[320px]`.
  - Velocity calibrated: slowed down from 20s to 40s cycle (`duration-[40s]`).
  - Gesture hygiene: `touch-action: pan-y` applied to marquee container.
  - Hover / Touch Pause: `hover:[animation-play-state:paused] active:[animation-play-state:paused]`.

---

## 3. Implementation Plan by Component

| Component | File Path | Key Changes |
|---|---|---|
| **LandingNavbar** | `src/components/landing/LandingNavbar.tsx` | Make static/absolute on `< md:`, preserve sticky on desktop |
| **HeroSection** | `src/components/landing/HeroSection.tsx` | Bound mobile height to `min-h-[90svh]`, optimize mobile vertical padding |
| **IntentCards** | `src/components/landing/IntentCards.tsx` | Horizontal snap carousel on `< md:`, reduce card padding from `p-6` to `p-4 sm:p-6` |
| **BeforeAfterSlider**| `src/components/landing/BeforeAfterSlider.tsx` | Tap-chip position controls, `touch-action: pan-y`, collapsible case study drawer |
| **ProcessSection** | `src/components/landing/ProcessSection.tsx` | Horizontal snap chain for 4 steps, compact Park & Wash box |
| **PricingSection** | `src/components/landing/PricingSection.tsx` | Snap card slider on mobile, Sedan/SUV card switches, comparison table drawer |
| **GoogleMapsSection**| `src/components/landing/GoogleMapsSection.tsx` | 160px marquee on mobile, slowed cycle, `touch-action: pan-y`, tap-to-pause |
| **MobileCallBar** | `src/components/landing/MobileCallBar.tsx` | Floating glassmorphic thumb pill with `env(safe-area-inset-bottom)` |

---

## 4. Testing & Verification

1. **TypeScript Type Safety**: Run `npx tsc --noEmit` with zero errors. No `any` types.
2. **Build Gate**: Execute `./check.sh` ensuring clean Next.js production compilation.
3. **Responsive Visual Proof**:
   - iPhone SE / compact view (375px width)
   - iPhone 14/15/16 standard (390px width)
   - Android Galaxy/Pixel (412px width)
   - Desktop widescreen (1280px+ width)
