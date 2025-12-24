import ArrowImage from '../assets/arrow-transparent1.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ComparisonSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,112,53,0.08),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className={`text-center mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto text-white">
            What most organizations get wrong - and what <span className="gradient-text">exponential ones do instead</span>
          </h2>
        </div>

        {/* Comparison Cards Container - desktop/tablet only */}
        <div ref={cardsRef} className={`relative hidden md:flex items-center justify-center gap-8 mb-16 min-h-[500px] transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* BEFORE Card */}
          <div 
            className="relative w-full max-w-md transform -rotate-6 hover:rotate-0 transition-all duration-500 ease-out"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-3xl border-2 border-gray-700 shadow-2xl hover:shadow-[#9d7035]/20 transition-all duration-300">
              {/* BEFORE Label */}
              <div className="absolute -top-4 left-8 bg-[#9d7035]/20 backdrop-blur-sm px-6 py-2 rounded-full border border-[#9d7035]/50">
                <span className="text-[#9d7035] font-bold text-lg tracking-wide">BEFORE</span>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white/60 mb-6">(Most Enterprises)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#9d7035] mt-1">●</span>
                    <span className="text-lg">AI pilots everywhere</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#9d7035] mt-1">●</span>
                    <span className="text-lg">Projects and dashboards</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#9d7035] mt-1">●</span>
                    <span className="text-lg">Siloed teams</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#9d7035] mt-1">●</span>
                    <span className="text-lg">Linear growth</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-[#9d7035] mt-1">●</span>
                    <span className="text-lg">Strategy decks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow image */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
            <img
              src={ArrowImage}
              alt="Curved arrow from before to after"
              className="w-56 h-auto transform rotate-6 drop-shadow-[0_6px_20px_rgba(193,163,94,0.28)]"
              loading="lazy"
            />
          </div>

          {/* AFTER Card */}
          <div 
            className="relative w-full max-w-md transform rotate-6 hover:rotate-0 transition-all duration-500 ease-out"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-3xl border-2 border-[#c1a35e] shadow-2xl hover:shadow-[#c1a35e]/30 transition-all duration-300">
              {/* AFTER Label */}
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#9d7035] to-[#c1a35e] px-6 py-2 rounded-full shadow-lg">
                <span className="text-white font-bold text-lg tracking-wide">AFTER</span>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold gradient-text mb-6">(Exponential by Design)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-[#c1a35e] mt-1">●</span>
                    <span className="text-lg font-medium">Intelligence systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-[#c1a35e] mt-1">●</span>
                    <span className="text-lg font-medium">Learning loops</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-[#c1a35e] mt-1">●</span>
                    <span className="text-lg font-medium">Converged ecosystems</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-[#c1a35e] mt-1">●</span>
                    <span className="text-lg font-medium">Compounding growth</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-[#c1a35e] mt-1">●</span>
                    <span className="text-lg font-medium">Design architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Stack vertically with simple arrow */}
        <div className="md:hidden space-y-8 mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border-2 border-gray-700">
            <div className="bg-[#9d7035]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#9d7035]/50 inline-block mb-4">
              <span className="text-[#9d7035] font-bold">BEFORE</span>
            </div>
            <h3 className="text-lg text-white/60 mb-4">(Most Enterprises)</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-[#9d7035]">●</span>
                <span>AI pilots everywhere</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-[#9d7035]">●</span>
                <span>Projects and dashboards</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-[#9d7035]">●</span>
                <span>Siloed teams</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-[#9d7035]">●</span>
                <span>Linear growth</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-[#9d7035]">●</span>
                <span>Strategy decks</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="text-[#c1a35e] text-4xl">↓</div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border-2 border-[#c1a35e]">
            <div className="bg-gradient-to-r from-[#9d7035] to-[#c1a35e] px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-white font-bold">AFTER</span>
            </div>
            <h3 className="text-lg gradient-text mb-4">(Exponential by Design)</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#c1a35e]">●</span>
                <span className="font-medium">Intelligence systems</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#c1a35e]">●</span>
                <span className="font-medium">Learning loops</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#c1a35e]">●</span>
                <span className="font-medium">Converged ecosystems</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#c1a35e]">●</span>
                <span className="font-medium">Compounding growth</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#c1a35e]">●</span>
                <span className="font-medium">Design architecture</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-10 py-5 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-lg shadow-[#9d7035]/30">
            Yes, I want to design for exponential growth
          </button>
        </div>
      </div>
    </section>
  );
}