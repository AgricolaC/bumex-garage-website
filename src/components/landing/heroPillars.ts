export type WorkshopPillarId = 'mikron' | 'buhar' | 'yikama' | 'motosiklet' | 'otopark';

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
}

export const WORKSHOP_PILLARS: WorkshopPillar[] = [
  {
    id: 'mikron',
    tabLabel: 'Mikron & Seramik',
    shortLabel: 'Mikron Analiz',
    headline: 'Mikron Boya Restorasyonu & 9H Seramik.',
    displayTitle: 'MİKRON BOYA RESTORASYONU',
    subtitle:
      'Dijital mikron analizi ve profesyonel pasta cila ile fabrika verniğini inceltmeden harez ve çizikleri %95+ gideriyor, 9H nano seramik kalkan uyguluyoruz.',
    iconName: 'Gem',
    badge: 'Mikron Boya Analizi',
    image: '/images/hero/hero_coating_exploded_3d.jpg',
    imageAlt: 'Bumex Garage Mikron Boya Analizi ve Vernik Restorasyonu',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/hero/hero_coating_exploded_3d.jpg',
    telemetryTag: 'Vernik İnceltilmez',
    telemetryMetric: '0.5µm Dijital Ölçüm',
    bottomDescription: 'Fabrika vernik kalınlığı korunarak çizik giderme',
    whatsappMessage: 'Merhaba Bumex Garage, mikron boya restorasyonu ve 9H seramik koruma hakkında bilgi almak istiyorum.',
  },
  {
    id: 'buhar',
    tabLabel: 'Dielektrik Buharlı Motor',
    shortLabel: 'Kuru Buhar',
    headline: 'Sıfır Riskli Dielektrik Kuru Buhar.',
    displayTitle: 'DİELEKTRİK KURU BUHAR',
    subtitle:
      '140°C kuru buhar ve sıfır iletkenlikli dielektrik kimyasal; elektronik beyin, soket ve sensör arıza riski kesinlikle sıfır.',
    iconName: 'Zap',
    badge: '140°C Kuru Buhar',
    image: '/images/before-after/engine_bay_after.jpg',
    imageAlt: 'Bumex Garage Dielektrik Kuru Buharlı Motor Temizliği ve Koruma',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/before-after/engine_bay_after.jpg',
    telemetryTag: 'Sıfır Su Hasarı',
    telemetryMetric: '0V İletkenlik',
    bottomDescription: 'Elektronik soket ve beyin arıza riski kesinlikle sıfır',
    whatsappMessage: 'Merhaba Bumex Garage, dielektrik kuru buharlı motor temizliği hakkında bilgi almak istiyorum.',
  },
  {
    id: 'yikama',
    tabLabel: 'pH Nötr Çiziksiz Yıkama',
    shortLabel: 'Çiziksiz Yıkama',
    headline: 'pH Nötr & Çiziksiz Detaylı Yıkama.',
    displayTitle: 'pH NÖTR ÇİZİKSİZ YIKAMA',
    subtitle:
      'Kostiksiz aktif kar köpüğü, çift kova grit-guard ve saf mikrofiber kurulama. Sıfır yıkama çiziği güvencesi.',
    iconName: 'Droplets',
    badge: 'pH Nötr Aktif Köpük',
    image: '/images/hero/hero_red_water_bead.jpg',
    imageAlt: 'Bumex pH Nötr Çiziksiz Yıkama ve Yüzey Boncuklanması',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/hero/hero_red_water_bead.jpg',
    telemetryTag: 'Sıfır Çizik Garantisi',
    telemetryMetric: 'Grit-Guard Çift Kova',
    bottomDescription: 'Fırçasız, kostiksiz ve haresiz mikrofiber bakım',
    whatsappMessage: 'Merhaba Bumex Garage, fırçasız ve çiziksiz detaylı yıkama hakkında bilgi almak istiyorum.',
  },
  {
    id: 'motosiklet',
    tabLabel: 'Motosiklet Detailing & Servis',
    shortLabel: 'Motosiklet',
    headline: 'Motosiklet Detailing & Servis Atölyesi.',
    displayTitle: 'MOTOSİKLET DETAILING & SERVİS ATÖLYESİ',
    subtitle:
      'Start, Pro ve Premium detailing paketleri; 3 kolda tam teşekküllü mekanik servis (Rutin Bakım, Arıza Onarımı, Kaza Sonrası Tamirat) ve 7/24 özel aparatlı çekici.',
    iconName: 'Bike',
    badge: 'Detailing • Bakım • Arıza • Tamir',
    image: '/images/before-after/moto_detail_full.jpg',
    imageAlt: 'Bumex Garage Profesyonel Motosiklet Detailing, Mekanik Servis ve Çekici Hizmeti',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/before-after/moto_detail_full.jpg',
    telemetryTag: 'Detailing & Mekanik',
    telemetryMetric: 'Bakım • Arıza • Tamir',
    bottomDescription: 'Hassas detailing, varyatör/yağ, arıza onarımı ve kaza tamiratı',
    whatsappMessage: 'Merhaba Bumex Garage, motosiklet detailing, mekanik servis ve çekici hizmetiniz hakkında bilgi almak istiyorum.',
  },
  {
    id: 'otopark',
    tabLabel: 'Güvenli Kapalı Otopark',
    shortLabel: 'Kapalı Otopark',
    headline: '24/7 Güvenli Kapalı Otopark & Yıkama.',
    displayTitle: '24/7 GÜVENLİ KAPALI OTOPARK',
    subtitle:
      'Bahçelievler 7. Cadde\'ye 350 metre; 24 saat kesintisiz CCTV kameralı, korunaklı girişli kapalı otopark ve Park & Wash konsepti.',
    iconName: 'Car',
    badge: 'Bahçelievler 7. Cadde',
    image: '/images/hero/hero_bumex_ceramic.jpg',
    imageAlt: 'Bumex Garage Bahçelievler Güvenli Kapalı Otopark ve Detailing Stüdyosu',
    videoSrc: '/videos/sample_workshop.mp4',
    videoPoster: '/images/hero/hero_bumex_ceramic.jpg',
    telemetryTag: '7. Cadde 350m',
    telemetryMetric: '24/7 CCTV Kamera',
    bottomDescription: 'Geniş manevra alanı ve güvenli kapalı araç muhafazası',
    whatsappMessage: 'Merhaba Bumex Garage, kapalı otopark ve Park & Wash hizmetiniz hakkında bilgi almak istiyorum.',
  },
];
