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
    name: 'TechFlow',
    description: 'AI-powered workflow automation platform that helps enterprises streamline operations and reduce costs by 40%.',
    logo: '/api/placeholder/80/80',
    website: 'https://techflow.com',
    status: 'active' as const,
    founded: '2020',
    employees: '50+',
    funding: '$15M Series A'
  },
  {
    id: '2',
    name: 'DataVault',
    description: 'Secure cloud storage solution for sensitive data with enterprise-grade encryption and compliance.',
    logo: '/api/placeholder/80/80',
    website: 'https://datavault.com',
    status: 'acquired' as const,
    founded: '2018',
    employees: '25',
    funding: 'Acquired by Microsoft'
  },
  {
    id: '3',
    name: 'GreenTech',
    description: 'Sustainable technology solutions for renewable energy management and carbon footprint tracking.',
    logo: '/api/placeholder/80/80',
    website: 'https://greentech.com',
    status: 'active' as const,
    founded: '2022',
    employees: '15',
    funding: '$5M Seed'
  }
]

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  acquired: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  closed: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
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
