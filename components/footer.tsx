
const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const socials = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5511975546458',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.094 1.504 5.824L.057 23.1a.5.5 0 0 0 .624.624l5.277-1.447C7.638 23.38 9.749 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.019 0-3.898-.574-5.489-1.565l-.393-.244-4.077 1.117 1.117-4.077-.244-.393A9.937 9.937 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/juniorsantos.ads/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
            <a href="#inicio" className="group block">
              <span className="text-white font-bold text-lg tracking-wider uppercase transition-opacity hover:opacity-85 duration-200">
                Junior Santos
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
              Especialista em tráfego pago. Estratégias que transformam investimento em crescimento real para empresas.
            </p>
            {/* Social links */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Wrapper (Navigation & Contact side-by-side on mobile, separate columns on desktop) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {/* Navigation */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-5">
                Navegação
              </p>
              <nav className="flex flex-col items-center md:items-start gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-5">
                Contato
              </p>
              <div className="space-y-3 flex flex-col items-center md:items-start">
                <a
                  href="https://wa.me/5511975546458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/juniorsantos.ads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 Junior Santos. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-muted-foreground/60">
              Desenvolvido por{' '}
              <a
                href="https://nicholasdeway.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors duration-200 underline underline-offset-2"
              >
                Nicholas Deway
              </a>
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Gestor de Tráfego Pago · Google Ads · Meta Ads
          </p>
        </div>
      </div>
    </footer>
  )
}
