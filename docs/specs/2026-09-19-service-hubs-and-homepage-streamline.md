# Spec: Bağımsız Hizmet Merkezleri (Service Hubs) ve Ana Sayfa Sadeleştirme

**Tarih**: 19 Eylül 2026  
**Durum**: Approved (Kullanıcı tarafından Q1=B, Q2=A, Q3=Ertele, Q4=B tercihleriyle onaylandı)  
**Tasarım Referansı**: [`bumex_vs_milano_benchmark.md`](file:///Users/berkcalisir/.gemini/antigravity/brain/7d05c8d5-5089-453f-9c6b-c8f063deb32f/bumex_vs_milano_benchmark.md)

---

## Problem Statement

Mevcut Bumex Garage platformunda (`bumexgarage.vercel.app`), tüm otomobil detailing, boya koruma, PPF, seramik ve motor temizliği detayları tek bir ana sayfada (`/`) toplanmıştır. 
Bu durum:
1. **Topical Relevance (Konusal Alaka) Seyrelmesi**: Google arama motorunda *"Ankara PPF Kaplama"* veya *"Bahçelievler Seramik Kaplama"* aratan yüksek niyetli (high-intent) kullanıcılara yalnızca o konuya odaklanmış, derinlemesine teknik bilgi ve garanti detayları içeren tekil bir açılış sayfası sunulamamaktadır.
2. **Ana Sayfa Bloat**: Ana sayfadaki aşırı metin ve detay yükü, ilk yükleme anındaki DOM düğümü sayısını artırmakta ve vitrin akıcılığını ağırlaştırmaktadır.
3. **Rakip Ayrışması**: Milano Car Care gibi rakipler her hizmet için ayrı URL (`/hizmetler/...`) sunarak organik aramalarda geniş bir anahtar kelime yüzeyi yakalamaktadır.

## Solution

Next.js App Router dinamik rotalama altyapısı (`src/app/hizmetler/[slug]/page.tsx`) ve `generateStaticParams` kullanılarak, 5 temel otomobil hizmeti için statik olarak önceden derlenen (SSG), sub-second hızda açılan, Schema.org `Service`, `BreadcrumbList` ve `FAQPage` destekli bağımsız **Hizmet Otorite Merkezleri (Service Hubs)** inşa edilecektir.

Ana sayfa, bu sayfalara yönlendiren şık ve hafif bir "Vitrin & Rota Dağıtıcı" haline getirilecek; iç linkleme (internal linking) ile link equity alt sayfalara aktarılacaktır.

## 5 Temel Hizmet Otorite Merkezi

1. `ppf-kaplama`: **PPF Kaplama (Poliüretan Şeffaf Boya Koruma Filmi)**
2. `seramik-kaplama`: **9H Nano Seramik Kaplama & Mikron Boya Zırhı**
3. `boya-restorasyonu`: **Mikron Boya Restorasyonu & Çizik Giderme (Pasta Cila)**
4. `buharli-motor-temizligi`: **140°C Dielektrik Kuru Buharlı Motor Koruma & Temizlik**
5. `detayli-ic-hijyen`: **Detaylı Araç İçi Hijyen & Koltuk/Taban Restorasyonu (Oto Kuaför)**

## Implementation Decisions

1. **Domain Model (`src/data/servicesData.ts`)**:
   - `principle-model-the-domain`: Her hizmetin teknik özellikleri, mikron analizleri, uygulama basamakları, SSS listesi ve SEO meta verileri tek bir tip güvenli (type-safe) veri modelinde tutulur.
2. **Statik Rota Üretimi (`src/app/hizmetler/[slug]/page.tsx`)**:
   - `generateStaticParams` 5 slug için statik sayfaları derleme anında üretir.
   - `generateMetadata` her sayfaya özel dinamik Open Graph, Twitter ve canonical tag üretir.
3. **Bileşen Mimarisi (`src/components/hizmetler/ServiceHubView.tsx`)**:
   - Çift tema (Krem / Titanyum Grisi) destekli.
   - Doğrudan Otomobil Hattına (`0552 470 36 10`) ve hizmete özel WhatsApp mesajına bağlanan CTA'lar.
   - Breadcrumb navigasyonu.
   - İnteraktif SSS akordeonu.
4. **Yapısal Veri (`src/components/hizmetler/ServiceStructuredData.tsx`)**:
   - Google Search Central politikalarıyla %100 uyumlu `Service`, `BreadcrumbList` ve sayfadaki görünür sorularla eşleşen `FAQPage` JSON-LD şeması.
5. **Anti-Doorway Dual-Core Kuralı (`web:local-seo` Boyut 4)**:
   - Sayfalar asla ince (thin) anahtar kelime spam'i içermez; her sayfa en az 500+ kelime özgün teknik bilgi, mikron ölçüm kriterleri ve gerçek protokoller barındırır.
6. **Sitemap & SEO Doğrulaması**:
   - `src/app/sitemap.ts` 5 yeni rotayı içerecek şekilde güncellenir.
   - `scripts/check-seo.ts` 5 yeni hizmet sayfasının schema ve sitemap entegrasyonunu otomatik denetleyecek şekilde genişletilir.

## Testing & Verification Decisions

- TypeScript tip kontrolü (`npm run typecheck`) sıfır hata ile geçmelidir.
- `scripts/check-seo.ts` (`npm run test:seo`) tüm yeni rotaları doğrulamalıdır.
- Next.js static build (`npm run build`) tüm rotaları `○ (Static)` olarak başarıyla derlemelidir.
- `./check.sh` tek komutla tüm doğrulamaları yeşile çekmelidir.

## Out of Scope

- Üçüncü parti Trustindex benzeri harici yorum widget'ı (kullanıcı kararı: Q3 = Şimdilik hiçbiri).
- Callback popup formları veya modal lead capture (kullanıcı kararı: Q2 = A, doğrudan WhatsApp ve telefon korunuyor).
- İç operasyonel veritabanı veya müşteri yönetim sistemi bağlantısı (Asla Taviz Verilmeyecek İlkeler).
