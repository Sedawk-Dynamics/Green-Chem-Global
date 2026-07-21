"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  const whatsappNumber = "+919274710944"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20GreenChem%20Global,%20I%20would%20like%20to%20enquire%20about%20your%20products.`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all hover:shadow-xl"
      style={{ background: "#25D366" }}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </motion.a>
  )
}
