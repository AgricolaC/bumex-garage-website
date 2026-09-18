import type { Metadata, Viewport } from 'next';
import { StructuredData } from '@/components/landing/StructuredData';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bumexgarage.com'),
  title: 'Bumex Garage — Bahçelievler Premium Detailing, Motosiklet Bakım & Kapalı Otopark | Ankara',
  description:
    'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron seviyesinde boya düzeltme, 9H nano seramik zırh, motosiklet yıkama & detailing, dielektrik kuru buharlı motor temizliği ve 24/7 CCTV izlemeli kapalı otopark.',
  keywords: [
    'bumex garage',
    'bahçelievler oto yıkama',
    'bahçelievler kapalı otopark',
    '7 cadde otopark',
    'ankara kapalı otopark',
    'motosiklet yıkama ankara',
    'motosiklet detailing',
    'ankara pasta cila',
    'seramik kaplama ankara',
    '9H nano seramik',
    'dielektrik buharlı motor temizliği',
    'fırçasız oto yıkama',
    'çankaya boya koruma',
    'park and wash ankara',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bumex Garage — Bahçelievler Premium Detailing, Motosiklet Bakım & Kapalı Otopark',
    description:
      'Ankara Bahçelievler 7. Cadde\'ye 350m: Mikron boya restorasyonu, 9H nano seramik, motosiklet detailing, dielektrik motor koruma ve güvenli kapalı otopark.',
    url: 'https://bumexgarage.com',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
  },
  other: {
    'geo.region': 'TR-06',
    'geo.placename': 'Ankara',
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
    <html lang="tr" suppressHydrationWarning>
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
