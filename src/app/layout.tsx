import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Template Next',
  description: 'A simple template for Next.js',
}

const mulish = Mulish({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-mulish',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${mulish.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">{children}</body>
    </html>
  )
}
