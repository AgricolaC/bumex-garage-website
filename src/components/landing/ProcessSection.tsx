'use client';

import React from 'react';
import Link from 'next/link';
import {
  ClipboardCheck,
  Search,
  Wrench,
  CheckCircle,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface ProcessSectionProps {
  theme: LandingTheme;
}

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'TESLİM ALMA',
    desc: 'Aracınızı teslim alıyor, mevcut durumunu birlikte kontrol ediyoruz.',
    icon: ClipboardCheck,
  },
  {
    step: '02',
    title: 'KONTROL',
    desc: 'Boya, iç mekân ve aracınızın ihtiyaçlarını inceliyoruz.',
    icon: Search,
  },
  {
    step: '03',
    title: 'UYGULAMA',
    desc: 'Onayladığınız işlemleri kontrollü çalışma alanımızda uyguluyoruz.',
    icon: Wrench,
  },
  {
    step: '04',
    title: 'KONTROL & TESLİM',
    desc: 'Son kontrolü birlikte yapıyor, aracınızı teslim ediyoruz.',
    icon: CheckCircle,
  },
];

export function ProcessSection({ theme }: ProcessSectionProps) {
  const isCream = theme === 'cream';

  return (
    <section
      id="surec"
      className={`py-16 sm:py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${
        isCream
          ? 'bg-[#EFEAE5] border-[#6C6A6B]/20 text-[#0D0D0D]'
          : 'bg-[#15171A] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Bölüm Başlığı */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
              }`}
            >
              Şeffaf ve Güvenilir İş Akışı
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Aracınızı Bize Bırakın.
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 leading-relaxed ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            Bahçelievler işletmemizde teslim aldığımız andan itibaren tüm süreç planlı, kontrollü ve şeffaftır.
          </p>
        </div>

        {/* 4 İnsani Adım Izgarası */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {PROCESS_STEPS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition duration-200 ${
                  isCream
                    ? 'bg-white/95 border-[#6C6A6B]/20'
                    : 'bg-[#1F2226] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#1E3A8A] dark:text-[#60A5FA]">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── KILLER CONVENIENCE SECTION: PARK & WASH ─── */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition duration-200 ${
            isCream
              ? 'bg-white border-[#1E3A8A]/30 text-[#0D0D0D]'
              : 'bg-[#1F2226] border-[#2563EB]/30 text-white'
          }`}
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#1E3A8A] text-white tracking-wider">
                Park &amp; Wash Kolaylığı
              </span>
              <span className="text-xs font-semibold text-[#6C6A6B]">
                Bahçelievler 7. Cadde Yürüme Mesafesi
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Aracınızı bırakın. İşinizi halledin.
            </h3>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Bahçelievler&apos;de park yeri arama derdine son verin. Aracınızı 24/7 kamera gözetimli otoparkımıza bırakın; siz 7. Cadde&apos;deki işlerinizi hallederken biz fırçasız yıkama, iç kuaför veya bakım işlemlerini tamamlayalım.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={`https://wa.me/905524703610?text=${encodeURIComponent(
                'Merhaba Bumex Garage, Park & Wash (aracımı bırakıp yıkama/bakım yaptırmak) için yer ve peron durumu sormak istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#1E3A8A]/25 transition active:scale-95 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ile Randevu Al</span>
            </a>

            <Link
              href="/otopark"
              className={`px-4 py-3 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition text-center ${
                isCream
                  ? 'border-[#6C6A6B]/30 hover:bg-black/5 text-[#0D0D0D]'
                  : 'border-white/15 hover:bg-white/10 text-white'
              }`}
            >
              <span>Otopark Rehberi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
