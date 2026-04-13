import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="bg-brand-light border-b border-brand-dark/8">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo → galvenā lapa */}
        <a
          href="https://iebuvejamasvirtuves.lv"
          className="font-cormorant text-xl font-medium tracking-wide text-brand-dark hover:text-brand-gold transition-colors"
          aria-label="Uz galveno lapu"
        >
          Iebūvējamās Virtuves
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-5 text-xs font-inter text-brand-dark/60">
          <a href="https://iebuvejamasvirtuves.lv" className="hover:text-brand-dark transition-colors">
            Sākums
          </a>
          <a href="https://iebuvejamasvirtuves.lv#galerija" className="hover:text-brand-dark transition-colors hidden sm:block">
            Galerija
          </a>
          <a href="https://iebuvejamasvirtuves.lv#cenas" className="hover:text-brand-dark transition-colors hidden sm:block">
            Cenas
          </a>
          <a
            href="https://iebuvejamasvirtuves.lv#kontakti"
            className="bg-brand-dark text-white text-xs px-4 py-2 hover:bg-brand-gold hover:text-brand-dark transition-colors"
          >
            Sazināties
          </a>
        </nav>
      </div>
    </header>
  )
}
