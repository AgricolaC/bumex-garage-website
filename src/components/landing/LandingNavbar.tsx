'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Sun,
  Moon,
  MapPin,
  Instagram,
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
  const [mounted, setMounted] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const turkeyHours = (now.getUTCHours() + 3) % 24;
    setIsOpenNow(turkeyHours >= 10 && turkeyHours < 22);
  }, []);

  const { segment, setSegment, phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } =
    useWorkshopSegment();

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 transition-colors duration-200 w-full"
    >
      {/* ─── TEKİL ANA NAVİGASYON ─── */}
      <nav
        className={`backdrop-blur-md border-b transition-colors duration-200 ${
          isCream
            ? 'bg-[#EFECE6]/95 border-[#686D7A]/15 text-[#111215]'
            : 'bg-[#0C0D10]/95 border-white/10 text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
          {/* Sol: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none py-1 shrink-0"
            aria-label="Bumex Garage Ana Sayfa"
          >
            <BumexLogo
              isCream={isCream}
              className="h-7 sm:h-8 md:h-9 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Menü Linkleri (Desktop - lg ve üstü) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs font-bold uppercase tracking-wider">
            <Link
              href="/hakkimizda"
              className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition"
            >
              Hakkımızda
            </Link>
            <Link
              href={segment === 'motosiklet' ? '/motosiklet#fiyatlar' : '/#fiyatlar'}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-price-card'));
                }
              }}
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

          {/* Sağ Aksiyon Grubu: Harita, Instagram, WhatsApp, Tema, Telefon & Mobil Menü */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Google Haritalar / Konum Linki */}
            <a
              href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition cursor-pointer flex items-center justify-center ${
                isCream
                  ? 'bg-black/5 border-black/10 text-[#111215] hover:bg-black/10'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              title="Google Haritalar'da Bahçelievler Atölyesi"
              aria-label="Google Haritalar'da Konum"
            >
              <MapPin className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
            </a>

            {/* Instagram (Desktop & Tablet) */}
            <a
              href="https://instagram.com/bumex_garage"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex p-2 rounded-lg border transition cursor-pointer items-center justify-center ${
                isCream
                  ? 'bg-black/5 border-black/10 text-[#111215] hover:bg-black/10'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              title="Instagram @bumex_garage"
              aria-label="Instagram @bumex_garage"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition cursor-pointer flex items-center justify-center ${
                isCream
                  ? 'bg-black/5 border-black/10 text-[#111215] hover:bg-black/10'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              title="WhatsApp Danışma Hattı"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#1FAD4E]" />
            </a>

            {/* Tema Geçiş Butonu (Light/Dark) */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition border cursor-pointer active:scale-95 flex items-center justify-center ${
                isCream
                  ? 'bg-black/5 border-black/10 text-[#111215] hover:bg-black/10'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
              }`}
              aria-label={isCream ? 'Titanyum Grisi Koyu Moda Geç (Kısayol: T)' : 'Krem Zemin Temasına Geç (Kısayol: T)'}
              title={isCream ? 'Koyu Moda Geç (T)' : 'Krem Moda Geç (T)'}
            >
              {isCream ? (
                <Moon className="w-4 h-4 text-[#1E3A8A]" />
              ) : (
                <Sun className="w-4 h-4 text-[#E8A838]" />
              )}
            </button>

            {/* Segmente Özel Tek Tıkla Arama Butonu (Desktop/Tablet) */}
            <a
              href={`tel:${phone}`}
              className="btn-mechanical hidden md:inline-flex items-center gap-1.5 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-md bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-[#1E3A8A]/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneDisplay}</span>
            </a>

            {/* Mobil Menü Hamburger Butonu (< lg ekranlar) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`btn-mechanical lg:hidden p-2 rounded-lg border transition cursor-pointer ${
                isCream
                  ? 'bg-black/5 border-black/10 text-[#111215] hover:bg-black/10'
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
            className={`lg:hidden border-t px-4 py-4 space-y-3 transition-colors duration-200 ${
              isCream
                ? 'bg-[#EFECE6] border-[#686D7A]/15 text-[#111215]'
                : 'bg-[#0C0D10] border-white/10 text-white'
            }`}
          >
            {/* Sayfa Bağlantıları */}
            <div className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider">
              <Link
                href="/hakkimizda"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center justify-between"
              >
                <span>Hakkımızda</span>
                <span className="text-[10px] font-normal lowercase opacity-70">tamirhane felsefesi</span>
              </Link>
              <Link
                href={segment === 'motosiklet' ? '/motosiklet#fiyatlar' : '/#fiyatlar'}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-price-card'));
                  }
                }}
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

            {/* İletişim, Instagram & Adres Bilgi Kartları */}
            <div className="pt-2 border-t border-black/10 dark:border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${phone}`}
                className="btn-mechanical flex items-center justify-center gap-2 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md bg-[#1E3A8A] hover:bg-[#1D4ED8]"
              >
                <Phone className="w-4 h-4" />
                <span>Hemen Ara: {phoneDisplay}</span>
              </a>

              <a
                href="https://instagram.com/bumex_garage"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-3 rounded-lg border flex items-center justify-between text-xs font-semibold ${
                  isCream ? 'border-black/10 hover:bg-black/5' : 'border-white/10 hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </span>
                <span className="text-[11px] opacity-70">@bumex_garage</span>
              </a>

              <a
                href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                  isCream ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <div className="text-left">
                    <div className="font-bold">Bumex Garage Bahçelievler</div>
                    <div className="text-[10px] opacity-70">Prof. Muammer Aksoy Cad. (2. Cd.) No: 48</div>
                  </div>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${
                    mounted && !isOpenNow
                      ? 'border-amber-500/30 text-amber-600 dark:text-amber-400'
                      : 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  {mounted && !isOpenNow ? '10:00 Açılış' : 'Açık • 22:00'}
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
