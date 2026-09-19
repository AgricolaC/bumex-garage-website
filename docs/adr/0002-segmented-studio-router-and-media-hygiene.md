# 0002 — Segmented Studio Router, Dedicated Service Lines, and Open Parking Framing

**Status:** Accepted

## Context
The Bumex Garage showcase at `Prof. Muammer Aksoy Caddesi No: 48, Bahçelievler` serves both premium automotive detailing/PPF clients and motorcycle enthusiasts, alongside open/semi-covered parking 350m from 7. Cadde.

During operational and user experience review, three structural issues were identified:
1. **Context Bloat & Media Legitimacy**: The "Atölyeden Canlı Kareler & Reels" section (`VisualReelSection`) relied on placeholder stock video/reels assets. Lacking authenticated original media, it degraded credibility and cluttered customer discovery.
2. **Audience Collision in Hero**: Auto detailing clients and motorcycle maintenance clients have fundamentally distinct intents, price sensitivities, and dedicated workshop teams. Forcing them into an auto-rotating 7-second carousel created visual distraction and cognitive friction.
3. **Operational Ground Truths**:
   - **Parking Reality**: The parking facility is not fully enclosed ("kapalı"); it is a secure, camera-monitored open/semi-covered facility with wide maneuvering room. Advertising it as "Kapalı Otopark" risks customer mismatch and misleading claims.
   - **Dedicated Hotlines**: Motorcycle inquiries and automobile detailing inquiries are serviced by different direct contacts:
     - Automobile Hotline: `0552 470 36 10`
     - Motorcycle Hotline: `0546 533 28 44`

## Decision Drivers
- Zero misleading marketing: Align web copy strictly with real-world physical facilities.
- Eliminate context bloat: Remove unverified placeholder sections (*Deletion Test* from `improve-codebase-architecture`).
- Fast customer path to value: Automobile and motorcycle customers must instantly access isolated services, pricing, and their dedicated phone contact.
- Adhere to design craft floor: Display size restraint (median 49px), zero generic eyebrow tags, authentic contrast, and intentional transitions.

---

## Decision

1. **Delete Placeholder Reels (`VisualReelSection`)**:
   - Remove `VisualReelSection` from the `LandingView` layout.
   - Clean up placeholder video/media linkages to maintain lean performance and high customer trust.

2. **Establish the Segmented Studio Router (`useWorkshopSegment`)**:
   - Maintain a global reactive client context synchronizing active segment (`'otomobil' | 'motosiklet'`) with URL hash (`#otomobil`, `#motosiklet`) and query fallback.
   - Clicking "Otopark" performs a clean route navigation to `/otopark`.
   - Hero functions as a **Commanding Studio Switcher**:
     - Stripped of 7-second auto-rotation.
     - Two primary high-craft studio selectors (`01 OTOMOBİL` and `02 MOTOSİKLET`) with an immediate transition into that segment's visual showcase and direct booking CTA.
     - Secondary portal link directly to `/otopark`.

3. **Strict Downstream Content Isolation**:
   - `ServicesCatalog`: Dynamically filters strictly to the selected vehicle type.
   - `PricingSection`: Directly reflects selected vehicle packages without requiring additional tab toggling.
   - `BeforeAfterSlider`: Renders automobile paint correction for 'otomobil' and motorcycle fairing/tank restoration for 'motosiklet'.
   - Invariants: Google Maps location, working hours (10:00 - 22:00), address, and footer entity bridge remain permanently visible across both segments.

4. **Dual Dedicated Hotlines**:
   - Dynamically route click-to-call and WhatsApp triggers:
     - When `otomobil` is active: `0552 470 36 10`
     - When `motosiklet` is active: `0546 533 28 44`
   - Navbar and Hero CTAs dynamically update display numbers and `tel:` links.

5. **Parking Facility Re-framing**:
   - Eliminate misleading "Kapalı Otopark" phrasing.
   - Reframe to *"24/7 Güvenli Otopark & Park-Wash"* (Bahçelievler 7. Cadde 350m, 24/7 CCTV kamera, geniş manevra alanı).

---

## Consequences

### Positive
- **Instant Relevance**: Customers immediately see only the pricing and services for their vehicle type.
- **Accurate Routing**: Motorcycle and car inquiries reach the correct specialized personnel directly.
- **Truth in Advertising**: Eliminates customer complaints regarding parking coverage while preserving the 350m 7. Cadde location advantage.
- **Lean Codebase**: Deletion of unauthenticated reels reduces cognitive load and bundle size.

### Trade-offs
- Motorcycle Before/After visual assets must maintain equal studio polish to avoid perceived secondary status compared to automobile detailing.
