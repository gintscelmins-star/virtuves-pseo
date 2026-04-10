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
  izturiba: string
  apstrade: string
  kapecIzvelaties: string
  razotajs: string
}> = {
  mdf: {
    nosaukums: 'MDF (EGGER)',
    ievads: 'MDF ir populārs un praktisks materiāls mēbeļu un interjera izgatavošanai, ko klienti augstu novērtē ikdienas projektu izpildē. Tas piedāvā labu cenas un kvalitātes attīecību, kā arī vieglu apstrādi.',
    cenaKvalitate: 'MDF ir ievērojami lētāks nekā masīvkoks, taču nodrošina gludu virsmu un stabilām izskatu. Tas ļauj sasniegt augstāka līmeņa efektu par zemāku cenu — ideāli pilnīgi individuālām virtuvēm ar savdabīgu dizāinu.',
    izturiba: 'MDF ir viendabīgs un izturīgs pret deformācijām ar labu lieces un stiepes izturību. Mēs izmantojam EGGER mitrumizturīgās plātnes 16 līdz 19 milimetru biezumā, kas ir īpaši piemērotas virtuvēm un nodrošina augstu pretestību mitrumam.',
    apstrade: 'EGGER MDF virsma ir gluda un ideāli piemērota krāsošanai — matēta, pulēta vai ar poliurētāna krāsām. To viegli griezt, frēzēt un laminēt, nodrošinot precīzu apstrādi sarežģītākiem dizāiniem un dziļfrēzētām fasādēm.',
    kapecIzvelaties: 'Mēs izmantojam tikai EGGER MDF plātnes — Latvijā atzīta ražotāja produktu ar stabilām kvalitāti. EGGER kaliibrētās plātnes 16 līdz 19 milimetru biezumā ir profesionālu mēbeļu ražotāju standarts, kas nodrošina precizitāti un ilgmūžību.',
    razotajs: 'EGGER',
  },
  laminats: {
    nosaukums: 'Lamināts (EGGER)',
    ievads: 'Lamināts ir viens no visšķirasāk izvēlētajiem materiāliem iebūvējamām virtuvēm Latvijā — praktisks, ekonomisks risinājums ar plašu dizāinu klāstu. EGGER lamināts piedāvā izcilas cenas un kvalitātes attīecību ikdienas virtuvēm.',
    cenaKvalitate: 'EGGER lamināts piedāvā augstu izturību pret skrāpējumiem un mitrumu par zemāku cenu — salīdzinājumā ar akrilu tas ir par aptuveni 25 procentiem lētāks, salīdzinājumā ar masīvkoku — par aptuveni 45 procentiem lētāks. Ideāls praktiskām virtuvēm ar ikdienas lielu slodzi.',
    izturiba: 'EGGER lamināts ir ļoti izturīgs pret ultravioleto starojumu, mitrumu un baktērijām, ar augstu pretestību skrāpējumiem — ideāls ģimenēm ar bērniem. Tas saglabā izskatu gadiem ilgi bez sarežģītām uzturēšanas prasībām.',
    apstrade: 'EGGER lamināts ir pieejams ar plašu dizāinu klāstu — koka, ak mens un krāsainasimitācijas. Ātra uzstādīšana un viegla tīrīšana padara to par vienu no populārākajiem variantiem Latvijā.',
    kapecIzvelaties: 'EGGER lamināts ir praktiska un ekonomiska ikdienas izvēle — daudzveidīgs dizāins, augsta izturība un ātra uzstādīšana bez kompromisiem kvalitātē. Optimāla izvēle, ja vēlies mūsdienīgu izskatu ar saprātīgu budžetu.',
    razotajs: 'EGGER',
  },
  koks: {
    nosaukums: 'Masīvkoks',
    ievads: 'Dabīgais koks ir augstāka līmeņa izvēle klientiem, kas vēlas ilgstošu skaistumu, siltumu un ekoloģisku pieeju savai virtuvei. Salīdzinājumā ar MDF vai laminātu tas ir dārgākais variants, taču ilgtermiņā atmaksājas ar īstu kvalitāti un unikālu izskatu.',
    cenaKvalitate: 'Dabīgais koks maksā visvairāk — salīdzinājumā ar MDF tas ir aptuveni par 60 procentiem dārgāks, taču pareizi koptā koka virtuve kalpo 20 līdz 30 gadus un kļuust tikai skaistāks. Tā ir investīcija interjera vērtībā, nevis vienkārši izmaksas.',
    izturiba: 'Dabīgais koks, it īpšī termiski apstrādāts, labi iztur mitrumu, temperatūras svārstības un mehāniskus bojājumus. Pareiza lakošana vai eļļošana nodrošina ilgstošu izturību pat virtuves mitrās zonās.',
    apstrade: 'Koku var lakot, eļļot, krāsot vai atsegt tā dabīgajā izskattā — katra virtuve ir unikāla. Dabīgajā koka tekstūra piešķir īstu siltumu un mājīgumu, ko nav iespējams imitēt ar sintētiskiem materiāliem.',
    kapecIzvelaties: 'Dabīgais koks ir ideāls, ja vēlies mājīgu, unikālu un ekoloģisku virtuvi ar ilgstošu vērtību. Tā ir izvēle tiem, kas augstu vērtē autentiskumu un ir gatavi ieguldtī kvalitātē.',
    razotajs: 'Latvijas un Eiropas koka piegādātāji',
  },
  akrils: {
    nosaukums: 'Akrils',
    ievads: 'Akrils ir augstāka līmeņa materiāls modernai virtuvei ar iespaidīgu efektu — dziļs spīdums vai matējums, antibakteriāls un viegli tīrāms. Ideāls klientiem, kas vēlas izsmalinātu, mūsdienīgu dizāina virtuvi.',
    cenaKvalitate: 'Akrils ir aptuveni divas reizes dārgāks nekā MDF, taču snēdz nes alīdzināmi dziļāku spīdumu un ārkartēju estētiku. Tā ir investīcija, kas izceļ virtuvi un paugstina mājokļa vērtību.',
    izturiba: 'Akrils ir ļoti izturīgs pret ultravioleto starojumu, mitrumu un baktērijām — higiēniskākais variants virtuvei. Tas nepieļauj baktēriju un netīrojās uzkrāšanos un ir viegli tīrāms ar mīkstu drānu.',
    apstrade: 'Akrils ir pieejams divās versijās — spīdais un matētais — ar plašu krāsu gammu. Tas ir uzklats uz MDF bāzes, nodrošinot stabilām formu un precīzu uzstādīšanu. Ātra tīrīšana un ilgstošs spīdums saglabājas gadiem.',
    kapecIzvelaties: 'Akrils ir ideāls modernai virtuvei ar iespaidīgu efektu — viegli tīrāms, antibakteriāls un mūsdienīgs. Izvēlieties akrilu, ja vēlaties virtuvi, kas izceļas un atstāj iespaidu uz ikvienu, kurš to ieraudzīs.',
    razotajs: 'Eiropas akrila piegādātāji',
  },
}

export type Dizains = typeof DIZAINS[number]
export type Krasas = typeof KRASAS[number]
export type Materialas = typeof MATERIALI[number]
export type Telpa = typeof TELPAS[number]
export type Pilseta = typeof PILSETAS[number]
