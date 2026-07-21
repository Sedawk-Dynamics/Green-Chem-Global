"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, ChevronDown } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Registered Office",
    value: "Bharuch, Gujarat – 392001, India",
    href: "https://maps.google.com/?q=Bharuch,Gujarat,India",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 92747 10944",
    href: "tel:+919274710944",
    external: false,
  },
  // {
  //   icon: Mail,
  //   label: "Admin Email",
  //   value: "admin@greenchemglobal.com",
  //   href: "mailto:admin@greenchemglobal.com",
  //   external: false,
  // },
  {
    icon: Mail,
    label: "Email",
    value: "info@greenchemglobal.com",
    href: "mailto:info@greenchemglobal.com",
    external: false,
  },
  {
    icon: Globe,
    label: "Export Markets",
    value: "Asia · Europe · Americas · Middle East",
    href: null,
    external: false,
  },
]

const productOptions = [
  "Castor Oil",
  "Hydrogenated Castor Oil (HCO)",
  "12-Hydroxystearic Acid (12-HSA)",
  "Sebacic Acid",
  "Multiple Products",
  "Other / Not Listed",
]

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: "easeOut" } },
  }
}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setLoading(false)
        setSubmitted(true)
      } else {
        setLoading(false)
        alert('Failed to send enquiry. Please try again.')
      }
    } catch (error) {
      setLoading(false)
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "var(--brand-green-light)", color: "var(--brand-green-deep)" }}
          >
            Get in Touch
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance max-w-xl mb-3">
            Request a Quote or Enquire About Our Products
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Tell us about your requirements and our team will respond within 24 business hours with pricing, specifications, and availability.
          </p>
          <div className="w-16 h-1 rounded-full bg-primary mt-5" />
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-5"
          >
            {/* Info card */}
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "var(--brand-green-deep)" }}
            >
              <h3 className="font-serif font-bold text-xl mb-1">GreenChem Global Exports LLP</h3>
              <p className="text-white/65 text-sm mb-8">
                India&apos;s Trusted Bio-Based Chemical Exporter
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <item.icon className="w-5 h-5 text-[var(--brand-gold)]" />
                    </div>
                    <div>
                      <p className="text-white/55 text-xs uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="text-white text-sm font-medium hover:text-[var(--brand-gold)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IEC note */}
            <div
              className="rounded-2xl p-5 border text-sm"
              style={{
                background: "var(--brand-green-light)",
                borderColor: "var(--brand-green-mid)",
              }}
            >
              <p className="font-semibold text-[var(--brand-green-deep)] mb-1">
                Registered Exporter
              </p>
              <p className="text-muted-foreground leading-relaxed">
                IEC Registered · GST Compliant · Full export documentation provided including COA, MSDS, and phytosanitary certificates where applicable.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="h-full flex flex-col items-center justify-center text-center rounded-2xl border border-border p-14 gap-6"
                style={{ background: "var(--brand-green-light)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "var(--brand-green-mid)" }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[var(--brand-green-deep)] mb-2">
                    Enquiry Received!
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    Thank you for reaching out. Our team will review your requirements and get back to you within 24 business hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", company: "", email: "", phone: "", product: "", quantity: "", message: "" })
                  }}
                  className="text-sm font-semibold text-[var(--brand-green-mid)] hover:underline"
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col gap-5"
              >
                <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                  Product Enquiry Form
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Product of Interest <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none pr-10`}
                      >
                        <option value="">Select a product</option>
                        {productOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. 5 MT / month"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Message / Special Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your application, required grade, packaging preference, destination port, etc."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: "var(--brand-green-mid)" }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We respond within 24 business hours. Your information is kept confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
