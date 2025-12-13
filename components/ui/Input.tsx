"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    patriotic?: boolean;
}

const Input: React.FC<InputProps> = ({
    className = "",
    patriotic = false,
    ...props
}) => {
    const baseClasses =
        "border rounded-lg px-4 py-3 focus:outline-none transition-colors w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500";
    const patrioticClasses = patriotic
        ? "border-green-300 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
        : "border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary-light";

    const inputClasses = `
    ${baseClasses}
    ${patrioticClasses}
    ${className}
  `.trim();

    return (
        <input
            className={inputClasses}
            {...props}
        />
    );
};

export default Input;
