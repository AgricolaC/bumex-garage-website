# 0004 — Mobile CTA Hierarchy and Cognitive Declutter

**Status:** Accepted

## Context
During operational design review of the mobile viewport (`core:flow` and `core:grilling`), severe CTA competition and visual noise were identified across small screens:
1. **Persistent Anchor Collision**: The mobile viewport maintains a fixed bottom bar (`MobileCallBar`) providing immediate, thumb-accessible reach to both WhatsApp and direct telephone dialing at all scroll positions.
2. **First-Screen CTA Barrage**: On initial load on mobile screens (< 768px), five separate contact actions (Navbar Call button, Ticker WhatsApp link, Hero Call button, Hero WhatsApp button, and the persistent bottom bar) were visible within the first 600px of height.
3. **Card-Level Button Duplication**: In `PricingSection`, every single package card rendered full-width telephone buttons repeating raw telephone numbers (`0552 470 36 10` / `0546 533 28 44`), creating repetitive visual shouting reminiscent of low-end telemarketing directories rather than an artisanal automotive and motorcycle detailing studio.
4. **Catalog Micro-Call Clutter**: In `ServicesCatalog`, individual service entries carried micro-phone icon buttons on the right margin, introducing accidental touch targets and distracting from protocol navigation.

---

## Decision Drivers
- **Calm Atelier Posture**: Uphold Bumex Garage's identity as a high-precision, quiet craft studio (`AGENTS.md` and `design:design`).
- **Touch Ergonomics & Cognitive Load**: Eliminate repetitive, competing touch targets on mobile viewports (`design:adapt` and `pstack:principle-minimize-reader-load`).
- **High-Intent Contextual Routing**: In-card interactions must pass exact package and service context (e.g. pre-filled WhatsApp inquiry) rather than generic raw telephone dialing (`pstack:principle-experience-first`).
- **Singular Persistent Contact Channel**: Establish `MobileCallBar` as the single authoritative mobile contact anchor.

---

## Decision

1. **Establish Single Mobile Sticky Channel (`MobileCallBar`)**:
   - `MobileCallBar` remains the sole persistent fixed floating trigger on mobile screens (`md:hidden`) for general telephone calls and global WhatsApp inquiries.
2. **De-duplicate Top Chrome & Hero on Mobile**:
   - Hide the direct call button in `LandingNavbar` on mobile (`hidden sm:inline-flex`), keeping the mobile header calm with only the logo and theme switch.
   - Streamline `HeroSection` on mobile viewports: hide the duplicate raw telephone button (`hidden sm:inline-flex`), prioritizing exploration ("Fiyatları ve Paketleri İncele" anchor) and high-intent WhatsApp dispatch.
3. **Contextualize Pricing Card CTAs**:
   - Replace generic "Hemen Arayın: 0552..." buttons across all automotive and motorcycle pricing cards with contextual, package-specific WhatsApp triggers pre-filling the inquiry message with the exact package name.
   - Retain "Protokolü İncele" triggers for technical procedures (Dielektrik Motor, Mikron Boya & Seramik).
4. **Strip Services Catalog Micro-Call Buttons**:
   - Remove per-row micro-phone icon buttons from `ServicesCatalog`, focusing list items purely on informational routing (detail page links, protocol modal triggers, or price jump anchors).

---

## Consequences

### Positive
- **Drastic Cognitive Clutter Reduction**: Screen real estate on mobile is reclaimed for high-contrast craftsmanship photography, pricing transparency, and technical specifications.
- **Higher Quality Inquiries**: Pre-filled WhatsApp messages tell technicians exactly which service package the client is interested in before answering.
- **Zero Loss of Accessibility**: Direct calling and WhatsApp remain 100% accessible via the fixed bottom thumb bar at every scroll depth.

### Negative / Trade-offs
- Users who preferred dialing directly from inside a pricing card must now tap the bottom bar's phone button instead; mitigated by the bottom bar being permanently within immediate thumb reach.
