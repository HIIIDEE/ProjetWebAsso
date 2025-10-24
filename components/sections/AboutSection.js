import React from "react";
import { Target, Users, Award, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-12 sm:py-16 md:py-20 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              À Propos de l'ANAPNA
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              L'Association Nationale de la Promotion du Numérique en Algérie
              (ANAPNA) a été créée en 2008 pour répondre aux besoins croissants
              de professionnalisation et de structuration de la fonction DSI en
              Algérie.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Nous réunissons les DSI des secteurs public et privé autour
              d'objectifs communs : partage d'expériences, veille technologique,
              formation continue et représentation auprès des instances
              décisionnelles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base text-gray-900">
                  Mission claire
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base text-gray-900">Réseau fort</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base text-gray-900">
                  Expertise reconnue
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base text-gray-900">Confiance</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Nos Valeurs
                </h3>
                <div className="text-2xl sm:text-3xl">💼</div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="p-3 sm:p-4 rounded-lg bg-primary-light/10 border-l-4 border-primary">
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">
                    Professionnalisme
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Excellence et rigueur dans nos services et accompagnements
                  </p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gray-50 border-l-4 border-gray-400">
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Partage</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Échange d'expériences et mutualisation des bonnes pratiques
                  </p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-primary-light/10 border-l-4 border-primary">
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Innovation</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Veille technologique et anticipation des évolutions
                  </p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gray-50 border-l-4 border-gray-400">
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Éthique</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Respect des normes et déontologie professionnelle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
