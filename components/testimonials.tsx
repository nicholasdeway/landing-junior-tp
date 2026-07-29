import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Paula Ferreira',
    role: 'CEO — Clínica Estética Bella',
    initials: 'AP',
    color: '#3B82F6',
    stars: 5,
    text: 'Triplicamos o número de consultas em apenas 3 meses. Antes gastávamos muito e tínhamos poucos resultados. Agora cada real investido volta multiplicado.',
    metric: '+312% em agendamentos',
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor — TechStore Online',
    initials: 'CM',
    color: '#8B5CF6',
    stars: 5,
    text: 'O ROI das campanhas superou todas as nossas expectativas. A gestão profissional fez toda a diferença. Recomendo sem hesitar para qualquer empresa.',
    metric: 'ROAS de 8x atingido',
  },
  {
    name: 'Juliana Costa',
    role: 'Fundadora — Escola de Idiomas',
    initials: 'JC',
    color: '#06B6D4',
    stars: 5,
    text: 'Em 60 dias nossa escola saiu de 20 para 80 alunos. A estratégia foi cirúrgica e o acompanhamento é impecável. Comunicação rápida e transparente.',
    metric: '+300% de matrículas',
  },
  {
    name: 'Roberto Lima',
    role: 'Proprietário — Imobiliária Premium',
    initials: 'RL',
    color: '#10B981',
    stars: 5,
    text: 'O custo por lead caiu 60% e a qualidade dos contatos aumentou muito. Agora recebemos leads prontos para fechar negócio. Resultado real e mensurável.',
    metric: '-60% no custo por lead',
  },
  {
    name: 'Fernanda Oliveira',
    role: 'Gerente — E-commerce de Moda',
    initials: 'FO',
    color: '#F59E0B',
    stars: 5,
    text: 'As campanhas de remarketing recuperaram clientes que eu achei que tinham ido embora. O faturamento cresceu 240% em apenas um trimestre de trabalho.',
    metric: '+240% no faturamento',
  },
  {
    name: 'Marcos Souza',
    role: 'Sócio — Escritório de Advocacia',
    initials: 'MS',
    color: '#EC4899',
    stars: 5,
    text: 'Nunca pensei que marketing digital funcionaria para advocacia. Errei feio. Os leads chegam qualificados e a taxa de conversão é altíssima.',
    metric: '+5 novos clientes/mês',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#8B5CF6]/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#3B82F6]/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-medium text-[#3B82F6] uppercase tracking-widest">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            O que dizem nossos clientes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Resultados reais de empresas que decidiram profissionalizar sua presença digital.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Metric badge */}
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full self-start"
                style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
