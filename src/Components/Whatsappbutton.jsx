// WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/99882 21729" // Change to your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-18 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
