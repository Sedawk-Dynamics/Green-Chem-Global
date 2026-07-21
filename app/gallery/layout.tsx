import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing Facility Gallery | GreenChem Global',
  description:
    'Photographs of the production infrastructure, laboratory facilities and quality control systems of the castor oil and derivative manufacturing partners of GreenChem Global Exports LLP.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
