'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight, Instagram } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { BumexLogo } from './BumexLogo';

interface LandingFooterProps {
  theme: LandingTheme;
  onOpenModal: (type: 'motor' | 'detailing') => void;
}

export function LandingFooter({ theme, onOpenModal }: LandingFooterProps) {
  const isCream = theme === 'cream';

  return (
    <footer
      className={`pt-16 pb-24 md:pb-16 px-4 sm:px-8 border-t transition-colors duration-200 ${
        isCream
          ? 'bg-[#DDD7D2] border-[#6C6A6B]/20 text-[#0D0D0D]'
          : 'bg-[#121315] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Ana Izgara */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/10 dark:border-white/10">
          {/* Sütun 1: Logo & Hakkında (5 kolon) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group select-none">
              <BumexLogo
                isCream={isCream}
                className="h-12 sm:h-14 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p
              className={`text-xs sm:text-sm leading-relaxed max-w-sm ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Ankara Bahçelievler&apos;in seçkin otomobil ve motosikletlerine mikron seviyesinde boya
              restorasyonu, 9H nano seramik, ses izolasyonu, mekanik periyodik bakım ve randevulu transfer desteği
              sunan uzman bakım stüdyosu.
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href="tel:05524703610"
                className="inline-flex items-center gap-1.5 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white text-xs font-bold px-4 py-2 rounded shadow transition active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0552 470 36 10</span>
              </a>
              <a
                href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1FAD4E] hover:bg-[#25C058] text-white text-xs font-bold px-4 py-2 rounded transition active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Destek</span>
              </a>
              <a
                href="https://instagram.com/bumex_garage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold px-3.5 py-2 rounded shadow transition active:scale-95"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@bumex_garage</span>
              </a>
            </div>
          </div>

          {/* Sütun 2: Hızlı Bağlantılar & Protokoller (3 kolon) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#1E3A8A] dark:text-[#60A5FA]">
              Hizmetler &amp; Süreçler
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/motosiklet"
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center gap-1 font-semibold ${
                    isCream ? 'text-[#0D0D0D]' : 'text-white'
                  }`}
                >
                  Motosiklet Detailing &amp; Bakım <ArrowUpRight className="w-3 h-3 text-[#1E3A8A] dark:text-[#60A5FA]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/otopark"
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center gap-1 font-semibold ${
                    isCream ? 'text-[#0D0D0D]' : 'text-white'
                  }`}
                >
                  7. Cadde Güvenli Otoparkı <ArrowUpRight className="w-3 h-3 text-[#1E3A8A] dark:text-[#60A5FA]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/konum"
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center gap-1 font-semibold ${
                    isCream ? 'text-[#0D0D0D]' : 'text-white'
                  }`}
                >
                  Konum, Ulaşım &amp; Yol Tarifi <ArrowUpRight className="w-3 h-3 text-[#1E3A8A] dark:text-[#60A5FA]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#hizmetler"
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Resmi Hizmet Kartelası
                </Link>
              </li>
              <li>
                <Link
                  href="/#fiyatlar"
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Motosiklet Transfer Desteği (Yakında)
                </Link>
              </li>
              <li>
                <Link
                  href="/#restorasyon"
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Boya Düzeltme (Öncesi / Sonrası)
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('detailing')}
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition text-left flex items-center gap-1 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Detailing Protokolü <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('motor')}
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition text-left flex items-center gap-1 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  Kuru Buharlı Motor Protokolü <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Sütun 3: Garaj Bilgileri & Personel (4 kolon) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#1E3A8A] dark:text-[#60A5FA]">
              Atölye &amp; İletişim
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <Link
                  href="/konum"
                  className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition underline decoration-dotted ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                  title="Bumex Garage Konum & Ulaşım Bilgisi"
                >
                  Prof. Muammer Aksoy Cad. (Eski 2. Cadde) No: 48, Bahçelievler Mah. Çankaya / ANKARA ↗
                </Link>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <span className={isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}>
                  Her Gün: 10:00 – 22:00 (Haftanın 7 Günü Açık)
                </span>
              </div>
              <div className="pt-2 border-t border-black/5 dark:border-white/10 space-y-1.5">
                <div>
                  <span className="text-[#6C6A6B] block text-[11px]">Otomobil Destek &amp; Randevu:</span>
                  <a
                    href="tel:05524703610"
                    className="font-bold text-[#1E3A8A] dark:text-[#60A5FA] hover:underline"
                  >
                    0552 470 36 10
                  </a>
                </div>
                <div>
                  <span className="text-[#6C6A6B] block text-[11px]">Motosiklet Destek &amp; Randevu:</span>
                  <a
                    href="tel:05465332844"
                    className="font-bold text-[#1E3A8A] dark:text-[#60A5FA] hover:underline"
                  >
                    0546 533 28 44
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sessiz Varlık Uzlaşması (Entity Reconciliation Bridge) */}
        <div
          className={`py-4 border-b text-[11px] leading-relaxed transition-colors duration-200 ${
            isCream
              ? 'border-[#6C6A6B]/20 text-[#6C6A6B]'
              : 'border-white/10 text-[#80868E]'
          }`}
        >
          <p>
            <strong>Lokasyon &amp; Hizmet Bilgisi:</strong> Bumex Garage, Ankara Bahçelievler Prof. Muammer Aksoy Caddesi No: 48 adresinde (eski Han-gar, Sonax-Würth ve eski Supark Otopark ve Yıkama lokasyonunda) 5 ana operasyonel alanda — Otomobil Yıkama, Otomobil Detailing, Motosiklet Yıkama, Motosiklet Detailing ve 7. Cadde Güvenli Otopark Tesisleri — kesintisiz hizmet vermektedir.
          </p>
        </div>

        {/* Alt Bar: Telif */}
        <div
          className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
            isCream ? 'text-[#6C6A6B]' : 'text-[#80868E]'
          }`}
        >
          <div>
            © {new Date().getFullYear()} Bumex Garage Ankara. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-4">
            <span>Bahçelievler Otomobil & Motosiklet Bakım Stüdyosu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
