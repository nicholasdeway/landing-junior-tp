'use client'

import React from 'react'

const tools = [
  {
    name: 'Google Ads',
    description: 'Anúncios de pesquisa, display e YouTube para capturar intenção de compra.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#FBBC05" d="M35.6 2c-3.1 0-5.9 1.8-7.2 4.6L16 28.9l-4.8-8.3c-1.3-2.3-3.8-3.7-6.5-3.7-4.1 0-7.5 3.4-7.5 7.5 0 2.2 1 4.2 2.7 5.5l14 24.2c1.3 2.3 3.8 3.7 6.5 3.7 4.1 0 7.5-3.4 7.5-7.5 0-1.2-.3-2.4-.9-3.4l-3-5.2 10.3-17.8c1.6 1.8 4 3 6.6 3 4.9 0 8.9-4 8.9-8.9 0-4.9-4-8.9-8.9-8.9z"/>
        <path fill="#4285F4" d="M20.2 44c1.3 2.3 3.8 3.7 6.5 3.7 4.1 0 7.5-3.4 7.5-7.5 0-1.2-.3-2.4-.9-3.4l-13.1-22.7-8.2 14.2 8.2 15.7z"/>
      </svg>
    ),
    color: 'rgba(66, 133, 244, 0.15)',
    borderColor: 'rgba(66, 133, 244, 0.3)'
  },
  {
    name: 'Meta Ads Manager',
    description: 'Campanhas no Instagram e Facebook para gerar leads e vendas qualificadas.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#0064E0" d="M16.712 5.0c-1.425 0-2.88.706-3.93 1.956C11.733 5.706 10.278 5.0 8.852 5.0c-2.923 0-5.32 2.378-5.32 5.276 0 3.754 3.722 7.026 8.01 10.428a.566.566 0 00.708 0c4.288-3.402 8.01-6.674 8.01-10.428C22.032 7.378 19.635 5.0 16.712 5.0zm-7.86 9.176c-1.63 0-2.96-1.324-2.96-2.949 0-1.626 1.33-2.95 2.96-2.95 1.042 0 2.016 0.548 2.548 1.439-.81 1.026-1.714 2.083-2.548 3.01v-1.5z"/>
      </svg>
    ),
    color: 'rgba(0, 100, 224, 0.15)',
    borderColor: 'rgba(0, 100, 224, 0.3)'
  },
  {
    name: 'Google Analytics 4',
    description: 'Mensuração precisa de dados para otimização contínua de campanhas.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M6 19.5h1.5v-11H6v11zm4.5 0H12v-14H10.5v14zm4.5 0H16v-8h-1.5v8zm4.5 0H21V4.5h-1.5V19.5z" fill="#FFC107" />
        <path d="M4.5 21h15v-1.5h-15V21z" fill="#FFA000" />
      </svg>
    ),
    color: 'rgba(255, 160, 0, 0.15)',
    borderColor: 'rgba(255, 160, 0, 0.3)'
  },
  {
    name: 'WhatsApp Business',
    description: 'Integração direta com anúncios para conversas e fechamentos rápidos.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#25D366]">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.094 1.504 5.824L.057 23.1a.5.5 0 0 0 .624.624l5.277-1.447C7.638 23.38 9.749 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.019 0-3.898-.574-5.489-1.565l-.393-.244-4.077 1.117 1.117-4.077-.244-.393A9.937 9.937 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    color: 'rgba(37, 211, 102, 0.12)',
    borderColor: 'rgba(37, 211, 102, 0.3)'
  }
]

export function ClientLogos() {
  return (
    <section className="py-20 border-y border-white/[0.06] relative overflow-hidden bg-[#1A1A1A]">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title and subtitle */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">
            Ferramentas e plataformas
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Tecnologia de ponta para os seus anúncios
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Estratégias executadas com as melhores ferramentas e tecnologias de marketing do mercado.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              style={{
                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.borderColor
                e.currentTarget.style.backgroundColor = t.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
              }}
            >
              {/* Logo wrapper */}
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {t.icon}
              </div>

              <h4 className="text-base font-semibold text-foreground mb-2">
                {t.name}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
