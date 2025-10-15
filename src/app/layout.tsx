import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Himanshu Yadav - Co-Founder DCOMM',
  description: 'Co-Founder of DCOMM, building systems that sell themselves. Entrepreneur, speaker, and innovation leader.',
  keywords: ['Himanshu Yadav', 'DCOMM', 'entrepreneur', 'startup', 'technology', 'innovation', 'speaking'],
  authors: [{ name: 'Himanshu Yadav' }],
  creator: 'Himanshu Yadav',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://himanshuyadav.com',
    title: 'Himanshu Yadav - Co-Founder DCOMM',
    description: 'Co-Founder of DCOMM, building systems that sell themselves. Entrepreneur, speaker, and innovation leader.',
    siteName: 'Himanshu Yadav',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu Yadav - Co-Founder DCOMM',
    description: 'Co-Founder of DCOMM, building systems that sell themselves. Entrepreneur, speaker, and innovation leader.',
    creator: '@himanshuyadav',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
