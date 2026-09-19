'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Sun,
  Moon,
  MapPin,
  Instagram,
  ExternalLink,
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';
import { BumexLogo } from './BumexLogo';

interface LandingNavbarProps {
  theme: LandingTheme;
  toggleTheme: () => void;
}

export function LandingNavbar({ theme, toggleTheme }: LandingNavbarProps) {
  const isCream = theme === 'cream';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { segment, setSegment, phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } =
    useWorkshopSegment();

  return (
    <div className="w-full">
      {/* ─── 1. PRESTİJLİ TOPBAR ─── */}
      <div
        className={`py-2 px-4 sm:px-8 text-xs transition-colors duration-200 border-b ${
          isCream
            ? 'bg-[#DDD7D2] text-[#3D3A39] border-[#6C6A6B]/20'
            : 'bg-[#141517] text-[#9EA4AB] border-white/10'
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          {/* Sol: Harita & Açık Adres */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition group"
              title="Google Haritalar'da Bumex Garage Bahçelievler Konumunu Aç"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0 transition-transform group-hover:scale-110" />
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
              <span>Açık • 10:00 – 22:00</span>
            </span>
          </div>

          {/* Sağ: Segment Telefonu, WhatsApp, Instagram & Tema Seçici */}
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

            {/* WhatsApp (Desktop & Tablet: Tickerda, Mobilde Sticky Bottom Barda) */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex hover:text-[#1FAD4E] transition items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1FAD4E]" />
              <span>WhatsApp</span>
            </a>

            <span className="hidden sm:inline-block h-3 w-px bg-black/15 dark:bg-white/15" />

            {/* Tema Geçiş Butonu */}
            <button
              onClick={toggleTheme}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition border cursor-pointer active:scale-95 ${
                isCream
                  ? 'bg-white/80 border-black/10 text-[#0D0D0D] hover:bg-white shadow-xs'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              title={isCream ? 'Titanyum Grisi Koyu Moda Geç (Kısayol: T)' : 'Krem Zemin (Kısayol: T)'}
            >
              {isCream ? (
                <>
                  <Moon className="w-3 h-3 text-[#1E3A8A]" />
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

      {/* ─── 2. ANA NAVİGASYON ─── */}
      <nav
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
          isCream
            ? 'bg-[#E8E3DF]/95 border-[#6C6A6B]/20 text-[#0D0D0D]'
            : 'bg-[#1B1D20]/95 border-white/10 text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          {/* Sol: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none py-1 shrink-0"
            aria-label="Bumex Garage Ana Sayfa"
          >
            <BumexLogo
              isCream={isCream}
              className="h-8 sm:h-9 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Menü Linkleri: Hakkımızda -> Galeri -> Fiyatlar -> Hizmetlerimiz -> Otopark -> Konum */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs font-bold uppercase tracking-wider">
            <Link
              href="/hakkimizda"
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Hakkımızda
            </Link>
            <Link
              href={segment === 'motosiklet' ? '/galeri#motosiklet' : '/galeri'}
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Galeri
            </Link>
            <Link
              href={segment === 'motosiklet' ? '/motosiklet#fiyatlar' : '/#fiyatlar'}
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Fiyatlar
            </Link>
            <Link
              href={segment === 'motosiklet' ? '/hizmetler#motosiklet' : '/hizmetler'}
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/otopark"
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Otopark
            </Link>
            <Link
              href="/konum"
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Konum
            </Link>
          </div>

          {/* Sağ Aksiyon: Segmente Özel Tek Tıkla Arama Butonu & Mobil Menü Butonu */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-white text-xs font-black px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md transition active:scale-95 bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-[#1E3A8A]/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneDisplay}</span>
            </a>

            {/* Mobil Menü Butonu (< lg ekranlar) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg border transition cursor-pointer ${
                isCream
                  ? 'bg-black/5 border-black/10 text-[#0D0D0D] hover:bg-black/10'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobil Açılır Menü (< lg) */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t px-4 py-4 transition-colors duration-200 ${
              isCream
                ? 'bg-[#E8E3DF] border-[#6C6A6B]/20 text-[#0D0D0D]'
                : 'bg-[#1B1D20] border-white/10 text-white'
            }`}
          >
            <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider">
              <Link
                href="/hakkimizda"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center justify-between"
              >
                <span>Hakkımızda</span>
                <span className="text-[10px] font-normal lowercase opacity-70">atölye felsefesi</span>
              </Link>
              <Link
                href={segment === 'motosiklet' ? '/galeri#motosiklet' : '/galeri'}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center justify-between"
              >
                <span>Galeri</span>
                <span className="text-[10px] font-normal lowercase opacity-70">öncesi / sonrası</span>
              </Link>
              <Link
                href={segment === 'motosiklet' ? '/motosiklet#fiyatlar' : '/#fiyatlar'}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
              >
                Fiyatlar
              </Link>
              <Link
                href={segment === 'motosiklet' ? '/hizmetler#motosiklet' : '/hizmetler'}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center justify-between"
              >
                <span>Hizmetlerimiz</span>
                <span className="text-[10px] font-normal lowercase opacity-70">25+ atölye işlemi</span>
              </Link>
              <Link
                href="/otopark"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
              >
                Otopark
              </Link>
              <Link
                href="/konum"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
              >
                Konum
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
