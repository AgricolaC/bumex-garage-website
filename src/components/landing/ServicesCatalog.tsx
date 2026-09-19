'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Gem,
  Volume2,
  Droplets,
  ShieldCheck,
  Shield,
  Car,
  Sparkles,
  Armchair,
  Wind,
  Atom,
  Wrench,
  Sun,
  Maximize2,
  ChevronRight,
  Bike,
  Settings,
  Truck,
  Layers,
  Flame,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';

interface ServicesCatalogProps {
  theme: LandingTheme;
  onOpenModal: (type: 'motor' | 'detailing') => void;
  detailed?: boolean;
}

type ServiceCategory =
  | 'Boya & Koruma'
  | 'İç Hijyen & İzolasyon'
  | 'Teknik Detay & Cam'
  | 'Motosiklet Detailing'
  | 'Motosiklet Mekanik & Çekici';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: ServiceCategory;
  type: 'car' | 'bike' | 'both';
  icon: React.ElementType;
  modalType?: 'motor' | 'detailing';
  actionType: 'modal' | 'call';
  href?: string;
}

const SERVICES: ServiceItem[] = [
  // ─── OTOMOBİL & BOYA KORUMA ───
  {
    id: 'pasta-cila',
    title: 'Pasta Cila ve Boya Restorasyonu',
    subtitle: 'Mikron boya analizi ve rotary/orbital cila ile kılcal çizik ve harezlerin %95+ giderilmesi.',
    category: 'Boya & Koruma',
    type: 'both',
    icon: Gem,
    modalType: 'detailing',
    actionType: 'modal',
    href: '/hizmetler/pasta-cila',
  },
  {
    id: 'seramik-kaplama',
    title: '9H Nano Seramik Kaplama',
    subtitle: 'Aynasal derinlik, yoğun hidrofobik su iticilik ve 24 aya kadar kimyasal kalkan.',
    category: 'Boya & Koruma',
    type: 'both',
    icon: ShieldCheck,
    modalType: 'detailing',
    actionType: 'modal',
    href: '/hizmetler/seramik-kaplama',
  },
  {
    id: 'ppf-kaplama',
    title: 'PPF Kaplama (Boya Koruma Filmi)',
    subtitle: 'Taş vuruklarına, sürtmelere ve derin çizilmelere karşı kendi kendini yenileyen poliüretan zırh.',
    category: 'Boya & Koruma',
    type: 'both',
    icon: Shield,
    actionType: 'call',
    href: '/hizmetler/ppf-kaplama',
  },
  {
    id: 'wax-uygulamasi',
    title: 'Wax Uygulaması',
    subtitle: 'Doğal karnauba içerikli koruma; boyayı besleyen sıcak ve derin ıslak görünüm.',
    category: 'Boya & Koruma',
    type: 'both',
    icon: Droplets,
    actionType: 'call',
  },

  // ─── İÇ HİJYEN & İZOLASYON ───
  {
    id: 'ses-izolasyonu',
    title: 'Araç İçi Ses İzolasyonu',
    subtitle: 'Taban, kapı ve davlumbaz titreşim sönümleme; yol ve rüzgar uğultusunu kesen akustik yalıtım.',
    category: 'İç Hijyen & İzolasyon',
    type: 'car',
    icon: Volume2,
    actionType: 'call',
  },
  {
    id: 'detayli-kuafor',
    title: 'Detaylı Oto Kuaför & Koltuk Yıkama',
    subtitle: 'Koltuk, tavan ve taban halılarında sıcak ekstraksiyon ve buharlı derinlemesine hijyen.',
    category: 'İç Hijyen & İzolasyon',
    type: 'car',
    icon: Armchair,
    actionType: 'call',
    href: '/hizmetler/detayli-ic-hijyen',
  },
  {
    id: 'buharli-temizlik',
    title: 'Buharlı Araç Temizliği',
    subtitle: 'Kimyasalsız, 140°C kuru buhar ile klima kanalları ve havalandırma menfezlerinin sterilizasyonu.',
    category: 'İç Hijyen & İzolasyon',
    type: 'both',
    icon: Wind,
    actionType: 'call',
  },
  {
    id: 'ozon-temizligi',
    title: 'Ozon Temizliği (Medikal O₃)',
    subtitle: 'Sigara, evcil hayvan ve rutubet kokularını kaynağında yok eden medikal ozonlama.',
    category: 'İç Hijyen & İzolasyon',
    type: 'car',
    icon: Atom,
    actionType: 'call',
  },

  // ─── TEKNİK DETAY & CAM ───
  {
    id: 'motor-temizligi',
    title: 'Motor Temizliği & Dielektrik Koruma',
    subtitle: 'Su değdirmeden, akım iletmeyen dielektrik kimyasallar ve kuru buharla sıfır arıza riski.',
    category: 'Teknik Detay & Cam',
    type: 'car',
    icon: Wrench,
    modalType: 'motor',
    actionType: 'modal',
    href: '/hizmetler/buharli-motor-temizligi',
  },
  {
    id: 'far-temizligi',
    title: 'Far Temizliği & Restorasyonu',
    subtitle: 'Güneşten sararan ve matlaşan polikarbonat far camlarının optik netlikte parlatılması.',
    category: 'Teknik Detay & Cam',
    type: 'both',
    icon: Sun,
    actionType: 'call',
  },
  {
    id: 'ic-dis-yikama',
    title: 'İç-Dış Yıkama',
    subtitle: 'pH nötr aktif köpük, çift kova yöntemi ve mikrofiber kurulama ile çiziksiz temizlik.',
    category: 'Teknik Detay & Cam',
    type: 'car',
    icon: Car,
    actionType: 'call',
  },
  {
    id: 'cilali-yikama',
    title: 'Cilalı Yıkama',
    subtitle: 'Yıkama esnasında hidrofobik polimer cila kaplayarak hızlı su iticilik ve parlaklık kazandırma.',
    category: 'Teknik Detay & Cam',
    type: 'both',
    icon: Sparkles,
    actionType: 'call',
  },
  {
    id: 'cam-filmi',
    title: 'Cam Filmi (Isı & UV Kalkanı)',
    subtitle: 'Kabini güneş ısısından ve zararlı UV ışınlarından koruyan yüksek berraklıktaki filmler.',
    category: 'Teknik Detay & Cam',
    type: 'car',
    icon: Maximize2,
    actionType: 'call',
  },

  // ─── MOTOSİKLET DETAILING & YIKAMA İŞLEMLERİ ───
  {
    id: 'moto-start-paket',
    title: 'Motosiklet Start Paket (Temel Bakım & Yıkama)',
    subtitle: 'Ön yıkama, köpükleme, detaylı dış yıkama, jant ve lastik temizliği, plastik aksam temizliği, kurulama ve lastik parlatma.',
    category: 'Motosiklet Detailing',
    type: 'bike',
    icon: Bike,
    actionType: 'call',
  },
  {
    id: 'moto-pro-paket',
    title: 'Motosiklet Pro Paket (Derin Temizlik & Yenileme)',
    subtitle: 'Start pakete ek; motor & şase detay temizliği, zincir temizlik ve yağlama, fren kaliperleri, plastik bakım, sele ve egzoz temizliği.',
    category: 'Motosiklet Detailing',
    type: 'bike',
    icon: Wind,
    actionType: 'call',
  },
  {
    id: 'moto-premium-detailing',
    title: 'Motosiklet Premium Detailing (Showroom Sıfır Kondisyon)',
    subtitle: 'Pro pakete ek; yüksek detay motor-şase, metal polisaj, kil dekontaminasyonu, boya parlatma, boya koruyucu, pleksi parlatma ve showroom teslimi.',
    category: 'Motosiklet Detailing',
    type: 'bike',
    icon: Gem,
    modalType: 'detailing',
    actionType: 'modal',
  },
  {
    id: 'moto-seramik',
    title: 'Motosiklet 9H Seramik Kaplama',
    subtitle: 'Grenaj, şase, depo ve egzoza yüksek ısıya ve yakıt damlamalarına dayanıklı 9H nanoteknolojik zırh.',
    category: 'Motosiklet Detailing',
    type: 'bike',
    icon: ShieldCheck,
    actionType: 'call',
  },
  {
    id: 'moto-ppf',
    title: 'Motosiklet PPF Kaplama (Boya Koruma Filmi)',
    subtitle: 'Ön kafa, far camı, depo yanları ve diz sürtünme bölgelerine kendini yenileyen şeffaf TPU poliüretan kalkan.',
    category: 'Motosiklet Detailing',
    type: 'bike',
    icon: Shield,
    actionType: 'call',
  },
  {
    id: 'moto-ozel-kaplama',
    title: 'Motosiklet Kişiye Özel Kaplama (Custom Wrap)',
    subtitle: 'Cast folyo ile renk değişimi, mat/saten kaplama, yarış şeritleri ve özel grafik tasarımları.',
    category: 'Motosiklet Detailing',
    type: 'bike',
    icon: Layers,
    actionType: 'call',
  },

  // ─── MOTOSİKLET TAMİR, BAKIM & ÇEKİCİ (BAKIM - ARIZA - TAMİR) ───
  {
    id: 'moto-rutin-bakim',
    title: '1- Rutin & Periyodik Bakım (Bakım)',
    subtitle: 'Motul/Castrol tam sentetik yağ, orijinal filtre, varyatör temizliği & baga/kayış kontrolü, zincir bakımı ve fabrika periyodik kontrolleri.',
    category: 'Motosiklet Mekanik & Çekici',
    type: 'bike',
    icon: Settings,
    actionType: 'call',
  },
  {
    id: 'moto-ariza-onarım',
    title: '2- Mekanik & Elektriksel Arıza Onarımı (Arıza)',
    subtitle: 'Mekanik ses ve kompresyon arıza tespiti, ateşleme & enjeksiyon, marş/şarj tesisatı, fren kaliperi, balata ve debriyaj tamiratı.',
    category: 'Motosiklet Mekanik & Çekici',
    type: 'bike',
    icon: Wrench,
    actionType: 'call',
  },
  {
    id: 'moto-hasar-tamir',
    title: '3- Kaza Sonrası Tamirat & Hasar Onarımı (Tamir)',
    subtitle: 'Kaza hasar onarımı, kırık/çatlak grenajların termo-plastik kaynağı, tırnak onarımı, fırın boya, şasi/maşa doğrultma ve parça temini.',
    category: 'Motosiklet Mekanik & Çekici',
    type: 'bike',
    icon: Shield,
    actionType: 'call',
  },
  {
    id: 'moto-aksesuar-montaj',
    title: 'Motosiklet Aksesuar & Donanım Montajı',
    subtitle: 'Sis farı ve röleli tesisat, motor koruma demiri, koruma takozu, topcase çanta demiri ve kablosuz şarjlı telefon tutucu montajı.',
    category: 'Motosiklet Mekanik & Çekici',
    type: 'bike',
    icon: Sparkles,
    actionType: 'call',
  },
  {
    id: 'moto-cekici-hizmeti',
    title: 'Motosiklet Çekici & Özel Taşıma (Çok Yakında)',
    subtitle: 'Özel ön teker sabitleme beşiği ve 4 noktalı askı aparatlarıyla atölye randevulu bakım ve transfer durumları için hazırlanan taşıma altyapısı.',
    category: 'Motosiklet Mekanik & Çekici',
    type: 'bike',
    icon: Truck,
    actionType: 'call',
  },
];

