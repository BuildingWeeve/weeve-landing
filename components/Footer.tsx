"use client";

import { motion } from "framer-motion";
import { X, Linkedin, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import WeeveLogo from "@/public/images/Weeve_New_Logo_Correct_Orange.png";
import XLogoWhite from "@/public/images/X_logo_2023_(white).svg.png";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const footerLinks = {
  Product: ["Features", "How It Works", "Demo"],
  Company: ["About", "Contact"],
  Resources: ["Help Center"],
  Legal: ["Privacy", "Terms"],
};

const socialLinks = [
  { icon: TikTokIcon, href: "#", label: "TikTok", isImage: false },
  { icon: null, href: "#", label: "X", isImage: true, imageSrc: XLogoWhite },
  { icon: Instagram, href: "#", label: "Instagram", isImage: false },
  { icon: Linkedin, href: "#", label: "LinkedIn", isImage: false },
  { icon: Mail, href: "#", label: "Email", isImage: false },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
              <Image
                src={WeeveLogo}
                alt="Weeve"
                width={400}
                height={150}
                className="h-12 w-auto"
              />
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your universal save layer. Capture, organize, and return to anything you care about
              online.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    {social.isImage && social.imageSrc ? (
                      <Image
                        src={social.imageSrc}
                        alt={social.label}
                        width={18}
                        height={18}
                        className="w-[18px] h-[18px]"
                      />
                    ) : social.icon ? (
                      <social.icon className="w-5 h-5" />
                    ) : null}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-white mb-2">Stay updated</h3>
            <p className="text-gray-400 mb-4">Get the latest news and updates from Weeve</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Weeve. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
