'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Quanto preciso investir?',
    answer:
      'O investimento mínimo recomendado varia conforme o objetivo e segmento. Em geral, trabalho a partir de R$ 1.500/mês em verba de anúncios. Durante nossa primeira conversa, entendo seu negócio e apresento uma proposta personalizada com o orçamento ideal para seus objetivos.',
  },
  {
    question: 'Em quanto tempo aparecem os resultados?',
    answer:
      'Os primeiros resultados geralmente aparecem nas primeiras 2 semanas. No entanto, o período ideal para avaliar o desempenho real é entre 60 e 90 dias, quando as campanhas já foram otimizadas com dados suficientes. Cada negócio tem sua curva de aprendizado.',
  },
  {
    question: 'Você cria as campanhas?',
    answer:
      'Sim, cuido de todo o processo: estratégia, configuração, criação de textos e orientações de criativos, segmentação, acompanhamento e otimização contínua. Você não precisa entender de anúncios, esse é o meu trabalho.',
  },
  {
    question: 'Você faz Landing Pages?',
    answer:
      'Sim! Ofereço criação e otimização de landing pages como parte do serviço ou de forma avulsa. Uma landing page bem estruturada pode dobrar sua taxa de conversão, e por isso faço questão de entregar páginas alinhadas com cada campanha.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Trabalho com contratos mensais renováveis. Não há fidelização obrigatória longa: acredito que você fica porque os resultados falam por si. Peço apenas um aviso prévio de 30 dias para organizar a transição sem prejuízo às campanhas.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#F2BB16]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm font-medium text-[#F2BB16] uppercase tracking-widest">
            Dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Respostas diretas para as dúvidas mais comuns antes de começarmos.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'border-[#F2BB16]/30 bg-[#F2BB16]/5'
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-white/15'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                aria-expanded={open === i}
              >
                <span className={`text-base font-medium transition-colors duration-200 ${open === i ? 'text-foreground' : 'text-foreground/80'}`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? 'bg-[#F2BB16]/20 text-[#F2BB16]' : 'bg-white/[0.06] text-muted-foreground'
                  }`}
                >
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
