import type { Metadata } from 'next';
import { OtoparkView } from '@/components/otopark/OtoparkView';
import { OtoparkStructuredData } from '@/components/otopark/OtoparkStructuredData';

export const metadata: Metadata = {
  title: '7. Cadde Kapalı Otoparkı & Park & Wash | Bumex Garage Bahçelievler Ankara',
  description:
    'Ankara Bahçelievler 7. Cadde\'ye 350m: 24/7 CCTV kamera gözetimli, dolu ve hava korumalı, alçak spor araç ve SUV rampalı kapalı otopark ile Park & Wash hizmeti.',
  keywords: [
    'bahçelievler otopark',
    '7 cadde otopark',
    'ankara kapalı otopark',
    'bahçelievler kapalı otopark',
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
    title: '7. Cadde Kapalı Otoparkı & Park & Wash | Bumex Garage Bahçelievler',
    description:
      '7. Cadde\'ye 350m mesafede 24/7 CCTV gözetimli kapalı otopark. Aracınızı güvenle bırakın, 7. Cadde\'de gezerken yıkanmış ve boya koruması yapılmış teslim alın.',
    url: 'https://bumexgarage.com/otopark',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-otopark.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage 7. Cadde Kapalı Otoparkı Bahçelievler',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7. Cadde Kapalı Otoparkı & Park & Wash | Bumex Garage Bahçelievler',
    description:
      '7. Cadde\'ye 350m mesafede 24/7 CCTV gözetimli kapalı otopark ve Park & Wash hizmeti.',
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
