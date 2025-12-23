export default function ComparisonSection() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,112,53,0.08),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight gradient-text max-w-4xl mx-auto">
            What most organizations get wrong - and what exponential ones do instead
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* BEFORE */}
          <div className="relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-10 rounded-2xl border-2 border-gray-800 hover:border-[#9d7035]/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[#9d7035]/10 hover:-translate-y-1">
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#9d7035]/50"></div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-[#9d7035]">BEFORE</span>
              <span className="text-sm text-white/40 font-normal">(Most Enterprises)</span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-[#9d7035] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">AI pilots everywhere</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#9d7035] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Projects and dashboards</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#9d7035] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Siloed teams</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#9d7035] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Linear growth</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#9d7035] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Strategy decks</span>
              </li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-10 rounded-2xl border-2 border-gray-800 hover:border-[#c1a35e] transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[#9d7035]/20 hover:-translate-y-1">
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#c1a35e]"></div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="gradient-text">AFTER</span>
              <span className="text-sm text-white/40 font-normal">(Exponential by Design)</span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-[#c1a35e] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Intelligence systems</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#c1a35e] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Learning loops</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#c1a35e] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Converged ecosystems</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#c1a35e] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Compounding growth</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#c1a35e] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base text-white/90 leading-relaxed">Design architecture</span>
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

