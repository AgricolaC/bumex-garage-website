'use client';

import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Sparkles, ShieldCheck, Zap, ChevronDown } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';

interface BeforeAfterSliderProps {
  theme: LandingTheme;
  detailed?: boolean;
}

interface MethodHighlight {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface CaseStudyEvidence {
  vehicle: string;
  problem: string;
  application: string;
  duration: string;
  result: string;
  testimonial: {
    quote: string;
    author: string;
  };
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
  caseStudy?: CaseStudyEvidence;
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'yamaha-mt09-camur-arindirma',
    vehicleType: 'motosiklet',
    tabLabel: 'Yamaha MT-09 Detailing',
    badge: 'Bahçelievler Atölyesi • Ham Karşılaştırma',
    title: 'Yamaha MT-09: Ağır Yol Çamuru & Detaylı Blok Arındırma',
    description:
      'Ağır arazi ve yol çamuru; hassas elektronik soketlere, dijital TFT ekrana ve zincir o-ringlerine zarar vermeden, tazyiksiz kuru buhar ve pH nötr aktif köpük protokolüyle tamamen arındırılır.',
    beforeImage: '/images/before-after/moto_mt09_before.webp',
    afterImage: '/images/before-after/moto_mt09_after.webp',
    fullComparisonImage: '/images/before-after/moto_mt09_after.webp',
    beforeLabel: 'Önce • Ağır Yol Çamuru & Zift',
    afterLabel: 'Sonra • Fabrika Kondisyonu & Koruma',
    aspectClass: 'aspect-[796/1024] max-w-md mx-auto',
    caseStudy: {
      vehicle: 'Yamaha MT-09 (890cc CP3)',
      problem: 'Yoğun balçık çamur, zincir yağı kalıntıları ve grenaj matlığı',
      application: 'Tazyiksiz kuru buhar, dielektrik soket koruma, grenaj finiş cilası ve nano koruma',
      duration: '3 saat atölye işçiliği',
      result: 'Elektronik aksama su basmadan sıfır kondisyona kavuşturulan CP3 blok ve parlak Icon Blue grenaj',
      testimonial: {
        quote: 'Motosikleti teslim aldığımda bayiden yeni çıkmış gibi parlıyordu, ellerinize sağlık.',
        author: 'Emre K. • Yamaha MT-09',
      },
    },
    highlights: [
      {
        icon: ShieldCheck,
        title: 'Tazyiksiz Kuru Buhar',
        desc: 'TFT gösterge, buji yuvaları ve sensörlere tazyikli su değdirilmeden 160°C kuru buharla arındırma.',
      },
      {
        icon: Sparkles,
        title: 'CP3 Blok & Zincir Temizliği',
        desc: 'Üç silindirli bloğa ve salıncağa yapışan çamur ve katran asitsiz çözücülerle temizlenir.',
      },
      {
        icon: Zap,
        title: 'Grenaj Parlaklığı & Nano Kalkan',
        desc: 'Icon Blue grenajlar çiziksiz kurulama ve nano koruyucu katmanla derin parlaklığına kavuşturulur.',
      },
    ],
  },
  {
    id: 'motosiklet-detailing',
    vehicleType: 'motosiklet',
    tabLabel: 'Yamaha MT-07 Detailing',
    badge: 'Bahçelievler Atölyesi • Hassas Motosiklet Detailing',
    title: 'Yamaha MT-07: Grenaj, Blok & Zincir Restorasyonu',
    description:
      'Ağır yol çamuru, egzoz isi ve yanmış zincir yağı; hassas elektronik soketlere, dijital ekrana ve zincir o-ringlerine tazyikli su değdirilmeden, buhar ve pH nötr formüllerle fabrika kondisyonuna getirilir.',
    beforeImage: '/images/before-after/moto_detail_before.webp',
    afterImage: '/images/before-after/moto_detail_after.webp',
    fullComparisonImage: '/images/before-after/moto_detail_full.webp',
    beforeLabel: 'Önce • Ağır Çamur & Katran',
    afterLabel: 'Sonra • Yenilenmiş Yüzey & Koruma',
    aspectClass: 'aspect-[9/16] sm:aspect-[3/5] max-w-md mx-auto',
    caseStudy: {
      vehicle: 'Yamaha MT-07',
      problem: 'Yanmış zincir yağı, blok çamuru ve hassas grenaj matlığı',
      application: 'Tazyiksiz kuru buhar, zincir arındırma + yağlama, grenaj finiş cilası',
      duration: '2.5 saat hassas işçilik',
      result: 'Elektronik soketlere su basmadan arındırılmış motor bloğu ve korumalı grenaj',
      testimonial: {
        quote: 'Motosiklet yıkamasında Ankara’da güvenebileceğim nadir yerlerden.',
        author: 'Can B. • Yamaha MT-07',
      },
    },
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
    badge: 'Bahçelievler Atölyesi • Ham Karşılaştırma',
    title: 'BMW 4 Gran Coupé: Ağır Çamur & Yüzey Temizliği',
    description:
      'Ağır yol çamuru, zift ve statik kir tabakası; boya verniğine sürtme yapılmadan aktif kar köpüğü, buharlı detay ve pH nötr yıkama protokolü ile temizlenir.',
    beforeImage: '/images/before-after/bmw_dirty_car.webp',
    afterImage: '/images/before-after/bmw_clean_car.webp',
    fullComparisonImage: '/images/before-after/bmw_clean_car.webp',
    beforeLabel: 'Önce • Ağır Yol Çamuru',
    afterLabel: 'Sonra • Arındırılmış Yüzey',
    aspectClass: 'aspect-[16/9]',
    caseStudy: {
      vehicle: 'BMW 420i Gran Coupé',
      problem: 'Girdap izleri (swirl marks), vernik oksidasyonu ve yüzey matlığı',
      application: '3 aşamalı boya düzeltme ve 9H seramik kaplama',
      duration: '8 saat tamirhane işçiliği',
      result: 'Derin yüzey yansıması, hare ve mikro çiziklerden arındırılmış pürüzsüz boya',
      testimonial: {
        quote: 'Arabadan çıkmayacak denen lekeleri bile tek yıkamada çıkardılar. Kaliteli hizmet için çok teşekkürler.',
        author: 'Mehmet Ali Ç. • Doğrulanmış Google Yorumu',
      },
    },
    highlights: [
      {
        icon: Sparkles,
        title: 'Aktif Kar Köpüğü Ön Yıkama',
        desc: 'Boya verniğine temas etmeden kaba çamur ve yol filmini çözen pH dengeli yoğun köpük katmanı.',
      },
      {
        icon: Zap,
        title: 'Buharlı Izgara & Detay',
        desc: 'Böbrek ızgara petekleri, far yuvaları ve amblem diplerinde lekesiz ve pürüzsüz arındırma.',
      },
      {
        icon: ShieldCheck,
        title: 'Çiziksiz Kurutma & Parlaklık',
        desc: 'Harez bırakmayan çift kovalı yıkama ve mikrofiber kurulama ile derin parlaklık.',
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
    beforeImage: '/images/before-after/bmw_wheel_iron.webp',
    afterImage: '/images/before-after/bmw_wheel_clean.webp',
    fullComparisonImage: '/images/before-after/bmw_wheel_clean.webp',
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
    tabLabel: 'Buharlı Motor Temizliği',
    badge: 'Buhar & Dielektrik Koruma',
    title: 'Buharlı Motor Temizliği ve Koruma',
    description:
      'Toz, çamur ve yağ tabakası; hassas elektronik soketlere ve beyne tazyikli su değdirilmeden, yüksek ısı kuru buhar ve dielektrik formüllerle temizlenir.',
    beforeImage: '/images/before-after/engine_bay_before.webp',
    afterImage: '/images/before-after/engine_bay_after.webp',
    fullComparisonImage: '/images/before-after/engine_bay_full.webp',
    beforeLabel: 'Önce • Yağ & Toz Katmanı',
    afterLabel: 'Sonra • Temizlenmiş & Korunmuş Motor',
    aspectClass: 'aspect-[16/10] sm:aspect-[16/9]',
    highlights: [
      {
        icon: Zap,
        title: 'Dielektrik Koruma',
        desc: 'Akım iletmeyen koruyucu solüsyonla soket ve beyin aksamında neme karşı güvenli izolasyon.',
      },
      {
        icon: Sparkles,
        title: 'Kuru Buharlı Çözüm',
        desc: 'Ağır motor yağı ve toz birikintileri su birikintisi yapmadan buharla çözülür.',
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
    beforeImage: '/images/before-after/seat_stain_before.webp',
    afterImage: '/images/before-after/seat_stain_after.webp',
    fullComparisonImage: '/images/before-after/seat_stain_full.webp',
    beforeLabel: 'Önce • Kusma Yapan Su Lekeleri',
    afterLabel: 'Sonra • Liften Arındırılmış Kumaş',
    aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
    highlights: [
      {
        icon: Sparkles,
        title: 'Derin Ekstraksiyon & Leke Tahliyesi',
        desc: 'Kir sünger tabanına itilmez; ters vakumla liflerden çekildiği için kuruduktan sonra leke geri kusmaz.',
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
    beforeImage: '/images/before-after/seat_clean_before.webp',
    afterImage: '/images/before-after/seat_clean_after.webp',
    fullComparisonImage: '/images/before-after/seat_clean_full.webp',
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
      'Bardaklık dipleri, buton çevreleri ve havalandırma kanallarında kemikleşen yapışkan kirler; at kılı detay fırçaları ve yağsız mat koruyucularla ilk günkü kondisyonuna kavuşturulur.',
    beforeImage: '/images/before-after/trim_detail_before.webp',
    afterImage: '/images/before-after/trim_detail_after.webp',
    fullComparisonImage: '/images/before-after/trim_detail_full.webp',
    beforeLabel: 'Önce • Yapışkan Şeker & Kir',
    afterLabel: 'Sonra • Kusursuz Fabrika Matlığı',
    aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
    highlights: [
      {
        icon: Sparkles,
        title: 'Milimetrik Temizlik',
        desc: 'Ulaşılması zor buton dipleri, vites konsolu ve bardaklık yuvaları detay fırçalarıyla arındırılır.',
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

export function BeforeAfterSlider({
  theme,
  detailed = true,
}: BeforeAfterSliderProps) {
  const isCream = theme === 'cream';
  const { segment } = useWorkshopSegment();

  // Aktif segmente ait Before/After uygulamaları (üst filtreden geçiş yapılabilir)
  const availableItems = useMemo(() => {
    return TRANSFORMATIONS.filter((t) => t.vehicleType === segment);
  }, [segment]);

  const [activeTabId, setActiveTabId] = useState<string>(availableItems[0]?.id || '');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Segment değiştiğinde aktif sekmeyi ilk öğeye sıfırla
  useEffect(() => {
    if (availableItems.length > 0) {
      setActiveTabId(availableItems[0].id);
      setSliderPosition(50);
      setIsCaseStudyOpen(false);
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
      className={`transition-colors duration-200 px-4 sm:px-8 border-b ${
        isSectionOpen ? 'py-8 md:py-20' : 'py-4 md:py-20'
      } ${
        isCream
          ? 'bg-[#EFECE6] border-[#686D7A]/15 text-[#111215]'
          : 'bg-[#0C0D10] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı - Mobil Toggle Kartı (< md) */}
        <button
          type="button"
          onClick={() => setIsSectionOpen((prev) => !prev)}
          aria-expanded={isSectionOpen}
          className={`w-full md:hidden mb-4 p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer active:scale-[0.99] ${
            isCream
              ? 'bg-white/80 border-[#686D7A]/20 shadow-xs'
              : 'bg-[#141519] border-white/10 shadow-xs'
          }`}
        >
          <div className="pr-3">
            <h2 className="text-lg font-bold tracking-tight">
              Metal yorulur. Biz dinlendiririz.
            </h2>
            <p className={`text-xs mt-1 line-clamp-1 ${isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'}`}>
              {segment === 'otomobil'
                ? 'Bahçelievler atölyemizde yüzey temizliği ve boya restorasyonu.'
                : 'Motosikletler için tazyiksiz buhar ve grenaj yenileme.'}
            </p>
          </div>
          <div
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
              isCream
                ? 'bg-black/5 border-black/10 text-[#1E3A8A]'
                : 'bg-white/5 border-white/15 text-[#60A5FA]'
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isSectionOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {/* Masaüstü Statik Başlık (md ve üstü) */}
        <div className="hidden md:block text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
            Metal yorulur. Biz dinlendiririz.
          </h2>
          <p
            className={`text-sm sm:text-base mt-3 ${
              isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
            }`}
          >
            {segment === 'otomobil'
              ? 'Bahçelievler atölyemizde tamamlanan yüzey temizliği ve boya yenileme sonuçları. İnteraktif kaydırıcı ile farkı görün.'
              : 'Motosikletler için tazyiksiz kuru buhar ve hassas grenaj yenileme sonuçları.'}
          </p>
        </div>

        {/* Gövde Alanı (Mobilde Açılır-Kapanır, Masaüstünde Her Zaman Açık) */}
        <div className={`${isSectionOpen ? 'block' : 'hidden'} md:block`}>

        {/* Dönüşüm Kategori Sekmeleri (Tactile Mechanical Buttons) */}
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
                  className={`btn-mechanical px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer border ${
                    isActive
                      ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/25'
                      : isCream
                        ? 'bg-white/80 border-[#686D7A]/15 text-[#111215] hover:bg-white'
                        : 'bg-[#141519] border-white/10 text-[#C4C9D0] hover:text-white hover:bg-white/5'
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
            className={`relative w-full ${activeItem.aspectClass} rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border bg-black touch-pan-y ${
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

          {/* Hızlı Karşılaştırma Modu Butonları (Pürüzsüz İnceleme) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5">
            <button
              type="button"
              onClick={() => setSliderPosition(0)}
              className={`btn-mechanical px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs font-semibold border transition cursor-pointer active:scale-95 touch-manipulation select-none ${
                sliderPosition === 0
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-xs'
                  : isCream
                    ? 'bg-white/80 border-black/10 text-zinc-700 hover:text-black'
                    : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Ham Hali (Önce)
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              className={`btn-mechanical px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs font-semibold border transition cursor-pointer active:scale-95 touch-manipulation select-none ${
                sliderPosition === 50
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-xs'
                  : isCream
                    ? 'bg-white/80 border-black/10 text-zinc-700 hover:text-black'
                    : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              ⟺ 50/50 Bölünmüş Kaydırıcı
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(100)}
              className={`btn-mechanical px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs font-semibold border transition cursor-pointer active:scale-95 touch-manipulation select-none ${
                sliderPosition === 100
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-xs'
                  : isCream
                    ? 'bg-white/80 border-black/10 text-zinc-700 hover:text-black'
                    : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Atölye Çıkışı (Sonra)
            </button>
          </div>

          {/* Açıklama Metni */}
          <p
            className={`text-xs sm:text-sm mt-4 text-center max-w-2xl mx-auto leading-relaxed ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            {activeItem.description}
          </p>

          {/* Vaka Kanıtı ve Operasyon Kaydı (Problem → Uygulama → Süre → Sonuç → Alıntı) */}
          {activeItem.caseStudy && (
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setIsCaseStudyOpen(!isCaseStudyOpen)}
                className={`w-full md:hidden flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                  isCream
                    ? 'bg-white border-[#1E3A8A]/25 text-[#0D0D0D]'
                    : 'bg-[#1F2226] border-white/10 text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                  <span>Vaka Raporu & Detay ({activeItem.caseStudy.duration})</span>
                </span>
                <span className="text-[11px] text-[#1E3A8A] dark:text-[#60A5FA]">
                  {isCaseStudyOpen ? 'Kapat ▲' : 'İncele ▼'}
                </span>
              </button>

              <div className={`${isCaseStudyOpen ? 'block' : 'hidden'} md:block mt-2 md:mt-0`}>
                <div
                  className={`p-5 sm:p-6 rounded-2xl border text-left ${
                    isCream
                      ? 'bg-white/95 border-[#1E3A8A]/25 text-[#0D0D0D] shadow-sm'
                      : 'bg-[#1F2226] border-white/10 text-white shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-black/5 dark:border-white/10 gap-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1E3A8A] dark:text-[#60A5FA]">
                        Tamirhane Vaka Kaydı (Gerçek Operasyon)
                      </span>
                      <h4 className="text-base font-black tracking-tight mt-0.5">
                        {activeItem.caseStudy.vehicle}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-[#6C6A6B]">Tamirhane Süresi:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] font-black text-xs">
                        {activeItem.caseStudy.duration}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-[10px] text-[#6C6A6B] block mb-1">
                        01 // Problem
                      </span>
                      <p className={isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'}>
                        {activeItem.caseStudy.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold uppercase tracking-wider text-[10px] text-[#1E3A8A] dark:text-[#60A5FA] block mb-1">
                        02 // Uygulama
                      </span>
                      <p className={isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'}>
                        {activeItem.caseStudy.application}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold uppercase tracking-wider text-[10px] text-[#1FAD4E] block mb-1">
                        03 // Sonuç
                      </span>
                      <p className={isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'}>
                        {activeItem.caseStudy.result}
                      </p>
                    </div>
                  </div>

                  {activeItem.caseStudy.testimonial && (
                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs italic gap-1">
                      <p className={isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}>
                        &ldquo;{activeItem.caseStudy.testimonial.quote}&rdquo;
                      </p>
                      <span className="font-bold not-italic text-[11px] text-[#1E3A8A] dark:text-[#60A5FA] shrink-0">
                        — {activeItem.caseStudy.testimonial.author}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

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
        </div>
      </div>
    </section>
  );
}
