import React from 'react';

export function MotorcycleStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MotorcycleRepair', 'AutoRepair'],
        '@id': 'https://bumexgarage.com/motosiklet#business',
        name: 'Bumex Garage — Bahçelievler Motosiklet Detailing, Bakım & Servis',
        alternateName: [
          'Bumex Motosiklet Detailing',
          'Bumex Garage Motosiklet Servisi',
          'Bumex Moto Care Ankara',
        ],
        url: 'https://bumexgarage.com/motosiklet',
        telephone: '+905465332844',
        priceRange: '₺₺',
        currenciesAccepted: 'TRY',
        paymentAccepted: 'Nakit, Kredi Kartı, Havale/EFT',
        image: 'https://bumexgarage.com/og-image.jpg',
        description:
          'Ankara Bahçelievler\'de hassas motosiklet detailing, basınçsız buharlı yıkama, grenaj mikron pasta cila ve 9H seramik kaplama, zincir/jant arındırma, periyodik mekanik bakım ve randevulu transfer altyapısı.',
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
          { '@type': 'AdministrativeArea', name: 'Çankaya' },
          { '@type': 'AdministrativeArea', name: 'Balgat' },
          { '@type': 'AdministrativeArea', name: 'Ümitköy' },
          { '@type': 'AdministrativeArea', name: 'Çayyolu' },
          { '@type': 'City', name: 'Ankara' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Motosiklet Özel Servis & Detailing Hizmetleri',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Motosiklet Hassas Yıkama & Zincir Arındırma',
                description: 'Tazyiksiz buhar, pH nötr şampuan, zincir ve jant balata katranı arındırma.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Grenaj Mikron Pasta Cila & 9H Seramik Kaplama',
                description: 'Plastik grenaj hare giderme, kask vizör koruma ve 9H nano seramik kalkan.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Periyodik Mekanik Bakım & Onarım',
                description: 'Yağ, yağ filtresi, buji, varyatör bagaları ve fren balata değişimi.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Motosiklet Taşıma ve Transfer Desteği (Çok Yakında)',
                description: 'Özel ön teker sabitleme beşiği ve askı aparatlı kapalı transfer altyapısı.',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bumexgarage.com/motosiklet#breadcrumb',
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
            name: 'Motosiklet Detailing & Servis',
            item: 'https://bumexgarage.com/motosiklet',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bumexgarage.com/motosiklet#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Motosiklet yıkamasında tazyikli su yerine ne kullanıyorsunuz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Motosikletlerin TFT göstergeleri, gidon düğmeleri, buji yuvaları ve zincir o-ringleri tazyikli sudan zarar görür. Bumex Garage bünyesinde düşük basınçlı kuru buhar, dielektrik koruyucular ve pH nötr aktif köpükler ile temas edilmeden temizlik sağlanır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Motosiklet grenajlarına pasta cila ve seramik kaplama yapılır mı?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Plastik grenajların vernik kalınlığı otomobillere göre çok daha incedir. Özel mikro polisaj makineleri ve aşındırıcılığı düşük süngerlerle hareler giderilir ve 9H nano seramik kalkan uygulanarak UV solmalarına karşı 24 aya kadar koruma sağlanır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Motosiklet mekanik periyodik bakımında hangi işlemler yapılıyor?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Motor yağı ve filtre değişimi, scooter varyatör ve kayış temizliği, fren hidroliği kontrolü, zincir gergi ve yağlama ayarı, buji kontrolleri uzman teknisyenlerimiz tarafından titizlikle tamamlanır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Motosiklet çekici veya transfer hizmetiniz var mı?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Motosikletinizi atölyeye getiremediğiniz durumlar için özel ön tekerlek kilitleme beşikli kapalı taşıma altyapımız çok yakında tam aktif olarak devreye girecektir. Güncel müsaitlik ve randevulu transfer bilgisi için 0546 533 28 44 motosiklet hattımızdan bilgi alabilirsiniz.',
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
