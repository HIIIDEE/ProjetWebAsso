// 📁 src/components/sections/PastEventsCarousel.js - AVEC MODAL
"use client";

import React, { useState, useEffect } from "react";
import { pastEvents } from "@/data/events";
import EventModal from "@/components/ui/EventModal";
import Carousel from "@/components/ui/Carousel";
import EventCard from "@/components/ui/EventCard";

const PastEventsCarousel = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

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

          {/* Carousel Swiper */}
          <div className="px-4 md:px-8 lg:px-12">
            <Carousel
              items={pastEvents}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              autoPlay={true}
              autoPlayInterval={5000}
              showControls={true}
              showIndicators={true}
              spaceBetween={24}
            >
              {(event) => <EventCard event={event} onViewDetails={openEventModal} />}
            </Carousel>
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
