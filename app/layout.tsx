import "./globals.css";
import { IBM_Plex_Sans, Gilda_Display } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Light.woff2", weight: "300" },
    { path: "./fonts/ClashDisplay-Regular.woff2", weight: "400" },
    { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "./fonts/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  variable: "--font-gilda",
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "Julian Sandström | Frontend Developer",
  description:
    "Building clean, thoughtful interfaces with a focus on UX and detail.",
  openGraph: {
    title: "Julian Sandström | Portfolio",
    description: "Frontend developer crafting smooth, clear UI experiences.",
    url: "https://julsan.netlify.app",
    siteName: "Julian Sandström Portfolio",
    images: [
      {
        url: "/images/PixelJulle.png",
        width: 252,
        height: 223,
      },
    ],
    locale: "en_US",
    type: "website",
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
      className={`${ibm.variable} ${clashDisplay.variable} ${gildaDisplay.variable}`}
    >
      <body className="overflow-y-scroll  scroll-smooth motion-reduce:scroll-auto bg-[#ededed]">
        <Header />
        {children} <Footer />
      </body>
    </html>
  );
}
