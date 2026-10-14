import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://novi-llc.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://novi-llc.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://novi-llc.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://novi-llc.com/insights/how-i-fixed-23-percent-revenue-leak-shopify',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://novi-llc.com/insights/from-spam-to-inbox-72h',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://novi-llc.com/insights/shopify-seo-2026',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://novi-llc.com/insights/case-study-04',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
