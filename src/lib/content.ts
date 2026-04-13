import {
  PILSETU_APRAKSTI,
  TELPU_APRAKSTI,
  CENAS,
  TELPAS_PLATIBA,
  RAZOSANAS_LAIKS,
  type Pilseta,
  type Telpa,
  type Materialas,
} from './data'

// STATICAIS SATURS — vienads visas lapas

export const PAKALPOJUMS = {
  virsraksts: 'Viss iekļauts. Nekādu pārsteigumu.',

  ievads:
    'No pirmās sarunas līdz gatavai virtuvei — mēs rūpējamies par katru soli. Jūs saņemat skaidru cenu, precīzu izpildi un 10 gadu garantiju.',

  soli: [
    {
      nr: '01',
      nosaukums: 'Bezmaksas konsultācija',
      apraksts:
        'Sazināmies divu stundu laikā. Pārrunājam jūsu vēlmes, telpu un budžetu — bez saistībām, bez maksas.',
    },
    {
      nr: '02',
      nosaukums: 'Dizainera vizīte mājās',
      apraksts:
        'Dizaineris ierodas ar materiālu paraugiem, veic precīzus mērījumus un novērtē telpu. Precīza cena un skice — 24 stundu laikā pēc vizītes.',
    },
    {
      nr: '03',
      nosaukums: 'Skice un cena 24 stundu laikā',
      apraksts:
        'Nākamās darba dienas laikā saņemsiet projekta skici un galīgo cenu. Bez lieka gaidīšanas. Nekādu slēpto izmaksu.',
    },
    {
      nr: '04',
      nosaukums: 'Ražošana',
      apraksts:
        'Individuāla izgatavošana mūsu darbnīcā ar izvēlētajiem materiāliem — divas līdz četras nedēļas atkarībā no projekta sarežģītības. Jūs saņemsiet ražošanas foto un regulārus progresa atjauninājumus.',
    },
    {
      nr: '05',
      nosaukums: 'Montāža un nodošana',
      apraksts:
        'Profesionāla uzstādīšana vienas līdz divu dienu laikā, ieskaitot tehniskās iekārtas pieslēgumu un galīgo noregulēšanu. Virtuve gatava lietojanai uzreiz.',
    },
  ],

  ieklauts: {
    virsraksts: 'Cenā iekļauts',
    pozicijas: [
      'Uzmērīšana uz vietas',
      'Dizains un projekts',
      'Ražošana',
      'Piegāde',
      'Iebūvējamās tehnikas integrācija',
      '10 gadu garantija',
    ],
  },

  solijums:
    'Skaidra gala cena 24 stundu laikā. Nekādu slēpto izmaksu — tas, ko piekrītiet, ir tas, ko maksājat.',

  cta: 'Saņemt bezmaksas konsultāciju',
}

export const UZNEMUMS = {
  virsraksts: 'Jūsu virtuve. Mūsu aizraušanās.',

  ievads:
    'Iedomājieties savu sapņu virtuvi — stilīgu, funkcionālu un tieši jums piemērotu, kur katrs stūris apvienots ar eleganci un ikdienas ērtumu. Mēs palīdzēsim to īstenot.',

  pieredze: {
    skaitlis: '25+',
    vieniba: 'gadi',
    apraksts:
      'Vairāk nekā 25 gadu laikā Latvijā esam izveidojuši tūkstošiem virtuvju, kas kalpo gadiem, pielāgojoties ģimenes vajadzībām un jaunākajām tendencēm. Jūsu virtuve būs ne tikai skaista, bet arī praktiska ilgtermiņā.',
  },

  projekti: {
    skaitlis: '984',
    vieniba: 'projekti',
    apraksts:
      'Esam realizējuši 984 pielāgotas virtuves Rīgā un apkārtnē — no moderna minimālisma līdz siltam klasiskajam stilam. Katra virtuve ir unikāla, tāpat kā klients, kas to iegādājās.',
  },

  garantija: {
    skaitlis: '10',
    vieniba: 'gadu garantija',
    apraksts:
      'Pilna 10 gadu garantija uz mēbelēm, fasādēm, furnitūru un uzstādīšanu — sedz jebkuru defektu, nodrošinot ātru remontu vai aizstāšanu bez papildu izmaksām. Jūsu investīcija ir aizsargāta.',
  },

  komanda:
    'Mūsu komanda — dizaineri ar trīsdimensiju vizualizācijas prasmēm, ražotāji un montētāji — strādā saskaņoti, lai katrs solis būtu nevainojams. Dizainera vizīte mājās ļauj izprast jūsu telpu un gaumi, radot risinājumu, kas iederas jūsu dzīvesveidā.',

  atskiribaVirsraksts: 'Kāpēc mēs?',
  atskiriba:
    'Esam specializējušies tikai iebūvējamās virtuvēs: bezmaksas dizainera vizīte mājās, 25 gadu pieredze un 10 gadu garantija — nevis sērijveida produkti, bet jūsu unikālā virtuve. Sazinieties tagad un sāciet savu projektu.',

  cta: 'Saņemt bezmaksas vizīti',
}

