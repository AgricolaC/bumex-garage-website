# 0003 — Four-Hub Architecture, Honest Utility Framing, WebP Pipeline, and Location Hub

**Status:** Accepted

## Context
Following the adversarial local SEO and product review (grilling session), five structural operational realities and opportunities were identified:
1. **Audience Collision & SEO Indexability**: Motorcycle care clients search specifically for motorcycle detailing, chain care, and maintenance. Relying purely on client-side hash switching (`#motosiklet`) prevented Google from indexing an intent-matched landing URL for motorcycle queries in Ankara.
2. **Wishful Marketing in Parking**: The `/otopark` page carried oversized luxury marketing badges and glowing hero framing ("wishful framing") that created misaligned customer expectations for an open/semi-covered camera-monitored parking lot.
3. **Operational Ground Truth on Towing**: The 7/24 motorcycle towing service is an upcoming capability, not currently active for immediate 24/7 on-demand dispatch. Advertising it as active risked customer dissatisfaction and negative reviews.
4. **Historical Entity Reconciliation (`Han-gar`)**: Confirmation was obtained that "Han-gar" was indeed a genuine historical physical sign/business name at `Prof. Muammer Aksoy Cad. No: 48` alongside `Sonax-Würth` and `Supark`.
5. **Core Web Vitals & Asset Payload**: The Before/After gallery relied on raw JPEG assets (200–480 KB each) with unoptimized Next.js image loading, creating mobile LCP bottlenecks.

---

## Decision Drivers
- High-intent local search indexability for both automotive and motorcycle enthusiasts without code duplication.
- Ground-truth honesty: zero wishful marketing, strict factual representation of parking and services.
- Clean entity continuity across Google Knowledge Graph, Apple Business Connect, and Bing Places without trademark infringement.
- Optimal mobile performance and Core Web Vitals via lightweight WebP assets.
- Preservation of decoupled Schema.org JSON-LD and zero-leakage FAQ validation in `scripts/check-seo.ts`.

---

## Considered Options

### 1. Motorcycle Route Architecture
| Option | Pros | Cons |
|---|---|---|
| A: Fully Separate Component Tree | Total layout isolation | High code duplication and maintenance burden |
| B: Status Quo (URL Hash Only) | Zero new routes | Google does not index hash fragments as separate SERP listings |
| **C: Smart SSR Hybrid Route (`/motosiklet`)** | Zero component duplication, instant motorcycle preset, independent metadata & schema | Requires bi-directional URL synchronization with `/` |

### 2. Parking Framing
| Option | Pros | Cons |
|---|---|---|
| **A: Zero-Fluff Utility Page (`/otopark`)** | Preserves `ParkingFacility` ranking; sets honest customer expectations | Less flashy visual appeal |
| B: Fold Parking into Homepage Footnote Only | Removes one subpage | Drops dedicated landing page for 7. Cadde parking queries |

### 3. Location & Historical Entity Continuity
| Option | Pros | Cons |
|---|---|---|
| A: Footer Link & FAQ Only | Minimal surface area | Obscured below the fold; lacks dedicated place citation |
| **B: Dedicated Location Hub (`/konum`)** | Clean target URL for map listings, transit/ramp guides, and multi-entity explanation | Requires maintaining a 4th route |

---

## Decision

1. **Adopt Four-Hub Site Architecture**:
   - `/`: Primary automotive detailing, paint correction, ceramic coating, and wash studio.
   - `/motosiklet`: Dedicated motorcycle care hub rendering the studio with `initialSegment="motosiklet"`, isolated OpenGraph preview, and dedicated `MotorcycleRepair` schema.
   - `/otopark`: Utilitarian, zero-fluff parking guide detailing 350m walking distance to 7. Cadde, ramp clearances, CCTV, Park & Wash, and direct WhatsApp inquiry.
   - `/konum`: Centralized physical access, navigation, Metro walking routes, ramp guidance, and tripartite historical entity reconciliation (*Han-gar, Sonax-Würth, Supark*).
2. **Upcoming Service Flagging for Towing**: Reframe active towing claims across catalogs and pricing to *"Motosiklet Çekici & Özel Taşıma (Çok Yakında)"* with a subtle badge, preventing false dispatch expectations.
3. **Static WebP Asset Pipeline**: Convert all Before/After JPEG assets to optimized WebP format, reducing asset transfer weight by ~70% and enforcing responsive loading.
4. **Decoupled Route-Specific FAQ & Schema**: Each hub maintains its own synchronized on-page FAQ and Schema.org JSON-LD graph, strictly validated by `scripts/check-seo.ts`.

---

## Consequences

### Positive
- Independent Google SERP rankings and rich snippet titles for automotive (`/`), motorcycle (`/motosiklet`), parking (`/otopark`), and location (`/konum`).
- Eliminates risk of negative reviews from customer mismatch on parking coverage or towing availability.
- Maximizes mobile PageSpeed and Core Web Vitals.
- Solidifies local entity authority across Google, Apple Maps, Bing Places, and Yandex.

### Negative
- Sitemaps and navigation must cleanly link all four hubs without navbar clutter.
- `scripts/check-seo.ts` must be extended to validate all four routes.

### Neutral
- The atölye switcher (`01 OTOMOBİL` / `02 MOTOSİKLET`) will seamlessly perform shallow router navigation between `/` and `/motosiklet`.
