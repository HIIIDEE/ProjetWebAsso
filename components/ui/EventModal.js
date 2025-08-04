// 📁 src/components/ui/EventModal.js
"use client";

import React from "react";
import { X, MapPin, Users, Calendar, Clock, User } from "lucide-react";

const EventModal = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="flex items-start space-x-4">
            <div className="text-6xl">{event.image}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {event.type}
                </span>
                <span className="text-gray-500 font-medium">{event.date}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 text-lg">{event.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Informations pratiques */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Informations Pratiques
              </h3>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Lieu</p>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Participants</p>
                  <p className="text-gray-600">{event.participants}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Date</p>
                  <p className="text-gray-600">{event.date}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Durée</p>
                  <p className="text-gray-600">Journée complète (9h-17h)</p>
                </div>
              </div>
            </div>

            {/* Contenu principal */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Compte-rendu détaillé
              </h3>

              {/* Contenu spécifique selon l'événement */}
              {event.title.includes("Forum") && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🎯 Objectifs de l'événement
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Ce forum annuel réunit les DSI pour échanger sur les défis
                      majeurs de la transformation digitale dans le contexte
                      post-COVID. L'accent a été mis sur la résilience des SI et
                      l'adaptation aux nouveaux modes de travail.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      📋 Programme de la journée
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>9h00-10h30 :</strong> Conférence d'ouverture -
                        "L'IT post-pandémie"
                      </li>
                      <li>
                        • <strong>10h45-12h00 :</strong> Table ronde -
                        "Télétravail et sécurité"
                      </li>
                      <li>
                        • <strong>14h00-15h30 :</strong> Ateliers techniques -
                        Cloud et cybersécurité
                      </li>
                      <li>
                        • <strong>15h45-17h00 :</strong> Session networking et
                        conclusions
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🔑 Points clés abordés
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Stratégies de continuité d'activité</li>
                      <li>• Adoption massive du télétravail</li>
                      <li>• Renforcement de la cybersécurité</li>
                      <li>• Migration vers le cloud</li>
                      <li>• Management d'équipes distribuées</li>
                    </ul>
                  </div>
                </div>
              )}

              {event.title.includes("Cybersécurité") && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🛡️ Focus Cybersécurité
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Formation intensive sur les nouvelles réglementations RGPD
                      et les meilleures pratiques de protection des données.
                      L'atelier a couvert les aspects juridiques, techniques et
                      organisationnels.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      📚 Modules de formation
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>Module 1 :</strong> Cadre réglementaire RGPD
                      </li>
                      <li>
                        • <strong>Module 2 :</strong> Analyse d'impact sur la
                        vie privée
                      </li>
                      <li>
                        • <strong>Module 3 :</strong> Mesures techniques de
                        protection
                      </li>
                      <li>
                        • <strong>Module 4 :</strong> Gestion des incidents de
                        sécurité
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {event.title.includes("Cloud") && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      ☁️ Stratégies Cloud
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Table ronde sur les stratégies de migration vers le cloud
                      pour les administrations publiques. Discussion sur les
                      défis de souveraineté, sécurité et performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🎯 Recommandations
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Approche hybride privilégiée</li>
                      <li>• Audit de sécurité obligatoire</li>
                      <li>• Formation des équipes IT</li>
                      <li>• Plan de continuité adapté</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Intervenants */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              👥 Intervenants
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <User className="w-10 h-10 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Dr. Ahmed Benali</p>
                  <p className="text-sm text-gray-600">
                    Expert en Cybersécurité - CERIST
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <User className="w-10 h-10 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Sarah Khadra</p>
                  <p className="text-sm text-gray-600">
                    DSI Ministère de l'Intérieur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources */}
          {/* <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              📎 Ressources et Documents
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>📄</span>
                <span>Présentation principale (PDF)</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>📊</span>
                <span>Résultats du sondage participants</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>🎥</span>
                <span>Enregistrement de la conférence</span>
              </a>
            </div>
          </div> */}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Organisé par l'ANDSI - Association Nationale des DSI
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
