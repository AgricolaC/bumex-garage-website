import React from 'react';

export function OtoparkStructuredData() {
  const otoparkStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ParkingFacility',
        '@id': 'https://bumexgarage.com/otopark#facility',
        name: 'Bumex Garage Bahçelievler 7. Cadde Kapalı Otoparkı',
        alternateName: ['Bumex Kapalı Otopark', 'Supark Otopark (Eski Lokasyon)'],
        url: 'https://bumexgarage.com/otopark',
        telephone: '+905524703610',
        priceRange: '₺₺',
        image: 'https://bumexgarage.com/og-otopark.jpg',
        description:
          "Bahçelievler 7. Cadde'ye 350m yürüme mesafesinde 24/7 CCTV gözetimli, dolu/hava korumalı ve spor araç rampalı kapalı otopark tesisi.",
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
        parentOrganization: {
          '@type': 'AutoRepair',
          '@id': 'https://bumexgarage.com/#business',
          name: 'Bumex Garage',
          url: 'https://bumexgarage.com',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bumexgarage.com/otopark#breadcrumb',
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
            name: '7. Cadde Kapalı Otoparkı',
            item: 'https://bumexgarage.com/otopark',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bumexgarage.com/otopark#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Otopark ücretleri ve uzun dönem/aylık park imkanı var mı?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Otoparkımız günlük, saatlik ve dönemsel kapasite durumuna göre hizmet vermektedir. Güncel peron müsaitliği ve park seçenekleri için lütfen doğrudan WhatsApp üzerinden iletişime geçiniz.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vale riski veya aracı sokakta bırakma durumu olur mu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kesinlikle hayır. Aracınız üçüncü şahıslara veya sokak aralarına emanet edilmez. Doğrudan Prof. Muammer Aksoy Cad. No: 48 adresindeki resmi kapalı otopark tesisimize alınır ve kameralı güvenli peronda kalır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Çalışma saatleri ve gece araç alımı var mı?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Garajımız haftanın 7 günü 10:00 – 22:00 saatleri arasında kesintisiz açık olup personel eşliğinde giriş-çıkış yapılmaktadır. Özel teslimat veya geç çıkış talepleriniz için gün içinde görevli ekibimize bilgi vermeniz yeterlidir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Burası eski Supark Otopark lokasyonu mu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Yıllardır Bahçelievler sakinlerine Supark Otopark ve Yıkama olarak hizmet veren tesisimiz, güncellenen premium ekipmanları ve Bumex Garage güvencesiyle aynı adreste (Prof. Muammer Aksoy Cad. No: 48) hizmetine devam etmektedir.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(otoparkStructuredData) }}
    />
  );
}
