import { MetadataRoute } from 'next'
import { DIZAINS, MATERIALI, TELPAS, PILSETAS } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = 'https://pseo.iebuvejamasvirtuves.lv'
  const lastModified = new Date('2026-04-10')
  
  const urls: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ]

  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      for (const telpa of TELPAS) {
        for (const pilseta of PILSETAS) {
          urls.push({
            url: `${BASE}/virtuves/${dizains}/${materials}/${telpa}/${pilseta}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
          })
        }
      }
    }
  }

  return urls
}
