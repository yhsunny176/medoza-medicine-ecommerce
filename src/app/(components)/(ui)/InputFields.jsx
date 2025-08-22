import React from "react";

export function InputField({ label, error, className = "", ...props }) {
    return (
        <div>
            {label && <label className="block font-medium mb-1">{label}</label>}
            <input
                className={`input px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-primary ${className}`}
                {...props}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}

export function TextAreaField({ label, error, className = "", rows = 2, ...props }) {
    return (
        <div>
            {label && <label className="block font-medium mb-1">{label}</label>}
            <textarea
                className={`input px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-primary ${className}`}
                rows={rows}
                {...props}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}
