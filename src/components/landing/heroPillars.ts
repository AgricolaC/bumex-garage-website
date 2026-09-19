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
    headline: 'Otomobil Detailing, PPF & Mikron Restorasyon.',
    displayTitle: 'OTOMOBİL DETAILING & PPF',
    subtitle:
      'Detaylı yıkama, PPF şeffaf koruma kaplama, mikron boya restorasyonu ve 140°C dielektrik buharla otomobilinize kusursuz kondisyon kazandırıyoruz.',
    iconName: 'Car',
    badge: 'Otomobil Detailing & PPF',
    image: '/images/hero/hero_bmw_steam_wash.jpg',
    imageAlt: 'Bumex Garage Bahçelievler Stüdyosu BMW 4 Serisi Buharlı Detaylı Yıkama ve Mikron Boya Koruma',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/hero/hero_bmw_steam_wash.jpg',
    telemetryTag: 'PPF & Detailing',
    telemetryMetric: 'Mikron Vernik Analizi',
    bottomDescription: 'Kusursuz yıkama, PPF şeffaf kaplama ve nano seramik koruma',
    whatsappMessage: 'Merhaba Bumex Garage, otomobil detailing, PPF kaplama ve boya koruma hizmetleriniz hakkında bilgi ve randevu almak istiyorum.',
    phone: '05524703610',
    phoneDisplay: '0552 470 36 10',
  },
  {
    id: 'motosiklet',
    tabLabel: 'Motosiklet Detailing & Servis',
    shortLabel: 'Motosiklet',
    headline: 'Motosiklet Detailing, Bakım & Mekanik Servis.',
    displayTitle: 'MOTOSİKLET DETAILING & SERVİS',
    subtitle:
      'Hassas motosiklet detailing, boya restorasyonu, periyodik bakım, mekanik onarım, kaza tamiratı ve randevulu transfer desteği.',
    iconName: 'Bike',
    badge: 'Motosiklet Detailing & Servis',
    image: '/images/before-after/moto_detail_full.webp',
    imageAlt: 'Bumex Garage Profesyonel Motosiklet Detailing ve Mekanik Servis',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/before-after/moto_detail_full.webp',
    telemetryTag: 'Detailing & Mekanik',
    telemetryMetric: 'Bakım • Arıza • Tamir',
    bottomDescription: 'Hassas detailing, varyatör/yağ, mekanik onarım ve kaza tamiratı',
    whatsappMessage: 'Merhaba Bumex Garage, motosiklet detailing ve mekanik servis hizmetiniz hakkında bilgi ve randevu almak istiyorum.',
    phone: '05465332844',
    phoneDisplay: '0546 533 28 44',
  },
  {
    id: 'otopark',
    tabLabel: 'Güvenli Otopark & Park-Wash',
    shortLabel: 'Otopark',
    headline: '24/7 Güvenli Otopark & Park & Wash.',
    displayTitle: '24/7 GÜVENLİ OTOPARK',
    subtitle:
      'Bahçelievler 7. Cadde\'ye 350 metre yürüme mesafesinde; 24 saat kesintisiz CCTV kameralı, geniş manevra alanına sahip güvenli otopark ve Park & Wash konsepti.',
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
