'use client';

import React, { useEffect } from 'react';
import { X, Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

export type ProtocolType = 'motor' | 'detailing' | null;

interface ProtocolModalsProps {
  activeModal: ProtocolType;
  onClose: () => void;
  theme: LandingTheme;
}

export function ProtocolModals({ activeModal, onClose, theme }: ProtocolModalsProps) {
  const isCream = theme === 'cream';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl border relative transition-colors duration-200 ${
          isCream
            ? 'bg-white border-[#6C6A6B]/30 text-[#0D0D0D]'
            : 'bg-[#222529] border-white/15 text-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-5 right-5 p-2 rounded-full text-[#6C6A6B] hover:text-white hover:bg-[#6B1418] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ─── MOTOR TEMİZLİĞİ MODAL ─── */}
        {activeModal === 'motor' && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6B1418]" />
              <span className="text-xs font-black text-[#6B1418] tracking-widest uppercase">
                Bumex Garage Özel Protokolü
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Motor Temizliği & Koruma Protokolü
            </h3>

            <p
              className={`text-sm leading-relaxed mb-4 ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Modern motor bölümleri hassas elektronik sensörler ve beyin üniteleri (ECU) barındırır.
              Bumex Garage&apos;da tazyikli su kesinlikle kullanılmaz; akım iletmeyen dielektrik
              kimyasallar, 140°C kuru buhar ve detay fırçalarıyla sıfır arıza riskiyle temizlenir.
            </p>

            {/* Gerçek Atölye Öncesi/Sonrası Uygulama Görseli */}
            <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 mb-6 aspect-[16/9] bg-black">
              <img
                src="/images/before-after/engine_bay_full.jpg"
                alt="Bumex Garage Gerçek Motor Temizliği Öncesi ve Sonrası"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2.5 py-1 rounded bg-black/85 text-white text-[11px] font-bold backdrop-blur-xs">
                  Atölye İçi Ham Sonuç: Üst (Önce) • Alt (Sonra)
                </span>
              </div>
            </div>

            {/* Adımlar */}
            <div className="space-y-3 mb-6">
              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    Elektronik İzolasyon & Maskeleme
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Akü, sigorta kutuları, alternatör ve beyin soketleri koruyucu kılıflarla kapatılır.
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    Dielektrik Yağ & Kir Çözücü
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Elektrik akımı iletmeyen özel formüllü solüsyonla blok üzerindeki zift ve yağlar yumuşatılır.
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    140°C Kuru Buhar & Detay Fırçalama
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Minimum nem oranlı kuru buhar ve yumuşak at kılı fırçalarla tüm girintiler arındırılır, hava ile kurulanır.
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    Antistatik Plastik & Hortum Koruması
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Kauçuk hortumlar ve plastik kapaklar çatlamaya karşı beslenir, toz tutmayan mat ipeksi katmanla kaplanır.
                  </p>
                </div>
              </div>
            </div>

            {/* Alt Kısım: Süre, Taban Fiyat ve İletişim */}
            <div
              className={`pt-5 border-t flex flex-wrap items-center justify-between gap-4 ${
                isCream ? 'border-[#6C6A6B]/20' : 'border-white/10'
              }`}
            >
              <div>
                <div className="text-xs text-[#6C6A6B]">
                  Tahmini Süre:{' '}
                  <strong className={`font-bold ${isCream ? 'text-black' : 'text-white'}`}>
                    45 – 60 Dakika
                  </strong>
                </div>
                <div className="text-sm font-extrabold mt-0.5">
                  Taban Fiyat:{' '}
                  <span className="text-[#6B1418] text-base">1.750 ₺&apos;den</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="tel:05524703610"
                  className="inline-flex items-center gap-1.5 bg-[#6B1418] hover:bg-[#841920] text-white text-xs font-bold px-4 py-2.5 rounded transition shadow-md shadow-[#6B1418]/25"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>0552 470 36 10</span>
                </a>
                <a
                  href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20Motor%20Temizli%C4%9Fi%20ve%20Koruma%20protokol%C3%BC%20i%C3%A7in%20bilgi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1FAD4E] hover:bg-[#25C058] text-white text-xs font-bold px-4 py-2.5 rounded transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ─── DETAILING & SERAMİK MODAL ─── */}
        {activeModal === 'detailing' && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6B1418]" />
              <span className="text-xs font-black text-[#6B1418] tracking-widest uppercase">
                Bumex Detailing Standartları
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Boya Düzeltme & 9H Seramik Protokolü
            </h3>

            <p
              className={`text-sm leading-relaxed mb-4 ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Boya düzeltme bir inceltme veya aşındırma operasyonu değil, mikron seviyesinde yüzey
              pürüzsüzleştirme ve derinlik kazandırma zanaatidir. Fabrika verniğinin mikron toleransı
              korunarak derin dairesel harezler yok edilir ve seramik zırhla kilitlenir.
            </p>

            {/* Gerçek 9H Seramik Kaplama Uygulama Görseli */}
            <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 mb-6 aspect-[16/9] bg-black">
              <img
                src="/images/hero/hero_bumex_ceramic.jpg"
                alt="Bumex Garage 9H Nano-Seramik Kaplama Zırhı"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded bg-black/85 text-white text-[11px] font-bold backdrop-blur-xs">
                  Bumex Garage 9H Nano-Seramik Zırhı
                </span>
                <span className="px-2.5 py-1 rounded bg-[#6B1418] text-white text-[10px] font-extrabold shadow">
                  24 Ay Dayanım
                </span>
              </div>
            </div>

            {/* Adımlar */}
            <div className="space-y-3 mb-6">
              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    Demir Tozu & Kil (Clay Bar) Dekontaminasyonu
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Boya gözeneklerine saplanmış fren tozu ve asfalttan kaynaklı reçineler mikroskobik düzeyde temizlenir.
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    Mikron Boya Kalınlık Haritası
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Her panel dijital mikron cihazıyla taranarak vernik rezervi hesaplanır, riskli bölgeler tespit edilir.
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    Çift Aşamalı Rotary & Orbital Düzeltme
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Ağır çizikler kontrollü rotary vuruşlarla düzeltilir; ardından orbital finiş ile harez ve hologram izleri sıfırlanır.
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-3.5 p-3.5 rounded-xl border ${
                  isCream ? 'bg-[#F4EFEA] border-[#6C6A6B]/20' : 'bg-[#1A1C1F] border-white/10'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#6B1418] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    İzopropil Alkol (IPA) & 9H Seramik Mühürleme
                  </h4>
                  <p
                    className={`text-xs mt-0.5 ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Pasta kalıntıları tamamen arındırılır; 9H nano seramik çapraz katmanla sürülerek 24 aya kadar UV koruma mühürlenir.
                  </p>
                </div>
              </div>
            </div>

            {/* Alt Kısım: Süre, Fiyat ve İletişim */}
            <div
              className={`pt-5 border-t flex flex-wrap items-center justify-between gap-4 ${
                isCream ? 'border-[#6C6A6B]/20' : 'border-white/10'
              }`}
            >
              <div>
                <div className="text-xs text-[#6C6A6B]">
                  Tahmini Süre:{' '}
                  <strong className={`font-bold ${isCream ? 'text-black' : 'text-white'}`}>
                    1 – 2 İş Günü
                  </strong>
                </div>
                <div className="text-sm font-extrabold mt-0.5">
                  Boya Ekspertizi:{' '}
                  <span className="text-[#6B1418] text-base">Garajımızda Ücretsiz</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="tel:05524703610"
                  className="inline-flex items-center gap-1.5 bg-[#6B1418] hover:bg-[#841920] text-white text-xs font-bold px-4 py-2.5 rounded transition shadow-md shadow-[#6B1418]/25"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hemen Ara: 0552 470 36 10</span>
                </a>
                <a
                  href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20Boya%20D%C3%BCzeltme%20ve%20Seramik%20protokol%C3%BC%20i%C3%A7in%20%C3%BCcretsiz%20ekspertiz%20randevusu%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1FAD4E] hover:bg-[#25C058] text-white text-xs font-bold px-4 py-2.5 rounded transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
