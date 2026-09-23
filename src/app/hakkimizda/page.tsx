import type { Metadata } from 'next';
import Script from 'next/script';
import { HakkimizdaView } from '@/components/hakkimizda/HakkimizdaView';

export const metadata: Metadata = {
  title: 'Hakkımızda — Bahçelievler Oto & Motosiklet Tamirhanesi | Bumex Garage',
  description:
    "Ankara Bahçelievler 7. Cadde'ye yürüme mesafesinde: Otomobil ve motosikletler için güvenilir, şeffaf çalışan bir aile tamirhanesiyiz. Kim olduğumuzu ve nasıl çalıştığımızı öğrenin.",
  keywords: [
    'bumex garage hakkımızda',
    'bumex garage kimdir',
    'bahçelievler oto ve motosiklet tamirhanesi',
    'ankara oto ve motosiklet tamirhanesi',
    'bahçelievler güvenilir oto bakım tamirhanesi',
    'ankara güvenilir oto bakım tamirhanesi',
    'bahçelievler detailing ve bakım servisi',
    'eski han-gar bahçelievler',
  ],
  alternates: {
    canonical: '/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda — Bahçelievler Oto & Motosiklet Tamirhanesi | Bumex Garage',
    description:
      "Ankara Bahçelievler 7. Cadde'ye yürüme mesafesinde: Otomobil ve motosikletler için güvenilir, şeffaf çalışan bir aile tamirhanesiyiz. Kim olduğumuzu ve nasıl çalıştığımızı öğrenin.",
    url: 'https://bumexgarage.com/hakkimizda',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage Bahçelievler Oto ve Motosiklet Bakım Tamirhanesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hakkımızda — Bahçelievler Oto & Motosiklet Tamirhanesi | Bumex Garage',
    description:
      "Ankara Bahçelievler 7. Cadde'ye yürüme mesafesinde: Otomobil ve motosikletler için güvenilir, şeffaf çalışan bir aile tamirhanesiyiz. Kim olduğumuzu ve nasıl çalıştığımızı öğrenin.",
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
        name: 'Hakkımızda — Bahçelievler Oto & Motosiklet Tamirhanesi | Bumex Garage',
        description:
          "Ankara Bahçelievler 7. Cadde'ye yürüme mesafesinde: Otomobil ve motosikletler için güvenilir, şeffaf çalışan bir aile tamirhanesiyiz. Kim olduğumuzu ve nasıl çalıştığımızı öğrenin.",
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
