"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Function to get point on the weaving path
const getPointOnPath = (t: number) => {
  // Simplified path segments for needle position
  const segments = [
    { start: 0, end: 0.14, x1: 8, y1: 0, cx: 3, cy: 8, x2: 8, y2: 15 },
    { start: 0.14, end: 0.29, x1: 8, y1: 15, cx: 12, cy: 23, x2: 7, y2: 32 },
    { start: 0.29, end: 0.43, x1: 7, y1: 32, cx: 4, cy: 38, x2: 9, y2: 45 },
    { start: 0.43, end: 0.57, x1: 9, y1: 45, cx: 13, cy: 52, x2: 8, y2: 60 },
    { start: 0.57, end: 0.71, x1: 8, y1: 60, cx: 4, cy: 67, x2: 10, y2: 75 },
    { start: 0.71, end: 0.86, x1: 10, y1: 75, cx: 14, cy: 82, x2: 8, y2: 90 },
    { start: 0.86, end: 1, x1: 8, y1: 90, cx: 5, cy: 95, x2: 8, y2: 100 },
  ];

  const segment = segments.find((s) => t >= s.start && t <= s.end) || segments[0];
  const localT = (t - segment.start) / (segment.end - segment.start);

  // Quadratic bezier formula
  const x =
    Math.pow(1 - localT, 2) * segment.x1 +
    2 * (1 - localT) * localT * segment.cx +
    Math.pow(localT, 2) * segment.x2;
  const y =
    Math.pow(1 - localT, 2) * segment.y1 +
    2 * (1 - localT) * localT * segment.cy +
    Math.pow(localT, 2) * segment.y2;

  // Calculate angle (derivative for rotation)
  const dx = 2 * (1 - localT) * (segment.cx - segment.x1) + 2 * localT * (segment.x2 - segment.cx);
  const dy = 2 * (1 - localT) * (segment.cy - segment.y1) + 2 * localT * (segment.y2 - segment.cy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90; // -90 to point needle direction

  return { x, y, angle };
};

export default function ScrollWeavingThread() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [needlePos, setNeedlePos] = useState({ x: 8, y: 0, angle: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const pos = getPointOnPath(latest);
      setNeedlePos(pos);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!mounted) return null;

  return (
    <div className="fixed left-0 top-24 bottom-0 w-32 pointer-events-none z-30 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 20 100" preserveAspectRatio="xMinYMin meet">
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff7900" stopOpacity={0.3} />
            <stop offset="50%" stopColor="#ff7900" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#ff7900" stopOpacity={0.3} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main weaving thread path with varied movement */}
        <motion.path
          d="M 8 0 
             Q 3 8, 8 15
             Q 12 23, 7 32
             Q 4 38, 9 45
             Q 13 52, 8 60
             Q 4 67, 10 75
             Q 14 82, 8 90
             Q 5 95, 8 100"
          stroke="url(#threadGradient)"
          strokeWidth="0.4"
          fill="none"
          strokeDasharray="3,1.5"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengthValue }}
        />

        {/* Secondary lighter thread for depth with different pattern */}
        <motion.path
          d="M 7 0 
             Q 2 9, 7 16
             Q 11 24, 6 33
             Q 3 39, 8 46
             Q 12 53, 7 61
             Q 3 68, 9 76
             Q 13 83, 7 91
             Q 4 96, 7 100"
          stroke="#ff7900"
          strokeWidth="0.2"
          fill="none"
          opacity={0.2}
          strokeDasharray="1.5,2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengthValue }}
        />

        {/* Needle that follows the thread path */}
        <g transform={`translate(${needlePos.x}, ${needlePos.y}) rotate(${needlePos.angle})`}>
          {/* Needle body - silver/gray metallic look, pointing upward */}
          <path
            d="M 0 0 L 0.3 -2 L -0.3 -2 Z"
            fill="#888"
            stroke="#666"
            strokeWidth="0.05"
            filter="url(#glow)"
          />
          {/* Needle eye (hole) */}
          <circle cx="0" cy="-0.5" r="0.15" fill="white" stroke="#666" strokeWidth="0.03" />
          {/* Needle tip highlight */}
          <path
            d="M -0.1 -1.8 L 0 -2 L 0.1 -1.8"
            stroke="#aaa"
            strokeWidth="0.08"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
