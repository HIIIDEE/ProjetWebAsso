"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = () => {
    alert(
      "Merci pour votre demande d'adhésion ! Nous vous recontacterons prochainement."
    );
  };

  return (
    <section id="contact" className="py-20">
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

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informations de Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@anapna.dz</p>
                  <p className="text-gray-600">secretariat@anapna.dz</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Téléphone</h4>
                  <p className="text-gray-600">+213 21 XX XX XX</p>
                  <p className="text-gray-600">+213 XXX XX XX XX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Adresse</h4>
                  <p className="text-gray-600">Centre d'Affaires</p>
                  <p className="text-gray-600">Alger Centre, Algérie</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-3">
                Conditions d'adhésion
              </h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Fonction de DSI ou équivalent</li>
                <li>• Justificatif d'activité professionnelle</li>
                <li>• Recommandation de deux membres</li>
                <li>• Cotisation annuelle</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Demande d'adhésion
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email professionnel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Entreprise / Organisation"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Fonction actuelle"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Motivations et expérience"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                onClick={handleSubmit}
              >
                Envoyer la demande
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
