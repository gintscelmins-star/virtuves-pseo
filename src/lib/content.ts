// Saturs tiek rādīts visās PSEO lapās
// Fonts: Cormorant Garamond (virsraksti) + Inter (teksts)
// Tonis: premium, pārliecinošs, bez slēptajām izmaksām

export const PAKALPOJUMS = {
  virsraksts: 'Viss iekļauts. Nekādu pārsteigumu.',

  ievads: 'No pirmās sarunas līdz gatavai virtuvei — mēs rūpējamies par katru soli. Jūs saņemat skaidru cenu, precīzu izpildi un 10 gadu garantiju.',

  soli: [
    {
      nr: '01',
      nosaukums: 'Bezmaksas konsultācija',
      apraksts: 'Sazināmies 2 stundu laikā. Pārrunājam jūsu vēlmes, telpu un budžetu — bez saistībām, bez maksas.',
    },
    {
      nr: '02',
      nosaukums: 'Mērījumi uz vietas',
      apraksts: 'Mūsu speciālists ierodas pie jums, veic precīzus mērījumus un novērtē telpu iespējas.',
    },
    {
      nr: '03',
      nosaukums: 'Skice un cena 24 h laikā',
      apraksts: 'Nākamās darba dienas laikā saņemat projekta skici un galīgo cenu. Bez liekiem gaidīšanas laikiem.',
    },
    {
      nr: '04',
      nosaukums: 'Ražošana un piegāde',
      apraksts: 'Virtuve tiek ražota mūsu darbnīcā un piegādāta precīzi noteiktajā laikā.',
    },
    {
      nr: '05',
      nosaukums: 'Profesionāla uzstādīšana',
      apraksts: 'Mūsu meistari uzstāda virtuvi un integrē iebūvējamo tehniku — viss darbojas no pirmās dienas.',
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

  solisanas: 'Skaidra gala cena 24 h laikā. Nekādu slēpto izmaksu — tas, ko piekrītat, ir tas, ko maksājat.',

  cta: 'Saņemt bezmaksas konsultāciju',
}

export const UZNEMUMS = {
  virsraksts: '',
  apraksts: '',
  pieredze: '',
  garantija: '',
  projekti: '',
  komanda: '',
}

export const REALIZACIJA = {
  virsraksts: '',
  apraksts: '',
  soli: [] as { nr: string; nosaukums: string; apraksts: string }[],
}
