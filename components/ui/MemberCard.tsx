"use client";

import React, { useMemo } from "react";
import { Linkedin, Mail, Star, Crown, Trophy, Briefcase } from "lucide-react";
import { FoundingMember } from "@/data/foundingMembers";

interface MemberCardProps {
    member: FoundingMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    // Fonction pour obtenir le style selon le statut
    const getStatusConfig = (status: string) => {
        const statusLower = status.toLowerCase();

        if (statusLower.includes('président')) {
            return {
                gradient: 'from-accent to-accent-dark', // Rouge (Algérie/Marque) pour le Président
                icon: Crown,
                label: status
            };
        } else if (statusLower.includes('trésorier') || statusLower.includes('secrétaire') || statusLower.includes('vice')) {
            return {
                gradient: 'from-primary to-primary-dark', // Vert (Principal) pour le Bureau
                icon: Trophy,
                label: status
            };
        } else if (statusLower.includes('fondateur')) {
            return {
                gradient: 'from-primary/80 to-primary', // Vert aussi pour les fondateurs
                icon: Star,
                label: 'Fondateur'
            };
        } else {
            return {
                gradient: 'from-gray-500 to-gray-700',
                icon: Briefcase,
                label: status
            };
        }
    };

    const statusConfig = useMemo(() => getStatusConfig(member.status), [member.status]);
    const StatusIcon = statusConfig.icon;

    return (
        <div className="group relative h-full">
            {/* Carte avec en-tête coloré */}
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group-hover:-translate-y-2">

                {/* En-tête Gradient */}
                <div className={`w-full h-24 bg-gradient-to-r ${statusConfig.gradient} opacity-90 relative transition-all duration-500 group-hover:opacity-100`}>
                    {/* Texture subtile */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                    {/* Badge Status en haut à droite */}
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white p-1.5 rounded-full shadow-sm">
                        <StatusIcon className="w-4 h-4" />
                    </div>
                </div>

                {/* Avatar (Chevauchement) */}
                <div className="relative -mt-12 mb-4">
                    <div className="w-24 h-24 rounded-full p-1 bg-white dark:bg-gray-800 shadow-lg ring-4 ring-white dark:ring-gray-800">
                        <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-600 group-hover:scale-105 transition-transform duration-500">
                            {member.photo ? (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${statusConfig.gradient}`}>
                                    {member.name.charAt(0)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Informations */}
                <div className="w-full flex-1 flex flex-col items-center px-6 pb-6 pt-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-1">
                        {member.name}
                    </h3>

                    <p className="text-primary dark:text-primary-light font-medium text-sm mb-1 line-clamp-1">
                        {member.position}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wide mb-5 line-clamp-1">
                        {member.company}
                    </p>

                    {/* Expertises */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-5 w-full">
                        {member.specialties.slice(0, 3).map((specialty, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] sm:text-xs font-medium rounded-full border border-gray-100 dark:border-gray-600 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors"
                            >
                                {specialty}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex items-center justify-center space-x-3 w-full border-t border-gray-50 dark:border-gray-700 pt-4">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-9 h-9 text-gray-400 hover:text-white hover:bg-[#0077b5] rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                            aria-label={`LinkedIn de ${member.name}`}
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href={`mailto:${member.email}`}
                            className="flex items-center justify-center w-9 h-9 text-gray-400 hover:text-white hover:bg-primary rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                            aria-label={`Email de ${member.name}`}
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
