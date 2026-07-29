'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    prefix: '+',
    value: 150,
    suffix: '',
    label: 'Campanhas Gerenciadas',
    description: 'Estratégias entregues com sucesso',
    color: '#3B82F6',
  },
  {
    prefix: '+',
    value: 5,
    suffix: ' Mi',
    label: 'Investidos em anúncios',
    description: 'Gerenciados com máxima eficiência',
    color: '#8B5CF6',
  },
  {
    prefix: '+',
    value: 300,
    suffix: '%',
    label: 'Média de crescimento',
    description: 'Em faturamento dos clientes',
    color: '#06B6D4',
  },
  {
    prefix: '',
    value: 95,
    suffix: '%',
    label: 'Clientes satisfeitos',
    description: 'Aprovação e renovação contínua',
    color: '#10B981',
  },
]

function CountUp({ to, duration = 2000 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = to / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, to, duration])

  return <span ref={ref}>{count}</span>
}

export function Numbers() {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#3B82F6]/8 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#8B5CF6]/8 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm font-medium text-[#3B82F6] uppercase tracking-widest">Números</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Resultados que falam por si
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative glass glass-hover rounded-2xl p-7 text-center overflow-hidden"
            >
              {/* Glow behind number */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: s.color }}
              />

              <div className="relative z-10">
                <p
                  className="text-5xl font-bold mb-1 tabular-nums"
                  style={{ color: s.color }}
                >
                  {s.prefix}
                  <CountUp to={s.value} />
                  {s.suffix}
                </p>
                <p className="text-base font-semibold text-foreground mb-1.5">{s.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
