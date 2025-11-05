import type { Metadata } from 'next';
import './globals.css';

import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { Space_Grotesk } from 'next/font/google';

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

const clashDisplay = localFont({
  src: [
    { path: './fonts/ClashDisplay-Light.woff2', weight: '300' },
    { path: './fonts/ClashDisplay-Regular.woff2', weight: '400' },
    { path: './fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: './fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-clash',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Julian Sandström | Frontend Developer',
  description:
    'Building clean, thoughtful interfaces with a focus on UX and detail.',
  openGraph: {
    title: 'Julian Sandström | Portfolio',
    description: 'Frontend developer crafting smooth, clear UI experiences.',
    url: 'https://julsan.netlify.app',
    siteName: 'Julian Sandström Portfolio',
    images: [
      {
        url: '/images/PixelJulle.png',
        width: 252,
        height: 223,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibm.variable} ${clashDisplay.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
