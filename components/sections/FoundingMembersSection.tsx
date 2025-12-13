"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, Users } from "lucide-react";
import { foundingMembers, FoundingMember } from "@/data/foundingMembers";
import { RevealOnScroll } from "@/hooks/useScrollReveal";
import MemberCard from "@/components/ui/MemberCard";

// Types pour les filtres
type FilterType = 'all' | 'founders' | 'board';

const FoundingMembersSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [membersList, setMembersList] = useState<FoundingMember[]>(foundingMembers);

    // Détection mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Nombre initial basé sur la taille d'écran
    const initialCount = isMobile ? 4 : 8;
    const [visibleCount, setVisibleCount] = useState(initialCount);

    // Mettre à jour visibleCount quand isMobile change
    useEffect(() => {
        setVisibleCount(isMobile ? 4 : 8);
    }, [isMobile]);

    // Mélanger les membres aléatoirement au chargement (côté client uniquement)
    React.useEffect(() => {
        setMembersList([...foundingMembers].sort(() => Math.random() - 0.5));
    }, []);

    // Filtrage des membres
    const filteredMembers = useMemo(() => {
        return membersList.filter((member) => {
            const matchesSearch =
                member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.position.toLowerCase().includes(searchQuery.toLowerCase());

            if (activeFilter === "all") return matchesSearch;
            if (activeFilter === "board")
                return (
                    matchesSearch &&
                    (member.status.toLowerCase().includes("président") ||
                        member.status.toLowerCase().includes("vice") ||
                        member.status.toLowerCase().includes("secrétaire") ||
                        member.status.toLowerCase().includes("trésorier"))
                );
            if (activeFilter === "founders")
                return matchesSearch && member.status.toLowerCase().includes("membre fondateur");

            return matchesSearch;
        });
    }, [activeFilter, searchQuery, membersList]);

    // Membres visibles selon la pagination
    const visibleMembers = filteredMembers.slice(0, visibleCount);
    const hasMore = visibleCount < filteredMembers.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + (isMobile ? 4 : 8));
    };

    return (
        <section id="membres" className="py-24 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
            {/* Arrière-plan décoratif subtil */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <RevealOnScroll animation="fadeInUp">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary dark:text-primary-light font-semibold text-sm rounded-full mb-4">
                            Notre Écosystème
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Membres Fondateurs
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            L'élite de l'IT algérien unie pour catalyser la transformation numérique nationale.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Barre de contrôle : Filtres & Recherche */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-2 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-4">
                        {/* Filtres "Pillbox" */}
                        <div className="flex bg-gray-100/50 dark:bg-gray-900/50 p-1 rounded-xl w-full md:w-auto">
                            {[
                                { id: 'all', label: 'Tous' },
                                { id: 'board', label: 'Bureau Exécutif' },
                                { id: 'founders', label: 'Fondateurs' }
                            ].map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id as FilterType)}
                                    className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex-1 md:flex-none ${activeFilter === filter.id
                                        ? "text-gray-900 dark:text-gray-100 shadow-sm bg-white dark:bg-gray-700"
                                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>

                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden md:block mx-2"></div>

                        {/* Recherche Minimaliste */}
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Rechercher par nom, entreprise..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 bg-transparent rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:bg-white/50 dark:focus:bg-gray-700/50 transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Grille des membres */}
                {visibleMembers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {visibleMembers.map((member: FoundingMember, index) => (
                            <RevealOnScroll key={member.id} animation="fadeInUp" delay={index * 0.05} duration={0.6} className="h-full">
                                <MemberCard member={member} />
                            </RevealOnScroll>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 mx-auto max-w-2xl">
                        <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">Aucun membre trouvé</h3>
                        <p className="text-gray-500">Essayez de modifier votre recherche ou vos filtres.</p>
                    </div>
                )}

                {/* Boutons Voir Plus / Voir Moins */}
                {filteredMembers.length > initialCount && (
                    <div className="text-center mt-20">
                        {hasMore ? (
                            <button
                                onClick={handleLoadMore}
                                className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Voir plus de membres
                                    <Users className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        ) : (
                            <button
                                onClick={() => setVisibleCount(initialCount)}
                                className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Voir moins
                                    <Users className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform" />
                                </span>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FoundingMembersSection;
