'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Phone,
  ChevronRight,
  Sparkles,
  Shield,
  Droplets,
  Bike,
  Car,
  Flame,
  Wrench,
  Settings,
  Truck,
  Layers,
  Wind,
  Atom,
  Sun,
  Volume2,
  Armchair,
  MessageCircle,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface PricingSectionProps {
  theme: LandingTheme;
  onOpenModal: (type: 'motor' | 'detailing') => void;
}

export function PricingSection({ theme, onOpenModal }: PricingSectionProps) {
  const isCream = theme === 'cream';
  const [activeTab, setActiveTab] = useState<'car' | 'bike'>('car');

  // URL hash #motosiklet ise otomatik olarak motosiklet sekmesini aç
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#motosiklet') {
      setActiveTab('bike');
    }
  }, []);

  return (
    <section
      id="fiyatlar"
      className={`py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${
        isCream ? 'bg-[#E8E3DF] border-[#6C6A6B]/20 text-[#0D0D0D]' : 'bg-[#1B1D20] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
              }`}
            >
              Paketler & Fiyat Listesi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Şeffaf Taban Fiyat Politikası
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
            }`}
          >
            Sürpriz ek maliyetler yok. Otomobil ve motosikletiniz için ihtiyacınıza uygun bakım ve onarım
            paketini seçebilir, tek tıkla peron ve servis randevusu alabilirsiniz.
          </p>

          {/* Sekme Değiştirici (Otomobil / Motosiklet) */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 gap-1.5 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('car')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition duration-200 ${
                activeTab === 'car'
                  ? 'bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/30'
                  : isCream
                  ? 'text-[#565352] hover:text-[#0D0D0D]'
                  : 'text-[#9DA3AA] hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Otomobil Paketleri</span>
            </button>

            <button
              type="button"
              id="motosiklet"
              onClick={() => setActiveTab('bike')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition duration-200 relative ${
                activeTab === 'bike'
                  ? 'bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/30'
                  : isCream
                  ? 'text-[#565352] hover:text-[#0D0D0D]'
                  : 'text-[#9DA3AA] hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Motosiklet Atölyesi</span>
              <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.2 rounded font-extrabold shadow-sm">
                ANKARA&apos;DA İLK
              </span>
            </button>
          </div>
        </div>

        {/* ─── TAB 1: OTOMOBİL PAKETLERİ ─── */}
        {activeTab === 'car' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            {/* 3 Ana Otomobil Paketi */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Paket 1: Standart Yıkama & Cila */}
              <div
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-[#6C6A6B]">
                    <Droplets className={`w-4 h-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                    Start Temel Temizlik
                  </div>

                  <h3 className="text-xl font-black tracking-tight">Start Paket Yıkama</h3>

                  <div className="my-4">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">800 ₺</span>
                    <span className="text-xs text-[#6C6A6B] block mt-1">/ başlayan taban fiyat</span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    pH nötr aktif kar köpüğü, çift kova grit-guard silimi ve hidrofobik polimer cila ile boyayı
                    çizmeden parlatan güvenli periyodik bakım.
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-3 mb-8">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>İç & Dış Detaylı Çiziksiz Yıkama</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Cilalı Yıkama ile Hızlı Su İtici Parlaklık</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Jant Balata Tozu Temizliği & Lastik Besleme</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>İç Detaylı Vakumlu Süpürge & Paspas Hijyeni</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Cam İçi ve Aynaların Leke Bırakmaz Silimi</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <a
                    href="tel:05524703610"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition ${
                      isCream
                        ? 'border-[#6C6A6B]/30 hover:bg-black/5 text-[#0D0D0D]'
                        : 'border-white/15 hover:bg-white/10 text-white'
                    }`}
                  >
                    <Phone className={`w-4 h-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                    <span>Hemen Arayın: 0552 470 36 10</span>
                  </a>
                </div>
              </div>

              {/* Paket 2: VIP Kuaför, Buhar & Motor (Featured) */}
              <div
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative shadow-xl border-2 transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#1E3A8A]' : 'bg-[#222529] border-[#2563EB]'
                }`}
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  ★ En Çok Tercih Edilen
                </div>

                <div>
                  <div className={`flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                    <Sparkles className="w-4 h-4" />
                    Kapsamlı Restorasyon & Hijyen
                  </div>

                  <h3 className="text-xl font-black tracking-tight">VIP Kuaför, Buhar & Motor</h3>

                  <div className="my-4">
                    <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>3.000 ₺</span>
                    <span className="text-xs text-[#6C6A6B] block mt-1">/ başlayan taban fiyat</span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Koltuklar, taban-tavan halıları, 140°C kuru buhar, medikal ozon ve sıfır riskli dielektrik
                    motor temizliğini içeren tam kondisyon paketi.
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-3 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Detaylı Araç İçi Kuaför & Sıcak Ekstraksiyon</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Buharlı Araç Temizliği (Klima & Havalandırma 140°C)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Motor Temizliği (Dielektrik Yalıtkan & Kuru Buhar)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Ozon Temizliği (Medikal O₃ ile Koku ve Bakteri İmhası)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Far Temizliği & Torpido Mat UV Kalkanı</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenModal('motor')}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                      isCream
                        ? 'border-[#1E3A8A]/30 text-[#1E3A8A] hover:bg-[#1E3A8A]/5'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Motor Temizliği Protokolünü İncele</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:05524703610"
                    className="w-full py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1E3A8A]/30 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Müsaitlik İçin Ara: 0552 470 36 10</span>
                  </a>
                </div>
              </div>

              {/* Paket 3: Detailing, PPF & Seramik */}
              <div
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-[#6C6A6B]">
                    <Shield className={`w-4 h-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                    Boya Restorasyonu & Zırh
                  </div>

                  <h3 className="text-xl font-black tracking-tight">Detailing, PPF & 9H Seramik</h3>

                  <div className="my-4">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">Özel Teklif</span>
                    <span className="text-xs text-[#6C6A6B] block mt-1">/ Garajımızda Ücretsiz Ekspertizle</span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Mikron kalınlık analiziyle fabrika verniği korunur; pasta cila, 9H nano seramik kalkan,
                    taş vuruklarına karşı PPF kaplama ve araç içi ses izolasyonu uygulanır.
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-3 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Pasta Cila ve Boya Koruma (Harezlerin %95+ Giderilmesi)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>9H Nano Seramik Kaplama (24 Aya Kadar Dayanım)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>PPF Kaplama (Poliüretan Kendi Kendini Yenileyen Zırh)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Wax Uygulaması (Doğal Karnauba Boya Besleme)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Araç İçi Ses İzolasyonu Danışmanlığı & Uygulaması</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenModal('detailing')}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                      isCream
                        ? 'border-[#1E3A8A]/30 text-[#1E3A8A] hover:bg-[#1E3A8A]/5'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Detailing Sürecini İncele</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:05524703610"
                    className="w-full py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1E3A8A]/30 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Ücretsiz Ekspertiz İste</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bireysel Otomobil Hizmet Listesi (Görseldeki 12 Maddenin Hızlı Kartelası) */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isCream ? 'bg-white/80 border-[#6C6A6B]/20' : 'bg-[#222529]/90 border-white/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6C6A6B]">
                      Modüler Servis Tablosu
                    </span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight">
                    Tüm Bireysel Otomobil Hizmetlerimiz (12 Kalem)
                  </h3>
                </div>
                <a
                  href="tel:05524703610"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1E3A8A] dark:text-[#60A5FA] hover:underline"
                >
                  <span>Özel Fiyat & Peron Müsaitliği Sorgula</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
                {[
                  { num: '01', title: 'İç-Dış Yıkama', desc: 'pH nötr köpük, çift kova ve mikrofiber kurulama', icon: Car },
                  { num: '02', title: 'Cilalı Yıkama', desc: 'Hidrofobik polimer koruma ve su iticilik', icon: Sparkles },
                  { num: '03', title: 'Buharlı Araç Temizliği', desc: '140°C kuru buharla havalandırma sterilizasyonu', icon: Wind },
                  { num: '04', title: 'Far Temizliği', desc: 'Sararan polikarbonat farların optik yenilenmesi', icon: Sun },
                  { num: '05', title: 'Motor Temizliği', desc: 'Sıfır su hasarlı dielektrik kuru buhar', icon: Wrench },
                  { num: '06', title: 'Wax Uygulaması', desc: 'Karnauba cila ile derin ıslak görünüm', icon: Droplets },
                  { num: '07', title: 'Ozon Temizliği', desc: 'Medikal O₃ ile bakteri ve koku yok etme', icon: Atom },
                  { num: '08', title: 'Detaylı Araç İçi Kuaför', desc: 'Sıcak ekstraksiyon koltuk ve taban yıkama', icon: Armchair },
                  { num: '09', title: 'Pasta Cila ve Boya Koruma', desc: 'Mikron analizli çizik ve hare giderme', icon: Sparkles },
                  { num: '10', title: 'Seramik Kaplama', desc: '9H nano koruma kalkanı ve ayna parlaklığı', icon: Shield },
                  { num: '11', title: 'PPF Kaplama', desc: 'Taş vuruklarına karşı TPU koruyucu film', icon: Layers },
                  { num: '12', title: 'Araç İçi Ses İzolasyonu', desc: 'Akustik sönümleme ve kabin uğultu önleme', icon: Volume2 },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.num}
                      className={`p-3.5 rounded-xl border flex items-start gap-3 transition ${
                        isCream
                          ? 'bg-[#F2ECE8]/70 border-black/5 hover:border-[#1E3A8A]/30'
                          : 'bg-[#181A1D] border-white/5 hover:border-[#2563EB]/40'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-md bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center font-black text-[11px] shrink-0">
                        {s.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 font-bold mb-0.5">
                          <Icon className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                          <span>{s.title}</span>
                        </div>
                        <p className={`text-[11px] leading-tight ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 2: MOTOSİKLET DETAYLI BAKIM, TAMİR & ÇEKİCİ (ANKARA'DA BİR İLK) ─── */}
        {activeTab === 'bike' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            {/* Özel Motosiklet Başlık Kartı */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border text-center relative overflow-hidden ${
                isCream
                  ? 'bg-white/95 border-[#1E3A8A]/30 text-[#0D0D0D]'
                  : 'bg-[#222529] border-[#2563EB]/40 text-white'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow">
                <Flame className="w-4 h-4 text-amber-400" /> ANKARA&apos;NIN 1 NUMARALI MOTOSİKLET ATÖLYESİ
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Motosiklet Detailing, Mekanik Bakım &amp; 7/24 Çekici
              </h3>
              <p
                className={`text-xs sm:text-sm max-w-3xl mx-auto mt-3 leading-relaxed ${
                  isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                }`}
              >
                Ankara Bahçelievler&apos;de iki teker tutkunlarına özel komple atölye: Basınçsız buharlı yıkama,
                grenaj pasta cila &amp; seramik, PPF, varyatör temizliği, yağ/mekanik tamiri, plastik grenaj kaynağı
                ve yolda kalanlar için 7/24 özel motosiklet çekici hizmeti.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
                <a
                  href="#restorasyon"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition border border-[#1E3A8A]/25 text-[#1E3A8A] dark:text-[#60A5FA] bg-[#1E3A8A]/5 hover:bg-[#1E3A8A]/10"
                >
                  <span>📸 Motosiklet Öncesi &amp; Sonrası Vitrinini Gör</span>
                  <span className="text-[10px]">↗</span>
                </a>
                <a
                  href="tel:05524703610"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#1E3A8A] text-white hover:bg-[#1D4ED8] transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Motosiklet Hattı: 0552 470 36 10</span>
                </a>
              </div>
            </div>

            {/* BÖLÜM 1: 3 Resmi Motosiklet Yıkama, Detailing & Koruma Paketi */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
                <h4 className="text-lg font-black tracking-tight uppercase">
                  1. Motosiklet Yıkama, Detailing &amp; Koruma Paketleri
                </h4>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {/* 1. START PAKET - Temel Bakım */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                    isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-black text-xs">
                        1
                      </span>
                      <span className="text-[11px] font-bold text-[#6C6A6B] uppercase tracking-wider">
                        Hızlı & Güvenli Temizlik
                      </span>
                    </div>

                    <h4 className="text-xl font-black tracking-tight">START PAKET</h4>
                    <p className={`text-xs font-bold mt-1 mb-2 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Motor Yıkama &amp; Cilalı Koruma
                    </p>

                    <div className="my-3">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight">800 ₺</span>
                      <span className="text-xs text-[#6C6A6B] block mt-0.5">/ başlayan taban fiyat</span>
                    </div>

                    <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-4" />

                    <ul className="text-xs sm:text-sm space-y-2.5 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Motor Yıkama (pH Nötr Aktif Köpükleme)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Cilalı Yıkama ile Hidrofobik Parlaklık</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Jant ve Lastik Detay Temizliği</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Plastik Aksam Mat Besleme &amp; Bakımı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Özel Peluş Bezlerle Çiziksiz Kurulama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Lastik Parlatma &amp; Koruyucu Kaplama</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:05524703610"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition ${
                      isCream
                        ? 'border-[#6C6A6B]/30 hover:bg-black/5 text-[#0D0D0D]'
                        : 'border-white/15 hover:bg-white/10 text-white'
                    }`}
                  >
                    <Phone className={`w-4 h-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                    <span>Start Paket İçin Ara</span>
                  </a>
                </div>

                {/* 2. PRO PAKET - Detaylı Temizlik ve Yenileme */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative shadow-xl border-2 transition duration-200 hover:-translate-y-1 ${
                    isCream ? 'bg-white border-[#1E3A8A]' : 'bg-[#222529] border-[#2563EB]'
                  }`}
                >
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    ★ ÇOK TERCİH EDİLEN
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-black text-xs">
                        2
                      </span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                        Buhar &amp; Mekanik Hijyen
                      </span>
                    </div>

                    <h4 className="text-xl font-black tracking-tight">PRO PAKET</h4>
                    <p className={`text-xs font-bold mt-1 mb-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Buharlı Yıkama, Zincir &amp; Derinlemesine Şase
                    </p>

                    <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                    <ul className="text-xs sm:text-sm space-y-2.5 mb-8">
                      <li className="flex items-start gap-2 font-semibold">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Start Paketindeki Tüm İşlemler</span>
                      </li>
                      <li className="flex items-start gap-2 font-semibold text-[#1E3A8A] dark:text-[#60A5FA]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Buharlı Yıkama (140°C Kuru Buhar ile Yağ Arındırma)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Motor Bloğu ve Şase Detay Arındırma</span>
                      </li>
                      <li className="flex items-start gap-2 font-semibold text-[#1E3A8A] dark:text-[#60A5FA]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Zincir Temizliği &amp; Profesyonel Yağlama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Fren Kaliperlerinin &amp; Jant Balata Tozlarının Silimi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Sele Derisi Temizliği &amp; UV Besleme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Egzoz ve Metal Yüzeylerin Arındırılması</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:05524703610"
                    className="w-full py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1E3A8A]/30 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Pro Paket Randevusu Al</span>
                  </a>
                </div>

                {/* 3. PREMIUM DETAILING, SERAMİK & KAPLAMA */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                    isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-black text-xs">
                        3
                      </span>
                      <span className="text-[11px] font-bold text-[#6C6A6B] uppercase tracking-wider">
                        Zirve Kondisyon
                      </span>
                    </div>

                    <h4 className="text-xl font-black tracking-tight">PREMIUM DETAILING &amp; SERAMİK</h4>
                    <p className={`text-xs font-bold mt-1 mb-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Pasta Cila, 9H Seramik, PPF &amp; Özel Kaplama
                    </p>

                    <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                    <ul className="text-xs sm:text-sm space-y-2.5 mb-8">
                      <li className="flex items-start gap-2 font-semibold">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Pro Paketindeki Tüm Buhar ve Şase İşlemleri</span>
                      </li>
                      <li className="flex items-start gap-2 font-semibold text-[#1E3A8A] dark:text-[#60A5FA]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Pasta Cila ve Boya Koruma (Grenaj Çizik Giderme)</span>
                      </li>
                      <li className="flex items-start gap-2 font-semibold text-[#1E3A8A] dark:text-[#60A5FA]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Motosiklet 9H Seramik Kaplama (Grenaj &amp; Depo Zırhı)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>PPF Kaplama (Ön Kafa, Far &amp; Sürtünme Koruması)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Kişiye Özel Kaplama (Custom Renk / Cast Folyo)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Kil Dekontaminasyonu &amp; Egzoz Metal Polisajı</span>
                      </li>
                      <li className="flex items-start gap-2 font-bold">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Son Kontrol &amp; Showroom Sıfır Teslimatı</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:05524703610"
                    className="w-full py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1E3A8A]/30 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Showroom Randevusu Al</span>
                  </a>
                </div>
              </div>
            </div>

            {/* BÖLÜM 2: Motosiklet Tamir ve Bakım Hizmetlerimiz (Mekanik Servis Atölyesi) */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isCream ? 'bg-white/85 border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Wrench className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6C6A6B]">
                      Atölye Mekanik Servisi
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black tracking-tight">
                    Motosiklet Tamir ve Bakım Hizmetlerimiz
                  </h4>
                  <p className={`text-xs sm:text-sm mt-1 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                    Yalnızca estetik değil; motorunuzun mekanik sağlığı, yürüyeni ve sürüş güvenliği için uzman usta kadrosu.
                  </p>
                </div>
                <a
                  href="tel:05524703610"
                  className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow transition shrink-0"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Mekanik Randevu Al</span>
                </a>
              </div>

              {/* 5 Mekanik Hizmet Kartı */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1- Yağ Bakımı */}
                <div
                  className={`p-5 rounded-xl border flex flex-col justify-between transition hover:-translate-y-0.5 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center font-bold">
                        <Droplets className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#1E3A8A] dark:text-[#60A5FA]">01</span>
                    </div>
                    <h5 className="text-base font-black tracking-tight mb-1.5">1- Yağ Bakımı</h5>
                    <p className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Motul / Castrol tam sentetik yüksek performans yağı, orijinal yağ filtresi değişimi, karter tapa pulu yenileme ve zincir gerginlik kontrolü.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Periyodik Değişim</span>
                    <a href="tel:05524703610" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Randevu Al ↗
                    </a>
                  </div>
                </div>

                {/* 2- Varyatör Bakımı */}
                <div
                  className={`p-5 rounded-xl border flex flex-col justify-between transition hover:-translate-y-0.5 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center font-bold">
                        <Settings className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#1E3A8A] dark:text-[#60A5FA]">02</span>
                    </div>
                    <h5 className="text-base font-black tracking-tight mb-1.5">2- Varyatör Bakımı</h5>
                    <p className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Maxi-scooter &amp; scooter modelleri için varyatör kapağı sökümü, iç toz arındırma, baga (kaydırıcı) ağırlık ölçümü, kayış kontrolü ve debriyaj balata bakımı.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Scooter &amp; Maxi-Scooter</span>
                    <a href="tel:05524703610" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Randevu Al ↗
                    </a>
                  </div>
                </div>

                {/* 3- Mekanik Tamiri */}
                <div
                  className={`p-5 rounded-xl border flex flex-col justify-between transition hover:-translate-y-0.5 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center font-bold">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#1E3A8A] dark:text-[#60A5FA]">03</span>
                    </div>
                    <h5 className="text-base font-black tracking-tight mb-1.5">3- Mekanik Tamiri</h5>
                    <p className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Fren kaliper &amp; balata değişimi, rulman, debriyaj teli, zincir-dişli seti montajı, süspansiyon ve genel arıza tespit/onarım hizmetleri.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Genel Revizyon</span>
                    <a href="tel:05524703610" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Randevu Al ↗
                    </a>
                  </div>
                </div>

                {/* 4- Grenaj Tamiri */}
                <div
                  className={`p-5 rounded-xl border flex flex-col justify-between transition hover:-translate-y-0.5 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center font-bold">
                        <Shield className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#1E3A8A] dark:text-[#60A5FA]">04</span>
                    </div>
                    <h5 className="text-base font-black tracking-tight mb-1.5">4- Grenaj Tamiri</h5>
                    <p className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Kırık, çatlak ve tırnakları kopmuş plastik grenajların termo-kaynağı, özel plastik dolgu macunu, astarlama ve orijinal renk kodunda fırın boya onarımı.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Plastik Kaynak &amp; Boya</span>
                    <a href="tel:05524703610" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Fiyat Al ↗
                    </a>
                  </div>
                </div>

                {/* 5- Aksesuar Montajı */}
                <div
                  className={`p-5 rounded-xl border flex flex-col justify-between transition hover:-translate-y-0.5 sm:col-span-2 lg:col-span-2 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center font-bold">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#1E3A8A] dark:text-[#60A5FA]">05</span>
                    </div>
                    <h5 className="text-base font-black tracking-tight mb-1.5">5- Aksesuar Montajı</h5>
                    <p className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Çakarlı LED sis farı ve röleli tesisat montajı, motor koruma demiri, koruma takozu, topcase çanta demiri, kablosuz şarjlı telefon tutucu ve egzoz montajı gibi tüm donanım eklemeleri.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Profesyonel Elektrik &amp; Mekanik Montaj</span>
                    <a href="tel:05524703610" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Randevu Al ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BÖLÜM 3: Motosiklet Çekici Hizmeti (Özel VIP Kurtarma Bandı) */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden shadow-lg ${
                isCream
                  ? 'bg-gradient-to-br from-[#1E3A8A] to-[#152C5B] text-white border-[#1E3A8A]'
                  : 'bg-gradient-to-br from-[#1A2E56] to-[#0F1A30] text-white border-[#2563EB]/40'
              }`}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2.5 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm">
                    <Truck className="w-3.5 h-3.5" /> 7/24 ANKARA İÇİ ÖZEL MOTOSİKLET TAŞIMA
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Motosiklet Çekici Hizmeti
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    Yolda kaldığınızda veya motosikletinizi bakım/detailing için garaja kendiniz getiremediğinizde
                    özel tekerlek sabitleme beşiği (wheel chock) ve yumuşak askı kemerli aracımızla adresinizden teslim
                    alıyor, işlemler tamamlandığında kapınıza güvenle geri getiriyoruz. Sıfır devrilme ve çizilme garantisi!
                  </p>
                  <div className="flex flex-wrap gap-4 pt-1 text-xs font-bold text-blue-200">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Özel Ön Teker Kitleme Beşiği
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Süspansiyon Korumalı Askı Kemerleri
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Kapıdan Kapıya VIP Transfer
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                  <a
                    href="tel:05524703610"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] font-black text-sm px-6 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 transition active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Acil Çekici Çağır: 0552 470 36 10</span>
                  </a>
                  <a
                    href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20motosiklet%20%C3%A7ekici%20ve%20transfer%20hizmeti%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Konum Gönder</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bilgilendirme Notu */}
        <div
          className={`mt-10 p-4 rounded-xl border text-center text-xs ${
            isCream
              ? 'bg-white/60 border-[#6C6A6B]/20 text-[#565352]'
              : 'bg-[#151618] border-white/10 text-[#9DA3AA]'
          }`}
        >
          💡 Otomobil ve motosikletinizin anlık peron durumu, mekanik servis randevuları ve çekici transferi için Bahçelievler
          atölyemize doğrudan{' '}
          <a href="tel:05524703610" className="text-[#1E3A8A] dark:text-[#60A5FA] font-bold underline">
            0552 470 36 10
          </a>{' '}
          numarasından veya WhatsApp üzerinden dilediğiniz an ulaşabilirsiniz.
        </div>
      </div>
    </section>
  );
}
