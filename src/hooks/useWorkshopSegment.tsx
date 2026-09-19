'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type WorkshopSegment = 'otomobil' | 'motosiklet';

interface WorkshopSegmentContextValue {
  segment: WorkshopSegment;
  setSegment: (segment: WorkshopSegment) => void;
  isOtomobil: boolean;
  isMotosiklet: boolean;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
}

const SEGMENT_HOTLINES = {
  otomobil: {
    phone: '05524703610',
    phoneDisplay: '0552 470 36 10',
    whatsappNumber: '905524703610',
    whatsappDefaultMessage:
      'Merhaba Bumex Garage, otomobil detailing, PPF kaplama ve boya koruma hizmetleriniz hakkında bilgi ve randevu almak istiyorum.',
  },
  motosiklet: {
    phone: '05465332844',
    phoneDisplay: '0546 533 28 44',
    whatsappNumber: '905465332844',
    whatsappDefaultMessage:
      'Merhaba Bumex Garage, motosiklet detailing, mekanik servis ve bakım hizmetleriniz hakkında bilgi ve randevu almak istiyorum.',
  },
} as const;

const WorkshopSegmentContext = createContext<WorkshopSegmentContextValue | undefined>(undefined);

function getInitialSegment(fallback?: WorkshopSegment): WorkshopSegment {
  if (typeof window === 'undefined') return fallback ?? 'otomobil';

  if (window.location.pathname.startsWith('/motosiklet')) {
    return 'motosiklet';
  }

  const hash = window.location.hash.toLowerCase();
  if (hash.includes('motosiklet') || hash.includes('moto')) {
    return 'motosiklet';
  }
  if (hash.includes('otomobil') || hash.includes('oto')) {
    return 'otomobil';
  }

  const params = new URLSearchParams(window.location.search);
  const segParam = params.get('segment')?.toLowerCase();
  if (segParam === 'motosiklet' || segParam === 'moto') {
    return 'motosiklet';
  }

  return fallback ?? 'otomobil';
}

export function WorkshopSegmentProvider({
  children,
  initialSegment,
}: {
  children: React.ReactNode;
  initialSegment?: WorkshopSegment;
}) {
  const [segment, setSegmentState] = useState<WorkshopSegment>(() => getInitialSegment(initialSegment));

  // URL hash veya popstate dinlemesi
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname.startsWith('/motosiklet')) {
        setSegmentState('motosiklet');
        return;
      }
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('motosiklet') || hash.includes('moto')) {
        setSegmentState('motosiklet');
      } else if (hash.includes('otomobil') || hash.includes('oto')) {
        setSegmentState('otomobil');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const setSegment = useCallback((newSegment: WorkshopSegment) => {
    setSegmentState(newSegment);
    if (typeof window !== 'undefined') {
      if (newSegment === 'motosiklet' && !window.location.pathname.startsWith('/motosiklet')) {
        window.history.pushState(null, '', '/motosiklet');
      } else if (newSegment === 'otomobil' && window.location.pathname.startsWith('/motosiklet')) {
        window.history.pushState(null, '', '/#otomobil');
      } else {
        const newHash = newSegment === 'motosiklet' ? '#motosiklet' : '#otomobil';
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, '', newHash);
        }
      }
    }
  }, []);

  const hotline = SEGMENT_HOTLINES[segment];

  const value: WorkshopSegmentContextValue = {
    segment,
    setSegment,
    isOtomobil: segment === 'otomobil',
    isMotosiklet: segment === 'motosiklet',
    phone: hotline.phone,
    phoneDisplay: hotline.phoneDisplay,
    whatsappNumber: hotline.whatsappNumber,
    whatsappDefaultMessage: hotline.whatsappDefaultMessage,
  };

  return (
    <WorkshopSegmentContext.Provider value={value}>
      {children}
    </WorkshopSegmentContext.Provider>
  );
}

export function useWorkshopSegment(): WorkshopSegmentContextValue {
  const context = useContext(WorkshopSegmentContext);
  if (!context) {
    // SSR veya Provider dışı çağrılar için güvenli varsayılan fallback
    const fallback = SEGMENT_HOTLINES.otomobil;
    return {
      segment: 'otomobil',
      setSegment: () => {},
      isOtomobil: true,
      isMotosiklet: false,
      phone: fallback.phone,
      phoneDisplay: fallback.phoneDisplay,
      whatsappNumber: fallback.whatsappNumber,
      whatsappDefaultMessage: fallback.whatsappDefaultMessage,
    };
  }
  return context;
}
