export default function IntroSection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-black to-gray-950 py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9d7035]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c1a35e]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight gradient-text max-w-6xl mx-auto">
            The AI era did not break organizations. Their design did.
          </h2>
          <p className="text-sm md:text-lg text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            AI tools are everywhere. Budgets are bigger than ever. Talent is more expensive than ever. Yet pilots do not scale, decisions slow down, and growth remains stubbornly linear.
          </p>
        </div>
        
        <div className="group relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-8 md:p-12 rounded-2xl border-2 border-[#9d7035]/30 max-w-4xl mx-auto transition-all duration-500 cursor-pointer hover:border-[#c1a35e] hover:shadow-2xl hover:shadow-[#9d7035]/20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-[#9d7035] to-[#c1a35e] rounded-full"></div>
              <p className="text-base md:text-xl text-white font-medium leading-relaxed">
                Over 70% of digital transformations fail - not because of technology, but because organizations were never designed for exponential environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

