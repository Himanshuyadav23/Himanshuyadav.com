"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main headline with glow effect */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-glow">
              Building the{' '}
              <span className="relative">
                <span className="text-primary bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Future
                </span>
                <div className="absolute inset-0 text-primary bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent blur-sm opacity-50">
                  Future
                </div>
              </span>{' '}
              of Technology
            </h1>
            
            {/* Subline with scan line effect */}
            <div className="scan-line">
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Serial entrepreneur and technology innovator creating breakthrough solutions 
                that transform industries and improve lives worldwide.
              </p>
            </div>
            
            {/* CTAs with futuristic styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto glass-effect glow-effect hover-lift border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto glass-effect neon-border hover-lift transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Futuristic scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center glow-effect"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2 glow-effect"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
