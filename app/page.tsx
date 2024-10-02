"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
