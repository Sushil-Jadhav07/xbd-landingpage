import { useState } from 'react';
import logomain from '../assets/logomain.png';
import CalendarSelectionModal from '../common/CalendarSelectionModal';

export default function ThankYou() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const handleAddToCalendar = () => {
    setIsCalendarModalOpen(true);
  };

  const handleCloseCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  const handleSelectCalendar = (calendarType) => {
    // Create calendar event data
    // 6 Jan 2026, 7:00 PM IST = 6 Jan 2026, 1:30 PM UTC
    // 6 Jan 2026, 8:30 PM IST = 6 Jan 2026, 3:00 PM UTC
    const eventData = {
      title: 'Exponential by Design™ Masterclass',
      description: 'Global Book Launch Webinar: Why Growth in the AI Era Is a Design Problem - Not a Technology Problem',
      location: 'Live online session',
      startDate: '20260106T133000Z', // UTC time
      endDate: '20260106T150000Z',    // UTC time
      startDateLocal: '20260106T190000', // IST time for Microsoft
      endDateLocal: '20260106T203000'    // IST time for Microsoft
    };

    if (calendarType === 'google') {
      // Create Google Calendar URL
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventData.title)}&dates=${eventData.startDate}/${eventData.endDate}&details=${encodeURIComponent(eventData.description)}&location=${encodeURIComponent(eventData.location)}`;
      window.open(googleCalendarUrl, '_blank');
    } else if (calendarType === 'microsoft') {
      // Create Microsoft Calendar URL (Outlook.com)
      // Microsoft Calendar uses a different format
      const microsoftCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventData.title)}&startdt=${eventData.startDateLocal}&enddt=${eventData.endDateLocal}&body=${encodeURIComponent(eventData.description)}&location=${encodeURIComponent(eventData.location)}`;
      window.open(microsoftCalendarUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header with Logo */}
      <header className="bg-black border-b border-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <a 
              href="/" 
              className="flex items-center gap-3"
            >
              <img 
                src={logomain} 
                alt="XBD Logo" 
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Thank You Content */}
      <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/5 via-transparent to-[#c1a35e]/5 pointer-events-none"></div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Logo */}
          

          {/* Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Thank you for filling the form
            </h1>
          </div>

          {/* Subtext */}
          <div className="mb-10">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center max-w-2xl mx-auto">
              You&apos;re registered for the Exponential by Design™ Masterclass.
              A confirmation email with session details and access information has been sent to your inbox.
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-gradient-to-br from-dark-container via-dark-container to-dark-gray border border-gray-800 rounded-2xl p-8 mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Event Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold gradient-text mb-2">
                  Exponential by Design™ Masterclass
                </h3>
              </div>
              
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c1a35e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base md:text-lg">Date: 6 January 2026</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c1a35e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base md:text-lg">Time: 7:00 PM – 8:30 PM IST</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c1a35e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base md:text-lg">Format: Live online session</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c1a35e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base md:text-lg">Recording: Included</span>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              What Happens Next <span className="text-[#c1a35e]">(Very Important)</span>
            </h2>
            
            <ol className="space-y-4 text-white/80 text-base md:text-lg">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] flex items-center justify-center text-white font-bold text-sm mt-0.5">1</span>
                <span>You&apos;ll receive a confirmation email shortly</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] flex items-center justify-center text-white font-bold text-sm mt-0.5">2</span>
                <span>The session access link will be shared closer to the event</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] flex items-center justify-center text-white font-bold text-sm mt-0.5">3</span>
                <span>You can join live</span>
              </li>
            </ol>
            
            <p className="mt-4 text-white/60 text-sm md:text-base italic">
              (No further action is required right now.)
            </p>
          </div>

          {/* Add to Calendar Button */}
          <div className="mb-10 text-center">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 px-6 py-3 text-white/80 hover:text-white border border-gray-700 hover:border-[#c1a35e]/50 rounded-lg text-sm md:text-base font-medium transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add this session to your calendar
            </button>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-white/50 text-center">
              If you don&apos;t see the confirmation email, please check your spam folder
              {' '}or contact us at{' '}
              <a href="mailto:support@xbd.co.in" className="text-[#c1a35e] hover:text-[#9d7035] underline">
                support@xbd.co.in
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Selection Modal */}
      <CalendarSelectionModal 
        isOpen={isCalendarModalOpen} 
        onClose={handleCloseCalendarModal}
        onSelectCalendar={handleSelectCalendar}
      />
    </div>
  );
}

