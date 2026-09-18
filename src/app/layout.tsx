import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bumex Garage — Premium Detailing, Seramik & Motor Bakım Stüdyosu | Ankara',
  description: 'Ankara Bahçelievler\'de mikron seviyesinde boya düzeltme, 9H nano seramik zırh, motosiklet detailing ve dielektrik kuru buharlı motor temizliği.',
  keywords: ['oto yıkama', 'detailing', 'seramik kaplama', 'ankara pasta cila', 'motosiklet detailing', 'bumex garage', 'bahçelievler oto bakım'],
  openGraph: {
    title: 'Bumex Garage — Premium Detailing & Araç Bakım',
    description: 'Ankara Bahçelievler\'in seçkin otomobil ve motosikletlerine mikron seviyesinde boya restorasyonu ve 9H seramik koruma.',
    locale: 'tr_TR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#1B1D20',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
