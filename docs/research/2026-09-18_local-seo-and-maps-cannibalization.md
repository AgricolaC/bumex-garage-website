---
question: Which open-source local SEO and Google Maps skills/mechanisms should be cannibalized for Bumex Garage Ankara Bahçelievler, and how should they be grafted into field-kit and the Next.js codebase?
date: 2026-09-18
verdict: Cannibalize the local schema and GBP audit mechanisms from AgriciDaniel/claude-seo (MIT) and garrettjsmith/localseoskills (MIT), synthesize them into a zero-dependency field-kit `web:local-seo` skill, and graft AutoRepair JSON-LD + Geo metadata + sitemap/robots directly into Bumex Garage.
evidence-floor: B
---

# Investigation: Local Google Search & Google Maps SEO Cannibalization

## Verdict
To maximize Google Search Local Pack and Google Maps visibility for Bumex Garage Ankara Bahçelievler, we identified and inspected two leading open-source agent repositories: `AgriciDaniel/claude-seo` and `garrettjsmith/localseoskills`. Both carry clean MIT licenses. Their core mechanisms—GBP 25-field optimization, 18-day review velocity cadence, and high-precision `AutoRepair` JSON-LD schema with localized service areas—can be de-frameworked and grafted into field-kit and the Next.js App Router without taking on third-party SaaS or API dependencies.

## Load-Bearing Claims

| Claim | Grade | Source |
|---|---|---|
| 1. GBP category, proximity, and review recency account for over 70% of Local Pack / Google Maps ranking variance. | B | Whitespark 2026 Local Ranking Factors (Nov 2025) & Search Atlas XGBoost ML Study (Aug 2025) |
| 2. Google specifically recognizes `AutoRepair` as a supported `LocalBusiness` subtype with `geo`, `openingHoursSpecification`, `address`, and `hasOfferCatalog`. | A | Google Search Central & Schema.org Specification (`schema.org/AutoRepair`) |
| 3. Both `AgriciDaniel/claude-seo` and `garrettjsmith/localseoskills` are MIT-licensed and contain de-frameworkable local SEO checklists and schema generators. | A | `github.com/AgriciDaniel/claude-seo/LICENSE`, `github.com/garrettjsmith/localseoskills/LICENSE` |
| 4. Next.js 16 App Router supports zero-dependency JSON-LD injection, dynamic `sitemap.ts`, and `robots.ts` without external libraries. | A | Next.js Official Documentation (`nextjs.org/docs/app/api-reference/file-conventions/metadata`) |
| 5. AI Search Engines (ChatGPT, Copilot, Alexa) source local data from Bing Places and directories, not GBP directly; Google Gemini sources from GBP. | B | Seer Interactive & Search Engine Land Empirical AI Citations Study (2025–2026) |

---

## Evidence

### 1. Ranking Weights in Local Pack & Google Maps
- **Source**: Whitespark 2026 Local Search Ranking Factors (Study) & Search Atlas ML Study (2025).
- **Verbatim**:
  ```
  GBP Signals: 32% (Primary category score: 193, #1 factor)
  Review Signals: ~20% (Review velocity > volume; 18-day rule)
  Proximity: 55.2% of ranking variance in ML regression
  ```
- **Analysis**: Ranking #1 in Ankara Bahçelievler requires strict NAP (Name, Address, Phone) consistency between Google Business Profile, Apple Business, and on-page HTML, paired with regular customer reviews (at least 1 every 18 days).

### 2. Supported Schema.org Types for Automotive Detailing
- **Source**: Schema.org `AutoRepair` / Google Developers Documentation.
- **Verbatim**:
  ```
  Automotive:
    AutoDealer (sales)
    AutoRepair (service & detailing)
    AutoPartsStore (parts)
  Required: name, address (PostalAddress)
  Recommended: geo (min 5 decimal places), openingHoursSpecification, telephone, url, priceRange, hasOfferCatalog, aggregateRating
  ```
- **Analysis**: Bumex Garage must use `AutoRepair` (not generic `LocalBusiness` or `Store`), targeting Bahçelievler / Çankaya / Ankara with exact geo-coordinates and detailing service catalogs.

### 3. Open-Source Candidates for Cannibalization

#### Candidate A: `AgriciDaniel/claude-seo` (MIT)
- **Strengths**:
  - `skills/seo-local`: 6-dimension scoring framework (GBP signals, Review velocity, Local on-page, NAP consistency, Schema, Local citations).
  - `skills/seo-maps`: Maps presence audit, cross-platform verification (Google, Apple Maps, Bing Places, OpenStreetMap).
  - `skills/seo-schema`: Precise JSON-LD generators for local entities.
  - Up-to-date benchmarks (2026 Whitespark study, 18-day review rule, FTC review gating compliance).
- **Weaknesses**: Carries heavy optional tooling (DataForSEO, Python CLI tools, 56 helper scripts).
- **Cannibalization Target**: Extract the pure markdown decision framework, GBP audit checklist, and JSON-LD schema models into a lightweight `local-seo` skill.

#### Candidate B: `garrettjsmith/localseoskills` (MIT)
- **Strengths**:
  - `skills/local-schema`: Concise LocalBusiness JSON-LD template with `areaServed` and `hasOfferCatalog`.
  - `skills/gbp-optimization`: Step-by-step GBP category and attributes guide.
  - `skills/bing-places` & `skills/apple-business-connect`: Cross-platform citation blueprints.
- **Cannibalization Target**: Extract the service area definition pattern and NAP audit protocol.

---

## Recommendation

1. **Graft a Standalone `local-seo` Skill into `field-kit/plugins/web/skills/local-seo/SKILL.md`**:
   - Zero external dependencies.
   - Combines the 6-dimension Local SEO audit from `claude-seo` with the `AutoRepair` schema templates from `localseoskills`.
   - Adds guidelines for Turkish local citation sources (Google Business Profile, Apple Maps, Bing Places, Yandex Haritalar, Sarı Sayfalar).

2. **Implement in Bumex Garage Website (`bumex-garage-website`)**:
   - **`AutoRepair` + `FAQPage` JSON-LD**: Embed structured data in `src/app/layout.tsx` or a dedicated component.
   - **Geographic Metadata**: Add `geo.region: TR-06`, `geo.placename: Ankara`, `geo.position`, and `ICBM` to `metadata`.
   - **`sitemap.ts` & `robots.ts`**: Generate native Next.js search engine discovery files.
   - **Google Maps Action Link**: Ensure direct direction links and Google review generation links are prominently actionable.
