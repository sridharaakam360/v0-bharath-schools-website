import React from "react"
import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const _roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Bharath Schools – CBSE | Excellence in Education',
  description: 'Bharath Schools CBSE - Empowering Students with Excellence For All | From All. Providing quality education through innovation, discipline and excellence.',
  keywords: ['CBSE school', 'Bharath Schools', 'education', 'holistic education', 'academic excellence'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
