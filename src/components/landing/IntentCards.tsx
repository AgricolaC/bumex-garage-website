'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Droplets,
  Armchair,
  Shield,
  Sparkles,
  Bike,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface IntentCardsProps {
  theme: LandingTheme;
}

interface IntentItem {
  id: string;
  step: string;
  title: string;
  desc: string;
  subtext: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const INTENT_ITEMS: IntentItem[] = [
  {
    id: 'yikama',
    step: '01',
    title: 'YIKAMA',
    desc: 'Aracınızı temiz ve bakımlı tutun.',
    subtext: 'Fırçasız yıkama · hızlı bakım',
    href: '#fiyatlar',
    icon: Droplets,
  },
  {
    id: 'detailing',
    step: '02',
    title: 'DETAILING',
    desc: 'İç mekânda derin temizlik.',
    subtext: 'Buhar · ekstraksiyon · hijyen',
    href: '/hizmetler/detayli-ic-hijyen',
    icon: Armchair,
  },
  {
    id: 'koruma',
    step: '03',
    title: 'KORUMA',
    desc: 'Boyanızı günlük kullanımdan koruyun.',
    subtext: 'PPF kaplama · seramik koruma',
    href: '/hizmetler/ppf-kaplama',
    icon: Shield,
  },
  {
    id: 'restorasyon',
    step: '04',
    title: 'RESTORASYON',
    desc: 'Yıpranmış yüzeyi yeniden canlandırın.',
    subtext: 'Boya düzeltme · pasta cila',
    href: '/hizmetler/boya-restorasyonu',
    icon: Sparkles,
  },
  {
    id: 'motosiklet',
    step: '05',
    title: 'MOTOSİKLET',
    desc: 'Motosikletiniz için bakım ve servis.',
    subtext: 'Yıkama · zincir · mekanik bakım',
    href: '/motosiklet',
    icon: Bike,
    badge: 'Özel Tamirhane',
  },
  {
    id: 'otopark',
    step: '06',
    title: 'OTOPARK',
    desc: 'Aracınızı güvenle bırakın.',
    subtext: '24/7 kamera · Park & Wash',
    href: '/otopark',
    icon: ShieldCheck,
    badge: '7. Cadde Yürüme Mesafesi',
  },
];

export function IntentCards({ theme }: IntentCardsProps) {
  const isCream = theme === 'cream';
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  return (
    <section
      id="niyet-secici"
      className={`transition-colors duration-200 px-4 sm:px-8 border-b ${
        isSectionOpen ? 'py-8 md:py-20' : 'py-2 md:py-20'
      } ${
        isCream
          ? 'bg-[#F2EDE9] border-[#6C6A6B]/20 text-[#0D0D0D]'
          : 'bg-[#181A1D] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı - Mobil Toggle Kartı (< md) */}
        <button
          type="button"
          onClick={() => setIsSectionOpen((prev) => !prev)}
          aria-expanded={isSectionOpen}
          className={`w-full md:hidden my-1 p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer active:scale-[0.985] ${
            isCream
              ? 'bg-gradient-to-r from-white via-[#FAF7F2] to-[#F2EDE4] border-[#686D7A]/25 text-[#111215] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.9)] hover:border-[#1E3A8A]/40'
              : 'bg-gradient-to-r from-[#17191E] via-[#1C1F26] to-[#14161A] border-white/12 text-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:border-[#2563EB]/40'
          }`}
        >
          <div className="flex items-center gap-2.5 flex-1 pr-2 min-w-0">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                isSectionOpen
                  ? 'bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)]'
                  : isCream
                    ? 'bg-black/30'
                    : 'bg-white/30'
              }`}
            />
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-bold tracking-tight truncate">
                Neye ihtiyacın olduğunu en iyi aracın bilir.
              </h2>
              {isSectionOpen && (
                <p
                  className={`text-xs mt-1 leading-relaxed animate-in fade-in duration-150 ${
                    isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                  }`}
                >
                  Otomobil ve motosikletiniz için doğrudan ihtiyaca yönelik net çözümler.
                </p>
              )}
            </div>
          </div>
          <div
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
              isSectionOpen
                ? isCream
                  ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white shadow-sm'
                  : 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm shadow-[#2563EB]/30'
                : isCream
                  ? 'bg-black/5 border-black/10 text-[#1E3A8A]'
                  : 'bg-white/5 border-white/10 text-[#60A5FA]'
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
        <div className="hidden md:block max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
            Neye ihtiyacın olduğunu en iyi aracın bilir.
          </h2>
          <p
            className={`text-sm sm:text-base mt-3 leading-relaxed ${
              isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
            }`}
          >
            Gereksiz işlemler ve şişirilmiş maliyetler yok. Bahçelievler atölyemizde otomobil ve motosikletiniz için doğrudan ihtiyaca yönelik net çözümler.
          </p>
        </div>

        {/* Gövde Alanı (Mobilde Açılır-Kapanır, Masaüstünde Her Zaman Açık) */}
        <div className={`${isSectionOpen ? 'block' : 'hidden'} md:block pt-3 md:pt-0`}>

        {/* Mobile Snap Carousel (< md) + Desktop Grid (md:) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          {INTENT_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={
                  item.href === '#fiyatlar'
                    ? () => {
                        if (typeof window !== 'undefined') {
                          window.dispatchEvent(new CustomEvent('open-price-card'));
                        }
                      }
                    : undefined
                }
                className={`btn-mechanical group snap-start shrink-0 w-[78vw] max-w-[280px] md:w-auto p-4 sm:p-6 rounded-2xl border flex flex-col justify-between transition-all duration-150 ${
                  isCream
                    ? 'bg-white border-[#686D7A]/15 hover:border-[#1E3A8A] hover:shadow-lg'
                    : 'bg-[#141519] border-white/10 hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#1E3A8A]/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#1E3A8A] dark:text-[#60A5FA]">
                      {item.step} // {item.title}
                    </span>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] border border-[#1E3A8A]/20">
                          {item.badge}
                        </span>
                      )}
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-150">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base font-semibold tracking-tight mb-1 group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition-colors">
                    {item.desc}
                  </h3>

                  <p
                    className={`text-xs ${
                      isCream ? 'text-[#686D7A]' : 'text-[#8E94A0]'
                    }`}
                  >
                    {item.subtext}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-3.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>İncele</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tüm Hizmetler Kartelası Linki */}
        <div className="mt-8 text-center sm:text-right">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline text-[#1E3A8A] dark:text-[#60A5FA]"
          >
            <span>Tüm modüler hizmet ve parça kartelasını görüntüle (25+ Kalem)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
