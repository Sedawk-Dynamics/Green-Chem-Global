import ProductDetailPage from '@/components/product-detail-page'

const product = {
  id: '12hsa',
  name: '12-Hydroxy Stearic Acid',
  subtitle: '12-HSA',
  tag: 'Specialty Grade',
  tagColor: 'var(--brand-teal)',
  tagText: '#fff',
  image: '/hsa.png',
  casNumber: '106-14-9',
  ecNumber: '203-366-1',
  hsnNumber: '29157040',
  description:
    'A high-performance fatty acid derived from hydrogenated castor oil. 12-Hydroxy Stearic Acid (12-HSA) is widely used as a thickening agent and rheology modifier in lubricants, paints, coatings and rubber applications. It possesses excellent thermal stability and viscosity modification properties, making it a critical component in lithium and calcium grease manufacturing.',
  specifications: [
    { parameter: 'Acid Value (Fresh Sample)', value: '175 Min' },
    { parameter: 'Saponification Value', value: '175–185' },
    { parameter: 'Hydroxyl Value (Fresh Sample)', value: '155 Min' },
    { parameter: 'Iodine Value', value: '5 Max' },
    { parameter: 'Color Gardner', value: '4 Max' },
    { parameter: 'Specific Gravity @ 27°C', value: '0.935–0.945' },
    { parameter: 'Unsaponifiable Matter', value: '1% Max' },
    { parameter: 'Moisture', value: '0.10% Max' },
    { parameter: 'Melting Point', value: '72°C' },
  ],
  fattyAcidComposition: [
    { component: 'Palmitic Acid (16:0)', value: '1–4%' },
    { component: 'Stearic Acid (18:0)', value: '0–3%' },
    { component: 'Oleic Acid & Isomers (18:1)', value: '3–6%' },
    { component: 'Linoleic Acid (18:2)', value: '1–5%' },
  ],
  applications: [
    'Manufacture of multipurpose lithium, calcium, and lithium complex greases',
    'Manufacture of acrylic polymers and other specialty polymers',
    'Internal lubricant in processing and molding of plastics',
    'Aqueous and non-aqueous coating systems for automotive, industrial and architectural applications',
    'Shrink-resistant treatment for wool and textile finishing',
    'Coating formulations for interior of metal food and beverage containers (subject to applicable regulatory approvals)',
    'Activator and internal lubricant in natural and synthetic rubber compounds',
    'Rheology modifier (thixotropic agent) in inks, coatings and related formulations',
    'Manufacture of esters, ethoxylates, sulfates and specialty chemical derivatives for use in plasticizers, textiles, cosmetics, lubricants and metalworking fluids',
  ],
  packaging: [
    '25 kg bags',
    '50 kg bags',
    'Custom packaging as per customer requirement',
  ],
  keyProperties: [
    'Excellent thickening and rheology modification',
    'High thermal stability',
    'Good viscosity modification properties',
    'Effective gelling agent for oils and fats',
    'Derived from renewable castor oil feedstock',
    'Broad compatibility across formulations',
  ],
  industries: [
    'Lubricants & Greases',
    'Paints & Coatings',
    'Plastics & Rubber',
    'Textiles',
    'Cosmetics & Personal Care',
    'Inks & Adhesives',
    'Metalworking Fluids',
    'Food Packaging Coatings',
  ],
}

export const metadata = {
  title: '12-Hydroxy Stearic Acid (12-HSA) | GreenChem Global',
  description:
    '12-Hydroxy Stearic Acid (12-HSA) — CAS 106-14-9. High-purity fatty acid for lithium greases, coatings, rubber, and specialty chemicals. Supplied globally.',
  alternates: { canonical: '/products/12hsa' },
}

export default function HSAPage() {
  return <ProductDetailPage product={product} />
}
