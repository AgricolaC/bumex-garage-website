'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  Zap,
  Gauge,
  Camera,
  Layers,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';

export function HakkimizdaView() {
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

  return (
    <div
      className={`min-h-screen transition-colors duration-200 landing-theme-${theme} ${isCream ? 'bg-[#E8E3DF] text-[#0D0D0D]' : 'bg-[#1B1D20] text-[#F4F4F5]'
        }`}
    >
      <LandingNavbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* ─── 1. BREADCRUMB & HERO ─── */}
        <section className="relative pt-10 pb-12 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold opacity-70">
                <Link href="/" className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition">
                  Ana Sayfa
                </Link>
                <span>/</span>
                <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Hakkımızda</span>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Ana Sayfaya Dön</span>
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#1E3A8A] dark:text-[#60A5FA] mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Bumex Garage Bahçelievler • Atölye Hikayemiz</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              Otomobiliniz ve Motosikletiniz İçin{' '}
              <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Yıkamadan Bakıma Atölye Hizmetleri</span>
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-3xl ${isCream ? 'text-[#4A4746]' : 'text-[#B0B6BD]'
                }`}
            >
              Bumex Garage, Ankara Bahçelievler 7. Cadde&apos;ye 350 metre mesafede; otomobil ve
              motosikletler için basit yıkamadan detaylı iç-dış bakıma, PPF ve seramik kaplamadan
              motosiklet tamirine kadar hizmet vermeye çalışan bağımsız bir atölyedir.
            </p>
          </div>
        </section>

        {/* ─── 2. ATÖLYE FELSEFEMİZ & KALİTE STANDARTLARI ─── */}
        <section className="py-16 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-[#60A5FA]">
                Çalışma Prensiplerimiz
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                İşimizi Yaparken Özen Gösterdiğimiz 4 Temel Nokta
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-2xl border ${isCream
                  ? 'bg-white/85 border-[#6C6A6B]/20 shadow-xs'
                  : 'bg-[#222529] border-white/10 shadow-md'
                  }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Dijital Mikron Ölçümü ve Vernik Koruması</h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                >
                  Her aracın boya katman kalınlığını dijital kalibre cihazlarla ölçerek çalışıyoruz.
                  Alman aşındırıcılar ve orbital cila teknikleriyle vernik mikronunu korumaya özen
                  gösteriyor, bu sayede daha temiz bir parlaklık hedefliyoruz.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${isCream
                  ? 'bg-white/85 border-[#6C6A6B]/20 shadow-xs'
                  : 'bg-[#222529] border-white/10 shadow-md'
                  }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">140°C Kuru Buhar ile Güvenli Detay</h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                >
                  Motor haznesi ve motosiklet detailing işlemlerinde elektronik soketleri ve buji
                  yuvalarını korumak için basınçsız 140°C kuru buhar tercih ediyoruz; böylece
                  oksitlenme ve elektriksel arıza riskini en aza indirmeye çalışıyoruz.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${isCream
                  ? 'bg-white/85 border-[#6C6A6B]/20 shadow-xs'
                  : 'bg-[#222529] border-white/10 shadow-md'
                  }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-4 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Sıfır Silikonlu Dolgu &amp; Kalıcı Sonuç</h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                >
                  Silikonlu dolgulara güvenmek yerine yüzeyi iyice arındırıp çizikleri gerçek
                  anlamda gidermeye çalışıyoruz, ardından 9H nano seramik ya da PPF ile
                  koruma altına alıyoruz.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${isCream
                  ? 'bg-white/85 border-[#6C6A6B]/20 shadow-xs'
                  : 'bg-[#222529] border-white/10 shadow-md'
                  }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Bahçelievler Lokasyon &amp; Güvenli Otopark</h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                >
                  Eski Sonax-Würth Han-gar ve Supark lokasyonu olarak bilinen 48 numaralı stüdyomuzda,
                  24/7 güvenlik kameralı ve alçak spor araçlara uygun kapalı garajda çalışmaya
                  özen gösteriyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. SAYFALAR ARASI YÖNLENDİRME KAPILARI (HAKKIMIZDA -> GALERİ, HİZMETLERİMİZ, KONUM) ─── */}
        <section
          className={`py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${isCream ? 'bg-[#DDD7D2]/50' : 'bg-[#151719]'
            }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bumex Garage Dünyasını Keşfedin</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Nereden Başlamak İstersiniz?
              </h2>
              <p
                className={`text-xs sm:text-sm mt-3 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
              >
                İster daha önce tamamladığımız canlı dönüşümleri inceleyin, ister 25+ atölye
                hizmetimizi keşfedin, isterseniz stüdyomuza gelerek doğrudan aracınız için mikron analizi alın.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Kapı 1: Galeri */}
              <Link
                href="/galeri"
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${isCream
                  ? 'bg-white/90 border-[#6C6A6B]/25 hover:border-[#1E3A8A]'
                  : 'bg-[#222529] border-white/10 hover:border-[#60A5FA]'
                  }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/20 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition">
                    Canlı Uygulama Galerisi
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                      }`}
                  >
                    Bahçelievler atölyemizde tamamlanan gerçek BMW, Porsche, motosiklet ve jant restorasyonlarının interaktif öncesi-sonrası karşılaştırmaları.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>Uygulamaları İncele</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Kapı 2: Hizmetlerimiz */}
              <Link
                href="/hizmetler"
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${isCream
                  ? 'bg-white/90 border-[#6C6A6B]/25 hover:border-[#1E3A8A]'
                  : 'bg-[#222529] border-white/10 hover:border-[#60A5FA]'
                  }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/20 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition">
                    Tüm Hizmetlerimiz
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                      }`}
                  >
                    PPF kaplama, 9H nano seramik, mikron pasta cila, buharlı motor temizliği, ses izolasyonu ve 25+ modüler atölye operasyon kartelası.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>Hizmet Kartelasını Aç</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Kapı 3: Konum & Ulaşım */}
              <Link
                href="/konum"
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${isCream
                  ? 'bg-white/90 border-[#6C6A6B]/25 hover:border-[#1E3A8A]'
                  : 'bg-[#222529] border-white/10 hover:border-[#60A5FA]'
                  }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/20 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition">
                    Konum &amp; Yol Tarifi
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                      }`}
                  >
                    Prof. Muammer Aksoy Cad. No: 48. Bahçelievler 7. Cadde&apos;ye 350 metre yürüme mesafesi, metro bağlantısı ve navigasyon rotası.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>Yol Tarifini Al</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 4. İLETİŞİM & HIZLI RANDEVU HATTI ─── */}
        <section className="py-14 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-black mb-3">
              Aracınızı Bize Emanet Edin
            </h3>
            <p
              className={`text-xs sm:text-sm max-w-lg mx-auto mb-6 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                }`}
            >
              Sorularınız ve randevu talepleriniz için ekibimize doğrudan telefon veya WhatsApp
              ile 10:00 – 22:00 saatleri arasında ulaşabilirsiniz.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm text-white bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-lg shadow-[#1E3A8A]/30 transition active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm text-white bg-[#1FAD4E] hover:bg-[#25C058] shadow-md transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Ekspertiz Hattı</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter
        theme={theme}
        onOpenModal={() => {
          window.location.href = '/hizmetler';
        }}
      />

      <MobileCallBar theme={theme} />
    </div>
  );
}
