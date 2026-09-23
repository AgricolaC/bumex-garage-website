import React from 'react';

export function KonumStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AutoRepair', 'ParkingFacility', 'MotorcycleRepair'],
        '@id': 'https://bumexgarage.com/konum#business',
        name: 'Bumex Garage — Bahçelievler Konum & Ulaşım',
        alternateName: [
          'Bumex Garage',
          'Bumex Detailing Bahçelievler',
          'Bumex Garage Oto Yıkama',
          'Han-gar (Eski Lokasyon)',
          'Sonax Würth Bahçelievler (Eski Lokasyon)',
          'Supark Otopark ve Yıkama (Eski Lokasyon)',
        ],
        url: 'https://bumexgarage.com/konum',
        telephone: '+905524703610',
        priceRange: '₺₺',
        currenciesAccepted: 'TRY',
        paymentAccepted: 'Nakit, Kredi Kartı, Havale/EFT',
        image: 'https://bumexgarage.com/og-image.jpg',
        description:
          'Ankara Bahçelievler Prof. Muammer Aksoy Caddesi No: 48 (eski Sonax-Würth ve Supark lokasyonu). 7. Cadde\'ye yürüme mesafesinde fırçasız yıkama, mikron boya restorasyonu, seramik kaplama ve 24/7 CCTV kameralı güvenli otopark.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Prof. Muammer Aksoy Cad. (2. Cd.) No: 48',
          addressLocality: 'Bahçelievler, Çankaya',
          addressRegion: 'Ankara',
          postalCode: '06490',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 39.9277018,
          longitude: 32.8246501,
        },
        hasMap: 'https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '10:00',
            closes: '22:00',
          },
        ],
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Bahçelievler' },
          { '@type': 'AdministrativeArea', name: 'Emek' },
          { '@type': 'AdministrativeArea', name: 'Beşevler' },
          { '@type': 'AdministrativeArea', name: 'Çankaya' },
          { '@type': 'City', name: 'Ankara' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bumexgarage.com/konum#breadcrumb',
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
            name: 'Konum & Yol Tarifi',
            item: 'https://bumexgarage.com/konum',
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
