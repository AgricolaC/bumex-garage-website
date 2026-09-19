import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bumexgarage.com'),
  title: 'Bumex Garage — Bahçelievler Premium Detailing, Motosiklet Bakım & Güvenli Otopark | Ankara',
  description:
    'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron seviyesinde boya düzeltme, 9H nano seramik zırh, motosiklet yıkama & detailing, dielektrik kuru buharlı motor temizliği ve 24/7 CCTV izlemeli güvenli otopark.',
  keywords: [
    'bumex garage',
    'bahçelievler oto yıkama',
    'bahçelievler oto kuaför',
    'ankara oto kuaför',
    'bahçelievler otopark',
    '7 cadde otopark',
    'ankara otopark',
    'motosiklet yıkama ankara',
    'motosiklet detailing',
    'ankara pasta cila',
    'bahçelievler pasta cila',
    'seramik kaplama ankara',
    'bahçelievler seramik kaplama',
    '9H nano seramik',
    'dielektrik buharlı motor temizliği',
    'fırçasız oto yıkama',
    'bahçelievler fırçasız oto yıkama',
    'çankaya boya koruma',
    'emek oto yıkama',
    'beşevler otopark',
    'park and wash ankara',
  ],
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bumex Garage — Bahçelievler Premium Detailing, Motosiklet Bakım & Güvenli Otopark',
    description:
      'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron boya restorasyonu, 9H nano seramik, motosiklet detailing, dielektrik motor koruma ve 24/7 CCTV izlemeli güvenli otopark.',
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
      'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron boya restorasyonu, 9H nano seramik, motosiklet detailing, dielektrik motor koruma ve 24/7 CCTV izlemeli güvenli otopark.',
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
