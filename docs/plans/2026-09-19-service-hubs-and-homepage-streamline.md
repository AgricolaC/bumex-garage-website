# Bağımsız Hizmet Merkezleri (Service Hubs) ve Ana Sayfa Sadeleştirme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use core:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Otomobil detailing ve koruma hizmetlerini 5 bağımsız statik Next.js App Router rotasına (`/hizmetler/[slug]`) ayrıştırarak yerel SEO otoritesi kazandırmak ve ana sayfadaki içerik ağırlığını azaltmak.

**Architecture:** `src/data/servicesData.ts` tek doğruluk kaynağı (single source of truth) üzerinden `src/app/hizmetler/[slug]/page.tsx` rotası `generateStaticParams` ile derleme anında 5 statik sayfaya çoğaltılır. Her sayfa zengin teknik içerik, `ServiceHubView`, `BreadcrumbList` ve `FAQPage` JSON-LD şemaları barındırır. Ana sayfa kartları ve menüler bu sayfalara iç linkleme ile bağlanır.

**Tech Stack:** Next.js 16 (App Router, Turbopack, SSG), React 19, TypeScript, Tailwind CSS, Lucide Icons, Schema.org JSON-LD.

**Spec:** `docs/specs/2026-09-19-service-hubs-and-homepage-streamline.md`

## Global Constraints
- Sıfır `any` kuralı. Kesin tip güvenliği.
- `./check.sh` (TypeScript typecheck + test:seo + Next.js build) her adımda hatasız geçmelidir.
- Google Search Central FAQ kuralı: Schema'daki tüm sorular sayfada kullanıcıya açıkça görünür olmalıdır.
- Telefon ve WhatsApp yönlendirmeleri otomobil hattı olan `0552 470 36 10` ile tutarlı kalmalıdır.
- Çift tema (Krem ve Titanyum Grisi) kusursuz desteklenmelidir.

---

### Task 1: Domain Veri Modeli ve Tipler (`src/data/servicesData.ts`)

- **Write Scope**: `["src/data/servicesData.ts"]`
- **Test Scope**: `["scripts/check-seo.ts"]`

**Files:**
- Create: `src/data/servicesData.ts`

**Interfaces:**
- Produces: `ServiceHubData`, `ServiceHubSlug`, `SERVICES_MAP`, `getAllServiceSlugs()`, `getServiceBySlug(slug)`

- [ ] **Step 1: Write `src/data/servicesData.ts`**
  5 hizmet için (`ppf-kaplama`, `seramik-kaplama`, `boya-restorasyonu`, `buharli-motor-temizligi`, `detayli-ic-hijyen`) derin teknik detaylar, mikron spesifikasyonları, 4-aşamalı protokol adımları, SSS soruları ve SEO meta verilerini içeren eksiksiz veri sözlüğünü oluştur.
- [ ] **Step 2: Typecheck & verify**
  Run: `npm run typecheck`
  Expected: PASS

---

### Task 2: Hizmet Sayfaları Bileşenleri ve Yapısal Veri (`src/components/hizmetler/*`)

- **Write Scope**: `["src/components/hizmetler/ServiceHubView.tsx", "src/components/hizmetler/ServiceStructuredData.tsx"]`
- **Test Scope**: `["scripts/check-seo.ts"]`

**Files:**
- Create: `src/components/hizmetler/ServiceStructuredData.tsx`
- Create: `src/components/hizmetler/ServiceHubView.tsx`

**Interfaces:**
- Consumes: `ServiceHubData` from `src/data/servicesData.ts`
- Produces: `ServiceHubView`, `ServiceStructuredData`

- [ ] **Step 1: Write `ServiceStructuredData.tsx`**
  `@context: 'https://schema.org'` altında `Service`, `AutoRepair`, `BreadcrumbList` ve `FAQPage` içeren birleşik `@graph` JSON-LD bileşeni oluştur.
- [ ] **Step 2: Write `ServiceHubView.tsx`**
  Topbar, Sticky Navbar, Breadcrumb, Hero Section, Teknik Özellikler Izgarası, 4 Aşamalı Uygulama Protokolü, SSS Akordeonu ve İletişim CTA'larını barındıran responsive bileşeni oluştur.
- [ ] **Step 3: Typecheck & verify**
  Run: `npm run typecheck`
  Expected: PASS

---

### Task 3: Next.js Dinamik Rota ve Statik Üretim (`src/app/hizmetler/[slug]/page.tsx`)

- **Write Scope**: `["src/app/hizmetler/[slug]/page.tsx"]`
- **Test Scope**: `["npm run build"]`

**Files:**
- Create: `src/app/hizmetler/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getServiceBySlug`, `getAllServiceSlugs`, `ServiceHubView`, `ServiceStructuredData`
- Produces: Next.js page with `generateStaticParams` and `generateMetadata`

- [ ] **Step 1: Write `src/app/hizmetler/[slug]/page.tsx`**
  `generateStaticParams` ile 5 slug'ı önceden derle. `generateMetadata` ile başlık, açıklama, canonical URL ve OpenGraph üret. Sayfa bulunamazsa `notFound()` çağır.
- [ ] **Step 2: Typecheck & Build**
  Run: `npm run build`
  Expected: PASS, `○ /hizmetler/[slug]` rotasının 5 statik varyant olarak derlenmesi.

---

### Task 4: Ana Sayfa Sadeleştirme, İç Linkleme ve Navigasyon Güncellemesi

- **Write Scope**: `["src/components/landing/ServicesCatalog.tsx", "src/components/landing/LandingNavbar.tsx", "src/components/landing/LandingFooter.tsx", "src/app/sitemap.ts"]`
- **Test Scope**: `["scripts/check-seo.ts", "./check.sh"]`

**Files:**
- Modify: `src/components/landing/ServicesCatalog.tsx` (Her karttan ilgili `/hizmetler/[slug]` sayfasına şık iç link butonu)
- Modify: `src/components/landing/LandingNavbar.tsx` (Masaüstü ve mobil menüde Hizmetler erişimi)
- Modify: `src/components/landing/LandingFooter.tsx` (Hizmetlerimiz başlığı altında alt sayfa linkleri)
- Modify: `src/app/sitemap.ts` (5 yeni rotanın sitemap'e eklenmesi)

- [ ] **Step 1: Link ServicesCatalog cards to `/hizmetler/[slug]`**
- [ ] **Step 2: Update LandingNavbar & LandingFooter**
- [ ] **Step 3: Update `sitemap.ts` with priority 0.85**
- [ ] **Step 4: Update `scripts/check-seo.ts` to validate the 5 new service hubs and sitemap**
- [ ] **Step 5: Run full verification `./check.sh`**
  Expected: Zero errors, all 21+ invariants pass.
