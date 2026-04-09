import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "./config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const brandName = SITE_CONFIG.brand.name + (SITE_CONFIG.brand.nameAccent || "");
const description = SITE_CONFIG.brand.description;
const tagline = SITE_CONFIG.brand.tagline;

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: `${brandName} — ${tagline}`,
    template: `%s | ${brandName}`,
  },
  description: description,
  keywords: [
    "Ayurveda",
    "Ayurvedic wellness",
    "Herbal supplements",
    "Natural health",
    "Organic products",
    "Traditional medicine",
    "Holistic health",
    "Herbal remedies",
    "Wellness products",
    "Dr. Ananya Vaidya",
  ],
  authors: [{ name: SITE_CONFIG.brand.name }],
  creator: SITE_CONFIG.brand.name,
  publisher: SITE_CONFIG.brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://your-domain.com",
    siteName: brandName,
    title: `${brandName} — ${tagline}`,
    description: description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandName} — ${tagline}`,
    description: description,
    creator: "@yourhandle",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: brandName,
              description: description,
              url: "https://your-domain.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://your-domain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: SITE_CONFIG.practitioner.name,
              description: SITE_CONFIG.practitioner.bio[0],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              physician: {
                "@type": "Physician",
                name: SITE_CONFIG.practitioner.name,
                jobTitle: "Ayurvedic Practitioner",
                credentials: SITE_CONFIG.practitioner.credentials.join(", "),
              },
              areaServed: "India",
              serviceType: "Ayurvedic Consultation",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
