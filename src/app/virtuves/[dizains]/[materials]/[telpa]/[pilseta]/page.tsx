import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  DIZAINS, MATERIALI, TELPAS, PILSETAS,
  CENAS, TELPAS_PLATIBA, RAZOSANAS_LAIKS, MATERIALU_APRAKSTI,
  type Dizains, type Materialas, type Telpa, type Pilseta
} from '@/lib/data'
import { PAKALPOJUMS, UZNEMUMS, REALIZACIJA } from '@/lib/content'
import { getFoto } from '@/lib/images'
import { CtaHero, CtaSticky, CtaFloating, CtaForm } from '@/components/CtaButtons'

type Params = {
  dizains: Dizains
  materials: Materialas
  telpa: Telpa
  pilseta: Pilseta
}

export async function generateStaticParams() {
  const params = []
  for (const dizains of DIZAINS) {
    for (const materials of MATERIALI) {
      for (const telpa of TELPAS) {
        for (const pilseta of PILSETAS) {
          params.push({ dizains, materials, telpa, pilseta })
        }
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { dizains, materials, telpa, pilseta } = params
  const pilsetaLabel = pilsetaCapitalized(pilseta)
  const telpaLabel = telpa.replace(/-/g, ' ')
  const mat = MATERIALU_APRAKSTI[materials]
  return {
    title: `${dizainLabel(dizains)} virtuve — ${mat.nosaukums} — ${telpaLabel} — ${pilsetaLabel}`,
    description: `Iebūvējama ${dizainLabel(dizains).toLowerCase()} virtuve no ${mat.nosaukums} — ${telpaLabel}, ${pilsetaLabel}. Cena no €${CENAS[materials]}. Ražošanas laiks: ${RAZOSANAS_LAIKS[telpa]}. Bezmaksas dizāinera vizīte mājās.`,
    alternates: { canonical: `/virtuves/${dizains}/${materials}/${telpa}/${pilseta}/` }
  }
}

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

function pilsetaCapitalized(p: string) {
  return p.charAt(0).toUpperCase() + p.slice(1)
}

export default function VirtuvePage({ params }: { params: Params }) {
  const { dizains, materials, telpa, pilseta } = params

  if (
    !DIZAINS.includes(dizains) ||
    !MATERIALI.includes(materials) ||
    !TELPAS.includes(telpa) ||
    !PILSETAS.includes(pilseta)
  ) {
    notFound()
  }

  const pilsetaLabel = pilsetaCapitalized(pilseta)
  const telpaLabel = telpa.replace(/-/g, ' ')
  const cena = CENAS[materials]
  const platiba = TELPAS_PLATIBA[telpa]
  const razosana = RAZOSANAS_LAIKS[telpa]
  const foto = getFoto(dizains, telpa)
  const mat = MATERIALU_APRAKSTI[materials]
  const baseUrl = 'https://pseo.iebuvejamasvirtuves.lv'
  const ctaProps = { dizains, materials, telpa, pilseta }

  const faq = [
    {
      q: `Cik maksā ${dizainLabel(dizains).toLowerCase()} virtuve ${telpaLabel} ${pilsetaLabel}?`,
      a: `${dizainLabel(dizains)} iebūvējamās virtuves cena ${telpaLabel} dzīvoklī sākas no €${cena}. Precīzu cenu saņemsiet 24 stundu laikā pēc bezmaksas dizāinera vizītes.`,
    },
    {
      q: `Cik ilgi ražo ${mat.nosaukums} virtuvi ${telpaLabel}?`,
      a: `${mat.nosaukums} virtuves ražošanas laiks ${telpaLabel} ir ${razosana}. Tajā iekļauta individuāla izgatavošana, montāža un galīgais noregulējums.`,
    },
    {
      q: `Vai piedāvājat bezmaksas konsultāciju ${pilsetaLabel}?`,
      a: `Jā, mēs piedāvājam bezmaksas dizāinera vizīti mājās visā Latvijā, arī ${pilsetaLabel}. Dizāineris ierodas ar materiālu paraugiem un sagatavo skici 24 stundu laikā.`,
    },
    {
      q: `Kāda garantija ir uz ${mat.nosaukums} virtuvi?`,
      a: `Uz visām mūsu virtuvēm, ieskaitot ${mat.nosaukums} modeļus, ir 10 gadu garantija. Tā sedz mēbeles, fasādes, furnītūru un uzstādīšanu.`,
    },
    {
      q: `Kā ${dizainLabel(dizains)} stils atšķiras no citiem?`,
      a: `${dizainLabel(dizains)} stils izceļas ar savdabīgu estētiku un funkcionālitāti. Mēs rūpīgi pielāgojam katru projektu klienta telpai un personiskajai gaumei.`,
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Sākums', item: 'https://iebuvejamasvirtuves.lv' },
          { '@type': 'ListItem', position: 2, name: 'Virtuves', item: `${baseUrl}/virtuves` },
          { '@type': 'ListItem', position: 3, name: dizainLabel(dizains), item: `${baseUrl}/virtuves/${dizains}` },
          { '@type': 'ListItem', position: 4, name: mat.nosaukums, item: `${baseUrl}/virtuves/${dizains}/${materials}` },
          { '@type': 'ListItem', position: 5, name: telpaLabel, item: `${baseUrl}/virtuves/${dizains}/${materials}/${telpa}` },
          { '@type': 'ListItem', position: 6, name: pilsetaLabel, item: `${baseUrl}/virtuves/${dizains}/${materials}/${telpa}/${pilseta}` },
        ],
      },
      {
        '@type': 'Product',
        name: `${dizainLabel(dizains)} iebūvējama virtuve — ${mat.nosaukums} — ${telpaLabel}`,
        description: `Iebūvējama ${dizainLabel(dizains).toLowerCase()} virtuve no ${mat.nosaukums} ${pilsetaLabel}. Platība ${platiba}. Ražošanas laiks ${razosana}.`,
        brand: { '@type': 'Brand', name: 'Iebūvējamās Virtuves' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          price: cena.replace(/\s/g, ''),
          availability: 'https://schema.org/InStock',
          areaServed: { '@type': 'City', name: pilsetaLabel },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-brand-light min-h-screen">

        {/* STICKY CTA JOSLA */}
        <div className="sticky top-0 z-40 bg-brand-dark/95 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <p className="text-white/60 text-xs font-inter hidden sm:block">
              {dizainLabel(dizains)} virtuve · {mat.nosaukums} · no €{cena}
            </p>
            <CtaSticky {...ctaProps} />
          </div>
        </div>

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 py-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-dark/40 font-inter">
            <li><a href="https://iebuvejamasvirtuves.lv" className="hover:text-brand-gold transition-colors">Sākums</a></li>
            <li className="mx-1">/</li>
            <li><span>Virtuves</span></li>
            <li className="mx-1">/</li>
            <li><span>{dizainLabel(dizains)}</span></li>
            <li className="mx-1">/</li>
            <li><span>{mat.nosaukums}</span></li>
            <li className="mx-1">/</li>
            <li><span>{telpaLabel}</span></li>
            <li className="mx-1">/</li>
            <li className="text-brand-dark/70 font-medium">{pilsetaLabel}</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="bg-brand-dark text-white px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <span className="gold-line"></span>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3 font-inter">
              {telpaLabel} · {platiba} · {pilsetaLabel}
            </p>
            <h1 className="font-cormorant text-4xl md:text-6xl font-light leading-tight mb-4">
              {dizainLabel(dizains)} iebūvējama virtuve
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-white/70 italic mb-8">
              {mat.nosaukums} — no €{cena} · {razosana}
            </p>
            <CtaHero {...ctaProps} />
          </div>
        </section>

        {/* FOTO GALERIJA */}
        {foto.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 py-12">
            <span className="gold-line"></span>
            <h2 className="font-cormorant text-3xl font-light mb-8">Dizaina piemēri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {foto.map((url, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                  <Image
                    src={url}
                    alt={`${dizainLabel(dizains)} iebūvējama virtuve ${mat.nosaukums} ${telpaLabel} ${pilsetaLabel}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
            {/* IEDVESMAS CTA */}
            <div className="mt-8 pt-8 border-t border-brand-dark/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-cormorant text-lg text-brand-dark/60 italic">Vairāk dizainu un projektu iedvesmai</p>
              <a
                href="https://iebuvejamasvirtuves.lv"
                className="inline-flex items-center gap-2 border border-brand-dark/30 text-brand-dark text-xs tracking-[0.15em] uppercase px-6 py-3 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 font-inter whitespace-nowrap"
              >
                Dizaini iedvesmai →
              </a>
            </div>
          </section>
        )}

        {/* PROJEKTA PARAMETRI */}
        <section className="bg-brand-cream">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <span className="gold-line"></span>
            <h2 className="font-cormorant text-3xl font-light mb-8">Projekta parametri</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-dark/10">
              {[
                { label: 'Dzīvokļa tips', value: telpaLabel },
                { label: 'Platība', value: platiba },
                { label: 'Materiāls', value: mat.nosaukums },
                { label: 'Stils', value: dizainLabel(dizains) },
                { label: 'Cena no', value: `€${cena}` },
                { label: 'Ražošanas laiks', value: razosana },
              ].map(({ label, value }) => (
                <div key={label} className="bg-brand-cream p-5">
                  <p className="text-xs text-brand-dark/50 uppercase tracking-widest mb-1 font-inter">{label}</p>
                  <p className="font-cormorant text-xl font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATERIĀLA APRAKSTS */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <span className="gold-line"></span>
          <h2 className="font-cormorant text-3xl font-light mb-3">{mat.nosaukums}</h2>
          <p className="text-brand-dark/70 font-inter text-sm leading-relaxed mb-8 max-w-2xl">{mat.ievads}</p>
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

        {/* PAKALPOJUMS */}
        <section className="bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <span className="gold-line"></span>
            <h2 className="font-cormorant text-3xl font-light mb-2">{PAKALPOJUMS.virsraksts}</h2>
            <p className="text-white/60 text-sm font-inter mb-10">{PAKALPOJUMS.ievads}</p>
            <ol className="space-y-6">
              {PAKALPOJUMS.soli.map((solis) => (
                <li key={solis.nr} className="flex gap-6 items-start">
                  <span className="font-cormorant text-brand-gold text-2xl w-8 shrink-0">{solis.nr}</span>
                  <div>
                    <p className="font-cormorant text-lg mb-1">{solis.nosaukums}</p>
                    <p className="text-white/50 text-sm font-inter leading-relaxed">{solis.apraksts}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 border border-white/10 p-6">
              <p className="text-xs text-brand-gold uppercase tracking-widest mb-4">{PAKALPOJUMS.ieklauts.virsraksts}</p>
              <ul className="grid grid-cols-2 gap-2">
                {PAKALPOJUMS.ieklauts.pozicijas.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/70 font-inter">
                    <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0"></span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* REALIZĀCIJA */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <span className="gold-line"></span>
          <h2 className="font-cormorant text-3xl font-light mb-3">{REALIZACIJA.virsraksts}</h2>
          <p className="text-brand-dark/60 text-sm font-inter mb-10">{REALIZACIJA.apraksts}</p>
          <div className="divide-y divide-brand-dark/10">
            {REALIZACIJA.soli.map((solis) => (
              <div key={solis.nr} className="flex gap-8 items-start py-6">
                <div className="text-center shrink-0 w-12">
                  <p className="font-cormorant text-brand-gold text-2xl">{solis.nr}</p>
                  <p className="text-xs text-brand-dark/40 font-inter">{solis.laiks}</p>
                </div>
                <div>
                  <p className="font-cormorant text-xl mb-1">{solis.nosaukums}</p>
                  <p className="text-brand-dark/60 text-sm font-inter leading-relaxed">{solis.apraksts}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-dark/40 font-inter uppercase tracking-widest">⊕ {REALIZACIJA.kopejaisLaiks}</p>
        </section>

        {/* PAR UZŅĒMUMU */}
        <section className="bg-brand-cream">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <span className="gold-line"></span>
            <h2 className="font-cormorant text-3xl font-light mb-3">{UZNEMUMS.virsraksts}</h2>
            <p className="text-brand-dark/60 text-sm font-inter mb-10 max-w-2xl">{UZNEMUMS.ievads}</p>
            <div className="grid grid-cols-3 gap-px bg-brand-dark/10 mb-10">
              {[
                { skaitlis: UZNEMUMS.pieredze.skaitlis, vieniba: UZNEMUMS.pieredze.vieniba },
                { skaitlis: UZNEMUMS.projekti.skaitlis, vieniba: UZNEMUMS.projekti.vieniba },
                { skaitlis: UZNEMUMS.garantija.skaitlis, vieniba: UZNEMUMS.garantija.vieniba },
              ].map(({ skaitlis, vieniba }) => (
                <div key={vieniba} className="bg-brand-cream p-6 text-center">
                  <p className="font-cormorant text-5xl font-light text-brand-gold">{skaitlis}</p>
                  <p className="text-xs text-brand-dark/40 uppercase tracking-widest font-inter mt-1">{vieniba}</p>
                </div>
              ))}
            </div>
            <p className="text-brand-dark/60 text-sm font-inter leading-relaxed">{UZNEMUMS.komanda}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <span className="gold-line"></span>
          <h2 className="font-cormorant text-3xl font-light mb-8">Biežāk uzdotie jautājumi</h2>
          <div className="divide-y divide-brand-dark/10">
            {faq.map(({ q, a }) => (
              <details key={q} className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between gap-4 list-none">
                  <span className="font-cormorant text-lg font-medium group-open:text-brand-gold transition-colors">{q}</span>
                  <span className="text-brand-gold text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-brand-dark/60 text-sm font-inter leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FORMA */}
        <section className="bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <span className="block w-12 h-px bg-brand-gold mx-auto mb-6"></span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-3">Saņemt bezmaksas konsultāciju</h2>
            <p className="text-white/50 text-sm font-inter mb-10">Mēs sazināsimies vienas darba dienas laikā</p>
            <CtaForm {...ctaProps} />
          </div>
        </section>

        <CtaFloating {...ctaProps} />

      </main>
    </>
  )
}
