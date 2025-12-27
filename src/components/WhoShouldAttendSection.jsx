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
    <section className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,112,53,0.05),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header with Number Badge */}
        <div ref={headerRef} className={`mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            {/* <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9d7035] to-[#c1a35e] flex items-center justify-center shadow-lg shadow-[#9d7035]/20">
              <span className="text-white font-bold text-xl">5</span>
            </div> */}
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              WHO THIS  <span className="gradient-text">MASTERCLASS IS FOR</span>
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Who Should Attend */}
          <div className="bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-8 rounded-2xl border-2 border-gray-800 hover:border-[#c1a35e]/50 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Who Should Attend This Masterclass
            </h3>
            <p className="text-white/70 mb-6 text-sm md:text-base">
              This masterclass is designed for:
            </p>
            <ul className="space-y-4">
              {whoShouldAttend.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#c1a35e] mt-1 text-xl font-bold">•</span>
                  <span className="text-white/80 text-sm md:text-base leading-relaxed flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Ideal For */}
          <div className="bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-8 rounded-2xl border-2 border-gray-800 hover:border-[#c1a35e]/50 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Not ideal if you're looking for:
            </h3>
            <ul className="space-y-4 mb-6">
              {notIdealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#c1a35e] mt-1 text-xl font-bold">•</span>
                  <span className="text-white/80 text-sm md:text-base leading-relaxed flex-1">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              This is about <span className="font-bold text-white">how organizations must be designed to win in the AI era</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

