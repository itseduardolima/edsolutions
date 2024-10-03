"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/sections/Hero";
import PortfolioSection from "@/components/sections/Portfolio";
import ProcessSection from "@/components/sections/Process";
import ReasonsSection from "@/components/sections/Reasons";
import ServicesSection from "@/components/sections/Services";
import TestimonialsSection from "@/components/sections/Testimonials";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import MouseFollower from "@/components/MouseFollower";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <ReasonsSection />
      </main>
      <Footer />
      <ScrollToTop />
      <ToastContainer />
      <MouseFollower mousePosition={mousePosition} />
      <motion.div
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-blue-600 z-50"
      />
    </div>
  );
}
