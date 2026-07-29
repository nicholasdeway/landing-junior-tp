'use client'

import { Search, Megaphone, RefreshCw, Layout, BarChart2, Gauge } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Google Ads',
    description: 'Campanhas focadas em gerar vendas e leads qualificados nos momentos certos da jornada de compra.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads',
    description: 'Anúncios para Instagram e Facebook com foco em conversão, alcançando o público ideal para seu negócio.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: RefreshCw,
    title: 'Remarketing',
    description: 'Recupere visitantes que não converteram e aumente suas vendas com estratégias inteligentes de reativação.',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'Páginas otimizadas para converter mais, alinhadas com seus anúncios para maximizar o ROI.',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
  {
    icon: BarChart2,
    title: 'Consultoria',
    description: 'Análise completa da sua estratégia digital com recomendações práticas para escalar seus resultados.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: Gauge,
    title: 'Otimização Contínua',
    description: 'Monitoramento diário das campanhas com ajustes constantes para garantir máxima performance.',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-white/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-medium text-[#3B82F6] uppercase tracking-widest">
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
