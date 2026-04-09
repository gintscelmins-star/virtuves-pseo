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
  const pilsetaLabel = pilseta.charAt(0).toUpperCase() + pilseta.slice(1)
  const telpaLabel = telpa.replace(/-/g, ' ')
  return {
    title: `${dizainLabel(dizains)} virtuve — ${materials.toUpperCase()} — ${telpaLabel} — ${pilsetaLabel} | Iebūvējāmās Virtuves`,
    description: `Iebūvējama ${dizains} virtuve no ${materials} materiāla ${telpaLabel} dzīvoklī ${pilsetaLabel}. Cena no €${CENAS[materials]}. Ražošanas laiks: ${RAZOSANAS_LAIKS[telpa]}.`,
    alternates: {
      canonical: `/virtuves/${dizains}/${materials}/${telpa}/${pilseta}/`,
    }
  }
}

function dizainLabel(d: Dizains): string {
  const map: Record<Dizains, string> = {
    moderna: 'Moderna',
    klasiska: 'Klasiskā',
    minimalistiska: 'Minīmālistiskā',
    skandinavu: 'Skandīnāvu',
    'ar-salu': 'Ar salu',
  }
  return map[d]
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

  const pilsetaLabel = pilseta.charAt(0).toUpperCase() + pilseta.slice(1)
  const telpaLabel = telpa.replace(/-/g, ' ')
  const cena = CENAS[materials]
  const platiba = TELPAS_PLATIBA[telpa]
  const razosana = RAZOSANAS_LAIKS[telpa]
  const foto = getFoto(dizains, telpa)
  const mat = MATERIALU_APRAKSTI[materials]

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">

      {/* H1 */}
      <section>
        <h1 className="text-3xl font-bold text-brand-dark mb-2">
          {dizainLabel(dizains)} iebūvējama virtuve — {materials.toUpperCase()} — {pilsetaLabel}
        </h1>
        <p className="text-gray-500 text-sm">
          {telpaLabel} · {platiba} · no €{cena} · {razosana}
        </p>
      </section>

      {/* FOTO GALERIJA */}
      {foto.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Virtuves dizaina piemēri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {foto.map((url, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={url}
                  alt={`${dizainLabel(dizains)} virtuve ${telpaLabel} — ${pilsetaLabel} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJEKTA PARAMETRI */}
      <section className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Projekta parametri</h2>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b"><td className="py-2 text-gray-500">Dzīvokļa tips</td><td className="py-2 font-medium">{telpaLabel}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Standarta platība</td><td className="py-2 font-medium">{platiba}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Materiāls</td><td className="py-2 font-medium">{mat.nosaukums}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Stils</td><td className="py-2 font-medium">{dizainLabel(dizains)}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Cena no</td><td className="py-2 font-medium text-brand-gold">€{cena}</td></tr>
            <tr><td className="py-2 text-gray-500">Ražošanas laiks</td><td className="py-2 font-medium">{razosana}</td></tr>
          </tbody>
        </table>
      </section>

      {/* MATERIĀLA APRAKSTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{mat.nosaukums} — materiāls Tavaī virtuvei</h2>
        <p className="text-gray-700 mb-4">{mat.ievads}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-1">Cena un kvalitāte</h3>
            <p className="text-gray-600 text-sm">{mat.cenaKvalitate}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Izturība</h3>
            <p className="text-gray-600 text-sm">{mat.izturiba}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Apstrāde</h3>
            <p className="text-gray-600 text-sm">{mat.apstrade}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Kāpēc iz vēlēties {mat.nosaukums}?</h3>
            <p className="text-gray-600 text-sm">{mat.kapecIzvelaties}</p>
          </div>
        </div>
      </section>

      {/* PAKALPOJUMS */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">{PAKALPOJUMS.virsraksts}</h2>
        <p className="text-gray-700 mb-6">{PAKALPOJUMS.ievads}</p>
        <ol className="space-y-4">
          {PAKALPOJUMS.soli.map((solis) => (
            <li key={solis.nr} className="flex gap-4">
              <span className="text-brand-gold font-bold text-lg w-8 shrink-0">{solis.nr}</span>
              <div>
                <p className="font-semibold">{solis.nosaukums}</p>
                <p className="text-gray-600 text-sm">{solis.apraksts}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6 bg-gray-50 rounded-xl p-5">
          <p className="font-semibold mb-2">{PAKALPOJUMS.ieklauts.virsraksts}</p>
          <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700">
            {PAKALPOJUMS.ieklauts.pozicijas.map((p) => (
              <li key={p} className="flex items-center gap-1">
                <span className="text-green-500">✓</span> {p}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">{PAKALPOJUMS.solisanas}</p>
      </section>

      {/* REALIZĀCIJA */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">{REALIZACIJA.virsraksts}</h2>
        <p className="text-gray-700 mb-6">{REALIZACIJA.apraksts}</p>
        <div className="space-y-6">
          {REALIZACIJA.soli.map((solis) => (
            <div key={solis.nr} className="flex gap-4 border-l-4 border-brand-gold pl-4">
              <div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wide">{solis.nr} · {solis.laiks}</span>
                <p className="font-semibold mt-1">{solis.nosaukums}</p>
                <p className="text-gray-600 text-sm">{solis.apraksts}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">⊕ {REALIZACIJA.kopejaisLaiks}</p>
      </section>

      {/* PAR UZŅĒMUMU */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2">{UZNEMUMS.virsraksts}</h2>
        <p className="text-gray-700 mb-6">{UZNEMUMS.ievads}</p>
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-3xl font-bold text-brand-gold">{UZNEMUMS.pieredze.skaitlis}</p>
            <p className="text-sm text-gray-500">{UZNEMUMS.pieredze.vieniba}</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-gold">{UZNEMUMS.projekti.skaitlis}</p>
            <p className="text-sm text-gray-500">{UZNEMUMS.projekti.vieniba}</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-gold">{UZNEMUMS.garantija.skaitlis}</p>
            <p className="text-sm text-gray-500">{UZNEMUMS.garantija.vieniba}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">{UZNEMUMS.pieredze.apraksts}</p>
        <p className="text-gray-600 text-sm mb-2">{UZNEMUMS.garantija.apraksts}</p>
        <p className="text-gray-600 text-sm">{UZNEMUMS.komanda}</p>
      </section>

      {/* CTA FORMA */}
      <section className="bg-brand-dark rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Saņemt bezmaksas konsultāciju</h2>
        <p className="text-gray-400 mb-6 text-sm">Mēs sazināsimies 1 darba dienas laikā</p>
        <form
          action="https://formspree.io/f/mojkjwrp"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value={`Pieprasījums: ${dizains} ${materials} ${telpa} ${pilseta}`} />
          <input type="hidden" name="lapas_konteksts" value={`${dizains} / ${materials} / ${telpa} / ${pilseta}`} />
          <input type="text" name="vards" placeholder="Vārds" required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-brand-gold" />
          <input type="tel" name="telefons" placeholder="Telefons" required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-brand-gold" />
          <button type="submit"
            className="w-full py-3 bg-brand-gold text-white font-semibold rounded-lg hover:opacity-90 transition">
            Nosūtīt pieprasījumu
          </button>
        </form>
      </section>

    </main>
  )
}
