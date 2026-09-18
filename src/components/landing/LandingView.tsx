'use client';

import React, { useState, useEffect } from 'react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { WorkshopVideoSection } from '@/components/landing/WorkshopVideoSection';
import { ServicesCatalog } from '@/components/landing/ServicesCatalog';
import { VisualReelSection } from '@/components/landing/VisualReelSection';
import { BeforeAfterSlider } from '@/components/landing/BeforeAfterSlider';
import { PricingSection } from '@/components/landing/PricingSection';
import { GoogleMapsSection } from '@/components/landing/GoogleMapsSection';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';
import { ProtocolModals, ProtocolType } from '@/components/landing/ProtocolModals';

export function LandingView() {
  const { theme, isCream, toggleTheme } = useLandingTheme();
  const [activeModal, setActiveModal] = useState<ProtocolType>(null);

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
      {/* Üst Bar ve Navigasyon */}
      <LandingNavbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Ana Gövde */}
      <main>
        {/* 1. Video & Fotoğraf Odaklı Sinematik Hero Vitrini */}
        <HeroSection theme={theme} />

        {/* 2. Milano Car Care İlhamlı Zanaat Video Turu ("Neden Bumex?") */}
        <WorkshopVideoSection theme={theme} />

        {/* 3. 13 Kalemlik Resmi Atölye Hizmet Yelpazesi */}
        <ServicesCatalog
          theme={theme}
          onOpenModal={(type) => setActiveModal(type)}
        />

        {/* 4. Canlı Fotoğraf & Reels Görsel Kanıt Vitrini */}
        <VisualReelSection theme={theme} />

        {/* 5. Boya Düzeltme Öncesi / Sonrası Karşılaştırma Kaydırıcısı */}
        <BeforeAfterSlider theme={theme} />

        {/* 6. Şeffaf Fiyat Listesi & Motosiklet Detailing Paketleri */}
        <PricingSection
          theme={theme}
          onOpenModal={(type) => setActiveModal(type)}
        />

        {/* 7. Google Haritalar, Yol Tarifi & Müşteri İncelemeleri */}
        <GoogleMapsSection theme={theme} />
      </main>

      {/* Altbilgi (Footer) */}
      <LandingFooter
        theme={theme}
        onOpenModal={(type) => setActiveModal(type)}
      />

      {/* Mobilde Sabit Arama ve WhatsApp Barı */}
      <MobileCallBar theme={theme} />

      {/* Hibrit Bilgilendirme Modalları (Motor & Detailing) */}
      <ProtocolModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        theme={theme}
      />
    </div>
  );
}
