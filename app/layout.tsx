import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ANAPNA - Association Nationale de la Promotion du Numérique en Algérie",
    template: "%s | ANAPNA"
  },
  description: "Association Nationale de la Promotion du Numérique en Algérie (ANAPNA). Fédérer, représenter et accompagner les DSI algériens dans leurs missions stratégiques de transformation digitale et de gouvernance IT depuis 2025.",
  keywords: [
    "ANAPNA",
    "Association Numérique Algérie",
    "DSI Algérie",
    "Transformation digitale Algérie",
    "Gouvernance IT",
    "Cybersécurité Algérie",
    "Infrastructure IT",
    "Digitalisation Algérie",
    "NAP-DZ",
    "Promotion Numérique",
    "Association professionnelle Algérie"
  ],
  authors: [{ name: "ANAPNA" }],
  creator: "ANAPNA",
  publisher: "ANAPNA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nap-dz.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ANAPNA - Association Nationale de la Promotion du Numérique en Algérie",
    description: "Fédérer, représenter et accompagner les DSI algériens dans leurs missions stratégiques de transformation digitale et de gouvernance IT.",
    url: 'https://nap-dz.org',
    siteName: 'ANAPNA',
    images: [
      {
        url: '/napdz_logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo ANAPNA - Association Nationale de la Promotion du Numérique en Algérie',
      }
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ANAPNA - Association Nationale de la Promotion du Numérique en Algérie",
    description: "Fédérer, représenter et accompagner les DSI algériens dans leurs missions stratégiques de transformation digitale.",
    images: ['/napdz_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/napdz_logo.png',
    shortcut: '/napdz_logo.png',
    apple: '/napdz_logo.png',
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANAPNA',
    alternateName: 'Association Nationale de la Promotion du Numérique en Algérie',
    url: 'https://nap-dz.org',
    logo: 'https://nap-dz.org/napdz_logo.png',
    description: 'Association Nationale de la Promotion du Numérique en Algérie. Fédérer, représenter et accompagner les DSI algériens dans leurs missions stratégiques de transformation digitale et de gouvernance IT.',
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DZ',
      addressLocality: 'Alger',
    },
    sameAs: [
      'https://www.linkedin.com/company/nap-dz/',
      'https://www.facebook.com/profile.php?id=61579135025147'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'general inquiry',
      availableLanguage: ['French', 'Arabic']
    }
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
