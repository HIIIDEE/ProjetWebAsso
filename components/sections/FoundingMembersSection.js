"use client";

import React from "react";
import { Award, Star } from "lucide-react";
import { foundingMembers } from "@/data/foundingMembers";
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import Carousel from '@/components/ui/Carousel';
import MemberCard from '@/components/ui/MemberCard';
import StatCard from '@/components/ui/StatCard';


const FoundingMembersSection = () => {

  return (
    <section id="membres" className="py-20 bg-white">
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
              Fondée en 2025 • {foundingMembers.length} membres fondateurs
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="px-4 md:px-8 lg:px-12">
          <Carousel
            items={foundingMembers}
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            autoPlay={true}
            autoPlayInterval={6000}
            showControls={true}
            showIndicators={true}
            spaceBetween={24}
          >
            {(member) => <MemberCard member={member} />}
          </Carousel>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-light/10 to-accent/10 rounded-2xl p-8 border border-primary-light/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              L'Héritage des Fondateurs
            </h3>
            <p className="text-gray-600">
              Leur vision continue d'inspirer notre communauté
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              value={<AnimatedCounter end={2025} duration={2000} />}
              label="Année de fondation"
            />

            <StatCard
              value={<AnimatedCounter end={foundingMembers.length} duration={1500} />}
              label="Membres fondateurs"
            />

            <StatCard
              value={<AnimatedCounter end={400} duration={2500} />}
              label="Ans d'expérience cumulée"
              suffix="+"
            />

            <StatCard
              value={<AnimatedCounter end={100} duration={2000} />}
              label="Toujours actifs"
              suffix="%"
            />
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Rejoignez cette communauté d'excellence
            </h3>
            <p className="text-gray-600 mb-6">
              Suivez les traces de nos membres fondateurs et participez à
              l'évolution du numérique en Algérie
            </p>
            <button className="bg-primary hover:bg-primary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
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
