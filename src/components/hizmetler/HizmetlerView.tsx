'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Layers,
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Camera,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';
import { ServicesCatalog } from '@/components/landing/ServicesCatalog';
import { ProtocolModals, ProtocolType } from '@/components/landing/ProtocolModals';

export function HizmetlerView() {
  const { theme, isCream, toggleTheme } = useLandingTheme();
  const [activeModal, setActiveModal] = useState<ProtocolType>(null);
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
                <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Hizmetlerimiz</span>
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
                  <Layers className="w-3.5 h-3.5" />
                  <span>Bahçelievler Servisi • Şeffaf ve Modüler Hizmet Listesi</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                  Tamirhane Hizmet{' '}
                  <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Kartelası &amp; Modüler Servis</span>{' '}
                  Tablosu
                </h1>

                <p
                  className={`text-sm sm:text-base mt-3 max-w-2xl leading-relaxed ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Bahçelievler 7. Cadde lokasyonumuzda icra edilen 25+ tamirhane operasyonu: Mikron boya
                  restorasyonu, PPF kaplama, 9H nano seramik, ses izolasyonu, buharlı motor temizliği ve
                  motosiklet mekanik servisleri.
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
                  Otomobil Hizmetleri
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
                  Motosiklet Hizmetleri
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. TAM DETAYLI HİZMETLER KATALOĞU (Filtreler ve 25+ Kart) ─── */}
        <ServicesCatalog
          theme={theme}
          detailed={true}
          onOpenModal={(type) => setActiveModal(type)}
        />

        {/* ─── 3. SAYFALAR ARASI YÖNLENDİRME KÖPRÜLERİ (HİZMETLERİMİZ -> FİYATLAR, GALERİ, OTOPARK) ─── */}
        <section
          className={`py-16 px-4 sm:px-8 border-b transition-colors duration-200 ${
            isCream ? 'bg-white/60' : 'bg-[#181A1D]'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-[#60A5FA]">
                Bir Sonraki Adım
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                Fiyatları İnceleyin, Canlı Sonuçları Görün veya Tesisimizi Keşfedin
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Köprü 1: Fiyatlar */}
              <Link
                href={segment === 'motosiklet' ? '/motosiklet#fiyatlar' : '/#fiyatlar'}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                  isCream
                    ? 'bg-white border-[#6C6A6B]/25 hover:border-[#1E3A8A]'
                    : 'bg-[#222529] border-white/10 hover:border-[#60A5FA]'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/20 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition">
                    Şeffaf Paket Fiyatları
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Boya restorasyonu, seramik kaplama ve detaylı oto kuaför paketlerimizin net bütçe tablosu.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>Fiyat Listesini Gör</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Köprü 2: Galeri */}
              <Link
                href={segment === 'motosiklet' ? '/galeri#motosiklet' : '/galeri'}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                  isCream
                    ? 'bg-white border-[#6C6A6B]/25 hover:border-[#1E3A8A]'
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
                    className={`text-xs leading-relaxed ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Bu hizmetlerin Bahçelievler işletmemizde tamamlanan gerçek araçlar üzerindeki öncesi ve sonrası sonuçları.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>Galeriyi İncele</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Köprü 3: Otopark */}
              <Link
                href="/otopark"
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                  isCream
                    ? 'bg-white border-[#6C6A6B]/25 hover:border-[#1E3A8A]'
                    : 'bg-[#222529] border-white/10 hover:border-[#60A5FA]'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/20 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-[#1E3A8A] dark:group-hover:text-[#60A5FA] transition">
                    24/7 Güvenli Otopark
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Aracınızı teslim ederken sokak ve vale riskinden uzak, 24/7 güvenlik kameralı kapalı tesisimiz.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>Otoparkı Keşfet</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 4. DANIŞMANLIK & TAMİRHANE RANDEVU BANNERI ─── */}
        <section
          className={`py-16 px-4 sm:px-8 border-b transition-colors duration-200 ${
            isCream ? 'bg-[#DDD7D2]/60' : 'bg-[#141517]'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kombine ve Parça Bazlı İşlemler</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Aracınıza Özel Kombine Paket veya Tekil Uygulama
            </h2>
            <p
              className={`text-sm mt-3 max-w-xl mx-auto leading-relaxed ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Listelenen tüm hizmetler ihtiyacınıza göre modüler olarak seçilebilir veya kombine edilebilir.
              Uzman detailing ve mekanik ekibimizle görüşerek aracınız için en doğru protokolü oluşturun.
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
                <span>WhatsApp Hizmet Hattı</span>
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
                <span>Konumumuz &amp; Yol Tarifi</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Altbilgi (Footer) */}
      <LandingFooter
        theme={theme}
        onOpenModal={(type) => setActiveModal(type)}
      />

      {/* Mobil Arama Barı */}
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
