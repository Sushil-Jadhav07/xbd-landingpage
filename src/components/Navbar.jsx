import logomain from '../assets/logomain.png';
import { useState } from 'react';
import ReserveSeatModal from '../common/ReserveSeatModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Who Should Attend', href: '#who-should-attend' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' }
  ];

  return (
    <>
      <header className="bg-black border-b border-gray-900 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between relative">
            {/* Left Spacer - Equal width to right side for centering */}
            <div className="flex-1"></div>

            {/* Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="flex items-center gap-3"
              >
                <img 
                  src={logomain} 
                  alt="XBD Logo" 
                  className="h-10 sm:h-12 md:h-14 w-auto"
                />                
              </a>
            </div>

            {/* Nav Links and Button - Right Side */}
            <div className="flex-1 flex items-center justify-end gap-6">
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-white/70 hover:text-[#c1a35e] transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Register Now Button - Gold Gradient */}
              <button
                onClick={handleOpenModal}
                className="px-6 py-2.5 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] hover:opacity-90 text-white rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out shadow-lg shadow-[#9d7035]/20"
              >
                Register Now
              </button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-white/80 hover:text-[#c1a35e] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal Popup */}
      <ReserveSeatModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

