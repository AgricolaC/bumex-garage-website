import type { Metadata } from 'next';
import Script from 'next/script';
import { GaleriView } from '@/components/galeri/GaleriView';

export const metadata: Metadata = {
  title: 'Canlı Detailing & Restorasyon Galerisi | Bumex Garage',
  description:
    'Ankara Bahçelievler 7. Cadde: PPF kaplama, 9H nano seramik, mikron boya restorasyonu ve motosiklet detailing dönüşümlerinin interaktif öncesi-sonrası karşılaştırmaları.',
  keywords: [
    'bumex garage galeri',
    'araç öncesi sonrası fotoğrafları',
    'pasta cila öncesi sonrası ankara',
    'seramik kaplama galeri',
    'motosiklet detailing galeri',
    'bahçelievler pasta cila sonuçları',
  ],
  alternates: {
    canonical: '/galeri',
  },
  openGraph: {
    title: 'Canlı Detailing & Restorasyon Galerisi | Bumex Garage Bahçelievler Ankara',
    description:
      'Bahçelievler stüdyomuzda icra edilen gerçek araç dönüşümleri: mikron vernik düzeltme, seramik kaplama ve motosiklet detailing karşılaştırmaları.',
    url: 'https://bumexgarage.com/galeri',
    siteName: 'Bumex Garage',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://bumexgarage.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bumex Garage Bahçelievler Canlı Detailing ve Restorasyon Galerisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canlı Detailing & Restorasyon Galerisi | Bumex Garage Bahçelievler Ankara',
    description:
      'Bahçelievler stüdyomuzda icra edilen gerçek araç dönüşümleri: mikron vernik düzeltme, seramik kaplama ve motosiklet detailing karşılaştırmaları.',
    images: ['https://bumexgarage.com/og-image.jpg'],
  },
};

export default function GaleriPage() {
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
            name: 'Canlı Restorasyon Galerisi',
            item: 'https://bumexgarage.com/galeri',
          },
        ],
      },
      {
        '@type': 'ImageGallery',
        '@id': 'https://bumexgarage.com/galeri#gallery',
        name: 'Bumex Garage Canlı Detailing & Restorasyon Galerisi',
        description:
          'Bumex Garage Bahçelievler atölyesinde uygulanan mikron boya düzeltme, seramik kaplama, PPF ve motosiklet restorasyonlarının karşılaştırma görselleri.',
        url: 'https://bumexgarage.com/galeri',
      },
    ],
  };

  return (
    <>
      <Script
        id="galeri-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <GaleriView />
    </>
  );
}
