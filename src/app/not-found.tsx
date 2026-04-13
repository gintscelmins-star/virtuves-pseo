import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-brand-light min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="block w-12 h-px bg-brand-gold mx-auto mb-10"></span>

        <p className="font-inter text-xs uppercase tracking-[0.2em] text-brand-dark/40 mb-4">
          Kļūda 404
        </p>

        <h1 className="font-cormorant text-5xl md:text-6xl font-light text-brand-dark mb-4 leading-tight">
          Lapa nav atrasta
        </h1>

        <p className="font-inter text-sm text-brand-dark/60 leading-relaxed mb-10">
          Šāda lapa neeksistē vai ir pārcelta.
          Atgriezieties uz sākumlapu vai apskatiet mūsu virtuves katalogu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://iebuvejamasvirtuves.lv"
            className="bg-brand-dark text-white font-inter text-sm px-8 py-3 hover:bg-brand-gold hover:text-brand-dark transition-colors w-full sm:w-auto"
          >
            Uz sākumlapu
          </a>
          <a
            href="https://pseo.iebuvejamasvirtuves.lv/virtuves/moderna/mdf/jaunbuve/riga"
            className="border border-brand-dark/20 text-brand-dark font-inter text-sm px-8 py-3 hover:border-brand-gold hover:text-brand-gold transition-colors w-full sm:w-auto"
          >
            Skatīt virtuves
          </a>
        </div>

        <span className="block w-12 h-px bg-brand-gold mx-auto mt-10"></span>
      </div>
    </main>
  )
}
