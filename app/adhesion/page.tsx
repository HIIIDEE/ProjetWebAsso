"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MembershipSection from "@/components/sections/MembershipSection";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function MembershipPage() {
    const [scrollY, setScrollY] = useState(0);
    const { activeSection, scrollToSection } = useScrollSpy();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header
                scrollY={scrollY}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />
            <main className="pt-20">
                <MembershipSection />
            </main>
            <Footer />
        </div>
    );
}
