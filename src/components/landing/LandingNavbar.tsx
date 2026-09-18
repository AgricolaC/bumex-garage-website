'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Sun, Moon, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface LandingNavbarProps {
  theme: LandingTheme;
  toggleTheme: () => void;
}

export function LandingNavbar({ theme, toggleTheme }: LandingNavbarProps) {
  const isCream = theme === 'cream';

  return (
    <div className="w-full">
      {/* ─── YENİLENMİŞ PRESTİJLİ TOPBAR ─── */}
      <div
        className={`py-2 px-4 sm:px-8 text-xs transition-colors duration-200 border-b ${
          isCream
            ? 'bg-[#DDD7D2] text-[#3D3A39] border-[#6C6A6B]/20'
            : 'bg-[#141517] text-[#9EA4AB] border-white/10'
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          {/* Sol: Harita & Açık Adres (Doğrudan Google Haritalar Profiline Tıklanabilir) */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold hover:text-[#6B1418] transition group"
              title="Google Haritalar'da Bumex Garage Bahçelievler Konumunu Aç"
            >
              <MapPin className="w-3.5 h-3.5 text-[#6B1418] shrink-0 transition-transform group-hover:scale-110" />
              <span>
                <strong>Bumex Garage Bahçelievler</strong> • Prof. Muammer Aksoy Cad. (2. Cd.) No: 48
              </span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition" />
            </a>

            {/* Çalışma Saatleri Rozeti */}
            <span
              className={`hidden sm:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full border ${
                isCream
                  ? 'bg-black/5 border-black/10 text-[#4A4746]'
                  : 'bg-white/5 border-white/10 text-[#B0B6BD]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1FAD4E] animate-pulse" />
              <span>Açık • 08:30 – 20:00</span>
            </span>
          </div>

          {/* Sağ: Düzenli İletişim Kanalları & Tema Seçici */}
          <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap self-end md:self-auto text-xs">
            {/* Instagram */}
            <a
              href="https://instagram.com/bumex_garage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition flex items-center gap-1 font-medium"
              title="Instagram @bumex_garage"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span className="hidden lg:inline">@bumex_garage</span>
            </a>

            <span className="h-3 w-px bg-black/15 dark:bg-white/15" />

            {/* WhatsApp */}
            <a
              href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1FAD4E] transition flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1FAD4E]" />
              <span>WhatsApp</span>
            </a>

            <span className="h-3 w-px bg-black/15 dark:bg-white/15" />

            {/* Telefon */}
            <a
              href="tel:05524703610"
              className="hover:text-[#6B1418] transition font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#6B1418]" />
              <span>0552 470 36 10</span>
            </a>

            <span className="h-3 w-px bg-black/15 dark:bg-white/15" />

            {/* Tema Geçiş Butonu */}
            <button
              onClick={toggleTheme}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition border cursor-pointer active:scale-95 ${
                isCream
                  ? 'bg-white/80 border-black/10 text-[#0D0D0D] hover:bg-white shadow-xs'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              title={isCream ? 'Titanyum Grisi Koyu Moda Geç (Kısayol: T)' : 'Krem Açık Moda Geç (Kısayol: T)'}
            >
              {isCream ? (
                <>
                  <Moon className="w-3 h-3 text-[#6B1418]" />
                  <span>Koyu Mod</span>
                </>
              ) : (
                <>
                  <Sun className="w-3 h-3 text-[#E8A838]" />
                  <span>Krem Zemin</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ─── ANA NAVİGASYON ─── */}
      <nav
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
          isCream
            ? 'bg-[#E8E3DF]/95 border-[#6C6A6B]/20 text-[#0D0D0D]'
            : 'bg-[#1B1D20]/95 border-white/10 text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Elit ve Bold 'BG' İmzası */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none py-1"
            aria-label="Bumex Garage Ana Sayfa"
          >
            <span
              className={`font-black text-2xl sm:text-3xl tracking-tighter transition-all duration-200 group-hover:scale-105 ${
                isCream ? 'text-[#0D0D0D]' : 'text-white'
              }`}
            >
              B<span className="text-[#6B1418]">G</span>
            </span>
          </Link>

          {/* Menü Linkleri */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider">
            <a href="#hizmetler" className="hover:text-[#6B1418] transition">
              Hizmetlerimiz
            </a>
            <a href="#motosiklet" className="hover:text-[#6B1418] transition">
              Motosiklet Detailing
            </a>
            <a href="#restorasyon" className="hover:text-[#6B1418] transition">
              Restorasyon
            </a>
            <a href="#fiyatlar" className="hover:text-[#6B1418] transition">
              Paketler & Fiyatlar
            </a>
            <a href="#konum" className="hover:text-[#6B1418] transition">
              Konum
            </a>
          </div>

          {/* Sağ Aksiyonlar */}
          <div className="flex items-center gap-3">

            {/* Tema Geçiş Butonu (Ana Menüde Hızlı Erişim) */}
            <button
              onClick={toggleTheme}
              aria-label={isCream ? 'Titanyum Grisi Koyu Moda Geç' : 'Krem Açık Moda Geç'}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition border cursor-pointer active:scale-95 ${
                isCream
                  ? 'bg-white/80 border-black/10 text-[#0D0D0D] hover:bg-white'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              title={isCream ? 'Titanyum Grisi Koyu Moda Geç (Kısayol: T)' : 'Krem Açık Moda Geç (Kısayol: T)'}
            >
              {isCream ? (
                <Moon className="w-4 h-4 text-[#6B1418]" />
              ) : (
                <Sun className="w-4 h-4 text-[#E8A838]" />
              )}
            </button>

            <a
              href="tel:05524703610"
              className="inline-flex items-center gap-1.5 bg-[#6B1418] hover:bg-[#841920] text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded shadow-md shadow-[#6B1418]/25 transition active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Hemen Ara</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
