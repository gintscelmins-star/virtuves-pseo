import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DIZAINS, MATERIALI, TELPAS, PILSETAS, DIZAINU_APRAKSTI, MATERIALU_APRAKSTI, TELPU_APRAKSTI, CENAS, type Dizains, type Materialas } from '@/lib/data'

type Props = { params: { dizains: Dizains; materials: Materialas } }

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

function telpaDisplayName(t: string): string {
  const map: Record<string, string> = {
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
  return map[t] ?? t
}

export async function generateStaticParams() {
  const params = []
  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      params.push({ dizains, materials })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dizains, materials } = params
  if (!DIZAINS.includes(dizains) || !MATERIALI.includes(materials)) notFound()
  const mat = MATERIALU_APRAKSTI[materials]
  const diz = DIZAINU_APRAKSTI[dizains]
  return {
    title: `${dizainLabel(dizains)} virtuve — ${mat.nosaukums} — visi dzīvokļu tipi`,
    description: `${diz.ievads.substring(0, 80)} ${mat.nosaukums} iebūvējama virtuve no €${CENAS[materials]}. Pieejama visiem dzīvokļu tipiem — hruščovka, jaunbūve, privātmāja un citi.`,
    alternates: { canonical: `/virtuves/${dizains}/${materials}/` },
  }
}

export default function MaterialsHubPage({ params }: Props) {
  const { dizains, materials } = params
  if (!DIZAINS.includes(dizains) || !MATERIALI.includes(materials)) notFound()

  const mat = MATERIALU_APRAKSTI[materials]
  const diz = DIZAINU_APRAKSTI[dizains]
  const label = dizainLabel(dizains)

  return (
    <main className="bg-brand-light min-h-screen">
      {/* HERO */}
      <section className="bg-brand-dark text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <span className="gold-line"></span>
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3 font-inter">
            <a href={`/virtuves/${dizains}/`} className="hover:text-white transition-colors">{label}</a> · {mat.nosaukums}
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light leading-tight mb-4">
            {label} virtuve — {mat.nosaukums}
          </h1>
          <p className="font-cormorant text-xl text-white/70 italic mb-4">no €{CENAS[materials]} · {mat.razotajs}</p>
          <p className="text-white/60 text-sm font-inter max-w-2xl mb-8">{mat.ievads}</p>
          <a
            href="https://iebuvejamasvirtuves.lv"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-white transition-colors duration-300 font-inter"
          >
            Saņemt bezmaksas piedāvājumu →
          </a>
        </div>
      </section>

      {/* MATERIĀLA APRAKSTS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <span className="gold-line"></span>
        <h2 className="font-cormorant text-3xl font-light mb-8">{mat.nosaukums} — detaļas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Cena un kvalitāte', text: mat.cenaKvalitate },
            { title: 'Izturība', text: mat.izturiba },
            { title: 'Apstrāde', text: mat.apstrade },
            { title: 'Kāpēc izvēlēties?', text: mat.kapecIzvelaties },
          ].map(({ title, text }) => (
            <div key={title} className="border-l border-brand-gold pl-5">
              <p className="font-cormorant text-lg font-medium mb-1">{title}</p>
              <p className="text-brand-dark/60 text-sm font-inter leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DZĪVOKĻU TIPI */}
      <section className="bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <span className="gold-line"></span>
          <h2 className="font-cormorant text-3xl font-light mb-8">Izvēlieties dzīvokļa tipu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TELPAS.map((telpa) => {
              const t = TELPU_APRAKSTI[telpa]
              return (
                <a
                  key={telpa}
                  href={`/virtuves/${dizains}/${materials}/${telpa}/`}
                  className="block border border-brand-dark/10 bg-brand-light p-6 hover:border-brand-gold transition-all duration-300 group"
                >
                  <p className="font-cormorant text-2xl font-light mb-2 group-hover:text-brand-gold transition-colors">{telpaDisplayName(telpa)}</p>
                  <p className="text-brand-dark/60 text-sm font-inter leading-relaxed">{t.ievads.substring(0, 100)}...</p>
                  <p className="mt-4 text-xs text-brand-gold uppercase tracking-widest font-inter">Skatīt projektus →</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* PILSĒTAS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <span className="gold-line"></span>
        <h2 className="font-cormorant text-3xl font-light mb-8">{label} {mat.nosaukums} virtuves pēc pilsētas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PILSETAS.map((pilseta) => (
            <a
              key={pilseta}
              href={`/virtuves/${dizains}/${materials}/privatmaja/${pilseta}/`}
              className="border border-brand-dark/10 px-4 py-3 text-center text-sm font-inter text-brand-dark/70 hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            >
              {pilseta.charAt(0).toUpperCase() + pilseta.slice(1)}
            </a>
          ))}
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
