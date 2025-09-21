import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Advocate Abhimanu Kumar Tripathi - Legal Services in Bihar, UP & Jharkhand",
  description:
    "Experienced advocate providing trusted legal solutions in Bihar, Uttar Pradesh, and Jharkhand. Specializing in Civil, Criminal, Family, Corporate, and Property Law with 15+ years of experience.",
  keywords:
    "advocate Bihar, lawyer UP, legal services Jharkhand, criminal lawyer, civil lawyer, property law, family law, corporate law, legal consultation, court representation",
  authors: [{ name: "Advocate Abhimanu Kumar Tripathi" }],
  creator: "Advocate Abhimanu Kumar Tripathi",
  publisher: "Legal Services Bihar UP Jharkhand",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://advocateabhimanukumar.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "hi-IN": "/hi-IN",
    },
  },
  openGraph: {
    title: "Advocate Abhimanu Kumar Tripathi - Expert Legal Services",
    description:
      "Trusted legal solutions in Bihar, UP & Jharkhand. 15+ years experience in Civil, Criminal, Family & Corporate Law.",
    url: "https://advocateabhimanukumar.com",
    siteName: "Advocate Abhimanu Kumar Tripathi",
    images: [
      {
        url: "/professional-indian-advocate-in-formal-attire.jpg",
        width: 1200,
        height: 630,
        alt: "Advocate Abhimanu Kumar Tripathi - Professional Legal Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Abhimanu Kumar Tripathi - Expert Legal Services",
    description: "Trusted legal solutions in Bihar, UP & Jharkhand. 15+ years experience.",
    images: ["/professional-indian-advocate-in-formal-attire.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Advocate Abhimanu Kumar Tripathi",
              description:
                "Experienced advocate providing trusted legal solutions in Bihar, Uttar Pradesh, and Jharkhand",
              url: "https://advocateabhimanukumar.com",
              telephone: "+91-9876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chamber No. 15, Patna High Court Complex",
                addressLocality: "Patna",
                addressRegion: "Bihar",
                postalCode: "800001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.5941",
                longitude: "85.1376",
              },
              openingHours: "Mo-Sa 09:00-18:00",
              priceRange: "₹₹",
              areaServed: ["Bihar", "Uttar Pradesh", "Jharkhand"],
              serviceType: ["Civil Law", "Criminal Law", "Family Law", "Corporate Law", "Property Law"],
              founder: {
                "@type": "Person",
                name: "Abhimanu Kumar Tripathi",
                jobTitle: "Advocate",
              },
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`font-sans ${playfair.variable} ${inter.variable}`}>
        <Suspense
          fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}
        >
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
      </body>
    </html>
  )
}