export const REALIZACIJA = {
  virsraksts: 'No idejas līdz gatavai virtuvei',

  apraksts:
    'Skaidrs, pārskatāms process — jūs zināt, kas notiek katrā solī. No pirmās vizītes līdz gatavai virtuvei parasti trīs līdz sešas nedēļas.',

  soli: [
    {
      nr: 'M1',
      nosaukums: 'Konsultācija un dizains',
      apraksts:
        'Bezmaksas dizainera vizīte mājās ar materiālu paraugiem. Telpu mērīšana, trīsdimensiju vizualizācija un projekta saskaņošana, lai viss atbilstu jūsu gaumei. Precīza cena un skice — 24 stundu laikā.',
      laiks: '1–2 dienas',
    },
    {
      nr: 'M2',
      nosaukums: 'Ražošana',
      apraksts:
        'Pēc apstiprinājuma individuāla izgatavošana mūsu darbnīcā ar izvēlētajiem materiāliem. Jūs saņemsiet ražošanas foto un regulārus progresa atjauninājumus pa e-pastu vai tālruni.',
      laiks: '2–4 nedēļas',
    },
    {
      nr: 'M3',
      nosaukums: 'Montāža un nodošana',
      apraksts:
        'Profesionāla uzstādīšana vienas līdz divu dienu laikā, ieskaitot tehniskās iekārtas pieslēgumu un galīgo noregulēšanu. Virtuve gatava lietošanai uzreiz — mēs neaizejam, kamēr viss nav nevainojami izpildīts.',
      laiks: '1–2 dienas',
    },
  ],

  izmainasPolitika:
    'Ja rodas izmaiņas — jauna krāsa, papildu detaļa vai izmēru korekcija — mēs elastīgi pielāgojam projektu bez papildu izmaksām, ja nav būtisku materiālu maiņu. Visas izmaiņas vienmēr saskaņojam ar jums iepriekš.',

  kopejaisLaiks: '3–6 nedēļas no apstiprinātā projekta līdz gatavai virtuvei',

  cta: 'Sākt ar bezmaksas konsultāciju',
}

// DINAMISKAIS SATURS — atkarīgs no pilsētas / telpas / materiāla

export function getPilsetasSaturs(pilseta: Pilseta) {
  const apraksti = PILSETU_APRAKSTI[pilseta]
  return {
    ievads: apraksti.ievads,
    pievedums: apraksti.pievedums,
    montaza: apraksti.montaza,
    pakalpojumsVirsraksts: apraksti.pakalpojumsVirsraksts,
  }
}

export function getTelpasKonteksts(telpa: Telpa) {
  const apraksti = TELPU_APRAKSTI[telpa]
  return {
    ievads: apraksti.ievads,
    izaicinaums: apraksti.izaicinaums,
    risinajums: apraksti.risinajums,
    padomi: apraksti.padomi,
    platiba: TELPAS_PLATIBA[telpa],
    razosanasLaiks: RAZOSANAS_LAIKS[telpa],
  }
}

export function getMateriatsInfo(materials: Materialas) {
  return {
    cena: CENAS[materials],
    nosaukums:
      materials === 'mdf'
        ? 'MDF (EGGER)'
        : materials === 'laminats'
          ? 'Lamināts (EGGER)'
          : materials === 'koks'
            ? 'Masīvkoks'
            : 'Akrils',
  }
}

export function getDinamiksieteksts(
  pilseta: Pilseta,
  telpa: Telpa,
  materials: Materialas
) {
  const pilsetasApraksti = PILSETU_APRAKSTI[pilseta]
  const telpasApraksti = TELPU_APRAKSTI[telpa]
  const platiba = TELPAS_PLATIBA[telpa]
  const razosanasLaiks = RAZOSANAS_LAIKS[telpa]
  const cena = CENAS[materials]

  return {
    // Galvenais ievaērujums lapaā
    heroIevads: `${telpasApraksti.ievads} ${pilsetasApraksti.ievads}`,

    // Telpu sadala
    telpasVirsraksts: `Virtuves ${pilsetasApraksti.pakalpojumsVirsraksts.replace('Iebūvējamās virtuves ', '')} — ${platiba}`,
    telpasIzaicinaums: telpasApraksti.izaicinaums,
    telpasRisinajums: telpasApraksti.risinajums,
    telpasPadomi: telpasApraksti.padomi,

    // Pilsetas sadala
    pilsetasPievedums: pilsetasApraksti.pievedums,
    pilsetasMontaza: pilsetasApraksti.montaza,

    // Cena un laiks
    cenaNo: cena,
    razosanasLaiks,

    // CTA teksti
    ctaVirsraksts: `Saņemiet bezmaksas konsultāciju ${pilseta === 'riga' ? 'Rīgā' : pilseta === 'jurmala' ? 'Jūrmalā' : pilseta === 'daugavpils' ? 'Daugavpilī' : pilseta === 'jelgava' ? 'Jelgavā' : pilseta === 'jekabpils' ? 'Jēkabpilī' : pilseta === 'valmiera' ? 'Valmierā' : pilseta === 'ventspils' ? 'Ventspilī' : pilseta === 'liepaja' ? 'Liepājā' : pilseta === 'rezekne' ? 'Rēzeknē' : 'Ogrē'}`,
  }
}
