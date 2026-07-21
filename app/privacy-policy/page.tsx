import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import LegalPage from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | GreenChem Global',
  description:
    'How GreenChem Global Exports LLP collects, uses, retains and protects personal information submitted through greenchemglobal.com, in line with India’s DPDP Act, 2023.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LegalPage
        title="Privacy Policy"
        updated="Last updated: 21 July 2026"
        intro="GreenChem Global Exports LLP (“GreenChem Global”, “we”, “us”) respects your privacy. This notice explains what personal information we collect through greenchemglobal.com, why we collect it, how long we keep it, and the choices available to you under the Digital Personal Data Protection Act, 2023 (DPDP Act) and the rules made under it."
        sections={[
          {
            heading: 'Who we are',
            body: [
              'GREENCHEM GLOBAL EXPORTS LLP, a limited liability partnership registered in India (LLPIN: ACV-6386), with its registered office at BN-105 (Phase-2), Vivanta The Grandeur, Shravan Chockdi, Bharuch, Gujarat – 392001, India, is the Data Fiduciary responsible for the personal data described in this notice.',
            ],
          },
          {
            heading: 'What we collect',
            list: [
              'Information you submit through our enquiry form: name, company name, email address, phone/WhatsApp number, product of interest, estimated quantity and the contents of your message.',
              'Information you send us directly by email, telephone or WhatsApp.',
              'Basic technical and usage data generated when you visit the site (such as page views and aggregated analytics). We do not use this to identify you personally.',
            ],
          },
          {
            heading: 'Why we collect it (purpose)',
            list: [
              'To respond to your enquiry and provide pricing, product specifications, samples and availability.',
              'To carry out commercial correspondence, order processing and export documentation if you become a customer.',
              'To meet our legal, tax, customs and export record-keeping obligations in India.',
              'To maintain and improve the security and performance of this website.',
            ],
            body: [
              'We do not sell your personal data, and we do not share it with third parties for their own marketing purposes.',
            ],
          },
          {
            heading: 'Consent',
            body: [
              'We process the information you submit through the enquiry form on the basis of the consent you give when you tick the consent box on that form. You may withdraw your consent at any time by writing to info@greenchemglobal.com. Withdrawing consent does not affect processing carried out before the withdrawal, and we may still retain records we are required by law to keep.',
            ],
          },
          {
            heading: 'Who we share it with',
            list: [
              'Our manufacturing and supply partners, only where necessary to answer a technical or supply question you have raised.',
              'Logistics providers, customs brokers and banks, only where necessary to execute an order you have placed.',
              'Service providers who host this website and deliver our email, under confidentiality obligations.',
              'Government or regulatory authorities where disclosure is required by law.',
            ],
          },
          {
            heading: 'How long we keep it',
            body: [
              'Enquiries that do not result in a commercial relationship are retained for up to 24 months and then deleted. Where an enquiry leads to a transaction, records are retained for the period required under applicable Indian tax, company and export law, and deleted thereafter.',
            ],
          },
          {
            heading: 'Your rights',
            list: [
              'Access — request a summary of the personal data we hold about you and how it is processed.',
              'Correction — ask us to correct inaccurate or incomplete data.',
              'Erasure — ask us to delete your data where we are no longer required to retain it.',
              'Withdrawal of consent — withdraw consent for processing at any time.',
              'Grievance redressal — raise a complaint with us, and escalate to the Data Protection Board of India if unresolved.',
            ],
          },
          {
            heading: 'Security',
            body: [
              'Enquiry data is transmitted over an encrypted connection and delivered to a controlled company mailbox. Access is limited to personnel who need it to respond to you. No method of transmission over the internet is completely secure, but we take reasonable technical and organisational measures to protect your information.',
            ],
          },
          {
            heading: 'Contact and grievances',
            body: [
              'For any privacy question, data request or grievance, contact: GreenChem Global Exports LLP, BN-105 (Phase-2), Vivanta The Grandeur, Shravan Chockdi, Bharuch, Gujarat – 392001, India. Email: info@greenchemglobal.com. Phone: +91 92747 10944. We aim to acknowledge requests within 7 working days.',
            ],
          },
          {
            heading: 'Changes to this notice',
            body: [
              'We may update this notice from time to time. The version published on this page, with the date shown above, is the version in force.',
            ],
          },
        ]}
      />
      <Footer />
    </main>
  )
}
