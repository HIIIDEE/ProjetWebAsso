"use client";

import React from "react";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import { PastEvent } from "@/data/events";

interface EventCardProps {
    event: PastEvent;
    onViewDetails: (event: PastEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
    return (
        <div className="group h-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-light overflow-hidden group-hover:scale-[1.02] h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-32 sm:h-36 md:h-40 bg-white dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    {event.image.startsWith('/') ? (
                        <Image
                            src={event.image}
                            alt={event.title}
                            width={300}
                            height={200}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="text-6xl sm:text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500">
                            {event.image}
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                    {/* Header with Type and Date */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                            {event.type}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm">
                            {event.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2">
                        {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-1">
                        {event.description}
                    </p>

                    {/* Location and Participants */}
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                        <div className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-primary dark:text-primary-light flex-shrink-0" />
                            <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-primary dark:text-primary-light flex-shrink-0" />
                            <span>{event.participants}</span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                        <button
                            onClick={() => onViewDetails(event)}
                            className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary font-medium text-xs sm:text-sm transition-all hover:underline flex items-center group/btn"
                        >
                            <span>Voir le compte-rendu détaillé</span>
                            <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
