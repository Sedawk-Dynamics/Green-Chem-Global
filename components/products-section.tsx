'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Package, Beaker, Layers, ChevronRight, BookOpen } from 'lucide-react'

const products = [
  {
    id: 'castor-oil',
    name: 'Castor Oil',
    subtitle: 'First Special Grade (FSG) · CAS: 8001-79-4',
    image: '/castor.png',
    detailUrl: '/products/castor-oil',
    overview:
      'Castor Oil FSG is a renewable vegetable oil derived from castor seeds (Ricinus communis). Known for its high viscosity, excellent lubricity, and unique hydroxyl fatty acid structure.',
    applications: [
      'Lubricants & Greases',
      'Coatings & Paints',
      'Polymers & Nylon Production',
      'Cosmetics & Personal Care',
      'Pharmaceuticals',
      'Bio-based Chemical Intermediates',
    ],
    packaging: 'Drums, IBC Tanks, Flexi Tanks, Customized Bulk Packaging',
    tag: 'Flagship Product',
    tagColor: 'var(--brand-gold)',
    tagText: '#1a2b1f',
  },
  {
    id: 'hco',
    name: 'Hydrogenated Castor Oil',
    subtitle: 'HCO / Castor Wax · CAS: 8001-78-3',
    image: '/images/HCO.webp',
    detailUrl: '/products/hco',
    overview:
      'Produced by hydrogenating castor oil, HCO is a hard, brittle wax with a high melting point and excellent chemical stability. Superior lubricating and thickening properties.',
    applications: [
      'Lubricating Greases',
      'Plastic Processing',
      'Polishes & Coatings',
      'Cosmetics & Personal Care',
      'Adhesives & Sealants',
    ],
    packaging: '25 kg reinforced paper bags, 500 kg & 1000 kg jumbo bags, custom packaging as per customer requirement',
    tag: 'High Demand',
    tagColor: 'var(--brand-green-deep)',
    tagText: '#fff',
  },
  {
    id: '12hsa',
    name: '12-Hydroxy Stearic Acid',
    subtitle: '12-HSA · CAS: 106-14-9',
    image: '/hsa.png',
    detailUrl: '/products/12hsa',
    overview:
      'A high-performance fatty acid derived from hydrogenated castor oil. Widely used as a thickening agent and rheology modifier in lubricants. Excellent thermal stability and viscosity.',
    applications: [
      'Lubricating Greases',
      'Paints & Coatings',
      'Cosmetic Formulations',
      'Industrial Lubricants',
      'Specialty Chemical Intermediates',
    ],
    packaging: '25 kg bags, 50 kg bags, custom packaging as per customer requirement',
    tag: 'Specialty Grade',
    tagColor: 'var(--brand-teal)',
    tagText: '#fff',
  },
  {
    id: 'sebacic-acid',
    name: 'Sebacic Acid',
    subtitle: 'Bio-Based Dicarboxylic Acid',
    image: '/images/Sebacic-Acid-CAS-111-20-6.avif',
    overview:
      'A versatile bio-based dicarboxylic acid derived from castor oil. Important raw material for high-performance polymers, nylon resins, plasticizers, lubricants, and specialty chemicals.',
    applications: [
      'Nylon 6,10 and Polyamides',
      'Plasticizers',
      'Synthetic Lubricants',
      'Adhesives & Sealants',
      'Corrosion Inhibitors',
      'Cosmetics & Personal Care',
    ],
    packaging: '25 kg bags, Jumbo Bags, Customized Export Packaging',
    tag: 'Bio-Based',
    tagColor: 'var(--brand-blue)',
    tagText: '#fff',
  },
  {
    id: 'bio-specialty',
    name: 'Bio-Based Specialty Chemicals',
    subtitle: 'Renewable Chemical Solutions',
    image: '/bio-specialty.png',
    overview:
      'Sustainable chemical products derived from renewable resources such as vegetable oils and natural feedstocks. Environmentally friendly alternatives to petroleum-based products.',
    applications: [
      'Polymers & Coatings',
      'Adhesives',
      'Lubricants',
      'Advanced Industrial Applications',
    ],
    packaging: 'Customized based on product and customer requirement',
    tag: 'Eco-Friendly',
    tagColor: 'var(--brand-green-mid)',
    tagText: '#fff',
  },
  {
    id: 'green-chemicals',
    name: 'Green & Sustainable Chemicals',
    subtitle: 'Eco-Friendly Formulations',
    image: '/green-chemicals.png',
    overview:
      'Environmentally friendly products derived from renewable feedstocks. Support sustainable manufacturing and reduce environmental impact. Used in bio-lubricants, coatings, and eco-friendly formulations.',
    applications: [
      'Bio-Lubricants',
      'Coatings',
      'Eco-Friendly Industrial Formulations',
      'Green Polymers',
    ],
    packaging: 'Customized bulk packaging options available',
    tag: 'Green Chemistry',
    tagColor: 'var(--brand-green-deep)',
    tagText: '#fff',
  },
  {
    id: 'undecylenic-acid',
    name: 'Undecylenic Acid',
    subtitle: '10-Undecenoic Acid (CAS: 112-38-9)',
    image: '/undecylenic-acid.png',
    detailUrl: '/products/undecylenic-acid',
    overview:
      'A high-purity unsaturated C11 fatty acid derived from castor oil pyrolysis. Possesses excellent antifungal, antibacterial and surface-active properties. Widely used in pharmaceutical, cosmetic, agricultural and specialty chemical industries.',
    applications: [
      'Antifungal Pharmaceuticals',
      'Cosmetics & Personal Care',
      'Agricultural Fungicides',
      'Veterinary Products',
      'Industrial Derivatives',
      'Polymer & Specialty Chemicals',
    ],
    packaging: '25 kg HDPE Carboys, 50 kg HDPE Drums, 180 kg HDPE Drums, IBC Containers, Bulk Tankers',
    tag: 'Bio-Based',
    tagColor: 'var(--brand-blue)',
    tagText: '#fff',
  },
]

