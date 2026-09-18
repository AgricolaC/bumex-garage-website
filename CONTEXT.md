# CONTEXT.md — Bumex Garage Web Platform

This document defines the canonical domain model, architectural boundaries, and ubiquitous language for the Bumex Garage web showcase.

---

## Canonical Domain Glossary

### Five Operational Pillars
The five distinct commercial service divisions operated by Bumex Garage at `Prof. Muammer Aksoy Cad. No: 48, Bahçelievler, Ankara`.
- **Auto Wash**: Touchless, scratch-free wash using pH-neutral foam and two-bucket methods.
- **Auto Detailing**: Micron-measured paint correction, 9H nano ceramic armor, PPF film, and dielectric dry steam engine cleaning.
- **Motorcycle Wash**: Specialized touchless cleaning for sportbikes, cruisers, and scooters with chain and wheel degreasing.
- **Motorcycle Detailing**: Dedicated motorcycle paint correction, fairing polishing, 9H ceramic shield, and winterization prep.
- **Parking Facilities (Kapalı Otopark)**: Secure, camera-monitored indoor parking located 350m from 7. Cadde, protecting vehicles from weather and street congestion.
**Anti-synonyms:** The Five Pillars are NOT a generic "oto kuaför", NOT a "self-servis jet-wash", and NOT an unattended open parking lot.

### Entity Reconciliation Bridge
A concise, machine-readable statement placed in the footer and FAQ linking Bumex Garage to the historical business names (`SUPARK`, `SONAX WÜRTH`) previously mapped to Google Place ID `ChIJlQLz8WJP0xQR5ahmG3GTF88` at No: 48.
**Anti-synonyms:** The Entity Bridge is NOT co-branding, NOT keyword stuffing, and NOT a doorway page.

### Dual-Core Architecture
The Next.js App Router routing strategy maintaining `/` as the primary luxury studio showcase and `/otopark` as the dedicated high-rigor indoor parking and "Park & Wash" destination hub.
**Anti-synonyms:** Dual-Core Architecture is NOT a single-page anchor hack, and NOT a cluster of thin doorway pages (`/7-cadde-otopark`, `/emek-otopark`).

### Review Velocity (18-Day Rule)
The local SEO operational benchmark requiring at least one verified customer review on Google Maps every 14 to 18 days to prevent algorithmic prominence cliffs.
**Anti-synonyms:** Review Velocity is NOT review gating, NOT review buying, and NOT a sudden spike of artificial reviews.

### Dielectric Dry-Steam Cleaning
An engine bay and electrical restoration technique utilizing high-temperature dry steam and non-conductive dielectric sealants that clean without water intrusion into sensors, ECUs, or battery terminals.
**Anti-synonyms:** Dielectric Cleaning is NOT pressure washing the engine bay with water jets.

---

## Architectural Invariants
1. **Zero Internal Platform Leakage**: No operational keys, database credentials, or customer data from `bumex-garage` internal OS may ever be placed in this repository.
2. **Deterministic Verification**: Every change must pass `./check.sh` (TypeScript typecheck and Next.js production build).
3. **Structured Data Fidelity**: JSON-LD Schema.org entities must strictly reflect the verified physical location, opening hours, and real service offerings.
