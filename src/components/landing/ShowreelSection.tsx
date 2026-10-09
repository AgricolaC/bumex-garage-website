'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Film,
  Sparkles,
  ShieldCheck,
  Disc3,
} from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface ShowreelSectionProps {
  theme: LandingTheme;
}

export function ShowreelSection({ theme }: ShowreelSectionProps) {
  const isCream = theme === 'cream';
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(78.47);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlay = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
      setHasStartedOnce(true);
    }).catch(() => {
      // Fallback if browser blocks unmuted play
      if (videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStartedOnce(true);
        });
      }
    });
  }, []);

  const handlePause = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [isPlaying, handlePause, handlePlay]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, []);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressTrackRef.current) return;
    const rect = progressTrackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * (videoRef.current.duration || duration);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setCurrentTime(0);
    handlePlay();
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch {
        // Fullscreen API may be blocked
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch {
        // Exit fullscreen fallback
      }
    }
  };

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const onLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  // Fullscreen change listener
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Listen for global custom trigger event (e.g. from Hero button)
  useEffect(() => {
    const onTriggerPlay = () => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        handlePlay();
      }
    };

    window.addEventListener('bumex:play-showreel', onTriggerPlay);
    return () => window.removeEventListener('bumex:play-showreel', onTriggerPlay);
  }, [handlePlay]);

  // Controls auto-hide when playing
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      id="atolye-filmi"
      className={`relative py-14 sm:py-20 px-4 sm:px-8 border-b transition-colors duration-300 scroll-mt-20 ${
        isCream
          ? 'bg-[#EAE6DF] border-[#5A5D66]/15 text-[#111215]'
          : 'bg-[#0E1013] border-white/10 text-[#F4F3EF]'
      }`}
      aria-label="Bumex Garage Atölye Showreel ve Drone Tanıtım Filmi"
    >
      <div className="max-w-5xl mx-auto">
        {/* ─── 1. BÖLÜM BAŞLIĞI & TİPOGRAFİ ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#1E3A8A]/30 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>BUMEX GARAGE • RESMİ ATÖLYE FİLMİ</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-[1.15]">
              Canlı Atölye Atmosferi &amp;{' '}
              <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Sinematik Drone Turu</span>
            </h2>
          </div>

          {/* Ses & Kalite Rozetleri */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-2 ${
                isCream
                  ? 'bg-white border-[#5A5D66]/20 text-[#111215]'
                  : 'bg-[#181B20] border-white/10 text-white'
              }`}
            >
              <Disc3 className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-[#60A5FA] animate-spin" />
              <span>Dark Electro Mix</span>
            </div>

            <div
              className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold ${
                isCream
                  ? 'bg-white border-[#5A5D66]/20 text-[#111215]'
                  : 'bg-[#181B20] border-white/10 text-white'
              }`}
            >
              <span>1080p • 60 FPS</span>
            </div>
          </div>
        </div>

        {/* ─── 2. SİNEMATİK OYNATICI ÇERÇEVESİ ─── */}
        <div className="relative group">
          {/* Mavi Arka Plan Neon Işıması */}
          <div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1E3A8A]/30 via-[#2563EB]/20 to-[#1E3A8A]/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none"
            aria-hidden="true"
          />

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
            className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/15 shadow-2xl select-none"
          >
            {/* Video Elemanı */}
            <video
              ref={videoRef}
              src="/videos/bumex_drone_showreel.mp4"
              poster="/images/hero/showreel_poster_facade.jpg"
              preload="metadata"
              playsInline
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* İlk Başlatma Katmanı (Poster Üzeri CTA) */}
            {!hasStartedOnce && (
              <div
                onClick={handlePlay}
                className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer z-20 p-4 text-center"
              >
                {/* Büyük Nabız Atan Oynat Butonu */}
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-[#1E3A8A]/40 animate-ping pointer-events-none" />
                  <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-xl shadow-[#1E3A8A]/50 transition-transform duration-300 group-hover:scale-110 active:scale-95">
                    <Play className="w-7 sm:w-9 h-7 sm:h-9 ml-1 fill-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-white text-base sm:text-xl font-black tracking-tight drop-shadow-md">
                    Atölye Turunu Başlat
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm font-medium drop-shadow-sm flex items-center justify-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                    <span>01:18 • Dark Electro Ses Tasarımı ile Dinle</span>
                  </div>
                </div>
              </div>
            )}

            {/* Ortadaki Geçici Play/Pause İkonu (Hover / Duraklama) */}
            {hasStartedOnce && !isPlaying && (
              <div
                onClick={handlePlay}
                className="absolute inset-0 bg-black/35 flex items-center justify-center cursor-pointer z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 transition transform hover:scale-110 shadow-lg">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
              </div>
            )}

            {/* ─── ALT KONTROL DOCK'U (Luxury Glassmorphism) ─── */}
            <div
              className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-5 transition-opacity duration-300 z-30 ${
                showControls || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* İlerleme Çubuğu (Scrubber Track) */}
              <div
                ref={progressTrackRef}
                onClick={handleSeek}
                className="relative w-full h-2 group/track cursor-pointer py-1 mb-3 flex items-center"
              >
                <div className="w-full h-1 group-hover/track:h-1.5 bg-white/20 rounded-full overflow-hidden transition-all duration-150">
                  <div
                    className="h-full bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] rounded-full relative"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {/* Oynatma Kafası (Scrubber Knob) */}
                <div
                  className="absolute w-3 h-3 bg-white rounded-full shadow-md pointer-events-none transform -translate-x-1/2 opacity-0 group-hover/track:opacity-100 transition-opacity"
                  style={{ left: `${progressPercent}%` }}
                />
              </div>

              {/* Kontrol Butonları & Metrikler */}
              <div className="flex items-center justify-between gap-3 text-white">
                {/* Sol Grup: Play, Restart, Süre */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Durdur' : 'Oynat'}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer active:scale-95"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleRestart}
                    aria-label="Başa Sar"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer active:scale-95 text-white/80 hover:text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-xs font-mono font-medium text-white/90">
                    <span>{formatTime(currentTime)}</span>
                    <span className="text-white/40 mx-1">/</span>
                    <span className="text-white/60">{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Sağ Grup: Müzik Ekolayzer Butonu, Tam Ekran */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Ses / Ekolayzer Butonu */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                      !isMuted
                        ? 'bg-[#1E3A8A]/80 border-[#60A5FA]/40 text-white shadow-md shadow-[#1E3A8A]/30'
                        : 'bg-white/10 border-white/20 text-white/70 hover:text-white'
                    }`}
                  >
                    {!isMuted ? (
                      <>
                        {/* Canlı 4-Barlı Ekolayzer */}
                        <div className="flex items-end gap-0.5 h-3 w-3">
                          <span className={`w-0.5 bg-[#60A5FA] rounded-full ${isPlaying ? 'animate-pulse h-full' : 'h-1.5'}`} />
                          <span className={`w-0.5 bg-[#60A5FA] rounded-full ${isPlaying ? 'animate-pulse h-2/3 delay-75' : 'h-3'}`} />
                          <span className={`w-0.5 bg-[#60A5FA] rounded-full ${isPlaying ? 'animate-pulse h-full delay-150' : 'h-2'}`} />
                          <span className={`w-0.5 bg-[#60A5FA] rounded-full ${isPlaying ? 'animate-pulse h-1/2 delay-100' : 'h-1'}`} />
                        </div>
                        <span className="hidden sm:inline">Ses Açık</span>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-white/70" />
                        <span className="hidden sm:inline">Sesi Aç</span>
                      </>
                    )}
                  </button>

                  {/* Tam Ekran Butonu */}
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran'}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer active:scale-95 text-white"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 3. ALT BİLGİ KARTLARI (2 Öne Çıkan Özellik) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
          <div
            className={`p-4 rounded-2xl border transition ${
              isCream
                ? 'bg-white/70 border-[#5A5D66]/15'
                : 'bg-[#14161B] border-white/10'
            }`}
          >
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#1E3A8A] dark:text-[#60A5FA] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Geniş Tesis Kurgusu</span>
            </div>
            <p className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
              Giriş rampasından kapalı motosiklet parkına, detailing stüdyosundan hızlı bakım holüne tüm yerleşke.
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border transition ${
              isCream
                ? 'bg-white/70 border-[#5A5D66]/15'
                : 'bg-[#14161B] border-white/10'
            }`}
          >
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#1E3A8A] dark:text-[#60A5FA] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Usta &amp; Ekip Kültürü</span>
            </div>
            <p className={`text-xs leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
              Kapanışta kurucu ortaklarımız ve usta kadromuzla Bahçelievler&apos;de güven veren dürüst esnaflık geleneği.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
