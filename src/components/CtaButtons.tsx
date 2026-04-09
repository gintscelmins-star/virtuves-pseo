'use client'

import { sendGAEvent } from '@next/third-parties/google'

type Props = {
  dizains: string
  materials: string
  telpa: string
  pilseta: string
}

export function CtaHero({ dizains, materials, telpa, pilseta }: Props) {
  return (
    <a
      href="https://iebuvejamasvirtuves.lv"
      onClick={() => sendGAEvent('event', 'cta_click', {
        cta_location: 'hero',
        dizains,
        materials,
        telpa,
        pilseta,
      })}
      className="inline-block border border-brand-gold text-brand-gold px-8 py-3 text-xs tracking-[0.15em] uppercase hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
    >
      Saņemt projektu 24h laikā
    </a>
  )
}

export function CtaSticky({ dizains, materials, telpa, pilseta }: Props) {
  return (
    <a
      href="https://iebuvejamasvirtuves.lv"
      onClick={() => sendGAEvent('event', 'cta_click', {
        cta_location: 'sticky_bar',
        dizains,
        materials,
        telpa,
        pilseta,
      })}
      className="ml-auto bg-brand-gold text-brand-dark text-xs tracking-[0.12em] uppercase font-inter font-medium px-6 py-2 hover:bg-white transition-colors duration-200 whitespace-nowrap"
    >
      Saņemt projektu 24h →
    </a>
  )
}

export function CtaFloating({ dizains, materials, telpa, pilseta }: Props) {
  return (
    <a
      href="https://iebuvejamasvirtuves.lv"
      onClick={() => sendGAEvent('event', 'cta_click', {
        cta_location: 'floating_button',
        dizains,
        materials,
        telpa,
        pilseta,
      })}
      className="fixed bottom-6 right-6 z-50 bg-brand-gold text-brand-dark text-xs tracking-[0.12em] uppercase font-inter font-medium px-5 py-3 shadow-2xl hover:bg-brand-dark hover:text-brand-gold border border-brand-gold transition-all duration-300 flex items-center gap-2"
      aria-label="Saņemt bezmaksas konsultāciju"
    >
      <span>Konsultācija</span>
      <span className="text-base leading-none">→</span>
    </a>
  )
}

export function CtaForm({ dizains, materials, telpa, pilseta }: Props) {
  return (
    <form
      action="https://formspree.io/f/mojkjwrp"
      method="POST"
      className="max-w-sm mx-auto space-y-3"
      onSubmit={() => sendGAEvent('event', 'form_submit', {
        dizains,
        materials,
        telpa,
        pilseta,
      })}
    >
      <input type="hidden" name="_subject" value={`Pieprasījums: ${dizains} ${materials} ${telpa} ${pilseta}`} />
      <input type="hidden" name="lapas_konteksts" value={`${dizains} / ${materials} / ${telpa} / ${pilseta}`} />
      <input
        type="text" name="vards" placeholder="Vārds" required
        className="w-full px-5 py-3 bg-transparent border border-white/20 text-white placeholder-white/30 text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors"
      />
      <input
        type="tel" name="telefons" placeholder="Telefons" required
        className="w-full px-5 py-3 bg-transparent border border-white/20 text-white placeholder-white/30 text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors"
      />
      <button
        type="submit"
        className="w-full py-3 bg-brand-gold text-brand-dark text-xs tracking-[0.15em] uppercase font-inter font-medium hover:bg-white transition-colors duration-300"
      >
        Nosūtīt pieprasījumu
      </button>
    </form>
  )
}
