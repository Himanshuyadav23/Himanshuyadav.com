"use client"

import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, ExternalLink, Github, Instagram, Send } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Himanshuyadav23',
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/himanshuuuuyadav/',
    color: 'hover:text-pink-600'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/himanshu-yadav-93b9151a5/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'X (Twitter)',
    icon: ExternalLink,
    url: 'https://x.com/Himanshuyadavyt?t=HHbiQa_ULyj4PsPydhCVaw&s=09',
    color: 'hover:text-blue-400'
  }
]

export default function Contact() {

  return (
    <section className="py-20">
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
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Want to invite me to speak, collaborate on a project, or need strategic advice? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Direct Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Card className="glass-effect glow-effect border border-white/20 hover:border-white/40 transition-all duration-300 p-12">
                <CardContent className="space-y-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Ready to collaborate or have a question? Send me an email directly and I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20 hover:border-primary/40 transition-all duration-300 font-medium px-8 py-6"
                      asChild
                    >
                      <a href="mailto:hy486516@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </a>
                    </Button>
                    
                    <p className="text-sm text-muted-foreground">
                      Or copy my email: <span className="font-mono bg-muted px-2 py-1 rounded">hy486516@gmail.com</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact info and social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Contact information */}
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hy486516@gmail.com</p>
                    </div>
                  </div>
                  
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Madhya Pradesh, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social links */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        asChild
                        className={`transition-colors ${social.color} flex flex-col items-center space-y-1 h-auto py-3`}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="flex flex-col items-center space-y-1"
                        >
                          <social.icon className="h-5 w-5" />
                          <span className="text-xs font-medium">{social.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional info */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Let&apos;s Build Something Amazing</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I&apos;m always interested in new opportunities, partnerships, and collaborations. 
                    Whether you&apos;re looking for a co-founder, advisor, or just want to chat about 
                    technology and entrepreneurship, I&apos;d love to connect.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:hy486516@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me Directly
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
