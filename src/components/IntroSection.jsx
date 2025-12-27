import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function IntroSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '100px' });

  const stats = [
    {
      title: "Transformation Reality Check",
      content: "70%+ of digital transformation efforts fail to produce expected results."
    },
    {
      title: "AI Adoption — The Growth Gap",
      content: "78% of companies use AI, but only ~19% of AI use cases meet business goals."
    },
    {
      title: "Pilot Paradox",
      content: "Up to 95% of generative AI pilots fail to deliver measurable impact."
    },
    {
      title: "Strategy Matters",
      content: "Companies with a formal AI strategy report ~80% success in implementing AI versus ~37% for those without one."
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-black via-black to-gray-950 py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9d7035]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c1a35e]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight max-w-6xl mx-auto text-white">
          Most Organizations Don’t Have a Technology Problem.  <span className="gradient-text">They Have a Design Problem.</span>
          </h2>
          <p className="text-sm md:text-lg text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            AI tools are everywhere. Budgets are bigger than ever. Talent is more expensive than ever. Yet pilots do not scale, decisions slow down, and growth remains stubbornly linear.
          </p>
        </div>
        
        {/* <div ref={contentRef} className={`group relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-8 md:p-12 rounded-2xl border-2 border-[#9d7035]/30 max-w-4xl mx-auto transition-all duration-700 cursor-pointer hover:border-[#c1a35e] hover:shadow-2xl hover:shadow-[#9d7035]/20 delay-200 ${contentVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-[#9d7035] to-[#c1a35e] rounded-full"></div>
              <p className="text-base md:text-xl text-white font-medium leading-relaxed">
                Over 70% of digital transformations fail - not because of technology, but because organizations were never designed for exponential environments.
              </p>
            </div>
          </div>
        </div> */}

        {/* Stats Section */}
        <div ref={statsRef} className={`mt-20 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-6 rounded-2xl border-2 border-gray-800 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[#9d7035]/20 hover:-translate-y-1 hover:z-20 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9d7035] to-[#c1a35e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent mb-4 leading-tight">
                  {stat.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {stat.content.includes('~80%') ? (
                    <>
                      Companies with a formal AI strategy report <span className="font-bold text-white">~80% success</span> in implementing AI versus <span className="font-bold text-white">~37%</span> for those without one.
                    </>
                  ) : (
                    stat.content
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

