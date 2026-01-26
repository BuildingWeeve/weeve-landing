'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Bookmark, Sparkles, Zap } from 'lucide-react'

const steps = [
  {
    number: 'Step 1',
    icon: Bookmark,
    title: 'Save from Anywhere',
    description: 'Click the extension, use the mobile app, or share directly to Weeve on the web. Save products, articles, recipes, places, and more.',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: 'Step 2',
    icon: Sparkles,
    title: 'AI Extracts',
    description: 'Our AI automatically extracts prices, key details, images, and summaries. Everything becomes a structured, beautiful card.',
    color: 'from-primary to-orange-400',
  },
  {
    number: 'Step 3',
    icon: Zap,
    title: 'Organize & Act',
    description: 'Build lists, compare options, collaborate with others, and resurface saved content when you need it most.',
    color: 'from-amber-500 to-orange-500',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Three simple steps to
            <br />
            <span className="text-primary">organized bliss</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 overflow-hidden">
          {/* Weaving Thread Animation */}
          {hoveredStep !== null && hoveredStep < 2 && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden md:block absolute top-20 left-0 w-full h-32 pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <motion.path
                d={`M ${hoveredStep === 0 ? '33%' : '66%'} 20 Q ${hoveredStep === 0 ? '50%' : '83%'} 60, ${hoveredStep === 0 ? '66%' : '100%'} 20`}
                stroke="#ff7900"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              {/* Needle */}
              <motion.circle
                cx="0"
                cy="0"
                r="4"
                fill="#ff7900"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  offsetPath: `path('M ${hoveredStep === 0 ? '33%' : '66%'} 20 Q ${hoveredStep === 0 ? '50%' : '83%'} 60, ${hoveredStep === 0 ? '66%' : '100%'} 20')`,
                }}
              />
            </motion.svg>
          )}

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => {
                  setActiveStep(index)
                  setHoveredStep(index)
                }}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative p-6 md:p-8"
              >
                {/* Animated background */}
                <motion.div
                  animate={{
                    opacity: activeStep === index ? 0.08 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color}`}
                />

                <div className="relative z-10">
                  {/* Icon and Step Number */}
                  <div className="flex items-center space-x-4 mb-6">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: activeStep === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Step Number */}
                    <motion.div
                      animate={{
                        scale: activeStep === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Weeving
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
