import React from "react";
import { Target, Users, Award, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              À Propos de l'ANAPNA
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              L'Association Nationale de la Promotion du Numérique en Algérie
              (ANAPNA) a été créée en 2008 pour répondre aux besoins croissants
              de professionnalisation et de structuration de la fonction DSI en
              Algérie.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous réunissons les DSI des secteurs public et privé autour
              d'objectifs communs : partage d'expériences, veille technologique,
              formation continue et représentation auprès des instances
              décisionnelles.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">
                  Mission claire
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">Réseau fort</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">
                  Expertise reconnue
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">Confiance</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Nos Valeurs
                </h3>
                <div className="text-3xl">💼</div>
              </div>
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Professionnalisme
                  </h4>
                  <p className="text-gray-600">
                    Excellence et rigueur dans nos services et accompagnements
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-900 mb-2">Partage</h4>
                  <p className="text-gray-600">
                    Échange d'expériences et mutualisation des bonnes pratiques
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">
                    Veille technologique et anticipation des évolutions
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-900 mb-2">Éthique</h4>
                  <p className="text-gray-600">
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
