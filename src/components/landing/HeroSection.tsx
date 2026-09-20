'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Car,
  Bike,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment, WorkshopSegment } from '@/hooks/useWorkshopSegment';
import { WORKSHOP_PILLARS } from './heroPillars';

export const AUTOMOBILE_STUDIO_SHOTS = [
  {
    id: 'temiz-arac',
    label: 'Boya Koruma & Parlaklık',
    badge: 'BMW 4 • Bumex Atölye',
    src: '/images/hero/hero_bmw_clean.jpg',
    alt: 'Bumex Garage Bahçelievler BMW 4 Serisi Detailing ve Boya Koruma',
    caption: 'Bahçelievler Atölyemizde Detailing ve Boya Koruma Sonucu',
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
    alt: 'Bumex Garage Detailing Stüdyosu Aktif Kar Köpüğü Ön Yıkama',
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
  const [activeShotIndex, setActiveShotIndex] = useState(0);

  const { segment, setSegment, phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } =
    useWorkshopSegment();

  // Otomobil stüdyo görselleri için 3 saniyelik otomatik zamanlı galeri döngüsü
  useEffect(() => {
    if (segment !== 'otomobil') return;
    const interval = setInterval(() => {
      setActiveShotIndex((prev) => (prev + 1) % AUTOMOBILE_STUDIO_SHOTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [segment]);

  const currentPillar =
    WORKSHOP_PILLARS.find((p) => p.id === segment) ?? WORKSHOP_PILLARS[0];

  const handleSelectSegment = (newSeg: WorkshopSegment) => {
    setSegment(newSeg);
  };

  return (
    <section
      className="relative min-h-[86vh] lg:min-h-[92vh] flex items-center overflow-hidden border-b transition-colors duration-300"
      aria-label="Bumex Garage Giriş ve Stüdyo Seçici"
    >
      {/* ─── 1. SİNEMATİK ARKA PLAN MEDYA GEÇİŞİ (Cross-Fade) ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        {/* Otomobil Görsel Katmanı: Gerçek Bumex Bahçelievler Detailing Stüdyosu */}
        {AUTOMOBILE_STUDIO_SHOTS.map((shot, idx) => (
          <div
            key={shot.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              segment === 'otomobil' && activeShotIndex === idx
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            } transform transition-transform duration-1000`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Motosiklet Görsel Katmanı */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            segment === 'motosiklet' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transform transition-transform duration-1000`}
        >
          <Image
            src="/images/before-after/moto_detail_full.jpg"
            alt="Bumex Garage Profesyonel Motosiklet Detailing, Mekanik Servis ve Boya Koruma"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Sinematik Arka Plan Gradyanı (Split Hero Kontrast Kalibrasyonu) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30 md:bg-gradient-to-r md:from-black/95 md:via-black/60 md:to-black/30 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[#1E3A8A]/15 mix-blend-overlay pointer-events-none" />

        {/* Prestijli Mavi Işık Hüzmesi (Otomobil & Motosiklet İçin Tek Tip Kraliyet Mavisi) */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(30, 58, 138, 0.45) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ─── 2. ANA HERO İÇERİĞİ VE KONTROL MASASI ─── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
        {/* Üst Segment Seçici Deck (Commanding Studio Switcher) */}
        <div className="max-w-xl mb-8">
          <div
            role="tablist"
            aria-label="Atölye Uzmanlık Segmenti"
            className={`p-1.5 rounded-2xl inline-flex flex-wrap items-center gap-1.5 border shadow-xl backdrop-blur-md transition-colors duration-200 ${
              isCream
                ? 'bg-white/85 border-black/10 text-[#0D0D0D]'
                : 'bg-black/60 border-white/15 text-white'
            }`}
          >
            {/* 01 OTOMOBİL BUTONU */}
            <button
              type="button"
              role="tab"
              aria-selected={segment === 'otomobil'}
              onClick={() => handleSelectSegment('otomobil')}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer ${
                segment === 'otomobil'
                  ? 'bg-[#1E3A8A] text-white shadow-lg shadow-[#1E3A8A]/40 scale-[1.02]'
                  : isCream
                    ? 'text-[#4A4746] hover:bg-black/5 hover:text-black'
                    : 'text-[#B0B6BD] hover:bg-white/10 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>01 Otomobil Stüdyosu</span>
            </button>

            {/* 02 MOTOSİKLET BUTONU (Kırmızı yerine tam mavi palet) */}
            <button
              type="button"
              role="tab"
              aria-selected={segment === 'motosiklet'}
              onClick={() => handleSelectSegment('motosiklet')}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer ${
                segment === 'motosiklet'
                  ? 'bg-[#1E3A8A] text-white shadow-lg shadow-[#1E3A8A]/40 scale-[1.02]'
                  : isCream
                    ? 'text-[#4A4746] hover:bg-black/5 hover:text-black'
                    : 'text-[#B0B6BD] hover:bg-white/10 hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4 shrink-0" />
              <span>02 Motosiklet Stüdyosu</span>
            </button>
          </div>
        </div>

        {/* Tipografi ve Manşet (Split Hero Yüksek Kontrastı & Drop Shadow) */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight uppercase leading-[1.12]">
            <span
              key={`title-${segment}`}
              className="block transition-all duration-300 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
            >
              {currentPillar.displayTitle}
            </span>
          </h1>

          <p
            key={`sub-${segment}`}
            className="mt-4 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl transition-opacity duration-300 text-zinc-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
          >
            {currentPillar.subtitle}
          </p>
        </div>

        {/* Eylem Butonları: Masaüstünde Hat Arama, Mobilde Keşif & WhatsApp Odaklı */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
          {/* Birincil Hat Arama Butonu (Masaüstü & Tablet; Mobilde Persistent Bottom Call Bar mevcut) */}
          <a
            href={`tel:${phone}`}
            className="hidden sm:inline-flex items-center justify-center gap-2.5 text-white font-black text-xs sm:text-sm px-6 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 active:translate-y-0 bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-[#1E3A8A]/35"
          >
            <Phone className="w-4 h-4" />
            <span>
              {segment === 'otomobil' ? 'Otomobil Randevu' : 'Motosiklet Randevu'}: {phoneDisplay}
            </span>
          </a>

          {/* Hızlı Atölye Fiyatları ve Paketler (Mobilde Birincil Keşif Butonu) */}
          <a
            href="#fiyatlar"
            className="inline-flex items-center justify-center gap-2 font-black text-xs sm:text-sm px-6 py-4 rounded-xl border border-white/30 bg-black/70 hover:bg-black/90 text-white transition backdrop-blur-md shadow-lg"
          >
            <span>Fiyatları &amp; Paketleri İncele</span>
            <ChevronDown className="w-4 h-4 text-[#60A5FA]" />
          </a>

          {/* WhatsApp Butonu */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Randevu &amp; Bilgi</span>
          </a>
        </div>

        {/* Hızlı Kısayol Şeridi: Restorasyon ve Hizmetler */}
        <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
          <a
            href="#hizmetler"
            className="hover:underline flex items-center gap-1.5 opacity-80 hover:opacity-100 transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-[#60A5FA]" />
            <span>Hizmetler & İhtiyaçlar</span>
          </a>
          <span className="opacity-30">•</span>
          <a
            href="#restorasyon"
            className="hover:underline flex items-center gap-1.5 opacity-80 hover:opacity-100 transition"
          >
            <span>Boya Düzeltme & Koruma</span>
          </a>
        </div>
      </div>
    </section>
  );
}
