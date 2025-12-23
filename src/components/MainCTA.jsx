import { useState } from 'react';
import ReserveSeatModal from '../common/ReserveSeatModal';

export default function MainCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight gradient-text">
            The next decade will not reward the biggest companies. It will reward the best-designed ones.
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Join the global launch of Exponential by Design and gain a framework you can take straight to the boardroom.
          </p>
          <button 
            onClick={handleOpenModal}
            className="px-8 py-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105"
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

