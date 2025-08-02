"use client";

import React from "react";
import { Network } from "lucide-react";
import { NAVIGATION_ITEMS, COMPANY_INFO } from "@/utils/constants";

const Header = ({ scrollY, activeSection, scrollToSection }) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Network className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">ANAPNA</span>
              <p className="text-sm text-gray-600 font-medium">
                Association Nationale de la Promotion du Numérique en Algérie
              </p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 relative font-medium ${
                  activeSection === item.id ? "text-blue-600" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${
                    activeSection === item.id ? "w-full" : "w-0 hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
