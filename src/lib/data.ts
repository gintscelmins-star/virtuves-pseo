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
    ievads: 'MDF ir populārs un praktisks materiāls mēbeļu un interjera izgatavošanai, ko klienti novērtē ikdienas projektos. Tas piedāvā labu cenas/kvalitātes attiecību un vieglu apstrādi.',
    cenaKvalitate: 'MDF ir ievērojami lētāks nekā masīvkoks, taču nodrošina gludu virsmu un stabilu izskatu. Tas ļauj sasniegt premium efektu par zemāku cenu — ideāli bespoke virtuvēm ar individuālu dizainu.',
    izturiba: 'MDF ir viendabīgs un izturīgs pret deformācijām ar labu lieces un stiepes izturību. Mēs izmantojam EGGER mitrumizturīgās plātnes (16–19 mm), kas īpaši piemerotas virtuvēm un nodrošina augstu pretestību mitrumam.',
    apstrade: 'EGGER MDF virsma ir gluda un ideāli piemērota krāsošanai — matēta, pulēta vai ar poliuretāna krāsām. To viegli griezt, frēzēt un laminēt, nodrošinot precīzu apstrādi sarežģītiem dizainiem un dziļfrēzētām fasādēm.',
    kapecIzvelaties: 'Mēs izmantojam tikai EGGER MDF plātnes — Latvijā atzītu ražotāju ar stabilu kvalitāti. EGGER kalibrētās plātnes 16–19 mm biezumā ir standarts profesionāliem mēbeļu ražotājiem, nodrošinot precizitāti un ilgmūžību.',
    razotajs: 'EGGER',
  },
  laminats: {
    nosaukums: 'Lamināts (EGGER)',
    ievads: 'Latvijā iebūvejamām virtuvēm klienti bieižāk izvēlas laminātu kā praktisku un ekonomisku risinājumu ar plašu dizainu klāstu. EGGER lamināts piedāvā izcilu cenas/kvalitātes attiecību ikdienas virtuvēm.',
    cenaKvalitate: 'EGGER lamināts piedāvā izcilu attiecību — augsta izturība pret skrāpējumiem un mitrumu par zemāku cenu, ideāli praktiskām virtuvēm ar ikdienas slodzi. Salīdzinājumā ar akrilu vai koku tas ir visekonomiskākais variants bez kompromisiem izskatā.',
    izturiba: 'EGGER lamināts ir ļoti izturīgs pret UV, mitrumu un baktērijām, ar augstu pretestību skrāpējumiem — ideāls ģimenei ar bērniem. Tas saglabā izskatu gadiem ilgi bez spēcīgām uzturēšanas prasibām.',
    apstrade: 'EGGER lamināts jau nāk gatavs ar plašu dizainu klāstu — koka, akmens un krāsainas imitācijas. Ātrā uzstādīšana un viegla tīrīšana padara to par vienu no popuļārākajiem variantiem Latvijā.',
    kapecIzvelaties: 'Lamināts EGGER ir praktisks ikdienas varonis — lēts, daudz,vēdīgs dizāins, izturīgs, ātri uzstādāms bez kompromisiem kvalitātē. Optimāla izvēle, ja vēlies mūsdīgīu izskatu ar saprātīgu budžetu.',
    razotajs: 'EGGER',
  },
  koks: {
    nosaukums: 'Masīvkoks',
    ievads: 'Dabīgais koks ir premium izvēle klientiem, kas vēlas ilgstošu skaistumu, siltumu un ekolojičumu savai virtuvē. Tas ir dargākais variants, taču ilgtermīņā atmaksājas ar īstu kvalitāti un unikālu izskatu.',
    cenaKvalitate: 'Dabīgais koks maksā visvairāk, taču ilgtermīņā atmaksājas — pareizi koptā koka virtuve kalpo 20–30 gadus un kļūst tikai skaistāka. Tā ir investicīja interjera vērtībā, nevis tikai izmaksas.',
    izturiba: 'Dabisks koks ({īpaši termiski apstrādāts) iztur mitrumu, temperatūru un bojājumus labak par citām alternatīvām. Pareiza lakošana vai eelļošana nodrošina ilgstošu izturību pat virtuves mitrās zonās.',
    apstrade: 'Koku var lakot, eļoţ, krāsot vai atstāt dabīgā izskistā — katra virtuve ir unikāla. Dabiskā koka tekstura piešk,ir iestīpamī patiesu siltumu un mājīgūmu, ko nev ar vāciens aizstāt ar imitāciju.',
    kapecIzvelaties: 'Dabisks koks ir ideāls, ja vēlies mājīgu, unikālu un ekolojiču virtuvi ar ilgstošu vērtību. Tā ir izvēle tiem, kas vērtē autentiskumu un gatavi investēt kvalitātē.',
    razotajs: 'Latvijas un Eiropas koka piegādātāji',
  },
  akrils: {
    nosaukums: 'Akrils',
    ievads: 'Akrils ir premium materiāls modernai virtuvē ar wow-efektu — dziļs spiīdums vai mats, antibakterīāls, viegli tīrāms. Ideāls klientiem, kas vēlas sofistikētu, c Contemporāras dizaina virtuvi.',
    cenaKvalitate: 'Akrils ir apmēram 2x dārgāks nekā MDF, taču sniedz premium spiīdumu un ārkārtīgu estētiku, ko nevar sasīegt ar citu materiālu. Investicīja, kas izceļ virtuvi un paaugstina mājokļa vērtību.',
    izturiba: 'Akrils ir ļoti izturīgs pret UV, mitrumu un baktērijām — higiēniskākais variants virtuvei. Netaisa baktēriju un netīrumu uzkrāšanos, viegli tīrāms ar miūkstu drānu.',
    apstrade: 'Akrils ir pieejams divās versijās — spīdīgais un matētais — ar plašu krāsu gammu. Tas ir uzļikts uz MDF bāzes, nodrošinot stabilu formu un precīzu iestādīšanu. Ātra tīrīšana un ilgstošs spiīdums.',
    kapecIzvelaties: 'Akrils ir ideāls modernai virtuvēi ar wow-efektu — viegli tīrāms, antibakterīāls un mūsdīgī. Izvēlaties akrilu, ja vēlaties virtuvi, kas izceļas un radīs iespaidu uz kat ru, kurš to ierārda.',
    razotajs: 'Eiropas akrila piegādātāji',
  },
}

export type Dizains = typeof DIZAINS[number]
export type Krasas = typeof KRASAS[number]
export type Materialas = typeof MATERIALI[number]
export type Telpa = typeof TELPAS[number]
export type Pilseta = typeof PILSETAS[number]
