"use client";

import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    bgColor?: string;
    padding?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
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
