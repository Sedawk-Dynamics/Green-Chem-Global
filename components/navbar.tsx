'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'About Us', href: '#about' },
      { label: 'Mission & Vision', href: '#mission' },
      { label: 'Our Values', href: '#values' },
    ],
  },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Certifications', href: '#certificates' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchor = (href: string) => {
    setIsOpen(false)
    setActiveDropdown(null)
    
    // Handle page routes
    if (href.startsWith('/')) {
      router.push(href)
      return
    }
    
    // Handle anchor links — fall back to the homepage anchor when the
    // section is not on the current page (e.g. /gallery).
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/${href}`)
    }
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[color:var(--brand-green-deep)] text-primary-foreground text-sm py-1.5">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <span className="font-sans opacity-90">Green Today, Global Tomorrow</span>
          <div className="flex items-center gap-6">
            <a href="tel:+919274710944" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Phone size={13} />
              +91 92747 10944
            </a>
            <a href="mailto:info@greenchemglobal.com" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Mail size={13} />
              info@greenchemglobal.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-primary/10'
          : 'bg-white'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => { setIsOpen(false); setActiveDropdown(null) }}
              className="flex items-center gap-3 focus-visible:outline-none"
              aria-label="GreenChem Global Home"
            >
              <Image
                src="/logo.png"
                alt="GreenChem Global Logo"
                width={200}
                height={200}
                className="h-24 md:h-28 w-auto object-contain"
                priority
                sizes="(max-width: 768px) 180px, 240px"
              />

            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleAnchor(link.href)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-sans font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </button>
                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => handleAnchor(child.href)}
                              className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                            >
                              {child.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleAnchor('#contact')}
                className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-sans font-semibold hover:bg-[color:var(--brand-green-mid)] transition-colors"
              >
                Get a Quote
              </button>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} className="text-foreground" /> : <Menu size={22} className="text-foreground" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-border bg-white overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <button
                      onClick={() => handleAnchor(link.href)}
                      className="w-full text-left px-4 py-3 text-sm font-sans font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      {link.label}
                    </button>
                    {link.children && (
                      <div className="ml-4 border-l-2 border-muted pl-3 mt-1 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleAnchor(child.href)}
                            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-border mt-2">
                  <button
                    onClick={() => handleAnchor('#contact')}
                    className="w-full bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold"
                  >
                    Get a Quote
                  </button>
                </div>
                <div className="pt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href="tel:+919274710944" className="flex items-center gap-2">
                    <Phone size={14} /> +91 92747 10944
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
