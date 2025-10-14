"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ventures = [
  {
    id: '1',
    name: 'DCOMM',
    description: 'Digital innovation studio delivering websites, AI social media, automation, ads, and growth systems.',
    logo: '/images/ventures/logo Dcomm Agency.png',
    website: 'https://www.dcommunications.co.in/',
    status: 'active' as const,
    founded: '2025',
    employees: '5+',
    funding: 'Bootstrapped'
  },
  {
    id: '2',
    name: 'Social Tact',
    description: 'Managed creators and businesses on social media. Built, scaled, and later acquired.',
    logo: '/images/ventures/SOCIAL TACT LOGO.png',
    website: '#',
    status: 'acquired' as const,
    founded: '2024',
    employees: '—',
    funding: 'Acquired'
  },
  {
    id: '3',
    name: 'BrandPulse',
    description: 'Currently building a lean brand ops platform focused on automation-first growth.',
    logo: '/images/ventures/BrandPulse Logo - Fresh Tech Feel.png',
    website: '#',
    status: 'building' as const,
    founded: '2025',
    employees: '—',
    funding: 'In development'
  }
]

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  acquired: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  closed: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
  building: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
}

export default function Ventures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My Ventures
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Companies I&apos;ve founded and built from the ground up
            </p>
          </div>

          {/* Ventures grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-effect glow-effect hover-lift border border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden glow-effect">
                        <Image
                          src={venture.logo}
                          alt={`${venture.name} logo`}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={statusColors[venture.status]}
                      >
                        {venture.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{venture.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Founded {venture.founded} • {venture.employees} employees
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed">
                      {venture.description}
                    </p>
                    
                    <div className="text-xs text-muted-foreground">
                      {venture.funding}
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full glass-effect neon-border group-hover:bg-white/10 group-hover:text-white transition-all duration-300"
                        asChild
                      >
                        <Link href={venture.website} target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button size="lg" variant="outline">
              View All Ventures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
