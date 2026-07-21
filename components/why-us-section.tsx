"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ShieldCheck,
  Truck,
  Globe2,
  Award,
  FlaskConical,
  Handshake,
  Clock,
  PackageCheck,
} from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Control",
    desc: "Each shipment is supported by the manufacturer's batch COA; independent testing can be arranged when required.",
    color: "#22c55e", // green
  },
  {
    icon: Globe2,
    title: "Our International Presence",
    desc: "Our presence spans key global markets including China, the USA, the Netherlands, and France — backed by robust export documentation and compliance expertise.",
    color: "#3b82f6", // blue
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    desc: "Deep relationships with qualified castor-oil & derivative manufacturers in Gujarat. Supplier coordination and advance planning support continuity of supply.",
    color: "#14b8a6", // teal
  },
  {
    icon: Award,
    title: "IEC Registered Exporter",
    desc: "Fully licensed export entity with Import Export Code, GST registration, and complete customs compliance infrastructure in place.",
    color: "#f59e0b", // gold
  },
  {
    icon: FlaskConical,
    title: "Technical Support",
    desc: "We coordinate technical documentation and application-related queries with our manufacturing partners.",
    color: "#4ade80",
  },
  {
    icon: Handshake,
    title: "Transparent Dealings",
    desc: "No hidden charges, no ambiguous terms. We believe in clear communication and ethical business practices from inquiry to delivery.",
    color: "#3b82f6",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Quick sample dispatch, streamlined order processing, and clear lead-time commitments with proactive shipment updates.",
    color: "#14b8a6",
  },
  {
    icon: PackageCheck,
    title: "Flexible Packaging",
    desc: "Available in 200 L drums, 25 kg bags, ISO tanks, and custom IBCs to suit small batch orders or bulk industrial requirements.",
    color: "#22c55e",
  },
]

const markets = [
  "Cosmetics & Personal Care",
  "Pharmaceuticals",
  "Lubricants & Greases",
  "Nylon & Polymers",
  "Paints & Coatings",
  "Bio-Plasticizers",
  "Ink & Adhesives",
  "Candles & Wax",
]

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: "easeOut" },
    },
  }
}

export default function WhyUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const marketsRef = useRef(null)
  const marketsInView = useInView(marketsRef, { once: true, margin: "-80px" })

  return (
    <section id="why-us" ref={ref} className="py-24 bg-[#0b1d16]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-amber-400 text-green-900">
            Why Choose Us
          </span>

          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white max-w-2xl mb-3">
            The GreenChem Global Advantage
          </h2>

          <p className="text-white/65 max-w-xl leading-relaxed">
            We are not just another chemicals trader. We are a quality-first,
            transparency-driven partner built to deliver value at every step of
            your supply chain.
          </p>

          <div className="w-16 h-1 rounded-full mt-5 bg-amber-400" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeUp(i * 0.07)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -6 }}
              className="group rounded-2xl p-6 border border-white/10 bg-white/5 
                         transition-all duration-300 hover:border-amber-400/50 
                         hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 
                              bg-white/10 group-hover:scale-110 transition-all duration-300">
                <r.icon
                  className="w-8 h-8"
                  style={{ stroke: r.color }}
                />
              </div>

              {/* Title */}
              <h4 className="font-serif font-bold text-white text-base mb-2">
                {r.title}
              </h4>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed">
                {r.desc}
              </p>

              {/* Hover line */}
              <div className="mt-5 h-0.5 w-0 group-hover:w-10 transition-all duration-500 rounded-full bg-amber-400" />
            </motion.div>
          ))}
        </div>

        {/* Markets */}
        <div ref={marketsRef}>
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={marketsInView ? "visible" : "hidden"}
            className="text-center mb-8"
          >
            <h3 className="font-serif font-bold text-2xl text-white mb-2">
              Industries We Serve
            </h3>
            <p className="text-white/55 text-sm">
              Our products power a broad spectrum of downstream industries globally.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={marketsInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3"
          >
            {markets.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={marketsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="px-5 py-2 rounded-full text-sm font-medium border 
                           border-white/15 bg-white/5 text-white/75 
                           hover:border-amber-400 hover:text-amber-400 transition-all"
              >
                {m}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}