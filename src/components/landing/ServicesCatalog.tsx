'use client';

import React, { useState } from 'react';
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
  Phone,
  Bike,
  Settings,
  Truck,
  Layers,
  Flame,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface ServicesCatalogProps {
  theme: LandingTheme;
  onOpenModal: (type: 'motor' | 'detailing') => void;
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
  },
  {
    id: 'ppf-kaplama',
    title: 'PPF Kaplama (Boya Koruma Filmi)',
    subtitle: 'Taş vuruklarına, sürtmelere ve derin çizilmelere karşı kendi kendini yenileyen poliüretan zırh.',
    category: 'Boya & Koruma',
    type: 'both',
    icon: Shield,
    actionType: 'call',
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
    title: '7/24 Motosiklet Çekici & VIP Kurtarma',
    subtitle: 'Özel ön teker sabitleme beşiği ve 4 noktalı yumuşak askı kemerleriyle yolda kalan veya garaja gelemeyen motorlar için güvenli transfer.',
    category: 'Motosiklet Mekanik & Çekici',
    type: 'bike',
    icon: Truck,
    actionType: 'call',
  },
];

export function ServicesCatalog({ theme, onOpenModal }: ServicesCatalogProps) {
  const isCream = theme === 'cream';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'Tüm Hizmetler' },
    { id: 'Motosiklet Detailing', label: 'Motosiklet Detailing' },
    { id: 'Motosiklet Mekanik & Çekici', label: 'Motosiklet Mekanik & Çekici' },
    { id: 'Boya & Koruma', label: 'Boya & Seramik' },
    { id: 'İç Hijyen & İzolasyon', label: 'İç Hijyen & İzolasyon' },
    { id: 'Teknik Detay & Cam', label: 'Yıkama & Cam' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

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
        {/* Başlık Alanı */}
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
              }`}
            >
              Resmi Atölye Hizmet Kartelası
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Uzmanlık Alanlarımız &amp; Hizmetlerimiz
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 leading-relaxed ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            Bahçelievler stüdyomuzda otomobil ve motosikletler için uygulanan profesyonel boya koruma,
            iç hijyen, mekanik bakım, grenaj onarımı ve 7/24 çekici disiplinleri.
          </p>
        </div>

        {/* Kategori Filtre Hapları */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                  isSelected
                    ? isCream
                      ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/25'
                      : 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/40'
                    : isCream
                    ? 'bg-white/80 text-[#565352] border-[#6C6A6B]/20 hover:bg-white hover:text-[#0D0D0D]'
                    : 'bg-[#222529] text-[#9DA3AA] border-white/10 hover:bg-[#2C3035] hover:text-white'
                }`}
              >
                {cat.id.startsWith('Motosiklet') && <Flame className="w-3 h-3 inline mr-1 text-amber-500" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Hizmet Kartelası Tablosu / Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredServices.map((item) => {
            const Icon = item.icon;
            const isBikeRelated = item.type === 'bike' || item.category.startsWith('Motosiklet');

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
                    {/* Yuvarlak Koyu Kraliyet Mavisi Rozet İkon */}
                    <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#1E3A8A]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      {isBikeRelated && (
                        <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                          <Bike className="w-3 h-3" /> Motor
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
                  {item.actionType === 'modal' && item.modalType ? (
                    <button
                      type="button"
                      onClick={() => onOpenModal(item.modalType!)}
                      className="text-xs font-bold text-[#1E3A8A] dark:text-[#60A5FA] hover:underline flex items-center gap-1"
                    >
                      <span>Protokolü Gör</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href="tel:05524703610"
                      className="text-xs font-bold text-[#1E3A8A] dark:text-[#60A5FA] hover:underline flex items-center gap-1"
                    >
                      <span>Bilgi &amp; Randevu</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href="tel:05524703610"
                    className={`p-1.5 rounded-lg border transition ${
                      isCream
                        ? 'border-[#6C6A6B]/20 text-[#6C6A6B] hover:text-[#1E3A8A] hover:border-[#1E3A8A]'
                        : 'border-white/10 text-[#80868E] hover:text-white hover:border-white/30'
                    }`}
                    title="Hemen Ara: 0552 470 36 10"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
