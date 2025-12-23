import { useState } from 'react';
import ReserveSeatForm from './ReserveSeatForm';

export default function ReserveSeatModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    // For example, send to an API
    alert('Thank you! Your seat has been reserved.');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-dark-container rounded-xl border border-gray-800 p-8 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Reserve Your Seat
          </h2>
          <p className="text-sm text-white/70">
            Fill in your details to secure your spot
          </p>
        </div>

        {/* Form */}
        <ReserveSeatForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

