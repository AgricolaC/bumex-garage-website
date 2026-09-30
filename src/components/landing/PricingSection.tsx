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
  const { segment, setSegment, phone, phoneDisplay, whatsappNumber } = useWorkshopSegment();
  const activeTab = segment === 'otomobil' ? 'car' : 'bike';

  return (
    <section
      id="fiyatlar"
      className={`py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${
        isCream ? 'bg-[#EFECE6] border-[#686D7A]/15 text-[#111215]' : 'bg-[#0C0D10] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı - Anti-Cliché (No Eyebrow Kickers, Calibrated Posture) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
            Akıl almaz detay, akılcı fiyatlar.
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
            }`}
          >
            Sürpriz ek maliyetler ve gereksiz kalemler yok. Otomobil ve motosikletiniz için net taban fiyatlar, şeffaf atölye işçiliği.
          </p>

          {/* Sekme Değiştirici (Otomobil / Motosiklet - Short-Throw Gear-Shift Style) */}
          <div className="mt-8 relative inline-grid grid-cols-2 p-1.5 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 gap-1.5 shadow-inner">
            {/* Short-Throw Gear Lever Indicator Pill (Physical Overshoot & Settle) */}
            <div
              aria-hidden="true"
              className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.5625rem)] rounded-xl bg-[#1E3A8A] shadow-md shadow-[#1E3A8A]/30 pointer-events-none transition-transform duration-300 motion-reduce:transition-none"
              style={{
                transform:
                  activeTab === 'car'
                    ? 'translateX(0)'
                    : 'translateX(calc(100% + 0.375rem))',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />

            <button
              type="button"
              onClick={() => setSegment('otomobil')}
              className={`btn-mechanical relative z-10 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors duration-150 cursor-pointer ${
                activeTab === 'car'
                  ? 'text-white'
                  : isCream
                  ? 'text-[#5A5D66] hover:text-[#111215]'
                  : 'text-[#8E94A0] hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Otomobil Paketleri</span>
            </button>

            <button
              type="button"
              id="motosiklet"
              onClick={() => setSegment('motosiklet')}
              className={`btn-mechanical relative z-10 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors duration-150 cursor-pointer ${
                activeTab === 'bike'
                  ? 'text-white'
                  : isCream
                  ? 'text-[#5A5D66] hover:text-[#111215]'
                  : 'text-[#8E94A0] hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Motosiklet Tamirhanesi</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold transition-colors ${
                activeTab === 'bike' ? 'bg-white/20 text-white' : 'bg-[#1E3A8A] text-white'
              }`}>
                ÖZEL ATÖLYE
              </span>
            </button>
          </div>
        </div>

        {/* ─── TAB 1: OTOMOBİL PAKETLERİ ─── */}
        {activeTab === 'car' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            {/* 3 Ana Otomobil Paketi (Workshop Work-Order Manifests) */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Paket 1: Standart Yıkama & Cila */}
              <div
                className={`btn-mechanical p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition-all duration-150 ${
                  isCream ? 'bg-white border-[#686D7A]/15' : 'bg-[#141519] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-[#686D7A] dark:text-[#8E94A0]">
                    <Droplets className={`w-4 h-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                    01 // TEMEL BAKIM
                  </div>

                  <h3 className="text-xl font-bold tracking-tight">Start Paket Yıkama</h3>

                  <div className="my-4">
                    <span className="text-3xl sm:text-4xl font-mono font-bold tracking-tight">800 ₺</span>
                    <span className="text-xs font-mono text-[#686D7A] dark:text-[#8E94A0] block mt-1">/ net taban fiyat</span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
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
                    href={`https://wa.me/905524703610?text=${encodeURIComponent(
                      'Merhaba Bumex Garage, Hızlı Bakım & Yıkama paketi için müsaitlik ve randevu almak istiyorum.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mechanical w-full py-3 px-4 rounded-xl bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ile Randevu Al</span>
                  </a>
                </div>
              </div>

              {/* Paket 2: VIP Kuaför, Buhar & Motor (Featured Manifest) */}
              <div
                className={`btn-mechanical p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative shadow-xl border-2 transition-all duration-150 ${
                  isCream ? 'bg-white border-[#1E3A8A]' : 'bg-[#141519] border-[#1E3A8A] ring-1 ring-[#1E3A8A]/30'
                }`}
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  ★ EN ÇOK TERCİH EDİLEN
                </div>

                <div>
                  <div className={`flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                    <Sparkles className="w-4 h-4" />
                    02 // KAPSAMLI RESTORASYON & HİJYEN
                  </div>

                  <h3 className="text-xl font-bold tracking-tight">VIP Kuaför, Buhar & Motor</h3>

                  <div className="my-4">
                    <span className={`text-3xl sm:text-4xl font-mono font-bold tracking-tight ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>3.000 ₺</span>
                    <span className="text-xs font-mono text-[#686D7A] dark:text-[#8E94A0] block mt-1">/ net taban fiyat</span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                    }`}
                  >
                    Koltuklar, taban-tavan halıları, buharlı menfez temizliği, ozonla koku giderme ve dielektrik
                    korumalı güvenli motor temizliğini içeren tam kondisyon paketi.
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-3 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Detaylı Araç İçi Kuaför & Sıcak Ekstraksiyon</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Buharlı Araç Temizliği (Klima & Havalandırma Kanalları)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Motor Temizliği (Dielektrik Yalıtkan & Kuru Buhar)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Ozonlama ile İnatçı Koku & Bakteri Arındırma</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Torpido Mat UV Koruma & Far Yüzey Temizliği</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenModal('motor')}
                    className={`btn-mechanical w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                      isCream
                        ? 'border-[#1E3A8A]/30 text-[#1E3A8A] hover:bg-[#1E3A8A]/5'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Motor Temizliği Protokolünü İncele</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/905524703610?text=${encodeURIComponent(
                      'Merhaba Bumex Garage, VIP Kuaför, Buhar & Motor paketi için randevu ve peron müsaitliği almak istiyorum.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mechanical w-full py-3 px-4 rounded-xl bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ile Randevu Al</span>
                  </a>
                </div>
              </div>

              {/* Paket 3: Detailing, PPF & Seramik */}
              <div
                className={`btn-mechanical p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition-all duration-150 ${
                  isCream ? 'bg-white border-[#686D7A]/15' : 'bg-[#141519] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-[#686D7A] dark:text-[#8E94A0]">
                    <Shield className={`w-4 h-4 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                    03 // ÖZEL PROJE
                  </div>

                  <h3 className="text-xl font-bold tracking-tight">Boya Restorasyonu, PPF & 9H Seramik</h3>

                  <div className="my-4">
                    <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-[#1E3A8A] dark:text-[#60A5FA]">
                      Ücretsiz Ekspertiz
                    </span>
                    <span className="text-xs font-mono text-[#686D7A] dark:text-[#8E94A0] block mt-1">/ Duruma Göre Şeffaf Teklif</span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'
                    }`}
                  >
                    Sabit paket yerine araca özel çalışma: Mikron vernik analizi, panel ölçüleri ve mevcut çizik durumuna göre atölyemizde incelenerek sürprizsiz net teklif belirlenir.
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-3 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>Pasta Cila & Boya Restorasyonu (Harez ve Çizik Giderme)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>9H Seramik Kaplama (Su İticilik & Kimyasal Direnç)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                      <span>TPU PPF Kaplama (Taş Vuruklarına Karşı Şeffaf Koruma)</span>
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
                    className={`btn-mechanical w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                      isCream
                        ? 'border-[#1E3A8A]/30 text-[#1E3A8A] hover:bg-[#1E3A8A]/5'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Detailing Sürecini İncele</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/905524703610?text=${encodeURIComponent(
                      'Merhaba Bumex Garage, Detailing, PPF ve Seramik paketi için ücretsiz boya mikron ekspertizi randevusu almak istiyorum.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mechanical w-full py-3 px-4 rounded-xl bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ile Ekspertiz İste</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Şeffaf Fiyatlandırma Bilgilendirme Kutusu */}
            <div
              className={`mt-8 p-5 sm:p-6 rounded-2xl border text-xs sm:text-sm leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isCream
                  ? 'bg-white border-[#1E3A8A]/20 text-[#111215]'
                  : 'bg-[#141519] border-white/10 text-zinc-300'
              }`}
            >
              <div className="space-y-1 max-w-3xl">
                <div className="flex items-center gap-2 font-bold text-sm text-[#1E3A8A] dark:text-[#60A5FA]">
                  <span>💡</span>
                  <span>Fiyatlandırma Politikamız (Sabit Bakım vs. Özel Proje Ayrımı)</span>
                </div>
                <p className={isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'}>
                  Yıkama ve kuaför gibi düzenli bakım işlemleri standart taban fiyatlıdır (Hatchback baz alınır; SUV ve büyük segmentlerde işçilik süresine göre ölçeklenir). PPF kaplama, boya restorasyonu ve seramik gibi yüksek zanaat gerektiren projeler ise aracınızın boya kalınlığı ve panel durumu incelenmeden ezbere fiyatlandırılamaz; atölyemizde ücretsiz mikron ekspertizi sonrası karşılıklı teyit edilir.
                </p>
              </div>

              <a
                href={`https://wa.me/905524703610?text=${encodeURIComponent(
                  'Merhaba Bumex Garage, aracım için güncel fiyat bilgisi ve randevu almak istiyorum. Araç modelim: '
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mechanical shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md transition active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Modeliniz İçin Fiyat Sorun</span>
              </a>
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
                <Flame className="w-4 h-4 text-amber-400" /> BAHÇELİEVLER HASSAS MOTOSİKLET TAMİRHANESİ
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Motosiklet Detailing, Mekanik Bakım &amp; Transfer Desteği
              </h3>
              <p
                className={`text-xs sm:text-sm max-w-3xl mx-auto mt-3 leading-relaxed ${
                  isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                }`}
              >
                Ankara Bahçelievler&apos;de iki teker tutkunlarına özel komple tamirhane: Basınçsız buharlı yıkama,
                grenaj pasta cila &amp; seramik, PPF, varyatör temizliği, yağ/mekanik tamiri, plastik grenaj kaynağı
                ve tamirhane randevularında özel aparatlı transfer hazırlığı.
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
                <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                <h4 className="text-base font-bold tracking-tight uppercase text-zinc-300">
                  1. Motosiklet Yıkama &amp; Detailing Paketleri
                </h4>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {/* 1. START PAKET - Temel Bakım */}
                <div
                  className={`btn-mechanical p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition-all duration-150 ${
                    isCream ? 'bg-white border-[#686D7A]/15' : 'bg-[#141519] border-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-md bg-[#1E3A8A] text-white flex items-center justify-center font-mono font-bold text-xs">
                        1
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#686D7A] dark:text-[#8E94A0] uppercase tracking-wider">
                        TEMEL BAKIM
                      </span>
                    </div>

                    <h4 className="text-lg font-bold tracking-tight">START PAKET</h4>
                    <p className={`text-xs font-semibold mt-1 mb-2 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`}>
                      Hızlı ve Uygun Fiyatlı Temizlik
                    </p>

                    <div className="my-3">
                      <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight">800 ₺</span>
                      <span className="text-xs font-mono text-[#686D7A] dark:text-[#8E94A0] block mt-0.5">/ net taban fiyat</span>
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
                    href={`https://wa.me/905465332844?text=${encodeURIComponent(
                      'Merhaba Bumex Garage, Motosiklet Start Paket (800 TL) için randevu ve müsaitlik almak istiyorum.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mechanical w-full py-3 px-4 rounded-xl bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ile Randevu Al</span>
                  </a>
                </div>

                {/* 2. PRO PAKET - Detaylı Temizlik ve Yenileme */}
                <div
                  className={`btn-mechanical p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition-all duration-150 relative overflow-hidden ${
                    isCream
                      ? 'bg-white border-[#1E3A8A]/30 ring-2 ring-[#1E3A8A]/20'
                      : 'bg-[#141519] border-[#1E3A8A] ring-1 ring-[#1E3A8A]/30'
                  }`}
                >
                  <div className="absolute top-0 right-0 bg-[#1E3A8A] text-white text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                    EN ÇOK TERCİH EDİLEN
                  </div>

                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400">
                        ORTA SEVİYE
                      </span>
                      <h5 className="text-xl font-bold tracking-tight mt-2">Motosiklet Pro Paket</h5>
                      <p className={`text-xs mt-1 ${isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'}`}>
                        Derinlemesine temizlik, zincir bakımı ve mekanik yenileme.
                      </p>
                    </div>

                    <div className="my-5 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-mono font-bold tracking-tight text-[#1E3A8A] dark:text-[#60A5FA]">
                          2.500
                        </span>
                        <span className="text-sm font-bold">₺</span>
                        <span className="text-xs font-mono text-[#686D7A] dark:text-[#8E94A0] ml-1">&apos;den başlayan</span>
                      </div>
                      <span className="text-[11px] text-[#686D7A] dark:text-[#8E94A0] block mt-1">
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
                    href={`https://wa.me/905465332844?text=${encodeURIComponent(
                      'Merhaba Bumex Garage, Motosiklet Pro Paket için randevu ve peron müsaitliği almak istiyorum.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mechanical w-full py-3 px-4 rounded-xl bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ile Randevu Al</span>
                  </a>
                </div>

                {/* 3. PREMIUM DETAILING */}
                <div
                  className={`btn-mechanical p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition-all duration-150 ${
                    isCream ? 'bg-white border-[#686D7A]/15' : 'bg-[#141519] border-white/10'
                  }`}
                >
                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400">
                        SHOWROOM KALİTESİ
                      </span>
                      <h5 className="text-xl font-bold tracking-tight mt-2">Motosiklet Premium Detailing</h5>
                      <p className={`text-xs mt-1 ${isCream ? 'text-[#5A5D66]' : 'text-[#8E94A0]'}`}>
                        Sıfır kilometre kondisyonu: Hare giderme, polisaj ve koruma.
                      </p>
                    </div>

                    <div className="my-5 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-mono font-bold tracking-tight text-[#1E3A8A] dark:text-[#60A5FA]">
                          5.000
                        </span>
                        <span className="text-sm font-bold">₺</span>
                        <span className="text-xs font-mono text-[#686D7A] dark:text-[#8E94A0] ml-1">&apos;den başlayan</span>
                      </div>
                      <span className="text-[11px] text-[#686D7A] dark:text-[#8E94A0] block mt-1">
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
                    href={`https://wa.me/905465332844?text=${encodeURIComponent(
                      'Merhaba Bumex Garage, Motosiklet Premium Detailing (Showroom) için ekspertiz ve randevu almak istiyorum.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ile Randevu Al</span>
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
                      Motosiklet Mekanik Tamirhanesi
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
                  href={`https://wa.me/905465332844?text=${encodeURIComponent(
                    'Merhaba Bumex Garage, Motosiklet mekanik servis randevusu almak istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    <a
                      href={`https://wa.me/905465332844?text=${encodeURIComponent(
                        'Merhaba Bumex Garage, Motosiklet periyodik bakım ve servis randevusu almak istiyorum.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline flex items-center gap-1"
                    >
                      <span>Randevu Al</span>
                      <ChevronRight className="w-3 h-3" />
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
                    <a
                      href={`https://wa.me/905465332844?text=${encodeURIComponent(
                        'Merhaba Bumex Garage, Motosiklet arıza teşhisi ve mekanik onarım için randevu almak istiyorum.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline flex items-center gap-1"
                    >
                      <span>Arıza Bildir</span>
                      <ChevronRight className="w-3 h-3" />
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
                    <a
                      href={`https://wa.me/905465332844?text=${encodeURIComponent(
                        'Merhaba Bumex Garage, Motosiklet hasar onarımı ve grenaj tamiri için randevu almak istiyorum.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E3A8A] dark:text-[#60A5FA] hover:underline flex items-center gap-1"
                    >
                      <span>Hasar Bildir</span>
                      <ChevronRight className="w-3 h-3" />
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm border border-amber-400/30">
                    <Truck className="w-3.5 h-3.5" /> ÖZEL MOTOSİKLET TAŞIMA DESTEĞİ • ÇOK YAKINDA
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Motosiklet Transfer &amp; Taşıma Hizmeti (Çok Yakında)
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    Motosikletinizi bakım veya detailing için garaja kendiniz getiremediğiniz durumlarda;
                    özel tekerlek sabitleme beşiği (wheel chock) ve süspansiyon korumalı yumuşak askı aparatlı
                    kapalı transfer altyapımız çok yakında hizmetinizde olacaktır.
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
                      Tamirhane Randevulu Transfer Desteği
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                  <a
                    href="tel:05465332844"
                    className="hidden sm:inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] font-black text-sm px-6 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 transition active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Motosiklet Destek: 0546 533 28 44</span>
                  </a>
                  <a
                    href="https://wa.me/905465332844?text=Merhaba%20Bumex%20Garage,%20motosiklet%20%C3%A7ekici%20ve%20transfer%20hizmeti%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ile Bilgi Al</span>
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
          tamirhanemize doğrudan{' '}
          <a href={`tel:${phone}`} className="text-[#1E3A8A] dark:text-[#60A5FA] font-bold underline">
            {phoneDisplay}
          </a>{' '}
          ({segment === 'otomobil' ? 'Otomobil Hattı' : 'Motosiklet Hattı'}) veya WhatsApp üzerinden dilediğiniz an ulaşabilirsiniz.
        </div>
      </div>
    </section>
  );
}
