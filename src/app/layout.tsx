import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: {
    default: 'ゆるめも情報局',
    template: '%s | ゆるめも情報局',
  },
  description: 'ゆるっとした情報をゆるく発信するブログ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
