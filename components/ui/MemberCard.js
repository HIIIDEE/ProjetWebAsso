"use client";

import React from "react";
import { Linkedin, Mail, Star } from "lucide-react";

const MemberCard = ({ member }) => {
  return (
    <div className="group h-full">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-light overflow-hidden group-hover:scale-[1.02] h-full flex flex-col">
        {/* Photo Section */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-primary-light/10 to-gray-light overflow-hidden">
          {member.photo ? (
            <>
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.classList.remove('hidden');
                }}
              />
              <div className="fallback-avatar hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-light/20 to-gray-light absolute inset-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-xl">
                  {member.name.charAt(0)}
                </div>
              </div>
            </>
          ) : (
            <div className="fallback-avatar w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-light/20 to-gray-light">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-xl">
                {member.name.charAt(0)}
              </div>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Badge fondateur */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-yellow-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold flex items-center z-10 shadow-lg">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
            Fondateur
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          {/* Name and Position */}
          <div className="mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-1">
              {member.name}
            </h3>
            <p className="text-primary font-semibold text-xs sm:text-sm mb-1 line-clamp-2">
              {member.position}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm font-medium line-clamp-1">
              {member.company}
            </p>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
              {member.bio}
            </p>

            {/* Specialties */}
            <div className="mb-3 sm:mb-4">
              <p className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1.5 sm:mb-2">
                EXPERTISES :
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {member.specialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-primary-light/10 text-primary px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap"
                  >
                    {specialty}
                  </span>
                ))}
                {member.specialties.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    +{member.specialties.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex items-center space-x-2 sm:space-x-3 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-primary hover:bg-primary-dark text-white rounded-full transition-all duration-300 group/btn hover:scale-110"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-all duration-300 group/btn hover:scale-110"
              aria-label={`Email de ${member.name}`}
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
            </a>
            <div className="flex-1 text-right">
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                Membre #{String(member.id).padStart(3, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;