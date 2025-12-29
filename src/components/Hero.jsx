import { useState } from 'react';
import ReserveSeatModal from '../common/ReserveSeatModal';
import Picture1 from '../assets/Picture1.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

  const handleScrollToAgenda = () => {
    const element = document.querySelector('#agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [infoBarRef, infoBarVisible] = useScrollAnimation({ threshold: 0.1 });
  const [leftColRef, leftColVisible] = useScrollAnimation({ threshold: 0.1 });
  const [rightColRef, rightColVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="home" className="relative bg-black min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/5 via-transparent to-[#c1a35e]/5 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Top Info Bar */}
        <div ref={infoBarRef} className={`mb-10 text-white/60 transition-all duration-700 ${infoBarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:gap-2">
            <span className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm bg-dark-container rounded-full border border-gray-800 text-center whitespace-nowrap inline-flex items-center justify-center">Global Masterclass</span>
            <span className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm bg-dark-container rounded-full border border-gray-800 text-center whitespace-nowrap inline-flex items-center justify-center">CXO </span>
            <span className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm bg-dark-container rounded-full border border-gray-800 text-center whitespace-nowrap inline-flex items-center justify-center">Live Q and A</span>
            <span className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm bg-dark-container rounded-full border border-gray-800 text-center whitespace-nowrap inline-flex items-center justify-center">BEYOND THE HYPE</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Content */}
          <div ref={leftColRef} className={`transition-all duration-700 delay-100 ${leftColVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Main Title */}
            <h1 className="text-xl md:text-4xl font-bold mb-8 !leading-[1.2]">
              <span className="gradient-text">Exponential by Design™ Masterclass:</span> Why Growth in the AI Era Is a Design Problem - Not a Technology Problem
            </h1>

            {/* Description */}
            <p className="text-sm md:text-lg text-white/80 mb-10 leading-relaxed">
            A live executive masterclass on how future-ready organizations design learning, adaptability, and scale into their core — before technology even enters the conversation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-4 mb-8">
              <button 
                onClick={handleOpenModal}
                className="w-full px-3 py-2 md:px-10 md:py-4 text-xs md:text-base bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-lg shadow-[#9d7035]/20"
              >
                Reserve My Seat
              </button>
              <button 
                onClick={handleScrollToAgenda}
                className="w-full px-2 py-2 md:px-6 md:py-3 text-xs md:text-base bg-dark-container text-white rounded-lg font-medium hover:bg-dark-gray transition-all border border-gray-700 hover:border-gray-600"
              >
                See agenda
              </button>
            </div>

            {/* Event Details Banner */}
            <div className="relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-8 rounded-2xl border-2 border-gray-800 overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9d7035]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c1a35e]/20 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative flex flex-col gap-6">
                {/* Date and Times */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {/* Date */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white text-sm md:text-base font-medium">6th January 2026</span>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block w-px h-8 bg-white/20"></div>

                  {/* Times */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white text-sm md:text-base font-medium">7:00 PM IST – 8:30 PM IST</span>
                    </div>
                    
                    {/* Vertical Divider */}
                    {/* <div className="hidden md:block w-px h-8 bg-white/20"></div>
                    
                    <span className="text-white text-sm md:text-base font-medium">12:00 PM - 4:30 PM SGT</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={rightColRef} className={`relative flex items-center justify-center lg:justify-center transition-all duration-700 delay-200 ${rightColVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
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

