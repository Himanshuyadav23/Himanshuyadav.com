"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote, Linkedin } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const recommendations = [
  {
    id: '1',
    name: 'Hirni Desai',
    position: 'Healthpreneur | Co-Founder',
    company: 'Bliss Wellness & Bliss Lifesciences',
    image: null,
    initials: 'HD',
    rating: 5,
    text: 'Himanshu excelled during his digital marketing internship with his innovative mindset and strong analytical skills. He quickly adapted to challenges, contributed valuable ideas, and executed campaigns effectively. His dedication, creativity, and team-oriented attitude make him a standout professional with immense potential for success in the marketing field.',
    relationship: 'Mentor',
    linkedinUrl: '#',
    featured: true
  },
  {
    id: '2',
    name: 'Kapil Chawla',
    position: 'Cancer survivor and leader',
    company: '10+ years in social impact and community programs',
    image: null,
    initials: 'KC',
    rating: 5,
    text: 'Very hard-working and creative young man. He has solutions to every query on the web and social media. I love working with him.',
    relationship: 'Mentor',
    linkedinUrl: '#',
    featured: true
  },
  {
    id: '3',
    name: 'Deepa Kaushal',
    position: 'Principal',
    company: 'Softvision College',
    image: null,
    initials: 'DK',
    rating: 5,
    text: 'Himanshu Yadav is an exceptional student I had the pleasure of teaching and mentoring. He possesses outstanding interpersonal and leadership skills, with a unique ability to connect with people, inspire teamwork, and drive results. His leadership skills were evident in his selfless contributions to various college events throughout his three years. I am confident that Himanshu will excel in his future endeavors and achieve his dreams. His exceptional work ethic, combined with his impressive skills and passion, make him an invaluable asset to any organization. God bless you beta🌺',
    relationship: 'Principal & Mentor',
    linkedinUrl: '#',
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
                        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                          {recommendation.image ? (
                            <Image
                              src={recommendation.image}
                              alt={recommendation.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-lg font-bold text-primary">
                              {recommendation.initials}
                            </span>
                          )}
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
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                        {recommendation.image ? (
                          <Image
                            src={recommendation.image}
                            alt={recommendation.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-sm font-bold text-primary">
                            {recommendation.initials}
                          </span>
                        )}
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
