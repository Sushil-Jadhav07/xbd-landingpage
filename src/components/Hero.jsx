import { useState } from 'react';
import ReserveSeatModal from '../common/ReserveSeatModal';
import Picture1 from '../assets/Picture1.jpg';

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
    <section className="relative bg-black min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/5 via-transparent to-[#c1a35e]/5 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Top Info Bar */}
        <div className="mb-10 text-sm text-white/60 flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-dark-container rounded-full border border-gray-800">Global book launch</span>
          <span className="text-white/40">•</span>
          <span className="px-3 py-1 bg-dark-container rounded-full border border-gray-800">CXO audience</span>
          <span className="text-white/40">•</span>
          <span className="px-3 py-1 bg-dark-container rounded-full border border-gray-800">Live Q and A</span>
          <span className="text-white/40">•</span>
          <span className="px-3 py-1 bg-dark-container rounded-full border border-gray-800">Recording included</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Content */}
          <div>
            {/* Main Title */}
            <h1 className="text-2xl md:text-5xl font-bold mb-8 !leading-[1.2]">
              <span className="gradient-text">Exponential by Design:</span> Why Growth in the AI Era Is a Design Problem - Not a Technology Problem
            </h1>

            {/* Description */}
            <p className="text-sm md:text-lg text-white/80 mb-10 leading-relaxed">
              Join the official global book-launch webinar where Anuj Pandey introduces the X-Framework - a new blueprint for designing organizations that learn, adapt, and scale exponentially.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="w-full flex justify-center md:w-auto md:flex-none">
                <button 
                  onClick={handleOpenModal}
                  className="px-10 py-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-lg shadow-[#9d7035]/20"
                >
                  Reserve My Seat
                </button>
              </div>
              <button className="px-6 py-3 bg-dark-container text-white rounded-lg font-medium hover:bg-dark-gray transition-all border border-gray-700 hover:border-gray-600">
                Download Free Chapter
              </button>
              <button className="px-6 py-3 bg-dark-container text-white rounded-lg font-medium hover:bg-dark-gray transition-all border border-gray-700 hover:border-gray-600">
                See agenda
              </button>
            </div>

            {/* Event Details - Enhanced Design */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-dark-container to-dark-gray p-6 rounded-xl border border-gray-800 hover:border-[#c1a35e]/50 transition-all duration-300">
                <label className="text-xs uppercase tracking-wider text-white/50 mb-3 block font-semibold">Date</label>
                <div className="text-white text-lg font-medium border-b border-white/10 pb-2 min-h-[28px]">Select date</div>
              </div>
              <div className="bg-gradient-to-br from-dark-container to-dark-gray p-6 rounded-xl border border-gray-800 hover:border-[#c1a35e]/50 transition-all duration-300">
                <label className="text-xs uppercase tracking-wider text-white/50 mb-3 block font-semibold">Time</label>
                <div className="text-white text-lg font-medium border-b border-white/10 pb-2 min-h-[28px]">Select time</div>
              </div>
              <div className="bg-gradient-to-br from-dark-container to-dark-gray p-6 rounded-xl border border-gray-800 hover:border-[#c1a35e]/50 transition-all duration-300">
                <label className="text-xs uppercase tracking-wider text-white/50 mb-3 block font-semibold">Format</label>
                <div className="text-white text-lg font-medium">Live Online (Global)</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center lg:justify-center">
            <div className="relative group w-full max-w-2xl">
                <img
                  src={Picture1}
                  alt="Exponential by Design cover"
                  className="relative z-10 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
          </div>
        </div>

        {/* Registration Form - Enhanced */}
        {/* <div className="mb-12 bg-dark-container/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Reserve your seat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors placeholder:text-white/30"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-3">Work email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors placeholder:text-white/30"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-3">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c1a35e] transition-colors placeholder:text-white/30"
                placeholder="Enter your company"
              />
            </div>
          </div>
        </div> */}
      </div>

      {/* Modal Popup */}
      <ReserveSeatModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}

