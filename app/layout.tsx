import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ayub | Backend & Infrastructure Engineer | NestJS · PostgreSQL · DevOps",
  description: "Backend and Infrastructure Engineer with 5+ years building production systems for Nigerian government agencies and international organizations. NestJS, Next.js, PostgreSQL, DevOps, crisis recovery specialist. Available for remote contracts globally.",
  keywords: [
    "Backend Engineer Nigeria",
    "NestJS Developer",
    "Infrastructure Engineer",
    "DevOps Engineer Nigeria",
    "PostgreSQL Developer",
    "Government Systems Nigeria",
    "Remote Backend Developer",
    "Production Systems Engineer",
    "Crisis Recovery Engineer",
    "Full Stack Engineer Nigeria"
  ],
  authors: [{ name: "Muhammad Ayub", url: "https://mmueed.online" }],
  creator: "Muhammad Ayub",
  metadataBase: new URL("https://mmueed.online"),
  openGraph: {
    title: "Muhammad Ayub | Backend & Infrastructure Engineer",
    description: "Building production systems for government agencies and international organizations. NestJS · PostgreSQL · DevOps · Crisis Recovery.",
    url: "https://mmueed.online",
    siteName: "Muhammad Ayub — Infrastructure Engineer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ayub | Backend & Infrastructure Engineer",
    description: "Building production systems for government agencies and international organizations. NestJS · PostgreSQL · DevOps.",
    creator: "@mueed25",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://mmueed.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Muhammad Ayub",
      "jobTitle": "Backend & Infrastructure Engineer",
      "url": "https://mmueed.online",
      "email": "mueedmuhammad605@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kano",
        "addressCountry": "Nigeria"
      },
      "sameAs": [
        "https://linkedin.com/in/muhammedayub-dev",
        "https://github.com/mueed25"
      ],
      "knowsAbout": [
        "NestJS", "PostgreSQL", "DevOps", 
        "Infrastructure Engineering", "Crisis Recovery",
        "Next.js", "React Native", "Docker"
      ]
    })
  }}
/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}