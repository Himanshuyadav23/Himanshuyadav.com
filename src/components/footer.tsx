"use client"

import Link from 'next/link'
import { Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Ventures', href: '/ventures' },
    { name: 'Recommendations', href: '/recommendations' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Contact', href: '/contact' },
  ],
  ventures: [
    { name: 'DCOMM', href: 'https://www.dcommunications.co.in/' },
    { name: 'Social Tact', href: 'https://www.instagram.com/social.tact/' },
    { name: 'BrandPulse', href: '#', disabled: true },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/himanshuyadav-93b9151a5', icon: Linkedin },
    { name: 'Personal', href: 'https://t.co/4OY3sbscFl', icon: ExternalLink },
    { name: 'Email', href: 'mailto:hy486516@gmail.com', icon: Mail },
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="#home" className="text-2xl font-bold text-primary mb-4 block">
              Himanshu Yadav
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Co-Founder DCOMM | I don’t sell services, I build systems that sell themselves.
            </p>
            <div className="flex space-x-2">
              {footerLinks.social.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9"
                >
                  <a
                    href={social.href}
                    target={social.name === 'Email' ? '_self' : '_blank'}
                    rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h3 className="font-semibold mb-4">Ventures</h3>
            <ul className="space-y-2">
              {footerLinks.ventures.map((venture) => (
                <li key={venture.name}>
                  {venture.disabled ? (
                    <span className="text-sm text-muted-foreground/60 cursor-not-allowed">
                      {venture.name} <span className="text-xs">(Under Development)</span>
                    </span>
                  ) : (
                    <a
                      href={venture.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {venture.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hy486516@gmail.com</p>
              <p>6263597941</p>
              <p>Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Himanshu Yadav. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

