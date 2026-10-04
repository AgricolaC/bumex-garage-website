'use client';

import React, { useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Car,
  Bike,
  ChevronDown,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment, WorkshopSegment } from '@/hooks/useWorkshopSegment';

export const AUTOMOBILE_STUDIO_SHOTS = [
  {
    id: 'temiz-arac',
    label: 'Boya Koruma & Parlaklık',
    badge: 'BMW 4 • Bumex Tamirhane',
    src: '/images/hero/hero_bmw_clean.jpg',
    alt: 'Bumex Garage Bahçelievler BMW 4 Serisi Detailing ve Boya Koruma',
    caption: 'Bahçelievler Tamirhanemizde Detailing ve Boya Koruma Sonucu',
  },
  {
    id: 'buhar-yikama',
    label: 'Buharlı Detay',
    badge: 'Detaylı Buhar',
    src: '/images/hero/hero_bmw_steam_wash.jpg',
    alt: 'Bumex Garage Bahçelievler BMW 4 Serisi Buharlı Detaylı Temizlik',
    caption: 'Izgara, Far Çevresi ve Hassas Alanlarda Buharlı Arındırma',
  },
  {
    id: 'kar-kopugu',
    label: 'Aktif Kar Köpüğü',
    badge: 'Ön Yıkama',
    src: '/images/hero/hero_bmw_snow_foam.jpg',
    alt: 'Bumex Garage Detailing Atölyesi Aktif Kar Köpüğü Ön Yıkama',
    caption: 'pH Nötr Kar Köpüğü ile Fırçasız ve Çiziksiz Ön Yıkama',
  },
  {
    id: 'jant-temiz',
    label: 'Jant & Kaliper',
    badge: 'Jant Detayı',
    src: '/images/hero/hero_bmw_wheel_clean.jpg',
    alt: 'Bumex Garage BMW M-Sport Jant Detaylandırma ve Koruma',
    caption: 'Asitsiz Formülle Balata Tozu ve Demir Tozu Arındırma',
  },
];

interface HeroSectionProps {
  theme: LandingTheme;
}

