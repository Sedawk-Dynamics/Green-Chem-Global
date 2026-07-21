"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: "easeOut" } },
  }
}

export default function CeoMessage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="ceo"
      ref={ref}
      className="py-24"
      style={{ background: "var(--brand-green-light)" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "var(--brand-green-deep)", color: "#fff" }}
          >
            Leadership
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground text-balance max-w-xl">
            Message from Our Founder
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mt-5" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden"
          >
            <div className="grid md:grid-cols-[340px_1fr]">
              {/* CEO Image */}
              <div
                className="relative h-[400px] md:h-auto min-h-[480px]"
                style={{ background: "var(--brand-green-deep)" }}
              >
                <Image
                  src="/images/founder.jpg"
                  alt="Founder, GreenChem Global Exports LLP"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 md:hidden"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(11,37,14,0.85) 0%, rgba(11,37,14,0.3) 40%, transparent 100%)",
                  }}
                />
                {/* Name tag */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-serif font-bold text-white text-lg leading-tight">
                    Founder & Director
                  </p>
                  <p className="text-white/70 text-sm font-sans">
                    GreenChem Global Exports LLP
                  </p>
                  <p className="text-white/55 text-xs font-sans mt-0.5">
                    Bharuch, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote
                  className="w-10 h-10 mb-6 opacity-20"
                  style={{ color: "var(--brand-green-deep)" }}
                />
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-balance">
                  "India produces over 80% of the world's castor oil — yet much of that value
                  remains unrealized within our own borders. We founded GreenChem Global with a
                  single purpose: to bridge that gap. To take India's incredible bio-based
                  chemical wealth and deliver it — with quality, integrity, and care — to the
                  industries that need it most, everywhere in the world."
                </blockquote>
                <div className="flex flex-col gap-4 text-sm text-muted-foreground font-sans leading-relaxed">
                  <p>
                    Our journey began with a conviction that sustainable chemistry is not just the
                    future — it is a present opportunity. Every barrel of castor oil we export is
                    a step toward greener supply chains, stronger livelihoods for Indian farmers,
                    and a more responsible global chemicals industry.
                  </p>
                  <p>
                    We are committed to growing GreenChem Global into a company our customers,
                    suppliers, and communities are proud to be associated with — today and in the
                    decades to come.
                  </p>
                </div>
                <div
                  className="mt-8 pt-8 border-t border-border flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-white text-lg"
                    style={{ background: "var(--brand-green-deep)" }}
                  >
                    GC
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground">GreenChem Global</p>
                    <p className="text-xs text-muted-foreground">Green Today, Global Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
