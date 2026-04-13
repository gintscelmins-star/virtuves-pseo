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

export const PILSETU_APRAKSTI: Record<typeof PILSETAS[number], {
  ievads: string
  pievedums: string
  montaza: string
  pakalpojumsVirsraksts: string
}> = {
  riga: {
    ievads: 'Rīgā strādājam visos mikrorajonos — no Pārdaugavas līdz Purvciemam. Dizainera vizīte pieejama nākamajā darba dienā.',
    pievedums: 'Piegāde un montāža Rīgā iekļauta cenā. Strādājam Vecrīgā, Ziepniekalnā, Imantā, Āgenskalnā un visos pārējos rajonos.',
    montaza: 'Rīgā mums ir savs montāžas komanda — uzstādīšana vienas dienas laikā lielākajai daļai projektu.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Rīgā',
  },
  jurmala: {
    ievads: 'Jūrmalā projektējam virtuves gan vasarnīcām, gan pastāvīgām mājām. Pieejama bezmaksas vizīte visā Jūrmalas teritorijā.',
    pievedums: 'Piegāde uz Jūrmalu iekļauta cenā — strādājam Majoros, Dzintaros, Bulduros un visos pārējos Jūrmalas rajonos.',
    montaza: 'Jūrmalā ņemam vērā augstāku mitruma līmeni — izvēlamies mitrumizturīgus materiālus un furnitūru.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Jūrmalā',
  },
  daugavpils: {
    ievads: 'Daugavpilī piedāvājam pilnu virtuvju izgatavošanas pakalpojumu — no dizaina līdz montāžai. Vizīte pieejama nākamajā darba dienā.',
    pievedums: 'Piegāde uz Daugavpili iekļauta cenā. Strādājam visā Daugavpils pilsētā un tuvākajā apkārtnē.',
    montaza: 'Daugavpilī mūsu montāžas komanda ierodas no Rīgas vai vietējā komanda — atkarībā no projekta grafika.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Daugavpilī',
  },
  jelgava: {
    ievads: 'Jelgavā piedāvājam ātru un ērti pieejamu virtuvju pasūtīšanas procesu — vizīte pieejama nākamajā darba dienā.',
    pievedums: 'Piegāde uz Jelgavu iekļauta cenā. Strādājam visā Jelgavas pilsētā un apkārtējos pagastos.',
    montaza: 'Jelgavas tuvums Rīgai nodrošina ātru montāžas komandas ierašanos — parasti 1–2 darba dienu laikā pēc ražošanas.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Jelgavā',
  },
  jekabpils: {
    ievads: 'Jēkabpilī un apkārtnē nodrošinām pilnu virtuvju izgatavošanu un uzstādīšanu. Bezmaksas vizīte pēc pieprasījuma.',
    pievedums: 'Piegāde uz Jēkabpili iekļauta cenā. Apkalpojam Jēkabpils pilsētu un Zemgales reģionu.',
    montaza: 'Jēkabpilī montāžas vizīte tiek saskaņota individuāli — parasti vienas nedēļas laikā pēc ražošanas pabeigšanas.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Jēkabpilī',
  },
  valmiera: {
    ievads: 'Valmierā un Vidzemes reģionā piedāvājam pilnu iebūvējamo virtuvju pakalpojumu. Dizainera vizīte pieejama nākamajā darba dienā.',
    pievedums: 'Piegāde uz Valmieru iekļauta cenā. Strādājam Valmierā un visā Vidzemes reģionā.',
    montaza: 'Valmierā uzstādīšanu veic mūsu sertificēta montāžas komanda — precīza darba izpilde un galīgā noregulēšana iekļauta cenā.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Valmierā',
  },
  ventspils: {
    ievads: 'Ventspilī un Kurzemes piekrastē projektējam mājīgas un funkcionālas virtuves. Bezmaksas dizainera vizīte pēc pieprasījuma.',
    pievedums: 'Piegāde uz Ventspili iekļauta cenā. Apkalpojam Ventspils pilsētu un Kurzemes piekrasti.',
    montaza: 'Ventspilī ņemam vērā jūras klimata īpatnības — izmantojam mitrumizturīgus materiālus un aizsargātu furnitūru.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Ventspilī',
  },
  liepaja: {
    ievads: 'Liepājā piedāvājam mūsdienīgas un klasiskās virtuves — no dizaina izstrādes līdz uzstādīšanai. Vizīte pieejama nākamajā darba dienā.',
    pievedums: 'Piegāde uz Liepāju iekļauta cenā. Strādājam Liepājas pilsētā un tuvākajā apkārtnē.',
    montaza: 'Liepājā piekrastes mitrums prasa īpašu uzmanību — izmantojam EGGER mitrumizturīgās plātnes un nerūsējošo furnitūru.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Liepājā',
  },
  rezekne: {
    ievads: 'Rēzeknē un Latgales reģionā nodrošinām pilnu virtuvju izgatavošanas pakalpojumu. Bezmaksas vizīte pēc pieprasījuma.',
    pievedums: 'Piegāde uz Rēzekni iekļauta cenā. Apkalpojam Rēzeknes pilsētu un Latgales reģionu.',
    montaza: 'Rēzeknē montāžas vizīte tiek saskaņota individuāli — parasti vienas nedēļas laikā pēc ražošanas pabeigšanas.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Rēzeknē',
  },
  ogre: {
    ievads: 'Ogrē un Ogres novadā piedāvājam ātru virtuvju pasūtīšanas procesu — Rīgas tuvums nodrošina ātru vizīti un montāžu.',
    pievedums: 'Piegāde uz Ogri iekļauta cenā. Strādājam Ogres pilsētā un novada pagastos.',
    montaza: 'Ogres tuvums Rīgai nodrošina ātru montāžas komandas ierašanos — parasti nākamajā darba dienā pēc piegādes.',
    pakalpojumsVirsraksts: 'Iebūvējamās virtuves Ogrē',
  },
}

