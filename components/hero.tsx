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
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F2BB16]/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#C99A0E]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#F2BB16]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F2BB16]/30 bg-[#F2BB16]/10 text-[#F2BB16] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2BB16] animate-pulse" />
              Especialista em Tráfego Pago
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
              Seus anúncios estão gerando clientes ou só gastando verba?
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Gestão de Google Ads e Meta Ads focada em resultado, não em achismo.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-[#121212] bg-[#F2BB16] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/25"
              >
                Quero mais clientes
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#compromisso"
                className="inline-flex items-center gap-1.5 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1"
              >
                Ver compromisso
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>

          {/* Right: dashboard mockup */}
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
