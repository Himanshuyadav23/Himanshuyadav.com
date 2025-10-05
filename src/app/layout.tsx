import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe - Founder & Entrepreneur',
  description: 'Professional founder and entrepreneur building the future of technology. Explore my ventures, projects, and insights.',
  keywords: ['founder', 'entrepreneur', 'startup', 'technology', 'innovation'],
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.com',
    title: 'John Doe - Founder & Entrepreneur',
    description: 'Professional founder and entrepreneur building the future of technology.',
    siteName: 'John Doe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Founder & Entrepreneur',
    description: 'Professional founder and entrepreneur building the future of technology.',
    creator: '@johndoe',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
