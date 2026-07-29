'use client'

import { ArrowRight, Play } from 'lucide-react'
import { DashboardMockup } from './dashboard-mockup'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#3B82F6]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              Especialista em Tráfego Pago
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
              Transforme investimento em anúncios em{' '}
              <span className="gradient-text">crescimento real</span> para sua empresa.
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crio estratégias de tráfego pago focadas em gerar mais clientes, aumentar
              vendas e escalar negócios através do Google Ads, Meta Ads e campanhas
              inteligentes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Quero mais clientes
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-foreground border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current" />
                Ver resultados
              </a>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-6 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">+150</p>
                <p className="text-xs text-muted-foreground">Campanhas</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">+300%</p>
                <p className="text-xs text-muted-foreground">Crescimento médio</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">95%</p>
                <p className="text-xs text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
