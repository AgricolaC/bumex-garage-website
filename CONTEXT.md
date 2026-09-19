# CONTEXT.md — Bumex Garage Web Platform

This document defines the canonical domain model, architectural boundaries, and ubiquitous language for the Bumex Garage web showcase.

---

## Canonical Domain Glossary

### Five Operational Pillars
The five distinct commercial service divisions operated by Bumex Garage at `Prof. Muammer Aksoy Cad. No: 48, Bahçelievler, Ankara`.
1. **Auto Wash (pH Nötr & Çiziksiz Yıkama)**: Touchless, scratch-free wash using pH-neutral foam and two-bucket methods.
2. **Auto Detailing & Boya Koruma (Mikron analiz, 9H nano seramik, PPF, dielektrik kuru buhar)**: Micron-measured paint correction, 9H nano ceramic armor, PPF film, and dielectric dry steam engine cleaning.
3. **Motorcycle Wash & Hassas Yıkama (Sportbike, cruiser, scooter zincir ve jant arındırma)**: Specialized touchless cleaning for sportbikes, cruisers, and scooters with chain and wheel degreasing.
4. **Motorcycle Detailing & Grenaj Koruma (Grenaj mikron pasta cila, 9H seramik, kışlama bakımı)**: Dedicated motorcycle paint correction, fairing polishing, 9H ceramic shield, and winterization prep.
5. **Parking Facilities (Güvenli Otopark - 7. Cadde 350m, 24/7 CCTV, Park & Wash)**: Secure, camera-monitored parking located 350m from 7. Cadde, offering wide maneuvering room and Park & Wash integration.

**Approved Commercial Bridges & High-Intent Synonyms:**
- **Oto Kuaför**: Authorized as an approved high-intent Turkish commercial bridge and search synonym specifically representing *Detaylı Araç İçi Hijyen & Koltuk/Taban Restorasyonu* (sıcak ekstraksiyonlu koltuk temizliği, taban halısı derin arındırma, tavan sterilizasyonu ve buharlı hijyen).

**Anti-synonyms:**
The Five Pillars remain strictly distinct from unattended open parking lots, low-end abrasive self-servis jet-washes, or unregulated street wash hacks. Crucially, Parking Facilities is NOT an underground or fully enclosed ("kapalı") garage; advertising it as "kapalı" is strictly forbidden to protect truth-in-advertising.

### Dual Dedicated Hotlines
The workshop operates two specialized telephone dispatch lines mapped to distinct technician teams:
- **Otomobil Destek & Randevu**: `0552 470 36 10`
- **Motosiklet Destek & Randevu**: `0546 533 28 44`

### Segmented Studio Router
The reactive client architecture governed by `useWorkshopSegment` and URL synchronisation (`#otomobil`, `#motosiklet`), routing parking directly to `/otopark`. Downstream components (`ServicesCatalog`, `PricingSection`, `BeforeAfterSlider`) strictly isolate content to the active vehicle segment.
**Anti-synonyms:** The Segmented Router is NOT an auto-rotating distraction carousel, and NOT an isolated doorway page sprawl.

### Entity Reconciliation Bridge
A concise, machine-readable statement placed in the footer, SSS, and dedicated `/konum` hub linking Bumex Garage to the historical business names (`HAN-GAR`, `SUPARK`, `SONAX WÜRTH`) previously mapped to Google Place ID `ChIJlQLz8WJP0xQR5ahmG3GTF88` at No: 48.
**Anti-synonyms:** The Entity Bridge is NOT co-branding, NOT keyword stuffing, and NOT a doorway page.

### Four-Hub Architecture
The Next.js App Router routing strategy maintaining four high-authority, intent-isolated routes:
1. `/`: Primary luxury automotive detailing, micron paint correction, and fırçasız wash showcase.
2. `/motosiklet`: Dedicated motorcycle care and detailing hub rendered via `initialSegment="motosiklet"`.
3. `/otopark`: Utilitarian, zero-fluff parking guide detailing 350m 7. Cadde walking proximity, ramp clearance, and Park & Wash.
4. `/konum`: Centralized physical access, transit directions, ramp guidance, and historical entity continuity hub.
**Anti-synonyms:** Four-Hub Architecture is NOT single-page anchor clutter, and NOT a cluster of thin doorway pages (`/7-cadde-otopark`, `/emek-otopark`).

