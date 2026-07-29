import { CheckCircle2, TrendingUp, Target, FileText, MessageSquare, Layers } from 'lucide-react'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Estratégias orientadas por dados',
    description: 'Cada decisão é baseada em métricas reais e análise profunda de dados, eliminando achismos.',
  },
  {
    icon: Target,
    title: 'Otimização constante',
    description: 'Monitoramento diário e ajustes contínuos para garantir que seu investimento renda sempre mais.',
  },
  {
    icon: CheckCircle2,
    title: 'Redução do custo por aquisição',
    description: 'Foco em diminuir o CPA enquanto aumenta o volume e qualidade dos leads gerados.',
  },
  {
    icon: FileText,
    title: 'Relatórios transparentes',
    description: 'Você acompanha tudo em tempo real. Relatórios claros e objetivos sem enrolação.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação rápida',
    description: 'Resposta ágil e suporte próximo para que você nunca fique sem informação sobre suas campanhas.',
  },
  {
    icon: Layers,
    title: 'Escalabilidade',
    description: 'Estratégias pensadas para crescer junto com o seu negócio, do primeiro ao décimo milésimo lead.',
  },
]

export function WhyChooseMe() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F2BB16]/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: title */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <p className="text-sm font-medium text-[#F2BB16] uppercase tracking-widest">
              Diferenciais
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Por que investir em gestão{' '}
              <span className="gradient-text">profissional?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A diferença entre desperdiçar orçamento e escalar suas vendas está na gestão
              estratégica de cada centavo investido.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#121212] bg-[#F2BB16] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
            >
              Quero resultados assim
            </a>

            {/* Abstract visual */}
            <div className="pt-4 relative">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-400 font-semibold">Sem estratégia</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Grande parte do orçamento é desperdiçada em cliques que não convertem.
                  </p>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden mt-1.5">
                    <div className="h-full w-[30%] rounded-full bg-red-500/40" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-400 font-semibold">Com gestão profissional</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Cada real é direcionado com base em dados para gerar mais leads pelo mesmo investimento.
                  </p>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden mt-1.5">
                    <div className="h-full w-[95%] rounded-full bg-[#F2BB16]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="group glass glass-hover rounded-2xl p-5 space-y-3"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F2BB16]/15 border border-[#F2BB16]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <r.icon className="w-4.5 h-4.5 text-[#F2BB16]" />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-snug">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
