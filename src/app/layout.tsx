import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clark - AI-Powered Learning & Productivity Companion",
  description:
    "Clark is your personal AI assistant designed to simplify learning, boost productivity, and help you grow smarter every day. Built with passion by Ashiru Sheriffdeen, Seyi Ogundipe, Segun Ojo, Omoteji Damilola, and Oyebo Hasbiyallah.",
  keywords: [
    "Clark",
    "AI assistant",
    "productivity tool",
    "GenAI",
    "AI learning",
    "student productivity",
    "Ashiru Sheriffdeen",
    "Seyi Ogundipe",
    "Segun Ojo",
    "Omoteji Damilola",
    "Oyebo Hasbiyallah",
    "Clark App",
  ],
  authors: [
    {
      name: "Ashiru Sheriffdeen, Seyi Ogundipe, Segun Ojo, Omoteji Damilola, Oyebo Hasbiyallah - Team Clark",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Clark - AI-Powered Learning & Productivity Companion",
    description:
      "Join Clark’s waitlist and explore the future of learning with AI. Crafted by a passionate team of devs, designers, and creators.",
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
    title: "Clark - AI-Powered Learning & Productivity Companion",
    description:
      "Your personal AI study & productivity buddy. Built by Ashiru, Seyi, Segun, Damilola & Hasbiyallah. Join the waitlist now.",
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
        <Analytics />
      </body>
    </html>
  );
}
