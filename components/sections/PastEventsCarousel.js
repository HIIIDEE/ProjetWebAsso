// 📁 src/components/sections/PastEventsCarousel.js - AVEC MODAL
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react";
import { pastEvents } from "@/data/events";
import EventModal from "@/components/ui/EventModal";

const PastEventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalSlides = Math.ceil(pastEvents.length / 3);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Empêcher le scroll de la page quand la modal est ouverte
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Événements Réalisés
            </h2>
            <p className="text-xl text-gray-600">
              Retour sur nos dernières conférences, formations et rencontres
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full">
                    <div className="grid md:grid-cols-3 gap-8">
                      {pastEvents
                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                        .map((event, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300 group"
                          >
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                                  {event.type}
                                </span>
                                <span className="text-gray-500 font-medium">
                                  {event.date}
                                </span>
                              </div>

                              <div className="text-center mb-4">
                                <div className="text-4xl mb-2">
                                  {event.image}
                                </div>
                              </div>

                              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>

                              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {event.description}
                              </p>

                              <div className="space-y-2 text-sm text-gray-500 mb-4">
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {event.location}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-2" />
                                  {event.participants}
                                </div>
                              </div>

                              <div className="pt-4 border-t border-gray-100">
                                <button
                                  onClick={() => openEventModal(event)}
                                  className="text-primary hover:text-primary-dark font-medium text-sm transition-colors hover:underline"
                                >
                                  Voir le compte-rendu détaillé →
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 border group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 border group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Bilan de nos événements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24</div>
                <div className="text-gray-600">Événements organisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  1,200+
                </div>
                <div className="text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Experts intervenants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeEventModal}
      />
    </>
  );
};

export default PastEventsCarousel;
