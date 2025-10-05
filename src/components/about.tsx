"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  const skills = [
    'Product Strategy', 'Team Building', 'Fundraising', 'Technology Innovation',
    'Market Analysis', 'Strategic Partnerships', 'Operations', 'Leadership'
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building companies that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo and bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <Image
                  src="/api/placeholder/400/500"
                  alt="John Doe"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">John Doe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serial entrepreneur with over 10 years of experience building and scaling 
                  technology companies. I&apos;ve founded 3 successful startups, raised over $50M 
                  in funding, and led teams of 100+ people across multiple industries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in identifying market opportunities and building products 
                  that solve real-world problems. I believe in the power of technology to 
                  create positive change and am committed to mentoring the next generation 
                  of entrepreneurs.
                </p>
              </div>
            </motion.div>

            {/* Founder's note and skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Founder's note */}
              <Card className="glass-effect glow-effect hover-lift border border-white/20 hover:border-white/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
                      <span className="text-white font-bold text-lg">💡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-glow">Founder&apos;s Note</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        &ldquo;Every great company starts with a simple idea and the courage to pursue it. 
                        My journey has taught me that success isn&apos;t just about having the right idea—it&apos;s 
                        about execution, persistence, and surrounding yourself with amazing people.&rdquo;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-glow">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 glass-effect glow-effect border border-white/20 hover:border-white/40 transition-all duration-300">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
