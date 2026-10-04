# Mobile Viewport Architecture & Conversion Streamline

## Problem
On desktop, Bumex Garage's editorial layout (multi-column grids, before/after analysis, detailed package comparisons) feels authoritative and spacious. On mobile viewports (390px wide, 9:16 aspect ratio), responsive layout collapse stacks all desktop grids vertically into a relentless ~8,000px scroll wall (10–12 full thumb swipes). High-intent customers looking for pricing, wash availability, or Park & Wash near 7. Cadde experience severe cognitive fatigue, interaction friction (touch conflicts on sliders and review marquee), and screen pinch (fixed top and bottom chrome consuming >30% of visible viewport height).

## Outcome
1. Vertical mobile page length is reduced from ~8,500px to ~2,800px (~67% reduction in vertical scroll friction) without deleting any SEO content, pricing data, or craftsmanship proof.
2. 9:16 viewport geometry is respected: top navbar scrolls away naturally, leaving 100% of upper screen real estate for vehicle imagery; bottom action channel is a lightweight floating pill (`[ 💬 WhatsApp | 📞 Ara ]`) resting above the home indicator.
3. Information is revealed via progressive disclosure: Intent cards and Process steps swipe horizontally in native CSS snap carousels; pricing packages are swipeable cards with internal Sedan/SUV switches; heavy comparison tables and case study logs sit behind on-demand expandable drawers.
4. Touch conflicts are eliminated: Before/After slider features direct tap chips (`Önce`, `50/50`, `Sonra`); the Google review marquee is slowed down, condensed to 160px, and assigned `touch-action: pan-y` so vertical page scrolls are never intercepted.

## Affected systems
- `src/components/landing/LandingView.tsx` (viewport spacing, main container padding)
- `src/components/landing/LandingNavbar.tsx` (non-sticky mobile positioning)
- `src/components/landing/HeroSection.tsx` (mobile height bounds `min-h-[90svh]`, spacing)
- `src/components/landing/IntentCards.tsx` (horizontal snap carousel on `< 768px`)
- `src/components/landing/BeforeAfterSlider.tsx` (tap-chip controls, expandable case study drawer, `touch-action: pan-y`)
- `src/components/landing/ProcessSection.tsx` (horizontal snap chain for 4 steps, compact Park & Wash box)
- `src/components/landing/PricingSection.tsx` (horizontal snap cards, vehicle switch, expandable comparison matrix drawer)
- `src/components/landing/GoogleMapsSection.tsx` (touch-safe, 160px condensed review marquee with tap-to-pause)
- `src/components/landing/MobileCallBar.tsx` (floating glassmorphic pill)

## Constraints
- **Zero Platform Leakage**: Static showcase isolation; no operational DB or API keys (`AGENTS.md`).
- **Strict Verification**: Must pass `./check.sh` (TypeScript typecheck & Next.js production build).
- **No `any` types**: Strict TypeScript safety.
- **Dedicated Dispatch Routing**: Automotive (`0552 470 36 10`) and motorcycle (`0546 533 28 44`) hotlines remain strictly preserved (`CONTEXT.md`).
- **Marquee Retention**: Client-preferred sliding Google review marquee must remain active, made touch-safe and condensed rather than deleted.

## Open questions
*(None. All core architectural decisions were approved in brainstorming.)*
