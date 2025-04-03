import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clark",
  description: "Clark website",
  openGraph: {
    title: "ClarkAI - Collaborate, Succeed",
    description: "Clark: AI-powered learning tools for students to collaborate and succeed.",
    url: "https://clarkai.vercel.app",
    siteName: "Clark",
    images: [
      {
        url: "https://clarkai.vercel.app/og-image.png", 
        secureUrl: "https://clarkai.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clark Preview Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClarkAI - Collaborate, Succeed",
    description: "Clark: AI-powered learning tools for students to collaborate and succeed.",
    images: ["https://clarkai.vercel.app/og-image.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <NextTopLoader color="#F14E07"/>
        <Toaster />
      </body>
    </html>
  );
}
