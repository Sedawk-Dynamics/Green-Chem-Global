'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Globe, Leaf, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    badge: 'Bio-Based Chemicals',
    title: 'Sustainable Chemical\nSolutions for the\nWorld',
    subtitle:
      'India\'s premier exporter of castor oil and bio-based specialty chemicals — powering industries across the globe with renewable, eco-friendly chemical solutions.',
    cta: 'Explore Products',
    ctaHref: '#products',
    secondary: 'Get in Touch',
    secondaryHref: '#contact',
    stat: { value: '80%+', label: "India's Global Share in Castor Oil" },
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    badge: 'Global Export Network',
    title: 'Connecting India\nto Global Chemical\nMarkets',
    subtitle:
      'Reliable supply chain management and transparent business practices ensure your chemical requirements are met on time, every time, worldwide.',
    cta: 'Why Choose Us',
    ctaHref: '#why-us',
    secondary: 'Our Products',
    secondaryHref: '#products',
    stat: { value: '6+', label: 'Key Products for Global Industries' },
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    badge: 'Green Chemistry',
    title: 'Green Today,\nGlobal Tomorrow',
    subtitle:
      'From castor fields of Gujarat to chemical plants worldwide — we deliver quality, integrity, and sustainable bio-based chemical intermediates.',
    cta: 'About GreenChem',
    ctaHref: '#about',
    secondary: 'Contact Us',
    secondaryHref: '#contact',
    stat: { value: '100%', label: 'Renewable Bio-Based Feedstocks' },
  },
]

const features = [
  { icon: Globe, label: 'Global Reach', desc: 'Export to international markets' },
  { icon: Leaf, label: 'Bio-Based', desc: 'Sustainable renewable sources' },
  { icon: TrendingUp, label: 'Quality Assured', desc: 'Strict sourcing standards' },
]

function scrollToSection(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 80px)', minHeight: '560px', maxHeight: '820px' }}>
      {/* Slides */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={`GreenChem Global - ${slide.badge}`}
            fill
            priority
            loading="eager"
            className="object-cover object-center"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(11,37,14,0.88) 0%, rgba(11,37,14,0.65) 55%, rgba(11,37,14,0.25) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-5"
              >
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{ background: 'var(--brand-gold)', color: '#1a2b1f' }}
                >
                  {slide.badge}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 text-balance"
                style={{ whiteSpace: 'pre-line' }}
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-sans text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => scrollToSection(slide.ctaHref)}
                  className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                  style={{ background: 'var(--brand-gold)', color: '#1a2b1f' }}
                >
                  {slide.cta}
                </button>
                <button
                  onClick={() => scrollToSection(slide.secondaryHref)}
                  className="px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-white/60 text-white hover:bg-white/15 transition-all"
                >
                  {slide.secondary}
                </button>
              </motion.div>

              {/* Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex items-center gap-3"
              >
                <div
                  className="h-12 w-1.5 rounded-full"
                  style={{ background: 'var(--brand-gold)' }}
                />
                <div>
                  <p
                    className="font-serif font-bold text-2xl"
                    style={{ color: 'var(--brand-gold)' }}
                  >
                    {slide.stat.value}
                  </p>
                  <p className="text-white/70 text-sm font-sans">{slide.stat.label}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on mobile, shown on md+ */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/30 transition-all backdrop-blur-sm hidden md:flex items-center justify-center"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/30 transition-all backdrop-blur-sm hidden md:flex items-center justify-center"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-[color:var(--brand-gold)]' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Feature Cards Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-0 right-0 z-20 hidden xl:flex"
      >
        <div
          className="flex items-stretch"
          style={{ background: 'rgba(11,37,14,0.75)', backdropFilter: 'blur(12px)' }}
        >
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`flex items-center gap-3 px-6 py-4 ${i < features.length - 1 ? 'border-r border-white/15' : ''}`}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--brand-gold)' }}
              >
                <f.icon size={16} style={{ color: '#1a2b1f' }} />
              </div>
              <div>
                <p className="text-white font-serif font-semibold text-sm">{f.label}</p>
                <p className="text-white/60 text-xs font-sans">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
