'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  ExternalLink,
  Car,
  Bike,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';

const ARRIVAL_STEPS = [
  {
    step: '01',
    title: 'GELİN',
    desc: 'Prof. Muammer Aksoy Cad. No: 48 — 7. Cadde\'nin hemen yanında, kapıda.',
  },
  {
    step: '02',
    title: 'TESLİM EDİN',
    desc: 'Aracınızı görevliye teslim edin, mevcut durumunu birlikte kontrol edelim.',
  },
  {
    step: '03',
    title: 'İŞİNİZİ HALLEDİN',
    desc: '7. Cadde\'deki işinizi halledin; aracınız kamera gözetimli otoparkta bekler.',
  },
  {
    step: '04',
    title: 'ARACINIZI ALIN',
    desc: 'Hazır olduğunda sizi arayalım/mesaj atalım, aracınızı teslim alın.',
  },
];

const NEARBY_POINTS = [
  { distance: '700 m', label: 'Beşevler Metro' },
  { distance: '1.0 km', label: 'Bahçelievler Metro' },
  { distance: '700 m', label: 'Başkent Üni. Hastanesi' },
  { distance: '900 m / 1.5 km', label: 'Gazi Üni. Hastanesi (Yürüme / Araç)' },
  { distance: '1.1 km', label: 'Anıtkabir' },
  { distance: '1.5 km', label: 'Bestepe Hastanesi' },
];

