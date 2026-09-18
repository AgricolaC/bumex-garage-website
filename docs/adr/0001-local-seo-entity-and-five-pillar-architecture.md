# 0001 — Local SEO Entity Reconciliation, Five-Pillar Taxonomy, and Dual-Core Next.js Architecture

**Status:** Accepted

## Context
Bumex Garage operates at `Prof. Muammer Aksoy Caddesi (2. Cadde) No: 48, Bahçelievler, Çankaya, Ankara`.

Investigation into local search indices and Google Knowledge Graph revealed three critical architectural challenges:
1. **Place ID Collision**: The physical address and Google Place ID (`ChIJlQLz8WJP0xQR5ahmG3GTF88`) carried fragmented historical identities across `SUPARK OTO YIKAMA OTOPARK` (4.8★ / 31 reviews), `SONAX WÜRTH Bahçelievler` (4.3★ / 51 reviews), and `BUMEX GARAGE BAHÇELİEVLER` (4.9★ / 60 reviews).
2. **Category Miscategorization**: The live Google Business Profile was miscategorized under *"Self-servis oto yıkama"* (Self-service car wash), causing automated AI recommendation systems (ChatGPT, Gemini, Perplexity) to disqualify Bumex for full-service car care and parking drop-off queries.
3. **Five-Pillar Operational Model**: Bumex's real-world business encompasses five distinct services:
   - Auto Wash (Fırçasız, pH nötr iç-dış yıkama)
   - Auto Detailing (Mikron boya restorasyonu, 9H nano seramik, PPF, dielektrik kuru buharlı motor koruma)
   - Motorcycle Wash (Motosikletlere özel fırçasız yıkama, zincir ve jant arındırma)
   - Motorcycle Detailing (Grenaj parlatma, kask bakımı, seramik kaplama, kışlama)
   - Parking Facilities (7. Cadde'ye 350m, 24/7 CCTV, hava koşullarına karşı korumalı kapalı otopark)

## Decision Drivers
- Preserve historical listing authority and 60+ verified reviews without triggering Google's duplicate listing penalty.
- Represent all five operational pillars in structured data (Schema.org) and search engine categories.
- Avoid Google Core Update penalties associated with thin/doorway pages (e.g. `/7-cadde-otopark/`).
- Optimize for high-margin motorcycle care (a primary local competitive moat).
- Comply with FTC and Google anti-gating policies for review collection.

## Considered Options

### 1. Brand Reconciliation & Entity Transition
- **Option A (Pure Stealth Rebrand)**: Strip all historical mentions from web copy.
- **Option B (Quiet Semantic Entity Bridge)**: Natural reconciliation sentence in footer and FAQ referencing the historical Supark location at No: 48.
- **Option C (Co-Branding Hero Banner)**: Prominent banner declaring the brand change.

### 2. Website Routing Architecture
- **Option A (Single-Page Only)**: Everything on `/` with anchor links.
- **Option B (Dual-Core: `/` Vitrin + `/otopark` Hub)**: Dedicated `/otopark` page focusing on security, clearances, 7. Cadde proximity, and Park & Wash workflow, without monthly subscription pricing tables for now.
- **Option C (Programmatic Sub-Pages)**: Separate doorway-style pages for every street and micro-service.

### 3. Schema.org Entity Typing
- **Option A (Triple-Entity `@graph`)**: `@type: ["AutoRepair", "ParkingFacility", "MotorcycleRepair"]` with dedicated offer catalogs.
- **Option B (Generic `AutoRepair` Only)**: Rely purely on body text for parking and motorcycles.

### 4. Review Velocity Strategy
- **Option A**: WhatsApp receipt trigger only.
- **Option B**: Physical NFC/QR plaque at key handover.
- **Option C**: Dual unfiltered touchpoint (NFC plaque at key pickup + WhatsApp receipt link).

---

## Decision

1. **Adopt Option B for Entity Reconciliation**: Place an unobtrusive entity bridge in the website footer and FAQ (*"Bumex Garage, Bahçelievler Prof. Muammer Aksoy Caddesi No: 48 adresinde eski Supark Otopark ve Yıkama lokasyonunda hizmet vermektedir"*), preserving Place ID `ChIJlQLz8WJP0xQR5ahmG3GTF88`.
2. **Adopt Option B for Website Architecture**: Maintain `/` as the primary Detailing & Studio Showcase, while constructing a high-rigor dedicated `/otopark` page highlighting CCTV surveillance, weather shelter, lowered-car/SUV ramp clearances, 350m walking proximity to 7. Cadde, and the "Park & Wash While You Visit" workflow (excluding subscription pricing tables for now).
3. **Adopt Option A for Schema.org**: Implement multi-typed structured data `@type: ["AutoRepair", "ParkingFacility", "MotorcycleRepair"]` in JSON-LD, explicitly elevating motorcycle detailing and kapalı otopark to first-class schema entities.
4. **Google Business Profile Realignment**: Reclassify primary category from *Self-service car wash* to `Oto Bakım ve Onarım Servisi` (`Auto repair shop`) or `Oto Detailing Servisi`, with secondary categories for `Kapalı Otopark`, `Oto Yıkama`, `Boya Koruma Servisi`, and `Motosiklet Tamir Servisi`.
5. **Adopt Option C for Review Velocity**: Deploy dual unfiltered review touchpoints (physical NFC stand at cashier + WhatsApp digital receipt link) honoring the 18-day review velocity cadence without review gating.

---

## Consequences

### Positive
- Eliminates AI recommendation disqualification by removing the "self-service" tag.
- Unlocks high-intent search queries for both car owners and motorcycle riders across Ankara.
- Gives commuters and 7th Cadde visitors an intent-matched `/otopark` landing page without triggering doorway-page penalties.
- Establishes full machine readability across Google Knowledge Graph, Bing Places (ChatGPT/Copilot), and Apple Business Connect (Siri).

### Negative
- Requires maintaining two distinct core routes (`/` and `/otopark`) with synchronized theme and navigation states.
- GBP category change may require a brief re-verification window by Google.

### Neutral
- Subscription parking pricing remains inquiry-based via WhatsApp rather than fixed public tables.
