import React from "react";
import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grille responsive: 1 colonne sur mobile, 2 colonnes sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Colonne 1 - Logo et description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/napdz_logo.png"
                  alt="Logo ANAPNA"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold">ANAPNA</span>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Association Nationale de la Promotion du Numérique en Algérie
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
              Fédérer et accompagner les DSI algériens dans leurs missions
              stratégiques de transformation digitale et de gouvernance IT.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/nap-dz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579135025147"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens Utiles */}
          <div className="space-y-6 md:pl-12 lg:pl-20">
            <h4 className="text-lg sm:text-xl font-bold">Liens Utiles</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Statuts de l'association
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Règlement intérieur
                </a>
              </li>
              <li>
                <a
                  href="#membres"
                  className="text-sm sm:text-base hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Annuaire des membres
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-8 text-center">
          
          <p className="text-xs sm:text-sm text-gray-400">
            © 2024 Association Nationale de la Promotion du Numérique en Algérie (ANAPNA).
            <span className="block sm:inline sm:ml-1">Tous droits réservés.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
