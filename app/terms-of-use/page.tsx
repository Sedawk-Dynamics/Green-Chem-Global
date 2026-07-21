import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Use | GreenChem Global',
  description:
    'Terms governing the use of greenchemglobal.com, operated by GreenChem Global Exports LLP, Bharuch, Gujarat, India.',
  alternates: { canonical: '/terms-of-use' },
}

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LegalPage
        title="Terms of Use"
        updated="Last updated: 21 July 2026"
        intro="These terms govern your use of greenchemglobal.com, operated by GREENCHEM GLOBAL EXPORTS LLP (LLPIN: ACV-6386), registered office BN-105 (Phase-2), Vivanta The Grandeur, Shravan Chockdi, Bharuch, Gujarat – 392001, India, registered with limited liability. By using this website you accept these terms."
        sections={[
          {
            heading: 'Purpose of this website',
            body: [
              'This website presents information about GreenChem Global Exports LLP and the castor oil and bio-based specialty chemicals we trade and export. It is provided for general information only and does not constitute a contractual offer.',
            ],
          },
          {
            heading: 'No offer or warranty of supply',
            body: [
              'Product listings, specifications, packaging options and availability shown here are indicative. Binding terms — including grade, specification, quantity, price, packaging, delivery terms and lead time — arise only from a written quotation, proforma invoice or sales contract signed or confirmed by us.',
            ],
          },
          {
            heading: 'Accuracy of information',
            body: [
              'We take reasonable care to keep the information on this site accurate and current, but we do not warrant that it is complete, error-free or up to date at all times. Typical specifications are drawn from manufacturer documentation and may be revised without notice. Always request the current Technical Data Sheet, Safety Data Sheet and batch Certificate of Analysis before making a purchasing or formulation decision.',
            ],
          },
          {
            heading: 'Intellectual property',
            body: [
              'All content on this site — text, images, product data, logos and the GreenChem Global name and marks — is owned by or licensed to GreenChem Global Exports LLP. You may view and print pages for your own internal business use. You may not reproduce, republish, or commercially exploit any part of this site without our prior written permission.',
            ],
          },
          {
            heading: 'Third-party links',
            body: [
              'Where we link to external websites, we do so for convenience only. We have no control over, and accept no responsibility for, the content or practices of those sites.',
            ],
          },
          {
            heading: 'Limitation of liability',
            body: [
              'To the maximum extent permitted by law, GreenChem Global Exports LLP shall not be liable for any indirect, incidental or consequential loss arising from use of, or reliance on, this website or its content. Nothing in these terms excludes liability that cannot lawfully be excluded.',
            ],
          },
          {
            heading: 'Governing law and jurisdiction',
            body: [
              'These terms are governed by the laws of India. The courts at Bharuch, Gujarat shall have exclusive jurisdiction over any dispute arising in connection with this website.',
            ],
          },
          {
            heading: 'Contact',
            body: [
              'GreenChem Global Exports LLP · BN-105 (Phase-2), Vivanta The Grandeur, Shravan Chockdi, Bharuch, Gujarat – 392001, India · info@greenchemglobal.com · +91 92747 10944',
            ],
          },
        ]}
      />
      <Footer />
    </main>
  )
}
