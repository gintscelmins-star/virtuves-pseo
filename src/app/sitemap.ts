import { MetadataRoute } from 'next'
import { DIZAINS, MATERIALI, TELPAS, PILSETAS } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = 'https://pseo.iebuvejamasvirtuves.lv'
  const now = new Date()

  const urls: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // Dizains hub lapas — /virtuves/[dizains]/
  for (const dizains of DIZAINS) {
    urls.push({
      url: `${BASE}/virtuves/${dizains}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  }

  // Materiāls hub lapas — /virtuves/[dizains]/[materials]/
  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      urls.push({
        url: `${BASE}/virtuves/${dizains}/${materials}/`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
      })
    }
  }

  // Telpa hub lapas — /virtuves/[dizains]/[materials]/[telpa]/
  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      for (const telpa of TELPAS) {
        urls.push({
          url: `${BASE}/virtuves/${dizains}/${materials}/${telpa}/`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.82,
        })
      }
    }
  }

  // Galvenās PSEO lapas — /virtuves/[dizains]/[materials]/[telpa]/[pilseta]/
  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      for (const telpa of TELPAS) {
        for (const pilseta of PILSETAS) {
          urls.push({
            url: `${BASE}/virtuves/${dizains}/${materials}/${telpa}/${pilseta}/`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
          })
        }
      }
    }
  }

  return urls
}
