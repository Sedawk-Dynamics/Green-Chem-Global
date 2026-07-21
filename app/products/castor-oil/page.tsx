import ProductDetailPage from '@/components/product-detail-page'

const product = {
  id: 'castor-oil',
  name: 'Castor Oil',
  subtitle: 'First Special Grade (FSG)',
  tag: 'Flagship Product',
  tagColor: 'var(--brand-gold)',
  tagText: '#1a2b1f',
  image: '/castor.png',
  casNumber: '8001-79-4',
  ecNumber: '232-293-8',
  hsnNumber: '15153090',
  description:
    'Castor Oil FSG is a pale, yellow viscous liquid free from suspended matter and insoluble in water. It is a First Special Grade (FSG) renewable vegetable oil derived from castor seeds (Ricinus communis). Known for its high viscosity, excellent lubricity, and unique hydroxyl fatty acid structure, it serves as the starting material for most castor oil derivatives.',
  specifications: [
    { parameter: 'Appearance', value: 'Pale Yellow Viscous Liquid' },
    { parameter: 'Viscosity Gardner at 25°C', value: 'U – V' },
    { parameter: 'Moisture, Impurities & Volatile Matter', value: '0.25% Max' },
    { parameter: 'Acid Value', value: '2.00 Max' },
    { parameter: 'Hydroxyl Value', value: '161–169' },
    { parameter: 'Iodine Value', value: '82–90' },
    { parameter: 'Saponification Value', value: '177–185' },
    { parameter: 'Unsaponifiable Matter', value: '1.00% Max' },
    { parameter: 'Acetyl Value', value: '140 Min' },
    { parameter: 'Free Fatty Acid as Oleic Acid', value: '1% Max' },
    { parameter: 'Refractive Index @ 25°C', value: '1.477–1.481' },
    { parameter: 'Relative Density @ 20°C', value: '0.954–0.960' },
    { parameter: 'Optical Rotation', value: '+3.5 to +6.0 Deg' },
    { parameter: 'Color in 5¼" Lovibond Cell Tintometer', value: '20-Y 2-R Max' },
    { parameter: 'Gardner Color @ 25°C', value: '3 Max' },
  ],
  applications: [
    'Manufacture of polyurethane resins, elastomers and casting compounds',
    'Manufacture of alkyd resins, coatings, varnishes and printing inks',
    'Raw material for sebacic acid, 12-HSA, HCO, Undecylenic Acid and other derivatives',
    'Manufacture of lubricants, specialty greases and metalworking fluids',
    'Hydraulic fluids for automobiles, trucks and industrial machinery',
    'Petroleum oil-field de-emulsifiers',
    'Dielectric fluid for electrical capacitors and condensers',
    'Specialty fluid for sonar transducers',
    'Textile auxiliaries, leather chemicals and rubber processing',
    'Adhesives, sealants and polymer formulations',
    'Renewable bio-based raw material for specialty chemicals',
  ],
  grades: [
    { grade: 'Castor Oil FSG Grade', industries: 'Lubricants, Greases, Polyurethane, Coatings, Electrical, Oilfield Chemicals, Textile, Rubber, Polymers' },
    { grade: 'Castor Oil USP/IP/BP Grade', industries: 'Pharmaceutical, Nutraceutical, Veterinary, Healthcare' },
    { grade: 'Castor Oil Cosmetic Grade', industries: 'Personal Care, Skin Care, Hair Care, Soaps, Cosmetics' },
  ],
  packaging: [
    '200 kg Net MS Drum — 16.0 MT Loose/Palletized/20\' CTR',
    '225 kg Net MS Drum — 18.0 MT Loose/Palletized/20\' CTR',
    '20\' ISO Container — 21.5 MT (±5%)',
    '20\' Flexi Bag — 21.5 MT (±5%)',
  ],
  keyProperties: [
    'High viscosity and excellent lubricity',
    'Unique hydroxyl fatty acid (ricinoleic acid) structure',
    'Renewable and bio-based origin',
    'Excellent chemical stability',
    'Versatile starting material for derivatives',
  ],
  industries: [
    'Lubricants & Greases',
    'Polyurethane & Polymers',
    'Coatings & Inks',
    'Oilfield Chemicals',
    'Electrical & Electronics',
    'Textile & Leather',
    'Adhesives & Sealants',
    'Rubber Processing',
  ],
}

export const metadata = {
  title: 'Castor Oil FSG | GreenChem Global',
  description:
    'Castor Oil First Special Grade (FSG) — CAS 8001-79-4. Renewable vegetable oil for lubricants, polyurethane, coatings, and specialty chemicals. Exported globally.',
  alternates: { canonical: '/products/castor-oil' },
}

export default function CastorOilPage() {
  return <ProductDetailPage product={product} />
}
