"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react"

const products = [
  { label: "Castor Oil", href: "#products" },
  { label: "Hydrogenated Castor Oil (HCO)", href: "#products" },
  { label: "12-Hydroxystearic Acid", href: "#products" },
  { label: "Sebacic Acid", href: "#products" },
  { label: "Bio-Specialty Chemicals", href: "#products" },
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

const industries = [
  "Lubricants & Greases",
  "Cosmetics & Personal Care",
  "Nylon & Polymers",
  "Pharmaceuticals",
  "Coatings & Inks",
  "Bio-Plasticizers",
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ background: "var(--brand-gold)", color: "var(--brand-green-deep)" }}
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-4">

          {/* Brand */}
          <div>
            <div className="mb-3">
              <div className="relative w-60 h-60 md:w-[300px] md:h-[300px]">
                <Image src="/logo.png" alt="logo" fill className="object-contain" />
              </div>
            </div>

            <p className="text-white/55 text-sm mb-4 max-w-xs">
              A trusted partner in the global supply of castor oil and bio-based specialty chemicals.
            </p>

            <div className="flex flex-col gap-2 text-sm text-white/55">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 92747 10944</span>
              {/* <a href="mailto:admin@greenchemglobal.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" /> admin@greenchemglobal.com</a> */}
              <a href="mailto:info@greenchemglobal.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" /> info@greenchemglobal.com</a>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bharuch, Gujarat</span>
            </div>

            <div className="flex gap-3 mt-4">
              <Linkedin className="w-5 h-5 text-white/60" />
              <Twitter className="w-5 h-5 text-white/60" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-2">Products</h4>
            {products.map(p => (
              <p key={p.label} className="text-white/55 text-sm">{p.label}</p>
            ))}
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-2">Quick Links</h4>
            {quickLinks.map(l => (
              <p key={l.label} className="text-white/55 text-sm">{l.label}</p>
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

      {/* Bottom */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-6 py-4 text-xs text-white/40 flex justify-between">
          <p>© {new Date().getFullYear()} GreenChem</p>
          <p>Webel.io</p>
        </div>
      </div>

    </footer>
  )
}
