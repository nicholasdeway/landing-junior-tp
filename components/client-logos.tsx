'use client'

const logos = [
  'TechBrasil',
  'MaxVendas',
  'InovaDigital',
  'ProClínica',
  'MegaStore',
  'FitLife',
  'ConstroPro',
  'EduMais',
]

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-white/[0.06]">
      {/* Título centralizado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm text-primary uppercase tracking-widest font-semibold">
          Empresas que acreditam em estratégias inteligentes
        </p>
      </div>

      {/* Faixa rolante — ocupa 100% da viewport */}
      <div className="relative w-full overflow-hidden">
        {/* Faixa duplicada para loop contínuo */}
        <div
          className="flex items-center w-max"
          style={{ animation: 'logos-scroll 28s linear infinite' }}
        >
          {[...logos, ...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 px-6 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300"
            >
              <span className="text-sm font-semibold text-white/25 hover:text-white/50 transition-colors duration-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