export function KonumView() {
  const { theme, isCream, toggleTheme } = useLandingTheme();
  const { phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } = useWorkshopSegment();

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

  const cardClass = isCream
    ? 'bg-[#F2ECE8] border-black/10'
    : 'bg-[#22252A] border-white/10';
  const mutedText = isCream ? 'text-[#565352]' : 'text-[#9DA3AA]';
  const bodyText = isCream ? 'text-[#4A4746]' : 'text-[#A1A7B0]';

  return (
    <div
      className={`min-h-screen transition-colors duration-200 landing-theme-${theme} ${
        isCream ? 'bg-[#E8E3DF] text-[#0D0D0D]' : 'bg-[#1B1D20] text-[#F4F4F5]'
      }`}
    >
      <LandingNavbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* ─── 1. HERO: BURADAYIZ ─── */}
        <section className="relative pt-12 pb-10 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold mb-6 opacity-70">
              <Link href="/" className="hover:text-[#1E3A8A] dark:text-[#60A5FA] transition">
                Ana Sayfa
              </Link>
              <span>/</span>
              <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Konum &amp; Yol Tarifi</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#1E3A8A] dark:text-[#60A5FA] mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Çankaya Bahçelievler</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-3">
              Buradayız. <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Bumex Garage Bahçelievler</span>
            </h1>

            <p className={`text-sm sm:text-base font-semibold mb-1 ${bodyText}`}>
              Prof. Muammer Aksoy Cad. No: 48, Bahçelievler Mah. Çankaya / ANKARA
            </p>
            <p className={`text-xs sm:text-sm mb-8 ${mutedText}`}>
              7. Cadde&apos;ye 500 m · Her gün 10:00 – 22:00 açık
            </p>

            {/* Aksiyon Sırası: Yol Tarifi (Birincil) → Ara / WhatsApp → Apple / Yandex (İkincil) */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-md transition active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps&apos;te Yol Tarifi Al</span>
                </a>

                <a
                  href={`tel:${phone}`}
                  className={`inline-flex items-center gap-2 text-sm font-bold px-5 py-3.5 rounded-lg border transition active:scale-95 ${
                    isCream
                      ? 'bg-white/80 border-black/15 text-[#0D0D0D] hover:bg-white'
                      : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                  }`}
                >
                  <Phone className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
                  <span>Ara</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white text-sm font-bold px-5 py-3.5 rounded-lg shadow-sm transition active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold ${mutedText}`}>
                <span>Alternatif:</span>
                <a
                  href="https://maps.apple.com/?address=Prof.%20Muammer%20Aksoy%20Cad.%20No:48,%2006490%20%C3%87ankaya,%20Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition underline decoration-dotted"
                >
                  Apple Haritalar <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <span aria-hidden>·</span>
                <a
                  href="https://yandex.com.tr/harita/?text=Bumex%20Garage%20Bah%C3%A7elievler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition underline decoration-dotted"
                >
                  Yandex Navigasyon <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. BÜYÜK HARİTA ─── */}
        <section className="px-4 sm:px-8 py-10 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div
              className={`rounded-2xl overflow-hidden border shadow-lg relative ${
                isCream ? 'border-black/10' : 'border-white/10'
              }`}
            >
              <iframe
                title="Bumex Garage Bahçelievler Google Haritası"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.6948339191024!2d32.82465007656681!3d39.9277017715222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f62f1f30295%3A0xcf179371bb67a8e5!2sBUMEX%20GARAGE%20BAH%C3%87EL%C4%B0EVLER!5e0!3m2!1str!2str!4v1710700000000!5m2!1str!2str"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* ─── 3. ARAÇLA GELİYORSANIZ ─── */}
        <section className="py-12 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Car className="w-5 h-5 text-[#1E3A8A] dark:text-[#60A5FA]" />
              <h2 className="text-xl sm:text-2xl font-black">Araçla Geliyorsanız</h2>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6`}>
              {ARRIVAL_STEPS.map((item) => (
                <div key={item.step} className={`p-5 rounded-xl border ${cardClass}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-[#1E3A8A] dark:text-[#60A5FA]">
                      {item.step}
                    </span>
                    <CheckCircle2 className="w-4 h-4 opacity-40" />
                  </div>
                  <h3 className="text-xs font-bold tracking-wide mb-1.5">{item.title}</h3>
                  <p className={`text-xs leading-relaxed ${mutedText}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className={`p-5 rounded-xl border flex items-start gap-3 ${cardClass}`}>
              <Bike className="w-5 h-5 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0 mt-0.5" />
              <p className={`text-xs sm:text-sm leading-relaxed ${bodyText}`}>
                <strong>Motosikletle geliyorsanız:</strong> Motosiklet servis randevunuz için ayrı hattımızdan
                bize ulaşın — aşağıdaki İletişim bölümünde numarası var. Otopark ve otomobil detailing
                girişiyle aynı adrestir.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 4. TOPLU TAŞIMA & YÜRÜME MESAFESİ ─── */}
        <section className="py-12 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg sm:text-xl font-black mb-6 opacity-90">
              Toplu Taşıma &amp; Çevredeki Noktalar
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {NEARBY_POINTS.map((point) => (
                <div key={point.label} className={`p-4 rounded-xl border text-center flex flex-col items-center justify-center ${cardClass}`}>
                  <div className="text-lg sm:text-xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-0.5">
                    {point.distance}
                  </div>
                  <div className="font-bold text-xs sm:text-sm">{point.label}</div>
                </div>
              ))}
            </div>
            <p className={`text-xs mt-4 ${mutedText}`}>
              Prof. Muammer Aksoy Caddesi üzerinden geçen minibüs ve otobüs hatları garajımızın önünden geçer.
            </p>
          </div>
        </section>

        {/* ─── 5. TARİHSEL SÜREKLİLİK (KISA) ─── */}
        <section className="py-8 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div
              className={`p-5 sm:p-6 rounded-2xl border flex items-start gap-4 ${
                isCream ? 'bg-white/70 border-black/10' : 'bg-[#1F2227] border-white/10'
              }`}
            >
              <Building2 className="w-5 h-5 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0 mt-0.5" />
              <p className={`text-xs sm:text-sm leading-relaxed ${bodyText}`}>
                <strong>Daha önce burayı Han-gar, Sonax-Würth Bahçelievler ya da Supark Otopark ve Yıkama
                olarak mı biliyordunuz?</strong> Bumex Garage artık aynı fiziksel adreste hizmet veriyor.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 6. İLETİŞİM ─── */}
        <section className="py-12 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg sm:text-xl font-black mb-6 opacity-90">İletişim</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl border ${cardClass}`}>
                <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#1E3A8A] dark:text-[#60A5FA]">
                  Çalışma Saatleri
                </h3>
                <p className="text-sm font-semibold leading-relaxed">
                  Hafta içi, hafta sonu ve resmi tatillerde 10:00 – 22:00 açığız.
                </p>
              </div>

              <div className={`p-6 rounded-xl border ${cardClass}`}>
                <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-3">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#1E3A8A] dark:text-[#60A5FA]">
                  Otomobil &amp; Otopark
                </h3>
                <a
                  href="tel:05524703610"
                  className="font-bold text-sm text-[#1E3A8A] dark:text-[#60A5FA] hover:underline"
                >
                  0552 470 36 10
                </a>
              </div>

              <div className={`p-6 rounded-xl border ${cardClass}`}>
                <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-3">
                  <Bike className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#1E3A8A] dark:text-[#60A5FA]">
                  Motosiklet Servis
                </h3>
                <a
                  href="tel:05465332844"
                  className="font-bold text-sm text-[#1E3A8A] dark:text-[#60A5FA] hover:underline"
                >
                  0546 533 28 44
                </a>
              </div>
            </div>

            <div className={`mt-6 flex items-center gap-2 text-xs ${mutedText}`}>
              <ShieldCheck className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
              <span>24/7 CCTV kamera gözetimi · Araç kabul ve teslim saatleri 10:00 – 22:00</span>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter
        theme={theme}
        onOpenModal={() => {
          window.location.href = '/#hizmetler';
        }}
      />

      <MobileCallBar theme={theme} />
    </div>
  );
}