function ProductCard({ product, delay }: { product: typeof products[0] & { detailUrl?: string }; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white border border-border rounded-2xl overflow-hidden cursor-default flex flex-col"
      style={{ boxShadow: hovered ? '0 24px 48px rgba(27,94,32,0.14)' : '0 2px 8px rgba(0,0,0,0.06)' }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-b from-background to-muted">
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full w-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(11,37,14,0.55) 100%)',
            opacity: hovered ? 1 : 0.6,
          }}
        />
        {/* Tag */}
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: product.tagColor, color: product.tagText }}
        >
          {product.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-1">{product.subtitle}</p>
        <h3 className="font-serif font-bold text-lg text-foreground mb-3">{product.name}</h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{product.overview}</p>

        {/* Applications - revealed on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 font-sans">Key Applications</p>
              <div className="flex flex-wrap gap-1.5">
                {product.applications.slice(0, 4).map((app) => (
                  <span
                    key={app}
                    className="px-2 py-1 text-xs font-sans rounded-md"
                    style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green-deep)' }}
                  >
                    {app}
                  </span>
                ))}
                {product.applications.length > 4 && (
                  <span
                    className="px-2 py-1 text-xs font-sans rounded-md text-muted-foreground"
                    style={{ background: 'var(--muted)' }}
                  >
                    +{product.applications.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Packaging */}
        <div className="flex items-start gap-2 pt-4 border-t border-border">
          <Package size={14} className="text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-xs font-sans text-muted-foreground leading-snug">{product.packaging}</p>
        </div>

        {/* CTA */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          className="mt-4 flex items-center gap-3 flex-wrap"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-2 text-sm font-semibold text-primary font-sans hover:gap-3 transition-all"
          >
            Request a Quote <ArrowRight size={15} />
          </button>
          {product.detailUrl && (
            <Link
              href={product.detailUrl}
              className="flex items-center gap-1.5 text-sm font-semibold font-sans text-muted-foreground hover:text-foreground transition-colors border-l border-border pl-3"
            >
              <BookOpen size={14} />
              Read More
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green-deep)' }}
          >
            Our Products
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance max-w-2xl mb-4">
            Bio-Based &amp; Industrial Chemical Solutions
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl text-base leading-relaxed">
            We supply high-quality castor oil and its derivatives and specialty chemicals for various industrial applications worldwide. Sourced from reliable manufacturers and processed under strict quality standards.
          </p>
          <div className="w-16 h-1 rounded-full bg-primary mt-6" />
        </motion.div>

        {/* Quick category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[
            { icon: Beaker, label: 'Castor Derivatives' },
            { icon: Layers, label: 'Specialty Chemicals' },
            { icon: Package, label: 'Global Packaging' },
          ].map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-sans text-muted-foreground"
            >
              <p.icon size={14} className="text-primary" />
              {p.label}
            </div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={0.05 * i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10"
          style={{ background: 'var(--brand-green-deep)' }}
        >
          <div>
            <p className="font-serif font-bold text-xl md:text-2xl text-white mb-1">
              Looking for a specific chemical product?
            </p>
            <p className="text-white/70 font-sans text-sm">
              We also source specialty chemicals based on client requirements. Contact us with your specifications.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-2 whitespace-nowrap px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 flex-shrink-0"
            style={{ background: 'var(--brand-gold)', color: '#1a2b1f' }}
          >
            Enquire Now <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
