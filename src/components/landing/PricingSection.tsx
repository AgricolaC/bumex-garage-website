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
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';

interface PricingSectionProps {
  theme: LandingTheme;
  onOpenModal: (type: 'motor' | 'detailing') => void;
}

export function PricingSection({ theme, onOpenModal }: PricingSectionProps) {
  const isCream = theme === 'cream';
  const { segment, setSegment, phone, phoneDisplay } = useWorkshopSegment();
  const activeTab = segment === 'otomobil' ? 'car' : 'bike';

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
              Paketler &amp; Fiyat Listesi
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

          {/* Sekme Değiştirici (Otomobil / Motosiklet - Daima Royal Blue) */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 gap-1.5 shadow-inner">
            <button
              type="button"
              onClick={() => setSegment('otomobil')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition duration-200 cursor-pointer ${
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
              onClick={() => setSegment('motosiklet')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition duration-200 relative cursor-pointer ${
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
                  href="tel:05465332844"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#1E3A8A] text-white hover:bg-[#1D4ED8] transition shadow-md shadow-[#1E3A8A]/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Motosiklet Hattı: 0546 533 28 44</span>
                </a>
              </div>
            </div>

            {/* BÖLÜM 1: 3 Resmi Motosiklet Yıkama, Detailing & Koruma Paketi */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
                <h4 className="text-lg font-black tracking-tight uppercase">
                  1. Motosiklet Yıkama &amp; Detailing Paketleri
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
                        Temel Bakım
                      </span>
                    </div>

                    <h4 className="text-xl font-black tracking-tight">START PAKET</h4>
                    <p className={`text-xs font-bold mt-1 mb-2 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Hızlı ve Uygun Fiyatlı Temizlik
                    </p>

                    <div className="my-3">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight">800 ₺</span>
                      <span className="text-xs text-[#6C6A6B] block mt-0.5">/ başlayan taban fiyat</span>
                    </div>

                    <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-4" />

                    <ul className="text-xs sm:text-sm space-y-2.5 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Ön Yıkama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Köpükleme (pH Nötr Şampuan)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Detaylı Dış Yıkama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Jant ve Lastik Temizliği</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Plastik Aksam Temizliği</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Kurulama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Lastik Parlatma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Hafif Plastik Bakım</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:05465332844"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition ${
                      isCream
                        ? 'border-[#6C6A6B]/30 hover:bg-black/5 text-[#0D0D0D]'
                        : 'border-white/15 hover:bg-white/10 text-white'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
                    <span>Start Paket İçin Ara</span>
                  </a>
                </div>

                {/* 2. PRO PAKET - Detaylı Temizlik ve Yenileme */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 relative overflow-hidden ${
                    isCream
                      ? 'bg-white border-[#1E3A8A]/30 ring-2 ring-[#1E3A8A]/20'
                      : 'bg-[#222529] border-[#2563EB]/40 ring-2 ring-[#2563EB]/20'
                  }`}
                >
                  <div className="absolute top-0 right-0 bg-[#1E3A8A] text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                    EN ÇOK TERCİH EDİLEN
                  </div>

                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400">
                        ORTA SEVİYE
                      </span>
                      <h5 className="text-xl font-black tracking-tight mt-2">Motosiklet Pro Paket</h5>
                      <p className={`text-xs mt-1 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                        Derinlemesine temizlik, zincir bakımı ve mekanik yenileme.
                      </p>
                    </div>

                    <div className="my-5 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black tracking-tight text-[#1E3A8A] dark:text-[#60A5FA]">
                          2.500
                        </span>
                        <span className="text-sm font-bold">₺</span>
                        <span className="text-xs text-[#6C6A6B] ml-1">&apos;den başlayan</span>
                      </div>
                      <span className="text-[11px] text-[#6C6A6B] block mt-1">
                        Scooter, Naked, Enduro, Racing segmentlerine göre değişir
                      </span>
                    </div>

                    <ul className="text-xs space-y-2.5 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span className="font-semibold">Start Paket&apos;teki Tüm İşlemler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span className="font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
                          Motor &amp; Şase Detaylı Temizliği
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span className="font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
                          Zincir Temizliği &amp; Motul Yağlama
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Fren Kaliperleri ve Disk Temizliği</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Plastik Aksam Besleme &amp; Yenileme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Deri / Vinil Sele Özel Bakımı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Egzoz ve Metal Yüzey Parlatma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Hızlı Cila ile Boya Koruma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Mikrofiber Bezlerle Detaylı Kurutma</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:05465332844"
                    className="w-full py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1E3A8A]/30 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Pro Paket Randevusu Al</span>
                  </a>
                </div>

                {/* 3. PREMIUM DETAILING */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                    isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                  }`}
                >
                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400">
                        SHOWROOM KALİTESİ
                      </span>
                      <h5 className="text-xl font-black tracking-tight mt-2">Motosiklet Premium Detailing</h5>
                      <p className={`text-xs mt-1 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                        Sıfır kilometre kondisyonu: Hare giderme, polisaj ve koruma.
                      </p>
                    </div>

                    <div className="my-5 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black tracking-tight text-[#1E3A8A] dark:text-[#60A5FA]">
                          5.000
                        </span>
                        <span className="text-sm font-bold">₺</span>
                        <span className="text-xs text-[#6C6A6B] ml-1">&apos;den başlayan</span>
                      </div>
                      <span className="text-[11px] text-[#6C6A6B] block mt-1">
                        Boya durumu, grenaj sayısı ve seramik opsiyonuna göre belirlenir
                      </span>
                    </div>

                    <ul className="text-xs space-y-2.5 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span className="font-semibold">Pro Paket&apos;teki Tüm İşlemler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span className="font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
                          Yüksek Detay Motor-Şase Arındırma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Metal, Krom &amp; Alüminyum Polisajı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Plastik Trim &amp; Sele Özel Bakım</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Kil Uygulaması + Yüzey Dekontaminasyonu</span>
                      </li>
                      <li className="flex items-start gap-2 font-semibold text-[#1E3A8A] dark:text-[#60A5FA]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Grenaj Pasta-Cila &amp; Hare Giderme</span>
                      </li>
                      <li className="flex items-start gap-2 font-semibold text-[#1E3A8A] dark:text-[#60A5FA]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Boya Koruyucu / Seramik Bazlı Kalkan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Kask Vizörü ve Pleksi Ön Cam Parlatma</span>
                      </li>
                      <li className="flex items-start gap-2 font-bold">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Son Kontrol + Showroom Teslimi</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="tel:05465332844"
                    className="w-full py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1E3A8A]/30 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Showroom Randevusu Al</span>
                  </a>
                </div>
              </div>
            </div>

            {/* BÖLÜM 2: Motosiklet Mekanik Servisi (Bakım - Arıza - Tamir) */}
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
                      Motosiklet Mekanik Atölyesi
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black tracking-tight">
                    Motosiklet Servis Hizmetlerimiz: Bakım • Arıza • Tamir
                  </h4>
                  <p className={`text-xs sm:text-sm mt-1 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                    Rutin periyodik bakımdan arıza teşhisine ve kaza sonrası hasar onarımına kadar 3 ana uzmanlık kalemi.
                  </p>
                </div>
                <a
                  href="tel:05465332844"
                  className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow transition shrink-0"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Mekanik Randevu Al</span>
                </a>
              </div>

              {/* 3 Ana Uzmanlık Sütunu: Bakım - Arıza - Tamir */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* 1. SÜTUN: BAKIM (Rutin & Periyodik Bakım) */}
                <div
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition hover:-translate-y-1 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center font-bold shadow-md">
                        <Settings className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA]">
                        01 • BAKIM
                      </span>
                    </div>

                    <h5 className="text-lg font-black tracking-tight mb-1">Rutin &amp; Periyodik Bakım</h5>
                    <p className={`text-xs font-semibold mb-3 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Düzenli Servis, Yağ &amp; Varyatör
                    </p>

                    <p className={`text-xs leading-relaxed mb-4 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Motosikletinizin motor ömrünü, yakıt verimini ve yürüyen aksam sağlığını koruyan rutin kontroller ve periyodik sıvı/filtre değişimleri.
                    </p>

                    <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-4" />

                    <ul className="text-xs space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Tam Sentetik Motor Yağı &amp; Orijinal Filtre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Varyatör &amp; Debriyaj Temizliği, Baga/Kayış Kontrolü</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Zincir Gerginlik Ayarı, Temizlik &amp; C3/C4 Yağlama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Buji Kontrolü &amp; Hava Filtresi Temizliği/Değişimi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Fren Hidroliği, Soğutma Sıvısı &amp; Genel Kontrol</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Periyodik Servis</span>
                    <a href="tel:05465332844" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Randevu Al ↗
                    </a>
                  </div>
                </div>

                {/* 2. SÜTUN: ARIZA (Mekanik & Elektriksel Arıza Onarımı) */}
                <div
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition hover:-translate-y-1 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center font-bold shadow-md">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA]">
                        02 • ARIZA
                      </span>
                    </div>

                    <h5 className="text-lg font-black tracking-tight mb-1">Mekanik &amp; Elektrik Arıza</h5>
                    <p className={`text-xs font-semibold mb-3 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Hızlı Teşhis &amp; Nokta Atışı Onarım
                    </p>

                    <p className={`text-xs leading-relaxed mb-4 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Sürüş esnasında ya da park halinde beliren mekanik sesler, ateşleme problemleri, şarj/elektrik ve fren arızalarının tespiti ve tamiri.
                    </p>

                    <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-4" />

                    <ul className="text-xs space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Mekanik Ses, Kompresyon &amp; Performans Arızası</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Ateşleme, Enjeksiyon &amp; Yakıt Sistemi Teşhisi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Marş Motoru, Şarj Dinamosu &amp; Elektrik Tesisatı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Fren Kaliperi, Balata, Disk &amp; Debriyaj Onarımı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Amortisör Keçesi, Rulman &amp; Yürüyen Aksam</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Arıza Teşhis</span>
                    <a href="tel:05465332844" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Arıza Bildir ↗
                    </a>
                  </div>
                </div>

                {/* 3. SÜTUN: TAMİR (Kaza Sonrası Tamirat & Hasar Onarımı) */}
                <div
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition hover:-translate-y-1 ${
                    isCream ? 'bg-[#F2ECE8]/80 border-black/5' : 'bg-[#191B1F] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center font-bold shadow-md">
                        <Shield className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-[#1E3A8A]/10 dark:bg-[#1E3A8A]/30 text-[#1E3A8A] dark:text-[#60A5FA]">
                        03 • TAMİR
                      </span>
                    </div>

                    <h5 className="text-lg font-black tracking-tight mb-1">Kaza Sonrası Tamirat</h5>
                    <p className={`text-xs font-semibold mb-3 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Hasar Onarımı, Grenaj Kaynak &amp; Boya
                    </p>

                    <p className={`text-xs leading-relaxed mb-4 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      Düşme ve kaza sonrası kırılan grenajların plastik kaynağı, fırın boya, şasi/maşa kontrolü ve hasar onarımı.
                    </p>

                    <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-4" />

                    <ul className="text-xs space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Kaza Hasar Tespiti &amp; Orijinal Parça Temini</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Kırık/Çatlak Grenaj Termo-Plastik Kaynağı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Orijinal Renk Fırın Boya &amp; Rötuş Eşleme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Şasi, Maşa, Gidon &amp; Jant Doğrultma Kontrolü</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                        <span>Koruma Demiri, Manet &amp; Aksesuar Montajı</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6C6A6B]">Hasar Restorasyonu</span>
                    <a href="tel:05465332844" className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline">
                      Hasar Bildir ↗
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
                    href="tel:05465332844"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] font-black text-sm px-6 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 transition active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Acil Çekici Çağır: 0546 533 28 44</span>
                  </a>
                  <a
                    href="https://wa.me/905465332844?text=Merhaba%20Bumex%20Garage,%20motosiklet%20%C3%A7ekici%20ve%20transfer%20hizmeti%20almak%20istiyorum."
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
          <a href={`tel:${phone}`} className="text-[#1E3A8A] dark:text-[#60A5FA] font-bold underline">
            {phoneDisplay}
          </a>{' '}
          ({segment === 'otomobil' ? 'Otomobil Hattı' : 'Motosiklet Hattı'}) veya WhatsApp üzerinden dilediğiniz an ulaşabilirsiniz.
        </div>
      </div>
    </section>
  );
}
