'use client'

import { useState, useEffect } from 'react'

const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre Mim' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'processo', label: 'Processo' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
]

export function ScrollDots() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on mount to set initial active section
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center py-4">
      {/* Connecting Vertical Line */}
      <div className="absolute top-4 bottom-4 w-px bg-white/10 pointer-events-none" />

      {/* Dots List */}
      <div className="flex flex-col gap-6 relative">
        {sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => handleDotClick(section.id)}
              className="relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none group cursor-pointer"
              aria-label={`Ir para a seção ${section.label}`}
            >
              {/* Tooltip Label */}
              <span className="absolute right-10 px-2.5 py-1.5 rounded bg-black/90 border border-white/10 text-[10px] text-white font-medium uppercase tracking-wider opacity-0 pointer-events-none transition-all duration-300 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
                {section.label}
              </span>

              {/* Dot Shape */}
              {isActive ? (
                // Active Dot with Outer Circle
                <span className="relative flex items-center justify-center w-6 h-6">
                  {/* Outer circle */}
                  <span className="absolute inset-0 rounded-full border border-white animate-pulse-slow" />
                  {/* Inner dot */}
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
              ) : (
                // Inactive Dot
                <span className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300 group-hover:bg-white/80 group-hover:scale-125" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
