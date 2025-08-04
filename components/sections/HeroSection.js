import React from "react";
import { ArrowRight, Shield, Network, Building, Award } from "lucide-react";
import { RevealOnScroll } from "@/hooks/useScrollReveal";

const HeroSection = ({ scrollToSection }) => {
  const getIconComponent = (iconName) => {
    const icons = { Shield, Network, Building, Award };
    return icons[iconName] || Network;
  };

  const expertiseAreas = [
    {
      icon: "🛡️",
      title: "Cybersécurité & Conformité",
      iconComponent: "Shield",
    },
    {
      icon: "🌐",
      title: "Architecture & Infrastructure",
      iconComponent: "Network",
    },
    { icon: "📱", title: "Transformation Digitale", iconComponent: "Building" },
    { icon: "🏆", title: "Gouvernance & Audit IT", iconComponent: "Award" },
  ];

  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-br from-blue-50 to-gray-50 py-20 pt-32 overflow-hidden"
    >
      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <RevealOnScroll animation="fadeInUp" duration={0.8}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Association Nationale De la
                <span className="text-blue-600 relative">
                  {" "}
                  Promotion du Numérique en Algérie
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-3" 
                    viewBox="0 0 200 12" 
                    fill="none"
                  >
                    <path 
                      d="M2 10C60 2 140 2 198 10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      className="text-blue-300"
                    />
                  </svg>
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Fédérer, représenter et accompagner les DSI algériens dans leurs
                missions stratégiques de transformation digitale et de gouvernance
                IT.
              </p>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInUp" delay={0.4} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('services')}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-lg"
                >
                  <span>Découvrir nos services</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group bg-white border border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Nous contacter
                </button>
              </div>
            </RevealOnScroll>

            {/* Statistiques animées */}
            <RevealOnScroll animation="fadeInUp" delay={0.6} duration={0.8}>
              <div className="grid grid-cols-3 gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2008</div>
                  <div className="text-sm text-gray-600">Fondée en</div>
                </div>
                <div className="text-center border-l border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Membres</div>
                </div>
                <div className="text-center border-l border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Ans d'expérience</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Colonne droite avec expertises */}
          <div className="relative">
            <RevealOnScroll animation="fadeInRight" delay={0.3} duration={0.8}>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Nos Domaines d'Expertise
                  </h3>
                  <p className="text-gray-600">
                    Au service de la transformation digitale
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {expertiseAreas.map((area, index) => {
                    const IconComponent = getIconComponent(area.iconComponent);
                    return (
                      <RevealOnScroll 
                        key={index}
                        animation="scaleIn" 
                        delay={0.8 + index * 0.1}
                        duration={0.6}
                      >
                        <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-blue-600" />
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                            {area.title}
                          </h4>
                          <div className="text-2xl">{area.icon}</div>
                        </div>
                      </RevealOnScroll>
                    );
                  })}
                </div>

                {/* Badge de certification */}
                <RevealOnScroll animation="fadeInUp" delay={1.2} duration={0.6}>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full">
                      <Award className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-800">
                        Association reconnue d'utilité publique
                      </span>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </RevealOnScroll>

            {/* Éléments décoratifs flottants */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 animate-bounce" style={{animationDuration: '3s'}}></div>
          </div>
        </div>
      </div>

      {/* CSS personnalisé pour les animations blob */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;