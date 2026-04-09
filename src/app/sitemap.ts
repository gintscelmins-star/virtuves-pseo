import { MetadataRoute } from 'next'
import { DIZAINS, MATERIALI, TELPAS, PILSETAS } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = 'https://pseo.iebuvejamasvirtuves.lv'
  const urls: MetadataRoute.Sitemap = []

  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      for (const telpa of TELPAS) {
        for (const pilseta of PILSETAS) {
          urls.push({
            url: `${BASE}/virtuves/${dizains}/${materials}/${telpa}/${pilseta}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          })
        }
      }
    }
  }

  return urls
}
