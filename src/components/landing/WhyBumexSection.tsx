'use client';

import React, { useState } from 'react';
import { Award, Clock, Building2, ShieldCheck, ChevronDown, Shield } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface WhyBumexSectionProps {
  theme: LandingTheme;
}

export function WhyBumexSection({ theme }: WhyBumexSectionProps) {
  const isCream = theme === 'cream';
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  return (
    <section
      id="neden-bumex"
      className={`transition-colors duration-200 px-4 sm:px-8 border-b ${
        isSectionOpen ? 'py-8 md:py-16' : 'py-2 md:py-16'
      } ${
        isCream
          ? 'bg-[#F9F7F5] border-[#686D7A]/15 text-[#111215]'
          : 'bg-[#101216] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Mobil Toggle Kartı (< md) */}
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
                Neden BUMEX Garage?
              </h2>
              {isSectionOpen && (
                <p
                  className={`text-xs mt-1 leading-relaxed animate-in fade-in duration-150 ${
                    isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                  }`}
                >
                  Ankara Bahçelievler&apos;de dürüst işçilik, mikron hassasiyeti ve şeffaf atölye kültürü.
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
        <div className="hidden md:block max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] text-xs font-bold mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Bumex Garage Atölye Standartları</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
            Neden BUMEX Garage?
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 leading-relaxed ${
              isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
            }`}
          >
            Ankara Bahçelievler&apos;de dürüst işçilik, mikron hassasiyeti ve şeffaf atölye kültürü.
          </p>
        </div>

        {/* Gövde Alanı (Mobilde Açılır-Kapanır, Masaüstünde Her Zaman Açık) */}
        <div className={`${isSectionOpen ? 'block' : 'hidden'} md:block pt-3 md:pt-0`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-150 ${
                isCream
                  ? 'bg-white border-[#686D7A]/15 shadow-xs'
                  : 'bg-[#141519] border-white/10 shadow-xs'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-3 shadow-sm">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm mb-1.5">Orijinal Ürün Kalitesi</h3>
              <p
                className={`text-xs leading-relaxed ${
                  isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                }`}
              >
                Uygulamalarımızın tamamında global standartlara sahip %100 orijinal ürün grupları tercih edilmektedir.
              </p>
            </div>

            <div
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-150 ${
                isCream
                  ? 'bg-white border-[#686D7A]/15 shadow-xs'
                  : 'bg-[#141519] border-white/10 shadow-xs'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-3 shadow-sm">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm mb-1.5">Zamanında &amp; Hızlı Teslimat</h3>
              <p
                className={`text-xs leading-relaxed ${
                  isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                }`}
              >
                Yoğun çalışma temponuza uyum sağlamak adına randevulu sistemle tam zamanında teslimat garantisi sunulur.
              </p>
            </div>

            <div
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-150 ${
                isCream
                  ? 'bg-white border-[#686D7A]/15 shadow-xs'
                  : 'bg-[#141519] border-white/10 shadow-xs'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-3 shadow-sm">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm mb-1.5">Kurumsal Altyapı &amp; Fatura</h3>
              <p
                className={`text-xs leading-relaxed ${
                  isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                }`}
              >
                Kurumsal iş birliklerine uygun şeffaf, faturalı ve denetlenebilir muhasebe / raporlama altyapımız mevcuttur.
              </p>
            </div>

            <div
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-150 ${
                isCream
                  ? 'bg-white border-[#686D7A]/15 shadow-xs'
                  : 'bg-[#141519] border-white/10 shadow-xs'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-3 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm mb-1.5">Koşulsuz Müşteri Memnuniyeti</h3>
              <p
                className={`text-xs leading-relaxed ${
                  isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                }`}
              >
                Yapılan tüm koruma ve bakım süreçleri merkezimizin müşteri memnuniyeti ve kalite garantisi altındadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
