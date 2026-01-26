"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Image,
  Utensils,
  Home,
  Heart,
  Lightbulb,
  Book,
  Layers,
  Square,
  Zap,
  Frame,
  Coffee,
  Package,
  Box,
  Archive,
  Sun,
  Sparkles,
  Circle,
  Armchair,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContentCard = {
  icons: LucideIcon[];
  color: string;
  label: string;
  bg: string;
};

const contentCards: ContentCard[] = [
  {
    icons: [Armchair, Armchair, Armchair, Armchair],
    color: "from-orange-500 to-red-500",
    label: "Couch",
    bg: "from-orange-100 to-red-50",
  },
  {
    icons: [Layers, Box, Archive, Package],
    color: "from-blue-500 to-cyan-500",
    label: "Shelve",
    bg: "from-blue-100 to-cyan-50",
  },
  {
    icons: [Utensils, Coffee, Circle, Package],
    color: "from-purple-500 to-pink-500",
    label: "Dinnerware",
    bg: "from-purple-100 to-pink-50",
  },
  {
    icons: [Lightbulb, Sun, Zap, Sparkles],
    color: "from-yellow-500 to-orange-500",
    label: "Lamp",
    bg: "from-yellow-100 to-orange-50",
  },
  {
    icons: [Image, Frame, Heart, Book],
    color: "from-green-500 to-emerald-500",
    label: "Artwork",
    bg: "from-green-100 to-emerald-50",
  },
  {
    icons: [Square, Circle, Layers, Box],
    color: "from-indigo-500 to-purple-500",
    label: "Rug",
    bg: "from-indigo-100 to-purple-50",
  },
];

const GRID_SIZE = 6;

const START_POSITIONS = [
  { x: -400, y: -200 },
  { x: 400, y: -200 },
  { x: -400, y: 200 },
  { x: 400, y: 200 },
  { x: 0, y: -300 },
  { x: 0, y: 300 },
] as const;

// Pre-calculated random values for consistent animations
const ITEM_COUNTS = [4, 2, 5, 3, 6, 4];

