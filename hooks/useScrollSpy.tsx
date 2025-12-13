"use client";

import { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "@/utils/constants";

interface UseScrollSpyReturn {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const useScrollSpy = (): UseScrollSpyReturn => {
    const [activeSection, setActiveSection] = useState("accueil");

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAVIGATION_ITEMS.map((item) => item.id);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { activeSection, scrollToSection };
};

export default useScrollSpy;
