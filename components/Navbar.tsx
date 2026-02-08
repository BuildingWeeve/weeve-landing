"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { getImageUrl } from "@/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const redirectToAuth = (path: "/sign-in" | "/sign-up") => {
    const baseDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || window.location.origin;
    window.location.href = `${baseDomain}${path}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Image
              src={getImageUrl("landing/icons/Weeve_New_Logo_Correct_Orange.png")}
              alt="Weeve"
              width={400}
              height={150}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#demo" className="text-gray-700 hover:text-primary transition-colors">
              Demo
            </a>
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-medium hover:border-primary hover:text-primary transition-colors"
                onClick={() => redirectToAuth("/sign-in")}
              >
                Sign In
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-600 transition-colors"
                onClick={() => redirectToAuth("/sign-up")}
              >
                Sign Up
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#demo"
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </a>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                className="w-full border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-medium"
                onClick={() => redirectToAuth("/sign-in")}
              >
                Sign In
              </button>
              <button
                type="button"
                className="w-full bg-primary text-white px-6 py-2.5 rounded-full font-medium"
                onClick={() => redirectToAuth("/sign-up")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
