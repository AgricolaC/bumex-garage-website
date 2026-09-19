import type { Metadata } from 'next';
import { LandingView } from '@/components/landing/LandingView';
import { MotorcycleStructuredData } from '@/components/motosiklet/MotorcycleStructuredData';

export const metadata: Metadata = {
  title: 'Motosiklet Detailing & Bakım Atölyesi | Bumex Garage',
  description:
    'Ankara Bahçelievler 7. Cadde: Hassas motosiklet yıkama, grenaj mikron pasta cila, 9H nano seramik kaplama, varyatör & zincir bakımı, mekanik servis ve transfer desteği.',
  keywords: [
    'ankara motosiklet detailing',
    'bahçelievler motosiklet yıkama',
    'motosiklet seramik kaplama ankara',
    'motosiklet grenaj pasta cila',
    'motosiklet mekanik bakım ankara',
    'ankara scooter varyatör temizliği',
    'motosiklet zincir temizleme ankara',
    'motosiklet kışlama bakımı bahçelievler',
    'bumex garage motosiklet',
  ],
  alternates: {
    canonical: '/motosiklet',
  },
  openGraph: {
    title: 'Bumex Garage — Bahçelievler Motosiklet Detailing & Mekanik Bakım',
    description:
      'Ankara Bahçelievler 7. Cadde: Hassas motosiklet yıkama, grenaj pasta cila, 9H nano seramik zırh, varyatör temizliği ve mekanik servis desteği.',
    url: 'https://bumexgarage.com/motosiklet',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage Motosiklet Detailing ve Bakım Atölyesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bumex Garage — Bahçelievler Motosiklet Detailing & Mekanik Bakım',
    description:
      'Ankara Bahçelievler 7. Cadde: Hassas motosiklet yıkama, grenaj pasta cila, 9H nano seramik, varyatör ve mekanik servis.',
    images: ['https://bumexgarage.com/og-image.jpg'],
  },
};

export default function MotosikletPage() {
  return (
    <>
      <MotorcycleStructuredData />
      <LandingView initialSegment="motosiklet" />
    </>
  );
}
