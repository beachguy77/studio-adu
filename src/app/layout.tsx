import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { siteConfig, siteUrl } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Studio IA | Santa Barbara ADU Design & Project Management",
    template: "%s | Studio IA",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Studio IA | Santa Barbara ADU Design & Project Management",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio IA | Santa Barbara ADU Design & Project Management",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <JsonLd data={localBusinessJsonLd()} />
        {children}
      </body>
    </html>
  );
}
