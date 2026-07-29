import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gestor de Tráfego Pago | Especialista em Google Ads & Meta Ads',
  description:
    'Transforme seu investimento em anúncios em crescimento real. Estratégias de tráfego pago focadas em gerar mais clientes, aumentar vendas e escalar negócios.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
