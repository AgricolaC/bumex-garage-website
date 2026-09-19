'use client';

import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Sparkles, ShieldCheck, Zap, Camera } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';

interface BeforeAfterSliderProps {
  theme: LandingTheme;
}

interface MethodHighlight {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface TransformationItem {
  id: string;
  vehicleType: 'otomobil' | 'motosiklet';
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  fullComparisonImage: string;
  beforeLabel: string;
  afterLabel: string;
  aspectClass: string;
  highlights: MethodHighlight[];
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'motosiklet-detailing',
    vehicleType: 'motosiklet',
    tabLabel: 'Motosiklet Grenaj & Blok',
    badge: "Ankara'da İlk • Hassas Motosiklet Detailing",
    title: 'Yamaha Supersport Grenaj, Blok & Zincir Detaylandırma',
    description:
      'Ağır yol çamuru, egzoz isi ve yanmış zincir yağı; hassas elektronik soketlere, dijital ekrana ve zincir o-ringlerine tazyikli su değdirilmeden, buhar ve pH nötr formüllerle fabrika kondisyonuna getirilir.',
    beforeImage: '/images/before-after/moto_detail_before.jpg',
    afterImage: '/images/before-after/moto_detail_after.jpg',
    fullComparisonImage: '/images/before-after/moto_detail_full.jpg',
    beforeLabel: 'Önce • Ağır Çamur & Katran',
    afterLabel: 'Sonra • Sıfır Fabrika Parlaklığı',
    aspectClass: 'aspect-[9/16] sm:aspect-[3/5] max-w-md mx-auto',
    highlights: [
      {
        icon: ShieldCheck,
        title: 'Elektronik & O-Ring İzolasyonu',
        desc: 'Tazyikli su sokulmaz; zincir o-ringleri, buji yuvaları ve TFT gösterge dielektrik solüsyonlarla korunur.',
      },
      {
        icon: Sparkles,
        title: 'Yanmış Zincir Yağı & Katran',
        desc: 'Motosiklet bloğu ve jantlara kemikleşen zift ve zincir yağı asitsiz çözücülerle arındırılır.',
      },
      {
        icon: Zap,
        title: 'Grenaj Polisaj & UV Zırhı',
        desc: 'Motosikletin hassas plastik grenajları hare giderici cila ile parlatılır, UV kalkanıyla mühürlenir.',
      },
    ],
  },
  {
    id: 'bmw-tam-donusum',
    vehicleType: 'otomobil',
    tabLabel: 'BMW 4 Restorasyon',
    badge: 'Bahçelievler Stüdyosu • Ham Karşılaştırma',
    title: 'BMW 4 Gran Coupé: Ağır Çamur & Kusursuz Yüzey Restorasyonu',
    description:
      'Ağır yol çamuru, zift ve statik kir tabakası; mikron boya yüzeyine zarar verilmeden aktif kar köpüğü, 140°C kuru buhar ve pH nötr detaylandırma protokolü ile sıfır kilometre fabrika parlaklığına kavuşturulur.',
    beforeImage: '/images/before-after/bmw_dirty_car.jpg',
    afterImage: '/images/before-after/bmw_clean_car.jpg',
    fullComparisonImage: '/images/before-after/bmw_clean_car.jpg',
    beforeLabel: 'Önce • Ağır Yol Çamuru',
    afterLabel: 'Sonra • Sıfır Fabrika Parlaklığı',
    aspectClass: 'aspect-[16/9]',
    highlights: [
      {
        icon: Sparkles,
        title: 'Aktif Kar Köpüğü Ön Yıkama',
        desc: 'Boya verniğine temas etmeden kaba çamur ve yol filmini çözen pH dengeli yoğun köpük katmanı.',
      },
      {
        icon: Zap,
        title: '140°C Buharlı Izgara Detayı',
        desc: 'Böbrek ızgara petekleri, far yuvaları ve amblem diplerinde sıfır kireç veya su lekesi garantisi.',
      },
      {
        icon: ShieldCheck,
        title: 'Mikron Seviyesinde Parlaklık',
        desc: 'Girdap izi (hare) bırakmayan özel kurutma tekniği ile kusursuz fabrika derinliği ve ayna efekti.',
      },
    ],
  },
  {
    id: 'bmw-jant-demir-tozu',
    vehicleType: 'otomobil',
    tabLabel: 'Demir Tozu & Jant',
    badge: 'pH Nötr Morarma Reaksiyonu',
    title: 'BMW M-Sport Jant & M Kaliper Demir Tozu Arındırma',
    description:
      'Fren balatalarından sıçrayan ve jant verniğine yapışan mikroskobik demir parçacıkları, morarma reaksiyonlu pH nötr özel formülle anında çözülür; elmas kesim jantlar ve mavi M kaliperler çizilmeden ilk günkü kondisyonuna getirilir.',
    beforeImage: '/images/before-after/bmw_wheel_iron.jpg',
    afterImage: '/images/before-after/bmw_wheel_clean.jpg',
    fullComparisonImage: '/images/before-after/bmw_wheel_clean.jpg',
    beforeLabel: 'Demir Tozu Morarma Reaksiyonu',
    afterLabel: 'Arındırılmış Elmas Kesim Jant',
    aspectClass: 'aspect-[16/9]',
    highlights: [
      {
        icon: Sparkles,
        title: 'Morarma Reaksiyonu',
        desc: 'Demir partiküllerine bağlandığında mor renk alan reaktif kimyasal formül ile gözle görülür çözünme.',
      },
      {
        icon: ShieldCheck,
        title: 'Asitsiz & Kaliper Dostu',
        desc: 'M Sport fren kaliperi boyasına ve hassas elmas kesim alaşıma zarar vermeyen güvenli pH formülü.',
      },
      {
        icon: Zap,
        title: 'Namlu & Bijon Detayı',
        desc: 'Jantın iç namlusuna ve bijon yuvalarına kemikleşen balata tozu ve zift tortuları kökten arındırılır.',
      },
    ],
  },
  {
    id: 'motor-kompartmani',
    vehicleType: 'otomobil',
    tabLabel: 'Kuru Buharlı Motor',
    badge: '140°C Buhar & Dielektrik İzolasyon',
    title: 'Kuru Buharlı Motor Kompartmanı Restorasyonu',
    description:
      'Toz, çamur ve yağ tabakası; hassas elektronik soketlere, sigorta kutusuna ve beyne tek damla tazyikli su değdirilmeden, 140°C kuru buhar ve dielektrik formüllerle fabrika kondisyonuna getirilir.',
    beforeImage: '/images/before-after/engine_bay_before.jpg',
    afterImage: '/images/before-after/engine_bay_after.jpg',
    fullComparisonImage: '/images/before-after/engine_bay_full.jpg',
    beforeLabel: 'Önce • Çamur & Toz Katmanı',
    afterLabel: 'Sonra • Fabrika Mat Kondisyon',
    aspectClass: 'aspect-[16/10] sm:aspect-[16/9]',
    highlights: [
      {
        icon: Zap,
        title: 'Dielektrik Yalıtkan',
        desc: 'Elektrik iletmeyen koruyucu solüsyonla sıfır soket veya beyin arıza riski.',
      },
      {
        icon: Sparkles,
        title: '140°C Kuru Buhar',
        desc: 'Ağır motor yağı ve kireç kalıntıları fırçasız, aşınma riski olmadan çözülür.',
      },
      {
        icon: ShieldCheck,
        title: 'Antistatik Koruma',
        desc: 'Plastik ve kauçuk hortumlar beslenir, uzun süre toz tutmayan mat doku kazanır.',
      },
    ],
  },
  {
    id: 'koltuk-leke-ekstraksiyon',
    vehicleType: 'otomobil',
    tabLabel: 'Koltuk Leke Ekstraksiyonu',
    badge: 'Derin Vakum & pH Nötr Ekstraksiyon',
    title: 'Kumaş Koltuk Derin Leke Ekstraksiyonu',
    description:
      'Yılların birikimi su lekeleri, meşrubat döküntüleri ve ter izleri; süngere işlemiş kirleri ters vakumla çeken endüstriyel ekstraktörlerle kumaş liflerine zarar verilmeden arındırılır.',
    beforeImage: '/images/before-after/seat_stain_before.jpg',
    afterImage: '/images/before-after/seat_stain_after.jpg',
    fullComparisonImage: '/images/before-after/seat_stain_full.jpg',
    beforeLabel: 'Önce • Kusma Yapan Su Lekeleri',
    afterLabel: 'Sonra • Liften Arındırılmış Kumaş',
    aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
    highlights: [
      {
        icon: Sparkles,
        title: 'Sıfır Kusma Garantisi',
        desc: 'Kir sünger tabanına itilmez; vakumla çekildiği için kuruduktan sonra leke geri çıkmaz.',
      },
      {
        icon: ShieldCheck,
        title: 'pH Nötr Şampuan',
        desc: 'Kumaş ipliklerini sertleştirmeyen, solma yapmayan biyolojik enzim teknolojisi.',
      },
      {
        icon: Zap,
        title: 'Hızlı Kuru Teslimat',
        desc: 'Sıcak hava ahtapotları ile nem kalmaz; rutubet ve koku oluşumu kökten engellenir.',
      },
    ],
  },
  {
    id: 'komple-koltuk-yenileme',
    vehicleType: 'otomobil',
    tabLabel: 'Açık Renk Döşeme Yenileme',
    badge: 'Buharlı Dezenfeksiyon & Renk Restorasyonu',
    title: 'Bej Koltuk & Kolçak Komple Hijyen Restorasyonu',
    description:
      'Kararan bej kumaş koltuklar ve kolçak üzerindeki ağır kir tabakası; kumaşın ilk günkü açık tonunu ortaya çıkaran sıcak ekstraksiyon ve leke sökücü protokolümüzle yenilenir.',
    beforeImage: '/images/before-after/seat_clean_before.jpg',
    afterImage: '/images/before-after/seat_clean_after.jpg',
    fullComparisonImage: '/images/before-after/seat_clean_full.jpg',
    beforeLabel: 'Önce • Kararmış Döşeme & Kolçak',
    afterLabel: 'Sonra • Orijinal Bej Tonu',
    aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
    highlights: [
      {
        icon: Sparkles,
        title: 'Orijinal Ton Kazanımı',
        desc: 'Dikiş aralarındaki siyahlaşmış yağ ve kir çözülerek açık fabrika tonu geri kazanılır.',
      },
      {
        icon: ShieldCheck,
        title: 'Bakteri & Mayt İptali',
        desc: '80°C sıcak ekstraksiyon ile döşeme altındaki mikroskobik bakteri kaynakları yok edilir.',
      },
      {
        icon: Zap,
        title: 'Kumaş Koruma Kalkanı',
        desc: 'Yıkama sonrasında uygulanan nano tabaka ile yeni sıvı dökülmelerine karşı direnç sağlanır.',
      },
    ],
  },
  {
    id: 'trim-plastik-detay',
    vehicleType: 'otomobil',
    tabLabel: 'Trim & Plastik Restorasyonu',
    badge: 'Detay Fırçaları & Orijinal Mat Görünüm',
    title: 'İç Trim, Konsol & Bardaklık Detaylandırma',
    description:
      'Bardaklık dipleri, buton çevreleri ve havalandırma kanallarında kemikleşen yapışkan kirler; at kılı detay fırçaları ve yağsız mat koruyucularla sıfır araç kondisyonuna kavuşturulur.',
    beforeImage: '/images/before-after/trim_detail_before.jpg',
    afterImage: '/images/before-after/trim_detail_after.jpg',
    fullComparisonImage: '/images/before-after/trim_detail_full.jpg',
    beforeLabel: 'Önce • Yapışkan Şeker & Kir',
    afterLabel: 'Sonra • Kusursuz Fabrika Matlığı',
    aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
    highlights: [
      {
        icon: Sparkles,
        title: 'Milimetrik Temizlik',
        desc: 'Ulaşılması zor buton dipleri, vites konsolu ve bardaklık yuvaları fırçayla sıfırlanır.',
      },
      {
        icon: ShieldCheck,
        title: 'Asla Parlatıcı Sürülmez',
        desc: 'Silikonlu ucuz torpido sütü kullanılmaz; fabrikanın öngördüğü asil mat doku korunur.',
      },
      {
        icon: Zap,
        title: 'UV & Çatlama Kalkanı',
        desc: 'Güneş ısısı nedeniyle kuruyan ve beyazlayan plastikler derinlemesine beslenir.',
      },
    ],
  },
];

