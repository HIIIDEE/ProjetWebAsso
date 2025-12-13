"use client";

import React, { useState, useEffect } from "react";
import { pastEvents, PastEvent } from "@/data/events";
import EventModal from "@/components/ui/EventModal";
import Carousel from "@/components/ui/Carousel";
import EventCard from "@/components/ui/EventCard";

const PastEventsCarousel: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEventModal = (event: PastEvent) => {
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
            <section id="evenements" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Événements Réalisés
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
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
