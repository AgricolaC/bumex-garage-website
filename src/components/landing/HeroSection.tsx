'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
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
  Volume2,
  VolumeX,
  PlayCircle,
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
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activePillar =
    WORKSHOP_PILLARS.find((p) => p.id === activePillarId) ?? WORKSHOP_PILLARS[0];
  const activeIndex = WORKSHOP_PILLARS.findIndex((p) => p.id === activePillar.id);

  // Motosiklet detailing seçildiğinde 3 kartın tamamı vurgulanır
  const isCard1Active = activePillar.id === 'buhar' || activePillar.id === 'motosiklet';
  const isCard2Active = activePillar.id === 'mikron' || activePillar.id === 'motosiklet';
  const isCard3Active = activePillar.id === 'yikama' || activePillar.id === 'motosiklet';

  // Sonraki sütuna geçiş fonksiyonu
  const advancePillar = useCallback(() => {
    setActivePillarId((currentId) => {
      const currentIndex = WORKSHOP_PILLARS.findIndex((p) => p.id === currentId);
      const nextIndex = (currentIndex + 1) % WORKSHOP_PILLARS.length;
      return WORKSHOP_PILLARS[nextIndex].id;
    });
  }, []);

  // Kullanıcı etkileşimi: Geçici olarak otomatik geçişi duraklat
  const handleSelectPillar = (id: WorkshopPillarId) => {
    setActivePillarId(id);
    setIsTemporarilyPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsTemporarilyPaused(false);
    }, 15000);
  };

  // WCAG 2.2.2 Pause/Play tetikleyicisi
  const handleTogglePause = () => {
    if (isUserPaused) {
      setIsUserPaused(false);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      setIsUserPaused(true);
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
      setIsTemporarilyPaused(false);
    }
  };

  // Ses Aç/Kapat tetikleyicisi
  const handleToggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (videoRef.current) {
        videoRef.current.muted = next;
      }
      return next;
    });
  };

  // 7 saniyede bir ambient dikey akış
  useEffect(() => {
    if (isUserPaused || isHovered || isTemporarilyPaused) return;

    const interval = setInterval(() => {
      advancePillar();
    }, 7000);

    return () => clearInterval(interval);
  }, [isUserPaused, isHovered, isTemporarilyPaused, advancePillar]);

  // Video kaynağı veya durum değiştiğinde oynatmayı koru
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isUserPaused) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [activePillar.id, isMuted, isUserPaused]);

  // Temizlik
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const scrollToWorkshopVideo = () => {
    const el = document.getElementById('workshop-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      className="relative min-h-[88vh] lg:min-h-[94vh] flex items-center overflow-hidden border-b transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Bumex Garage Giriş Vitrini"
    >
      {/* 1. ARKA PLAN: Medya Katmanı (Next.js Image Poster + Looping HTML5 Video) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Yüksek Çözünürlüklü Yedek Fotoğraf Posteri */}
        <Image
          src={activePillar.image}
          alt={activePillar.imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 transform scale-105 ${
            videoLoaded ? 'opacity-40' : 'opacity-100'
          }`}
        />

        {/* Ambient Otomotiv Looping Videosu */}
        <video
          ref={videoRef}
          src={activePillar.videoSrc || '/videos/sample_workshop.mp4'}
          poster={activePillar.videoPoster || activePillar.image}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-80"
        />

        {/* 2. SİNEMATİK DERİNLİK VE OKUNABİLİRLİK KAPLAMASI (Dual Theme Grading) */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isCream
              ? 'bg-gradient-to-t from-[#E8E3DF] via-[#E8E3DF]/85 to-[#1B1D20]/65 backdrop-blur-[1px]'
              : 'bg-gradient-to-t from-[#1B1D20] via-[#1B1D20]/85 to-black/75 backdrop-blur-[1px]'
          }`}
        />

        {/* Radyal Işık Vurgusu */}
        <div
          className="absolute inset-0 opacity-35 mix-blend-screen pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(30, 58, 138, 0.45) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* 3. SAĞ ÜST WCAG & MEDYA KONTROL BUTONLARI */}
      <div className="absolute top-6 right-4 sm:right-8 z-20 flex items-center gap-2">
        {/* Canlı Atölye Çekimi Rozeti */}
        <div
          className={`hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md transition ${
            isCream
              ? 'bg-white/90 text-[#0D0D0D] border-black/10 shadow-xs'
              : 'bg-black/60 text-white border-white/15 shadow-sm'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-red-500 -ml-4" />
          <span>Atölye Canlı Çekim</span>
        </div>

        {/* Ses Aç / Kapat Butonu */}
        <button
          type="button"
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Sesi aç' : 'Sesi kapat'}
          title={isMuted ? 'Atölye sesini aç' : 'Sesi kapat'}
          className={`p-2 rounded-full border transition active:scale-95 backdrop-blur-md ${
            isCream
              ? 'bg-white/85 border-[#6C6A6B]/25 text-[#0D0D0D] hover:bg-white shadow-xs'
              : 'bg-black/60 border-white/20 text-white hover:bg-black/80 shadow-sm'
          }`}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#60A5FA]" />}
        </button>

        {/* Oynat / Duraklat Butonu */}
        <button
          type="button"
          onClick={handleTogglePause}
          aria-label={isUserPaused ? 'Videoyu oynat' : 'Videoyu duraklat'}
          title={isUserPaused ? 'Videoyu oynat' : 'Videoyu duraklat'}
          className={`p-2 rounded-full border transition active:scale-95 backdrop-blur-md ${
            isCream
              ? 'bg-white/85 border-[#6C6A6B]/25 text-[#0D0D0D] hover:bg-white shadow-xs'
              : 'bg-black/60 border-white/20 text-white hover:bg-black/80 shadow-sm'
          }`}
        >
          {isUserPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
        </button>
      </div>

      {/* 4. ÖN PLAN: HERO İÇERİK IZGARASI */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-8 py-16 lg:py-24">
        {/* Üst Rozet: Konum & Uzmanlık */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1E3A8A] text-white text-xs font-black tracking-wider uppercase mb-5 shadow-lg shadow-[#1E3A8A]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BUMEX GARAGE • BAHÇELİEVLER 7. CADDE 350M</span>
        </div>

        {/* Milano Car Care İlhamlı Display Manşet */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08]">
            <span
              key={activePillar.id}
              className={`block transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${
                isCream ? 'text-[#0D0D0D]' : 'text-white'
              }`}
              style={{
                textShadow: isCream
                  ? '0 2px 20px rgba(255,255,255,0.85)'
                  : '0 4px 24px rgba(0,0,0,0.9)',
              }}
            >
              {activePillar.displayTitle}
            </span>
          </h1>
          <p
            key={`sub-${activePillar.id}`}
            className={`mt-4 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl transition-opacity duration-300 animate-in fade-in ${
              isCream ? 'text-[#333030]' : 'text-[#D1D5DB]'
            }`}
            style={{
              textShadow: isCream ? 'none' : '0 2px 10px rgba(0,0,0,0.7)',
            }}
          >
            {activePillar.subtitle}
          </p>
        </div>

        {/* Milano Usulü Slayt & Progress Bar Göstergesi */}
        <div className="flex items-center gap-4 mb-8 max-w-md">
          <span
            className={`text-xs font-mono font-black tracking-widest ${
              isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'
            }`}
          >
            0{activeIndex + 1}
          </span>
          <div className="flex-1 h-1 rounded-full bg-black/15 dark:bg-white/15 overflow-hidden">
            <div
              className="h-full bg-[#1E3A8A] dark:bg-[#60A5FA] transition-all duration-500 rounded-full"
              style={{
                width: `${((activeIndex + 1) / WORKSHOP_PILLARS.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-[#6C6A6B] dark:text-[#9DA3AA]">
            0{WORKSHOP_PILLARS.length}
          </span>
        </div>

        {/* İnteraktif Sütun Değiştirici Sekmeler (Pill Switcher) */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-8"
          role="tablist"
          aria-label="Atölye Uzmanlıkları"
        >
          {WORKSHOP_PILLARS.map((pillar, idx) => {
            const Icon = TAB_ICONS[pillar.iconName];
            const isSelected = pillar.id === activePillar.id;

            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectPillar(pillar.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border backdrop-blur-md ${
                  isSelected
                    ? isCream
                      ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/30 scale-105'
                      : 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/50 scale-105'
                    : isCream
                      ? 'bg-white/85 text-[#333030] border-[#6C6A6B]/25 hover:bg-white hover:text-black shadow-xs'
                      : 'bg-black/50 text-[#D1D5DB] border-white/15 hover:bg-black/80 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>
                  0{idx + 1} {pillar.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Hızlı Eylem Butonları */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="tel:05524703610"
            className="inline-flex items-center justify-center gap-2.5 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-black text-sm px-6 py-4 rounded-xl shadow-xl shadow-[#1E3A8A]/40 transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4" />
            <span>Hemen Randevu Al: 0552 470 36 10</span>
          </a>

          <a
            href={`https://wa.me/905524703610?text=${encodeURIComponent(activePillar.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-sm px-6 py-4 rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Peron Durumu</span>
          </a>

          <button
            type="button"
            onClick={scrollToWorkshopVideo}
            className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-4 rounded-xl border transition backdrop-blur-md ${
              isCream
                ? 'bg-white/85 border-[#6C6A6B]/30 hover:bg-white text-[#0D0D0D] shadow-xs'
                : 'bg-black/60 border-white/20 hover:bg-black/90 text-white'
            }`}
          >
            <PlayCircle className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
            <span>Atölye Turunu İzle</span>
          </button>
        </div>

        {/* Alt Bilgi: 3 Kalıcı Güvence Kartı (Glassmorphism) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-black/10 dark:border-white/10">
          <div
            className={`p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 ${
              isCard1Active
                ? isCream
                  ? 'ring-2 ring-[#1E3A8A] bg-white/95 border-[#1E3A8A]/40 shadow-sm'
                  : 'ring-2 ring-[#2563EB] bg-black/70 border-[#2563EB]/50 shadow-md shadow-[#1E3A8A]/30'
                : isCream
                  ? 'bg-white/75 border-[#6C6A6B]/20 text-[#0D0D0D]'
                  : 'bg-black/40 border-white/10 text-white'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck
                className={`w-4 h-4 shrink-0 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}
              />
              <h4 className="text-xs font-black tracking-tight">Sıfır Su Hasarı Riski</h4>
            </div>
            <p className={`text-[11px] leading-relaxed ${isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'}`}>
              140°C kuru buhar ve dielektrik kimyasal; elektronik beyin ve soket hasarı kesinlikle sıfır.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 ${
              isCard2Active
                ? isCream
                  ? 'ring-2 ring-[#1E3A8A] bg-white/95 border-[#1E3A8A]/40 shadow-sm'
                  : 'ring-2 ring-[#2563EB] bg-black/70 border-[#2563EB]/50 shadow-md shadow-[#1E3A8A]/30'
                : isCream
                  ? 'bg-white/75 border-[#6C6A6B]/20 text-[#0D0D0D]'
                  : 'bg-black/40 border-white/10 text-white'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}
              />
              <h4 className="text-xs font-black tracking-tight">Vernik Koruma Analizi</h4>
            </div>
            <p className={`text-[11px] leading-relaxed ${isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'}`}>
              Dijital mikron ölçümüyle fabrika verniği inceltilmeden harez ve çizikler giderilir.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 ${
              isCard3Active
                ? isCream
                  ? 'ring-2 ring-[#1E3A8A] bg-white/95 border-[#1E3A8A]/40 shadow-sm'
                  : 'ring-2 ring-[#2563EB] bg-black/70 border-[#2563EB]/50 shadow-md shadow-[#1E3A8A]/30'
                : isCream
                  ? 'bg-white/75 border-[#6C6A6B]/20 text-[#0D0D0D]'
                  : 'bg-black/40 border-white/10 text-white'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Sparkles
                className={`w-4 h-4 shrink-0 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}
              />
              <h4 className="text-xs font-black tracking-tight">pH Nötr & Çiziksiz</h4>
            </div>
            <p className={`text-[11px] leading-relaxed ${isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'}`}>
              Kostiksiz kar köpüğü ve çift kova grit-guard sistemi ile sıfır harelenme garantisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
