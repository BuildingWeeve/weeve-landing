"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Chrome, Smartphone, Monitor } from "lucide-react";
import WeavingAnimation from "./WeavingAnimation";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50/30 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center min-h-[85vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Your Universal <span className="text-primary">Save Layer</span>
              <br />
              for the Internet
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Instantly capture, organize, and return to anything you care about online. From
              products to recipes to content, Weeve turns every link into a structured, organized
              card.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary transition-colors"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-8 text-gray-500 pt-4"
            >
              <div className="flex flex-col items-center space-y-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-white rounded-2xl shadow-md"
                >
                  <Chrome className="w-6 h-6" />
                </motion.div>
                <span className="text-xs">Extension</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-white rounded-2xl shadow-md"
                >
                  <Monitor className="w-6 h-6" />
                </motion.div>
                <span className="text-xs">Desktop</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-white rounded-2xl shadow-md"
                >
                  <Smartphone className="w-6 h-6" />
                </motion.div>
                <span className="text-xs">Mobile</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Weaving Animation */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <WeavingAnimation />
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
