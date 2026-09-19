import type { Metadata } from 'next';
import Script from 'next/script';
import { HizmetlerView } from '@/components/hizmetler/HizmetlerView';

export const metadata: Metadata = {
  title: 'Tüm Detailing & Bakım Hizmetleri | Bumex Garage',
  description:
    'Ankara Bahçelievler 7. Cadde: PPF kaplama, 9H nano seramik, mikron pasta cila, buharlı motor temizliği, ses izolasyonu ve motosiklet detailing hizmet kartelası.',
  keywords: [
    'bumex garage hizmetler',
    'ankara detailing hizmetleri',
    'bahçelievler pasta cila listesi',
    'seramik kaplama ankara fiyatları',
    'ppf kaplama bahçelievler',
    'motosiklet bakım hizmetleri ankara',
    'araç ses yalıtımı çankaya',
  ],
  alternates: {
    canonical: '/hizmetler',
  },
  openGraph: {
    title: 'Otomobil & Motosiklet Bakım Hizmetleri Kartelası | Bumex Garage Bahçelievler',
    description:
      'Bahçelievler stüdyomuzda icra edilen 25+ atölye operasyonu: PPF kaplama, 9H seramik, mikron boya restorasyonu ve motosiklet mekanik bakım.',
    url: 'https://bumexgarage.com/hizmetler',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage Bahçelievler Tüm Atölye Hizmetleri Kartelası',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otomobil & Motosiklet Bakım Hizmetleri Kartelası | Bumex Garage Bahçelievler',
    description:
      'Bahçelievler stüdyomuzda icra edilen 25+ atölye operasyonu: PPF kaplama, 9H seramik, mikron boya restorasyonu ve motosiklet mekanik bakım.',
    images: ['https://bumexgarage.com/og-image.jpg'],
  },
};

export default function HizmetlerPage() {
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
            name: 'Hizmetlerimiz',
            item: 'https://bumexgarage.com/hizmetler',
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Bumex Garage Atölye Hizmet Kartelası',
        description:
          'Bumex Garage Bahçelievler stüdyosunda sunulan profesyonel araç bakım, koruma ve restorasyon hizmetleri.',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'PPF Kaplama (Boya Koruma Filmi)',
            url: 'https://bumexgarage.com/hizmetler/ppf-kaplama',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '9H Nano Seramik Kaplama',
            url: 'https://bumexgarage.com/hizmetler/seramik-kaplama',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Pasta Cila ve Mikron Boya Restorasyonu',
            url: 'https://bumexgarage.com/hizmetler/pasta-cila',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Buharlı Motor Temizliği & Koruma',
            url: 'https://bumexgarage.com/hizmetler/buharli-motor-temizligi',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Detaylı İç Hijyen & Koltuk Yıkama',
            url: 'https://bumexgarage.com/hizmetler/detayli-ic-hijyen',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="hizmetler-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <HizmetlerView />
    </>
  );
}
