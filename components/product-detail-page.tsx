'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  FlaskConical,
  Package,
  Layers,
  CheckCircle2,
  ChevronRight,
  Factory,
  Leaf,
  ShieldCheck,
} from 'lucide-react'

type Spec = { parameter: string; value: string }
type Grade = { grade: string; industries: string }
type Efficacy = { property: string; performance: string }

interface Product {
  id: string
  name: string
  subtitle: string
  tag: string
  tagColor: string
  tagText: string
  image: string
  casNumber: string
  ecNumber: string
  hsnNumber?: string
  molecularFormula?: string
  molecularWeight?: string
  chemicalStructure?: string
  description: string
  specifications: Spec[]
  applications: string[]
  packaging: string[]
  keyProperties: string[]
  industries: string[]
  grades?: Grade[]
  glcComposition?: { component: string; value: string }[]
  fattyAcidComposition?: { component: string; value: string }[]
  downstreamProducts?: string[]
  efficacy?: Efficacy[]
  storage?: string
  compatibility?: string[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function ProductDetailPage({ product }: { product: Product }) {
  const handleQuote = () => {
    window.location.href = '/#contact'
  }

  const url = `https://greenchemglobal.com/products/${product.id}`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greenchemglobal.com' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://greenchemglobal.com/#products' },
        { '@type': 'ListItem', position: 3, name: product.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: `https://greenchemglobal.com${product.image}`,
      url,
      category: 'Specialty Chemicals',
      brand: { '@type': 'Brand', name: 'GreenChem Global' },
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'CAS Number', value: product.casNumber },
        { '@type': 'PropertyValue', name: 'EC Number', value: product.ecNumber },
        ...(product.hsnNumber
          ? [{ '@type': 'PropertyValue', name: 'HSN Number', value: product.hsnNumber }]
          : []),
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/#products"
            className="flex items-center gap-2 text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-sans text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="hidden sm:block text-muted-foreground text-xs">/</span>
            <span className="text-xs font-sans text-muted-foreground hidden sm:block">Products</span>
            <span className="hidden sm:block text-muted-foreground text-xs">/</span>
            <span className="text-xs font-sans text-foreground font-medium truncate max-w-[140px]">{product.name}</span>
          </div>
          <button
            onClick={handleQuote}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold font-sans transition-all hover:scale-105 active:scale-95"
            style={{ background: 'var(--brand-green-deep)', color: '#fff' }}
          >
            Get a Quote <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-10 pb-0 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ background: product.tagColor, color: product.tagText }}
              >
                {product.tag}
              </span>
              <h1 className="font-serif font-bold text-3xl md:text-4xl xl:text-5xl text-foreground text-balance leading-tight mb-2">
                {product.name}
              </h1>
              <p className="font-sans text-base text-muted-foreground mb-6">{product.subtitle}</p>

              {/* Identifiers */}
              <div className="flex flex-wrap gap-3 mb-7">
                {[
                  { label: 'CAS No.', value: product.casNumber },
                  { label: 'EC No.', value: product.ecNumber },
                  product.hsnNumber ? { label: 'HSN No.', value: product.hsnNumber } : null,
                  product.molecularFormula ? { label: 'Formula', value: product.molecularFormula } : null,
                  product.molecularWeight ? { label: 'MW', value: product.molecularWeight } : null,
                ]
                  .filter(Boolean)
                  .map((item) => (
                    <div
                      key={item!.label}
                      className="flex flex-col px-4 py-2.5 rounded-xl border border-border"
                      style={{ background: 'var(--brand-green-light)' }}
                    >
                      <span className="text-xs font-sans text-muted-foreground uppercase tracking-wider">{item!.label}</span>
                      <span className="text-sm font-semibold font-sans text-foreground">{item!.value}</span>
                    </div>
                  ))}
              </div>

              {/* Description */}
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Chemical structure badge (Undecylenic) */}
              {product.chemicalStructure && (
                <div
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-border mb-8"
                  style={{ background: 'var(--muted)' }}
                >
                  <FlaskConical size={16} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans">Chemical Structure</p>
                    <p className="text-sm font-mono font-semibold text-foreground">{product.chemicalStructure}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleQuote}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm font-sans transition-all hover:scale-105 active:scale-95"
                  style={{ background: 'var(--brand-green-deep)', color: '#fff' }}
                >
                  Request a Quote <ChevronRight size={15} />
                </button>
                <Link
                  href="/#products"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm font-sans border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                >
                  All Products
                </Link>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="relative"
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: '4/3', background: 'var(--brand-green-light)' }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(11,37,14,0.35) 100%)' }}
                />
              </div>
              {/* Float badge */}
              <div
                className="absolute -bottom-5 -left-5 px-5 py-4 rounded-2xl shadow-xl border border-border"
                style={{ background: 'white' }}
              >
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-1">Available In</p>
                <p className="text-sm font-semibold text-foreground font-sans">{product.packaging.length} Packaging Options</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Properties strip */}
      <section className="mt-20 py-12" style={{ background: 'var(--brand-dark-bg)' }}>
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-10 gap-y-4"
          >
            {product.keyProperties.map((prop, i) => (
              <motion.div
                key={prop}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm font-sans text-white/85">{prop}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Specs + Composition */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Typical Specifications */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionTitle icon={<FlaskConical size={18} />} title="Typical Specifications" />
                <div className="rounded-2xl border border-border overflow-hidden mt-4">
                  <table className="w-full text-sm font-sans">
                    <thead>
                      <tr style={{ background: 'var(--brand-green-deep)' }}>
                        <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider w-1/2">Parameter</th>
                        <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, i) => (
                        <tr
                          key={spec.parameter}
                          className="border-t border-border"
                          style={{ background: i % 2 === 0 ? 'var(--brand-green-light)' : 'white' }}
                        >
                          <td className="px-5 py-3 text-foreground font-medium">{spec.parameter}</td>
                          <td className="px-5 py-3 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* GLC Composition (HCO) */}
              {product.glcComposition && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <SectionTitle icon={<Layers size={18} />} title="GLC Fatty Acid Composition" />
                  <div className="rounded-2xl border border-border overflow-hidden mt-4">
                    <table className="w-full text-sm font-sans">
                      <thead>
                        <tr style={{ background: 'var(--brand-green-deep)' }}>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider w-1/2">Component</th>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.glcComposition.map((row, i) => (
                          <tr
                            key={row.component}
                            className="border-t border-border"
                            style={{ background: i % 2 === 0 ? 'var(--brand-green-light)' : 'white' }}
                          >
                            <td className="px-5 py-3 text-foreground font-medium">{row.component}</td>
                            <td className="px-5 py-3 text-muted-foreground">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Fatty Acid Composition (12-HSA) */}
              {product.fattyAcidComposition && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <SectionTitle icon={<Layers size={18} />} title="Fatty Acid Composition" />
                  <div className="rounded-2xl border border-border overflow-hidden mt-4">
                    <table className="w-full text-sm font-sans">
                      <thead>
                        <tr style={{ background: 'var(--brand-green-deep)' }}>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider w-1/2">Component</th>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.fattyAcidComposition.map((row, i) => (
                          <tr
                            key={row.component}
                            className="border-t border-border"
                            style={{ background: i % 2 === 0 ? 'var(--brand-green-light)' : 'white' }}
                          >
                            <td className="px-5 py-3 text-foreground font-medium">{row.component}</td>
                            <td className="px-5 py-3 text-muted-foreground">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Applications */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionTitle icon={<Factory size={18} />} title="Applications" />
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {product.applications.map((app, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i * 0.5}
                      className="flex items-start gap-3 p-4 rounded-xl border border-border"
                      style={{ background: 'var(--brand-green-light)' }}
                    >
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-sans text-foreground leading-snug">{app}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Grades (Castor Oil) */}
              {product.grades && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <SectionTitle icon={<Layers size={18} />} title="Available Grades" />
                  <div className="rounded-2xl border border-border overflow-hidden mt-4">
                    <table className="w-full text-sm font-sans">
                      <thead>
                        <tr style={{ background: 'var(--brand-green-deep)' }}>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider w-2/5">Grade</th>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider">Major Industries</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.grades.map((g, i) => (
                          <tr
                            key={g.grade}
                            className="border-t border-border"
                            style={{ background: i % 2 === 0 ? 'var(--brand-green-light)' : 'white' }}
                          >
                            <td className="px-5 py-3 text-foreground font-medium">{g.grade}</td>
                            <td className="px-5 py-3 text-muted-foreground">{g.industries}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Efficacy Table (Undecylenic) */}
              {product.efficacy && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <SectionTitle icon={<ShieldCheck size={18} />} title="Typical Efficacy" />
                  <div className="rounded-2xl border border-border overflow-hidden mt-4">
                    <table className="w-full text-sm font-sans">
                      <thead>
                        <tr style={{ background: 'var(--brand-green-deep)' }}>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider w-1/2">Property</th>
                          <th className="text-left px-5 py-3 text-white font-semibold text-xs uppercase tracking-wider">Relative Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.efficacy.map((row, i) => (
                          <tr
                            key={row.property}
                            className="border-t border-border"
                            style={{ background: i % 2 === 0 ? 'var(--brand-green-light)' : 'white' }}
                          >
                            <td className="px-5 py-3 text-foreground font-medium">{row.property}</td>
                            <td className="px-5 py-3">
                              <EfficacyBadge value={row.performance} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="flex flex-col gap-6">

              {/* Packaging */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl border border-border p-6"
                style={{ background: 'white' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Package size={18} className="text-primary" />
                  <h3 className="font-serif font-bold text-base text-foreground">Packaging Options</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {product.packaging.map((pkg) => (
                    <li key={pkg} className="flex items-start gap-2.5 text-sm font-sans text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--brand-green-deep)' }} />
                      {pkg}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Industries */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl border border-border p-6"
                style={{ background: 'white' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Factory size={18} className="text-primary" />
                  <h3 className="font-serif font-bold text-base text-foreground">Industries Served</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 text-xs font-semibold font-sans rounded-full"
                      style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green-deep)' }}
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Downstream Products (Undecylenic) */}
              {product.downstreamProducts && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border p-6"
                  style={{ background: 'white' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Layers size={18} className="text-primary" />
                    <h3 className="font-serif font-bold text-base text-foreground">Major Downstream Products</h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {product.downstreamProducts.map((dp) => (
                      <li key={dp} className="flex items-start gap-2.5 text-sm font-sans text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--brand-blue)' }} />
                        {dp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Compatibility (Undecylenic) */}
              {product.compatibility && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border p-6"
                  style={{ background: 'white' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={18} className="text-primary" />
                    <h3 className="font-serif font-bold text-base text-foreground">Compatibility</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-sans rounded-full border border-border text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Storage (Undecylenic) */}
              {product.storage && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border p-6"
                  style={{ background: 'var(--brand-green-light)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf size={18} className="text-primary" />
                    <h3 className="font-serif font-bold text-base text-foreground">Storage</h3>
                  </div>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">{product.storage}</p>
                </motion.div>
              )}

              {/* CTA Card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: 'var(--brand-green-deep)' }}
              >
                <p className="font-serif font-bold text-lg text-white leading-snug">
                  Interested in {product.name}?
                </p>
                <p className="text-sm font-sans text-white/70 leading-relaxed">
                  Contact us for pricing, availability, samples, and technical support.
                </p>
                <button
                  onClick={handleQuote}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold text-sm font-sans transition-all hover:scale-105 active:scale-95"
                  style={{ background: 'var(--brand-gold)', color: '#1a2b1f' }}
                >
                  Get a Quote <ChevronRight size={15} />
                </button>
                <Link
                  href="/#products"
                  className="text-center text-xs font-sans text-white/60 hover:text-white/90 transition-colors"
                >
                  View All Products
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MSDS / TDS Download note */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: 'var(--muted)' }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--brand-green-light)' }}
              >
                <ShieldCheck size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-serif font-bold text-base text-foreground mb-0.5">
                  MSDS / TDS Documentation
                </p>
                <p className="text-sm font-sans text-muted-foreground">
                  Technical Data Sheet and Safety Data Sheet available upon request. Contact us with your details.
                </p>
              </div>
            </div>
            <button
              onClick={handleQuote}
              className="flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full font-semibold text-sm font-sans border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              Request Documentation <ChevronRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-primary">{icon}</span>
      <h2 className="font-serif font-bold text-xl text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-border ml-2" />
    </div>
  )
}

function EfficacyBadge({ value }: { value: string }) {
  const colorMap: Record<string, { bg: string; color: string }> = {
    Excellent: { bg: 'var(--brand-green-light)', color: 'var(--brand-green-deep)' },
    'Good–Excellent (when formulated)': { bg: 'var(--brand-green-light)', color: 'var(--brand-green-deep)' },
    Good: { bg: 'oklch(0.95 0.04 200)', color: 'var(--brand-teal)' },
    Moderate: { bg: 'var(--brand-gold-light)', color: 'oklch(0.50 0.12 70)' },
  }
  const style = colorMap[value] ?? { bg: 'var(--muted)', color: 'var(--muted-foreground)' }
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-sans"
      style={{ background: style.bg, color: style.color }}
    >
      {value}
    </span>
  )
}
