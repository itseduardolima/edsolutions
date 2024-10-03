"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/sections/Hero";
import PortfolioSection from "@/components/sections/Portfolio";
import ProcessSection from "@/components/sections/Process";
import ServicesSection from "@/components/sections/Services";
import TestimonialsSection from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
