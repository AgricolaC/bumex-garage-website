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
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B1418]" />
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
            Sürpriz ek maliyetler yok. Otomobil veya motosikletiniz için ihtiyacınıza uygun paketi
            seçebilir, tek tıkla peron müsaitliği sorgulayabilirsiniz.
          </p>

          {/* Sekme Değiştirici (Otomobil / Motosiklet) */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 gap-1.5 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('car')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition duration-200 ${
                activeTab === 'car'
                  ? 'bg-[#6B1418] text-white shadow-md shadow-[#6B1418]/30'
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
                  ? 'bg-[#6B1418] text-white shadow-md shadow-[#6B1418]/30'
                  : isCream
                  ? 'text-[#565352] hover:text-[#0D0D0D]'
                  : 'text-[#9DA3AA] hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Motosiklet Detailing</span>
              <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.2 rounded font-extrabold shadow-sm">
                ANKARA&apos;DA İLK
              </span>
            </button>
          </div>
        </div>

        {/* ─── TAB 1: OTOMOBİL PAKETLERİ ─── */}
        {activeTab === 'car' && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch animate-in fade-in duration-200">
            {/* Paket 1: Standart Yıkama */}
            <div
              className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-[#6C6A6B]">
                  <Droplets className="w-4 h-4 text-[#6B1418]" />
                  Periyodik Hijyen
                </div>

                <h3 className="text-xl font-black tracking-tight">Standart Yıkama</h3>

                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight">1.100 ₺</span>
                  <span className="text-xs text-[#6C6A6B] block mt-1">/ başlayan taban (Sedan)</span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  pH nötr çift kova yöntemiyle aracınızın boyasını çizmeden derinlemesine temizleyen
                  periyodik bakım paketi.
                </p>

                <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                <ul className="text-xs sm:text-sm space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Dış Aktif Kar Köpüğü & Çift Kova Silimi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>İç Detaylı Vakumlu Süpürge & Paspas Hijyeni</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Jant Balata Tozu Temizliği & Lastik Besleme</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Hızlı Cila ile Su İtici Parlaklık Katmanı</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
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
                  <Phone className="w-4 h-4 text-[#6B1418]" />
                  <span>Hemen Arayın: 0552 470 36 10</span>
                </a>
              </div>
            </div>

            {/* Paket 2: VIP Kuaför & Motor (Featured) */}
            <div
              className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative shadow-xl border-2 transition duration-200 hover:-translate-y-1 ${
                isCream ? 'bg-white border-[#6B1418]' : 'bg-[#222529] border-[#881B22]'
              }`}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B1418] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                ★ En Çok Tercih Edilen
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-[#6B1418]">
                  <Sparkles className="w-4 h-4 text-[#6B1418]" />
                  Kapsamlı Restorasyon
                </div>

                <h3 className="text-xl font-black tracking-tight">VIP İç Hijyen & Motor</h3>

                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#6B1418]">5.500 ₺</span>
                  <span className="text-xs text-[#6C6A6B] block mt-1">/ başlayan taban fiyat</span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Koltuklar, taban-tavan halıları ve hassas buharlı motor temizliğini içeren tam hijyen
                  ve kondisyon paketi.
                </p>

                <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                <ul className="text-xs sm:text-sm space-y-3 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Sıcak Sulu Ekstraksiyon ile Koltuk Yıkama</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Tavan, Taban ve Bagaj Detaylı Buharlı Temizliği</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Motor Bölgesi Dielektrik & Kuru Buhar Temizliği</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Klima Kanalları & Medikal Ozonla Koku Giderme</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Torpido ve Plastik Yüzeylere Mat UV Koruma</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => onOpenModal('motor')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                    isCream
                      ? 'border-[#6B1418]/30 text-[#6B1418] hover:bg-[#6B1418]/5'
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Motor Temizliği Protokolünü İncele</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="tel:05524703610"
                  className="w-full py-3 px-4 rounded-xl bg-[#6B1418] hover:bg-[#841920] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#6B1418]/30 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Müsaitlik İçin Ara: 0552 470 36 10</span>
                </a>
              </div>
            </div>

            {/* Paket 3: Detailing & Seramik */}
            <div
              className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-[#6C6A6B]">
                  <Shield className="w-4 h-4 text-[#6B1418]" />
                  Boya Koruma Zirvesi
                </div>

                <h3 className="text-xl font-black tracking-tight">Detailing & Seramik</h3>

                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight">Özel Teklif</span>
                  <span className="text-xs text-[#6C6A6B] block mt-1">/ Garajımızda Ücretsiz Ekspertizle</span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Aracınızın boya mikron ölçümü yapılarak çizik derinliği analiz edilir; rotary & orbital
                  çift aşamalı düzeltme ve 9H seramik uygulanır.
                </p>

                <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                <ul className="text-xs sm:text-sm space-y-3 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Demir Tozu & Kil (Clay Bar) ile Gözenek Temizliği</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Mikron Boya Kalınlık Analizi & Güvenli Zımpara</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Harez & Dairesel Çiziklerin %95+ Giderilmesi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>9H Nano Seramik Kaplama (24 Ay Dayanım)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                    <span>Hidrofobik Cam Su İtici & Jant Koruması</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => onOpenModal('detailing')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                    isCream
                      ? 'border-[#6B1418]/30 text-[#6B1418] hover:bg-[#6B1418]/5'
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Detailing Sürecini İncele</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="tel:05524703610"
                  className="w-full py-3 px-4 rounded-xl bg-[#6B1418] hover:bg-[#841920] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#6B1418]/30 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ücretsiz Ekspertiz İste</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 2: MOTOSİKLET DETAYLI BAKIM PAKETLERİ (ANKARA'DA BİR İLK) ─── */}
        {activeTab === 'bike' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Özel Motosiklet Başlık Kartı */}
            <div
              className={`p-6 rounded-2xl border text-center relative overflow-hidden ${
                isCream
                  ? 'bg-white/90 border-[#6B1418]/30 text-[#0D0D0D]'
                  : 'bg-[#222529] border-[#881B22] text-white'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-[#6B1418] text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5" /> ANKARA&apos;DA BİR İLK
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Motosikletle İlgili Her Şey Bumex Garage&apos;da
              </h3>
              <p
                className={`text-xs sm:text-sm max-w-2xl mx-auto mt-2 ${
                  isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                }`}
              >
                Zincir bakımından metal polisajına, kil dekontaminasyonundan seramik zırha kadar iki
                teker tutkunlarına özel profesyonel atölye standartları.
              </p>
              <div className="mt-3.5">
                <a
                  href="#restorasyon"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition border border-[#6B1418]/25 text-[#6B1418] bg-[#6B1418]/5 hover:bg-[#6B1418]/10"
                >
                  <span>📸 Atölye İçi Motosiklet Öncesi &amp; Sonrası Vitrinini İnceleyin</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>

            {/* 3 Resmi Motosiklet Paketi */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* 1. START PAKET - Temel Bakım */}
              <div
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#6B1418] text-white flex items-center justify-center font-black text-xs">
                      1
                    </span>
                    <span className="text-[11px] font-bold text-[#6C6A6B] uppercase tracking-wider">
                      Temel Bakım
                    </span>
                  </div>

                  <h4 className="text-xl font-black tracking-tight">START PAKET</h4>
                  <p className="text-xs text-[#6B1418] font-bold mt-1 mb-4">
                    Hızlı ve uygun fiyatlı temizlik
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-2.5 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Ön Yıkama & Aktif Köpükleme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Detaylı Dış Gövde Yıkaması</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Jant ve Lastik Temizliği</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Plastik Aksam Temizliği & Bakımı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Özel Bezlerle Çiziksiz Kurulama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Lastik Parlatma & Koruma</span>
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
                  <Phone className="w-4 h-4 text-[#6B1418]" />
                  <span>Start Paket İçin Ara</span>
                </a>
              </div>

              {/* 2. PRO PAKET - Detaylı Temizlik ve Yenileme */}
              <div
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative shadow-xl border-2 transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#6B1418]' : 'bg-[#222529] border-[#881B22]'
                }`}
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B1418] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  ★ ÇOK TERCİH EDİLEN
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#6B1418] text-white flex items-center justify-center font-black text-xs">
                      2
                    </span>
                    <span className="text-[11px] font-bold text-[#6B1418] uppercase tracking-wider">
                      Detaylı Yenileme
                    </span>
                  </div>

                  <h4 className="text-xl font-black tracking-tight">PRO PAKET</h4>
                  <p className="text-xs text-[#6B1418] font-bold mt-1 mb-4">
                    Günlük kirden öte, derinlemesine temizlik ve yenileme
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-2.5 mb-8">
                    <li className="flex items-start gap-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Start Paketindeki Tüm İşlemler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Motor ve Şase Detay Temizliği</span>
                    </li>
                    <li className="flex items-start gap-2 font-semibold text-[#6B1418]">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Zincir Temizliği & Profesyonel Yağlama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Fren Kaliperlerinin & Jantların Detaylı Temizliği</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Plastik Aksam Bakım & Renk Yenileme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Sele Derisi Detay Temizliği & Besleme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Egzoz ve Metal Yüzeylerin Temizliği</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Mikrofiber Bezlerle Detaylı Kurutma</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="tel:05524703610"
                  className="w-full py-3 px-4 rounded-xl bg-[#6B1418] hover:bg-[#841920] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#6B1418]/30 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Pro Paket Randevusu Al</span>
                </a>
              </div>

              {/* 3. PREMIUM DETAILING - Showroom Teslimi */}
              <div
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between border shadow-md transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#6B1418] text-white flex items-center justify-center font-black text-xs">
                      3
                    </span>
                    <span className="text-[11px] font-bold text-[#6C6A6B] uppercase tracking-wider">
                      Zirve Kondisyon
                    </span>
                  </div>

                  <h4 className="text-xl font-black tracking-tight">PREMIUM DETAILING</h4>
                  <p className="text-xs text-[#6B1418] font-bold mt-1 mb-4">
                    Motosikleti teslim aldığınızda &ldquo;sıfır gibi&rdquo; hissettiren paket
                  </p>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mb-5" />

                  <ul className="text-xs sm:text-sm space-y-2.5 mb-8">
                    <li className="flex items-start gap-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Pro Paketindeki Tüm İşlemler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Çok Detaylı Motor & Şase Arındırma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Jant, Kaliper ve Ulaşılmaz Bölgeler Detayı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Zincir Derin Temizlik + Yağlama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Metal Yüzey Parlatma & Plastik Trim Yenileme</span>
                    </li>
                    <li className="flex items-start gap-2 font-semibold text-[#6B1418]">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Kil Uygulaması (Clay Bar) & Yüzey Dekontaminasyonu</span>
                    </li>
                    <li className="flex items-start gap-2 font-semibold text-[#6B1418]">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Boya Parlatma & Koruyucu Uygulama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Ön Cam / Pleksi Temizliği ve Parlatma</span>
                    </li>
                    <li className="flex items-start gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1418] shrink-0 mt-0.5" />
                      <span>Son Kontrol & Showroom Teslimatı</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="tel:05524703610"
                  className="w-full py-3 px-4 rounded-xl bg-[#6B1418] hover:bg-[#841920] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#6B1418]/30 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Showroom Randevusu Al</span>
                </a>
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
          💡 Araç ve motosikletinizin anlık peron durumu ve randevu saatleri için Bahçelievler
          atölyemize doğrudan{' '}
          <a href="tel:05524703610" className="text-[#6B1418] font-bold underline">
            0552 470 36 10
          </a>{' '}
          numarasından veya WhatsApp üzerinden ulaşabilirsiniz.
        </div>
      </div>
    </section>
  );
}
