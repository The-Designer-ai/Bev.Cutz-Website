import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "BEV.CUTS | Windsor Barber",
  description:
    "Book $35 haircuts, fades, tapers, lineups, and modern barber transformations with BEV.CUTS in Windsor, Ontario.",
  metadataBase: new URL("https://bev-cuts.vercel.app"),
  openGraph: {
    title: "BEV.CUTS | Windsor Barber",
    description:
      "Book $35 haircuts, fades, tapers, lineups, and modern barber transformations with BEV.CUTS in Windsor, Ontario.",
    url: "https://bev-cuts.vercel.app",
    siteName: "BEV.CUTS",
    locale: "en_CA",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
