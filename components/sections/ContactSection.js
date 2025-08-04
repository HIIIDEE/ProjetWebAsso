"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, X } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    entreprise: "",
    fonction: "",
    motivations: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          entreprise: "",
          fonction: "",
          motivations: "",
        });
        // Auto-hide après 8 secondes
        setTimeout(() => {
          setShowSuccess(false);
        }, 8000);
      } else {
        throw new Error(
          `Erreur ${response.status}: ${result.message || "Erreur inconnue"}`
        );
      }
    } catch (error) {
      console.error("Erreur complète:", error);
      alert(`Une erreur est survenue: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Nom"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  placeholder="Prénom"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email professionnel"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleInputChange}
                placeholder="Entreprise / Organisation"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input
                type="text"
                name="fonction"
                value={formData.fonction}
                onChange={handleInputChange}
                placeholder="Fonction actuelle"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <textarea
                rows={4}
                name="motivations"
                value={formData.motivations}
                onChange={handleInputChange}
                placeholder="Motivations et expérience"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <span>Envoyer la demande</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Belle notification de succès */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300">
            {/* Header avec gradient */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    Demande envoyée !
                  </h3>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Merci {formData.nom ? `${formData.nom}` : ""} !
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Votre demande d'adhésion à l'<strong>ANAPNA</strong> a été
                  envoyée avec succès. Notre équipe va examiner votre
                  candidature et vous recontactera prochainement.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-800">
                    <strong>Prochaines étapes :</strong>
                    <br />
                    • Vérification de votre profil
                    <br />
                    • Contact dans les 48h ouvrées
                    <br />• Procédure d'adhésion si éligible
                  </p>
                </div>

                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Parfait !
                </button>
              </div>
            </div>

            {/* Barre de progression auto-close */}
            <div className="h-1 bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse"
                style={{
                  animation: "shrink 8s linear forwards",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-in {
          animation: slideIn 0.3s ease-out;
        }
        .slide-in-from-bottom-4 {
          transform: translateY(1rem);
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(1rem) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
