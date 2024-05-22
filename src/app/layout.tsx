import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const inter = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dra. Maria',
  description:
    'Desfrute de soluções jurídicas confiáveis com nosso escritório de advocacia online. Especializados em diversas áreas, oferecemos consultoria personalizada e eficaz. Agende uma consulta hoje mesmo para resolver seus problemas legais com profissionalismo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
