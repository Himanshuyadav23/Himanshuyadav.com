"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Trophy, Star, Calendar, MapPin, Building, Camera, ExternalLink } from 'lucide-react'

export default function About() {
  const skills = [
    'Brand Strategy', 'Blockchain', 'Web Development',
    'Content Strategy', 'Ad Funnels', 'Automation',
    'Full-stack Development', 'Growth Marketing'
  ]

  const achievements = [
    {
      year: '2025',
      title: 'President',
      organization: 'E-Cell, SCSIT',
      description: 'Leading entrepreneurship initiatives and fostering innovation culture at college level',
      icon: Star,
      highlight: true
    },
    {
      year: '2025',
      title: 'Co-Founder',
      organization: 'DCOMM',
      description: 'Building systems that sell themselves - leading digital transformation and automation solutions',
      icon: Star,
      highlight: true
    },
    {
      year: '2024',
      title: 'Web Developer & Social Media Strategist',
      organization: 'DigiUpSkill Foundation',
      description: 'Developed foundation website, managed social media strategies, and taught web development to rural students',
      icon: Star,
      highlight: false
    },
    {
      year: '2024',
      title: 'Founder',
      organization: 'Social Tact',
      description: 'Founded and managed social media marketing agency, got acquired after 1.5 years of successful operations',
      icon: Star,
      highlight: true
    },
    {
      year: '2024',
      title: 'Head Boy',
      organization: 'Softvision College & Research Institute',
      description: 'Led student welfare initiatives, fostered campus culture, and represented peers to faculty with academic excellence',
      icon: Star,
      highlight: false
    },
    {
      year: '2023',
      title: 'Founder, PR and Media Team',
      organization: 'Softvision College & Research Institute',
      description: 'Started the first PR team at college, created campaigns and enhanced college visibility through strategic communication',
      icon: Star,
      highlight: false
    },
    {
      year: '2023',
      title: 'House Captain',
      organization: 'Faraday House, Softvision College',
      description: 'Led Faraday House to victory through strong leadership, teamwork, and organized community events',
      icon: Star,
      highlight: false
    },
    {
      year: '2023',
      title: 'Web Developer',
      organization: 'BornFire.in',
      description: 'Completed internship in web development, gaining hands-on experience in modern web technologies',
      icon: Star,
      highlight: false
    },
    {
      year: '2023',
      title: 'Freelance Web Developer',
      organization: 'Independent',
      description: 'Delivered PHP-based web solutions for multiple clients, building custom websites and applications',
      icon: Star,
      highlight: false
    },
    {
      year: '2023',
      title: 'Social Media Marketer',
      organization: 'Bliss Lifesciences LLP',
      description: 'Managed social media strategies and digital marketing campaigns for healthcare company',
      icon: Star,
      highlight: false
    }
  ]

  const awards = [
    {
      year: '2024',
      title: 'Best All Rounder',
      organization: 'Softvision College',
      description: 'Recognized for excellence across academics, leadership, and extracurricular activities',
      icon: Trophy,
      highlight: true
    },
    {
      year: '2024',
      title: 'Innovision Winner',
      organization: 'Softvision College & Graduate School of Business',
      description: 'Led Team Agastya to victory in premier management fest with 25-30 diverse activities including Roadies adventure',
      icon: Trophy,
      highlight: true
    },
    {
      year: '2024',
      title: 'Young Achievers PR',
      organization: 'Softvision College',
      description: 'Awarded for outstanding contributions to public relations and college visibility initiatives',
      icon: Trophy,
      highlight: false
    },
    {
      year: '2023',
      title: 'Selfless Service',
      organization: 'Softvision College',
      description: 'Recognized for dedicated service to college community and student welfare initiatives',
      icon: Trophy,
      highlight: false
    },
    {
      year: '2022',
      title: 'Techno Brainy',
      organization: 'Softvision College',
      description: 'Awarded for excellence in technology and technical knowledge',
      icon: Trophy,
      highlight: false
    },
    {
      year: '2015',
      title: 'Student of the Year',
      organization: 'Mount Carmel School',
      description: 'Recognized as outstanding student for academic excellence and leadership qualities',
      icon: Trophy,
      highlight: true
    },
    {
      year: '2014',
      title: 'Student of the Year',
      organization: 'Mount Carmel School',
      description: 'Awarded for exceptional academic performance and student leadership',
      icon: Trophy,
      highlight: true
    }
  ]

  const awardPhotos = [
    {
      id: 1,
      src: '/images/awards/IMG_20240324_205403505_HDR.webp',
      title: 'Best All Rounder Award',
      year: '2024',
      organization: 'Softvision College',
      description: 'Recognized for excellence across academics, leadership, and extracurricular activities'
    },
    {
      id: 2,
      src: '/images/awards/DSP_7000.webp',
      title: 'Innovision Winner',
      year: '2024',
      organization: 'Softvision College & GSB',
      description: 'Led Team Agastya to victory in premier management fest'
    },
    {
      id: 3,
      src: '/images/awards/IMG-20240316-WA0006.webp',
      title: 'Young Achievers PR',
      year: '2024',
      organization: 'Softvision College',
      description: 'Awarded for outstanding contributions to public relations'
    },
    {
      id: 4,
      src: '/images/awards/IMG_20230828_103457.webp',
      title: 'Selfless Service Award',
      year: '2023',
      organization: 'Softvision College',
      description: 'Recognized for dedicated service to college community'
    },
    {
      id: 5,
      src: '/images/awards/IMG_5101.webp',
      title: 'Techno Brainy Award',
      year: '2022',
      organization: 'Softvision College',
      description: 'Awarded for excellence in technology and technical knowledge'
    },
    {
      id: 6,
      src: '/images/awards/RSP_0145.webp',
      title: 'Student of the Year',
      year: '2015',
      organization: 'Mount Carmel School',
      description: 'Recognized as outstanding student for academic excellence'
    },
    {
      id: 7,
      src: '/images/awards/RSP_0196.webp',
      title: 'Student of the Year',
      year: '2014',
      organization: 'Mount Carmel School',
      description: 'Awarded for exceptional academic performance'
    },
    {
      id: 8,
      src: '/images/awards/DSP_7073.webp',
      title: 'Head Boy Recognition',
      year: '2024',
      organization: 'Softvision College',
      description: 'Leading student welfare and campus culture initiatives'
    },
    {
      id: 9,
      src: '/images/awards/6O0A4097.webp',
      title: 'Award Ceremony',
      year: '2024',
      organization: 'Softvision College',
      description: 'Recognition ceremony for outstanding achievements'
    },
    {
      id: 10,
      src: '/images/awards/6O0A4648.webp',
      title: 'Achievement Recognition',
      year: '2024',
      organization: 'Softvision College',
      description: 'Award ceremony for academic and leadership excellence'
    },
    {
      id: 11,
      src: '/images/awards/DSP_7311 (1).webp',
      title: 'Award Ceremony',
      year: '2024',
      organization: 'Softvision College',
      description: 'Recognition ceremony for outstanding achievements and leadership'
    },
    {
      id: 12,
      src: '/images/awards/IMG_5080.webp',
      title: 'Achievement Recognition',
      year: '2024',
      organization: 'Softvision College',
      description: 'Award ceremony for academic and leadership excellence'
    }
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
                  src="/images/about/WhatsApp Image 2025-04-27 at 5.35.59 PM.webp"
                  alt="Himanshu Yadav"
                  width={300}
                  height={375}
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-w-sm mx-auto"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                    if (nextElement) {
                      nextElement.style.display = 'block'
                    }
                  }}
                />
                <div className="hidden w-full h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-primary">HY</span>
                    </div>
                    <p className="text-muted-foreground">Himanshu Yadav</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Himanshu Yadav</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Co-Founder of DCOMM. I don’t sell services, I build systems that sell themselves.
                  Based in Indore, India, I work at the intersection of tech, strategy, and automation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I help brands and creators grow without fluff: high-converting landing pages, 
                  content that isn’t template-y, ad funnels that actually work, and automation-first 
                  workflows that keep things lean and scalable. I also mentor students and early-stage 
                  founders on pitching, building, and navigating tech careers.
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
                        &ldquo;Growth comes from clarity, not chaos. Ship fast, automate smarter, and let
                        systems do the heavy lifting. If it helps a brand grow with focus, I’m in.&rdquo;
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

          {/* Awards Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Awards Gallery</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Moments of recognition and achievement captured through the years
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {awardPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg glass-effect glow-effect border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                        if (nextElement) {
                          nextElement.style.display = 'flex'
                        }
                      }}
                    />
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Trophy className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">Award Photo</p>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Achievements & Awards Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Achievements & Awards</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A journey of innovation, leadership, and recognition in the tech and business world
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Achievements Column */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h4 className="text-xl font-bold mb-2 text-primary">Professional Achievements</h4>
                  <p className="text-sm text-muted-foreground">Leadership roles and career milestones</p>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
                  
                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={`achievement-${achievement.year}-${index}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex items-start space-x-6"
                      >
                        {/* Timeline dot */}
                        <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                          achievement.highlight 
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                            : 'bg-background border-2 border-primary/30 text-primary'
                        }`}>
                          <achievement.icon className="w-6 h-6" />
                        </div>

                        {/* Content */}
                        <div className={`flex-1 min-w-0 ${
                          achievement.highlight 
                            ? 'bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20' 
                            : ''
                        }`}>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-600 border-blue-500/30">
                              Achievement
                            </Badge>
                            <span className="text-sm font-medium text-muted-foreground">{achievement.year}</span>
                          </div>
                          
                          <h4 className="text-lg font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                          <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Awards Column */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h4 className="text-xl font-bold mb-2 text-yellow-600">Awards & Recognition</h4>
                  <p className="text-sm text-muted-foreground">Honors and accolades received</p>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-yellow-500/20"></div>
                  
                  <div className="space-y-6">
                    {awards.map((award, index) => (
                      <motion.div
                        key={`award-${award.year}-${index}`}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex items-start space-x-6"
                      >
                        {/* Timeline dot */}
                        <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                          award.highlight 
                            ? 'bg-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/25' 
                            : 'bg-background border-2 border-yellow-500/30 text-yellow-600'
                        }`}>
                          <award.icon className="w-6 h-6" />
                        </div>

                        {/* Content */}
                        <div className={`flex-1 min-w-0 ${
                          award.highlight 
                            ? 'bg-gradient-to-r from-yellow-500/5 to-yellow-500/10 rounded-lg p-6 border border-yellow-500/20' 
                            : ''
                        }`}>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="default" className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">
                              Award
                            </Badge>
                            <span className="text-sm font-medium text-muted-foreground">{award.year}</span>
                          </div>
                          
                          <h4 className="text-lg font-semibold mb-1">{award.title}</h4>
                          <p className="text-yellow-600 font-medium mb-2">{award.organization}</p>
                          <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
