'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, Award, Globe2, Leaf } from 'lucide-react'

const highlights = [
  { icon: Globe2, label: 'Global Exporter', desc: 'Serving international markets across industries' },
  { icon: Leaf, label: 'Bio-Based Focus', desc: 'Products from renewable, sustainable resources' },
  { icon: Award, label: 'Quality Assured', desc: 'Strict sourcing & quality control standards' },
  { icon: CheckCircle2, label: 'IEC Certified', desc: 'Registered & compliant export trading company' },
]

const stats = [
  { value: '80%+', label: "India's share in world castor seeds production" },
  { value: '6+', label: 'Specialty chemical products' },
  { value: '392001', label: 'Based in Bharuch, Gujarat' },
  { value: '24/7', label: 'Customer support & reliability' },
]

function fadeUpVariants(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
  }
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Tag */}
        <motion.div
          variants={fadeUpVariants(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green-deep)' }}
          >
            Who We Are
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance max-w-2xl mb-4">
            India&apos;s Trusted Partner in Bio-Based Chemical Exports
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            variants={fadeUpVariants(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-bg.jpg"
                alt="GreenChem Global team and operations"
                width={600}
                height={480}
                className="object-cover w-full h-80 md:h-96"
              />
              {/* Decorative overlay block */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(0deg, rgba(11,37,14,0.82) 0%, transparent 100%)' }}
              >
                <p className="text-white font-serif font-semibold text-lg">GreenChem Global Exports LLP</p>
                <p className="text-white/70 text-sm font-sans">Bharuch, Gujarat, India</p>
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 hidden md:block"
            >
              <div
                className="rounded-2xl px-6 py-5 shadow-xl text-white text-center min-w-[140px]"
                style={{ background: 'var(--brand-gold)', color: '#1a2b1f' }}
              >
                <p className="font-serif font-bold text-3xl">80%+</p>
                <p className="text-xs font-sans font-medium mt-1 leading-tight max-w-[110px]">
                  India&apos;s Share in Global Castor Oil Supply
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUpVariants(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <p className="font-sans text-muted-foreground leading-relaxed text-base">
              Welcome to <span className="text-primary font-semibold">GreenChem Global Exports LLP</span> — a trusted partner in the global supply of castor oil and bio-based chemical derivatives.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed text-base">
              We specialize in the trading and export of high-quality castor oil and its derivatives such as Hydrogenated Castor Oil (HCO), 12-Hydroxystearic Acid (12-HSA), and Sebacic Acid, serving industries across the world.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed text-base">
              Our focus is on delivering <span className="text-primary font-medium">sustainable, eco-friendly, and bio-based chemical solutions </span> derived from renewable resources. With a strong commitment to quality, transparency, and long-term partnerships, we aim to contribute to the global transition toward green and sustainable chemical industries — supporting India&apos;s vision of Viksit Bharat 2047.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  variants={fadeUpVariants(0.3 + i * 0.08)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-muted transition-all group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'var(--brand-green-light)' }}
                  >
                    <h.icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground text-sm">{h.label}</p>
                    <p className="text-muted-foreground text-xs font-sans leading-snug">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeUpVariants(0.3)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="rounded-2xl overflow-hidden"
          style={{ background: 'var(--brand-green-deep)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-8 px-4 text-center ${i < stats.length - 1 ? 'border-r border-white/15' : ''
                  }`}
              >
                <span className="font-serif font-bold text-3xl md:text-4xl text-white">{s.value}</span>
                <span className="text-white/65 text-xs font-sans mt-2 leading-snug max-w-[120px]">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