const REAL_AUTOMOBILE_STUDIO_GALLERY = [
  {
    id: 'bmw-restorasyon',
    targetTabId: 'bmw-tam-donusum',
    title: 'BMW 4 Restorasyon',
    badge: 'Çamur & Kusursuz Yüzey',
    src: '/images/before-after/bmw_clean_car.jpg',
    alt: 'Bumex Garage BMW 4 Serisi Çamur ve Boya Restorasyonu',
    desc: 'Ağır yol çamurundan fabrika çıkışı derin ayna parlaklığına tam dönüşüm.',
  },
  {
    id: 'bmw-jant',
    targetTabId: 'bmw-jant-demir-tozu',
    title: 'M-Sport Jant Demir Tozu',
    badge: 'pH Nötr Morarma',
    src: '/images/before-after/bmw_wheel_clean.jpg',
    alt: 'Bumex Garage BMW M-Sport Jant Demir Tozu Kimyasal Reaksiyonu',
    desc: 'M fren kaliperine ve elmas kesim alaşıma zarar vermeden mikron seviyede balata tozu arındırması.',
  },
  {
    id: 'bmw-buhar',
    targetTabId: 'bmw-tam-donusum',
    title: '140°C Buharlı Detay',
    badge: '140°C Kuru Buhar',
    src: '/images/before-after/bmw_steam_wash.jpg',
    alt: 'Bumex Garage BMW 4 Serisi Buharlı Detay Yıkama',
    desc: 'Böbrek ızgara petekleri, lazer far dipleri ve amblem yuvalarında buharlı arındırma.',
  },
  {
    id: 'bmw-kopuk',
    targetTabId: 'bmw-tam-donusum',
    title: 'Aktif Kar Köpüğü',
    badge: 'Ön Yıkama Stüdyosu',
    src: '/images/before-after/bmw_snow_foam.jpg',
    alt: 'Bumex Detailing Stüdyosu Kar Köpüğü',
    desc: 'Atölye içi BUMEX DETAILING panosu önünde temassız statik kir çözme protokolü.',
  },
];

