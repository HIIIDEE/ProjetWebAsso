"use client";

import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
  patriotic = false,
  ...props
}) => {
  const baseClasses =
    "bg-white rounded-xl shadow-lg border transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-xl hover:scale-105" : "";
  const patrioticClasses = patriotic
    ? "border-green-100 hover:border-green-300"
    : "";

  const cardClasses = `
    ${baseClasses}
    ${hoverClasses}
    ${patrioticClasses}
    ${className}
  `.trim();

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
