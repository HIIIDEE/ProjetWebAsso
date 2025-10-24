"use client";

import React from "react";

const StatCard = ({ value, label, suffix = "", prefix = "" }) => {
  return (
    <div className="text-center group">
      <div className="text-3xl font-bold text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
        {prefix}
        <span>{value}</span>
        {suffix}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
      <div className="w-12 h-1 bg-primary-light/30 mx-auto mt-2 rounded-full group-hover:bg-primary-light transition-colors duration-300"></div>
    </div>
  );
};

export default StatCard;