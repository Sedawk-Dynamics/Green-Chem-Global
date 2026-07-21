import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenChem Global",
    description:
      "Premium castor oil & bio-based chemical exports for global industries.",
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
        <>{children}</>
      </body>
    </html>
  )
}
