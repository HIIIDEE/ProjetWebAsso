"use client";

import React, { useState, useEffect } from "react";
import { Network, Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/utils/constants";

const Header = ({ scrollY, activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerTransform, setHeaderTransform] = useState(0);

  // Effet de parallax subtil pour le header
  useEffect(() => {
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

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm"
        }`}
        style={{
          transform: `translateY(${Math.min(headerTransform * -0.3, 0)}px)`
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo avec animation de rotation au hover */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Network className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="relative">
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  ANAPNA
                </span>
                <p className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                  Association Nationale de la Promotion du Numérique en Algérie
                </p>
                {/* Ligne décorative animée */}
                <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 w-0 group-hover:w-full"></div>
              </div>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-blue-50 ${
                    activeSection === item.id ? "text-blue-600" : ""
                  }`}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.name}
                  {/* Indicateur actif animé */}
                  <span
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0 hover:w-full"
                    }`}
                  ></span>
                  
                  {/* Effet de brillance au hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 transform -skew-x-12"></span>
                </button>
              ))}
            </div>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile avec animation de slide */}
        <div 
          className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="space-y-4">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium ${
                    activeSection === item.id ? "text-blue-600 bg-blue-50" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 300ms ease-out ${index * 50}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
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