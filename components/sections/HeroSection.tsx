import React from "react";
import { ArrowRight, Shield, Network, Building, Award, LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/hooks/useScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void;
}

interface ExpertiseArea {
    icon: string;
    title: string;
    iconComponent: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
    const getIconComponent = (iconName: string): LucideIcon => {
        const icons: Record<string, LucideIcon> = { Shield, Network, Building, Award };
        return icons[iconName] || Network;
    };

    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const expertiseAreas: ExpertiseArea[] = [
        {
            icon: "🛡️",
            title: "Cybersécurité & Conformité",
            iconComponent: "Shield",
        },
        {
            icon: "🌐",
            title: "Architecture & Infrastructure",
            iconComponent: "Network",
        },
        { icon: "📱", title: "Transformation Digitale", iconComponent: "Building" },
        { icon: "🏆", title: "Gouvernance & Audit IT", iconComponent: "Award" },
    ];

    return (
        <section
            id="accueil"
            className="relative bg-gradient-to-br from-primary-light/10 to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-32 overflow-hidden transition-colors duration-300"
        >
            {/* Éléments décoratifs animés - masqués sur mobile */}
            <div className="absolute inset-0 overflow-hidden hidden sm:block">
                <div
                    className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-primary-light/20 dark:bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                    style={{ transform: `translateY(${offset * 0.5}px)` }}
                ></div>
                <div
                    className="absolute top-40 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-purple-100 dark:bg-purple-900/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                    style={{ transform: `translateY(${offset * 0.2}px)` }}
                ></div>
                <div
                    className="absolute -bottom-8 left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-pink-100 dark:bg-pink-900/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
                    style={{ transform: `translateY(${offset * 0.8}px)` }}
                ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    <div className="max-w-full lg:max-w-none">
                        <RevealOnScroll animation="fadeInUp" duration={0.8}>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                                Association Nationale De la
                                <span className="text-primary dark:text-primary-light relative block mt-1 sm:mt-0 sm:inline">
                                    {" "}
                                    Promotion du Numérique en Algérie
                                    <svg
                                        className="absolute -bottom-2 left-0 w-full h-2 sm:h-3 hidden sm:block"
                                        viewBox="0 0 200 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 10C60 2 140 2 198 10"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            className="text-primary-light"
                                        />
                                    </svg>
                                </span>
                            </h1>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                                Fédérer, représenter et accompagner les DSI algériens dans leurs
                                missions stratégiques de transformation digitale et de gouvernance
                                IT.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fadeInUp" delay={0.4} duration={0.8}>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="group bg-primary hover:bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                                >
                                    <span>Découvrir nos objectifs</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="group bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-primary-light dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                                >
                                    Nous contacter
                                </button>
                            </div>
                        </RevealOnScroll>

                        {/* Statistiques animées */}
                        <RevealOnScroll animation="fadeInUp" delay={0.6} duration={0.8}>
                            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 p-3 sm:p-5 md:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-lg transition-colors duration-300">
                                <div className="text-center">
                                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-primary-light mb-0.5 sm:mb-1">
                                        <AnimatedCounter end={2025} duration={2000} separator={false} />
                                    </div>
                                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">Fondée en</div>
                                </div>
                                <div className="text-center border-l border-gray-200 dark:border-gray-700">
                                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-primary-light mb-0.5 sm:mb-1">
                                        <AnimatedCounter end={28} duration={1500} />
                                    </div>
                                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">Membres Fondateurs</div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Colonne droite avec expertises */}
                    <div className="relative mt-6 sm:mt-8 lg:mt-0">
                        <RevealOnScroll animation="fadeInRight" delay={0.3} duration={0.8}>
                            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 p-4 sm:p-5 md:p-6 lg:p-8 transition-colors duration-300">
                                <div className="text-center mb-4 sm:mb-6 md:mb-8">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                                        Nos Domaines d'Expertise
                                    </h3>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                                        Au service de la transformation digitale
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6">
                                    {expertiseAreas.map((area, index) => {
                                        const IconComponent = getIconComponent(area.iconComponent);
                                        return (
                                            <RevealOnScroll
                                                key={index}
                                                animation="scaleIn"
                                                delay={0.8 + index * 0.1}
                                                duration={0.6}
                                            >
                                                <div className="group text-center p-2.5 sm:p-3 md:p-4 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border dark:border-gray-700 hover:border-primary-light dark:hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-light/20 to-primary-light/10 dark:from-primary/20 dark:to-primary/10 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                                                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary dark:text-primary-light" />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 dark:text-white text-[10px] sm:text-xs md:text-sm mb-1 sm:mb-1.5 md:mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2 leading-tight">
                                                        {area.title}
                                                    </h4>
                                                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">{area.icon}</div>
                                                </div>
                                            </RevealOnScroll>
                                        );
                                    })}
                                </div>

                                {/* Badge de certification */}
                                <RevealOnScroll animation="fadeInUp" delay={1.2} duration={0.6}>
                                    <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                                        <div className="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-light/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border border-primary-light dark:border-primary/50 rounded-full">
                                            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary dark:text-primary-light mr-1.5 sm:mr-2 flex-shrink-0" />
                                            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-primary-dark dark:text-primary-light">
                                                Association reconnue d'utilité publique
                                            </span>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </div>
                        </RevealOnScroll>

                        {/* Éléments décoratifs flottants */}
                        <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-light to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                        <div className="hidden md:block absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-light to-primary-light/100 rounded-full opacity-10 animate-bounce" style={{ animationDuration: '3s' }}></div>
                    </div>
                </div>
            </div>

            {/* CSS personnalisé pour les animations blob */}
            <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
