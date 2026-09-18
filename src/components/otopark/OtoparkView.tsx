'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CloudRain,
  Car,
  Bike,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle2,
  Navigation,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';

export function OtoparkView() {
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
        {/* ─── HERO BÖLÜMÜ ─── */}
        <section className="relative pt-12 pb-20 px-4 sm:px-8 border-b border-black/10 dark:border-white/10 overflow-hidden">
          {/* Arka Plan Atmosfer Deseni */}
          <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1E3A8A] blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1E3A8A] blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold mb-6 opacity-70">
              <Link href="/" className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition">
                Ana Sayfa
              </Link>
              <span>/</span>
              <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Kapalı Otopark & Park & Wash</span>
            </div>

            {/* Rozet */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border border-[#1E3A8A]/30 dark:border-[#3B82F6]/30 bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/25 text-[#1E3A8A] dark:text-[#60A5FA] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1E3A8A] dark:bg-[#60A5FA] animate-ping" />
              <span>7. Cadde&apos;ye 350 Metre • 24/7 CCTV Güvenlikli • Kapalı Otopark</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Bahçelievler&apos;in Güvenli, Ferah ve{' '}
              <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Korunaklı Kapalı Otoparkı</span>
            </h1>

            <p
              className={`text-base sm:text-lg max-w-3xl leading-relaxed mb-8 ${
                isCream ? 'text-[#4A4746]' : 'text-[#A1A7B0]'
              }`}
            >
              Dar sokakların park krizinden, kaldırım sürtme risklerinden ve Ankara&apos;nın sert hava
              şartlarından (dolu, kavurucu güneş, kar) uzakta. 7. Cadde&apos;ye (Aşkabat Caddesi) sadece 4 dakika
              yürüme mesafesinde, 24 saat kamera gözetimli kapalı park alanı.
            </p>

            {/* Aksiyon Butonları */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%207.%20Cadde%20kapal%C4%B1%20otopark%20m%C3%BCsaitlik%20ve%20giri%C5%9F%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-[#1FAD4E]/20 transition active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Müsaitlik & Giriş Bilgisi Al</span>
              </a>

              <a
                href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm sm:text-base font-bold px-6 py-3.5 rounded-lg border transition active:scale-95 ${
                  isCream
                    ? 'bg-white/80 border-black/15 text-[#0D0D0D] hover:bg-white'
                    : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                }`}
              >
                <Navigation className="w-5 h-5 text-[#1E3A8A] dark:text-[#60A5FA]" />
                <span>Google Haritalar Yol Tarifi</span>
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>

              <a
                href="tel:05524703610"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] dark:text-[#60A5FA] hover:underline px-2 py-3"
              >
                <Phone className="w-4 h-4" />
                <span>0552 470 36 10</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── 4 TEMEL GÜVENCE / RIGOR PILLARS ─── */}
        <section className="py-16 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] dark:text-[#60A5FA]">
                Maksimum Güvenlik Standartları
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2">
                Neden Bumex Garage Kapalı Otoparkı?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kart 1: 24/7 CCTV */}
              <div
                className={`p-6 rounded-xl border transition ${
                  isCream
                    ? 'bg-[#F2ECE8] border-black/10'
                    : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">24/7 CCTV Kamera Gözetimi</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Aracınız giriş anından çıkış anına kadar yüksek çözünürlüklü güvenlik kameraları
                  ve garaj personeli kontrolünde peron peron kayıt altındadır. Bilinmeyen sokak
                  köşelerinde oluşabilecek sürtme veya hasar kaygılarını unutun.
                </p>
              </div>

              {/* Kart 2: Dolu & Aşırı Hava Koruyucu Kalkan */}
              <div
                className={`p-6 rounded-xl border transition ${
                  isCream
                    ? 'bg-[#F2ECE8] border-black/10'
                    : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Dolu, Kar & UV Güneş Kalkanı</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Ankara&apos;nın aniden bastıran yıkıcı dolu fırtınalarına, boyayı yıpratan kavurucu
                  yaz güneşine ve kış donlarına karşı tam kapalı sığınak. Aracınızın boya ve vernik
                  ömrünü hava olaylarına karşı korur.
                </p>
              </div>

              {/* Kart 3: Alçak Şasili Spor Araç & SUV Rampaları */}
              <div
                className={`p-6 rounded-xl border transition ${
                  isCream
                    ? 'bg-[#F2ECE8] border-black/10'
                    : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Alçak Spor Araç & Geniş SUV Rampası</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Giriş ve iniş rampamız, modifiyeli ve alçak şaseli spor otomobillerin altını veya
                  ön lipini sürtmeyecek hassas eğim açısıyla tasarlanmıştır. Geniş aks aralığına sahip
                  büyük SUV&apos;lar için de ferah manevra ve kapı açma mesafesi sunar.
                </p>
              </div>

              {/* Kart 4: Motosiklet Güvenli Park İstasyonu */}
              <div
                className={`p-6 rounded-xl border transition ${
                  isCream
                    ? 'bg-[#F2ECE8] border-black/10'
                    : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center mb-4">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Motosiklet Özel Güvenli Park Alanı</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  İki teker tutkunları için kamera açısında, rüzgardan devrilme veya kaldırım
                  kurcalanması riski olmayan korunaklı özel park alanı. Motosikletler için ayrı zincir
                  sabitleme ve ekipman güvenlik desteği.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PARK & WASH İMZA İŞ AKIŞI ─── */}
        <section className="py-16 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div
              className={`p-8 sm:p-12 rounded-2xl border relative overflow-hidden ${
                isCream
                  ? 'bg-gradient-to-br from-white to-[#F0EAE5] border-black/10'
                  : 'bg-gradient-to-br from-[#202227] to-[#141518] border-white/10'
              }`}
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>İmza Deneyim</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">
                  Park & Wash: Zamanınızı Geri Kazanın
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-8 ${
                    isCream ? 'text-[#4A4746]' : 'text-[#A1A7B0]'
                  }`}
                >
                  7. Cadde&apos;de kafe, restoran veya iş randevunuza giderken aracınızı ya da
                  motosikletinizi kapalı otoparkımıza bırakın. Siz vakit geçirirken biz aracınızı
                  fırçasız pH-nötr köpükle yıkayalım, iç hijyenini tamamlayalım veya seramik
                  bakımını yapalım.
                </p>

                {/* 3 Adımlı Süreç */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div
                    className={`p-4 rounded-xl border ${
                      isCream ? 'bg-white/60 border-black/10' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="text-xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-1">01</div>
                    <div className="font-bold text-sm mb-1">Aracınızı Bırakın</div>
                    <div className="text-xs opacity-70">
                      Girişte kapalı perona park edin ve anahtarı teslim edin.
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-xl border ${
                      isCream ? 'bg-white/60 border-black/10' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="text-xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-1">02</div>
                    <div className="font-bold text-sm mb-1">7. Cadde&apos;yi Gezin</div>
                    <div className="text-xs opacity-70">
                      350 metre (4 dk) yürüyüşle Bahçelievler merkezinde işlerinizi tamamlayın.
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-xl border ${
                      isCream ? 'bg-white/60 border-black/10' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="text-xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-1">03</div>
                    <div className="font-bold text-sm mb-1">Kusursuz Teslim Alın</div>
                    <div className="text-xs opacity-70">
                      Çiziksiz yıkanmış, kurulanmış ve koruma altına alınmış olarak teslim alın.
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20Park%20%26%20Wash%20(otopark%20%2B%20y%C4%B1kama)%20hizmeti%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-md transition active:scale-95"
                >
                  <span>Park & Wash Rezervasyonu / Bilgi Al</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── YÜRÜME VE ULAŞIM MESAFELERİ ─── */}
        <section className="py-16 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] dark:text-[#60A5FA]">
                Stratejik Konum
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2">
                Merkezi Bahçelievler Yürüme Mesafeleri
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div
                className={`p-5 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-1">350 m</div>
                <div className="font-bold text-xs sm:text-sm">7. Cadde (Aşkabat)</div>
                <div className="text-[11px] opacity-70 mt-1">4 dk yürüme</div>
              </div>

              <div
                className={`p-5 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-1">0 m</div>
                <div className="font-bold text-xs sm:text-sm">Prof. Muammer Aksoy Cd.</div>
                <div className="text-[11px] opacity-70 mt-1">Kapıda (2. Cadde)</div>
              </div>

              <div
                className={`p-5 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-1">750 m</div>
                <div className="font-bold text-xs sm:text-sm">Bahçelievler / Emek Metro</div>
                <div className="text-[11px] opacity-70 mt-1">8 dk yürüme</div>
              </div>

              <div
                className={`p-5 rounded-xl border text-center ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-black text-[#1E3A8A] dark:text-[#60A5FA] mb-1">3-5 dk</div>
                <div className="font-bold text-xs sm:text-sm">Gazi & Hastaneler Bölgesi</div>
                <div className="text-[11px] opacity-70 mt-1">Araç mesafesi</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── OTOPARK SSS & GİRİŞ BİLGİLERİ ─── */}
        <section className="py-16 px-4 sm:px-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] dark:text-[#60A5FA]">
                Merak Edilenler
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2">
                Otopark Hakkında Sıkça Sorulan Sorular
              </h2>
            </div>

            <div className="space-y-4">
              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>Otopark ücretleri ve uzun dönem/aylık park imkanı var mı?</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Otoparkımız günlük, saatlik ve dönemsel kapasite durumuna göre hizmet vermektedir.
                  Güncel peron müsaitliği ve park seçenekleri için lütfen doğrudan{' '}
                  <a
                    href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20otopark%20fiyatlar%C4%B1%20ve%20m%C3%BCsaitlik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                    className="text-[#1E3A8A] dark:text-[#60A5FA] font-bold underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp üzerinden iletişime geçiniz
                  </a>
                  .
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>Vale riski veya aracı sokakta bırakma durumu olur mu?</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Kesinlikle hayır. Aracınız üçüncü şahıslara veya sokak aralarına emanet edilmez.
                  Doğrudan Prof. Muammer Aksoy Cad. No: 48 adresindeki resmi kapalı otopark
                  tesisimize alınır ve kameralı güvenli peronda kalır.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>Çalışma saatleri ve gece araç alımı var mı?</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Garajımız haftanın 7 günü 10:00 – 22:00 saatleri arasında kesintisiz açık olup
                  personel eşliğinde giriş-çıkış yapılmaktadır. Özel teslimat veya geç çıkış
                  talepleriniz için gün içinde görevli ekibimize bilgi vermeniz yeterlidir.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isCream ? 'bg-[#F2ECE8] border-black/10' : 'bg-[#22252A] border-white/10'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span>Burası eski Supark Otopark lokasyonu mu?</span>
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Evet. Yıllardır Bahçelievler sakinlerine Supark Otopark ve Yıkama olarak hizmet veren
                  tesisimiz, güncellenen premium ekipmanları ve Bumex Garage güvencesiyle aynı adreste
                  (Prof. Muammer Aksoy Cad. No: 48) hizmetine devam etmektedir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DOĞRUDAN İLETİŞİM & HARİTA ÇAĞRISI ─── */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-black mb-4">
              Aracınızı Güvenle Park Edin
            </h2>
            <p
              className={`text-sm sm:text-base max-w-xl mx-auto mb-8 ${
                isCream ? 'text-[#4A4746]' : 'text-[#A1A7B0]'
              }`}
            >
              Bahçelievler 7. Cadde ziyaretlerinizde park arama stresini bitirin. Yol tarifi alın veya
              WhatsApp ile anında ekibimizle iletişime geçin.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-[#1E3A8A]/25 transition active:scale-95"
              >
                <MapPin className="w-4 h-4" />
                <span>Haritada Aç & Yol Tarifi Al</span>
              </a>

              <a
                href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20otopark%20m%C3%BCsaitlik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ile Müsaitlik Sor</span>
              </a>

              <Link
                href="/"
                className={`inline-flex items-center gap-2 text-sm font-bold px-6 py-3.5 rounded-lg border transition ${
                  isCream
                    ? 'bg-white/80 border-black/15 text-[#0D0D0D] hover:bg-white'
                    : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                }`}
              >
                <span>Tüm Detailing Hizmetlerini İncele</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter
        theme={theme}
        onOpenModal={() => {
          // Otopark sayfasında modal tetiklenirse ana sayfaya yönlendir
          window.location.href = '/#hizmetler';
        }}
      />

      <MobileCallBar theme={theme} />
    </div>
  );
}
