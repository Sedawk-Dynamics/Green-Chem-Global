import ProductDetailPage from '@/components/product-detail-page'

const product = {
  id: 'hco',
  name: 'Hydrogenated Castor Oil',
  subtitle: 'HCO / Castor Wax',
  tag: 'High Demand',
  tagColor: 'var(--brand-green-deep)',
  tagText: '#fff',
  image: '/images/HCO.webp',
  casNumber: '8001-78-3',
  ecNumber: '232-292-2',
  hsnNumber: '15162039',
  description:
    'Hydrogenated Castor Oil is a wax-like compound obtained by controlled hydrogenation of refined Castor Oil. It is a hard, brittle, high melting point product that is practically odorless and tasteless, supplied in the form of flakes. The color is cream to white. HCO exhibits superior lubricating and thickening properties with excellent chemical stability.',
  specifications: [
    { parameter: 'Appearance', value: 'Milky White Flakes' },
    { parameter: 'Molecular Weight', value: '938' },
    { parameter: 'Specific Gravity (25/25°C)', value: '1.0 ± 0.03' },
    { parameter: 'Flash Point', value: '315°C (COC)' },
    { parameter: 'Fire Point', value: '335°C (COC)' },
    { parameter: 'Ash Content', value: '0.005% Max' },
    { parameter: 'Acid Value', value: '3.00 Max' },
    { parameter: 'Hydroxyl Value', value: '155.00 Min' },
    { parameter: 'Iodine Value', value: '3.00 Max' },
    { parameter: 'Saponification Value', value: '175.00 Min' },
    { parameter: 'Color Gardner', value: '3.00 Max' },
    { parameter: 'Melting Point', value: '83°C – 89°C' },
  ],
  glcComposition: [
    { component: 'Palmitic Acid (16:0)', value: '1–1.5%' },
    { component: 'Stearic Acid (18:0)', value: '8–11%' },
    { component: 'Oleic Acid (18:1)', value: '0.2–0.6%' },
    { component: 'Arachidic Acid', value: '0.20% Max' },
    { component: '12-Keto Stearic Acid', value: '2% Max' },
    { component: '12-Hydroxy Stearic Acid', value: '84–87%' },
  ],
  applications: [
    'Manufacture of multipurpose Lithium, Calcium and high-performance aviation greases',
    'Manufacture of soaps and cosmetics',
    'Mould release agent in processing of plastics and rubber compounds',
    'Component of specialty wax blends for pencils, crayons, lipsticks and deodorant sticks',
    'Manufacture of hot-melt coatings and sealants with excellent water resistance',
    'Coating agent for paper and anti-foaming agent',
    'Manufacture of automotive refinish acrylic coatings',
    'Rheology modifier (thixotropic agent) in paints, coatings, inks, adhesives and sealants',
    'Chlorinated rubber, epoxy and vinyl coatings to improve rheological properties',
    'Manufacture of spin finish oils for polyamide (nylon) fiber',
    'Plasticizer for cellulosic materials',
    'Processing aid for colour concentrates (masterbatches)',
    'Surface treatment agent',
    'Manufacture of hot-melt adhesives for packaging, bookbinding, footwear, carpet backing',
    'Anti-tack and slip additive in plastic processing',
    'Manufacture of specialty chemicals: esters, ethoxylates, sulfates and other derivatives',
  ],
  packaging: [
    '25 kg reinforced paper bags',
    'Jumbo bags of 500 kg',
    'Jumbo bags of 1000 kg',
    'Custom packaging as per customer requirement',
    'Available in Flakes and Powder Form',
  ],
  keyProperties: [
    'Hard, brittle wax with high melting point (83–89°C)',
    'Practically odorless and tasteless',
    'Excellent chemical stability',
    'Superior lubricating and thickening properties',
    'High water resistance',
    'Good compatibility with numerous formulations',
  ],
  industries: [
    'Lubricants & Greases',
    'Cosmetics & Personal Care',
    'Plastics & Rubber',
    'Adhesives & Sealants',
    'Coatings & Inks',
    'Textile Auxiliaries',
    'Hot-Melt Applications',
    'Paper Coatings',
  ],
}

export const metadata = {
  title: 'Hydrogenated Castor Oil (HCO) | GreenChem Global',
  description:
    'High-purity Hydrogenated Castor Oil (HCO / Castor Wax) — CAS 8001-78-3. Hard white flakes for greases, lubricants, coatings, adhesives, and specialty chemicals. Globally exported.',
}

export default function HCOPage() {
  return <ProductDetailPage product={product} />
}
