"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/sections/Hero";
import ProcessSection from "@/components/sections/Process";
import ServicesSection from "@/components/sections/Services";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
      </main>
    </div>
  );
}