export const TELPU_APRAKSTI: Record<typeof TELPAS[number], {
  ievads: string
  izaicinaums: string
  risinajums: string
  padomi: string
}> = {
  'jaunbuve': {
    ievads: 'Jaunbūves dzīvokļi piedāvā ideālu iespēju projektēt virtuvi no nulles — bez vecām caurulēm un nestandardizētām sienām. Tas ļauj pilnībā realizēt jūsu ieceri.',
    izaicinaums: 'Jaunbūvēs bieži vien virtuve ir atvērta dzīvojamai telpai, kas prasa rūpīgu plānojumu — gan estētiski, gan funkcionāli. Svarīgi pareizi izvietot tehniku un nodrošināt pietiekamu ventilāciju.',
    risinajums: 'Mēs strādājam ar jaunbūvju standartiem — zināms grīdas segums, taisnas sienas un standartizētas inženierkomunikāciju vietas. Tas nodrošina precīzāku montāžu un ātrāku uzstādīšanu.',
    padomi: 'Jaunbūvēs iesakām plānot virtuvi uzreiz ar iebūvējamo tehniku — cepeškrāsni, trauku mazgājamo un ledusskapi. Tādā veidā virtuves izskats paliek vienots un tīrs.',
  },
  'privatmaja': {
    ievads: 'Privātmājas virtuve bieži ir mājas sirds — liela, funkcionāla un reprezentatīva. Šeit ir iespēja realizēt lielākus projektus ar salu, bāra leti vai divpusēju izkārtojumu.',
    izaicinaums: 'Privātmājās katrs projekts ir unikāls — atšķirīgi augstumi, nestandardizētas telpas un dažādas inženierkomunikāciju vietas prasa individuālu pieeju katram projektam.',
    risinajums: 'Mūsu dizaineris veic detalizētus mērījumus un izveido trīsdimensiju vizualizāciju, kas ļauj redzēt gatavo rezultātu pirms ražošanas. Privātmājās bieži izmantojam L-veida vai U-veida izkārtojumu.',
    padomi: 'Privātmājās, kur virtuve ir atvērta ēdamistabai vai dzīvojamai telpai, iesakām izvēlēties vienotu krāsu paleti, kas harmonizē ar pārējo interjeru.',
  },
  '602-serija': {
    ievads: '602. sērijas dzīvokļi ir tipisks padomju laika standarts ar nelielu atsevišķu virtuvi 7–9 m² platībā. Šādās telpās svarīga ir katra centimetra izmantošana.',
    izaicinaums: '602. sērijas virtuvēm raksturīgas zemas griestas (2,5 m), nestandarta logu izvietojums un vecas inženierkomunikācijas. Tas prasa rūpīgu plānošanu.',
    risinajums: 'Šādām virtuvēm mēs projektējam kompaktus, bet funkcionālus risinājumus — izmantojam augstus skapjus līdz griestiem, iebūvējamo tehniku un gudrus uzglabāšanas risinājumus.',
    padomi: '602. sērijā iesakām gaišas krāsas fasādes un vertikālu izkārtojumu — tas optiskā ziņā palielina telpas augstumu un liek virtuvei izskatīties lielākai.',
  },
  '316-serija-hruscovka': {
    ievads: 'Hruščovkas ir viens no izaicinošākajiem projektiem — ļoti mazas virtuves (5–6 m²) ar zemām griestām un nelieliem logiem. Bet pareizs dizains dara brīnumus.',
    izaicinaums: 'Hruščovkas virtuvēs katrs centimetrs ir dārgs — tipiska platība ir tikai 5–6 m², bieži ar noapaļotiem stūriem un nelieliem logiem. Tehnikas ievietošana prasa radošu pieeju.',
    risinajums: 'Mēs izmantojam kompaktus risinājumus — iebūvējamu trauku mazgājamo zem izlietnes, šauras sekcijas un pakaramās sekcijas līdz griestiem. Katra niša tiek izmantota maksimāli.',
    padomi: 'Hruščovkās ļoti svarīga ir pareiza apgaismojuma izvēle — LED apgaismojums zem skapjiem un augšējos skapjos padara mazo virtuvi funkcionālu un patīkamu.',
  },
  '464-serija-lietuviesu-projekts': {
    ievads: '464. sērija jeb Lietuvisks projekts ir plaši izplatīts Latvijas pilsētās ar atsevišķu 8–10 m² virtuvi un labiem dabiskā gaismas apstākļiem.',
    izaicinaums: '464. sērijā virtuves plānojums ir ērts, taču vecās inženierkomunikācijas un nestandarta sienu biezums prasa precīzus mērījumus pirms ražošanas.',
    risinajums: 'Šai sērijai projektējam klasiskus L vai U veida virtuves ar optimālu darba virsmas garumu un plašu uzglabāšanas kapacitāti.',
    padomi: '464. sērijas virtuvēs iesakām saglabāt logu brīvu no augšskapjiem — tas uzlabo dabisko apgaismojumu un padara virtuvi vizuāli plašāku.',
  },
  '467-serija-brezneva-projekts': {
    ievads: '467. sērija jeb Brežneva projekts piedāvā lielākas virtuves (8–11 m²) salīdzinājumā ar citiem padomju laika tipiem — ar labāku plānojumu un augstākiem griestiem.',
    izaicinaums: 'Brežneva projektos virtuves parasti ir atsevišķas ar logu, taču vecās ūdens un kanalizācijas caurules bieži vien ierobežo izkārtojuma maiņu.',
    risinajums: 'Labākie plānojuma varianti šai sērijai ir lineārs vai L-veids ar darba virsmu pie loga. Mēs optimizējam esošās inženierkomunikāciju vietas.',
    padomi: 'Brežneva projektos augstākie griesti (2,7 m) ļauj uzstādīt augstākus skapjus — izmantojiet šo iespēju maksimāli, lai paplašinātu uzglabāšanas kapacitāti.',
  },
  '119-serija-jaunais-projekts': {
    ievads: '119. sērija ir vēlāka padomju būvniecības projekts ar plašākām virtuvēm (9–12 m²) un labāku plānojumu nekā agrākie tipi.',
    izaicinaums: '119. sērijā virtuves ir labāk plānotas, taču bieži vien ar nestandarta logu atvērumiem un dažādiem grīdas līmeņu paaugstinājumiem.',
    risinajums: 'Šīs sērijas virtuvēm bieži projektējam U veida vai L veida izkārtojumu ar salu, ja platība to atļauj — tas maksimāli izmanto pieejamo platību.',
    padomi: '119. sērijā labs risinājums ir atvērta virtuve, ja siena starp virtuvi un istabu nav nesošā — tas rada gaišāku un modernāku telpu.',
  },
  'cehu-projekts': {
    ievads: 'Cehu projekti ir rūpnīcām un ražotnēm blakus celtās dzīvojamās mājas ar specifiskiem arhitektoniskiem risinājumiem un 9–12 m² virtuvēm.',
    izaicinaums: 'Cehu projektu virtuvēs bieži ir nestandarta sienu biezums, atšķirīgi griestu augstumi un vecas komunikācijas, kas prasa individuālu pieeju.',
    risinajums: 'Strādājam ar cehu projektu specifiku — veicam detalizētus mērījumus un pielāgojam projektu esošajiem apstākļiem bez papildu izmaksām.',
    padomi: 'Cehu projektos iesakām pievērst uzmanību ventilācijai — bieži vien esošā ventilācijas sistēma prasa uzlabošanu pirms jaunas virtuves uzstādīšanas.',
  },
  'atvertais-planojums': {
    ievads: 'Atvērtais plānojums apvieno virtuvi ar dzīvojamo telpu — tas rada plašu, gaišu vidi, bet prasa rūpīgu dizaina plānošanu, lai abas zonas harmonizētu.',
    izaicinaums: 'Atvērtā plānojuma virtuvē katra detaļa ir redzama no dzīvojamās telpas — tāpēc svarīga ir ne tikai funkcionalitāte, bet arī estētika no visiem leņķiem.',
    risinajums: 'Atvērtām virtuvēm bieži projektējam ar salu vai bāra leti, kas kalpo kā vizuāls nodalītājs. Izmantojam vienotu krāsu paleti ar dzīvojamo telpu.',
    padomi: 'Atvērtā plānojumā ļoti svarīga ir efektīva tvaika nosūcēja izvēle — iebūvējams vai izvietots tā, lai nezagtu vizuālo telpu. Iesakām izvērtēt indukcijas plīti, kas rada mazāk tvaiku.',
  },
  'studijas-dzivoklis': {
    ievads: 'Studijas dzīvoklī virtuve, dzīvojamā un guļamā telpa atrodas vienā atvērtā telpā — tas prasa kompaktu, bet stilīgu virtuves dizainu, kas iekļaujas kopējā interjerā.',
    izaicinaums: 'Studijas dzīvoklī virtuves maza platība (5–8 m²) un pilnīga redzamība no visas telpas prasa precīzu dizaina un krāsu izvēli, kas harmonizē ar pārējo interjeru.',
    risinajums: 'Studijām projektējam kompaktas lineāras vai L veida virtuves ar minimālistisku dizainu. Iebūvējamā tehnika un slēptie rokturi rada tīru, nevainojamu izskatu.',
    padomi: 'Studijas dzīvoklī iesakām izvēlēties fasādes, kas atbilst guļamistabas un dzīvojamās telpas krāsu paletei — tādā veidā visa telpa izskatās vienota un harmoniska.',
  },
  '103-serija': {
    ievads: '103. sērija ir vēlākās padomju ēras dzīvojamās mājas ar 7–9 m² virtuvēm un nedaudz labāku plānojumu nekā agrākās sērijas.',
    izaicinaums: '103. sērijā virtuves ir atsevišķas ar logu, bet bieži ar nedaudz neparastu sienu izkārtojumu un vecu santehnikas sistēmu, kas ierobežo pārbūves iespējas.',
    risinajums: 'Šīs sērijas virtuvēm piedāvājam lineāru vai L veida izkārtojumu ar optimālu darba zonas garumu. Veicam detalizētus mērījumus, lai maksimāli izmantotu pieejamo platību.',
    padomi: '103. sērijā labs risinājums ir iebūvēt ledusskapi skapju rindā — tas atbrīvo grīdas platību un rada vienotu, tīru fasādes līniju.',
  },
}

