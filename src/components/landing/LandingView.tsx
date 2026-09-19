'use client';

import React, { useState, useEffect } from 'react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { WorkshopSegmentProvider } from '@/hooks/useWorkshopSegment';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesCatalog } from '@/components/landing/ServicesCatalog';
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
    <WorkshopSegmentProvider>
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

        {/* Ana Gövde */}
        <main>
          {/* 1. Commanding Studio Switcher & Hero Vitrini (Split Hero Kontrast Seviyesi & Royal Blue) */}
          <HeroSection theme={theme} />

          {/* 2. Segmente Özel Filtrelenen Resmi Atölye Hizmet Yelpazesi */}
          <ServicesCatalog
            theme={theme}
            onOpenModal={(type) => setActiveModal(type)}
          />

          {/* 3. Boya Düzeltme & Grenaj Restorasyonu Karşılaştırma Kaydırıcısı */}
          <BeforeAfterSlider theme={theme} />

          {/* 4. Şeffaf Fiyat Listesi & Detailing / Servis Paketleri */}
          <PricingSection
            theme={theme}
            onOpenModal={(type) => setActiveModal(type)}
          />

          {/* 5. Google Haritalar, Yol Tarifi & 24/7 Güvenli Otopark */}
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
    </WorkshopSegmentProvider>
  );
}
