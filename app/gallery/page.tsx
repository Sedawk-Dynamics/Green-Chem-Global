'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import Image from 'next/image'

interface GalleryImage {
  id: string
  title: string
  description: string
  image: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Raw Material Storage',
    description: 'Large-scale storage facility for raw materials including castor oil and specialized chemicals',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.28%20%281%29-y4syrJKJz7d48gyIYilhvyGiziD0eX.jpeg',
  },
  {
    id: '2',
    title: 'Quality Control Laboratory',
    description: 'Advanced laboratory setup with precision testing equipment and chemical analysis tools',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.28%20%282%29-Bi1dJlj3jmllteadGmQHyoUXFX9exe.jpeg',
  },
  {
    id: '3',
    title: 'Pressure Monitoring System',
    description: 'Industrial pressure gauges and monitoring systems for process control and safety',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.18-98j96SiUojz5JNTsGHuhVRDugcEHve.jpeg',
  },
  {
    id: '4',
    title: 'Processing Equipment',
    description: 'State-of-the-art industrial vessels with integrated heating and mixing systems',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.27%20%282%29-N6U1abVI4nkK7cnm7RSBojvw9GlfGv.jpeg',
  },
  {
    id: '5',
    title: 'Refinery Storage Tanks',
    description: 'Large-capacity cylindrical storage tanks for product storage and inventory management',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.30%20%281%29-rN0GToEvFFmJHvWM0NJSwAdkA2dPul.jpeg',
  },
  {
    id: '6',
    title: 'Chemical Analysis Lab',
    description: 'Precision laboratory with advanced testing and measurement instruments',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.21%20%281%29-cArpKmkWEvOobaD8s6juzNl55FSOmD.jpeg',
  },
  {
    id: '7',
    title: 'Multi-Vessel Processing System',
    description: 'Complex industrial setup with multiple reactors and automated control systems',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.20-MAPaBuKgkNOX3SEjbF22R1c1k5WoTa.jpeg',
  },
  {
    id: '8',
    title: 'Storage Facility Overview',
    description: 'Comprehensive raw material warehouse with organized storage systems',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.17-w5NiFzEIJwLQZtUeBBuTr0HVKjiGPE.jpeg',
  },
  {
    id: '9',
    title: 'Piping & Flow Control',
    description: 'Advanced piping systems with manual control valves for precise flow management',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.27-rM96bH2fQs7CGrpkwzOERpkiyZ7JuJ.jpeg',
  },
  {
    id: '10',
    title: 'Spherical Storage Vessels',
    description: 'High-capacity spherical tanks with integrated safety railings and access points',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.28-ri4DwGAmW5q9gszGZXm6EHotLZjOTh.jpeg',
  },
  {
    id: '11',
    title: 'Industrial Machinery',
    description: 'Heavy-duty processing equipment with automated operation and safety features',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.31-nqTtOGDalSQwIup5Zkbe3LAuv6PzPP.jpeg',
  },
  {
    id: '12',
    title: 'Laboratory Testing Equipment',
    description: 'Specialized instruments for thermal analysis and chemical composition testing',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.30-wEySYhoz2zFtIjbDebFI9mGcfo5vKs.jpeg',
  },
  {
    id: '13',
    title: 'Processing Plant Floor',
    description: 'Manufacturing floor with integrated production systems and operational oversight',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.31%20%281%29-ISebaFuI9I9OdBKYrDp3fVTWOqeok0.jpeg',
  },
  {
    id: '14',
    title: 'Advanced Lab Setup',
    description: 'Complete laboratory infrastructure with heating, mixing, and analysis capabilities',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.21-aCVbbGdbrTwPG4U2qJ8uxYIWlt3HrD.jpeg',
  },
  {
    id: '15',
    title: 'Facility Floor Plan',
    description: 'Overview of manufacturing facility layout and production equipment arrangement',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.19-rWEZ0QDFRwJ9zXCG8uAMWNKbxw6xUz.jpeg',
  },
  {
    id: '16',
    title: 'Laboratory Sample Testing',
    description: 'Quality assurance lab with chemical samples ready for analysis and testing',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2023.05.29-ld1mtdSsJVpEJ0uPMZbLxHMkY5hIZR.jpeg',
  },
]

interface EnlargedImage {
  id: string
  url: string
  title: string
}

export default function GalleryPage() {
  const [enlarged, setEnlarged] = useState<EnlargedImage | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Manufacturing Facility
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the production infrastructure, laboratory facilities, and quality control systems of our manufacturing partners that ensure excellence in every product we deliver.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
                onClick={() => setEnlarged({ id: item.id, url: item.image, title: item.title })}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      View Full Size
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      {enlarged && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setEnlarged(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setEnlarged(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold transition-colors"
            >
              ✕
            </button>
            <Image
              src={enlarged.url}
              alt={enlarged.title}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-white text-xl font-semibold">{enlarged.title}</h2>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
