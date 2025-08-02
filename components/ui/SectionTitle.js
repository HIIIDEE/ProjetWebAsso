"use client";

import React from "react";

const SectionTitle = ({
  title,
  subtitle,
  emoji,
  patriotic = false,
  className = "",
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
        {emoji && <span className="mr-3">{emoji}</span>}
        {title}
        {patriotic && <span className="ml-3">🇩🇿</span>}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
