"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, Users, MapPin, ExternalLink, Mic, Award, BookOpen, ArrowRight, Mail, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const speakingImages = [
  '/images/speaking/DSP_6742.JPG',
  '/images/speaking/IMG_6920.jpg',
  '/images/speaking/IMG_6921.jpg',
  '/images/speaking/IMG_6922.jpg',
  '/images/speaking/IMG_8721.jpg',
  '/images/speaking/IMG_8757.jpg',
  '/images/speaking/IMG_8800.jpg',
  '/images/speaking/IMG20220930140116.jpg',
  '/images/speaking/RSP_0291.jpg',
  '/images/speaking/RSP_8742.jpg'
]

const speakingEngagements = [
  {
    id: '1',
    title: 'The Future of AI in Entrepreneurship',
    event: 'TechCrunch Disrupt 2024',
    date: '2024-03-15',
    location: 'San Francisco, CA',
    audience: '500+ attendees',
    duration: '45 minutes',
    type: 'Keynote',
    image: speakingImages[0],
    description: 'Exploring how artificial intelligence is reshaping the startup landscape and what founders need to know to stay ahead.',
    topics: ['AI', 'Entrepreneurship', 'Future Tech'],
    featured: true,
    recordingUrl: 'https://techcrunch.com/video/future-ai-entrepreneurship'
  },
  {
    id: '2',
    title: 'Building Scalable Teams in the Digital Age',
    event: 'Startup Grind Global 2024',
    date: '2024-02-20',
    location: 'Silicon Valley, CA',
    audience: '300+ attendees',
    duration: '60 minutes',
    type: 'Workshop',
    image: speakingImages[1],
    description: 'Key insights on hiring, culture, and leadership from scaling multiple companies from 0 to 100+ employees.',
    topics: ['Leadership', 'Team Building', 'Scaling'],
    featured: true,
    slidesUrl: 'https://slideshare.net/scalable-teams'
  },
  {
    id: '3',
    title: 'Innovation in Crisis: Lessons from 2023',
    event: 'Forbes Innovation Summit',
    date: '2023-12-10',
    location: 'New York, NY',
    audience: '200+ attendees',
    duration: '30 minutes',
    type: 'Panel Discussion',
    image: speakingImages[2],
    description: 'How to maintain innovation and growth during economic uncertainty and market volatility.',
    topics: ['Innovation', 'Crisis Management', 'Growth'],
    featured: false
  },
  {
    id: '4',
    title: 'From Idea to IPO: The Entrepreneur\'s Journey',
    event: 'Harvard Business School',
    date: '2023-11-15',
    location: 'Boston, MA',
    audience: '150+ students',
    duration: '90 minutes',
    type: 'Guest Lecture',
    image: speakingImages[3],
    description: 'A comprehensive look at the entrepreneurial journey from initial idea to successful exit.',
    topics: ['Entrepreneurship', 'Business Strategy', 'Venture Capital'],
    featured: false
  },
  {
    id: '5',
    title: 'The Psychology of Successful Founders',
    event: 'Stanford Graduate School of Business',
    date: '2023-10-08',
    location: 'Palo Alto, CA',
    audience: '100+ attendees',
    duration: '75 minutes',
    type: 'Seminar',
    image: speakingImages[4],
    description: 'Understanding the mental models and psychological traits that drive successful entrepreneurship.',
    topics: ['Psychology', 'Founders', 'Mental Models'],
    featured: false
  },
  {
    id: '6',
    title: 'Sustainable Innovation in Tech',
    event: 'MIT Technology Review Conference',
    date: '2023-09-22',
    location: 'Cambridge, MA',
    audience: '400+ attendees',
    duration: '40 minutes',
    type: 'Keynote',
    image: speakingImages[5],
    description: 'How technology companies can drive sustainable innovation while maintaining profitability.',
    topics: ['Sustainability', 'Technology', 'Innovation'],
    featured: false
  }
]

const services = [
  {
    title: 'Keynote Speaking',
    description: 'Inspirational and thought-provoking keynotes on entrepreneurship, innovation, and leadership.',
    icon: Mic,
    duration: '30-60 minutes',
    audience: 'Any size',
    price: 'Starting at $15,000'
  },
  {
    title: 'Workshops & Training',
    description: 'Hands-on workshops and training sessions for teams and organizations.',
    icon: BookOpen,
    duration: '2-8 hours',
    audience: '10-50 people',
    price: 'Starting at $8,000'
  },
  {
    title: 'Panel Discussions',
    description: 'Expert panel participation and moderation on various business and tech topics.',
    icon: Users,
    duration: '30-90 minutes',
    audience: 'Any size',
    price: 'Starting at $5,000'
  },
  {
    title: 'Judging & Mentoring',
    description: 'Startup competitions, pitch judging, and one-on-one mentoring sessions.',
    icon: Award,
    duration: 'Flexible',
    audience: 'Flexible',
    price: 'Starting at $2,000'
  }
]

const topics = [
  'Artificial Intelligence & Machine Learning',
  'Entrepreneurship & Startup Strategy',
  'Leadership & Team Building',
  'Innovation & Technology Trends',
  'Scaling & Growth Strategies',
  'Fundraising & Venture Capital',
  'Product Development & Market Fit',
  'Digital Transformation',
  'Sustainable Business Practices',
  'Crisis Management & Resilience'
]

export default function Speaking() {
  const router = useRouter()
  const featuredEngagements = speakingEngagements.filter(engagement => engagement.featured)
  const otherEngagements = speakingEngagements.filter(engagement => !engagement.featured)

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Speaker & Mentor
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Inspiring audiences worldwide with insights on entrepreneurship, innovation, and leadership. 
              Available for keynotes, workshops, panel discussions, and mentoring sessions.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 text-sm">
                <Mic className="w-4 h-4 mr-2" />
                10+ Speaking Engagements
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                1000+ Audience Members
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Top-Rated Speaker
              </Badge>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white glow-effect hover-lift" onClick={handleContactClick}>
                <Mail className="w-5 h-5 mr-2" />
                Invite Me to Speak
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white" onClick={handleContactClick}>
                <Phone className="w-5 h-5 mr-2" />
                Book a Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Speaking Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Speaking Gallery */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Speaking Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {speakingImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg glass-effect glow-effect hover-lift border border-white/20 hover:border-white/40 transition-all duration-300">
                    <Image
                      src={image}
                      alt={`Speaking engagement ${index + 1}`}
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
                          <Mic className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">Speaking {index + 1}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-xs font-medium truncate">
                        Speaking Engagement {index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Speaking Topics */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Speaking Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Badge variant="outline" className="w-full justify-start p-3 text-sm glass-effect glow-effect border border-white/20 hover:border-white/40 transition-all duration-300">
                    {topic}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Book a Speaking Engagement?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can add value to your next event, conference, or organization.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white glow-effect hover-lift" onClick={handleContactClick}>
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
