export default function CalendarSelectionModal({ isOpen, onClose, onSelectCalendar }) {
  if (!isOpen) return null;

  const handleGoogleCalendar = () => {
    onSelectCalendar('google');
    onClose();
  };

  const handleMicrosoftCalendar = () => {
    onSelectCalendar('microsoft');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-dark-container to-dark-gray rounded-2xl border-2 border-gray-800 w-full max-w-lg mx-auto shadow-2xl overflow-hidden"
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

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9d7035]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c1a35e]/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
            Choose Your Calendar
          </h2>
          <p className="text-sm text-white/60 mb-8 text-center">
            Select your preferred calendar to add this event
          </p>

          <div className="space-y-3">
            {/* Google Calendar Option */}
            <button
              onClick={handleGoogleCalendar}
              className="w-full flex items-center gap-4 p-5 bg-black/30 border border-gray-700 hover:border-[#c1a35e]/50 rounded-xl transition-all duration-300 group hover:bg-black/40"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="text-white font-semibold text-base md:text-lg mb-0.5">Google Calendar</div>
                <div className="text-white/60 text-xs md:text-sm">Add to your Google Calendar</div>
              </div>
              <svg className="w-5 h-5 text-white/40 group-hover:text-[#c1a35e] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Microsoft Calendar Option */}
            <button
              onClick={handleMicrosoftCalendar}
              className="w-full flex items-center gap-4 p-5 bg-black/30 border border-gray-700 hover:border-[#c1a35e]/50 rounded-xl transition-all duration-300 group hover:bg-black/40"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-[#0078D4] rounded-xl flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="text-white font-semibold text-base md:text-lg mb-0.5">Microsoft Calendar</div>
                <div className="text-white/60 text-xs md:text-sm">Add to Outlook or Microsoft Calendar</div>
              </div>
              <svg className="w-5 h-5 text-white/40 group-hover:text-[#c1a35e] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

