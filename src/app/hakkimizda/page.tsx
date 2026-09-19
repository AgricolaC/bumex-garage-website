import type { Metadata } from 'next';
import Script from 'next/script';
import { HakkimizdaView } from '@/components/hakkimizda/HakkimizdaView';

export const metadata: Metadata = {
  title: 'Hakkımızda & Atölye Manifestosu | Bumex Garage',
  description:
    "Ankara Bahçelievler 7. Cadde'ye 350m: Verniği eritmeden mikron boya restorasyonu, 140°C kuru buhar, 9H nano seramik ve PPF kaplama ile profesyonel araç bakım felsefemiz.",
  keywords: [
    'bumex garage hakkımızda',
    'bahçelievler detailing stüdyosu',
    'mikron boya restorasyonu ankara',
    'güvenilir pasta cila ankara',
    'eski han-gar bahçelievler',
    'bumex garage manifestosu',
  ],
  alternates: {
    canonical: '/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda — Atölye Manifestosu & Deneyim | Bumex Garage Bahçelievler',
    description:
      'Bahçelievler 7. Cadde stüdyomuzda dijital mikron ölçümü, kuru buhar ve 9H nano seramik ile araçları fabrika kondisyonuna kavuşturan detailing felsefemiz.',
    url: 'https://bumexgarage.com/hakkimizda',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage Bahçelievler Hakkımızda ve Atölye Manifestosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hakkımızda — Atölye Manifestosu & Deneyim | Bumex Garage Bahçelievler',
    description:
      'Bahçelievler 7. Cadde stüdyomuzda dijital mikron ölçümü, kuru buhar ve 9H nano seramik ile araçları fabrika kondisyonuna kavuşturan detailing felsefemiz.',
    images: ['https://bumexgarage.com/og-image.jpg'],
  },
};

export default function HakkimizdaPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: 'https://bumexgarage.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Hakkımızda',
            item: 'https://bumexgarage.com/hakkimizda',
          },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': 'https://bumexgarage.com/hakkimizda#about',
        name: 'Bumex Garage Hakkımızda ve Kalite Manifestosu',
        description:
          'Bumex Garage Bahçelievler stüdyosunun mikron seviyesindeki vernik koruma, kuru buhar sterilizasyonu ve bilimsel yüzey hazırlığı felsefesi.',
        url: 'https://bumexgarage.com/hakkimizda',
        mainEntity: {
          '@type': 'AutoRepair',
          name: 'Bumex Garage Bahçelievler',
          telephone: '+905524703610',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Prof. Muammer Aksoy Cad. No: 48, Bahçelievler',
            addressLocality: 'Çankaya',
            addressRegion: 'Ankara',
            addressCountry: 'TR',
          },
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="hakkimizda-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <HakkimizdaView />
    </>
  );
}
