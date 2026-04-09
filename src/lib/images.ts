// Cloudinary foto — katrs URL pieder konkrētam dizainam/telpai
// Cloud: djz3nqaok

export const GALERIJA: Record<string, string[]> = {
  // 602 sērija
  '602-serija_skandinavu': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740566/602_serija_skandinavu_qcysa2.png',
  ],
  '602-serija_minimalistiska': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740566/602_serija_minimalsisms_cgvczq.png',
  ],

  // 316 sērija (hrušcovka)
  '316-serija-hruscovka_any': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740565/316_serija_bfwljl.png',
  ],

  // 119 sērija
  '119-serija-jaunais-projekts_minimalistiska': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740565/119_serija_minimalisms_xxxonw.png',
  ],

  // 104 sērija (mapēta uz 103)
  '103-serija_klasiska': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740564/104_serija_klasika_i0zhfr.png',
  ],
  '103-serija_minimalistiska': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740564/104_serija_minimalisms_odhafe.png',
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740563/103_serija_up8zdc.png',
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740439/103_serija_rpmn7u.png',
  ],

  // Jaunbūve
  'jaunbuve_minimalistiska': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740568/jaunbuve_atvertais_planojums_minimalisms_tto18d.png',
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740568/jaunais_projekts_tumsa_j0rs3l.png',
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740567/jaunais_projekts_minimalisms_mqeozz.png',
  ],

  // Privātmāja
  'privatmaja_moderna': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740571/privetmaja_moderns_xpvncv.png',
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740570/privatmaja_klasika_g4fv9o.png',
  ],
  'privatmaja_klasiska': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740571/privatmaja_klasika_q5knvb.png',
  ],
  'privatmaja_any': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740570/privatmaja_gaisa_gtgfzj.png',
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740570/maja_gaisa_vcvtsi.png',
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740567/house_m05ctn.png',
  ],

  // Skandināvu — vispārīgs
  'any_skandinavu': [
    'https://res.cloudinary.com/djz3nqaok/image/upload/v1775740572/skandinavu_moderns_sm1dt8.png',
  ],
}

/**
 * Atgriež foto sarakstu pēc dizaina un telpas.
 * Meklē: telpa_dizains → telpa_any → any_dizains → fallback visi
 */
export function getFoto(dizains: string, telpa: string): string[] {
  const key1 = `${telpa}_${dizains}`
  const key2 = `${telpa}_any`
  const key3 = `any_${dizains}`

  if (GALERIJA[key1]?.length) return GALERIJA[key1]
  if (GALERIJA[key2]?.length) return GALERIJA[key2]
  if (GALERIJA[key3]?.length) return GALERIJA[key3]

  // Fallback — pirmie 3 foto no jebkuras kategorijas
  const allFotos = Object.values(GALERIJA).flat()
  return allFotos.slice(0, 3)
}
