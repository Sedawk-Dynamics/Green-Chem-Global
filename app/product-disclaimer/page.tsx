import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Product Disclaimer | GreenChem Global',
  description:
    'Disclaimer covering product specifications, regulatory approvals, suitability and safe handling of castor oil and bio-based chemicals supplied by GreenChem Global Exports LLP.',
  alternates: { canonical: '/product-disclaimer' },
}

export default function ProductDisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LegalPage
        title="Product Disclaimer"
        updated="Last updated: 21 July 2026"
        intro="GreenChem Global Exports LLP is a merchant exporter. We source castor oil and castor-oil derivatives from qualified manufacturers in Gujarat, India, and supply them to industrial customers worldwide. The following applies to all product information published on this website."
        sections={[
          {
            heading: 'Typical, not guaranteed, specifications',
            body: [
              'All specifications, compositions, efficacy figures and physical properties shown on this website are typical values taken from manufacturer documentation. They are indicative only and do not constitute a specification guarantee. The binding specification for any consignment is the one agreed in writing in the relevant contract, and the actual values are those stated on the manufacturer’s batch Certificate of Analysis (COA) accompanying that shipment.',
            ],
          },
          {
            heading: 'Grade and intended use',
            body: [
              'Unless expressly stated otherwise in a written quotation or contract, products offered on this website are supplied as industrial grade. They are not offered as pharmaceutical, food-contact, cosmetic or feed grade, and are not represented as complying with any pharmacopoeial monograph.',
            ],
          },
          {
            heading: 'Regulatory approvals',
            body: [
              'Applications listed on this website describe uses to which these chemistries are commonly put in industry. They are not a representation that the product as supplied is approved, registered or permitted for that use in your jurisdiction. Any application that is regulated — including food-contact coatings, pharmaceutical, cosmetic, veterinary, agricultural or biocidal uses — is subject to applicable regulatory approvals, which the buyer is responsible for obtaining.',
            ],
          },
          {
            heading: 'Suitability is the buyer’s responsibility',
            body: [
              'Because we cannot control the conditions of storage, handling, formulation or end use, the buyer is solely responsible for determining that the product is suitable, safe and lawful for its intended purpose. We recommend that the buyer carries out its own qualification testing before commercial use. No warranty of merchantability or fitness for a particular purpose is given or implied.',
            ],
          },
          {
            heading: 'Safety and handling',
            body: [
              'Always read the current Safety Data Sheet (SDS) before handling any product. Observe the recommended storage, handling and personal protective equipment requirements. SDS and TDS documents are available on request — contact us with your product and grade.',
            ],
          },
          {
            heading: 'Quality documentation',
            body: [
              'Each shipment is supported by the manufacturer’s batch COA. Independent third-party testing can be arranged when required and agreed in advance. Export documentation — commercial invoice, packing list, Certificate of Origin, COA, SDS and other product- or market-specific documents — is provided as applicable to the transaction.',
            ],
          },
          {
            heading: 'Contact',
            body: [
              'Questions about product suitability, documentation or regulatory status: info@greenchemglobal.com · +91 92747 10944.',
            ],
          },
        ]}
      />
      <Footer />
    </main>
  )
}
