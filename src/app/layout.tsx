import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chafá Café & Studio | Where Wellness Meets Flavour",
  description:
    "Gourmet, wholesome, tasty and healthy food made with love! Chafá is a health-focused café with an integrated fitness studio in Pune. Clean eating, great coffee, yoga, HIIT, and community events.",
  keywords: [
    "Chafa Cafe",
    "Chafa Studio",
    "Healthy Food Pune",
    "Koregaon Park Cafe",
    "Wanowrie Cafe",
    "Bavdhan Cafe",
    "Yoga Studio Pune",
    "Healthy Cafe",
    "Smoothie Bowl",
    "Clean Eating",
    "Wellness Cafe",
  ],
  authors: [{ name: "Chafá Café & Studio" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Chafá Café & Studio | Where Wellness Meets Flavour",
    description:
      "Gourmet, wholesome, tasty and healthy food made with love! Health-focused café with fitness studio in Pune.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chafá Café & Studio | Where Wellness Meets Flavour",
    description:
      "Gourmet, wholesome, tasty and healthy food made with love! Health-focused café with fitness studio in Pune.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSerif.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
