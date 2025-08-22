"use client";

import React from "react";

export default function Button({
    children,
    variant = "default",
    disabled = false,
    size = "md",
    ...props
}) {
    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    // Use Tailwind's arbitrary value syntax for dynamic colors
    const getColorClass = (variant) => {
        if (disabled) return "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300";
        if (variant === "default") {
            return `bg-green-primary text-white hover:bg-green-dark transition-colors duration-600 ease-in-out cursor-pointer`;
        }
        if (variant === "outline") {
            return `border border-green-primary text-green-primary bg-white hover:bg-green-primary transition-colors duration-600 ease-in-out cursor-pointer`;
        }
        if (variant === "cyan") {
            return `text-button-text-secondary bg-cyan-primary hover:scale-105 transition-all duration-600 ease-in-out cursor-pointer`;
        }
        return "";
    };

    const base = `rounded font-semibold transition-colors duration-600 ease-in-out cursor-pointer ${sizes[size]}`;
    const style = `${base} ${getColorClass(variant)}`;

    return (
        <button className={style} disabled={disabled} {...props}>
            {children}
        </button>
    );
}
