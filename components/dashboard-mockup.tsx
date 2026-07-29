'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react'

const bars = [45, 62, 48, 78, 65, 90, 85, 95, 72, 88, 76, 100]
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

const metrics = [
  { label: 'Leads', value: '+1.847', icon: Users, color: '#F2BB16', bg: 'rgba(242,187,22,0.12)' },
  { label: 'ROI', value: '340%', icon: TrendingUp, color: '#E0A800', bg: 'rgba(224,168,0,0.12)' },
  { label: 'Conversões', value: '8.3%', icon: Target, color: '#F5CC45', bg: 'rgba(245,204,69,0.12)' },
  { label: 'Investimento', value: 'R$ 12k', icon: DollarSign, color: '#C99A0E', bg: 'rgba(201,154,14,0.12)' },
]

const platforms = [
  { name: 'Google Ads', pct: 58, color: '#F2BB16' },
  { name: 'Meta Ads', pct: 42, color: '#C99A0E' },
]

export function DashboardMockup() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative w-full max-w-lg mx-auto animate-float"
    >
      {/* Glow blobs behind the card */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F2BB16]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#C99A0E]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main card */}
      <div className="relative glass rounded-2xl p-5 border border-white/10 shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-muted-foreground">Performance</p>
            <p className="text-sm font-semibold text-foreground">Dashboard de Resultados</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ao vivo
          </span>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-3 border border-white/[0.06] transition-all duration-300 hover:border-white/15"
              style={{ background: m.bg }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <m.icon className="w-3.5 h-3.5" style={{ color: m.color }} />
                <span className="text-xs text-muted-foreground">{m.label}</span>
              </div>
              <p className="text-lg font-bold text-foreground">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-3">Crescimento de Leads (anual)</p>
          <div className="flex items-end gap-1 h-20">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all duration-1000 ease-out"
                style={{
                  height: animated ? `${h}%` : '0%',
                  background:
                    i === bars.length - 1
                      ? '#F2BB16'
                      : i >= bars.length - 3
                      ? 'rgba(242,187,22,0.5)'
                      : 'rgba(242,187,22,0.2)',
                  transitionDelay: `${i * 60}ms`,
                }}
                title={`${months[i]}: ${h}%`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px] text-muted-foreground">{months[0]}</span>
            <span className="text-[10px] text-muted-foreground">{months[11]}</span>
          </div>
        </div>

        {/* Platforms */}
        <div className="space-y-2">
          {platforms.map((p) => (
            <div key={p.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">{p.name}</span>
                <span className="text-xs font-medium text-foreground">{p.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${p.pct}%` : '0%',
                    background: `linear-gradient(to right, ${p.color}, ${p.color}99)`,
                    transitionDelay: '800ms',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 border border-white/10 shadow-lg">
        <p className="text-xs text-muted-foreground">Custo por lead</p>
        <p className="text-sm font-bold gradient-text">-47% este mês</p>
      </div>

      {/* Illustrative warning */}
      <p className="text-[10px] text-muted-foreground/40 mt-4 text-center block w-full select-none">
        *Exemplo ilustrativo de dashboard
      </p>
    </div>
  )
}
