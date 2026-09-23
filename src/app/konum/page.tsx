import type { Metadata } from 'next';
import { KonumView } from '@/components/konum/KonumView';
import { KonumStructuredData } from '@/components/konum/KonumStructuredData';

export const metadata: Metadata = {
  title: 'Konum, Ulaşım & Yol Tarifi | Bumex Garage Bahçelievler',
  description:
    'Ankara Bahçelievler 7. Cadde\'ye yürüme mesafesinde: Prof. Muammer Aksoy Cad. No: 48 (eski Han-gar, Sonax-Würth ve Supark lokasyonu) açık adres, metro yürüme mesafesi ve yol tarifi.',
  keywords: [
    'bumex garage konum',
    'bumex garage yol tarifi',
    'bahçelievler oto yıkama nerede',
    'ankara oto yıkama nerede',
    '7 cadde otopark nerede',
    'ankara otopark nerede',
    'prof muammer aksoy caddesi no 48',
    'eski han-gar bahçelievler',
    'eski sonax würth bahçelievler',
    'eski supark otopark',
  ],
  alternates: {
    canonical: '/konum',
  },
  openGraph: {
    title: 'Bumex Garage — Konum, Ulaşım & Yol Tarifi | Bahçelievler Ankara',
    description:
      'Ankara Bahçelievler 7. Cadde\'ye yürüme mesafesinde: Prof. Muammer Aksoy Cad. No: 48 açık adres, navigasyon ve ulaşım rehberi.',
    url: 'https://bumexgarage.com/konum',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage Bahçelievler Konum ve Yol Tarifi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bumex Garage — Konum, Ulaşım & Yol Tarifi | Bahçelievler Ankara',
    description:
      'Ankara Bahçelievler 7. Cadde\'ye yürüme mesafesinde: Prof. Muammer Aksoy Cad. No: 48 açık adres, navigasyon ve ulaşım rehberi.',
    images: ['https://bumexgarage.com/og-image.jpg'],
  },
};

export default function KonumPage() {
  return (
    <>
      <KonumStructuredData />
      <KonumView />
    </>
  );
}
