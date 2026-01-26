"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, Layers, Search, Users, Sparkles, Link2, LayoutGrid } from "lucide-react";

// Custom Cross-Platform Icon Component
const CrossPlatformIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Desktop Monitor */}
    <rect x="2" y="3" width="14" height="10" rx="2" fill="currentColor" fillOpacity="0.05" />
    <path d="M2 13 L16 13" />
    <path d="M7 13 L7 15" />
    <path d="M11 13 L11 15" />
    <path d="M5 15 L13 15" />

    {/* Phone on top */}
    <rect
      x="13"
      y="6"
      width="8"
      height="14"
      rx="1.5"
      fill="#fff7ed"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="15"
      y1="18"
      x2="19"
      y2="18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const features = [
  {
    icon: Link2,
    title: "Save Anything",
    description:
      "Capture products, recipes, real estate, travel plans, podcasts, research, and more from anywhere on the web.",
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Automatic extraction of prices, key details, and summaries from every saved item.",
  },
  {
    icon: Search,
    title: "Easy Search",
    description: "Find anything you've saved in seconds. No more losing track of links.",
  },
  {
    icon: LayoutGrid,
    title: "Build Lists & Compare",
    description: "Create collections, compare options, and make better decisions faster.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description: "Share your collections with friends and family. Plan together, decide together.",
  },
  {
    icon: CrossPlatformIcon,
    title: "Cross-Platform",
    description: "Access your saves from mobile app or web app. Anywhere. Anytime. Always in sync.",
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
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
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything you love,
            <br />
            finally <span className="text-primary">all in one place</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Weeve lets you save anything you discover online, so nothing gets lost and everything is
            easy to find when you need it.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
