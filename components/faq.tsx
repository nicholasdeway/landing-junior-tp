'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Quanto preciso investir?',
    answer:
      'O investimento mínimo recomendado varia conforme o objetivo e segmento. Em geral, trabalhamos a partir de R$ 1.500/mês em verba de anúncios. Durante o diagnóstico gratuito, analisamos seu negócio e apresentamos uma proposta personalizada com o orçamento ideal para seus objetivos.',
  },
  {
    question: 'Em quanto tempo aparecem os resultados?',
    answer:
      'Os primeiros resultados geralmente aparecem nas primeiras 2 semanas. No entanto, o período ideal para avaliar o desempenho real é entre 60 e 90 dias, quando as campanhas já foram otimizadas com dados suficientes. Cada negócio tem sua curva de aprendizado.',
  },
  {
    question: 'Vocês criam as campanhas?',
    answer:
      'Sim, cuidamos de todo o processo: estratégia, configuração, criação de textos e orientações de criativos, segmentação, acompanhamento e otimização contínua. Você não precisa entender de anúncios — esse é o nosso trabalho.',
  },
  {
    question: 'Vocês fazem Landing Pages?',
    answer:
      'Sim! Oferecemos criação e otimização de landing pages como parte do serviço ou de forma avulsa. Uma landing page bem estruturada pode dobrar sua taxa de conversão, e por isso fazemos questão de entregar páginas alinhadas com cada campanha.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Trabalhamos com contratos mensais renováveis. Não há fidelização obrigatória longa — acreditamos que você fica porque os resultados falam por si. Pedimos apenas um aviso prévio de 30 dias para organizar a transição sem prejuízo às campanhas.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm font-medium text-[#8B5CF6] uppercase tracking-widest">
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
                  ? 'border-[#3B82F6]/30 bg-[#3B82F6]/5'
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
                    open === i ? 'bg-[#3B82F6]/20 text-[#3B82F6]' : 'bg-white/[0.06] text-muted-foreground'
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
