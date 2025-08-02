import React from "react";
import { ArrowRight, Shield, Network, Building, Award } from "lucide-react";

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
      className="relative bg-gradient-to-br from-blue-50 to-gray-50 py-20 pt-32"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Association Nationale De la
              <span className="text-blue-600">
                {" "}
                Promotion du Numérique en Algérie
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Fédérer, représenter et accompagner les DSI algériens dans leurs
              missions stratégiques de transformation digitale et de gouvernance
              IT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                Adhérer à l'association
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                onClick={() => scrollToSection("services")}
              >
                Nos services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Nos domaines d'expertise
                </h3>
                <div className="text-2xl">💼</div>
              </div>

              <div className="space-y-4">
                {expertiseAreas.map((item, index) => {
                  const IconComponent = getIconComponent(item.iconComponent);
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 font-medium">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-lg">{item.icon}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
