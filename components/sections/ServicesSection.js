import React from "react";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nos Objectifs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Nos objectifs sont alignés sur la vision de transformation digitale nationale
            et le développement des compétences numériques en Algérie
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group hover:border-primary-light"
              >
                <div className="text-primary mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
