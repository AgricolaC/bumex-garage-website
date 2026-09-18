'use client';

import React from 'react';
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
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface ServicesCatalogProps {
  theme: LandingTheme;
  onOpenModal: (type: 'motor' | 'detailing') => void;
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Boya & Koruma' | 'İç Hijyen & İzolasyon' | 'Teknik Detay & Cam';
  icon: React.ElementType;
  modalType?: 'motor' | 'detailing';
  actionType: 'modal' | 'call';
}

const SERVICES: ServiceItem[] = [
  // Boya & Koruma
  {
    id: 'pasta-cila',
    title: 'Pasta-Cila ve Boya Koruma',
    subtitle: 'Mikron boya analizi ile kılcal çizik ve harezlerin %95+ giderilmesi.',
    category: 'Boya & Koruma',
    icon: Gem,
    modalType: 'detailing',
    actionType: 'modal',
  },
  {
    id: 'seramik-kaplama',
    title: '9H Seramik Kaplama',
    subtitle: 'Aynasal derinlik, yoğun hidrofobik su iticilik ve 24 aya kadar kimyasal kalkan.',
    category: 'Boya & Koruma',
    icon: ShieldCheck,
    modalType: 'detailing',
    actionType: 'modal',
  },
  {
    id: 'ppf-kaplama',
    title: 'PPF Kaplama (Boya Koruma Filmi)',
    subtitle: 'Taş vuruklarına, sürtmelere ve derin çizilmelere karşı kendi kendini yenileyen poliüretan zırh.',
    category: 'Boya & Koruma',
    icon: Shield,
    actionType: 'call',
  },
  {
    id: 'wax-uygulamasi',
    title: 'Wax Uygulaması',
    subtitle: 'Doğal karnauba içerikli koruma; boyayı besleyen sıcak ve derin ıslak görünüm.',
    category: 'Boya & Koruma',
    icon: Droplets,
    actionType: 'call',
  },

  // İç Hijyen & İzolasyon
  {
    id: 'ses-izolasyonu',
    title: 'Araç İçi Ses İzolasyonu',
    subtitle: 'Taban, kapı ve davlumbaz titreşim sönümleme; yol ve rüzgar uğultusunu kesen akustik yalıtım.',
    category: 'İç Hijyen & İzolasyon',
    icon: Volume2,
    actionType: 'call',
  },
  {
    id: 'detayli-kuafor',
    title: 'Detaylı Araç İçi Kuaför',
    subtitle: 'Koltuk, tavan ve taban halılarında sıcak ekstraksiyonlu leke ve kir arındırma.',
    category: 'İç Hijyen & İzolasyon',
    icon: Armchair,
    actionType: 'call',
  },
  {
    id: 'buharli-temizlik',
    title: 'Buharlı Araç Temizliği',
    subtitle: 'Kimyasalsız, 140°C kuru buhar ile klima kanalları ve havalandırma menfezlerinin sterilizasyonu.',
    category: 'İç Hijyen & İzolasyon',
    icon: Wind,
    actionType: 'call',
  },
  {
    id: 'ozon-temizligi',
    title: 'Ozon Temizliği (O₃)',
    subtitle: 'Sigara, evcil hayvan ve rutubet kokularını kaynağında yok eden medikal ozonlama.',
    category: 'İç Hijyen & İzolasyon',
    icon: Atom,
    actionType: 'call',
  },

  // Teknik Detay & Cam
  {
    id: 'motor-temizligi',
    title: 'Motor Temizliği & Koruma',
    subtitle: 'Su değdirmeden, akım iletmeyen dielektrik kimyasallar ve kuru buharla sıfır arıza riski.',
    category: 'Teknik Detay & Cam',
    icon: Wrench,
    modalType: 'motor',
    actionType: 'modal',
  },
  {
    id: 'far-temizligi',
    title: 'Far Temizliği & Restorasyonu',
    subtitle: 'Güneşten sararan ve matlaşan polikarbonat far camlarının optik netlikte zımpara ve kloroformla parlatılması.',
    category: 'Teknik Detay & Cam',
    icon: Sun,
    actionType: 'call',
  },
  {
    id: 'cam-filmi',
    title: 'Cam Filmi (Isı & UV Kalkanı)',
    subtitle: 'Kabini güneş ısısından ve zararlı UV ışınlarından koruyan yüksek berraklıktaki filmler.',
    category: 'Teknik Detay & Cam',
    icon: Maximize2,
    actionType: 'call',
  },
  {
    id: 'ic-dis-yikama',
    title: 'İç-Dış Yıkama',
    subtitle: 'pH nötr aktif köpük, çift kova yöntemi ve mikrofiber kurulama ile çiziksiz temizlik.',
    category: 'Teknik Detay & Cam',
    icon: Car,
    actionType: 'call',
  },
  {
    id: 'cilali-yikama',
    title: 'Cilalı Yıkama',
    subtitle: 'Yıkama esnasında hidrofobik polimer cila kaplayarak hızlı su iticilik ve parlaklık kazandırma.',
    category: 'Teknik Detay & Cam',
    icon: Sparkles,
    actionType: 'call',
  },
];

export function ServicesCatalog({ theme, onOpenModal }: ServicesCatalogProps) {
  const isCream = theme === 'cream';

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
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B1418]" />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
              }`}
            >
              Resmi Atölye Hizmet Kartelası
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Uzmanlık Alanlarımız
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 leading-relaxed ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            Bahçelievler atölyemizde otomobil ve motosikletler için uygulanan 13 resmi bakım ve
            restorasyon disiplini.
          </p>
        </div>

        {/* Hizmet Kartelası Tablosu / Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition duration-200 group ${
                  isCream
                    ? 'bg-white/80 border-[#6C6A6B]/20 hover:border-[#6B1418] hover:shadow-md'
                    : 'bg-[#222529] border-white/10 hover:border-[#881B22] hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    {/* Yuvarlak Bordo Rozet İkon (Görsel 2'deki tasarım) */}
                    <div className="w-10 h-10 rounded-full bg-[#6B1418] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#6B1418]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isCream ? 'bg-black/5 text-[#6C6A6B]' : 'bg-white/5 text-[#80868E]'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight mb-1.5 group-hover:text-[#6B1418] transition">
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
                      className="text-xs font-bold text-[#6B1418] hover:underline flex items-center gap-1"
                    >
                      <span>Protokolü Gör</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href="tel:05524703610"
                      className="text-xs font-bold text-[#6B1418] hover:underline flex items-center gap-1"
                    >
                      <span>Bilgi & Randevu</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href="tel:05524703610"
                    className={`p-1.5 rounded-lg border transition ${
                      isCream
                        ? 'border-[#6C6A6B]/20 text-[#6C6A6B] hover:text-[#6B1418] hover:border-[#6B1418]'
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
