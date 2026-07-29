'use client'

import { Eye, MessageSquare, BarChart3, Users } from 'lucide-react'

const promises = [
  {
    title: 'Transparência total',
    description: 'Você acompanha cada resultado das campanhas em tempo real, com clareza sobre onde cada centavo está sendo investido.',
    icon: Eye,
    color: '#F2BB16',
    bg: 'rgba(242, 187, 22, 0.05)',
    border: 'rgba(242, 187, 22, 0.25)'
  },
  {
    title: 'Comunicação rápida',
    description: 'Resposta ágil e contato facilitado sempre que precisar. Nada de ficar dias esperando por um retorno sobre suas campanhas.',
    icon: MessageSquare,
    color: '#E0A800',
    bg: 'rgba(224, 168, 0, 0.05)',
    border: 'rgba(224, 168, 0, 0.25)'
  },
  {
    title: 'Estratégia baseada em dados',
    description: 'Decisões e otimizações pautadas exclusivamente em números e comportamento do público, eliminando qualquer tipo de achismo.',
    icon: BarChart3,
    color: '#F5CC45',
    bg: 'rgba(245, 204, 69, 0.05)',
    border: 'rgba(245, 204, 69, 0.25)'
  },
  {
    title: 'Acompanhamento próximo',
    description: 'Atenção redobrada e acompanhamento diário ativo, principalmente nos primeiros meses de parceria para tracionar os resultados.',
    icon: Users,
    color: '#C99A0E',
    bg: 'rgba(201, 154, 14, 0.05)',
    border: 'rgba(201, 154, 14, 0.25)'
  }
]

export function Testimonials() {
  return (
    <section id="compromisso" className="py-24 relative overflow-hidden bg-[#1A1A1A]">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#C99A0E]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#F2BB16]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-medium text-[#F2BB16] uppercase tracking-widest">
            Compromisso
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Meu compromisso com você
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            4 promessas reais para guiar nossa parceria e profissionalizar a presença digital do seu negócio.
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              style={{
                background: p.bg,
                borderColor: 'rgba(255,255,255,0.06)',
                boxShadow: '0 4px 20px -2px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = p.border
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              <div>
                {/* Icon Wrapper */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: p.bg, border: `1px solid ${p.border}` }}
                >
                  <p.icon className="w-5 h-5" style={{ color: p.color }} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Decorative accent corner line */}
              <div
                className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: p.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
