'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowLeft,
  Wrench,
  Layers,
  MapPin,
} from 'lucide-react';
import { useLandingTheme } from '@/hooks/useLandingTheme';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileCallBar } from '@/components/landing/MobileCallBar';
import { ServiceHubData } from '@/data/servicesData';

interface ServiceHubViewProps {
  service: ServiceHubData;
}

export function ServiceHubView({ service }: ServiceHubViewProps) {
  const { theme, toggleTheme } = useLandingTheme();
  const isCream = theme === 'cream';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isCream ? 'bg-[#F2ECE9] text-[#0D0D0D]' : 'bg-[#1B1D20] text-[#F4F4F5]'
      }`}
    >
      {/* ─── 1. NAVBAR ─── */}
      <LandingNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* ─── 2. BREADCRUMB ─── */}
      <div
        className={`py-3 px-4 sm:px-8 border-b text-xs transition-colors duration-200 ${
          isCream
            ? 'bg-[#E8E3DF] border-[#6C6A6B]/20 text-[#565352]'
            : 'bg-[#141517] border-white/10 text-[#9DA3AA]'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center gap-2 flex-wrap">
          <Link
            href="/"
            className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition flex items-center gap-1 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Ana Sayfa</span>
          </Link>
          <span className="opacity-40">/</span>
          <Link
            href="/#hizmetler"
            className="hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition font-medium"
          >
            Hizmetlerimiz
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-bold text-[#1E3A8A] dark:text-[#60A5FA]">{service.title}</span>
        </div>
      </div>

      {/* ─── 3. HERO SECTION ─── */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-8 border-b overflow-hidden transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          {/* Rozet */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] border border-[#1E3A8A]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>

          {/* Başlık ve Alt Başlık */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight uppercase leading-[1.12] max-w-4xl">
            {service.heroHeadline}
          </h1>

          <p
            className={`mt-5 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl ${
              isCream ? 'text-[#3D3A39]' : 'text-zinc-300'
            }`}
          >
            {service.heroSubtitle}
          </p>

          {/* Temel Parametreler Rozetleri */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl my-8">
            <div
              className={`p-4 rounded-xl border flex items-center gap-3 ${
                isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
              }`}
            >
              <Clock className="w-5 h-5 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
              <div>
                <span className="text-[11px] uppercase font-bold text-[#9DA3AA] block">
                  İşlem Süresi
                </span>
                <span className="text-xs sm:text-sm font-black">{service.estimatedDuration}</span>
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border flex items-center gap-3 ${
                isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
              }`}
            >
              <Award className="w-5 h-5 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
              <div>
                <span className="text-[11px] uppercase font-bold text-[#9DA3AA] block">
                  Garanti Kapsamı
                </span>
                <span className="text-xs sm:text-sm font-black">{service.warrantyPeriod}</span>
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border flex items-center gap-3 ${
                isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
              }`}
            >
              <ShieldCheck className="w-5 h-5 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0" />
              <div>
                <span className="text-[11px] uppercase font-bold text-[#9DA3AA] block">
                  Fiyatlandırma
                </span>
                <span className="text-xs sm:text-sm font-black">{service.pricingHint}</span>
              </div>
            </div>
          </div>

          {/* CTA Butonları */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a
              href="tel:05524703610"
              className="inline-flex items-center justify-center gap-2.5 text-white font-black text-xs sm:text-sm px-6 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 active:translate-y-0 bg-[#1E3A8A] hover:bg-[#1D4ED8] shadow-[#1E3A8A]/35"
            >
              <Phone className="w-4 h-4" />
              <span>0552 470 36 10 • Hemen Randevu Al</span>
            </a>

            <a
              href={`https://wa.me/905524703610?text=${encodeURIComponent(service.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ile Bilgi Al</span>
            </a>

            <a
              href="#protokol"
              className={`inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-5 py-4 rounded-xl border transition ${
                isCream
                  ? 'border-[#6C6A6B]/30 bg-white hover:bg-black/5 text-[#0D0D0D]'
                  : 'border-white/20 bg-white/5 hover:bg-white/10 text-white'
              }`}
            >
              <span>Uygulama Adımları</span>
              <ChevronDown className="w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA]" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 4. TEKNİK SPESİFİKASYONLAR IZGARASI ─── */}
      <section
        className={`py-16 px-4 sm:px-8 border-b transition-colors duration-200 ${
          isCream ? 'bg-[#E8E3DF] border-[#6C6A6B]/20' : 'bg-[#181A1D] border-white/10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-[#60A5FA]">
                Laboratuvar Standartları
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Teknik Ölçüm ve Malzeme Kriterleri
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
              Bumex Garage Bahçelievler tamirhanemizde uygulanan tüm materyaller mikron düzeyinde test
              edilerek uygulanır.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.technicalSpecs.map((spec, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#6C6A6B]/20 shadow-xs' : 'bg-[#222529] border-white/10 shadow-md'
                }`}
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9DA3AA] block mb-1">
                    {spec.label}
                  </span>
                  <div className="text-lg sm:text-xl font-black text-[#1E3A8A] dark:text-[#60A5FA]">
                    {spec.value}
                  </div>
                </div>
                <p className={`text-xs mt-3 leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. UYGULAMA PROTOKOLÜ (ADIM ADIM SÜREÇ) ─── */}
      <section id="protokol" className="py-20 px-4 sm:px-8 border-b transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA]">
              <Wrench className="w-3.5 h-3.5" />
              <span>Standart Çalışma Prosedürü</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
              4 Aşamalı Tamirhane Protokolü
            </h2>
            <p className={`text-xs sm:text-sm mt-3 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
              Her araç işletmemize teslim alındığında standart kontrol listesi eşliğinde adım adım
              işleme alınır.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.protocolSteps.map((step, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border flex flex-col justify-between relative transition duration-200 hover:-translate-y-1 ${
                  isCream ? 'bg-white border-[#6C6A6B]/20 shadow-md' : 'bg-[#222529] border-white/10 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-2xl font-black text-[#1E3A8A] dark:text-[#60A5FA] font-mono">
                      {step.stepNumber}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${
                        isCream
                          ? 'bg-black/5 border-black/10 text-[#565352]'
                          : 'bg-white/5 border-white/10 text-[#9DA3AA]'
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-black tracking-tight mb-2">{step.title}</h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Laboratuvar Onaylı Adım</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. HİZMET AVANTAJLARI ─── */}
      <section
        className={`py-16 px-4 sm:px-8 border-b transition-colors duration-200 ${
          isCream ? 'bg-[#E8E3DF] border-[#6C6A6B]/20' : 'bg-[#181A1D] border-white/10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-[#60A5FA]">
                Neden Bumex Garage?
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Bumex Standartlarının Sağladığı Somut Faydalar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border flex items-start gap-3.5 ${
                  isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-tight mb-1">{benefit.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. SSS (SIKÇA SORULAN SORULAR) AKORDEONU ─── */}
      <section className="py-20 px-4 sm:px-8 border-b transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:text-[#60A5FA]">
              <span>Şeffaf Bilgilendirme</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight mt-1">Sıkça Sorulan Sorular</h2>
            <p className={`text-xs sm:text-sm mt-2 ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
              {service.title} hakkında müşterilerimizin en çok merak ettiği teknik ve operasyonel detaylar.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isCream ? 'bg-white border-[#6C6A6B]/20' : 'bg-[#222529] border-white/10'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer focus:outline-hidden"
                  >
                    <span>{faq.question}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-[#1E3A8A] dark:text-[#60A5FA] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-black/5 dark:border-white/10 animate-in fade-in duration-200">
                      <p className={isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. SON DÖNÜŞÜM & RANDEVU KARTI ─── */}
      <section className="py-16 px-4 sm:px-8 border-b transition-colors duration-200">
        <div
          className={`max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 border text-center shadow-2xl relative overflow-hidden ${
            isCream
              ? 'bg-gradient-to-br from-white to-[#E8E3DF] border-[#1E3A8A]/30 text-[#0D0D0D]'
              : 'bg-gradient-to-br from-[#222529] to-[#141517] border-white/15 text-white'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#1E3A8A] dark:text-[#60A5FA] mb-2 block">
              Bahçelievler 7. Cadde&apos;ye Yürüme Mesafesinde
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Aracınızı İşletmemize Getirin, Mikron Analiziyle İnceleyelim
            </h2>
            <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isCream ? 'text-[#565352]' : 'text-[#9DA3AA]'}`}>
              İşlem öncesinde vernik kalınlığı dijital cihazlarla ölçülür, size en uygun koruma
              paketi ve şeffaf maliyet planı çıkarılır.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
              <a
                href="tel:05524703610"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-black text-xs sm:text-sm px-6 py-4 rounded-xl shadow-lg transition active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>0552 470 36 10</span>
              </a>

              <a
                href={`https://wa.me/905524703610?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1FAD4E] hover:bg-[#25C058] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl shadow-md transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Ekspertiz Randevusu</span>
              </a>

              <Link
                href="/konum"
                className={`inline-flex items-center gap-2 font-bold text-xs sm:text-sm px-5 py-4 rounded-xl border transition ${
                  isCream
                    ? 'border-[#6C6A6B]/30 bg-white hover:bg-black/5 text-[#0D0D0D]'
                    : 'border-white/20 bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>Konum ve Yol Tarifi</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FOOTER & MOBİL ARAMA BARI ─── */}
      <LandingFooter
        theme={theme}
        onOpenModal={() => {
          window.location.href = '/#hizmetler';
        }}
      />
      <MobileCallBar theme={theme} />
    </div>
  );
}
