import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ClientLogos } from '@/components/client-logos'
import { Services } from '@/components/services'
import { WhyChooseMe } from '@/components/why-choose-me'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { ScrollDots } from '@/components/scroll-dots'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <ClientLogos />
      <Services />
      <WhyChooseMe />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <ScrollDots />
    </main>
  )
}
