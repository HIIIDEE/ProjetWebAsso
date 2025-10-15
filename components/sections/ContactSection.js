import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nous Contacter
          </h2>
          <p className="text-xl text-gray-600">
            Rejoignez notre communauté de DSI et bénéficiez de notre réseau
            d'expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-light/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-4 text-lg">Email</h4>
              <div className="text-center space-y-2">
                <a href="mailto:contact@anapna.dz" className="block text-primary hover:text-primary transition-colors">
                  contact@anapna.dz
                </a>
                <a href="mailto:secretariat@anapna.dz" className="block text-primary hover:text-primary transition-colors">
                  secretariat@anapna.dz
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-light/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-4 text-lg">Téléphone</h4>
              <div className="text-center space-y-2">
                <p className="text-gray-600">+213 21 XX XX XX</p>
                <p className="text-gray-600">+213 XXX XX XX XX</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-light/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-4 text-lg">Adresse</h4>
              <div className="text-center space-y-2">
                <p className="text-gray-600">Centre d'Affaires</p>
                <p className="text-gray-600">Alger Centre, Algérie</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-primary-light/10 to-accent/10 rounded-xl border border-primary-light">
            <h4 className="font-bold text-gray-900 mb-4 text-xl text-center">
              Conditions d'adhésion
            </h4>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Fonction de DSI ou équivalent</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Justificatif d'activité professionnelle</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Recommandation de deux membres</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-700">Cotisation annuelle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
