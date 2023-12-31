import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Messenger App',
  description: 'Generated by MohamedAli Aissaoui & Bilel Salems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} w-full h-screen overflow-hidden`} >
          {children}
        </body>
      </html>
    </Providers>
  )
}
