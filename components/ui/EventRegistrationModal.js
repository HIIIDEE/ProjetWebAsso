"use client";

import React, { useState } from "react";
import {
  X,
  Calendar,
  MapPin,
  Users,
  Mail,
  Building,
  User,
  Check,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { sendEventRegistration } from "@/utils/emailService";

const EventRegistrationModal = ({ event, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    experience: "",
    dietaryRestrictions: "",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [resultMessage, setResultMessage] = useState("");

  if (!isOpen || !event) return null;

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
    setSubmitStatus(null);
    setResultMessage("");

    try {
      const result = await sendEventRegistration(formData, event);

      if (result.success) {
        setSubmitStatus("success");
        setResultMessage(result.message);

        // Fermer automatiquement après 5 secondes
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            position: "",
            experience: "",
            dietaryRestrictions: "",
            motivation: "",
          });
          onClose();
          setSubmitStatus(null);
          setResultMessage("");
        }, 5000);
      } else {
        setSubmitStatus("error");
        setResultMessage(result.error);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
      setResultMessage("Une erreur inattendue s'est produite.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectEmail = () => {
    const directMailto = `mailto:contact@andsi.dz?subject=Inscription ${event.title}&body=Bonjour, je souhaite m'inscrire à l'événement "${event.title}" du ${event.date}.%0A%0AMes coordonnées :%0ANom: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0AEntreprise: ${formData.company}%0A%0ACordialement.`;
    window.open(directMailto, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200 bg-primary-light/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-50 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="flex items-start space-x-4">
            <div className="text-4xl">📧</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Inscription par Email
              </h2>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {event.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">{event.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Information box */}
          <div className="mb-6 p-4 bg-primary-light/10 border border-primary-light rounded-lg">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-dark mb-1">
                  💡 Comment ça fonctionne
                </h4>
                <p className="text-primary-dark text-sm">
                  Remplissez le formulaire ci-dessous et cliquez sur "Envoyer
                  l'inscription". Votre client email s'ouvrira automatiquement
                  avec toutes vos informations pré-remplies. Il vous suffira de
                  cliquer sur "Envoyer" dans votre client email.
                </p>
              </div>
            </div>
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
              <Check className="w-6 h-6 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800">
                  Email d'inscription généré !
                </h4>
                <p className="text-green-700 text-sm mt-1">{resultMessage}</p>
                <p className="text-green-600 text-xs mt-2">
                  Cette fenêtre se fermera automatiquement dans quelques
                  secondes.
                </p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start space-x-3 mb-3">
                <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800">
                    Problème d'ouverture du client email
                  </h4>
                  <p className="text-red-700 text-sm mt-1">{resultMessage}</p>
                </div>
              </div>
              <button
                onClick={handleDirectEmail}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Essayer un email simplifié</span>
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations personnelles */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Informations personnelles
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="votre.email@entreprise.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="+213 XX XX XX XX"
                  />
                </div>
              </div>
            </div>

            {/* Informations professionnelles */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Informations professionnelles
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise / Organisation *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Nom de votre organisation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fonction / Poste *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="DSI, Responsable IT, etc."
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Années d'expérience dans l'IT
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez votre expérience</option>
                  <option value="0-2 ans">0-2 ans</option>
                  <option value="3-5 ans">3-5 ans</option>
                  <option value="6-10 ans">6-10 ans</option>
                  <option value="11-15 ans">11-15 ans</option>
                  <option value="Plus de 15 ans">Plus de 15 ans</option>
                </select>
              </div>
            </div>

            {/* Informations complémentaires - optionnelles */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Informations complémentaires{" "}
                <span className="text-sm text-gray-500">(optionnel)</span>
              </h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Restrictions alimentaires / Allergies
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Végétarien, sans gluten, allergies..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivations / Attentes pour cet événement
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Qu'espérez-vous retirer de cet événement ?"
                  />
                </div>
              </div>
            </div>

            {/* Contact direct en cas de problème */}
            <div className="bg-gray-50 p-4 rounded-lg border">
              <p className="text-sm text-gray-600 mb-2">
                <strong>En cas de problème technique :</strong>
              </p>
              <p className="text-sm text-gray-600">
                Vous pouvez aussi nous contacter directement à :
                <a
                  href="mailto:contact@andsi.dz"
                  className="text-primary hover:text-primary-dark font-medium ml-1"
                >
                  contact@andsi.dz
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                disabled={isSubmitting}
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="flex-1 bg-primary hover:bg-primary disabled:bg-primary-light/50 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Préparation...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Email généré !
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ouvrir l'email d'inscription
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationModal;
