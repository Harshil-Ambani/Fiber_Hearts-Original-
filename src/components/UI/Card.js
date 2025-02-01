import React from 'react';

export const Card = ({ children }) => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {children}
        </div>
    );
};

export const CardContent = ({ children }) => {
    return (
        <div className="text-gray-700 text-base">
            {children}
        </div>
    );
};

export const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            {children}
        </button>
    );
};
