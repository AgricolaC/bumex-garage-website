'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Camera, Sparkles, Phone, MessageCircle, MapPin, ArrowLeft } from 'lucide-react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';
import { BeforeAfterSlider } from '@/components/landing/BeforeAfterSlider';

export function GaleriView() {
  const { theme, isCream, toggleTheme } = useLandingTheme();
  const { segment, setSegment, phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } =
    useWorkshopSegment();

  // Klavye kısayolu 't' ile tema değişimi
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
      <LandingNavbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* ─── 1. BREADCRUMB & HERO BAŞLIĞI ─── */}
        <section className="relative pt-10 pb-8 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb & Geri Dön Linki */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold opacity-70">
                <Link href="/" className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition">
                  Ana Sayfa
                </Link>
                <span>/</span>
                <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Galeri</span>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Ana Sayfaya Dön</span>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#1E3A8A] dark:text-[#60A5FA] mb-3">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Bahçelievler Stüdyosu • Ham Detailing &amp; Restorasyon Arşivi</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                  Canlı Atölye{' '}
                  <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Uygulama &amp; Restorasyon</span>{' '}
                  Galerisi
                </h1>

                <p
                  className={`text-sm sm:text-base mt-3 max-w-2xl leading-relaxed ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Bahçelievler atölyemizde mikron boya ölçümü, 140°C kuru buhar, rotary ve orbital
                  polisaj, 9H nano seramik ve PPF kaplama ile tamamlanan gerçek otomobil ve
                  motosiklet uygulamalarını interaktif kaydırıcı ile inceleyin.
                </p>
              </div>

              {/* Segment Seçici Butonları */}
              <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 p-1.5 rounded-2xl border border-black/10 dark:border-white/10 shrink-0">
                <button
                  type="button"
                  onClick={() => setSegment('otomobil')}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                    segment === 'otomobil'
                      ? 'bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/30'
                      : isCream
                        ? 'text-[#565352] hover:text-[#0D0D0D]'
                        : 'text-[#9DA3AA] hover:text-white'
                  }`}
                >
                  Otomobil Galerisi
                </button>
                <button
                  type="button"
                  onClick={() => setSegment('motosiklet')}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                    segment === 'motosiklet'
                      ? 'bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/30'
                      : isCream
                        ? 'text-[#565352] hover:text-[#0D0D0D]'
                        : 'text-[#9DA3AA] hover:text-white'
                  }`}
                >
                  Motosiklet Galerisi
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. TAM DETAYLI BEFORE / AFTER SLIDER & CANLI FOTOĞRAF VİTRİNİ ─── */}
        <BeforeAfterSlider theme={theme} detailed={true} />

        {/* ─── 3. CANLI DANIŞMANLIK & ATÖLYE RANDEVU BANNERI ─── */}
        <section
          className={`py-16 px-4 sm:px-8 border-b transition-colors duration-200 ${
            isCream ? 'bg-[#DDD7D2]/60' : 'bg-[#141517]'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aracınız İçin Özel Uygulama Planı</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Aracınızı Fabrika Kondisyonuna Birlikte Getirelim
            </h2>
            <p
              className={`text-sm mt-3 max-w-xl mx-auto leading-relaxed ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Bahçelievler 7. Cadde&apos;ye 350m mesafedeki stüdyomuza gelerek ücretsiz mikron vernik
              analizi yaptırabilir veya WhatsApp üzerinden aracınızın fotoğraflarını göndererek ön
              ekspertiz talep edebilirsiniz.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm text-white bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-lg shadow-[#1E3A8A]/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                <span>Doğrudan Ara: {phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm text-white bg-[#1FAD4E] hover:bg-[#25C058] shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Ekspertiz Hattı</span>
              </a>

              <Link
                href="/konum"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm border transition ${
                  isCream
                    ? 'border-black/20 hover:bg-white text-[#0D0D0D]'
                    : 'border-white/20 hover:bg-white/10 text-white'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
                <span>Stüdyo Konumu &amp; Yol Tarifi</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Altbilgi (Footer) */}
      <LandingFooter
        theme={theme}
        onOpenModal={() => {
          window.location.href = '/hizmetler';
        }}
      />

      {/* Mobil Arama Barı */}
      <MobileCallBar theme={theme} />
    </div>
  );
}
