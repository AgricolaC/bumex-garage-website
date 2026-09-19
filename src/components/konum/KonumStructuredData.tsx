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
          'Ankara Bahçelievler Prof. Muammer Aksoy Caddesi No: 48 (eski Han-gar, Sonax-Würth ve Supark lokasyonu). 7. Cadde\'ye 350m yürüme mesafesinde fırçasız yıkama, mikron boya restorasyonu, seramik kaplama ve 24/7 CCTV güvenli otopark.',
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
            name: 'Konum & Ulaşım',
            item: 'https://bumexgarage.com/konum',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bumexgarage.com/konum#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Bumex Garage nerede ve 7. Cadde'ye nasıl gidilir?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bumex Garage, Ankara Bahçelievler Prof. Muammer Aksoy Caddesi (eski 2. Cadde) No: 48 adresindedir. Bahçelievler 7. Cadde\'ye (Aşkabat Caddesi) sadece 350 metre (yaklaşık 4 dakika) yürüme mesafesindedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Burası eski Han-gar, Sonax-Würth veya Supark lokasyonu mu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Tesisimiz daha önce Bahçelievler\'de Han-gar, Sonax-Würth ve Supark Otopark ve Yıkama olarak hizmet vermiş olan No: 48 adresindedir. Günümüzde tamamen yenilenmiş kurumsal altyapısı ve modern ekipmanlarıyla Bumex Garage olarak faaliyetine devam etmektedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Metro veya toplu taşıma ile nasıl ulaşabilirim?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ankaray Bahçelievler ve Emek metro istasyonlarına yaklaşık 750 metre (8-10 dakika yürüme), Milli Kütüphane metro istasyonuna ise 1.1 km mesafededir. Prof. Muammer Aksoy Caddesi üzerinden geçen minibüs ve otobüs hatları garajımızın hemen önünden geçmektedir.',
            },
          },
          {
            '@type': 'Question',
            name: "Alçak spor otomobiller veya büyük SUV'lar için giriş rampası uygun mu?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Giriş ve iniş rampalarımızın açıları modifiyeli ve alçak şaseli spor otomobillerin altını veya tampon altı lipini sürtmemesi, geniş SUV\'ların ise rahatça manevra yapabilmesi için hassas standartlarda düzenlenmiştir.',
            },
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
