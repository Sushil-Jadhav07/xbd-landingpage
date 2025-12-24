import { useNavigate } from 'react-router-dom';
import ReserveSeatForm from '../common/ReserveSeatForm';
import logomain from '../assets/logomain.png';

export default function Register() {
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    // For example, send to an API
    alert('Thank you! Your seat has been reserved.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Main Content */}
      <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">

        <div className="relative max-w-7xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#9d7035]/20 to-[#c1a35e]/20 rounded-full border border-[#c1a35e]/30 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-wider text-[#c1a35e] font-semibold">Secure Your Spot</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Register <span className="gradient-text">Now</span>
            </h1>
          </div>

          {/* Premium Side by Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Event Details Card - Premium */}
            <div className="relative group">
              {/* Glow Effect */}
              
              <div className="relative bg-gradient-to-br from-dark-container via-gray-900 to-dark-container p-10 rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl">
                {/* Premium Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#9d7035]/30 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c1a35e]/30 rounded-full blur-3xl"></div>
                </div>
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9d7035] via-[#c1a35e] to-[#9d7035]"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#9d7035] to-[#c1a35e] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Event Details</h2>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">The Great Asia AI Summit 2026</h3>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed">Asia's Biggest Virtual Event for Enterprise AI Transformation</p>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Date - Premium */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 border border-gray-800/50 hover:border-[#c1a35e]/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#9d7035]/20 to-[#c1a35e]/20 border border-[#c1a35e]/30 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#c1a35e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/50 mb-1 font-semibold">Date</div>
                        <div className="text-lg md:text-xl font-semibold text-white">12th February 2026</div>
                      </div>
                    </div>

                    {/* Times - Premium */}
                    <div className="p-4 rounded-xl bg-black/30 border border-gray-800/50 hover:border-[#c1a35e]/30 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#9d7035]/20 to-[#c1a35e]/20 border border-[#c1a35e]/30 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#c1a35e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-white/50 mb-1 font-semibold">Time</div>
                          <div className="text-lg md:text-xl font-semibold text-white">09:30 AM – 02:00 PM IST</div>
                        </div>
                      </div>
                      <div className="ml-16 pl-4 border-l-2 border-[#c1a35e]/30">
                        <div className="text-base font-medium text-white/90">12:00 PM – 04:30 PM SGT</div>
                      </div>
                    </div>

                    {/* Format - Premium */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 border border-gray-800/50 hover:border-[#c1a35e]/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#9d7035]/20 to-[#c1a35e]/20 border border-[#c1a35e]/30 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#c1a35e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/50 mb-1 font-semibold">Format</div>
                        <div className="text-lg md:text-xl font-semibold text-white">Live Online (Global)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form Card - Premium */}
            <div className="relative group">

              <div className="relative bg-gradient-to-br from-dark-container via-gray-900 to-dark-container p-10 rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl">
                {/* Premium Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-80 h-80 bg-[#9d7035]/30 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c1a35e]/30 rounded-full blur-3xl"></div>
                </div>
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9d7035] via-[#c1a35e] to-[#9d7035]"></div>
                
                <div className="relative">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-[#9d7035] to-[#c1a35e] rounded-full"></div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Register Now
                      </h2>
                    </div>
                  </div>

                  {/* Form */}
                  <ReserveSeatForm onSubmit={handleFormSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

