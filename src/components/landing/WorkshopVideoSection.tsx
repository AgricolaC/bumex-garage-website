'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Clock,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface WorkshopVideoSectionProps {
  theme: LandingTheme;
  videoSrc?: string;
  posterSrc?: string;
}

export function WorkshopVideoSection({
  theme,
  videoSrc = '/videos/sample_workshop.mp4',
  posterSrc = '/images/hero/hero_coating_exploded_3d.jpg',
}: WorkshopVideoSectionProps) {
  const isCream = theme === 'cream';

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleUserActivity = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="workshop-video"
      className={`py-16 sm:py-24 border-b transition-colors duration-200 relative overflow-hidden ${
        isCream
          ? 'bg-[#EDE9E6] border-[#6C6A6B]/20'
          : 'bg-[#151618] border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* SOL SÜTUN: Zanaat Hikayesi ve Neden Bumex? */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/25">
              <Award className="w-3.5 h-3.5" />
              <span>ATÖLYE ZANAATI & VİDEO TUR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]">
              &ldquo;Neden Bumex Garage?&rdquo;
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isCream ? 'text-[#4A4746]' : 'text-[#9DA3AA]'
              }`}
            >
              Çünkü biz araç ve motosikletinize sadece yıkama yapmıyoruz; mikron seviyesinde boya
              restorasyonu, 140°C dielektrik kuru buhar ve 9H seramik korumayla fabrika kondisyonunu
              sonsuza dek zırhlıyoruz. Ankara Bahçelievler&apos;deki butik stüdyomuzda her makine
              tek tek, aceleye getirilmeden işlenir.
            </p>

            {/* 4 Ana Kalite Güvencesi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div
                className={`p-3.5 rounded-xl border ${
                  isCream ? 'bg-white/80 border-[#6C6A6B]/20' : 'bg-[#1B1D20] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span className="text-xs font-black">0.5µm Dijital Mikron Ölçümü</span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'}`}>
                  Fabrika vernik kalınlığı riske atılmaz, pasta cilada boya inceltilmez.
                </p>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isCream ? 'bg-white/80 border-[#6C6A6B]/20' : 'bg-[#1B1D20] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span className="text-xs font-black">140°C Buhar &amp; Dielektrik</span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'}`}>
                  Elektronik soket, sensör ve beyin su hasarı riski kesinlikle sıfırdır.
                </p>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isCream ? 'bg-white/80 border-[#6C6A6B]/20' : 'bg-[#1B1D20] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span className="text-xs font-black">110° Hidrofobik Seramik Zırh</span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'}`}>
                  Kuş pisliği, reçine, asit yağmuru ve UV solmasına karşı 2-5 yıl koruma.
                </p>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isCream ? 'bg-white/80 border-[#6C6A6B]/20' : 'bg-[#1B1D20] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
                  <span className="text-xs font-black">7. Cadde&apos;ye 350 Metre</span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'}`}>
                  Aracınızı veya motorunuzu bırakıp Bahçelievler merkezde vakit geçirebilirsiniz.
                </p>
              </div>
            </div>

            {/* İletişim & Randevu Butonları */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="tel:05524703610"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-lg shadow-[#1E3A8A]/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                <span>Atölyeyi Arayın: 0552 470 36 10</span>
              </a>

              <a
                href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20at%C3%B6lye%20video%20turunuzu%20izledim,%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Randevu</span>
              </a>
            </div>
          </div>

          {/* SAĞ SÜTUN: Milano Car Care İlhamlı Zanaat Video Oynatıcı */}
          <div className="lg:col-span-6">
            <div
              ref={containerRef}
              onMouseMove={handleUserActivity}
              onClick={handleUserActivity}
              className={`relative rounded-3xl overflow-hidden shadow-2xl border aspect-video group ${
                isCream
                  ? 'border-[#1E3A8A]/20 bg-black'
                  : 'border-white/15 bg-black'
              }`}
            >
              {/* HTML5 Video */}
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                preload="metadata"
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Ortadaki Büyük Oynat Butonu (Durdurulduğunda görünür) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/45 cursor-pointer backdrop-blur-[2px] transition-all"
                >
                  <div className="w-20 h-20 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform active:scale-95">
                    <Play className="w-8 h-8 ml-1 text-white fill-white" />
                  </div>
                </div>
              )}

              {/* Alt Kontrol Çubuğu */}
              <div
                className={`absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* İlerleme Çubuğu */}
                <div
                  onClick={handleSeek}
                  className="w-full h-1.5 bg-white/25 rounded-full cursor-pointer overflow-hidden mb-3 hover:h-2.5 transition-all"
                >
                  <div
                    className="h-full bg-[#1E3A8A] dark:bg-[#60A5FA] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Kontrol Butonları & Süre */}
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Durdur' : 'Oynat'}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>

                    <span className="font-mono text-[11px] text-gray-300">
                      {currentTime} / {duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                      Bumex Bahçelievler
                    </span>
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      aria-label="Tam Ekran"
                      className="p-1.5 rounded-lg hover:bg-white/20 transition"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
