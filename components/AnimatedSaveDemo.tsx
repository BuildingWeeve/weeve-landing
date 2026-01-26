"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Tag, DollarSign, MapPin } from "lucide-react";

export default function AnimatedSaveDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto h-[400px]">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0"
          >
            {/* Raw Link State */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-3">Saving from...</div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-xs text-gray-400 mb-2">🔗 URL</div>
                <div className="text-sm text-blue-600 truncate">
                  https://example.com/products/modern-chair
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-primary">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                <span className="text-sm font-medium">Processing...</span>
              </div>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0"
          >
            {/* AI Extraction State */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-primary/30">
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-primary">AI Extracting...</span>
              </div>

              {/* Extracted Data Appearing */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-orange-100 rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center space-x-2"
                >
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <div className="h-3 bg-green-100 rounded w-20" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center space-x-2"
                >
                  <Tag className="w-4 h-4 text-primary" />
                  <div className="h-3 bg-primary/20 rounded w-24" />
                  <div className="h-3 bg-primary/20 rounded w-20" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <div className="h-3 bg-blue-100 rounded w-28" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0"
          >
            {/* Beautiful Card State */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 200 }}
                className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-white/80 backdrop-blur rounded-2xl shadow-lg" />
                </motion.div>
              </motion.div>

              <div className="p-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-bold text-lg mb-2">Modern Accent Chair</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Comfortable mid-century style chair perfect for any room
                  </p>

                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      $299
                    </div>
                    <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                      In Stock
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      Furniture
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      Home Decor
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Success State */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-primary rounded-full w-24 h-24 flex items-center justify-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-white text-5xl"
              >
                ✓
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-20 text-center"
            >
              <div className="text-2xl font-bold text-gray-900 mb-2">Saved!</div>
              <div className="text-gray-600">Added to Furniture & Decor</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: step === i ? 1.2 : 1,
              backgroundColor: step === i ? "#ff7900" : "#d1d5db",
            }}
            className="w-2 h-2 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
