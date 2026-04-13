export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white/40 font-inter">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Uzņēmums */}
          <div>
            <a
              href="https://iebuvejamasvirtuves.lv"
              className="font-cormorant text-white text-xl font-medium block mb-3 hover:text-brand-gold transition-colors"
            >
              Iebūvējamās Virtuves
            </a>
            <p className="text-xs leading-relaxed">
              Individuāli iebūvējamās virtuves Latvijā.
              Ražojam un montējam pēc jūsu pasūtījuma.
            </p>
          </div>

          {/* Saites */}
          <div>
            <p className="text-white/20 text-xs uppercase tracking-widest mb-3">Lapas</p>
            <ul className="space-y-2 text-xs">
              <li><a href="https://iebuvejamasvirtuves.lv" className="hover:text-white transition-colors">Sākumlapa</a></li>
              <li><a href="https://iebuvejamasvirtuves.lv#par-mums" className="hover:text-white transition-colors">Par mums</a></li>
              <li><a href="https://iebuvejamasvirtuves.lv#galerija" className="hover:text-white transition-colors">Galerija</a></li>
              <li><a href="https://iebuvejamasvirtuves.lv#cenas" className="hover:text-white transition-colors">Cenas</a></li>
              <li><a href="https://iebuvejamasvirtuves.lv#kontakti" className="hover:text-white transition-colors">Kontakti</a></li>
            </ul>
          </div>

          {/* Kontakti */}
          <div>
            <p className="text-white/20 text-xs uppercase tracking-widest mb-3">Kontakti</p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="tel:+37120000000" className="hover:text-white transition-colors">+371 20 000 000</a>
              </li>
              <li>
                <a href="mailto:info@iebuvejamasvirtuves.lv" className="hover:text-white transition-colors">info@iebuvejamasvirtuves.lv</a>
              </li>
              <li>
                <a href="https://www.facebook.com/iebuvejamasvirtuves" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/iebuvejamasvirtuves" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Apakšjosla */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <p>© {currentYear} Iebūvējamās Virtuves. Visas tiesības aizsargātas.</p>
          <div className="flex gap-4">
            <a href="https://iebuvejamasvirtuves.lv/privatuma-politika" className="hover:text-white transition-colors">Privātuma politika</a>
            <a href="https://iebuvejamasvirtuves.lv/sikdatnes" className="hover:text-white transition-colors">Sīkdatnes</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
