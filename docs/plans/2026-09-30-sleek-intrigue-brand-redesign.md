# Sleek & Intrigue Brand Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use core:swarm-orchestrator to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Bumex Garage from a generic luxury detailing storefront into a sleek, budget-friendly, cult-intrigue subterranean garage identity, featuring mechanical/clicky haptics, anti-cliché typography, and honest pricing manifests while preserving all existing pricing bullet points and SEO invariants.

**Architecture:** 
1. Primitives & Tokens: Clean up [globals.css](file:///Users/berkcalisir/dev/bumex-garage-website/src/app/globals.css) and [tailwind.config.ts](file:///Users/berkcalisir/dev/bumex-garage-website/tailwind.config.ts) to establish the Asphalt Pitch (`#0C0D10`), Raw Chalk (`#F4F3EF`), and Technical Royal Blue (`#1E3A8A` / `#2563EB`) design system with mechanical easing curves and reduced-motion guards.
2. Kinetic Micro-Interactions: Implement Emil Kowalski's mechanical button press feedback (`active:scale-[0.965]`), spring gear-shift pill tabs, and snappy transitions.
3. Editorial Anti-Cliché Pass: Strip dot-eyebrow kickers, calibrate display headings down to 400-500 weight, and infuse intriguing, cult-building one-liners.
4. Honest Pricing Manifest: Re-architect the pricing section into a transparent workshop work-order format while preserving 100% of the Start, VIP, Seramik, and Motosiklet bullet points and prices.
5. Verification & Deploy: Run `./check.sh` (TypeScript, 25/25 SEO invariants, Next.js build) and deploy to production via git push.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 3.4, Lucide React, TypeScript 5.7.

---

## Global Constraints

- Retain Royal Blue (`#1E3A8A`) as client signature signal color.
- Preserve 100% of the price package bullet points and pricing tiers in [PricingSection.tsx](file:///Users/berkcalisir/dev/bumex-garage-website/src/components/landing/PricingSection.tsx).
- Do NOT touch or break the 25 verified SEO, Schema.org, Geo, or NAP invariants in `scripts/check-seo.ts`.
- Leave DaVinci Pro video/media embeds container ready for client video assets.
- Comply with `core:verification-before-completion` before any git push.

---

### Task 1: Tokens, Asphalt Palette & Mechanical Motion Foundation
- **Write Scope**: `["src/app/globals.css", "tailwind.config.ts"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Update globals.css with cult-intrigue tokens, asphalt pitch, mechanical easing, and reduced-motion**
- [ ] **Step 2: Update tailwind.config.ts to expose semantic palette tokens**
- [ ] **Step 3: Run `./check.sh` to verify build & types**

---

### Task 2: Hero Section & Gear-Shift Segment Switcher
- **Write Scope**: `["src/components/landing/HeroSection.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/HeroSection.tsx`

- [ ] **Step 1: Recalibrate hero typography to 400-500 weight with intriguing copy**
- [ ] **Step 2: Re-architect segment selector (Car / Moto) into a sleek mechanical gear-shift pill with spring feedback**
- [ ] **Step 3: Frame DaVinci Pro cinema container with inspection telemetry styling**
- [ ] **Step 4: Update CTA buttons with tactile socket-wrench `active:scale-[0.965]` feedback**
- [ ] **Step 5: Run `./check.sh` to verify build & types**

---

### Task 3: Anti-Cliché Editorial Restraint & Cult Intrigue (Intent & Process Sections)
- **Write Scope**: `["src/components/landing/IntentCards.tsx", "src/components/landing/ProcessSection.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/IntentCards.tsx`
- Modify: `src/components/landing/ProcessSection.tsx`

- [ ] **Step 1: Strip dot-eyebrow kickers from IntentCards.tsx and introduce subtle magnetic copy**
- [ ] **Step 2: Apply mechanical haptics and sleek asymmetric borders to Intent cards**
- [ ] **Step 3: Strip dot-eyebrow kickers from ProcessSection.tsx, retuning to 400-500 weight**
- [ ] **Step 4: Run `./check.sh` to verify build & types**

---

### Task 4: Transparent Budget-Friendly Pricing Manifest (100% Bullet Retention)
- **Write Scope**: `["src/components/landing/PricingSection.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/PricingSection.tsx`

- [ ] **Step 1: Re-architect pricing headers to remove eyebrow kickers and emphasize transparent, fixed labor**
- [ ] **Step 2: Convert pricing cards to sleek workshop manifests with tabular numerals and honest badges**
- [ ] **Step 3: Verify all bullet points and descriptions are preserved line-by-line**
- [ ] **Step 4: Apply mechanical socket-wrench press states to WhatsApp and inspection buttons**
- [ ] **Step 5: Run `./check.sh` to verify build & types**

---

### Task 5: Before/After Slider & Gallery Polish
- **Write Scope**: `["src/components/landing/BeforeAfterSlider.tsx"]`
- **Test Scope**: `["./check.sh"]`

**Files:**
- Modify: `src/components/landing/BeforeAfterSlider.tsx`

- [ ] **Step 1: Strip eyebrow kickers and refine headings to 400-500 weight**
- [ ] **Step 2: Enhance slider handle and tabs with mechanical clicky feedback and asphalt border styling**
- [ ] **Step 3: Run `./check.sh` to verify build & types**

---

### Task 6: Terminal Verification, Commit & Deploy to Production
- **Write Scope**: `["git commit", "git push origin master"]`
- **Test Scope**: `["./check.sh"]`

- [ ] **Step 1: Run fresh `./check.sh` verification (TypeScript, 25/25 SEO tests, Next.js build)**
- [ ] **Step 2: Review `git diff` for context hygiene**
- [ ] **Step 3: Commit changes with descriptive semantic message**
- [ ] **Step 4: Push to `origin master` to trigger Vercel production deployment**
- [ ] **Step 5: Verify production deployment readiness**
