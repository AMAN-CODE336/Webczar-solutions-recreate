// components/ClientCard.jsx
import React from 'react';

const ClientCard = ({ image, name, role, company, quote }) => {
  return (
    <div className="bg-black rounded-xl border border-gray-600 shadow-lg text-white max-w-xs overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-60 object-cover" />
        {/* <button className="absolute bottom-3 right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 4l8 6-8 6V4z" />
          </svg>
        </button> */}
      </div>
      <div className="px-5 py-4">
        <p className="italic text-gray-300 mb-4">"{quote}"</p>
        <h3 className="text-yellow-400 font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{role}  {company}</p>
      </div>
    </div>
  );
};

export default ClientCard;
