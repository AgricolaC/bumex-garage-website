'use client';

import React from 'react';
import { Star, MapPin, Navigation, Clock, ExternalLink, ShieldCheck, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { LandingTheme } from '@/hooks/useLandingTheme';

interface GoogleMapsSectionProps {
  theme: LandingTheme;
}

const VERIFIED_GOOGLE_REVIEWS = [
  {
    name: 'İsmet Özel',
    timeAgo: '2 gün önce',
    text: 'Çok memnun kaldım çok temiz iş yaptılar özenle çalışıyorlar.',
  },
  {
    name: 'Tuğba Yüceer',
    timeAgo: '6 gün önce',
    text: 'Aracımı hep burda yıkatıyorum tertemiz yapıyorlar ve güleryüzlü personelleri var ilgileri için teşekkür ederim 🙏🏻',
  },
  {
    name: 'Mehmet Ali Çoban',
    timeAgo: '2 hafta önce',
    text: 'Arabadan çıkmayacak denen lekeleri bile tek yıkamada çıkardılar. Kaliteli hizmet için çok teşekkürler.',
  },
  {
    name: 'Hayati Küpeli',
    timeAgo: '2 ay önce',
    text: 'Herkese tavsiye ediyorum bunu da yorumda yazacağımı söylemiştim oto yıkamacıya göre aşırı düzgün insanlar şaşırdım gönül rahatlığıyla gidebilirsiniz kadınlar için bile saçma sapan malum tiplerle muhatap olmadan oto yıkatmak için mükemmel bir yer arabayı da gayet güzel temizliyorlar böyle esnafların sayısının artması dileğiyle.',
  },
];

export function GoogleMapsSection({ theme }: GoogleMapsSectionProps) {
  const isCream = theme === 'cream';

  return (
    <section
      id="konum"
      className={`py-20 px-4 sm:px-8 border-b transition-colors duration-200 ${
        isCream
          ? 'bg-[#F2EDE9] border-[#6C6A6B]/20 text-[#0D0D0D]'
          : 'bg-[#151618] border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isCream ? 'text-[#6C6A6B]' : 'text-[#9DA3AA]'
                }`}
              >
                Google Haritalar Doğrulanmış Profil
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Bumex Garage Bahçelievler
            </h2>
            <p
              className={`text-sm sm:text-base mt-2 max-w-xl ${
                isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
              }`}
            >
              Prof. Muammer Aksoy Caddesi (2. Cadde) No: 48 adresinde hizmetinizdeyiz. Canlı Google
              Haritalar puanımızı inceleyin veya tek tıkla yol tarifi alın.
            </p>
          </div>

          {/* Hızlı Google Harita Butonu */}
          <a
            href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition shrink-0 active:scale-95"
          >
            <span>Google Haritalar&apos;da Aç</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 2 Kolon: Harita ve Otomatik Canlı Puanlama Paneli */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Sol Kolon: Google Maps Widget & Konum Bilgileri (7 Kolon) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div
              className={`rounded-2xl overflow-hidden border shadow-lg relative flex-1 min-h-[340px] ${
                isCream ? 'border-[#6C6A6B]/30' : 'border-white/10'
              }`}
            >
              <iframe
                title="BUMEX GARAGE BAHÇELİEVLER Google Haritası"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.6948339191024!2d32.82465007656681!3d39.9277017715222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f62f1f30295%3A0xcf179371bb67a8e5!2sBUMEX%20GARAGE%20BAH%C3%87EL%C4%B0EVLER!5e0!3m2!1str!2str!4v1710700000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>

            {/* Konum Bilgi Şeridi */}
            <div
              className={`p-4 sm:p-5 rounded-2xl border grid sm:grid-cols-3 gap-4 text-xs ${
                isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                <div>
                  <span className="font-bold block">Açık Adres</span>
                  <a
                    href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition underline decoration-dotted ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    Prof. Muammer Aksoy Cad. No: 48, Bahçelievler
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className={`w-4 h-4 shrink-0 mt-0.5 ${isCream ? 'text-[#1E3A8A]' : 'text-[#60A5FA]'}`} />
                <div>
                  <span className="font-bold block">Çalışma Saatleri</span>
                  <span className={isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}>
                    10:00 – 22:00 (Her Gün Açık)
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=BUMEX+GARAGE+BAH%C3%87EL%C4%B0EVLER&destination_place_id=ChIJlQLz8WJP0xQR5ahmG3GTF88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold py-2 px-3 rounded-xl transition shadow-sm active:scale-95 text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Yol Tarifi Al</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Doğrulanmış Google Değerlendirmeleri ve Müşteri Deneyimleri (5 Kolon) */}
          <div
            className={`lg:col-span-5 p-6 sm:p-7 rounded-2xl border shadow-lg flex flex-col justify-between ${
              isCream ? 'bg-white border-[#6C6A6B]/20 text-[#0D0D0D]' : 'bg-[#222529] border-white/10 text-white'
            }`}
          >
            <div>
              {/* Google Rozet Başlığı */}
              <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center font-black text-lg">
                    G
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-tight">Google İşletme Profili</h3>
                    <span className="text-[11px] text-[#1FAD4E] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Doğrulanmış Atölye
                    </span>
                  </div>
                </div>

                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#1FAD4E]/10 text-[#1FAD4E] font-bold border border-[#1FAD4E]/20">
                  Canlı Profil
                </span>
              </div>

              {/* Büyük Puan ve Yorum Sayısı */}
              <div className="my-5 text-center sm:text-left">
                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span
                    className={`text-5xl sm:text-6xl font-black tracking-tight ${
                      isCream ? 'text-black' : 'text-white'
                    }`}
                  >
                    4.9
                  </span>
                  <span className="text-xl font-bold text-[#6C6A6B]">/ 5.0</span>
                </div>

                {/* 5 Yıldız & Doğrulanmış Değerlendirme Sayısı */}
                <div className="flex items-center justify-center sm:justify-start gap-2 my-2">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
                    60+ Değerlendirme
                  </span>
                </div>

                <p className="text-xs text-[#6C6A6B] font-medium">
                  Bahçelievler Prof. Muammer Aksoy Caddesi No: 48
                </p>
              </div>

              {/* Doğrulanmış Gerçek Google Yorumları */}
              <div className="space-y-3 pt-3 border-t border-black/5 dark:border-white/10">
                {VERIFIED_GOOGLE_REVIEWS.map((rev) => (
                  <div
                    key={rev.name}
                    className={`p-3 rounded-xl border text-xs ${
                      isCream ? 'bg-[#F9F7F5] border-[#6C6A6B]/15' : 'bg-[#1A1C1F] border-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">{rev.name}</span>
                        <span className="text-[10px] text-[#6C6A6B]">· {rev.timeAgo}</span>
                      </div>
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                    <p className={`text-[11px] leading-relaxed italic ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Aksiyonlar: Doğrudan Google Haritalar Entegrasyonu */}
            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 space-y-2.5">
              <a
                href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#1E3A8A]/25 transition active:scale-95"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>Google&apos;daki Tüm Değerlendirmeleri Oku (60+)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://maps.app.goo.gl/UGsfYD1ZUdB7L5w4A"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                  isCream
                    ? 'border-[#6C6A6B]/30 hover:bg-black/5 text-[#0D0D0D]'
                    : 'border-white/15 hover:bg-white/10 text-white'
                }`}
              >
                <span>Google Haritalar&apos;da Yorum Yazın</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
