export const DIZAINS = [
  'moderna',
  'klasiska',
  'minimalistiska',
  'skandinavu',
  'ar-salu',
] as const

export const KRASAS = [
  'gaisa',
  'balta',
  'tumsa',
  'mateta',
  'glanceta',
] as const

export const MATERIALI = [
  'mdf',
  'laminats',
  'koks',
  'akrils',
] as const

export const TELPAS = [
  '602-serija',
  '464-serija-lietuviesu-projekts',
  '316-serija-hruscovka',
  '467-serija-brezneva-projekts',
  '119-serija-jaunais-projekts',
  'cehu-projekts',
  'jaunbuve',
  'privatmaja',
  'atvertais-planojums',
  'studijas-dzivoklis',
  '103-serija',
] as const

export const PILSETAS = [
  'riga',
  'jurmala',
  'daugavpils',
  'jelgava',
  'jekabpils',
  'valmiera',
  'ventspils',
  'liepaja',
  'rezekne',
  'ogre',
] as const

export const CENAS: Record<typeof MATERIALI[number], string> = {
  mdf: '2 800',
  laminats: '2 400',
  koks: '4 500',
  akrils: '3 200',
}

export const TELPAS_PLATIBA: Record<typeof TELPAS[number], string> = {
  '602-serija': '7–9 m²',
  '464-serija-lietuviesu-projekts': '8–10 m²',
  '316-serija-hruscovka': '5–6 m²',
  '467-serija-brezneva-projekts': '8–11 m²',
  '119-serija-jaunais-projekts': '9–12 m²',
  'cehu-projekts': '9–12 m²',
  'jaunbuve': '10–20 m²',
  'privatmaja': '12–30 m²',
  'atvertais-planojums': '15–40 m²',
  'studijas-dzivoklis': '5–8 m²',
  '103-serija': '7–9 m²',
}

export const RAZOSANAS_LAIKS: Record<typeof TELPAS[number], string> = {
  '602-serija': '4–6 nedēļas',
  '464-serija-lietuviesu-projekts': '4–6 nedēļas',
  '316-serija-hruscovka': '3–5 nedēļas',
  '467-serija-brezneva-projekts': '4–6 nedēļas',
  '119-serija-jaunais-projekts': '5–7 nedēļas',
  'cehu-projekts': '5–7 nedēļas',
  'jaunbuve': '6–8 nedēļas',
  'privatmaja': '6–10 nedēļas',
  'atvertais-planojums': '6–8 nedēļas',
  'studijas-dzivoklis': '3–5 nedēļas',
  '103-serija': '4–6 nedēļas',
}

export const MATERIALU_APRAKSTI: Record<typeof MATERIALI[number], {
  nosaukums: string
  ievads: string
  cenaKvalitate: string
  izturibа: string
  apstrade: string
  kapecIzvelеties: string
  razotajs: string
}> = {
  mdf: {
    nosaukums: 'MDF (EGGER)',
    ievads: 'MDF ir populārs un praktisks materiāls mēbeļu un interjera izgatavošanai, ko klienti novērtē ikdienas projektos. Tas piedāvā labu cenas/kvalitātes attiecību un vieglu apstrādi.',
    cenaKvalitate: 'MDF ir ievērojami lētāks nekā masīvkoks, taču nodrošina gludu virsmu un stabilu izskatu. Tas ļauj sasniegt premium efektu par zemāku cenu — ideāli bespoke virtuvēm ar individuālu dizainu.',
    izturibа: 'MDF ir viendabīgs un izturīgs pret deformācijām ar labu lieces un stiepes izturību. Mēs izmantojam EGGER mitrumizturīgās plātnes (16–19 mm), kas ir īpaši piemērotas virtuvēm un nodrošina augstu pretestību mitrumam un sēnītēm.',
    apstrade: 'EGGER MDF virsma ir gluda un ideāli piemērota krāsošanai — matēta, pulēta vai ar poliuretāna krāsām, plaša krāsu gamma. To viegli griezt, frēzēt un laminēt, nodrošinot precīzu apstrādi sarežģītiem dizainiem un dziļfrēzētām fasādēm.',
    kapecIzvelеties: 'Mēs izmantojam tikai EGGER MDF plātnes — Latvijā atzītu ražotāju ar stabilu kvalitāti un plašu sortimentu. EGGER kalibrētās plātnes 16–19 mm biezumā ir standarts profesionāliem mēbeļu ražotājiem, nodrošinot precizitāti un ilgmūžību.',
    razotajs: 'EGGER',
  },
  laminats: {
    nosaukums: 'Lamināts',
    ievads: '',
    cenaKvalitate: '',
    izturibа: '',
    apstrade: '',
    kapecIzvelеties: '',
    razotajs: '',
  },
  koks: {
    nosaukums: 'Masīvkoks',
    ievads: '',
    cenaKvalitate: '',
    izturibа: '',
    apstrade: '',
    kapecIzvelеties: '',
    razotajs: '',
  },
  akrils: {
    nosaukums: 'Akrils',
    ievads: '',
    cenaKvalitate: '',
    izturibа: '',
    apstrade: '',
    kapecIzvelеties: '',
    razotajs: '',
  },
}

export type Dizains = typeof DIZAINS[number]
export type Krasas = typeof KRASAS[number]
export type Materialas = typeof MATERIALI[number]
export type Telpa = typeof TELPAS[number]
export type Pilseta = typeof PILSETAS[number]
