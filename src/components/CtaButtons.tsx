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
      href="#forma"
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
      href="#forma"
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
      href="#forma"
      onClick={() => sendGAEvent('event', 'cta_click', {
        cta_location: 'floating_button',
        dizains,
        materials,
        telpa,
        pilseta,
      })}
      className="fixed bottom-6 right-6 z-50 bg-brand-gold text-brand-dark text-xs tracking-[0.12em] uppercase font-inter font-medium px-5 py-3 shadow-2xl hover:bg-brand-dark hover:text-brand-gold border border-brand-gold transition-all duration-300 flex items-center gap-2"
      aria-label="Saņemt savu sapņu virtuves projektu 24h laikā"
    >
      <span>Saņemt savu sapņu virtuves projektu 24h laikā</span>
      <span className="text-base leading-none">→</span>
    </a>
  )
}

export function CtaForm({ dizains, materials, telpa, pilseta }: Props) {
  return (
    <form
      id="forma"
      action="https://formspree.io/f/mojkjwrp"
      method="POST"
      className="max-w-md mx-auto space-y-3 text-left"
      onSubmit={() => sendGAEvent('event', 'form_submit', {
        dizains,
        materials,
        telpa,
        pilseta,
      })}
    >
      <input type="hidden" name="_subject" value={`Pieprasījums: ${dizains} ${materials} ${telpa} ${pilseta}`} />
      <input type="hidden" name="lapas_konteksts" value={`${dizains} / ${materials} / ${telpa} / ${pilseta}`} />

      {/* Rinda 1: Vārds + Uzvārds */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-white/50 text-xs font-inter uppercase tracking-widest mb-1">Vārds *</label>
          <input
            type="text" name="vards" placeholder="Jānis" required
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/20 text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-white/50 text-xs font-inter uppercase tracking-widest mb-1">Uzvārds</label>
          <input
            type="text" name="uzvards" placeholder="Bērziņš"
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/20 text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
      </div>

      {/* Rinda 2: Tālrunis + E-pasts */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-white/50 text-xs font-inter uppercase tracking-widest mb-1">Tālrunis *</label>
          <input
            type="tel" name="talrunis" placeholder="+371 2X XXX XXX" required
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/20 text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-white/50 text-xs font-inter uppercase tracking-widest mb-1">E-pasts</label>
          <input
            type="email" name="epasts" placeholder="janis@epasts.lv"
            className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/20 text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
      </div>

      {/* Rinda 3: Pilsēta + Virtuves platība */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-white/50 text-xs font-inter uppercase tracking-widest mb-1">Pilsēta</label>
          <select
            name="pilseta_forma"
            className="w-full px-4 py-3 bg-brand-dark border border-white/20 text-white text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors appearance-none"
          >
            <option value="">Izvēlēties...</option>
            <option value="Rīga">Rīga</option>
            <option value="Jūrmala">Jūrmala</option>
            <option value="Daugavpils">Daugavpils</option>
            <option value="Jelgava">Jelgava</option>
            <option value="Jēkabpils">Jēkabpils</option>
            <option value="Valmiera">Valmiera</option>
            <option value="Ventspils">Ventspils</option>
            <option value="Liepāja">Liepāja</option>
            <option value="Rēzekne">Rēzekne</option>
            <option value="Ogre">Ogre</option>
            <option value="Cita">Cita</option>
          </select>
        </div>
        <div>
          <label className="block text-white/50 text-xs font-inter uppercase tracking-widest mb-1">Virtuves platība</label>
          <select
            name="platiba"
            className="w-full px-4 py-3 bg-brand-dark border border-white/20 text-white text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors appearance-none"
          >
            <option value="">Izvēlēties...</option>
            <option value="līdz 6 m²">Līdz 6 m²</option>
            <option value="6–9 m²">6–9 m²</option>
            <option value="9–12 m²">9–12 m²</option>
            <option value="12–20 m²">12–20 m²</option>
            <option value="virs 20 m²">Virs 20 m²</option>
          </select>
        </div>
      </div>

      {/* Ziņojums */}
      <div>
        <label className="block text-white/50 text-xs font-inter uppercase tracking-widest mb-1">Ziņojums</label>
        <textarea
          name="zinojums"
          placeholder="Pastāstiet par savu projektu — stils, materiāls, vēlamais termiņš..."
          rows={3}
          className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/20 text-sm font-inter focus:outline-none focus:border-brand-gold transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-brand-gold text-brand-dark text-xs tracking-[0.15em] uppercase font-inter font-medium hover:bg-white transition-colors duration-300 mt-2"
      >
        Nosūtīt pieprasījumu →
      </button>

      <p className="text-white/30 text-xs font-inter text-center pt-1">
        Sazināsimies 1 darba dienas laikā. Bez saistībām.
      </p>
    </form>
  )
}
