import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DIZAINS, MATERIALI, TELPAS, PILSETAS, DIZAINU_APRAKSTI, MATERIALU_APRAKSTI, type Dizains } from '@/lib/data'

type Props = { params: { dizains: Dizains } }

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

export async function generateStaticParams() {
  return DIZAINS.map((dizains) => ({ dizains }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dizains } = params
  if (!DIZAINS.includes(dizains)) notFound()
  const diz = DIZAINU_APRAKSTI[dizains]
  return {
    title: `${dizainLabel(dizains)} iebūvējamā virtuve — visi materiāli un projekti`,
    description: `${diz.ievads} Izvēlieties materiālu un dzīvokļa tipu — MDF, lamināts, masīvkoks vai akrils. Bezmaksas dizainera vizīte visā Latvijā.`,
    alternates: { canonical: `/virtuves/${dizains}/` },
  }
}

export default function DizainsHubPage({ params }: Props) {
  const { dizains } = params
  if (!DIZAINS.includes(dizains)) notFound()

  const diz = DIZAINU_APRAKSTI[dizains]
  const label = dizainLabel(dizains)

  return (
    <main className="bg-brand-light min-h-screen">
      {/* HERO */}
      <section className="bg-brand-dark text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <span className="gold-line"></span>
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3 font-inter">Iebūvējamās virtuves</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light leading-tight mb-4">
            {label} virtuves
          </h1>
          <p className="text-white/60 text-sm font-inter max-w-2xl mb-8">{diz.ievads}</p>
          <a
            href="https://iebuvejamasvirtuves.lv"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-white transition-colors duration-300 font-inter"
          >
            Saņemt bezmaksas piedāvājumu →
          </a>
        </div>
      </section>

      {/* STILA APRAKSTS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <span className="gold-line"></span>
        <h2 className="font-cormorant text-3xl font-light mb-3">{label} stila raksturojums</h2>
        <p className="text-brand-dark/70 font-inter text-sm leading-relaxed mb-6 max-w-2xl">{diz.raksturojiems}</p>
        <p className="text-brand-dark/60 font-inter text-sm leading-relaxed max-w-2xl">{diz.klientiem}</p>
      </section>

      {/* MATERIĀLI */}
      <section className="bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <span className="gold-line"></span>
          <h2 className="font-cormorant text-3xl font-light mb-8">Izvēlieties materiālu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MATERIALI.map((mat) => {
              const m = MATERIALU_APRAKSTI[mat]
              return (
                <a
                  key={mat}
                  href={`/virtuves/${dizains}/${mat}/`}
                  className="block border border-brand-dark/10 bg-brand-light p-6 hover:border-brand-gold transition-all duration-300 group"
                >
                  <p className="font-cormorant text-2xl font-light mb-2 group-hover:text-brand-gold transition-colors">{m.nosaukums}</p>
                  <p className="text-brand-dark/60 text-sm font-inter leading-relaxed">{m.ievads.substring(0, 100)}...</p>
                  <p className="mt-4 text-xs text-brand-gold uppercase tracking-widest font-inter">Skatīt projektus →</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* VISI PROJEKTI PĒC PILSĒTAS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <span className="gold-line"></span>
        <h2 className="font-cormorant text-3xl font-light mb-8">{label} virtuves pēc pilsētas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PILSETAS.map((pilseta) => (
            <a
              key={pilseta}
              href={`/virtuves/${dizains}/mdf/privatmaja/${pilseta}/`}
              className="border border-brand-dark/10 px-4 py-3 text-center text-sm font-inter text-brand-dark/70 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 capitalize"
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
