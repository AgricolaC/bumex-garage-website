import React from 'react';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AutoRepair', 'ParkingFacility', 'MotorcycleRepair'],
        '@id': 'https://bumexgarage.com/#business',
        name: 'Bumex Garage Bahçelievler',
        alternateName: [
          'Bumex Garage',
          'Bumex Detailing',
          'Bumex Güvenli Otopark',
          'Han-gar (Eski Lokasyon)',
          'Sonax Würth Bahçelievler (Eski Lokasyon)',
          'Supark Otopark ve Yıkama (Eski Lokasyon)',
        ],
        url: 'https://bumexgarage.com',
        telephone: '+905524703610',
        priceRange: '₺₺',
        currenciesAccepted: 'TRY',
        paymentAccepted: 'Nakit, Kredi Kartı, Havale/EFT',
        image: 'https://bumexgarage.com/og-image.jpg',
        description:
          'Ankara Bahçelievler\'de 7. Cadde\'ye 350m mesafede fırçasız oto yıkama, detaylı araç içi kuaför, mikron boya restorasyonu ve pasta cila, 9H nano seramik kaplama, dielektrik kuru buharlı motor koruma, motosiklet detailing ve 24/7 CCTV izlemeli güvenli otopark tesisi.',
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
          { '@type': 'AdministrativeArea', name: 'Balgat' },
          { '@type': 'AdministrativeArea', name: 'Söğütözü' },
          { '@type': 'City', name: 'Ankara' },
        ],
        sameAs: [
          'https://instagram.com/bumex_garage',
          'https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Bumex Garage 5 Ana Operasyonel Hizmet Alanı',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: '1. Otomobil Yıkama (Auto Wash)',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Fırçasız İç & Dış Detaylı Yıkama',
                    description:
                      'pH-nötr aktif köpük, çift kova metodu ve mikrofiber kurulama havlularıyla çiziksiz yıkama.',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: '2. Otomobil Detailing (Auto Detailing)',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Mikron Boya Restorasyonu & Pasta Cila',
                    description:
                      'Elektronik mikron ölçümüyle vernik kalınlığı analiz edilerek harelenme ve kılcal çiziklerin %95+ giderilmesi.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '9H Nano Seramik Kaplama',
                    description:
                      'Aynasal derinlik, yoğun hidrofobik su iticilik ve 24 aya kadar kimyasal kalkan.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Dielektrik Kuru Buharlı Motor Temizliği',
                    description:
                      'Yüksek ısılı kuru buhar ve iletken olmayan dielektrik koruyucu ile sensör/ECU güvenliği.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'PPF Poliüretan Boya Koruma Filmi',
                    description:
                      'Kendi kendini yenileyen zırh kaplama ile taş vurukları ve sürtmelere karşı koruma.',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: '3. Motosiklet Yıkama (Motorcycle Wash)',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Motosiklet Hassas Fırçasız Yıkama',
                    description:
                      'Motosikletlere özel asitsiz temizleyiciler, jant ve zincir yağ arındırma işlemi.',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: '4. Motosiklet Detailing (Motorcycle Detailing)',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Motosiklet Grenaj & Kask Seramik Kaplama',
                    description:
                      'Grenaj kılcal çizik giderme, kask vizör koruma, 9H nano seramik kalkan ve kışlama koruması.',
                  },
                },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: '5. Güvenli Otopark Tesisleri (Parking Facilities)',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Bahçelievler 7. Cadde Güvenli Otopark & Park & Wash',
                    description:
                      '7. Cadde\'ye 350 metre yürüme mesafesinde, 24/7 CCTV kamera gözetimli, geniş manevra alanlı ve spor araç rampalı güvenli otopark.',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bumexgarage.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Bumex Garage nerede ve 7. Cadde\'ye ne kadar mesafede?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bumex Garage, Ankara Bahçelievler Prof. Muammer Aksoy Caddesi (eski 2. Cadde) No: 48 adresindedir. 7. Cadde\'ye (Aşkabat Caddesi) sadece 350 metre yürüme mesafesinde yer almaktadır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Aracımı otoparka bırakıp yıkama veya detailing yaptırabilir miyim?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. "Park & Wash" konseptimiz sayesinde aracınızı güvenli otoparkımıza bırakıp 7. Cadde\'deki işlerinizi tamamlarken, fırçasız yıkama, iç hijyen veya boya koruma işlemlerini titizlikle tamamlıyoruz.',
            },
          },
          {
            '@type': 'Question',
            name: 'Motosikletler için güvenli park ve özel detailing hizmetiniz var mı?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Bumex Garage bünyesinde motosikletler için ayrılmış güvenli park alanı bulunmakta; zincir arındırma, fırçasız hassas yıkama, grenaj boya restorasyonu ve periyodik bakım hizmetleri sunulmaktadır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Alçak spor otomobiller veya büyük SUV\'lar otoparka sürtmeden girebilir mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Giriş ve iniş rampalarımızın açıları modifiyeli ve alçak şaseli spor otomobillerin altını sürtmemesi, geniş SUV\'ların ise rahatça manevra yapabilmesi için tasarlanmıştır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Bumex Garage eski Supark Otopark ve Yıkama lokasyonunda mı?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Bumex Garage, daha önce Han-gar, Sonax Würth ve Supark Otopark ve Yıkama olarak hizmet vermiş olan Prof. Muammer Aksoy Cad. No: 48 adresinde tamamen yenilenmiş premium stüdyo altyapısıyla hizmet vermektedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kuru buharlı motor temizliği aracın elektronik aksamına veya beynine zarar verir mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hayır. Geleneksel basınçlı su yerine uyguladığımız dielektrik kuru buhar teknolojisi su birikintisi bırakmaz; uygulanan dielektrik yalıtım kimyasalları soket, sensör ve ECU (beyin) ünitelerini neme karşı tam korur.',
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
