import type { Metadata } from 'next';
import { OtoparkView } from '@/components/otopark/OtoparkView';
import { OtoparkStructuredData } from '@/components/otopark/OtoparkStructuredData';

export const metadata: Metadata = {
  title: 'Bahçelievler Güvenli Otopark & Park & Wash | Bumex Garage',
  description:
    'Ankara Bahçelievler 7. Cadde\'ye 350m: 24/7 CCTV kamera gözetimli, 10:00 – 22:00 açık, geniş manevra alanlı ve alçak araç rampalı güvenli otopark.',
  keywords: [
    'bahçelievler otopark',
    '7 cadde otopark',
    'ankara otopark',
    'bahçelievler güvenli otopark',
    'güvenli otopark ankara',
    'park and wash ankara',
    'güvenli otopark çankaya',
    'motosiklet otoparkı ankara',
    'çankaya otopark',
    'supark otopark bahçelievler',
    'bumex otopark',
  ],
  alternates: {
    canonical: '/otopark',
  },
  openGraph: {
    title: '7. Cadde Güvenli Otoparkı & Park & Wash | Bumex Garage Bahçelievler',
    description:
      '7. Cadde\'ye 350m mesafede 24/7 CCTV gözetimli güvenli otopark. Aracınızı güvenle bırakın, 7. Cadde\'de gezerken yıkanmış ve boya koruması yapılmış teslim alın.',
    url: 'https://bumexgarage.com/otopark',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-otopark.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage 7. Cadde Güvenli Otoparkı Bahçelievler',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7. Cadde Güvenli Otoparkı & Park & Wash | Bumex Garage Bahçelievler',
    description:
      '7. Cadde\'ye 350m mesafede 24/7 CCTV gözetimli güvenli otopark ve Park & Wash hizmeti.',
    images: ['https://bumexgarage.com/og-otopark.jpg'],
  },
};

export default function OtoparkPage() {
  return (
    <>
      <OtoparkStructuredData />
      <OtoparkView />
    </>
  );
}
