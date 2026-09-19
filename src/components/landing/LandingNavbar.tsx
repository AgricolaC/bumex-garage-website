'use client';

import React from 'react';
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

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1FAD4E] transition flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1FAD4E]" />
              <span>WhatsApp</span>
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

          {/* Menü Linkleri: Galeri -> Fiyatlar -> Hizmet Listesi -> Otopark -> Konum */}
          <div className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase tracking-wider">
            <Link
              href={segment === 'motosiklet' ? '/motosiklet#restorasyon' : '/#restorasyon'}
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
              href={segment === 'motosiklet' ? '/motosiklet#hizmetler' : '/#hizmetler'}
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Hizmet Listesi
            </Link>
            <Link
              href="/otopark"
              className="px-2.5 py-1 rounded bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] hover:bg-[#1E3A8A] hover:text-white transition font-black tracking-wide border border-[#1E3A8A]/30 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Güvenli Otopark</span>
            </Link>
            <Link href="/konum" className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition">
              Konum &amp; Ulaşım
            </Link>
          </div>

          {/* Sağ Aksiyon: Segmente Özel Tek Tıkla Arama Butonu */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1.5 text-white text-xs font-black px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md transition active:scale-95 bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-[#1E3A8A]/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneDisplay}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
