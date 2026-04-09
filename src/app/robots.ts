import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*?sort=', '/*?filter=', '/*?page='],
    },
    sitemap: 'https://pseo.iebuvejamasvirtuves.lv/sitemap.xml',
  }
}
