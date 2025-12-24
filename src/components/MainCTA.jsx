import { useState } from 'react';
import ReserveSeatModal from '../common/ReserveSeatModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function MainCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-950 to-black py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(157,112,53,0.1),transparent)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#9d7035]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={contentRef} className={`text-center transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6 px-4 py-2 bg-dark-container rounded-full border border-gray-800">
            <span className="text-xs uppercase tracking-wider text-white/60">Final Call to Action</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight max-w-6xl mx-auto text-white">
            The next decade will not reward the biggest companies. It will reward the <span className="gradient-text">best-designed ones.</span>
          </h2>
          <p className="text-sm md:text-lg text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the global launch of Exponential by Design and gain a framework you can take straight to the boardroom.
          </p>
          <button 
            onClick={handleOpenModal}
            className="px-12 py-5 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-2xl shadow-[#9d7035]/40"
          >
            Reserve My Seat
          </button>
        </div>

        {/* Modal Popup */}
        <ReserveSeatModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}

