'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { useWorkshopSegment } from '@/hooks/useWorkshopSegment';

interface MobileCallBarProps {
  theme: LandingTheme;
}

export function MobileCallBar({ theme }: MobileCallBarProps) {
  const isCream = theme === 'cream';
  const { phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } =
    useWorkshopSegment();

  return (
    <div
      className={`fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] inset-x-4 z-40 md:hidden max-w-sm mx-auto p-1.5 rounded-full border shadow-2xl backdrop-blur-xl transition-colors duration-200 ${
        isCream
          ? 'bg-[#EFECE6]/90 border-[#686D7A]/25'
          : 'bg-[#0C0D10]/90 border-white/15'
      }`}
    >
      <div className="grid grid-cols-2 gap-2">
        {/* WhatsApp Butonu */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mechanical flex items-center justify-center gap-1.5 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs py-2.5 px-3 rounded-full shadow-sm transition active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Segmente Özel Doğrudan Arama Butonu (Royal Blue) */}
        <a
          href={`tel:${phone}`}
          className="btn-mechanical flex items-center justify-center gap-1.5 text-white font-bold text-xs py-2.5 px-3 rounded-full shadow-md transition active:scale-95 bg-[#1E3A8A] hover:bg-[#1D4ED8]"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>{phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
