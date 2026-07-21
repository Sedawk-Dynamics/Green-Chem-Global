import type { MetadataRoute } from 'next'

const BASE = 'https://greenchemglobal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-21')

  const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/products/castor-oil', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/hco', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/12hsa', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/undecylenic-acid', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-of-use', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/product-disclaimer', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
