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
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';

export function KonumView() {
  const { theme, isCream, toggleTheme } = useLandingTheme();

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
      <LandingNavbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* ─── 1. HERO & ADRES BAŞLIĞI ─── */}
        <section className="relative pt-12 pb-16 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold mb-6 opacity-70">
              <Link href="/" className="hover:text-[#1E3A8A] dark:text-[#60A5FA] transition">
                Ana Sayfa
              </Link>
              <span>/</span>
              <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Konum &amp; Ulaşım</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#1E3A8A] dark:text-[#60A5FA] mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Çankaya Bahçelievler • 7. Cadde&apos;ye 350 Metre</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              Bumex Garage{' '}
              <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Konum, Ulaşım &amp; Yol Tarifi</span>
            </h1>

            <p
              className={`text-base sm:text-lg max-w-3xl leading-relaxed mb-8 ${
                isCream ? 'text-[#4A4746]' : 'text-[#A1A7B0]'
              }`}
            >
              Ankara&apos;nın kalbinde, Bahçelievler 7. Cadde&apos;ye (Aşkabat Caddesi) sadece 4 dakika yürüme mesafesinde.
              Geniş manevra alanı ve alçak araç rampası ile güvenli ve kolay ulaşım.
            </p>

            {/* Navigasyon Aksiyon Butonları */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white text-sm font-bold px-5 py-3 rounded-lg shadow-md transition active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Haritalar</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://maps.apple.com/?address=Prof.%20Muammer%20Aksoy%20Cad.%20No:48,%2006490%20%C3%87ankaya,%20Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-lg border transition active:scale-95 ${
                  isCream
                    ? 'bg-white/80 border-black/15 text-[#0D0D0D] hover:bg-white'
                    : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                }`}
              >
                <Compass className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
                <span>Apple Haritalar</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://yandex.com.tr/harita/?text=Bumex%20Garage%20Bah%C3%A7elievler"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-lg border transition active:scale-95 ${
                  isCream
                    ? 'bg-white/80 border-black/15 text-[#0D0D0D] hover:bg-white'
                    : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                }`}
              >
                <Navigation className="w-4 h-4 text-[#E1306C]" />
                <span>Yandex Navigasyon</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </section>

        {/* ─── 2. TEMEL ADRES, SAATLER & DİREKT HATLARI ─── */}
        <section className="py-12 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Adres Kartı */}
              <div
                className={`p-6 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#1E3A8A] dark:text-[#60A5FA]">
                  Açık Adres
                </h3>
                <p className="text-sm font-semibold leading-relaxed">
                  Prof. Muammer Aksoy Caddesi (Eski 2. Cadde) No: 48
                </p>
                <p
                  className={`text-xs mt-1 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}
                >
                  Bahçelievler Mahallesi, Çankaya / ANKARA (06490)
                </p>
              </div>

              {/* Saatler Kartı */}
              <div
                className={`p-6 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#1E3A8A] dark:text-[#60A5FA]">
                  Çalışma Saatleri
                </h3>
                <p className="text-sm font-semibold leading-relaxed">
                  Haftanın 7 Günü: 10:00 – 22:00
                </p>
                <p
                  className={`text-xs mt-1 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}
                >
                  Resmi tatil ve hafta sonlarında kesintisiz hizmet.
                </p>
              </div>

              {/* Destek Hatları Kartı */}
              <div
                className={`p-6 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#1E3A8A] dark:text-[#60A5FA]">
                  Özel Destek Hatları
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="opacity-70 block">Otomobil & Otopark:</span>
                    <a href="tel:05524703610" className="font-bold text-sm text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      0552 470 36 10
                    </a>
                  </div>
                  <div>
                    <span className="opacity-70 block">Motosiklet Servis:</span>
                    <a href="tel:05465332844" className="font-bold text-sm text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      0546 533 28 44
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. TARİHSEL SÜREKLİLİK VE ENTITY BRIDGE KARTI ─── */}
        <section className="py-12 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isCream ? 'bg-white/70 border-black/10' : 'bg-[#1F2227] border-white/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center shrink-0 mt-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">
                    Lokasyon Sürekliliği &amp; Tarihçe
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isCream ? 'text-[#4A4746]' : 'text-[#A1A7B0]'
                    }`}
                  >
                    Bumex Garage, daha önce Ankara Bahçelievler sakinleri ve otomobil tutkunları tarafından{' '}
                    <strong>Han-gar</strong>, <strong>Sonax-Würth Bahçelievler</strong> ve{' '}
                    <strong>Supark Otopark ve Yıkama</strong> olarak bilinen Prof. Muammer Aksoy Caddesi No: 48
                    lokasyonunda yer almaktadır. Aynı yerleşik fiziksel adreste; yenilenen premium stüdyo
                    ekipmanları, mikron boya restorasyonu ve kurumsal güvenceyle hizmet vermeye devam etmektedir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. MESAFELER & ULAŞIM REHBERİ ─── */}
        <section className="py-12 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-black mb-6">
              Çevre Noktalar ve Yürüme Mesafeleri
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div
                className={`p-4 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-xl sm:text-2xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-0.5">350 m</div>
                <div className="font-bold text-xs sm:text-sm">7. Cadde (Aşkabat)</div>
                <div className="text-[11px] opacity-70 mt-0.5">4 dk yürüme</div>
              </div>

              <div
                className={`p-4 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-xl sm:text-2xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-0.5">750 m</div>
                <div className="font-bold text-xs sm:text-sm">Bahçelievler / Emek Metro</div>
                <div className="text-[11px] opacity-70 mt-0.5">8-10 dk yürüme</div>
              </div>

              <div
                className={`p-4 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-xl sm:text-2xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-0.5">1.1 km</div>
                <div className="font-bold text-xs sm:text-sm">Milli Kütüphane Metro</div>
                <div className="text-[11px] opacity-70 mt-0.5">12 dk yürüme</div>
              </div>

              <div
                className={`p-4 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-xl sm:text-2xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-0.5">3-5 dk</div>
                <div className="font-bold text-xs sm:text-sm">Gazi & Hastaneler</div>
                <div className="text-[11px] opacity-70 mt-0.5">Araç mesafesi</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. KONUM SSS ─── */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black mb-8 text-center">
              Konum ve Ulaşım Hakkında Sıkça Sorulan Sorular
            </h2>

            <div className="space-y-4">
              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>{"Bumex Garage nerede ve 7. Cadde'ye nasıl gidilir?"}</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Bumex Garage, Ankara Bahçelievler Prof. Muammer Aksoy Caddesi (eski 2. Cadde) No: 48 adresindedir. Bahçelievler 7. Cadde&apos;ye (Aşkabat Caddesi) sadece 350 metre (yaklaşık 4 dakika) yürüme mesafesindedir.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>Burası eski Han-gar, Sonax-Würth veya Supark lokasyonu mu?</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Evet. Tesisimiz daha önce Bahçelievler&apos;de Han-gar, Sonax-Würth ve Supark Otopark ve Yıkama olarak hizmet vermiş olan No: 48 adresindedir. Günümüzde tamamen yenilenmiş kurumsal altyapısı ve modern ekipmanlarıyla Bumex Garage olarak faaliyetine devam etmektedir.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>Metro veya toplu taşıma ile nasıl ulaşabilirim?</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Ankaray Bahçelievler ve Emek metro istasyonlarına yaklaşık 750 metre (8-10 dakika yürüme), Milli Kütüphane metro istasyonuna ise 1.1 km mesafededir. Prof. Muammer Aksoy Caddesi üzerinden geçen minibüs ve otobüs hatları garajımızın hemen önünden geçmektedir.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>{"Alçak spor otomobiller veya büyük SUV'lar için giriş rampası uygun mu?"}</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Evet. Giriş ve iniş rampalarımızın açıları modifiyeli ve alçak şaseli spor otomobillerin altını veya tampon altı lipini sürtmemesi, geniş SUV&apos;ların ise rahatça manevra yapabilmesi için hassas standartlarda düzenlenmiştir.
                </p>
              </div>
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
