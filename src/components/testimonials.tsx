"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechCorp',
    content: 'John is an exceptional leader with a unique ability to see opportunities where others see challenges. His strategic thinking and execution skills are unmatched.',
    avatar: '/api/placeholder/60/60',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'InnovateLab',
    content: 'Working with John was a game-changer for our company. His technical expertise combined with business acumen helped us scale from startup to market leader.',
    avatar: '/api/placeholder/60/60',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'VP of Product',
    company: 'DataFlow',
    content: 'John\'s mentorship has been invaluable to my career growth. His insights on product strategy and team building have shaped how I approach leadership.',
    avatar: '/api/placeholder/60/60',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'John\'s guidance during our Series A fundraising was instrumental in our success. His network and experience in the venture space are truly remarkable.',
    avatar: '/api/placeholder/60/60',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Board Member',
    company: 'Growth Ventures',
    content: 'As a board member, I\'ve seen John navigate complex challenges with grace and determination. His leadership style inspires confidence in both investors and employees.',
    avatar: '/api/placeholder/60/60',
    rating: 5
  },
  {
    id: '6',
    name: 'Alex Johnson',
    role: 'Former Employee',
    company: 'TechFlow',
    content: 'John created an environment where innovation thrived. His ability to balance ambitious goals with team well-being made working at TechFlow an incredible experience.',
    avatar: '/api/placeholder/60/60',
    rating: 5
  }
]

export default function Testimonials() {
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
              What People Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonials from colleagues, partners, and team members
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                      <p className="text-sm leading-relaxed pl-6">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
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
