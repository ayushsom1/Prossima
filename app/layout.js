'use client'
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNavbar } from '@/components/FloatingNavbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'
import { Poppins } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  className: 'font-poppins',
  style: ['normal', 'italic'],  
  fallback: ['sans-serif'], 
  preload: false, 
  adjustFontFallback: false,  
  
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className={`bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <FloatingNavbar />
          <main className="min-h-screen px-4 py-16 md:px-6 lg:px-8 max-w-6xl mx-auto">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}