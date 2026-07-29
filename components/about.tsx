import Image from 'next/image'
import { CheckCircle2, Award, Target, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Award, text: 'Certificado Google Ads & Meta Blueprint' },
  { icon: Target, text: 'Mais de 150 campanhas gerenciadas' },
  { icon: TrendingUp, text: '+R$ 5 milhões em verba administrada' },
  { icon: CheckCircle2, text: 'Especialista em geração de leads qualificados' },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Badge de seção */}
        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Quem está por trás dos resultados
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Anel de glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-lg" />
              {/* Borda decorativa */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30" />
              {/* Foto */}
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/junior-santos.jpg"
                  alt="Junior Santos — Gestor de Tráfego Pago"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Badge superior esquerdo */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl px-3 py-2 shadow-xl">
                <p className="text-xs text-muted-foreground leading-none mb-0.5">Experiência</p>
                <p className="text-base font-bold text-foreground leading-none">+5 anos</p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Gestor de Tráfego Pago</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Olá, eu sou o{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Junior Santos
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sou especialista em tráfego pago com mais de 5 anos de experiência ajudando negócios a crescerem de forma previsível e escalável através de anúncios estratégicos no Google, Meta, YouTube e muito mais.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Minha missão é simples: transformar cada real investido em campanhas no maior retorno possível para o seu negócio. Já gerenciei campanhas para mais de 80 clientes em diferentes segmentos — do e-commerce ao mercado local — sempre com foco em dados, resultados e transparência.
            </p>

            {/* Destaques */}
            <ul className="flex flex-col gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground text-sm">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/5511975546458"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Vamos conversar
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-card transition-colors"
              >
                Ver meus serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
