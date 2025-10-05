"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Entrepreneurship',
    excerpt: 'Exploring how artificial intelligence is reshaping the startup landscape and what founders need to know.',
    image: '/api/placeholder/600/300',
    date: '2024-01-15',
    category: 'blog' as const,
    readTime: '5 min read',
    featured: true,
    slug: 'future-ai-entrepreneurship'
  },
  {
    id: '2',
    title: 'Building Scalable Teams: Lessons from 10 Years',
    excerpt: 'Key insights on hiring, culture, and leadership from scaling multiple companies from 0 to 100+ employees.',
    image: '/api/placeholder/600/300',
    date: '2024-01-08',
    category: 'blog' as const,
    readTime: '8 min read',
    featured: true,
    slug: 'building-scalable-teams'
  },
  {
    id: '3',
    title: 'Fundraising in 2024: What VCs Really Want',
    excerpt: 'A founder\'s perspective on the current fundraising landscape and how to position your startup for success.',
    image: '/api/placeholder/600/300',
    date: '2024-01-01',
    category: 'blog' as const,
    readTime: '6 min read',
    featured: false,
    slug: 'fundraising-2024'
  },
  {
    id: '4',
    title: 'TechCrunch Disrupt 2024 Talk',
    excerpt: 'Watch my talk on "The Next Wave of Innovation" at TechCrunch Disrupt 2024.',
    image: '/api/placeholder/600/300',
    date: '2023-12-20',
    category: 'talk' as const,
    readTime: '45 min watch',
    featured: false,
    slug: 'techcrunch-disrupt-2024',
    externalUrl: 'https://techcrunch.com/video/next-wave-innovation'
  },
  {
    id: '5',
    title: 'Product-Market Fit: A Data-Driven Approach',
    excerpt: 'How to use analytics and user feedback to achieve product-market fit faster and more reliably.',
    image: '/api/placeholder/600/300',
    date: '2023-12-10',
    category: 'blog' as const,
    readTime: '7 min read',
    featured: false,
    slug: 'product-market-fit-data'
  },
  {
    id: '6',
    title: 'Forbes Interview: Scaling During Uncertainty',
    excerpt: 'My interview with Forbes about navigating economic uncertainty while maintaining growth momentum.',
    image: '/api/placeholder/600/300',
    date: '2023-11-28',
    category: 'media' as const,
    readTime: '10 min read',
    featured: false,
    slug: 'forbes-interview-scaling',
    externalUrl: 'https://forbes.com/interview/scaling-uncertainty'
  }
]

const categoryColors = {
  blog: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  talk: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  media: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
}

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

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
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts on entrepreneurship, technology, and building the future
            </p>
          </div>

          {/* Featured posts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className={categoryColors[post.category]}
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        {post.externalUrl ? (
                          <Link href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                            Read More
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        ) : (
                          <Link href={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${categoryColors[post.category]}`}
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full"
                        asChild
                      >
                        {post.externalUrl ? (
                          <Link href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                            Read More
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Link>
                        ) : (
                          <Link href={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        )}
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
            className="text-center"
          >
            <Button size="lg" variant="outline">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