export function ServicesCatalog({
  theme,
  onOpenModal,
  detailed = true,
}: ServicesCatalogProps) {
  const isCream = theme === 'cream';
  const { segment, whatsappNumber } = useWorkshopSegment();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Segmente göre geçerli temel hizmet listesi
  const segmentServices = useMemo(() => {
    return SERVICES.filter((s) =>
      segment === 'otomobil'
        ? s.type === 'car' || s.type === 'both'
        : s.type === 'bike' || s.type === 'both'
    );
  }, [segment]);

  // Teaser modunda öne çıkarılacak amiral gemisi stüdyo hizmetleri
  const teaserServiceIds = useMemo(() => {
    if (segment === 'otomobil') {
      return ['ppf-kaplama', 'seramik-kaplama', 'pasta-cila', 'buharli-motor', 'detayli-kuafor'];
    }
    return ['moto-ppf', 'moto-seramik', 'moto-pasta-cila', 'moto-detailing'];
  }, [segment]);

  // Segmente özel alt filtre sekmeleri
  const filterCategories = useMemo(() => {
    if (segment === 'otomobil') {
      return [
        { id: 'all', label: 'Tüm Otomobil Hizmetleri' },
        { id: 'Boya & Koruma', label: 'Boya & Seramik' },
        { id: 'İç Hijyen & İzolasyon', label: 'İç Hijyen & Kuaför' },
        { id: 'Teknik Detay & Cam', label: 'Yıkama & Cam & Motor' },
      ];
    }
    return [
      { id: 'all', label: 'Tüm Motosiklet Hizmetleri' },
      { id: 'Motosiklet Detailing', label: 'Detailing & Yıkama' },
      { id: 'Motosiklet Mekanik & Çekici', label: 'Mekanik Servis & Transfer (Yakında)' },
      { id: 'Boya & Koruma', label: 'Boya & Seramik Zırh' },
    ];
  }, [segment]);

  // Segment değiştiğinde filtre kategori kontrolü
  useEffect(() => {
    setSelectedCategory('all');
  }, [segment]);

  const displayedServices = useMemo(() => {
    if (!detailed) {
      return SERVICES.filter((s) => teaserServiceIds.includes(s.id));
    }
    if (selectedCategory === 'all') return segmentServices;
    return segmentServices.filter((s) => s.category === selectedCategory);
  }, [detailed, teaserServiceIds, selectedCategory, segmentServices]);

  return (
    <section
      id="hizmetler"
      className={`py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${
        isCream
          ? 'bg-[#E8E3DF] border-[#6C6A6B]/20 text-[#0D0D0D]'
          : 'bg-[#1B1D20] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı (Segment Odaklı) */}
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
              }`}
            >
              {segment === 'otomobil'
                ? detailed
                  ? 'Resmi Otomobil Hizmet Kartelası & Modüler Servis Tablosu'
                  : 'Stüdyo Amiral Gemisi Hizmetlerimiz'
                : detailed
                  ? 'Resmi Motosiklet Hizmet & Servis Kartelası'
                  : 'Motosiklet Detailing & Bakım Hizmetlerimiz'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            {segment === 'otomobil'
              ? 'Otomobil Detailing, PPF, Boya Koruma & Modüler Servis'
              : 'Motosiklet Detailing, Bakım & Mekanik Servis'}
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 leading-relaxed ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            {segment === 'otomobil'
              ? detailed
                ? 'Bahçelievler stüdyomuzda paket harici tekil ihtiyaçlarınız ve komple stüdyo uygulamalarımız için mikron boya restorasyonu, PPF kaplama, 9H nano seramik, detaylı oto kuaför ve 12+ kalem şeffaf atölye birim hizmetleri.'
                : 'Bahçelievler stüdyomuzda icra edilen en popüler ana hizmetlerimiz. Tüm modüler ve parça bazlı işlemler için detaylı kartelamızı ziyaret edebilirsiniz.'
              : detailed
                ? 'Hassas motosiklet detailing, 9H seramik, periyodik bakım (yağ, filtre, varyatör, zincir), mekanik arıza onarımı ve hazırlık aşamasındaki transfer desteği.'
                : 'Hassas motosiklet detailing, 9H seramik ve grenaj koruma hizmetlerimiz. Tüm servis kalemleri için detaylı kartelayı inceleyin.'}
          </p>
        </div>

        {/* Kategori Filtre Hapları (Yalnızca Detaylı Modda Gösterilir) */}
        {detailed && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {filterCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/25'
                      : isCream
                        ? 'bg-white/80 text-[#565352] border-[#6C6A6B]/20 hover:bg-white hover:text-[#0D0D0D]'
                        : 'bg-[#222529] text-[#9DA3AA] border-white/10 hover:bg-[#2C3035] hover:text-white'
                  }`}
                >
                  {segment === 'motosiklet' && cat.id !== 'all' && (
                    <Flame className="w-3 h-3 inline mr-1 text-amber-500" />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Hizmet Kartelası Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayedServices.map((item) => {
            const Icon = item.icon;
            const isBikeItem = item.type === 'bike';

            return (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition duration-200 group ${
                  isCream
                    ? 'bg-white/85 border-[#6C6A6B]/20 hover:border-[#1E3A8A] hover:shadow-md'
                    : 'bg-[#222529] border-white/10 hover:border-[#2563EB] hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    {/* İkon Rozeti (Daima Royal Blue) */}
                    <div className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm bg-[#1E3A8A] shadow-[#1E3A8A]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      {isBikeItem && (
                        <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                          <Bike className="w-3 h-3" /> Moto
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isCream ? 'bg-black/5 text-[#6C6A6B]' : 'bg-white/5 text-[#80868E]'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold tracking-tight mb-1.5 group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition">
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-xs font-bold hover:underline flex items-center gap-1 text-[#1E3A8A] dark:text-[#60A5FA]"
                    >
                      <span>Detaylı İncele</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : item.actionType === 'modal' && item.modalType ? (
                    <button
                      type="button"
                      onClick={() => onOpenModal(item.modalType!)}
                      className="text-xs font-bold hover:underline flex items-center gap-1 cursor-pointer text-[#1E3A8A] dark:text-[#60A5FA]"
                    >
                      <span>Protokolü Gör</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Merhaba Bumex Garage, ${item.title} hizmeti hakkında bilgi ve randevu almak istiyorum.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold hover:underline flex items-center gap-1 text-[#1E3A8A] dark:text-[#60A5FA]"
                    >
                      <span>Bilgi &amp; Randevu</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaser Modunda Müşteriyi Detaylı Hizmetler Sayfasına Yönlendiren Belirgin Buton */}
        {!detailed && (
          <div className="mt-12 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-sm sm:text-base text-white bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-xl shadow-[#1E3A8A]/30 transition transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span>
                {segment === 'otomobil'
                  ? 'Tüm 25+ Atölye Hizmetini ve Detaylı Servis Tablosunu İncele'
                  : 'Tüm Motosiklet Hizmetlerini ve Servis Tablosunu İncele'}
              </span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p
              className={`text-xs mt-3 max-w-lg mx-auto ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              {segment === 'otomobil'
                ? 'Ses izolasyonu, cam filmi, jant restorasyonu, boyasız göçük ve parça bazlı işlemler için tam kartelayı açın.'
                : 'Periyodik bakım, varyatör, zincir dişli servisi, mekanik onarım ve transfer desteği için tam kartelayı açın.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
