import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import AboutSection from "@/components/about-section"
import MissionVisionValues from "@/components/mission-vision-values"
import ProductsSection from "@/components/products-section"
import WhyUsSection from "@/components/why-us-section"
import CeoMessage from "@/components/ceo-message"
import CertificatesSection from "@/components/certificates-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <MissionVisionValues />
      <ProductsSection />
      <WhyUsSection />
      <CeoMessage />
      <CertificatesSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
