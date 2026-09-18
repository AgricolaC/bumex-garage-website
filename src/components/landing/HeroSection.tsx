'use client';

import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { HeroVisualCard } from './HeroVisualCard';

interface HeroSectionProps {
  theme: LandingTheme;
}

export function HeroSection({ theme }: HeroSectionProps) {
  const isCream = theme === 'cream';

  return (
    <section
      className={`relative min-h-[80vh] flex items-center px-4 sm:px-8 py-14 sm:py-18 border-b transition-colors duration-200 ${
        isCream ? 'border-[#6C6A6B]/20' : 'border-white/10'
      }`}
      style={{
        background: isCream
          ? 'radial-gradient(circle at 72% 35%, rgba(107, 20, 24, 0.08) 0%, rgba(232, 227, 223, 0.95) 65%), #E8E3DF'
          : 'radial-gradient(circle at 72% 35%, rgba(107, 20, 24, 0.22) 0%, rgba(27, 29, 32, 0.98) 65%), #1B1D20',
      }}
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Sol Metin Kolonu */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B1418]" />
            <span
              className={`text-xs font-bold tracking-wider ${
                isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
              }`}
            >
              Bahçelievler, Çankaya — Ankara
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] mb-5">
            Otomobil & Motosiklet Boyasını{' '}
            <span className="underline decoration-[#6B1418] decoration-4 underline-offset-8">
              Kusursuzlaştıran
            </span>{' '}
            Zanaat.
          </h1>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            Alelade bir oto yıkama değil; aracınızın ve motosikletinizin ilk günkü fabrika
            derinliğine kavuştuğu, mikron seviyesinde boya düzeltme, 9H seramik, PPF kaplama ve ses
            izolasyonu atölyesi.
          </p>

          {/* Aksiyon Butonları */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="tel:05524703610"
              className="inline-flex items-center gap-2.5 bg-[#6B1418] hover:bg-[#841920] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-3.5 rounded shadow-lg shadow-[#6B1418]/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Arayın: 0552 470 36 10</span>
            </a>

            <a
              href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20arac%C4%B1m%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-3.5 rounded border transition ${
                isCream
                  ? 'border-[#6C6A6B]/30 hover:bg-black/5 text-[#0D0D0D]'
                  : 'border-white/15 hover:bg-white/5 text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#1FAD4E]" />
              <span>WhatsApp ile Danışın</span>
            </a>
          </div>

          {/* Müşteri İçin Gerçekten Önem Taşıyan Güvenceler (Pillars that Matter) */}
          <div
            className={`grid sm:grid-cols-3 gap-3.5 pt-6 border-t ${
              isCream ? 'border-[#6C6A6B]/20' : 'border-white/10'
            }`}
          >
            {/* Güvence 1 */}
            <div
              className={`p-3.5 rounded-xl border ${
                isCream
                  ? 'bg-white/85 border-[#6C6A6B]/25 text-[#0D0D0D] shadow-xs'
                  : 'bg-[#222529]/80 border-white/10 text-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6B1418] shrink-0" />
                <h4 className="text-xs font-black tracking-tight">Sıfır Su Hasarı Riski</h4>
              </div>
              <p
                className={`text-[11px] leading-relaxed ${
                  isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'
                }`}
              >
                Dielektrik yalıtkan kimyasal ve 140°C kuru buhar; elektronik soket ve beyin arıza riski sıfır.
              </p>
            </div>

            {/* Güvence 2 */}
            <div
              className={`p-3.5 rounded-xl border ${
                isCream
                  ? 'bg-white/85 border-[#6C6A6B]/25 text-[#0D0D0D] shadow-xs'
                  : 'bg-[#222529]/80 border-white/10 text-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0" />
                <h4 className="text-xs font-black tracking-tight">Vernik Koruma Analizi</h4>
              </div>
              <p
                className={`text-[11px] leading-relaxed ${
                  isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'
                }`}
              >
                Boya inceltilmez; dijital mikron ölçümüyle fabrika verniği riske atılmadan harezler giderilir.
              </p>
            </div>

            {/* Güvence 3 */}
            <div
              className={`p-3.5 rounded-xl border ${
                isCream
                  ? 'bg-white/85 border-[#6C6A6B]/25 text-[#0D0D0D] shadow-xs'
                  : 'bg-[#222529]/80 border-white/10 text-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#6B1418] shrink-0" />
                <h4 className="text-xs font-black tracking-tight">pH Nötr & Çiziksiz</h4>
              </div>
              <p
                className={`text-[11px] leading-relaxed ${
                  isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'
                }`}
              >
                Kostiksiz aktif kar köpüğü, çift kova grit-guard ve saf mikrofiber ile sıfır yıkama çiziği.
              </p>
            </div>
          </div>
        </div>

        {/* Sağ Görsel Kolonu */}
        <div className="lg:col-span-5">
          <HeroVisualCard theme={theme} />
        </div>
      </div>
    </section>
  );
}
