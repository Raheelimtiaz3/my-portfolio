import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Raheel Wahla — Full Stack Web Developer & Digital Creative',
  description:
    'Award-winning cinematic 3D portfolio of Raheel Wahla. Full Stack Web Developer & Digital Creative specializing in modern web applications, creative technology, and high-performance interactive experiences.',
  openGraph: {
    title: 'Raheel Wahla — Full Stack Web Developer & Digital Creative',
    description:
      'Immersive 3D portfolio featuring high-end web applications, creative engineering, and architectural digital craft.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raheel Wahla — Full Stack Web Developer & Digital Creative',
    description:
      'Immersive 3D portfolio featuring high-end web applications, creative engineering, and architectural digital craft.',
  },
};

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: 'dark' }}
    >
      <body
        className="bg-[#080808] text-[#F5F2ED] font-sans antialiased selection:bg-[#D98245]/30 selection:text-[#F5F2ED] min-h-screen overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
