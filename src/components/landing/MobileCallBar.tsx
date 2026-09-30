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
  const { segment, phone, phoneDisplay, whatsappNumber, whatsappDefaultMessage } =
    useWorkshopSegment();

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t backdrop-blur-lg shadow-2xl transition-colors duration-200 ${
        isCream
          ? 'bg-[#EFECE6]/95 border-[#686D7A]/15'
          : 'bg-[#0C0D10]/95 border-white/10'
      }`}
    >
      <div className="grid grid-cols-2 gap-2.5">
        {/* WhatsApp Butonu */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mechanical flex items-center justify-center gap-1.5 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs py-3 px-2 rounded-xl shadow-sm transition active:scale-95"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Segmente Özel Doğrudan Arama Butonu (Royal Blue) */}
        <a
          href={`tel:${phone}`}
          className="btn-mechanical flex items-center justify-center gap-1.5 text-white font-bold text-xs py-3 px-2 rounded-xl shadow-md transition active:scale-95 bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-[#1E3A8A]/30"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>{phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
