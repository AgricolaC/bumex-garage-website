'use client';

import React from 'react';
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

  return (
    <section
      id="niyet-secici"
      className={`py-10 md:py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${
        isCream
          ? 'bg-[#F2EDE9] border-[#6C6A6B]/20 text-[#0D0D0D]'
          : 'bg-[#181A1D] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı - Anti-Cliché (No Eyebrow Kickers, Calibrated Posture) */}
        <div className="max-w-2xl mb-10 sm:mb-12">
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

        {/* Mobile Snap Carousel (< md) + Desktop Grid (md:) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          {INTENT_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
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
    </section>
  );
}
