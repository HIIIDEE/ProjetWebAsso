import React from "react";
import Image from "next/image";
import { Linkedin, Facebook, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/utils/constants";

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            {/* Élément décoratif d'arrière-plan */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="absolute -top-[50%] -left-[10%] w-[120%] h-full bg-primary/5 blur-3xl rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    {/* Logo et Identité */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl transform transition-transform hover:scale-105 duration-300">
                            <Image
                                src="/trace.svg"
                                alt="Logo ANAPNA"
                                width={80}
                                height={80}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                ANAPNA
                            </span>
                            <p className="text-sm sm:text-base text-gray-400 mt-2 font-medium">
                                Association Nationale de la Promotion du Numérique en Algérie
                            </p>
                            <p className="text-xs sm:text-sm text-primary mt-1 font-bold">
                                {COMPANY_INFO.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Description courte */}
                    <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed">
                        Fédérer et accompagner les acteurs du numérique en Algérie pour une transformation digitale réussie et une gouvernance IT d'excellence.
                    </p>

                    {/* Informations de contact rapides */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center hover:text-primary transition-colors duration-300 group">
                            <div className="p-2 bg-white/5 rounded-full mr-2 group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            {COMPANY_INFO.email}
                        </a>
                        <div className="flex items-center text-gray-300">
                            <div className="p-2 bg-white/5 rounded-full mr-2">
                                <MapPin className="w-4 h-4" />
                            </div>
                            Alger, Algérie
                        </div>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="flex items-center space-x-6 pt-4">
                        <a
                            href="https://www.linkedin.com/company/nap-dz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/5 hover:bg-[#0077b5] rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61579135025147"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/5 hover:bg-[#1877F2] rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-12 pt-8 text-center">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} ANAPNA. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
