import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"
import Head from 'next/head';

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
        url: "https://clarkai.vercel.app/opengraph-image.jpg", 
        secureUrl: "https://clarkai.vercel.app/opengraph-image.jpg",
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
    images: ["https://clarkai.vercel.app/opengraph-image.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://clarkai.vercel.app/opengraph-image.jpg" />
        <meta name="twitter:image" content="https://clarkai.vercel.app/opengraph-image.jpg" />
        {/* other meta tags */}
      </Head>
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
