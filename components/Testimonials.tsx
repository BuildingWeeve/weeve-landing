'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    avatar: 'SC',
    content: 'Weeve has completely changed how I research and save design inspiration. The AI extraction is magical—it pulls exactly what I need.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Home Buyer',
    avatar: 'MJ',
    content: "I was juggling dozens of real estate listings across different sites. Weeve organized everything beautifully and made comparing properties so easy.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Recipe Collector',
    avatar: 'ER',
    content: 'Finally, all my saved recipes in one place! The automatic ingredient extraction and smart search make meal planning a breeze.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Researcher',
    avatar: 'DP',
    content: 'As someone who reads hundreds of articles, Weeve has become my second brain. The personalized feed resurfaces content at the perfect time.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Travel Planner',
    avatar: 'LT',
    content: 'Planning trips with friends has never been easier. We can all save places, compare options, and make decisions together in Weeve.',
    rating: 5,
  },
  {
    name: 'Alex Kumar',
    role: 'Tech Enthusiast',
    avatar: 'AK',
    content: 'The cross-platform sync is seamless. I save on my phone during commute and organize on my desktop at home. Everything just works.',
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative w-full"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
        <Quote className="w-6 h-6 text-white" />
      </div>

      {/* Rating */}
      <div className="flex space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        &quot;{testimonial.content}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-orange-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Loved by people who
            <br />
            <span className="text-primary">save everything</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who have transformed how they organize their digital lives
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20"
        >
          {[
            { value: '100K+', label: 'Active Users' },
            { value: '5M+', label: 'Items Saved' },
            { value: '50K+', label: 'Lists Created' },
            { value: '4.9', label: 'App Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
