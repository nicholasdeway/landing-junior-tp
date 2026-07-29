'use client'

import { Search, Megaphone, RefreshCw, Layout, BarChart2, Gauge } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Google Ads',
    description: 'Campanhas focadas em gerar vendas e leads qualificados nos momentos certos da jornada de compra.',
    color: '#F2BB16',
    bg: 'rgba(242,187,22,0.08)',
    border: 'rgba(242,187,22,0.25)',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads',
    description: 'Anúncios para Instagram e Facebook com foco em conversão, alcançando o público ideal para seu negócio.',
    color: '#E0A800',
    bg: 'rgba(224,168,0,0.08)',
    border: 'rgba(224,168,0,0.25)',
  },
  {
    icon: RefreshCw,
    title: 'Remarketing',
    description: 'Recupere visitantes que não converteram e aumente suas vendas com estratégias inteligentes de reativação.',
    color: '#F5CC45',
    bg: 'rgba(245,204,69,0.08)',
    border: 'rgba(245,204,69,0.25)',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'Páginas otimizadas para converter mais, alinhadas com seus anúncios para maximizar o ROI.',
    color: '#C99A0E',
    bg: 'rgba(201,154,14,0.08)',
    border: 'rgba(201,154,14,0.25)',
  },
  {
    icon: BarChart2,
    title: 'Consultoria',
    description: 'Análise completa da sua estratégia digital com recomendações práticas para escalar seus resultados.',
    color: '#F2BB16',
    bg: 'rgba(242,187,22,0.08)',
    border: 'rgba(242,187,22,0.25)',
  },
  {
    icon: Gauge,
    title: 'Otimização Contínua',
    description: 'Monitoramento diário das campanhas com ajustes constantes para garantir máxima performance.',
    color: '#8A6A00',
    bg: 'rgba(138,106,0,0.08)',
    border: 'rgba(138,106,0,0.25)',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-white/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-medium text-[#F2BB16] uppercase tracking-widest">
            Soluções
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Como posso ajudar
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Estratégias completas de tráfego pago para fazer seu negócio crescer de forma escalável e previsível.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: s.bg,
                borderColor: 'rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = s.border
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <s.icon className="w-5 h-5" style={{ color: s.color }} />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>

              {/* Hover arrow */}
              <a
                href="#contato"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:underline underline-offset-2"
                style={{ color: s.color }}
              >
                Saiba mais
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
