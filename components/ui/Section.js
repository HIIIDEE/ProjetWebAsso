"use client";

import React from "react";

const Section = ({
  id,
  children,
  className = "",
  bgColor = "bg-white",
  padding = "py-20",
  ...props
}) => {
  const sectionClasses = `
    ${bgColor}
    ${padding}
    ${className}
  `.trim();

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section;
