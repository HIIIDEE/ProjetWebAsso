"use client";

import React, { useState, useEffect } from "react";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EventsSection from "@/components/sections/EventsSection";
import PastEventsCarousel from "@/components/sections/PastEventsCarousel";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FoundingMembersSection from "@/components/sections/FoundingMembersSection";

// Hook personnalisé pour la navigation
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { activeSection, scrollToSection } = useScrollSpy();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header
        scrollY={scrollY}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <StatsSection />
        <ServicesSection />
        {/* <EventsSection /> */}
        <PastEventsCarousel />
        <FoundingMembersSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
