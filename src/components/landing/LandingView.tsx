'use client';

import React, { useState, useEffect } from 'react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment, WorkshopSegment } from '@/hooks/useWorkshopSegment';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { IntentCards } from '@/components/landing/IntentCards';
import { BeforeAfterSlider } from '@/components/landing/BeforeAfterSlider';
import { ProcessSection } from '@/components/landing/ProcessSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { GoogleMapsSection } from '@/components/landing/GoogleMapsSection';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';
import { ProtocolModals, ProtocolType } from '@/components/landing/ProtocolModals';

export function LandingView({ initialSegment }: { initialSegment?: WorkshopSegment } = {}) {
  const { theme, isCream, toggleTheme } = useLandingTheme();
  const [activeModal, setActiveModal] = useState<ProtocolType>(null);
  const { setSegment } = useWorkshopSegment();

  useEffect(() => {
    if (initialSegment) {
      setSegment(initialSegment);
    }
  }, [initialSegment, setSegment]);

  // Klavye kısayolları: 't' ile tema değişimi
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      if (e.key.toLowerCase() === 't') {
        toggleTheme();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 landing-theme-${theme} ${
        isCream ? 'bg-[#E8E3DF] text-[#0D0D0D]' : 'bg-[#1B1D20] text-[#F4F4F5]'
      }`}
    >
        {/* Üst Bar ve Segment-Duyarlı Navigasyon */}
        <LandingNavbar
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Ana Gövde: 10/10 Anlatı Mimarisi (Need → Proof → Trust → Action) */}
        <main>
          {/* 1. Hero Vitrini & Segment Seçici: Ben doğru yerde miyim? */}
          <HeroSection theme={theme} />

          {/* 2. Niyet Seçici (6 İhtiyaç Kartı): Ne yaptırabilirim? */}
          <IntentCards theme={theme} />

          {/* 3. Öncesi & Sonrası Vaka Kanıtı: Gerçekten iyi iş çıkarıyorlar mı? */}
          <BeforeAfterSlider theme={theme} detailed={false} />

          {/* 4. Dört Aşamalı İnsani Süreç & Park & Wash Kolaylığı: Arabamı bunlara bırakabilir miyim? */}
          <ProcessSection theme={theme} />

          {/* 5. Şeffaf Fiyat Listesi & Detailing / Servis Paketleri (Strateji C) */}
          <PricingSection
            theme={theme}
            onOpenModal={(type) => setActiveModal(type)}
          />

          {/* 6. Google Haritalar Doğrulanmış Profil, Yorumlar & Yol Tarifi: Nasıl ulaşacağım? */}
          <GoogleMapsSection theme={theme} />
        </main>

        {/* Altbilgi (Footer) */}
        <LandingFooter
          theme={theme}
          onOpenModal={(type) => setActiveModal(type)}
        />

        {/* Mobilde Sabit Segmente Özel Arama ve WhatsApp Barı */}
        <MobileCallBar theme={theme} />

        {/* Bilgilendirme Protokol Modalları */}
        <ProtocolModals
          activeModal={activeModal}
          onClose={() => setActiveModal(null)}
          theme={theme}
        />
      </div>
  );
}
