'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Award, CheckCircle2, X } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'DPIIT Startup Recognition',
    issuer: 'Government of India - Department for Promotion of Industry and Internal Trade',
    date: '12-03-2026',
    image: '/certificates/cert-dpiit.png',
    description: 'Official recognition as a startup in Chemicals & Specialty Chemicals sector',
    details: [
      'Certificate No: DIPP249548',
      'Valid up to: 19-02-2036',
      'Recognized startup company',
    ],
  },
  {
    id: 2,
    title: 'Importer-Exporter Code (IEC)',
    issuer: 'Government of India - Ministry of Commerce & Industry',
    date: '10/03/2026',
    image: '/certificates/cert-iec.png',
    description: 'Official IEC registration for international trade authorization',
    details: [
      'IEC: ABEFG2825J',
      'PAN: ABEFG2825J',
      'Registered & compliant',
    ],
  },
  {
    id: 3,
    title: 'CHEMEXCIL Membership Certificate',
    issuer: 'Basic Chemicals Cosmetics & Dyes Export Promotion Council',
    date: '09/04/2026',
    image: '/certificates/cert-chemexcil.png',
    description: 'Registration & membership certificate for specialty chemicals and lubricants exports',
    details: [
      'Registration No: RCMC/CHEMEXCIL/01836/2026-2027',
      'Merchant Exporter status',
      'Castor oil, lubricants & specialty chemicals',
    ],
  },
]

function fadeUpVariants(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
  }
}

// Modal Component for enlarged certificate view
function CertificateModal({ certificate, isOpen, onClose }: { certificate: typeof certificates[0] | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !certificate) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors duration-200"
          aria-label="Close certificate"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="relative w-full md:w-2/3 h-64 md:h-auto bg-muted overflow-auto">
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={1200}
              height={1600}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between overflow-auto">
            <div>
              <h2 className="font-serif font-bold text-2xl text-foreground mb-2">{certificate.title}</h2>
              <p className="text-sm text-primary font-semibold mb-4">{certificate.issuer}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{certificate.description}</p>

              {/* Certificate Details */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">Certificate Details:</h3>
                {certificate.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Footer */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">Issued: <span className="font-semibold text-foreground">{certificate.date}</span></p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CertificatesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (cert: typeof certificates[0]) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedCert(null), 300)
  }

  return (
    <section id="certificates" ref={ref} className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
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
            Certifications
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance max-w-2xl mb-4">
            Official Recognition & Certifications
          </h2>
          <p className="text-muted-foreground max-w-xl mb-4">
            We are proudly recognized and certified by government authorities and international trade bodies
          </p>
          <div className="w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeUpVariants(0.1 + index * 0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group flex flex-col h-full"
            >
              {/* Certificate Card */}
              <div className="flex-1 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card flex flex-col">
                {/* Certificate Image */}
                <button
                  onClick={() => openModal(cert)}
                  className="relative h-72 overflow-hidden bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-t-2xl"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  {/* Overlay hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                      Click to view
                    </div>
                  </div>
                </button>

                {/* Certificate Details */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--brand-green-light)' }}
                    >
                      <Award size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-lg text-foreground">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-border">
                    {cert.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Date */}
                  <p className="text-xs font-semibold text-primary">Issued: {cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          variants={fadeUpVariants(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 rounded-2xl p-8 text-center border border-border"
          style={{ background: 'var(--brand-green-light)' }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="text-primary" size={24} />
            <h3 className="font-serif font-bold text-lg text-foreground">Certified & Compliant</h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our certifications from government authorities demonstrate our commitment to quality, ethical practices, and international compliance. We maintain the highest standards in sustainability and export quality assurance.
          </p>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal certificate={selectedCert} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
