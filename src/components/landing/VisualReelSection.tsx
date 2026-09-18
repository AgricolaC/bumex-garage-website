'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowUpRight, Play, Sparkles, ExternalLink } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface VisualReelSectionProps {
  theme: LandingTheme;
}

interface ReelItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  imageAlt: string;
  description: string;
  instagramUrl: string;
}

const REEL_ITEMS: ReelItem[] = [
  {
    id: 'mikron-restorasyon',
    title: 'Mikron Boya Restorasyonu',
    category: 'Pasta Cila & Harez Giderme',
    tag: '0.5µm Dijital Ölçüm',
    image: '/images/hero/hero_coating_exploded_3d.jpg',
    imageAlt: 'Bumex Garage Mikron Boya Analizi ve Çizik Giderme Uygulaması',
    description: 'Fabrika verniği riske atılmadan mikron seviyesinde çizik ve harez eliminasyonu.',
    instagramUrl: 'https://instagram.com/bumex_garage',
  },
  {
    id: 'seramik-boncuklanma',
    title: '110° Hidrofobik Yüzey Testi',
    category: '9H Nano Seramik Zırh',
    tag: 'Su İticilik & Parlaklık',
    image: '/images/hero/hero_red_water_bead.jpg',
    imageAlt: 'Bumex Garage 9H Seramik Kaplama Su İticilik Testi',
    description: 'Boya üzerinde suyun kayma açısı ve asit yağmuruna karşı çift katman kalkan.',
    instagramUrl: 'https://instagram.com/bumex_garage',
  },
  {
    id: 'moto-detailing',
    title: 'Motosiklet Grenaj Zırhı',
    category: 'Superbike & Cruiser',
    tag: 'Grenaj Seramik + Çekici',
    image: '/images/before-after/moto_detail_full.jpg',
    imageAlt: 'Bumex Garage Motosiklet Detailing ve Grenaj Seramik Kaplama',
    description: 'Hassas buharlı yıkama, varyatör/yağ mekanik bakımı ve 7/24 çekici transferi.',
    instagramUrl: 'https://instagram.com/bumex_garage',
  },
  {
    id: 'buharli-motor',
    title: '140°C Dielektrik Kuru Buhar',
    category: 'Motor Detaylandırma',
    tag: 'Sıfır Beyin Hasarı',
    image: '/images/before-after/engine_bay_after.jpg',
    imageAlt: 'Bumex Garage Dielektrik Kuru Buharlı Motor Temizliği',
    description: 'Elektronik sensör ve soketlere su değmeden dielektrik kimyasalla arındırma.',
    instagramUrl: 'https://instagram.com/bumex_garage',
  },
  {
    id: 'ic-detay',
    title: 'Nappa Deri Restorasyonu',
    category: 'İç Detaylı Hijyen',
    tag: 'pH Nötr Matlaştırıcı',
    image: '/images/before-after/seat_clean_full.jpg',
    imageAlt: 'Bumex Garage Koltuk Temizliği ve Deri Bakımı',
    description: 'Parlamış derilerin fabrikasyon mat dokusuna dönüşü ve ozonlu sterilizasyon.',
    instagramUrl: 'https://instagram.com/bumex_garage',
  },
  {
    id: 'otopark-wash',
    title: 'Kapalı Park & Detailing',
    category: 'Bahçelievler 7. Cadde',
    tag: '24/7 CCTV Güvenlik',
    image: '/images/hero/hero_bumex_ceramic.jpg',
    imageAlt: 'Bumex Garage Bahçelievler Kapalı Otopark ve Detailing',
    description: '7. Cadde\'ye 350 metre; güvenli kapalı araç muhafazası ve Park & Wash konsepti.',
    instagramUrl: 'https://instagram.com/bumex_garage',
  },
];

export function VisualReelSection({ theme }: VisualReelSectionProps) {
  const isCream = theme === 'cream';

  return (
    <section
      className={`py-16 sm:py-24 border-b transition-colors duration-200 ${
        isCream
          ? 'bg-[#E8E3DF] border-[#6C6A6B]/20'
          : 'bg-[#1B1D20] border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Başlık ve Instagram Bağlantısı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#1E3A8A] text-white mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GÖRSEL KANIT &amp; VİDEO VİTRİNİ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]">
              Atölyeden Canlı Kareler &amp; Reels
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base max-w-xl ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Uzun paragraflar değil, dijital mikron ölçümü ve ayna parlaklığı. Bahçelievler
              stüdyomuzda tamamlanan son projelerden anlık kesitler.
            </p>
          </div>

          <a
            href="https://instagram.com/bumex_garage"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border transition self-start md:self-auto ${
              isCream
                ? 'bg-white/80 border-[#6C6A6B]/25 hover:bg-white text-[#0D0D0D] shadow-xs'
                : 'bg-[#222529]/90 border-white/15 hover:bg-[#2A2E34] text-white shadow-sm'
            }`}
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>@bumex_garage Takip Edin</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6'lı Medya Izgarası */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REEL_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 ${
                isCream
                  ? 'bg-white border-[#6C6A6B]/20 hover:border-[#1E3A8A]/50 shadow-sm hover:shadow-md'
                  : 'bg-[#151618] border-white/10 hover:border-[#2563EB]/50 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Görsel Katmanı */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Siyah Gradyan Karartma */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Sağ Üst Instagram Rozeti */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>

                {/* Sol Üst Telemetri Rozeti */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1E3A8A] text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                  {item.tag}
                </div>

                {/* Oynat Simgesi Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#1E3A8A] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-[#1E3A8A]" />
                  </div>
                </div>

                {/* Kategori */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-black text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Alt Metin ve Açıklama */}
              <div className="p-4">
                <p
                  className={`text-xs leading-relaxed line-clamp-2 ${
                    isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                  }`}
                >
                  {item.description}
                </p>
                <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                  <span className="text-[#1E3A8A] dark:text-[#60A5FA] group-hover:underline">
                    Reels Videosunu Aç ↗
                  </span>
                  <span className="text-[#6C6A6B] text-[11px]">Bumex Studio</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Alt Bilgilendirme Bandı */}
        <div
          className={`mt-10 p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
            isCream
              ? 'bg-white/80 border-[#6C6A6B]/20 text-[#0D0D0D]'
              : 'bg-[#151618] border-white/10 text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black">Aracınızı veya Motorunuzu Proje Listemize Ekleyin</h4>
              <p className={`text-xs ${isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'}`}>
                Uygulama öncesi ve sonrası dijital mikron kalınlık raporu ücretsiz teslim edilir.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/905524703610?text=Merhaba%20Bumex%20Garage,%20arac%C4%B1m%C4%B1n%20detailing%20foto%C4%9Fraflar%C4%B1%20ve%20randevu%20i%C3%A7in%20yaz%C4%B1yorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs px-5 py-3 rounded-xl shadow transition shrink-0 active:scale-95"
          >
            <span>WhatsApp ile Fotoğraf Gönder</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
