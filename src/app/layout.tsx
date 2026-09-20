import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { WorkshopSegmentProvider } from '@/hooks/useWorkshopSegment';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bumexgarage.com'),
  title: 'Bumex Garage — Bahçelievler Detailing & Otopark | Ankara',
  description:
    'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron boya düzeltme, 9H seramik kaplama, motosiklet detailing, şeffaf fiyat listesi ve 7/24 güvenli otopark.',
  keywords: [
    'bumex garage',
    'bahçelievler oto yıkama',
    'ankara oto yıkama',
    'bahçelievler oto kuaför',
    'ankara oto kuaför',
    'bahçelievler pasta cila',
    'ankara pasta cila',
    'bahçelievler seramik kaplama',
    'seramik kaplama ankara',
    'bahçelievler oto yıkama fiyatları',
    'ankara oto yıkama fiyatları',
    'bahçelievler detailing fiyatları',
    'ankara detailing fiyatları',
    '9H nano seramik',
    'dielektrik buharlı motor temizliği',
    'fırçasız oto yıkama',
    'bahçelievler fırçasız oto yıkama',
    'ankara fırçasız oto yıkama',
    'motosiklet yıkama ankara',
    'çankaya boya koruma',
    'emek oto yıkama',
    'beşevler otopark',
  ],
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bumex Garage — Bahçelievler Premium Detailing, Motosiklet Bakım & Güvenli Otopark',
    description:
      'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron boya restorasyonu, 9H nano seramik, motosiklet detailing, şeffaf fiyat listesi ve 7/24 CCTV izlemeli güvenli otopark.',
    url: 'https://bumexgarage.com',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage Bahçelievler Detailing & Otopark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bumex Garage — Bahçelievler Premium Detailing, Motosiklet Bakım & Güvenli Otopark',
    description:
      'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron boya restorasyonu, 9H nano seramik, motosiklet detailing, şeffaf fiyat listesi ve 7/24 CCTV izlemeli güvenli otopark.',
    images: ['https://bumexgarage.com/og-image.jpg'],
  },
  other: {
    'geo.region': 'TR-06',
    'geo.placename': 'Bahçelievler, Çankaya, Ankara',
    'geo.position': '39.9277018;32.8246501',
    ICBM: '39.9277018, 32.8246501',
  },
};

export const viewport: Viewport = {
  themeColor: '#1B1D20',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className="bg-[#1B1D20] text-[#F4F4F5]">
        <WorkshopSegmentProvider>
          {children}
        </WorkshopSegmentProvider>
        <Analytics />
      </body>
    </html>
  );
}
