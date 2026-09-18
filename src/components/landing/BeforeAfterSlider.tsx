'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ShieldCheck, Zap, Layers, Columns2, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

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
    tabLabel: 'Motosiklet Detailing',
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
    id: 'motor-kompartmani',
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

export function BeforeAfterSlider({ theme }: BeforeAfterSliderProps) {
  const isCream = theme === 'cream';
  const [activeTabId, setActiveTabId] = useState<string>(TRANSFORMATIONS[0].id);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = TRANSFORMATIONS.find((t) => t.id === activeTabId) || TRANSFORMATIONS[0];

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B1418]/10 text-[#6B1418] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gerçek Atölye Uygulamaları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
            Gözle Görülür Dönüşüm: Öncesi ve Sonrası
          </h2>
          <p
            className={`text-sm sm:text-base mt-3 ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            Bahçelievler atölyemizde tamamlanan gerçek araç uygulamalarını inceleyin. İnteraktif kaydırıcı ile
            mikron seviyesindeki temizlik ve restorasyon farkına tanık olun.
          </p>
        </div>

        {/* Dönüşüm Kategori Sekmeleri */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {TRANSFORMATIONS.map((item) => {
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
                    ? 'bg-[#6B1418] text-white border-[#6B1418] shadow-md shadow-[#6B1418]/25'
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

        {/* Aktif Uygulama Detay Başlığı & Görünüm Modu Değiştirici */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6B1418]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B1418]">
                {activeItem.badge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {activeItem.title}
            </h3>
          </div>

          {/* Görünüm Seçici Butonları */}
          <div
            className={`inline-flex items-center p-1 rounded-xl border text-xs font-bold self-start sm:self-auto ${
              isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
            }`}
          >
            <button
              onClick={() => setViewMode('slider')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[#6B1418] text-white shadow-xs'
                  : isCream
                  ? 'text-[#565352] hover:text-[#0D0D0D]'
                  : 'text-[#9DA3AA] hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Kaydırıcı</span>
            </button>
            <button
              onClick={() => setViewMode('sideBySide')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                viewMode === 'sideBySide'
                  ? 'bg-[#6B1418] text-white shadow-xs'
                  : isCream
                  ? 'text-[#565352] hover:text-[#0D0D0D]'
                  : 'text-[#9DA3AA] hover:text-white'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>Yan Yana Fotoğraf</span>
            </button>
          </div>
        </div>

        {/* Görsel Vitrin Alanı */}
        <div className="relative max-w-4xl mx-auto">
          {viewMode === 'slider' ? (
            /* 1. İnteraktif Karşılaştırma Kaydırıcısı */
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

              {/* Bölücü Çizgi */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-[#6B1418] pointer-events-none shadow-[0_0_14px_rgba(107,20,24,0.9)]"
                style={{ left: `${sliderPosition}%` }}
              />

              {/* Tutamaç (Handle) */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#6B1418] text-white flex items-center justify-center font-black text-sm shadow-2xl border-2 border-white pointer-events-none z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <span className="tracking-tighter select-none">⟺</span>
              </div>

              {/* Sol ve Sağ Etiketler */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-[11px] font-extrabold tracking-wider backdrop-blur-md border border-white/15 shadow">
                  {activeItem.afterLabel}
                </span>
              </div>
              <div className="absolute top-3.5 right-3.5 z-10">
                <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-[11px] font-extrabold tracking-wider backdrop-blur-md border border-white/15 shadow">
                  {activeItem.beforeLabel}
                </span>
              </div>

              {/* Alt İpucu Rozeti */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/75 text-white/90 text-[10px] font-semibold tracking-wide backdrop-blur-sm">
                  Farkı görmek için kaydırıcıyı sürükleyin ↔
                </span>
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
          ) : (
            /* 2. Yan Yana Gerçek Atölye Fotoğrafı Görünümü */
            <div
              className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border bg-black ${
                isCream ? 'border-[#6C6A6B]/30 shadow-black/10' : 'border-white/10 shadow-black/60'
              }`}
            >
              <img
                src={activeItem.fullComparisonImage}
                alt={`${activeItem.title} - Gerçek Atölye Öncesi ve Sonrası`}
                className="w-full h-auto max-h-[640px] object-contain mx-auto"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg bg-black/85 text-white text-xs font-bold backdrop-blur-md border border-white/15">
                  📷 Atölye İçi Ham Karşılaştırma Fotoğrafı
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#6B1418] text-white text-xs font-extrabold shadow">
                  Bumex Garage Bahçelievler
                </span>
              </div>
            </div>
          )}

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
                  <Icon className="w-5 h-5 text-[#6B1418] shrink-0 mt-0.5" />
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
    </section>
  );
}
