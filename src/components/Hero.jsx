import { useState } from 'react';
import ReserveSeatModal from '../common/ReserveSeatModal';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Top Info Bar */}
        <div className="mb-8 text-sm text-white/70">
          Global book launch • CXO audience • Live Q and A • Recording included
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight gradient-text">
          Exponential by Design: Why Growth in the AI Era Is a Design Problem - Not a Technology Problem
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg font-bold text-white/90 mb-8 max-w-4xl leading-relaxed">
          Join the official global book-launch webinar where Anuj Pandey introduces the X-Framework - a new blueprint for designing organizations that learn, adapt, and scale exponentially.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button 
            onClick={handleOpenModal}
            className="px-8 py-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105"
          >
            Reserve My Seat
          </button>
          <button className="px-6 py-3 bg-dark-gray text-white rounded-lg font-medium hover:bg-gray-800 transition-colors border border-gray-700">
            Download Free Chapter
          </button>
          <button className="px-6 py-3 bg-dark-gray text-white rounded-lg font-medium hover:bg-gray-800 transition-colors border border-gray-700">
            See agenda
          </button>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-dark-container p-4 rounded-lg border border-gray-800">
            <label className="text-sm text-white/70 mb-2 block">Date</label>
            <div className="text-white border-b border-white/20 pb-2 min-h-[24px]">Select date</div>
          </div>
          <div className="bg-dark-container p-4 rounded-lg border border-gray-800">
            <label className="text-sm text-white/70 mb-2 block">Time</label>
            <div className="text-white border-b border-white/20 pb-2 min-h-[24px]">Select time</div>
          </div>
          <div className="bg-dark-container p-4 rounded-lg border border-gray-800">
            <label className="text-sm text-white/70 mb-2 block">Format</label>
            <div className="text-white pb-2">Live Online (Global)</div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reserve your seat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Work email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Enter your company"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <ReserveSeatModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}

