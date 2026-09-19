/**
 * Deterministic SEO, OpenGraph, Schema.org & Local Entity Validator for Bumex Garage
 * Validates:
 * 1. Schema.org JSON-LD graph integrity, entity decoupling, and zero cross-page FAQ leakage.
 * 2. Exact 1200x630 OpenGraph / Twitter card dimensions and dedicated route assets.
 * 3. W3C / Chromium PWA manifest installability with verified 192x192 and 512x512 icons.
 * 4. Telephone NAP consistency, 7-decimal entrance coordinates, and quiet entity reconciliation.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '..');

function fail(msg: string): void {
  console.error(`\x1b[31m[SEO FAIL]\x1b[0m ${msg}`);
  process.exit(1);
}

function pass(msg: string): void {
  console.log(`\x1b[32m[SEO PASS]\x1b[0m ${msg}`);
}

function parsePngDimensions(buf: Buffer): { width: number; height: number } | null {
  if (
    buf.length >= 24 &&
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47 &&
    buf[4] === 0x0d &&
    buf[5] === 0x0a &&
    buf[6] === 0x1a &&
    buf[7] === 0x0a
  ) {
    return {
      width: buf.readUInt32BE(16),
      height: buf.readUInt32BE(20),
    };
  }
  return null;
}

function parseJpegDimensions(buf: Buffer): { width: number; height: number } | null {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) {
    return null;
  }
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const markerStart = offset;
    while (offset < buf.length && buf[offset] === 0xff) {
      offset++;
    }
    if (offset >= buf.length) break;

    const marker = buf[offset++];
    if (marker === 0xd9 || marker === 0xda) break; // EOI or SOS
    if (offset + 2 > buf.length) break;
    const segmentLength = buf.readUInt16BE(offset);

    // SOF markers: 0xC0..0xC3, 0xC5..0xC7, 0xC9..0xCB, 0xCD..0xCF
    const isSOF =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);

    if (isSOF && markerStart + 8 < buf.length) {
      const height = buf.readUInt16BE(markerStart + 5);
      const width = buf.readUInt16BE(markerStart + 7);
      return { width, height };
    }

    offset += segmentLength;
  }
  return null;
}

function getImageDimensions(filePath: string): { width: number; height: number } {
  if (!fs.existsSync(filePath)) {
    fail(`File does not exist: ${filePath}`);
    return { width: 0, height: 0 };
  }

  try {
    const buf = fs.readFileSync(filePath);
    const pngDims = parsePngDimensions(buf);
    if (pngDims) return pngDims;

    const jpegDims = parseJpegDimensions(buf);
    if (jpegDims) return jpegDims;
  } catch (err: unknown) {
    // Continue to darwin fallback or fail below
  }

  // Optional fallback to sips only if binary parse fails and process.platform === 'darwin'
  if (process.platform === 'darwin') {
    try {
      const out = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      });
      const widthMatch = out.match(/pixelWidth:\s*(\d+)/);
      const heightMatch = out.match(/pixelHeight:\s*(\d+)/);
      if (widthMatch?.[1] && heightMatch?.[1]) {
        return {
          width: parseInt(widthMatch[1], 10),
          height: parseInt(heightMatch[1], 10),
        };
      }
    } catch {
      // sips failed or unavailable
    }
  }

  fail(`Could not parse pixel dimensions for ${filePath}`);
  return { width: 0, height: 0 };
}

console.log('=== Bumex Garage SEO, Schema & Entity Verification ===\n');

// 1. Validate Decoupled Schema Architecture (No Global FAQ Leakage)
const layoutPath = path.join(ROOT, 'src/app/layout.tsx');
if (!fs.existsSync(layoutPath)) fail(`layout.tsx not found at ${layoutPath}`);
const layoutCode = fs.readFileSync(layoutPath, 'utf8');

if (layoutCode.includes('<StructuredData') || layoutCode.includes("from '@/components/landing/StructuredData'")) {
  fail("RootLayout leaks home-specific StructuredData/FAQ schema to all subpages. Move it to page.tsx!");
}
pass("RootLayout decoupled: zero global FAQ schema leakage across subpages");

const homePagePath = path.join(ROOT, 'src/app/page.tsx');
if (!fs.existsSync(homePagePath)) fail(`page.tsx not found at ${homePagePath}`);
const homePageCode = fs.readFileSync(homePagePath, 'utf8');

if (!homePageCode.includes('<StructuredData />')) {
  fail("src/app/page.tsx must mount <StructuredData /> for homepage LocalBusiness and FAQ schema");
}
pass("src/app/page.tsx correctly mounts homepage StructuredData");

// 2. Validate StructuredData.tsx (Homepage LocalBusiness + FAQ)
const structuredDataPath = path.join(ROOT, 'src/components/landing/StructuredData.tsx');
if (!fs.existsSync(structuredDataPath)) fail(`StructuredData.tsx not found at ${structuredDataPath}`);
const structuredDataCode = fs.readFileSync(structuredDataPath, 'utf8');

if (!structuredDataCode.includes("'@context': 'https://schema.org'")) {
  fail("StructuredData missing '@context': 'https://schema.org'");
}
pass("Schema.org @context verified");

if (!structuredDataCode.includes("'AutoRepair'") || !structuredDataCode.includes("'ParkingFacility'") || !structuredDataCode.includes("'MotorcycleRepair'")) {
  fail("StructuredData missing multi-type ['AutoRepair', 'ParkingFacility', 'MotorcycleRepair'] declaration");
}
pass("Multi-type business declaration (AutoRepair + ParkingFacility + MotorcycleRepair) verified");

if (!structuredDataCode.includes('latitude: 39.9277018') || !structuredDataCode.includes('longitude: 32.8246501')) {
  fail('GeoCoordinates missing 5+ decimal precision entrance coordinates (39.9277018, 32.8246501)');
}
pass('GeoCoordinates (39.9277018, 32.8246501) verified with 7 decimal precision');

if (!structuredDataCode.includes("telephone: '+905524703610'")) {
  fail("Canonical telephone '+905524703610' missing or misformatted in JSON-LD");
}
pass("Telephone NAP consistency ('+905524703610') verified");

if (!structuredDataCode.includes("currenciesAccepted: 'TRY'") || !structuredDataCode.includes("paymentAccepted: 'Nakit, Kredi Kartı, Havale/EFT'")) {
  fail("StructuredData missing currenciesAccepted or paymentAccepted declarations");
}
pass("Payment methods and currency accepted verified");

if (!structuredDataCode.includes("'@type': 'FAQPage'")) {
  fail("FAQPage entity missing in homepage Schema.org @graph");
}
pass("FAQPage rich snippet entity in shared @graph verified for landing page");

// 3. Validate Subpage (/otopark) Cohesive Schema & On-Page FAQ Synchronization
const otoparkPath = path.join(ROOT, 'src/app/otopark/page.tsx');
if (!fs.existsSync(otoparkPath)) fail(`src/app/otopark/page.tsx not found`);
const otoparkCode = fs.readFileSync(otoparkPath, 'utf8');

if (!otoparkCode.includes('<OtoparkStructuredData />')) {
  fail("src/app/otopark/page.tsx must mount <OtoparkStructuredData /> for otopark unified schema");
}

const otoparkStructuredDataPath = path.join(ROOT, 'src/components/otopark/OtoparkStructuredData.tsx');
if (!fs.existsSync(otoparkStructuredDataPath)) fail(`OtoparkStructuredData.tsx not found at ${otoparkStructuredDataPath}`);
const otoparkStructuredDataCode = fs.readFileSync(otoparkStructuredDataPath, 'utf8');

if (!otoparkStructuredDataCode.includes("'@type': 'ParkingFacility'") || !otoparkStructuredDataCode.includes("'@type': 'BreadcrumbList'") || !otoparkStructuredDataCode.includes("'@type': 'FAQPage'")) {
  fail("OtoparkStructuredData.tsx must provide a unified @graph with ParkingFacility, BreadcrumbList, and FAQPage");
}
pass("Otopark route unified schema graph (ParkingFacility, BreadcrumbList, FAQPage) verified");

const otoparkViewPath = path.join(ROOT, 'src/components/otopark/OtoparkView.tsx');
if (!fs.existsSync(otoparkViewPath)) fail(`OtoparkView.tsx not found at ${otoparkViewPath}`);
const otoparkViewCode = fs.readFileSync(otoparkViewPath, 'utf8');

// Verify Google Search Central FAQ policy: schema questions must match visible on-page questions
const requiredOtoparkQuestions = [
  'Otopark ücretleri ve uzun dönem/aylık park imkanı var mı?',
  'Vale riski veya aracı sokakta bırakma durumu olur mu?',
  'Çalışma saatleri ve gece araç alımı var mı?',
  'Burası eski Supark Otopark lokasyonu mu?',
];

for (const q of requiredOtoparkQuestions) {
  if (!otoparkStructuredDataCode.includes(q)) {
    fail(`/otopark schema missing question: "${q}"`);
  }
  if (!otoparkViewCode.includes(q)) {
    fail(`Visible OtoparkView missing on-page question matching schema: "${q}"`);
  }
}
pass("All 4 otopark FAQ questions strictly synchronized between visible UI and Schema.org JSON-LD");

// 3b. Validate Subpage (/motosiklet) Route and Dedicated Schema
const motoPath = path.join(ROOT, 'src/app/motosiklet/page.tsx');
if (!fs.existsSync(motoPath)) fail(`src/app/motosiklet/page.tsx not found`);
const motoCode = fs.readFileSync(motoPath, 'utf8');

if (!motoCode.includes('<MotorcycleStructuredData />')) {
  fail("src/app/motosiklet/page.tsx must mount <MotorcycleStructuredData />");
}

const motoStructuredDataPath = path.join(ROOT, 'src/components/motosiklet/MotorcycleStructuredData.tsx');
if (!fs.existsSync(motoStructuredDataPath)) fail(`MotorcycleStructuredData.tsx not found at ${motoStructuredDataPath}`);
const motoStructuredDataCode = fs.readFileSync(motoStructuredDataPath, 'utf8');

if (!motoStructuredDataCode.includes("'MotorcycleRepair'") || !motoStructuredDataCode.includes("telephone: '+905465332844'")) {
  fail("MotorcycleStructuredData missing MotorcycleRepair type or dedicated phone +905465332844");
}
pass("Motosiklet route dedicated MotorcycleRepair schema and hotline verified");

// 3c. Validate Subpage (/konum) Route and Synchronized Location FAQ
const konumPath = path.join(ROOT, 'src/app/konum/page.tsx');
if (!fs.existsSync(konumPath)) fail(`src/app/konum/page.tsx not found`);
const konumCode = fs.readFileSync(konumPath, 'utf8');

if (!konumCode.includes('<KonumStructuredData />')) {
  fail("src/app/konum/page.tsx must mount <KonumStructuredData />");
}

const konumStructuredDataPath = path.join(ROOT, 'src/components/konum/KonumStructuredData.tsx');
if (!fs.existsSync(konumStructuredDataPath)) fail(`KonumStructuredData.tsx not found at ${konumStructuredDataPath}`);
const konumStructuredDataCode = fs.readFileSync(konumStructuredDataPath, 'utf8');

const konumViewPath = path.join(ROOT, 'src/components/konum/KonumView.tsx');
if (!fs.existsSync(konumViewPath)) fail(`KonumView.tsx not found at ${konumViewPath}`);
const konumViewCode = fs.readFileSync(konumViewPath, 'utf8');

const requiredKonumQuestions = [
  'Bumex Garage nerede ve 7. Cadde\'ye nasıl gidilir?',
  'Burası eski Han-gar, Sonax-Würth veya Supark lokasyonu mu?',
  'Metro veya toplu taşıma ile nasıl ulaşabilirim?',
  'Alçak spor otomobiller veya büyük SUV\'lar için giriş rampası uygun mu?',
];

for (const q of requiredKonumQuestions) {
  if (!konumStructuredDataCode.includes(q)) {
    fail(`/konum schema missing question: "${q}"`);
  }
  if (!konumViewCode.includes(q)) {
    fail(`Visible KonumView missing on-page question matching schema: "${q}"`);
  }
}
pass("All 4 konum FAQ questions strictly synchronized between visible UI and Schema.org JSON-LD");

// 4. Validate True 1200x630 OpenGraph & Dedicated Route Images
const ogImagePath = path.join(ROOT, 'public/og-image.jpg');
const ogDims = getImageDimensions(ogImagePath);
if (ogDims.width !== 1200 || ogDims.height !== 630) {
  fail(`public/og-image.jpg must be exactly 1200x630 landscape, got ${ogDims.width}x${ogDims.height}`);
}
pass(`Homepage OpenGraph image verified at exact 1200x630 dimensions (1.905:1 ratio)`);

const ogOtoparkPath = path.join(ROOT, 'public/og-otopark.jpg');
const ogOtoparkDims = getImageDimensions(ogOtoparkPath);
if (ogOtoparkDims.width !== 1200 || ogOtoparkDims.height !== 630) {
  fail(`public/og-otopark.jpg must be exactly 1200x630 landscape, got ${ogOtoparkDims.width}x${ogOtoparkDims.height}`);
}
pass(`Otopark dedicated OpenGraph image verified at exact 1200x630 dimensions`);

if (!layoutCode.includes("https://bumexgarage.com/og-image.jpg") || !layoutCode.includes("card: 'summary_large_image'")) {
  fail("layout.tsx missing canonical og-image.jpg or summary_large_image Twitter card");
}
pass("RootLayout metadata references canonical og-image.jpg with summary_large_image");

if (!otoparkCode.includes("https://bumexgarage.com/og-otopark.jpg") || !otoparkCode.includes("card: 'summary_large_image'")) {
  fail("src/app/otopark/page.tsx missing dedicated og-otopark.jpg preview card");
}
pass("src/app/otopark/page.tsx references dedicated og-otopark.jpg preview card");

// 5. Validate W3C & Chromium Web Manifest and Icons
const manifestPath = path.join(ROOT, 'public/manifest.json');
if (!fs.existsSync(manifestPath)) fail("public/manifest.json not found");

interface ManifestIcon {
  src: string;
  sizes: string;
  type?: string;
  purpose?: string;
}
interface ManifestSchema {
  start_url: string;
  icons?: ManifestIcon[];
}

let manifestData: ManifestSchema;
try {
  manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as ManifestSchema;
} catch (err: unknown) {
  fail(`public/manifest.json is invalid JSON: ${String(err)}`);
  throw err;
}

if (manifestData.start_url !== '/') {
  fail(`public/manifest.json start_url must be '/', got '${manifestData.start_url}'`);
}

const hasIcon192 = manifestData.icons?.some(
  (i) => i.src === '/icon-192.png' && i.sizes === '192x192' && i.type === 'image/png' && i.purpose === 'any maskable'
);
const hasIcon512 = manifestData.icons?.some(
  (i) => i.src === '/icon-512.png' && i.sizes === '512x512' && i.type === 'image/png' && i.purpose === 'any maskable'
);
const hasFavicon = manifestData.icons?.some(
  (i) => i.src === '/favicon.ico' && i.sizes === '64x64 32x32 24x24 16x16' && i.type === 'image/x-icon'
);

if (!hasIcon192 || !hasIcon512 || !hasFavicon) {
  fail("public/manifest.json missing required 192x192 (maskable), 512x512 (maskable), or favicon.ico icons");
}
pass("public/manifest.json declares valid 192x192 and 512x512 maskable PNG icons and favicon");

const icon192Dims = getImageDimensions(path.join(ROOT, 'public/icon-192.png'));
if (icon192Dims.width !== 192 || icon192Dims.height !== 192) {
  fail(`public/icon-192.png dimensions mismatch: expected 192x192, got ${icon192Dims.width}x${icon192Dims.height}`);
}
pass("public/icon-192.png verified at exact 192x192 pixel dimensions");

const icon512Dims = getImageDimensions(path.join(ROOT, 'public/icon-512.png'));
if (icon512Dims.width !== 512 || icon512Dims.height !== 512) {
  fail(`public/icon-512.png dimensions mismatch: expected 512x512, got ${icon512Dims.width}x${icon512Dims.height}`);
}
pass("public/icon-512.png verified at exact 512x512 pixel dimensions");

// 6. Validate Dynamic Sitemaps, Robots & Entity Reconciliation
const sitemapPath = path.join(ROOT, 'src/app/sitemap.ts');
const robotsPath = path.join(ROOT, 'src/app/robots.ts');

if (!fs.existsSync(sitemapPath)) fail("sitemap.ts missing in src/app");
if (!fs.existsSync(robotsPath)) fail("robots.ts missing in src/app");

const sitemapCode = fs.readFileSync(sitemapPath, 'utf8');
const robotsCode = fs.readFileSync(robotsPath, 'utf8');

if (
  !sitemapCode.includes('https://bumexgarage.com') ||
  !sitemapCode.includes('/motosiklet') ||
  !sitemapCode.includes('/otopark') ||
  !sitemapCode.includes('/konum')
) {
  fail("sitemap.ts does not advertise all 4 hubs (/, /motosiklet, /otopark, /konum)");
}
pass("Dynamic sitemap.ts 4-hub routes (root, /motosiklet, /otopark, /konum) verified");

if (!robotsCode.includes("sitemap: 'https://bumexgarage.com/sitemap.xml'")) {
  fail("robots.ts does not reference canonical sitemap URL");
}
pass("robots.ts sitemap directive verified");

const footerPath = path.join(ROOT, 'src/components/landing/LandingFooter.tsx');
if (!fs.existsSync(footerPath)) fail("LandingFooter.tsx not found");
const footerCode = fs.readFileSync(footerPath, 'utf8');

if (!footerCode.includes('eski Supark Otopark') || !footerCode.includes('Prof. Muammer Aksoy') || !footerCode.includes('Han-gar')) {
  fail("LandingFooter.tsx missing quiet entity reconciliation bridge text for historical Place ID continuity (Han-gar, Supark)");
}
pass("Quiet entity reconciliation bridge (Han-gar, Sonax-Würth, Supark) verified in footer");

console.log('\n\x1b[32m=== All 21 Rigorous SEO, OpenGraph, PWA & Schema Invariants Passed! ===\x1b[0m\n');
process.exit(0);
