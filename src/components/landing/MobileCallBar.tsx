'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface MobileCallBarProps {
  theme: LandingTheme;
}

export function MobileCallBar({ theme }: MobileCallBarProps) {
  const isCream = theme === 'cream';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t backdrop-blur-lg shadow-2xl transition-colors duration-200 ${
        isCream
          ? 'bg-[#E8E3DF]/95 border-[#6C6A6B]/20'
          : 'bg-[#181A1D]/95 border-white/10'
      }`}
    >
      <div className="grid grid-cols-2 gap-2.5">
        {/* WhatsApp Butonu */}
        <a
          href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20bilgi%20ve%20m%C3%BCsaitlik%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs py-3 px-2 rounded-xl shadow-sm transition active:scale-95"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Doğrudan Arama Butonu */}
        <a
          href="tel:05524703610"
          className="flex items-center justify-center gap-1.5 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs py-3 px-2 rounded-xl shadow-md shadow-[#1E3A8A]/30 transition active:scale-95"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>0552 470 36 10</span>
        </a>
      </div>
    </div>
  );
}
