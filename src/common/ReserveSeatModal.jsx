import ReserveSeatForm from './ReserveSeatForm';

export default function ReserveSeatModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleFormSubmit = (formData) => {
    // Form submission is handled by ReserveSeatForm component via Mailchimp
    // Navigation to thank you page is handled by ReserveSeatForm
    // Close the modal when form is submitted
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-sm overflow-y-auto py-8"
      onClick={onClose}
    >
      <div 
        className="bg-black rounded-2xl border-2 border-gray-800 max-w-6xl w-full mx-4 my-8 relative overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Two Column Layout - Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Event Details */}
            <div className="relative bg-black p-8 lg:p-12 border-r border-gray-800 min-h-[500px] lg:min-h-full">
              

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-6">
                  Event details
                </h3>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  <span className="gradient-text">Exponential by Design</span>
                </h2>
                
              

                {/* Date */}
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#c1a35e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-lg font-medium">6th January 2026</span>
                </div>

                {/* Times */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#c1a35e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-lg font-medium">7:00 PM IST – 8:30 PM IST</span>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#c1a35e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-lg font-medium">12:00 PM – 04:30 PM SGT</span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="bg-gradient-to-br from-dark-container to-dark-gray p-8 lg:p-12 min-h-[500px] lg:min-h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Register now
              </h2>
              
              <ReserveSeatForm onSubmit={handleFormSubmit} />
            </div>
          </div>
      </div>
    </div>
  );
}