export const DIZAINU_APRAKSTI: Record<typeof DIZAINS[number], {
  ievads: string
  raksturojiems: string
  materiali: string
  klientiem: string
}> = {
  moderna: {
    ievads: 'Moderns stils apvieno tīras līnijas, minimālu dekorāciju un funkcionālu dizainu. Tā ir izvēle tiem, kas vērtē kārtību, telpu un mūsdienu estētiku.',
    raksturojiems: 'Gludas fasādes bez rokturiem, slēptas roktura rievas vai "push-to-open" sistēma, monohroma krāsu palete ar akcentiem. Bieži izmanto matt vai high-gloss apdari.',
    materiali: 'Modernajam stilam vislabāk piemērots akrils vai MDF ar lakotu virsmu — tie nodrošina tīru, gludu izskatu bez redzamām savienojumu vietām.',
    klientiem: 'Ideāls jaunbūvju dzīvokļiem, studijām un atvērtā plānojuma telpām, kur virtuve ir redzama no dzīvojamās zonas.',
  },
  klasiska: {
    ievads: 'Klasiskais stils ir bezlaicīgs un elegants — ar frēzētām fasādēm, dekoratīviem elementiem un siltu krāsu paleti. Tas rada mājīgumu un ilgstošu estētiku.',
    raksturojiems: 'Frēzētas fasādes ar profilu, dekoratīvi kāju elementi, tradicionālie rokturi, siltas krāsas — krēmkrāsa, bēša, balts vai zaļš. Bieži papildina ar akmens darba virsmu.',
    materiali: 'Klasiskajam stilam lieliski piemērots MDF ar frēzētu virsmu vai masīvkoks — abi ļauj radīt tradicionālas fasādes ar bagātīgām detaļām.',
    klientiem: 'Ideāls privātmājām, lielākām virtuvēm un tiem, kas vēlas mājīgu, tradicionālu izskatu ar raksturīgu dekorāciju.',
  },
  minimalistiska: {
    ievads: 'Minimālisms ir ne tikai dizaina stils, bet dzīvesveids — tikai nepieciešamais, bez liekiem elementiem. Katrai detaļai ir nozīme un funkcija.',
    raksturojiems: 'Absolūti gludas fasādes, slēpti rokturi vai "push-to-open", monohroma baltu vai pelēku krāsu palete, tīras horizontālas līnijas. Maksimāla kārtība un telpa.',
    materiali: 'Minimālismam vislabāk piemērots akrils ar matt apdari vai MDF ar lakotu virsmu — tie nodrošina perfekti gludu, tīru izskatu.',
    klientiem: 'Ideāls studijām, jaunbūvēm un tiem, kas vēlas maksimāli tīru, organisku telpu bez vizuālā trokšņa.',
  },
  skandinavu: {
    ievads: 'Skandināvu stils apvieno funkcionālu dizainu ar dabiskumu un gaišumu — balts, koks un dabīgi toņi rada mājīgu, patīkamu vidi.',
    raksturojiems: 'Gaišas krāsas (balts, smilškrāsa, pelēkbalts), koka elementi vai koka imitācija, vienkārši rokturi, dabiskas tekstūras. Liela uzmanība dabiskajai gaismai.',
    materiali: 'Skandināvu stilam lieliski piemērots lamināts ar koka imitāciju vai dabīgais koks — tie nodrošina autentisku, dabisko izskatu par saprātīgu cenu.',
    klientiem: 'Ideāls ģimenēm ar bērniem, privātmājām un tiem, kas vēlas mājīgu, praktisko vidi ar dabiskiem akcentiem.',
  },
  'ar-salu': {
    ievads: 'Virtuve ar salu ir funkcionāla un reprezentatīva — sala kalpo gan kā papildu darba virsma, gan kā ēšanas vieta, gan kā vizuāls akcents.',
    raksturojiems: 'Centrālā sala ar papildu uzglabāšanas vietu un/vai izlietni, bāra krēslu zona ēšanai, kontrasta krāsu kombinācija starp salu un galveno virtuvi.',
    materiali: 'Salai bieži izmanto citu materiālu vai krāsu nekā galvenajai virtuvei — piemēram, koka sala ar baltiem skapjiem vai melna sala ar gaišu fonu.',
    klientiem: 'Ideāls atvērtā plānojuma telpām, privātmājām un lielākām virtuvēm no 12 m² — sala prasa pietiekamu kustību telpu apkārt.',
  },
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
    ievads: 'MDF ir populārs un praktisks materiāls mēbeļu un interjera izgatavošanai, ko klienti augstu novērtē ikdienas projektos. Tas piedāvā labu cenas un kvalitātes attiecību, kā arī vieglu apstrādi.',
    cenaKvalitate: 'MDF ir ievērojami lētāks nekā masīvkoks, taču nodrošina gludu virsmu un stabilu izskatu. Tas ļauj sasniegt augstāka līmeņa efektu par zemāku cenu — ideāls pilnīgi individuālām virtuvēm ar savdabīgu dizainu.',
    izturiba: 'MDF ir viendabīgs un izturīgs pret deformācijām ar labu lieces un stiepes izturību. Mēs izmantojam EGGER mitrumizturīgās plātnes 16 līdz 19 milimetru biezumā, kas ir īpaši piemērotas virtuvēm un nodrošina augstu pretestību mitrumam.',
    apstrade: 'EGGER MDF virsma ir gluda un ideāli piemērota krāsošanai — matēta, pulēta vai ar poliurētāna krāsām. To viegli griezt, frēzēt un laminēt, nodrošinot precīzu apstrādi sarežģītākiem dizainiem un dziļfrēzētām fasādēm.',
    kapecIzvelaties: 'Mēs izmantojam tikai EGGER MDF plātnes — Latvijā atzīta ražotāja produktu ar stabilu kvalitāti. EGGER kalibrētās plātnes 16 līdz 19 milimetru biezumā ir profesionālu mēbeļu ražotāju standarts, kas nodrošina precizitāti un ilgmūžību.',
    razotajs: 'EGGER',
  },
  laminats: {
    nosaukums: 'Lamināts (EGGER)',
    ievads: 'Lamināts ir viens no visbiežāk izvēlētajiem materiāliem iebūvējamām virtuvēm Latvijā — praktisks, ekonomisks risinājums ar plašu dizainu klāstu. EGGER lamināts piedāvā izcilu cenas un kvalitātes attiecību ikdienas virtuvēm.',
    cenaKvalitate: 'EGGER lamināts piedāvā augstu izturību pret skrāpējumiem un mitrumu par zemāku cenu — salīdzinājumā ar akrilu tas ir par aptuveni 25 procentiem lētāks, salīdzinājumā ar masīvkoku — par aptuveni 45 procentiem lētāks. Ideāls praktiskām virtuvēm ar lielu ikdienas slodzi.',
    izturiba: 'EGGER lamināts ir ļoti izturīgs pret ultravioleto starojumu, mitrumu un baktērijām, ar augstu pretestību skrāpējumiem — ideāls ģimenēm ar bērniem. Tas saglabā izskatu gadiem ilgi bez sarežģītām uzturēšanas prasībām.',
    apstrade: 'EGGER lamināts ir pieejams ar plašu dizainu klāstu — koka, akmens un krāsainas imitācijas. Ātra uzstādīšana un viegla tīrīšana padara to par vienu no populārākajiem variantiem Latvijā.',
    kapecIzvelaties: 'EGGER lamināts ir praktiska un ekonomiska ikdienas izvēle — daudzveidīgs dizains, augsta izturība un ātra uzstādīšana bez kompromisiem kvalitātē. Optimāla izvēle, ja vēlaties mūsdienīgu izskatu ar saprātīgu budžetu.',
    razotajs: 'EGGER',
  },
  koks: {
    nosaukums: 'Masīvkoks',
    ievads: 'Dabīgais koks ir augstāka līmeņa izvēle klientiem, kas vēlas ilgstošu skaistumu, siltumu un ekoloģisku pieeju savai virtuvei. Salīdzinājumā ar MDF vai laminātu tas ir dārgākais variants, taču ilgtermiņā atmaksājas ar īstu kvalitāti un unikālu izskatu.',
    cenaKvalitate: 'Dabīgais koks ir aptuveni par 60 procentiem dārgāks nekā MDF, taču pareizi koptā koka virtuve kalpo 20 līdz 30 gadus un kļūst tikai skaistāks. Tā ir investīcija interjera vērtībā, nevis vienkārši izmaksas.',
    izturiba: 'Dabīgais koks, īpaši termiski apstrādāts, labi iztur mitrumu, temperatūras svārstības un mehāniskus bojājumus. Pareiza lakošana vai eļļošana nodrošina ilgstošu izturību pat virtuves mitrākajās zonās.',
    apstrade: 'Koku var lakot, eļļot, krāsot vai atsegt tā dabīgajā izskatā — katra virtuve ir unikāla. Dabīgā koka tekstūra piešķir īstu siltumu un mājīgumu, ko nav iespējams imitēt ar sintētiskiem materiāliem.',
    kapecIzvelaties: 'Dabīgais koks ir ideāls, ja vēlaties mājīgu, unikālu un ekoloģisku virtuvi ar ilgstošu vērtību. Tā ir izvēle tiem, kas augstu vērtē autentiskumu un ir gatavi ieguldīt kvalitātē.',
    razotajs: 'Latvijas un Eiropas koka piegādātāji',
  },
  akrils: {
    nosaukums: 'Akrils',
    ievads: 'Akrils ir augstāka līmeņa materiāls modernai virtuvei ar iespaidīgu efektu — dziļš spīdums vai matējums, antibakteriāls un viegli tīrāms. Ideāls klientiem, kas vēlas izsmalcinātu, mūsdienīgu virtuvi.',
    cenaKvalitate: 'Akrils ir aptuveni divas reizes dārgāks nekā MDF, taču sniedz nesalīdzināmi dziļāku spīdumu un ārkārtēju estētiku. Tā ir investīcija, kas izceļ virtuvi un paaugstina mājokļa vērtību.',
    izturiba: 'Akrils ir ļoti izturīgs pret ultravioleto starojumu, mitrumu un baktērijām — higiēniskākais variants virtuvei. Tas nepieļauj baktēriju un netīrumu uzkrāšanos un ir viegli tīrāms ar mīkstu drānu.',
    apstrade: 'Akrils ir pieejams divās versijās — spīdīgais un matētais — ar plašu krāsu gammu. Tas tiek uzklāts uz MDF bāzes, nodrošinot stabilu formu un precīzu uzstādīšanu. Ātra tīrīšana un ilgstošs spīdums saglabājas gadiem.',
    kapecIzvelaties: 'Akrils ir ideāls modernai virtuvei ar iespaidīgu efektu — viegli tīrāms, antibakteriāls un mūsdienīgs. Izvēlieties akrilu, ja vēlaties virtuvi, kas izceļas un atstāj iespaidu uz ikvienu, kurš to ieraudzīs.',
    razotajs: 'Eiropas akrila piegādātāji',
  },
}

export type Dizains = typeof DIZAINS[number]
export type Krasas = typeof KRASAS[number]
export type Materialas = typeof MATERIALI[number]
export type Telpa = typeof TELPAS[number]
export type Pilseta = typeof PILSETAS[number]
