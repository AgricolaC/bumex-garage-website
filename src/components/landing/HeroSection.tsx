'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Gem,
  Zap,
  Droplets,
  Car,
  Bike,
  Play,
  Pause,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { WORKSHOP_PILLARS, WorkshopPillarId, WorkshopPillar } from './heroPillars';

interface HeroSectionProps {
  theme: LandingTheme;
}

const TAB_ICONS: Record<WorkshopPillar['iconName'], React.ElementType> = {
  Gem,
  ShieldCheck,
  Zap,
  Droplets,
  Car,
  Bike,
};

export function HeroSection({ theme }: HeroSectionProps) {
  const isCream = theme === 'cream';

  const [activePillarId, setActivePillarId] = useState<WorkshopPillarId>('mikron');
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTemporarilyPaused, setIsTemporarilyPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activePillar =
    WORKSHOP_PILLARS.find((p) => p.id === activePillarId) ?? WORKSHOP_PILLARS[0];

  // Sonraki sütuna geçiş fonksiyonu
  const advancePillar = useCallback(() => {
    setActivePillarId((currentId) => {
      const currentIndex = WORKSHOP_PILLARS.findIndex((p) => p.id === currentId);
      const nextIndex = (currentIndex + 1) % WORKSHOP_PILLARS.length;
      return WORKSHOP_PILLARS[nextIndex].id;
    });
  }, []);

  // Kullanıcı etkileşimi (tıklama): Geçici olarak otomatik geçişi duraklat
  const handleSelectPillar = (id: WorkshopPillarId) => {
    setActivePillarId(id);
    setIsTemporarilyPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    // Kullanıcı bir sekmeye tıkladıktan 15 saniye sonra otomatik akışa devam et
    pauseTimeoutRef.current = setTimeout(() => {
      setIsTemporarilyPaused(false);
    }, 15000);
  };

  // WCAG 2.2.2 Pause/Play tetikleyicisi
  const handleTogglePause = () => {
    if (isUserPaused) {
      setIsUserPaused(false);
    } else {
      setIsUserPaused(true);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
      setIsTemporarilyPaused(false);
    }
  };

  // 7 saniyede bir ambient dikey akış (Kullanıcı duraklatmadığı, hover etmediği veya sekmeye tıklamadığı sürece)
  useEffect(() => {
    if (isUserPaused || isHovered || isTemporarilyPaused) return;

    const interval = setInterval(() => {
      advancePillar();
    }, 7000);

    return () => clearInterval(interval);
  }, [isUserPaused, isHovered, isTemporarilyPaused, advancePillar]);

  // Bileşen unmount temizliği
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`relative min-h-[82vh] flex items-center px-4 sm:px-8 py-12 sm:py-16 border-b transition-colors duration-200 ${
        isCream ? 'border-[#6C6A6B]/20' : 'border-white/10'
      }`}
      style={{
        background: isCream
          ? 'radial-gradient(circle at 72% 35%, rgba(107, 20, 24, 0.08) 0%, rgba(232, 227, 223, 0.95) 65%), #E8E3DF'
          : 'radial-gradient(circle at 72% 35%, rgba(107, 20, 24, 0.22) 0%, rgba(27, 29, 32, 0.98) 65%), #1B1D20',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-4xl mx-auto w-full">
          {/* Konum Rozeti */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B1418]" />
            <span
              className={`text-xs font-bold tracking-wider ${
                isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
              }`}
            >
              Bahçelievler, Çankaya — Ankara • 7. Cadde&apos;ye 350m
            </span>
          </div>

          {/* Model B: İnteraktif Atölye Protokol Sekmeleri (Pill Switcher & Play/Pause) */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none"
              role="tablist"
              aria-label="Bumex Garage Atölye Uzmanlıkları"
            >
              {WORKSHOP_PILLARS.map((pillar) => {
                const Icon = TAB_ICONS[pillar.iconName];
                const isSelected = pillar.id === activePillar.id;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectPillar(pillar.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                      isSelected
                        ? isCream
                          ? 'bg-[#6B1418] text-white border-[#6B1418] shadow-md shadow-[#6B1418]/25 scale-105'
                          : 'bg-[#6B1418] text-white border-[#6B1418] shadow-md shadow-[#6B1418]/40 scale-105'
                        : isCream
                          ? 'bg-white/80 text-[#565352] border-[#6C6A6B]/25 hover:bg-white hover:text-[#0D0D0D]'
                          : 'bg-[#222529]/80 text-[#9DA3AA] border-white/10 hover:bg-[#2A2E34] hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{pillar.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* WCAG 2.2.2 Pause/Play Kontrol Butonu */}
            <button
              type="button"
              onClick={handleTogglePause}
              aria-label={isUserPaused ? 'Otomatik geçişi başlat' : 'Otomatik geçişi duraklat'}
              title={isUserPaused ? 'Otomatik geçişi başlat' : 'Otomatik geçişi duraklat'}
              className={`p-1.5 rounded-full border transition shrink-0 ${
                isCream
                  ? 'bg-white/80 border-[#6C6A6B]/25 text-[#565352] hover:bg-white hover:text-[#0D0D0D]'
                  : 'bg-[#222529]/80 border-white/10 text-[#9DA3AA] hover:bg-[#2A2E34] hover:text-white'
              }`}
            >
              {isUserPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Model A: Dinamik Morfolojik H1 Başlık (CLS Korumalı Sabit Min-Yükseklik) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] mb-5 min-h-[8.5rem] sm:min-h-[7rem] lg:min-h-[6.5rem] flex flex-col justify-start">
            <span className={isCream ? 'text-[#0D0D0D]' : 'text-white'}>
              Otomobil ve Motosiklette{' '}
            </span>
            <span
              key={activePillar.id}
              className="text-[#6B1418] inline-block animate-in fade-in slide-in-from-bottom-2 duration-300 underline decoration-[#6B1418]/30 decoration-4 underline-offset-8"
            >
              {activePillar.headline}
            </span>
          </h1>

          {/* Dinamik Alt Metin (CLS Korumalı Sabit Min-Yükseklik) */}
          <p
            key={`sub-${activePillar.id}`}
            className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl min-h-[6.5rem] sm:min-h-[5.5rem] lg:min-h-[4.5rem] transition-opacity animate-in fade-in duration-300 ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            {activePillar.subtitle}
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
              href={`https://wa.me/905524703610?text=${encodeURIComponent(activePillar.whatsappMessage)}`}
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

          {/* Müşteri İçin Gerçekten Önem Taşıyan 3 Kalıcı Güvence */}
          <div
            className={`grid sm:grid-cols-3 gap-3.5 pt-6 border-t ${
              isCream ? 'border-[#6C6A6B]/20' : 'border-white/10'
            }`}
          >
            {/* Güvence 1 */}
            <div
              className={`p-3.5 rounded-xl border transition-colors ${
                activePillar.id === 'buhar'
                  ? 'ring-2 ring-[#6B1418] bg-[#6B1418]/5'
                  : ''
              } ${
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
              className={`p-3.5 rounded-xl border transition-colors ${
                activePillar.id === 'mikron' || activePillar.id === 'motosiklet'
                  ? 'ring-2 ring-[#6B1418] bg-[#6B1418]/5'
                  : ''
              } ${
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
              className={`p-3.5 rounded-xl border transition-colors ${
                activePillar.id === 'yikama'
                  ? 'ring-2 ring-[#6B1418] bg-[#6B1418]/5'
                  : ''
              } ${
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
      </section>
  );
}
