import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vladimir Legaspi | AI Automation Builder",
  description:
    "Explore AI automation, CRM workflow, chatbot, site operations, ecommerce operations, and modern web projects built by Vladimir Legaspi.",
  keywords: [
    "Vladimir Legaspi",
    "AI automation builder",
    "workflow automation",
    "CRM automation",
    "n8n",
    "GoHighLevel",
    "Telegram bot",
  ],
  openGraph: {
    title: "Vladimir Legaspi | AI Automation Builder",
    description:
      "Smart systems, clearer workflows. Explore practical AI automation, CRM, chatbot, operations, and web projects.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Vladimir Legaspi — AI Automation Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vladimir Legaspi | AI Automation Builder",
    description:
      "Smart systems, clearer workflows. Explore practical automation portfolio projects.",
    images: ["/og.png"],
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
