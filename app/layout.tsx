import type { Metadata } from "next";
import { Playfair_Display, Lato, Fraunces, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Walking Tenor | Jesús Daniel Hernández",
  description:
    "Operatic tenor, storyteller, and veteran. Music, podcast, and stories from The Walking Tenor.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} ${fraunces.variable} ${ibmPlexMono.variable} ${cormorant.variable} antialiased`}>
        <SiteChrome nav={<Nav />} footer={<Footer />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
