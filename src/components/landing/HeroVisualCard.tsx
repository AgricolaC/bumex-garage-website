'use client';

import React, { useState } from 'react';
import { Droplets, ShieldCheck, MapPin } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface HeroVisualCardProps {
  theme: LandingTheme;
}

type VisualMode = 'shearing' | 'ceramic';

export function HeroVisualCard({ theme }: HeroVisualCardProps) {
  const isCream = theme === 'cream';
  const [mode, setMode] = useState<VisualMode>('shearing');

  return (
    <div className="flex flex-col gap-2.5">
      {/* Mod Seçici: Su Tahliyesi vs Bumex 9H Seramik */}
      <div
        className={`grid grid-cols-2 p-1 rounded-xl border backdrop-blur-md text-xs font-bold transition-colors ${
          isCream
            ? 'bg-white/80 border-[#6C6A6B]/25 text-[#565352]'
            : 'bg-[#181A1D]/90 border-white/10 text-[#9DA3AA]'
        }`}
      >
        <button
          type="button"
          onClick={() => setMode('shearing')}
          className={`flex items-center justify-center gap-2 py-2 rounded-lg transition ${
            mode === 'shearing'
              ? isCream
                ? 'bg-[#6B1418] text-white shadow-xs'
                : 'bg-white/15 text-white shadow-xs'
              : 'hover:text-white'
          }`}
        >
          <Droplets className="w-4 h-4 text-[#1FAD4E]" />
          <span>9H Hidrofobik Tahliye</span>
        </button>

        <button
          type="button"
          onClick={() => setMode('ceramic')}
          className={`flex items-center justify-center gap-2 py-2 rounded-lg transition ${
            mode === 'ceramic'
              ? isCream
                ? 'bg-[#6B1418] text-white shadow-xs'
                : 'bg-white/15 text-white shadow-xs'
              : 'hover:text-white'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>Bumex 9H Seramik</span>
        </button>
      </div>

      {/* Ana Görsel Çerçevesi (4:5 Oran) */}
      <div
        className={`relative rounded-2xl overflow-hidden border shadow-2xl transition duration-300 aspect-[4/5] bg-[#0E1012] ${
          isCream ? 'border-[#6C6A6B]/30 shadow-black/10' : 'border-white/10 shadow-black/60'
        }`}
      >
        {/* GÖRÜNÜM 1: Gece Mavisi Kaputta 9H Hidrofobik Su Tahliyesi */}
        {mode === 'shearing' && (
          <>
            <img
              src="/images/hero/hero_navy_water_shear.jpg"
              alt="Bumex Gece Mavisi Metalik Vernikte 9H Seramik Hidrofobik Su Tahliye Testi"
              className="w-full h-full object-cover"
            />
            {/* Üst Rozet: Su Tahliye Testi + Temas Açısı */}
            <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1FAD4E] animate-pulse" />
              <span>9H Hidrofobik Tahliye Testi</span>
            </div>

            <div className="absolute top-3.5 right-3.5 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-[10px] font-mono">
              110° Temas Açısı
            </div>

            {/* Alt Bilgi Barı */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between text-xs">
              <div>
                <div className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6B1418]" />
                  Bumex Garage Bahçelievler
                </div>
                <div className="text-[#9DA3AA] text-[11px]">Su ve leke tutmayan ayna vernik koruması</div>
              </div>
              <a
                href="tel:05524703610"
                className="text-[11px] font-bold text-white bg-[#6B1418] hover:bg-[#841920] px-3.5 py-1.5 rounded transition shadow-md whitespace-nowrap"
              >
                Hemen Ara
              </a>
            </div>
          </>
        )}

        {/* GÖRÜNÜM 2: Bumex Garage 9H Nano Seramik Özel Formüllü Ambalaj & Ayna Yansıma */}
        {mode === 'ceramic' && (
          <>
            <img
              src="/images/hero/hero_bumex_ceramic.jpg"
              alt="Bumex Garage 9H Nano Seramik Kaplama Resmi Kiti ve Mavi Vernikte Ayna Yansıması"
              className="w-full h-full object-cover"
            />
            {/* Üst Rozet: Özel Formül & 9H Sertlik */}
            <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Bumex Garage Özel Formül</span>
            </div>

            <div className="absolute top-3.5 right-3.5 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white text-[10px] font-mono">
              Gerçek 9H Matris
            </div>

            {/* Alt Rozet: Bahçelievler Lokasyon */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between text-xs">
              <div>
                <div className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6B1418]" />
                  Bumex Garage Bahçelievler
                </div>
                <div className="text-[#9DA3AA] text-[11px]">24 Aya Kadar Kalıcı Boya Zırhı</div>
              </div>
              <a
                href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#6B1418] bg-white px-2.5 py-1 rounded hover:bg-[#F2EDE9] transition flex items-center gap-1"
              >
                Haritada Gör ↗
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
