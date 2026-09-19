export type WorkshopPillarId = 'otomobil' | 'motosiklet' | 'otopark';

export interface WorkshopPillar {
  id: WorkshopPillarId;
  tabLabel: string;
  shortLabel: string;
  headline: string;
  displayTitle: string;
  subtitle: string;
  iconName: 'Gem' | 'ShieldCheck' | 'Zap' | 'Droplets' | 'Car' | 'Bike';
  badge: string;
  image: string;
  imageAlt: string;
  videoSrc?: string;
  videoPoster?: string;
  telemetryTag: string;
  telemetryMetric: string;
  bottomDescription: string;
  whatsappMessage: string;
  phone: string;
  phoneDisplay: string;
}

export const WORKSHOP_PILLARS: WorkshopPillar[] = [
  {
    id: 'otomobil',
    tabLabel: 'Otomobil Detailing & PPF',
    shortLabel: 'Otomobil',
    headline: 'Aracınızı temizleyin, koruyun, yenileyin.',
    displayTitle: 'ARACINIZI TEMİZLEYİN, KORUYUN, YENİLEYİN',
    subtitle:
      "Bahçelievler'de profesyonel oto yıkama, detailing, PPF kaplama, boya restorasyonu ve güvenli otopark. Aracınızı güvenle teslim edin; işlemler tamamlandığında ilk günkü özeniyle teslim alın.",
    iconName: 'Car',
    badge: 'Otomobil Detailing & PPF',
    image: '/images/hero/hero_bmw_steam_wash.jpg',
    imageAlt: 'Bumex Garage Bahçelievler Stüdyosu BMW 4 Serisi Buharlı Detaylı Yıkama ve Mikron Boya Koruma',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/hero/hero_bmw_steam_wash.jpg',
    telemetryTag: 'PPF & Detailing',
    telemetryMetric: 'Boya & Vernik Analizi',
    bottomDescription: '7. Cadde 350m • Fırçasız yıkama, PPF kaplama ve boya koruma',
    whatsappMessage: 'Merhaba Bumex Garage, otomobil detailing, PPF kaplama ve boya koruma hizmetleriniz hakkında bilgi ve randevu almak istiyorum.',
    phone: '05524703610',
    phoneDisplay: '0552 470 36 10',
  },
  {
    id: 'motosiklet',
    tabLabel: 'Motosiklet Detailing & Servis',
    shortLabel: 'Motosiklet',
    headline: 'Motosikletiniz için hassas yıkama ve mekanik servis.',
    displayTitle: 'HASSAS MOTOSİKLET YIKAMA & SERVİS',
    subtitle:
      'Bahçelievler stüdyomuzda elektronik soketlere su basmadan tazyiksiz buharlı detay, grenaj bakımı, periyodik bakım (yağ, varyatör, zincir) ve mekanik onarım.',
    iconName: 'Bike',
    badge: 'Motosiklet Detailing & Servis',
    image: '/images/before-after/moto_detail_full.webp',
    imageAlt: 'Bumex Garage Profesyonel Motosiklet Detailing ve Mekanik Servis',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/before-after/moto_detail_full.webp',
    telemetryTag: 'Detailing & Mekanik',
    telemetryMetric: 'Bakım • Arıza • Tamir',
    bottomDescription: 'Hassas yıkama, varyatör/zincir bakımı ve mekanik onarım',
    whatsappMessage: 'Merhaba Bumex Garage, motosiklet detailing ve mekanik servis hizmetiniz hakkında bilgi ve randevu almak istiyorum.',
    phone: '05465332844',
    phoneDisplay: '0546 533 28 44',
  },
  {
    id: 'otopark',
    tabLabel: 'Güvenli Otopark & Park-Wash',
    shortLabel: 'Otopark',
    headline: "Bahçelievler 7. Cadde'de 24/7 güvenli otopark.",
    displayTitle: '24/7 GÜVENLİ OTOPARK & PARK-WASH',
    subtitle:
      "Bahçelievler 7. Cadde'ye 350 metre yürüme mesafesinde: Aracınızı güvenle bırakın, siz işinizi hallederken biz yıkama ve bakımını tamamlayalım.",
    iconName: 'ShieldCheck',
    badge: 'Bahçelievler 7. Cadde',
    image: '/images/hero/hero_bumex_ceramic.jpg',
    imageAlt: 'Bumex Garage Bahçelievler Güvenli Otopark ve Detailing Stüdyosu',
    telemetryTag: '7. Cadde 350m',
    telemetryMetric: '24/7 CCTV Kamera',
    bottomDescription: 'Geniş manevra alanı ve güvenli araç muhafazası',
    whatsappMessage: 'Merhaba Bumex Garage, otopark ve Park & Wash hizmetiniz hakkında bilgi almak istiyorum.',
    phone: '05524703610',
    phoneDisplay: '0552 470 36 10',
  },
];
