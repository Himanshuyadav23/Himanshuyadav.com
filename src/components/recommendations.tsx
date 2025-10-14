"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote, Linkedin } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const recommendations = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    company: 'TechCorp Solutions',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'John is an exceptional leader with incredible vision and execution skills. His ability to build and scale teams while maintaining high-quality standards is remarkable. I would highly recommend working with him.',
    relationship: 'Former Colleague',
    linkedinUrl: 'https://linkedin.com/in/sarah-johnson',
    featured: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CTO',
    company: 'InnovateLab',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Working with John has been one of the most rewarding experiences of my career. His technical expertise combined with strategic thinking makes him a standout professional in the industry.',
    relationship: 'Business Partner',
    linkedinUrl: 'https://linkedin.com/in/michael-chen',
    featured: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    company: 'StartupXYZ',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'John brings incredible energy and innovation to every project. His ability to see the big picture while paying attention to details is what sets him apart from others.',
    relationship: 'Client',
    linkedinUrl: 'https://linkedin.com/in/emily-rodriguez',
    featured: false
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'Venture Partner',
    company: 'Capital Ventures',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'John is a visionary entrepreneur with exceptional leadership qualities. His track record speaks for itself, and I have no doubt he will continue to make significant impact in the tech industry.',
    relationship: 'Investor',
    linkedinUrl: 'https://linkedin.com/in/david-kim',
    featured: false
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    position: 'Head of Marketing',
    company: 'GrowthCo',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'John\'s ability to understand market dynamics and translate that into successful business strategies is impressive. He\'s a true professional who delivers results.',
    relationship: 'Former Team Member',
    linkedinUrl: 'https://linkedin.com/in/lisa-thompson',
    featured: false
  },
  {
    id: '6',
    name: 'Alex Martinez',
    position: 'Senior Developer',
    company: 'CodeForge',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'John is not just a great leader but also a mentor. He has the rare ability to inspire and guide teams while driving innovation and excellence in everything he does.',
    relationship: 'Mentee',
    linkedinUrl: 'https://linkedin.com/in/alex-martinez',
    featured: false
  }
]

export default function Recommendations() {
  const featuredRecommendations = recommendations.filter(rec => rec.featured)
  const otherRecommendations = recommendations.filter(rec => !rec.featured)

  return (
    <section className="py-20 bg-muted/30">
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
              Recommendations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What people I&apos;ve worked with say about me
            </p>
          </div>

          {/* Featured recommendations */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredRecommendations.map((recommendation, index) => (
              <motion.div
                key={recommendation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-effect glow-effect hover-lift border border-white/20 hover:border-white/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={recommendation.image}
                            alt={recommendation.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{recommendation.name}</h3>
                          <p className="text-sm text-muted-foreground">{recommendation.position}</p>
                          <p className="text-sm text-muted-foreground">{recommendation.company}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white glass-effect glow-effect border border-white/20">
                        Featured
                      </Badge>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(recommendation.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                      <p className="text-sm italic leading-relaxed pl-6">
                        &ldquo;{recommendation.text}&rdquo;
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <Badge variant="outline" className="text-xs glass-effect glow-effect border border-white/20 hover:border-white/40 transition-all duration-300">
                        {recommendation.relationship}
                      </Badge>
                      
                      <a
                        href={recommendation.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm text-primary hover:text-white transition-colors duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other recommendations grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRecommendations.map((recommendation, index) => (
              <motion.div
                key={recommendation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={recommendation.image}
                          alt={recommendation.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold truncate">{recommendation.name}</h3>
                        <p className="text-xs text-muted-foreground truncate">{recommendation.position}</p>
                        <p className="text-xs text-muted-foreground truncate">{recommendation.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(recommendation.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-xs leading-relaxed line-clamp-4">
                      &ldquo;{recommendation.text}&rdquo;
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline" className="text-xs">
                        {recommendation.relationship}
                      </Badge>
                      
                      <a
                        href={recommendation.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:text-foreground transition-colors duration-300"
                      >
                        <Linkedin className="w-3 h-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
