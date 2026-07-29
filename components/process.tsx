import { ClipboardList, Map, Rocket, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Diagnóstico',
    description:
      'Entendimento completo do seu negócio, público-alvo, concorrência e objetivos. Mapeamos onde você está e onde quer chegar.',
    color: '#F2BB16',
  },
  {
    number: '02',
    icon: Map,
    title: 'Planejamento',
    description:
      'Definição da estratégia ideal com escolha de plataformas, segmentações, orçamento e metas mensuráveis.',
    color: '#E0A800',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execução',
    description:
      'Criação, configuração e ativação das campanhas com copy persuasiva, criativos otimizados e tracking completo.',
    color: '#F5CC45',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Otimização',
    description:
      'Acompanhamento diário com ajustes de lances, segmentações, criativos e orçamento para maximizar resultados continuamente.',
    color: '#C99A0E',
  },
]

export function Process() {
  return (
    <section id="processo" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-medium text-[#F2BB16] uppercase tracking-widest">
            Metodologia
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Como funciona
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Um processo estruturado e comprovado para transformar seu investimento em resultados reais e escaláveis.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="group relative flex flex-col items-center text-center">
              {/* Icon circle */}
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${step.color}15`,
                    borderColor: `${step.color}30`,
                    boxShadow: `0 0 24px ${step.color}15`,
                  }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
                {/* Step number badge */}
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-[#121212]"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector arrow (mobile) */}
              {i < steps.length - 1 && (
                <div className="lg:hidden mt-6 text-white/20">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA below process */}
        <div className="mt-16 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#121212] bg-[#F2BB16] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
          >
            Falar com o gestor agora
          </a>
        </div>
      </div>
    </section>
  )
}
