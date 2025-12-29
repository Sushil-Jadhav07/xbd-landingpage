import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhoShouldAttendSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

  const whoShouldAttend = [
    "CXOs & Senior Leaders driving transformation",
    "Strategy, Digital, AI, and Innovation Heads",
    "Founders and CEOs building scalable platforms",
    "Leaders responsible for growth in complex, fast-changing environments"
  ];

  const notIdealFor = [
    "Tool tutorials",
    "Vendor demos",
    "Tactical AI hacks"
  ];

  return (
    <section id="who-this-masterclass-is-for" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,112,53,0.05),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            WHO THIS <span className="gradient-text">MASTERCLASS IS FOR</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Who Should Attend */}
          <div className="relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-8 lg:p-10 rounded-2xl border border-gray-800/50 hover:border-[#c1a35e]/30 transition-all duration-300 overflow-hidden group">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9d7035] via-[#c1a35e] to-[#9d7035]"></div>
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9d7035]/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#9d7035] to-[#c1a35e] rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Who Should Attend This Masterclass
                </h3>
              </div>
              
              <p className="text-white/60 mb-8 text-sm md:text-base">
                This masterclass is designed for:
              </p>
              
              <ul className="space-y-5">
                {whoShouldAttend.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9d7035]/20 to-[#c1a35e]/20 border border-[#c1a35e]/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e]"></div>
                    </div>
                    <span className="text-white text-base md:text-lg leading-relaxed flex-1 pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not Ideal For */}
          <div className="relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-8 lg:p-10 rounded-2xl border border-gray-800/50 hover:border-[#c1a35e]/30 transition-all duration-300 overflow-hidden group">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9d7035] via-[#c1a35e] to-[#9d7035]"></div>
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c1a35e]/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#9d7035] to-[#c1a35e] rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Not ideal if you're looking for:
                </h3>
              </div>
              
              <ul className="space-y-5 mb-8">
                {notIdealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9d7035]/20 to-[#c1a35e]/20 border border-[#c1a35e]/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e]"></div>
                    </div>
                    <span className="text-white text-base md:text-lg leading-relaxed flex-1 pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-gray-800/50">
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  This is about <span className="font-bold text-white">how organizations must be designed to win in the AI era</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