export default function WeavingAnimation() {
  const [savedCards, setSavedCards] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      if (isAnimating) return;

      setIsAnimating(true);
      setSavedCards([]);

      // Cards fly in one by one
      for (let i = 0; i < contentCards.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 400));
        setSavedCards((prev) => [...prev, i]);
      }

      // Wait then reset
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsAnimating(false);
    };

    // Initial sequence on mount
    sequence();

    // Repeat sequence every 8 seconds
    const interval = setInterval(() => {
      sequence();
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty deps intentional - only run on mount

  return (
    <div className="relative w-full max-w-5xl h-[420px] flex items-center justify-center">
      {/* Weeve UI Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-full h-full flex"
      >
        {/* Left Sidebar - Minimal Collections Menu */}
        <div className="w-56 bg-gray-50 border-r border-gray-200 flex-shrink-0 flex flex-col">
          {/* Minimal Controls */}
          <div className="p-3 space-y-2 border-b border-gray-200">
            <div className="bg-white rounded-lg px-3 py-1.5 flex items-center space-x-2 border border-gray-200">
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-gray-400 text-xs">Find</span>
            </div>

            {/* Create Collection Button */}
            <button className="w-full bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors">
              <span className="text-sm">⊕</span>
              <span>Create Collection</span>
            </button>
          </div>

          {/* Collections List - Compact */}
          <div className="p-2 space-y-0.5 overflow-auto flex-1">
            {[
              "Articles",
              "Places to Stay",
              "Movies",
              "Homes",
              "Recipes",
              "Random",
              "Books to Read",
              "Furniture & Decor",
              "Clothing & Shoes",
            ].map((collection, idx) => (
              <div
                key={idx}
                className={`px-2.5 py-1.5 rounded-md flex items-center space-x-2 cursor-pointer transition-colors ${
                  idx === 7 ? "bg-orange-50 text-orange-900" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                    idx === 7 ? "bg-orange-100" : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 ${idx === 7 ? "text-orange-600" : "text-gray-500"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <span className="flex-1 font-medium text-xs truncate">{collection}</span>
                <span className="text-gray-400 text-xs">›</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-900">My Saves</span>
            </div>
            <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1">
              <span>⊕</span>
              <span>Save a link</span>
            </div>
          </div>

          {/* Content Area - Lists */}
          <div className="flex-1 bg-gray-50 p-6 overflow-hidden">
            {/* Collection Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Furniture & Decor{" "}
                  <span className="text-gray-400 text-sm font-normal ml-2">
                    {savedCards.length} lists
                  </span>
                </h2>
              </div>
            </div>

            {/* Lists Grid - More Spacious */}
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: GRID_SIZE }).map((_, index) => (
                <div key={index} className="relative aspect-square">
                  {savedCards.includes(index) ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col"
                    >
                      {/* List Preview - 2x2 grid of items */}
                      <div className="relative flex-1">
                        <div className="grid grid-cols-2 gap-1 p-1 h-full">
                          {contentCards[index].icons.map((Icon, iconIdx) => {
                            // For the couch list (index 0), apply different transformations to each icon
                            const transformations =
                              index === 0
                                ? [
                                    "", // Normal
                                    "scale-x-[-1]", // Flipped horizontally
                                    "rotate-12", // Rotated
                                    "scale-x-[-1] rotate-[-12deg]", // Flipped and rotated
                                  ]
                                : ["", "", "", ""];

                            return (
                              <div
                                key={iconIdx}
                                className={`bg-gradient-to-br ${contentCards[index].bg} rounded-md flex items-center justify-center`}
                              >
                                <Icon
                                  className={`w-8 h-8 text-gray-400 ${transformations[iconIdx]}`}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* List Info */}
                      <div className="px-3 py-2.5 border-t border-gray-100">
                        <div className="font-semibold text-xs text-gray-900 mb-0.5">
                          {contentCards[index].label}s
                        </div>
                        <div className="text-[10px] text-gray-500">{ITEM_COUNTS[index]} items</div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="bg-white rounded-xl h-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-gray-300 text-3xl mb-1">+</div>
                        <div className="text-gray-400 text-xs">Empty List</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Cards Flying In */}
      <AnimatePresence>
        {contentCards.map((card, index) => {
          const Icon = card.icons[0];
          const shouldShow = !savedCards.includes(index);

          if (!shouldShow) return null;

          const startPos = START_POSITIONS[index];
          const rotateOffset = (index % 2 === 0 ? 1 : -1) * 20;
          const xOffset = ((index % 3) - 1) * 50;
          const yOffset = Math.floor(index / 3) * 50 - 25;

          return (
            <motion.div
              key={`floating-${index}`}
              initial={{
                x: startPos.x,
                y: startPos.y,
                rotate: rotateOffset,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: [startPos.x, startPos.x + xOffset, startPos.x],
                y: [startPos.y, startPos.y + yOffset, startPos.y],
                rotate: [0, rotateOffset, 0],
                opacity: 1,
                scale: 1,
              }}
              exit={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="absolute pointer-events-none"
            >
              <div
                className={`w-24 h-28 rounded-xl bg-gradient-to-br ${card.color} shadow-2xl flex flex-col items-center justify-center p-3`}
              >
                <Icon className="w-10 h-10 text-white mb-2" />
                <span className="text-xs text-white font-semibold">{card.label}</span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Particle Trail Effect */}
      {savedCards.length > 0 && savedCards.length < contentCards.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none hidden md:block"
        >
          {[...Array(5)].map((_, i) => {
            const xOffset = ((i % 3) - 1) * 50;
            const yOffset = (i % 2 === 0 ? 1 : -1) * 50;

            return (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: xOffset,
                  y: yOffset,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full"
              />
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
