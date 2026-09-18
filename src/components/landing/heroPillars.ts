export type WorkshopPillarId = 'mikron' | 'buhar' | 'yikama' | 'motosiklet' | 'otopark';

export interface WorkshopPillar {
  id: WorkshopPillarId;
  tabLabel: string;
  shortLabel: string;
  headline: string;
  subtitle: string;
  iconName: 'Gem' | 'ShieldCheck' | 'Zap' | 'Droplets' | 'Car' | 'Bike';
  badge: string;
  image: string;
  imageAlt: string;
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
    subtitle:
      'Dijital mikron analizi ve profesyonel pasta cila ile fabrika verniğini inceltmeden harez ve çizikleri %95+ gideriyor, 9H nano seramik kalkan uyguluyoruz.',
    iconName: 'Gem',
    badge: 'Mikron Boya Analizi',
    image: '/images/hero/hero_coating_exploded_3d.jpg',
    imageAlt: 'Bumex Garage Mikron Boya Analizi ve Vernik Restorasyonu',
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
    subtitle:
      '140°C kuru buhar ve sıfır iletkenlikli dielektrik kimyasal; elektronik beyin, soket ve sensör arıza riski kesinlikle sıfır.',
    iconName: 'Zap',
    badge: '140°C Kuru Buhar',
    image: '/images/before-after/engine_bay_after.jpg',
    imageAlt: 'Bumex Garage Dielektrik Kuru Buharlı Motor Temizliği ve Koruma',
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
    subtitle:
      'Kostiksiz aktif kar köpüğü, çift kova grit-guard ve saf mikrofiber kurulama. Sıfır yıkama çiziği güvencesi.',
    iconName: 'Droplets',
    badge: 'pH Nötr Aktif Köpük',
    image: '/images/hero/hero_red_water_bead.jpg',
    imageAlt: 'Bumex pH Nötr Çiziksiz Yıkama ve Yüzey Boncuklanması',
    telemetryTag: 'Sıfır Çizik Garantisi',
    telemetryMetric: 'Grit-Guard Çift Kova',
    bottomDescription: 'Fırçasız, kostiksiz ve haresiz mikrofiber bakım',
    whatsappMessage: 'Merhaba Bumex Garage, fırçasız ve çiziksiz detaylı yıkama hakkında bilgi almak istiyorum.',
  },
  {
    id: 'motosiklet',
    tabLabel: 'Motosiklet Detailing',
    shortLabel: 'Motosiklet',
    headline: 'Motosiklet Detailing & Grenaj Seramik Zırh.',
    subtitle:
      'Superbike ve cruiser grenajlarında mikron pasta cila, 9H seramik koruma, zincir arındırma ve korozyon önleyici dielektrik koruma.',
    iconName: 'Bike',
    badge: 'Grenaj & Zincir Bakımı',
    image: '/images/before-after/moto_detail_full.jpg',
    imageAlt: 'Bumex Garage Profesyonel Motosiklet Detailing ve Grenaj Seramik Kaplama',
    telemetryTag: 'Özel Grenaj Kalkanı',
    telemetryMetric: '110° Hidrofobik Grenaj',
    bottomDescription: 'Hassas aksamlar için fırçasız ve çiziksiz motosiklet bakımı',
    whatsappMessage: 'Merhaba Bumex Garage, motosiklet detailing ve seramik kaplama hizmetiniz hakkında bilgi almak istiyorum.',
  },
  {
    id: 'otopark',
    tabLabel: 'Güvenli Kapalı Otopark',
    shortLabel: 'Kapalı Otopark',
    headline: '24/7 Güvenli Kapalı Otopark & Yıkama.',
    subtitle:
      'Bahçelievler 7. Cadde\'ye 350 metre; 24 saat kesintisiz CCTV kameralı, korunaklı girişli kapalı otopark ve Park & Wash konsepti.',
    iconName: 'Car',
    badge: 'Bahçelievler 7. Cadde',
    image: '/images/hero/hero_bumex_ceramic.jpg',
    imageAlt: 'Bumex Garage Bahçelievler Güvenli Kapalı Otopark ve Detailing Stüdyosu',
    telemetryTag: '7. Cadde 350m',
    telemetryMetric: '24/7 CCTV Kamera',
    bottomDescription: 'Geniş manevra alanı ve güvenli kapalı araç muhafazası',
    whatsappMessage: 'Merhaba Bumex Garage, kapalı otopark ve Park & Wash hizmetiniz hakkında bilgi almak istiyorum.',
  },
];
