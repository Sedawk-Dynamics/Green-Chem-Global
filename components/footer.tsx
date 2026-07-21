"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

const products = [
  { label: "Castor Oil (FSG)", href: "/products/castor-oil" },
  { label: "Hydrogenated Castor Oil (HCO)", href: "/products/hco" },
  { label: "12-Hydroxystearic Acid", href: "/products/12hsa" },
  { label: "Undecylenic Acid", href: "/products/undecylenic-acid" },
  { label: "Sebacic Acid", href: "/#products" },
  { label: "Bio-Specialty Chemicals", href: "/#products" },
]

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Mission & Vision", href: "/#mission" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Certifications", href: "/#certificates" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
]

const industries = [
  "Lubricants & Greases",
  "Cosmetics & Personal Care",
  "Nylon & Polymers",
  "Pharmaceuticals",
  "Coatings & Inks",
  "Bio-Plasticizers",
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Product Disclaimer", href: "/product-disclaimer" },
  { label: "Sitemap", href: "/sitemap.xml" },
]

export default function Footer() {
  return (
    <footer style={{ background: "var(--brand-dark-bg)" }}>

      {/* CTA */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif font-bold text-xl text-white mb-1">
              Ready to source bio-based chemicals?
            </p>
            <p className="text-white/55 text-sm">
              Partner with GreenChem Global for reliable supply worldwide.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ background: "var(--brand-gold)", color: "var(--brand-green-deep)" }}
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-4">

          {/* Brand */}
          <div>
            <Link href="/" className="mb-3 inline-block" aria-label="GreenChem Global Home">
              <div className="relative w-60 h-60 md:w-[300px] md:h-[300px]">
                <Image
                  src="/logo.png"
                  alt="GreenChem Global Exports LLP"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 240px, 300px"
                />
              </div>
            </Link>

            <p className="text-white/55 text-sm mb-4 max-w-xs">
              A trusted partner in the global supply of castor oil and bio-based specialty chemicals.
            </p>

            <div className="flex flex-col gap-2 text-sm text-white/55">
              <a href="tel:+919274710944" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +91 92747 10944
              </a>
              <a href="mailto:info@greenchemglobal.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@greenchemglobal.com
              </a>
              <a
                href="https://maps.google.com/?q=Bharuch,Gujarat,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors max-w-xs"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                BN-105 (Phase-2), Vivanta The Grandeur, Shravan Chockdi, Bharuch, Gujarat – 392001, India
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-2">Products</h4>
            {products.map(p => (
              <Link
                key={p.label}
                href={p.href}
                className="block text-white/55 text-sm hover:text-white transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-2">Quick Links</h4>
            {quickLinks.map(l => (
              <Link
                key={l.label}
                href={l.href}
                className="block text-white/55 text-sm hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white mb-2">Industries</h4>
            {industries.map(i => (
              <p key={i} className="text-white/55 text-sm">{i}</p>
            ))}
          </div>

        </div>
      </div>

      {/* Legal / statutory identity (LLP Act s.21) */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-6 py-5 flex flex-col gap-3 text-xs text-white/45">
          <div className="flex flex-col gap-1">
            <p className="text-white/60 font-semibold">GREENCHEM GLOBAL EXPORTS LLP</p>
            <p>
              Registered office: BN-105 (Phase-2), Vivanta The Grandeur, Shravan Chockdi, Bharuch,
              Gujarat – 392001, India
            </p>
            <p>LLPIN: ACV-6386 · Registered with limited liability</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map(l => (
              <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-6 py-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} GreenChem Global Exports LLP. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}
