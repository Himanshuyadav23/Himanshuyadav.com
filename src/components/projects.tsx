"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence platform with machine learning insights and predictive analytics.',
    image: '/api/placeholder/600/400',
    techStack: ['React', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'],
    githubUrl: 'https://github.com/johndoe/analytics-dashboard',
    liveUrl: 'https://analytics-demo.com',
    featured: true
  },
  {
    id: '2',
    title: 'Blockchain Voting System',
    description: 'Secure, transparent voting platform built on Ethereum with smart contracts and zero-knowledge proofs.',
    image: '/api/placeholder/600/400',
    techStack: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
    githubUrl: 'https://github.com/johndoe/blockchain-voting',
    liveUrl: 'https://voting-demo.com',
    featured: true
  },
  {
    id: '3',
    title: 'Mobile Health App',
    description: 'Comprehensive health tracking app with telemedicine features and AI-powered health insights.',
    image: '/api/placeholder/600/400',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Machine Learning'],
    githubUrl: 'https://github.com/johndoe/health-app',
    liveUrl: 'https://health-app.com',
    featured: false
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    description: 'Scalable e-commerce solution with advanced search, recommendation engine, and payment processing.',
    image: '/api/placeholder/600/400',
    techStack: ['Next.js', 'Stripe', 'Redis', 'Elasticsearch', 'Docker'],
    githubUrl: 'https://github.com/johndoe/ecommerce',
    liveUrl: 'https://shop-demo.com',
    featured: false
  },
  {
    id: '5',
    title: 'IoT Smart Home System',
    description: 'Connected home automation platform with voice control and energy optimization features.',
    image: '/api/placeholder/600/400',
    techStack: ['Arduino', 'Raspberry Pi', 'MQTT', 'React', 'Python'],
    githubUrl: 'https://github.com/johndoe/smart-home',
    liveUrl: 'https://smart-home-demo.com',
    featured: false
  },
  {
    id: '6',
    title: 'Social Media Analytics',
    description: 'Comprehensive social media monitoring and analytics tool with sentiment analysis and trend prediction.',
    image: '/api/placeholder/600/400',
    techStack: ['Vue.js', 'Python', 'Apache Kafka', 'Elasticsearch', 'D3.js'],
    githubUrl: 'https://github.com/johndoe/social-analytics',
    liveUrl: 'https://social-analytics.com',
    featured: false
  }
]

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

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
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions I&apos;ve built to solve real-world problems
            </p>
          </div>

          {/* Featured projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden group glass-effect glow-effect hover-lift border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/10 text-white glass-effect glow-effect border border-white/20">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs glass-effect glow-effect border border-white/20 hover:border-white/40 transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="glass-effect neon-border hover:bg-white/10 hover:text-white transition-all duration-300" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" className="glass-effect neon-border hover:bg-white/10 hover:text-white transition-all duration-300" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
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
            className="text-center"
          >
            <Button size="lg" variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
