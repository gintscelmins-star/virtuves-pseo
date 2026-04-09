import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  DIZAINS, MATERIALI, TELPAS, PILSETAS,
  CENAS, TELPAS_PLATIBA, RAZOSANAS_LAIKS,
  type Dizains, type Materialas, type Telpa, type Pilseta
} from '@/lib/data'

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
    title: `${dizainLabel(dizains)} virtuve — ${materials.toUpperCase()} — ${telpaLabel} — ${pilsetaLabel}`,
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

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">

      {/* H1 — primārais atslēgvārds */}
      <h1 className="text-3xl font-bold text-brand-dark mb-2">
        {dizainLabel(dizains)} iebūvējama virtuve — {materials.toUpperCase()} — {pilsetaLabel}
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        {telpaLabel} · {platiba} · no €{cena} · {razosana}
      </p>

      {/* Datu tabula — HCU aizsardzība */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Projekta parametri</h2>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b"><td className="py-2 text-gray-500">Dzīvokļa tips</td><td className="py-2 font-medium">{telpaLabel}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Standarta platiba</td><td className="py-2 font-medium">{platiba}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Materiāls</td><td className="py-2 font-medium">{materials.toUpperCase()}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Stils</td><td className="py-2 font-medium">{dizainLabel(dizains)}</td></tr>
            <tr className="border-b"><td className="py-2 text-gray-500">Cena no</td><td className="py-2 font-medium text-brand-gold">€{cena}</td></tr>
            <tr><td className="py-2 text-gray-500">Ražošanas laiks</td><td className="py-2 font-medium">{razosana}</td></tr>
          </tbody>
        </table>
      </div>

      {/* CTA forma */}
      <div className="bg-brand-dark rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Saņemt bezmaksas konsultāciju</h2>
        <p className="text-gray-400 mb-6 text-sm">Mēs sazināsimies 1 darba dienas laikā</p>
        <form
          action="https://formspree.io/f/mojkjwrp"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value={`Pieprasījums: ${dizains} ${materials} ${telpa} ${pilseta}`} />
          <input type="hidden" name="lapas_konteksts" value={`${dizains} / ${materials} / ${telpa} / ${pilseta}`} />
          <input
            type="text"
            name="vards"
            placeholder="Vārds"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-brand-gold"
          />
          <input
            type="tel"
            name="telefons"
            placeholder="Telefons"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-brand-gold"
          />
          <button
            type="submit"
            className="w-full py-3 bg-brand-gold text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Nosūtīt pieprasījumu
          </button>
        </form>
      </div>

    </main>
  )
}
