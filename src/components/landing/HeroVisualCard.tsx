'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, MessageCircle } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';
import { WorkshopPillar } from './heroPillars';

interface HeroVisualCardProps {
  theme: LandingTheme;
  activePillar: WorkshopPillar;
}

export function HeroVisualCard({ theme, activePillar }: HeroVisualCardProps) {
  const isCream = theme === 'cream';

  return (
    <div className="w-full">
      {/* Ana Görsel Çerçevesi (4:5 Oran) */}
      <div
        className={`relative rounded-2xl overflow-hidden border shadow-2xl transition duration-300 aspect-[4/5] bg-[#0E1012] ${
          isCream ? 'border-[#6C6A6B]/30 shadow-black/10' : 'border-white/10 shadow-black/60'
        }`}
      >
        <Image
          key={activePillar.id}
          src={activePillar.image}
          alt={activePillar.imageAlt}
          fill
          priority={activePillar.id === 'mikron'}
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover animate-in fade-in duration-300"
        />

        {/* Üst Sol Rozet: Dinamik Teknik Rozet + Canlı Pulse */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-[#1FAD4E] animate-pulse" />
          <span>{activePillar.badge}</span>
        </div>

        {/* Üst Sağ Rozet: Ölçüm/Metrik */}
        <div className="absolute top-3.5 right-3.5 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-[10px] font-mono z-10">
          {activePillar.telemetryMetric}
        </div>

        {/* Alt Bilgi & İletişim Barı */}
        <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-2 text-xs z-10">
          <div className="min-w-0 pr-2">
            <div className="font-bold flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#6B1418] shrink-0" />
              <span>Bumex Garage Bahçelievler</span>
            </div>
            <div className="text-[#9DA3AA] text-[11px] truncate">{activePillar.bottomDescription}</div>
          </div>

          <a
            href={`https://wa.me/905524703610?text=${encodeURIComponent(activePillar.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-white bg-[#6B1418] hover:bg-[#841920] px-3 py-1.5 rounded transition shadow-md whitespace-nowrap flex items-center gap-1 shrink-0"
          >
            <MessageCircle className="w-3 h-3 text-[#1FAD4E]" />
            <span>Danışın</span>
          </a>
        </div>
      </div>
    </div>
  );
}
