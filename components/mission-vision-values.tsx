'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Shield, Users, Leaf, TrendingUp, Handshake, CheckCircle } from 'lucide-react'

const missionPoints = [
  'Promote bio-based and eco-friendly chemicals',
  'Build long-term partnerships with global customers',
  'Maintain integrity, transparency, and ethical business practices',
  "Support India's leadership in castor-based chemical exports",
]

const visionPoints = [
  'Contribute to the global green chemistry movement',
  'Develop innovative bio-based chemical products',
  "Support India's industrial growth aligned with Viksit Bharat 2047",
  'Build a company known for quality, reliability, and sustainability',
]

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We conduct our business with honesty, transparency, and ethical practices.',
    color: 'var(--brand-green-deep)',
  },
  {
    icon: CheckCircle,
    title: 'Quality Commitment',
    desc: 'We ensure consistent quality by sourcing from trusted manufacturers and maintaining strict standards.',
    color: 'var(--brand-teal)',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'We promote environmentally responsible products derived from renewable resources.',
    color: 'var(--brand-green-mid)',
  },
  {
    icon: Handshake,
    title: 'Customer Partnership',
    desc: 'We believe in building long-term relationships based on trust and mutual growth.',
    color: 'var(--brand-blue)',
  },
  {
    icon: TrendingUp,
    title: 'Reliability',
    desc: 'We ensure timely delivery and dependable supply chains for our global customers.',
    color: 'var(--brand-green-deep)',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'We work as partners with our suppliers and customers to achieve shared success.',
    color: 'var(--brand-teal)',
  },
]

function fadeUpVariants(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
  }
}

export default function MissionVisionValues() {
  const refMV = useRef(null)
  const refValues = useRef(null)
  const inViewMV = useInView(refMV, { once: true, margin: '-80px' })
  const inViewValues = useInView(refValues, { once: true, margin: '-80px' })

  return (
    <>
      {/* Mission & Vision */}
      <section
        id="mission"
        ref={refMV}
        className="py-20"
        style={{ background: 'var(--brand-green-light)' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUpVariants(0)}
            initial="hidden"
            animate={inViewMV ? 'visible' : 'hidden'}
            className="flex flex-col items-center text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: 'var(--brand-green-deep)', color: '#fff' }}
            >
              Our Direction
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance max-w-xl mb-4">
              Mission, Vision &amp; Our Purpose
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              variants={fadeUpVariants(0.1)}
              initial="hidden"
              animate={inViewMV ? 'visible' : 'hidden'}
              className="bg-white rounded-2xl shadow-sm border border-border p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'var(--brand-green-deep)' }}
                >
                  <Target size={26} className="text-white" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground">Our Mission</h3>
              </div>
              <p className="font-sans text-muted-foreground leading-relaxed mb-5">
                To become a trusted global supplier of sustainable castor-based chemicals by delivering high-quality products, reliable supply chains, and transparent business practices.
              </p>
              <ul className="flex flex-col gap-3">
                {missionPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: 'var(--brand-green-light)' }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm font-sans text-muted-foreground leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUpVariants(0.2)}
              initial="hidden"
              animate={inViewMV ? 'visible' : 'hidden'}
              className="rounded-2xl shadow-sm border border-border p-8 hover:shadow-lg transition-shadow duration-300"
              style={{ background: 'var(--brand-green-deep)', borderColor: 'transparent' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/15"
                >
                  <Eye size={26} className="text-white" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-white">Our Vision</h3>
              </div>
              <p className="font-sans text-white/80 leading-relaxed mb-5">
                To become a globally recognized company in the castor-based chemical value chain, progressing from trading to manufacturing of sustainable specialty chemicals.
              </p>
              <ul className="flex flex-col gap-3">
                {visionPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: 'rgba(249,168,37,0.25)' }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: 'var(--brand-gold)' }} />
                    </div>
                    <span className="text-sm font-sans text-white/80 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" ref={refValues} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUpVariants(0)}
            initial="hidden"
            animate={inViewValues ? 'visible' : 'hidden'}
            className="flex flex-col items-center text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green-deep)' }}
            >
              Core Values
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance max-w-xl mb-4">
              The Principles That Drive Everything We Do
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUpVariants(0.05 * i)}
                initial="hidden"
                animate={inViewValues ? 'visible' : 'hidden'}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(27,94,32,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group bg-white border border-border rounded-2xl p-7 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'var(--brand-green-light)' }}
                >
                  <v.icon size={22} className="text-primary" />
                </div>
                <h4 className="font-serif font-bold text-lg text-foreground mb-2">{v.title}</h4>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                  style={{ background: 'var(--brand-gold)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