export function HeroSection({ theme }: HeroSectionProps) {
  const isCream = theme === 'cream';
  const carVideoRef = useRef<HTMLVideoElement>(null);
  const motoVideoRef = useRef<HTMLVideoElement>(null);

  const { segment, setSegment, phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } =
    useWorkshopSegment();

  // Segment değişiminde otonom video oynatımı kontrolü
  useEffect(() => {
    if (segment === 'otomobil' && carVideoRef.current) {
      carVideoRef.current.play().catch(() => {
        // Tarayıcı otonom oynatma politikası koruması
      });
    } else if (segment === 'motosiklet' && motoVideoRef.current) {
      motoVideoRef.current.play().catch(() => {
        // Tarayıcı otonom oynatma politikası koruması
      });
    }
  }, [segment]);

  const handleSelectSegment = (newSeg: WorkshopSegment) => {
    setSegment(newSeg);
  };

  return (
    <section
      className="relative min-h-[92svh] md:min-h-[92vh] flex flex-col justify-between overflow-hidden border-b transition-colors duration-300"
      aria-label="Bumex Garage Giriş ve Atölye Seçici"
    >
      {/* ─── 1. SİNEMATİK ARKA PLAN MEDYA GEÇİŞİ (Cross-Fade) ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        {/* Otomobil Otonom Video Katmanı: Bumex Atölye Detailing & Restorasyon Akışı */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            segment === 'otomobil' ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-1000`}
        >
          <video
            ref={carVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero/hero_bmw_clean.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/car_detail_reel.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Motosiklet Otonom Video Katmanı: Bumex Atölye Detailing Akışı */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            segment === 'motosiklet' ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-1000`}
        >
          <video
            ref={motoVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/before-after/moto_detail_full.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/moto_detail_reel.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Sinematik Arka Plan Gradyanı: Görseli ve videoyu öne çıkarmak için hafifletilmiş alt taban gradyanı */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500 pointer-events-none"
        />
        <div
          className={`absolute inset-0 bg-[#1E3A8A]/10 mix-blend-overlay pointer-events-none transition-opacity duration-500 ${
            segment === 'motosiklet' ? 'opacity-30' : 'opacity-40'
          }`}
        />

        {/* Mavi Işık Hüzmesi */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(30, 58, 138, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ─── 2. ANA HERO İÇERİĞİ VE KONTROL MASASI ─── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-8 py-4 sm:py-8 lg:py-12 flex flex-col justify-between flex-1">
        {/* ÜST BAR: Segment Seçici Deck */}
        <div className="flex items-center justify-between gap-4 mb-auto">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                06 // BUMEX · BAHÇELİEVLER ATÖLYE
              </span>
            </div>

            <div
              role="tablist"
              aria-label="Tamirhane Uzmanlık Segmenti"
              className={`relative p-1 rounded-xl inline-grid grid-cols-2 gap-1 border shadow-xl backdrop-blur-md transition-colors duration-200 ${
                isCream
                  ? 'bg-white/90 border-black/10 text-[#111215]'
                  : 'bg-black/75 border-white/15 text-white'
              }`}
            >
              {/* Short-Throw Gear Lever Indicator Pill (Physical Overshoot & Settle) */}
              <div
                aria-hidden="true"
                className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.375rem)] rounded-lg bg-[#1E3A8A] shadow-md shadow-[#1E3A8A]/40 pointer-events-none transition-transform duration-300 motion-reduce:transition-none"
                style={{
                  transform:
                    segment === 'otomobil'
                      ? 'translateX(0)'
                      : 'translateX(calc(100% + 0.25rem))',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />

              {/* 01 OTOMOBİL BUTONU */}
              <button
                type="button"
                role="tab"
                aria-selected={segment === 'otomobil'}
                onClick={() => handleSelectSegment('otomobil')}
                className={`btn-mechanical relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer ${
                  segment === 'otomobil'
                    ? 'text-white'
                    : isCream
                      ? 'text-[#5A5D66] hover:text-black'
                      : 'text-[#8E94A0] hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5 shrink-0" />
                <span><span className="hidden sm:inline">01 </span>Otomobil<span className="hidden sm:inline"> Servisi</span></span>
              </button>

              {/* 02 MOTOSİKLET BUTONU */}
              <button
                type="button"
                role="tab"
                aria-selected={segment === 'motosiklet'}
                onClick={() => handleSelectSegment('motosiklet')}
                className={`btn-mechanical relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer ${
                  segment === 'motosiklet'
                    ? 'text-white'
                    : isCream
                      ? 'text-[#5A5D66] hover:text-black'
                      : 'text-[#8E94A0] hover:text-white'
                }`}
              >
                <Bike className="w-3.5 h-3.5 shrink-0" />
                <span><span className="hidden sm:inline">02 </span>Motosiklet<span className="hidden sm:inline"> Servisi</span></span>
              </button>
            </div>
          </div>
        </div>

        {/* ALT PANEL: Rafine & Yarı-Saydam Dock Mimarisi */}
        <div className="max-w-xl mt-auto pt-6 sm:pt-12 lg:pt-16 animate-in fade-in duration-300">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {segment === 'motosiklet'
              ? 'Motosikletinizi Temizleyin, Koruyun, Yenileyin.'
              : 'Aracınızı Temizleyin, Koruyun, Yenileyin.'}
          </h1>

          <p className="mt-2 text-xs sm:text-sm font-normal text-zinc-300/90 leading-relaxed max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {segment === 'motosiklet'
              ? 'Hassas köpük arındırma, mikron grenaj restorasyonu ve 9H seramik zırh. İki tekerin dilinden anlayan tavizsiz atölye işçiliği.'
              : "Bahçelievler'de profesyonel oto yıkama, detailing, PPF kaplama, boya restorasyonu ve güvenli otopark. Aracınızı güvenle teslim edin; ilk günkü özeniyle teslim alın."}
          </p>

          {/* Rafine Şeffaf Eylem Dock'u */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-4 sm:mt-5">
            <a
              href={`tel:${phone}`}
              className="btn-mechanical inline-flex items-center gap-1.5 sm:gap-2 text-white font-medium text-xs px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#1E3A8A]/50 bg-[#1E3A8A]/80 hover:bg-[#1E3A8A] backdrop-blur-md shadow-md shadow-[#1E3A8A]/25 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="sm:hidden">Ara</span>
              <span className="hidden sm:inline">Randevu: {phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mechanical inline-flex items-center gap-1.5 sm:gap-2 text-white font-medium text-xs px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/15 bg-black/40 hover:bg-black/60 backdrop-blur-md shadow transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#fiyatlar"
              className="btn-mechanical inline-flex items-center gap-1 sm:gap-1.5 text-zinc-300 hover:text-white font-medium text-xs px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/10 bg-black/30 hover:bg-black/50 backdrop-blur-md transition"
            >
              <span>Paketler</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