export function BeforeAfterSlider({ theme }: BeforeAfterSliderProps) {
  const isCream = theme === 'cream';
  const { segment } = useWorkshopSegment();

  // Yalnızca aktif segmente ait Before/After uygulamalarını getir
  const availableItems = useMemo(() => {
    return TRANSFORMATIONS.filter((t) => t.vehicleType === segment);
  }, [segment]);

  const [activeTabId, setActiveTabId] = useState<string>(availableItems[0]?.id || '');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Segment değiştiğinde aktif sekmeyi ilk öğeye sıfırla
  useEffect(() => {
    if (availableItems.length > 0) {
      setActiveTabId(availableItems[0].id);
      setSliderPosition(50);
    }
  }, [segment, availableItems]);

  const activeItem =
    availableItems.find((t) => t.id === activeTabId) || availableItems[0] || TRANSFORMATIONS[0];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX);
      }
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        updatePosition(e.clientX);
      }
    },
    [isDragging, updatePosition]
  );

  return (
    <section
      id="restorasyon"
      className={`py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${
        isCream
          ? 'bg-[#E3DED9] border-[#6C6A6B]/20 text-[#0D0D0D]'
          : 'bg-[#181A1D] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {segment === 'otomobil'
                ? 'Gerçek Otomobil Atölye Uygulamaları'
                : 'Gerçek Motosiklet Detailing Uygulamaları'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
            Gözle Görülür Dönüşüm: Öncesi ve Sonrası
          </h2>
          <p
            className={`text-sm sm:text-base mt-3 ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            {segment === 'otomobil'
              ? 'Bahçelievler atölyemizde tamamlanan gerçek otomobil uygulamalarını inceleyin. İnteraktif kaydırıcı ile mikron seviyesindeki temizlik ve restorasyon farkına tanık olun.'
              : 'Hassas motosiklet detailing ve grenaj yenileme çalışmalarımız. Tazyiksiz kuru buhar ve nano polisaj ile fabrikasyon parlaklığına tanık olun.'}
          </p>
        </div>

        {/* Dönüşüm Kategori Sekmeleri (Birden fazla öğe varsa göster) */}
        {availableItems.length > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {availableItems.map((item) => {
              const isActive = item.id === activeTabId;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTabId(item.id);
                    setSliderPosition(50);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer active:scale-95 border ${
                    isActive
                      ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/25'
                      : isCream
                        ? 'bg-white/80 border-[#6C6A6B]/20 text-[#0D0D0D] hover:bg-white'
                        : 'bg-[#222529] border-white/10 text-[#C4C9D0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        )}

        {/* Aktif Uygulama Detay Başlığı */}
        <div className="max-w-4xl mx-auto mb-4 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-[#60A5FA]">
              {activeItem.badge}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
            {activeItem.title}
          </h3>
        </div>

        {/* Görsel Vitrin Alanı - Yalnızca Kaydırıcı */}
        <div className="relative max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className={`relative w-full ${activeItem.aspectClass} rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border bg-black ${
              isCream ? 'border-[#6C6A6B]/30 shadow-black/10' : 'border-white/10 shadow-black/60'
            }`}
          >
            {/* Arka Plan Görseli: ÖNCE */}
            <img
              src={activeItem.beforeImage}
              alt={activeItem.beforeLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Ön Plan Görseli: SONRA - Clip Path ile Kesilmiş */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src={activeItem.afterImage}
                alt={activeItem.afterLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Bölücü Çizgi (Royal Blue Işık) */}
            <div
              className="absolute top-0 bottom-0 w-[3px] pointer-events-none bg-[#1E3A8A] shadow-[0_0_14px_rgba(30,58,138,0.9)]"
              style={{ left: `${sliderPosition}%` }}
            />

            {/* Tutamaç (Handle - Royal Blue) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full text-white flex items-center justify-center font-black text-sm shadow-2xl border-2 border-white pointer-events-none z-20 bg-[#1E3A8A]"
              style={{ left: `${sliderPosition}%` }}
            >
              <span className="tracking-tighter select-none">⟺</span>
            </div>

            {/* Erişilebilirlik Range Girdisi */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label={`${activeItem.title} öncesi ve sonrası karşılaştırma kaydırıcısı`}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
            />
          </div>

          {/* Açıklama Metni */}
          <p
            className={`text-xs sm:text-sm mt-4 text-center max-w-2xl mx-auto leading-relaxed ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            {activeItem.description}
          </p>

          {/* Süreç ve Metot Kazanımları */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {activeItem.highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    isCream
                      ? 'bg-white/85 border-[#6C6A6B]/25 text-[#0D0D0D] shadow-xs'
                      : 'bg-[#222529]/80 border-white/10 text-white'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'
                    }`}
                  />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">{h.title}</h4>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'
                      }`}
                    >
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Otomobil Segmentine Özel: Bahçelievler Atölyemizden Gerçek Detailing Kareleri Vitrini */}
        {segment === 'otomobil' && (
          <div
            className={`mt-14 pt-10 border-t transition-colors duration-200 ${
              isCream ? 'border-[#6C6A6B]/20' : 'border-white/10'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Camera
                    className={`w-4 h-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}
                  />
                  <span
                    className={`text-xs font-black uppercase tracking-wider ${
                      isCream ? 'text-[#1E3A8A]' : 'text-[#93C5FD]'
                    }`}
                  >
                    Bahçelievler Stüdyomuzdan Ham Detay Kareleri
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
                  Atölye İçi Canlı Uygulama & Süreç Galerisi
                </h3>
              </div>
              <p
                className={`text-xs sm:text-sm max-w-md ${
                  isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                }`}
              >
                Her fotoğraf, Bahçelievler atölyemizde icra edilen gerçek araç protokollerine aittir. İlgili karta tıklayarak karşılaştırmayı doğrudan açabilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {REAL_AUTOMOBILE_STUDIO_GALLERY.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveTabId(item.targetTabId);
                    setSliderPosition(50);
                    // Yumuşak kaydırma ile slider başlığına odaklan
                    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1 hover:shadow-xl ${
                    isCream
                      ? 'bg-white/90 border-[#6C6A6B]/25 hover:border-[#1E3A8A] shadow-xs'
                      : 'bg-[#222529]/90 border-white/10 hover:border-[#60A5FA]/60 shadow-lg'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-1 rounded-md bg-black/85 text-white text-[10px] font-bold backdrop-blur-xs border border-white/15">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition">
                        {item.title}
                      </h4>
                      <p
                        className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${
                          isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px] font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
                      <span>İnteraktif İncele</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
