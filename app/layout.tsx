import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import MotionProvider from "@/components/motion-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://greenchemglobal.com"),
  alternates: { canonical: "/" },
  title: "GreenChem Global | Castor Oil & Bio-Based Chemical Exports",
  description:
    "GreenChem Global Exports LLP - A trusted partner in global supply of castor oil, HCO, 12-HSA, and Sebacic Acid. Premium bio-based specialty chemicals for industries worldwide.",
  keywords: [
    "GreenChem Global",
    "castor oil exporter",
    "hydrogenated castor oil HCO",
    "sebacic acid",
    "12-HSA",
    "bio-based chemicals",
    "specialty chemicals India",
    "green chemistry",
    "chemical exports",
  ],
  openGraph: {
    title: "GreenChem Global | Bio-Based Chemical Exports",
    description:
      "Green Today, Global Tomorrow - Trading & exporting high-quality castor oil and bio-based specialty chemicals worldwide.",
    url: "https://greenchemglobal.com",
    siteName: "GreenChem Global",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "GreenChem Global Exports LLP — castor oil and bio-based specialty chemicals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenChem Global",
    description:
      "Premium castor oil & bio-based chemical exports for global industries.",
    images: ["/images/hero-1.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Organization structured data (schema.org)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GreenChem Global Exports LLP",
  alternateName: "GreenChem Global",
  legalName: "GREENCHEM GLOBAL EXPORTS LLP",
  url: "https://greenchemglobal.com",
  logo: "https://greenchemglobal.com/logo.png",
  slogan: "Green Today, Global Tomorrow",
  description:
    "Merchant exporter of castor oil and castor-oil derivatives — Castor Oil FSG, Hydrogenated Castor Oil, 12-Hydroxystearic Acid, Undecylenic Acid and Sebacic Acid.",
  identifier: "LLPIN: ACV-6386",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BN-105 (Phase-2), Vivanta The Grandeur, Shravan Chockdi",
    addressLocality: "Bharuch",
    addressRegion: "Gujarat",
    postalCode: "392001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-92747-10944",
    email: "info@greenchemglobal.com",
    contactType: "sales",
    areaServed: ["IN", "CN", "US", "NL", "FR"],
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Without JavaScript, framer-motion's server-rendered `opacity: 0`
            is never animated away — force every section visible instead. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
