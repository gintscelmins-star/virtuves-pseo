import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DIZAINS, MATERIALI, TELPAS, PILSETAS, DIZAINU_APRAKSTI, MATERIALU_APRAKSTI, TELPU_APRAKSTI, TELPAS_PLATIBA, CENAS, type Dizains, type Materialas, type Telpa } from '@/lib/data'

type Props = { params: { dizains: Dizains; materials: Materialas; telpa: Telpa } }

function dizainLabel(d: Dizains): string {
  const map: Record<Dizains, string> = {
    moderna: 'Moderna',
    klasiska: 'Klasiskā',
    minimalistiska: 'Minimālistiskā',
    skandinavu: 'Skandināvu',
    'ar-salu': 'Ar salu',
  }
  return map[d]
}

function telpaDisplayName(t: Telpa): string {
  const map: Record<Telpa, string> = {
    '602-serija': '602. sērijas dzīvoklis',
    '464-serija-lietuviesu-projekts': '464. sērija (Lietuvisks projekts)',
    '316-serija-hruscovka': 'Hruščovka (316. sērija)',
    '467-serija-brezneva-projekts': '467. sērija (Brežneva projekts)',
    '119-serija-jaunais-projekts': '119. sērija (Jaunais projekts)',
    'cehu-projekts': 'Cehu projekts',
    jaunbuve: 'Jaunbūve',
    privatmaja: 'Privātmāja',
    'atvertais-planojums': 'Atvērtais plānojums',
    'studijas-dzivoklis': 'Studijas dzīvoklis',
    '103-serija': '103. sērijas dzīvoklis',
  }
  return map[t]
}

function pilsetaLocative(p: string): string {
  const map: Record<string, string> = {
    riga: 'Rīgā', jurmala: 'Jūrmalā', daugavpils: 'Daugavpilī',
    jelgava: 'Jelgavā', jekabpils: 'Jēkabpilī', valmiera: 'Valmierā',
    ventspils: 'Ventspilī', liepaja: 'Liepājā', rezekne: 'Rēzeknē', ogre: 'Ogrē',
  }
  return map[p] ?? p
}

export async function generateStaticParams() {
  const params = []
  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      for (const telpa of TELPAS) {
        params.push({ dizains, materials, telpa })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dizains, materials, telpa } = params
  if (!DIZAINS.includes(dizains) || !MATERIALI.includes(materials) || !TELPAS.includes(telpa)) notFound()
  const mat = MATERIALU_APRAKSTI[materials]
  const diz = DIZAINU_APRAKSTI[dizains]
  const telpaLabel = telpaDisplayName(telpa)
  return {
    title: `${dizainLabel(dizains)} virtuve — ${mat.nosaukums} — ${telpaLabel} — visas pilsētas`,
    description: `${diz.ievads.substring(0, 80)} ${mat.nosaukums} virtuve ${telpaLabel}. Cena no €${CENAS[materials]}. Pieejama Rīgā, Jūrmalā, Daugavpilī un visā Latvijā.`,
    alternates: { canonical: `/virtuves/${dizains}/${materials}/${telpa}/` },
  }
}

export default function TelpaHubPage({ params }: Props) {
  const { dizains, materials, telpa } = params
  if (!DIZAINS.includes(dizains) || !MATERIALI.includes(materials) || !TELPAS.includes(telpa)) notFound()

  const mat = MATERIALU_APRAKSTI[materials]
  const telpaInfo = TELPU_APRAKSTI[telpa]
  const label = dizainLabel(dizains)
  const telpaLabel = telpaDisplayName(telpa)
  const platiba = TELPAS_PLATIBA[telpa]

  return (
    <main className="bg-brand-light min-h-screen">
      {/* HERO */}
      <section className="bg-brand-dark text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <span className="gold-line"></span>
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3 font-inter">
            <a href={`/virtuves/${dizains}/`} className="hover:text-white transition-colors">{label}</a>
            {' · '}
            <a href={`/virtuves/${dizains}/${materials}/`} className="hover:text-white transition-colors">{mat.nosaukums}</a>
            {' · '}{telpaLabel}
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light leading-tight mb-4">
            {label} virtuve — {mat.nosaukums}
          </h1>
          <p className="font-cormorant text-xl text-white/70 italic mb-4">{telpaLabel} · {platiba} · no €{CENAS[materials]}</p>
          <p className="text-white/60 text-sm font-inter max-w-2xl mb-8">{telpaInfo.ievads}</p>
          <a
            href="https://iebuvejamasvirtuves.lv"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-white transition-colors duration-300 font-inter"
          >
            Saņemt bezmaksas piedāvājumu →
          </a>
        </div>
      </section>

      {/* TELPAS APRAKSTS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <span className="gold-line"></span>
        <h2 className="font-cormorant text-3xl font-light mb-8">{telpaLabel} — ko jāzina</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-l border-brand-gold pl-5">
            <p className="font-cormorant text-lg font-medium mb-1">Izaicinājumi</p>
            <p className="text-brand-dark/60 text-sm font-inter leading-relaxed">{telpaInfo.izaicinaums}</p>
          </div>
          <div className="border-l border-brand-gold pl-5">
            <p className="font-cormorant text-lg font-medium mb-1">Mūsu risinājums</p>
            <p className="text-brand-dark/60 text-sm font-inter leading-relaxed">{telpaInfo.risinajums}</p>
          </div>
        </div>
        <div className="mt-6 bg-brand-cream p-5">
          <p className="text-xs text-brand-gold uppercase tracking-widest mb-2 font-inter">Ieteikums</p>
          <p className="text-brand-dark/70 text-sm font-inter leading-relaxed">{telpaInfo.padomi}</p>
        </div>
      </section>

      {/* PILSĒTAS — VISAS SAITES */}
      <section className="bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <span className="gold-line"></span>
          <h2 className="font-cormorant text-3xl font-light mb-8">Izvēlieties pilsētu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILSETAS.map((pilseta) => (
              <a
                key={pilseta}
                href={`/virtuves/${dizains}/${materials}/${telpa}/${pilseta}/`}
                className="block border border-brand-dark/10 bg-brand-light p-6 hover:border-brand-gold transition-all duration-300 group"
              >
                <p className="font-cormorant text-2xl font-light mb-1 group-hover:text-brand-gold transition-colors capitalize">
                  {pilseta.charAt(0).toUpperCase() + pilseta.slice(1)}
                </p>
                <p className="text-brand-dark/60 text-sm font-inter">
                  {label} {mat.nosaukums} virtuve {pilsetaLocative(pilseta)}
                </p>
                <p className="mt-3 text-xs text-brand-gold uppercase tracking-widest font-inter">Skatīt projektu →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="block w-12 h-px bg-brand-gold mx-auto mb-6"></span>
          <h2 className="font-cormorant text-4xl font-light mb-3">Saņemt bezmaksas konsultāciju</h2>
          <p className="text-white/50 text-sm font-inter mb-8">Mēs sazināsimies vienas darba dienas laikā</p>
          <a
            href="https://iebuvejamasvirtuves.lv"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-white transition-colors duration-300 font-inter"
          >
            Pieteikties konsultācijai →
          </a>
        </div>
      </section>
    </main>
  )
}
