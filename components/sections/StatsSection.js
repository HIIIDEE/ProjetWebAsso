import React from "react";
import { stats } from "@/data/stats";

const StatsSection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Notre Impact en Chiffres
          </h3>
          <p className="text-blue-100">
            Accompagner l'excellence IT en Algérie
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
