"use client";

import React, { useMemo } from "react";
import { Linkedin, Mail, Star, Crown, Trophy, Briefcase } from "lucide-react";

const MemberCard = ({ member }) => {
  // Fonction pour obtenir le style selon le statut
  const getStatusConfig = (status) => {
    const statusLower = status.toLowerCase();

    if (statusLower.includes('président')) {
      return {
        bgColor: 'bg-red-500',
        iconType: 'crown',
        label: status
      };
    } else if (statusLower.includes('trésorier') || statusLower.includes('secrétaire')) {
      return {
        bgColor: 'bg-red-500',
        iconType: 'trophy',
        label: status
      };
    } else if (statusLower.includes('fondateur')) {
      return {
        bgColor: 'bg-yellow-500',
        iconType: 'star',
        label: 'Fondateur'
      };
    } else {
      return {
        bgColor: 'bg-red-500',
        iconType: 'briefcase',
        label: status
      };
    }
  };

  const statusConfig = useMemo(() => getStatusConfig(member.status), [member.status]);

  return (
    <div className="group h-full">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-light overflow-hidden h-full flex flex-col">
        {/* Photo Section */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-primary-light/10 to-gray-light overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-light/20 to-gray-light">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-xl">
              {member.name?.charAt(0) || 'M'}
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

          {/* Badge de statut */}
          <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 ${statusConfig.bgColor} text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold flex items-center z-10 shadow-lg`}>
            {statusConfig.iconType === 'crown' && <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />}
            {statusConfig.iconType === 'trophy' && <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />}
            {statusConfig.iconType === 'star' && <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />}
            {statusConfig.iconType === 'briefcase' && <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />}
            {statusConfig.label}
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

          {/* Specialties */}
          <div className="flex-1">
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