### Upcoming Service Flag ("Çok Yakında")
An explicit, honest operational status badge applied to services currently in development or preparation (specifically motorcycle towing and emergency transport), preventing false immediate dispatch expectations.
**Anti-synonyms:** Upcoming Service Flag is NOT deceptive bait-and-switch, and NOT unverified immediate 24/7 emergency dispatch.

### Zero-Fluff Utility Framing
An architectural framing invariant applied to parking facilities and operations that presents verifiable physical facts (24/7 CCTV, wide maneuvering room, sports car ramp clearance, 4-minute walk to 7. Cadde) without wishful marketing, oversized luxury hype, or false promises.
**Anti-synonyms:** Zero-Fluff Utility Framing is NOT low-effort or neglected design, and NOT wishful marketing.

### Review Velocity (18-Day Rule)
The local SEO operational benchmark requiring at least one verified customer review on Google Maps every 14 to 18 days to prevent algorithmic prominence cliffs.
**Anti-synonyms:** Review Velocity is NOT review gating, NOT review buying, and NOT a sudden spike of artificial reviews.

### Dielectric Dry-Steam Cleaning
An engine bay and electrical restoration technique utilizing high-temperature dry steam and non-conductive dielectric sealants that clean without water intrusion into sensors, ECUs, or battery terminals.
**Anti-synonyms:** Dielectric Cleaning is NOT pressure washing the engine bay with water jets.

### Persistent Mobile Anchor
The dedicated fixed bottom bar (`MobileCallBar`) serving as the single persistent, thumb-accessible channel on mobile viewports (< 768px) for direct telephone calls and global WhatsApp inquiries.
**Anti-synonyms:** Persistent Mobile Anchor is NOT screen-obscuring spam, NOT intrusive modal popups, and NOT arbitrary floating badges blocking content.

### Contextual Inquiry Action
In-card or in-section interaction triggers that initiate pre-filled, package-specific communication (e.g. dynamic WhatsApp message detailing the specific service package) rather than repeating generic raw telephone numbers.
**Anti-synonyms:** Contextual Inquiry Action is NOT generic raw phone link bombardment, and NOT lead-capture friction walls.

### Calm Atelier Posture
A core design and communication invariant enforcing measured restraint, quiet confidence, and zero aggressive sales pressure across all viewports, matching the standards of a high-precision automotive craft studio.
**Anti-synonyms:** Calm Atelier Posture is NOT conversion apathy, NOT hidden contact information, and NOT artificial urgency countdown banners.

---

## Architectural Invariants
1. **Zero Internal Platform Leakage**: No operational keys, database credentials, or customer data from `bumex-garage` internal OS may ever be placed in this repository.
2. **Deterministic Verification**: Every change must pass `./check.sh` (TypeScript typecheck and Next.js production build).
3. **Structured Data Fidelity**: JSON-LD Schema.org entities must strictly reflect the verified physical location, opening hours, and real service offerings.
4. **Facility Truthfulness**: The parking service must never be described as "kapalı" (enclosed/underground); it is a secure, camera-monitored facility.
5. **Dedicated Dispatch Routing**: Automotive and motorcycle user actions must route to their dedicated phone lines (`0552 470 36 10` for cars, `0546 533 28 44` for motorcycles).
6. **Mobile CTA Hierarchy**: The persistent mobile bottom bar (`MobileCallBar`) is the sole universal contact anchor on screens < 768px. In-card elements must provide contextual inquiries or protocol navigation rather than repeating raw phone numbers.
7. **Case Study Evidence Invariant**: No case study metric or claim (hours, stages, scratch removal, durability) may be displayed on public surfaces without real operational records. Unbacked absolute percentages (e.g. "%95+"), unverified durations, or fabricated warranty claims are strictly prohibited.
8. **Narrative Architecture (Need → Proof → Trust → Action)**: The public showcase obeys a strict psychological progression: Homepage = Intent (answer "What is my problem?" in 3 seconds via Intent Selector); Dedicated Hubs = Solution (deep SSG pages for PPF, Ceramic, Paint, Engine, Interior); Case Studies = Proof (reproducible Problem → Process → Result → Proof structure); Process = Trust (human check-in to delivery and Park & Wash convenience); Reviews & Location = Action.

