"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { upcomingEvents } from "@/data/events";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openRegistrationModal = (event) => {
    setSelectedEvent(event);
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <section id="evenements" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Événements à Venir
            </h2>
            <p className="text-xl text-gray-600">
              Participez à nos conférences, formations et tables rondes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                    <span className="text-blue-600 font-bold text-lg">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>

                  {/* Informations supplémentaires */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">
                          Durée:
                        </span>
                        <p className="text-gray-600">Journée complète</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Places:
                        </span>
                        <p className="text-gray-600">Limitées</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Prix:</span>
                        <p className="text-green-600 font-medium">Gratuit</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">CPF:</span>
                        <p className="text-gray-600">Éligible</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openRegistrationModal(event)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center group"
                  >
                    <span>S'inscrire maintenant</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Information supplémentaire */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                📅 Pourquoi participer aux événements ANDSI ?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-blue-800">
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-1">Expertise de pointe</h4>
                  <p>Intervenants experts et retours d'expérience concrets</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-semibold mb-1">Networking qualifié</h4>
                  <p>Rencontrez des DSI et professionnels IT de référence</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2">📜</div>
                  <h4 className="font-semibold mb-1">Certification</h4>
                  <p>Certificat de participation et formation continue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal d'inscription */}
      <EventRegistrationModal
        event={selectedEvent}
        isOpen={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
      />
    </>
  );
};

export default EventsSection;
