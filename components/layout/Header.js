"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Button from "../ui/Button";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ scrollY, activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerTransform, setHeaderTransform] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  // Effet de parallax subtil pour le header
  useEffect(() => {
    console.log("Header mounted - v2"); // Force rebuild
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxSpeed = 0.5;
      setHeaderTransform(scrolled * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (id) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-light"
            : "bg-white/90 backdrop-blur-sm"
          }`}
        style={{
          transform: `translateY(${Math.min(headerTransform * -0.3, 0)}px)`
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo simple */}
            <div className="relative group cursor-pointer" onClick={() => router.push('/')}>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                <Image
                  src="/napdz_logo.png"
                  alt="Logo ANAPNA"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority
                  quality={95}
                />
              </div>

              {/* Texte en arabe centré à droite */}
              <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3 translate-x-full px-4 items-center">
                <span
                  className="text-sm lg:text-base font-bold whitespace-nowrap leading-tight tracking-wide"
                  style={{ color: '#006233' }}
                >
                  الجمعية الوطنية لترقية الرقمنة في الجزائر
                </span>
              </div>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  className={`relative text-gray-dark hover:text-primary transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-primary-light/10 ${activeSection === item.id && pathname === "/" ? "text-primary" : ""
                    }`}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.name}
                  {/* Indicateur actif animé */}
                  <span
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${activeSection === item.id && pathname === "/" ? "w-full" : "w-0 hover:w-full"
                      }`}
                  ></span>

                  {/* Effet de brillance au hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 transform -skew-x-12"></span>
                </button>
              ))}
              <Button
                variant="primary"
                size="sm"
                onClick={() => router.push('/adhesion')}
              >
                Devenir membre
              </Button>
            </div>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-light transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 text-gray-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 text-gray-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile avec animation de slide */}
        <div
          className={`md:hidden bg-white border-t border-gray-light shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="space-y-4">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-gray-dark hover:text-primary hover:bg-primary-light/10 transition-all duration-300 font-medium ${activeSection === item.id && pathname === "/" ? "text-primary bg-primary-light/10" : ""
                    }`}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 300ms ease-out ${index * 50}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {activeSection === item.id && pathname === "/" && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={() => {
                    router.push('/adhesion');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Devenir membre
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay pour fermer le menu mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;