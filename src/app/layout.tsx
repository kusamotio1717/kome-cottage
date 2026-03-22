import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kome-cottage.vercel.app"
  ),
  title: "KOMÉ — THE COTTAGE, TSUKIYONE",
  description:
    "山梨県富士川町に佇む一棟貸しプライベートコテージ。サウナ・BBQ・薪ストーブ完備。最大6名。自然に抱かれた静かな贅沢を。",
  keywords: [
    "山梨 コテージ",
    "富士川町 一棟貸し",
    "プライベートコテージ",
    "山梨 サウナ コテージ",
    "山梨 BBQ コテージ",
    "薪ストーブ",
    "山梨 宿泊",
    "KOMÉ",
    "月夜根",
  ],
  openGraph: {
    title: "KOMÉ — THE COTTAGE, TSUKIYONE",
    description:
      "山梨県富士川町に佇む一棟貸しプライベートコテージ。自然に抱かれた静かな贅沢を。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/IMG_4597.jpg",
        width: 1920,
        height: 1440,
        alt: "KOMÉ — テラスからの眺望",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOMÉ — THE COTTAGE, TSUKIYONE",
    description: "山梨県富士川町の一棟貸しプライベートコテージ",
    images: ["/images/IMG_4597.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="preload"
          href="/images/IMG_4597.jpg"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
