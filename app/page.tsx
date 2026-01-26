"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ProductDemo from "@/components/ProductDemo";
// import CyclingTextSection from '@/components/CyclingTextSection'
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Ensure page starts at the top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ProductDemo />
      {/* <CyclingTextSection /> */}
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
