"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  Award,
  Users,
  Star,
} from "lucide-react";
import { foundingMembers } from "@/data/foundingMembers";
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';


const FoundingMembersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(foundingMembers.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play (optionnel)
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Membres Fondateurs
            </h2>
            <Star className="w-8 h-8 text-yellow-500 ml-3" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les visionnaires qui ont créé l'ANAPNA et qui continuent à
            façonner l'avenir du numérique en Algérie
          </p>
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
            <Award className="w-4 h-4 mr-2" />
            <span>
              Fondée en 2008 • {foundingMembers.length} membres fondateurs
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {foundingMembers
                      .slice(
                        slideIndex * cardsPerView,
                        (slideIndex + 1) * cardsPerView
                      )
                      .map((member) => (
                        <div key={member.id} className="group">
                          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden group-hover:scale-105">
                            {/* Photo Section */}
                            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
                              {/* Placeholder pour photo - à remplacer par de vraies images */}
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-200">
                                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                                  {member.name.charAt(0)}
                                </div>
                              </div>
                              {/* Badge fondateur */}
                              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                <Star className="w-3 h-3 mr-1" />
                                Fondateur
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                              {/* Name and Position */}
                              <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                  {member.name}
                                </h3>
                                <p className="text-blue-600 font-semibold text-sm mb-1">
                                  {member.position}
                                </p>
                                <p className="text-gray-600 text-sm font-medium">
                                  {member.company}
                                </p>
                              </div>

                              {/* Bio */}
                              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {member.bio}
                              </p>

                              {/* Specialties */}
                              <div className="mb-4">
                                <p className="text-xs font-medium text-gray-500 mb-2">
                                  EXPERTISES :
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {member.specialties.map(
                                    (specialty, index) => (
                                      <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                                      >
                                        {specialty}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* Contact Links */}
                              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors group/btn"
                                >
                                  <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                </a>
                                <a
                                  href={`mailto:${member.email}`}
                                  className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors group/btn"
                                >
                                  <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                </a>
                                <div className="flex-1 text-right">
                                  <span className="text-xs text-gray-500">
                                    Membre #00{member.id}
                                  </span>
                                </div>
                              </div>
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
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 border group z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 border group z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>
            </>
          )}

          {/* Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 h-3 bg-blue-600 rounded-full"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
  <div className="text-center mb-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">
      L'Héritage des Fondateurs
    </h3>
    <p className="text-gray-600">
      Leur vision continue d'inspirer notre communauté
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="text-center group">
      <div className="text-3xl font-bold text-blue-600 mb-2 transition-transform group-hover:scale-110 duration-300">
        <AnimatedCounter end={2008} duration={2000} />
      </div>
      <div className="text-gray-600 text-sm">Année de fondation</div>
      <div className="w-12 h-1 bg-blue-200 mx-auto mt-2 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
    </div>
    
    <div className="text-center group">
      <div className="text-3xl font-bold text-blue-600 mb-2 transition-transform group-hover:scale-110 duration-300">
        <AnimatedCounter end={6} duration={1500} />
      </div>
      <div className="text-gray-600 text-sm">Membres fondateurs</div>
      <div className="w-12 h-1 bg-blue-200 mx-auto mt-2 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
    </div>
    
    <div className="text-center group">
      <div className="text-3xl font-bold text-blue-600 mb-2 transition-transform group-hover:scale-110 duration-300">
        <AnimatedCounter end={150} suffix="+" duration={2500} />
      </div>
      <div className="text-gray-600 text-sm">
        Ans d'expérience cumulée
      </div>
      <div className="w-12 h-1 bg-blue-200 mx-auto mt-2 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
    </div>
    
    <div className="text-center group">
      <div className="text-3xl font-bold text-blue-600 mb-2 transition-transform group-hover:scale-110 duration-300">
        <AnimatedCounter end={100} suffix="%" duration={2000} />
      </div>
      <div className="text-gray-600 text-sm">Toujours actifs</div>
      <div className="w-12 h-1 bg-blue-200 mx-auto mt-2 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
    </div>
  </div>
</div>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Rejoignez cette communauté d'excellence
            </h3>
            <p className="text-gray-600 mb-6">
              Suivez les traces de nos membres fondateurs et participez à
              l'évolution du numérique en Algérie
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              <span>Devenir membre</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FoundingMembersSection;
