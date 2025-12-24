
import AnujImage from '../assets/anuj.webp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AuthorSection() {
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [box1Ref, box1Visible] = useScrollAnimation({ threshold: 0.1 });
  const [box2Ref, box2Visible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="speakers" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(157,112,53,0.05),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Author Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          {/* Author Image */}
          <div ref={imageRef} className={`flex flex-col items-center transition-all duration-700 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
                <img
                  src={AnujImage}
                  alt="Anuj Pandey headshot"
                  className="relative z-10 h-full w-full object-contain"
                  loading="lazy"
                />
            </div>
            <p className="text-white/40 text-xs mt-4 uppercase tracking-wider">Author, Exponential by Design</p>
          </div>

          {/* Content */}
          <div ref={contentRef} className={`transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Why learn this from <span className="gradient-text">Anuj Pandey</span>
            </h2>
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p className="text-sm md:text-base">
                Anuj Pandey is a leading strategist and advisor on exponential growth and organizational design. With over 22 years of experience in digital transformation, ecosystem strategy, and growth architecture, he has helped Fortune 500 companies and high-growth startups design organizations that scale exponentially.
              </p>
              <p className="text-sm md:text-base">
                His work focuses on the intersection of strategy, design, and technology - specifically how organizations must be redesigned to thrive in an era of exponential change. The X-Framework, introduced in Exponential by Design, represents a new blueprint for building organizations that learn, adapt, and scale faster than the market changes.
              </p>
              <p className="text-sm md:text-base">
                Anuj's approach challenges conventional wisdom about digital transformation, arguing that most failures stem not from technology limitations, but from organizational design that was never intended for exponential environments. His framework provides leaders with actionable architecture for building compounding growth systems.
              </p>
              <p className="text-sm md:text-base">
                This webinar is your opportunity to learn directly from the architect of the X-Framework and gain insights you can apply immediately to your organization's growth strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Webinar Details Box */}
        <div ref={box1Ref} className={`relative bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-10 rounded-2xl border-2 border-gray-800 mb-10 overflow-hidden transition-all duration-700 delay-300 ${box1Visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9d7035] to-[#c1a35e]"></div>
          <div className="relative">
            <p className="text-base md:text-lg font-bold text-white mb-6 leading-relaxed">
              This webinar is not a motivational talk. It is a thinking session for leaders who are accountable for growth, relevance, and long-term value creation.
            </p>
            <div className="pl-6 border-l-2 border-[#c1a35e]/50 mb-6">
              <p className="text-sm md:text-lg italic text-white/90 leading-relaxed">
                "This is not about adopting AI faster - it is about designing organizations that remain intelligent, adaptive, and scalable no matter what technology comes next."
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-white/60 text-xs md:text-sm mb-6">
              <span className="px-3 py-1 bg-black/30 rounded-full">Author of Exponential by Design</span>
              <span className="px-3 py-1 bg-black/30 rounded-full">22+ years experience</span>
              <span className="px-3 py-1 bg-black/30 rounded-full">Speaker • Advisor</span>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-white hover:text-[#c1a35e] transition-colors font-medium">
              View LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Free Chapter Box */}
        <div ref={box2Ref} className={`bg-gradient-to-br from-dark-container to-dark-gray p-10 rounded-2xl border-2 border-gray-800 hover:border-[#c1a35e]/50 transition-all duration-700 mb-12 delay-400 ${box2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#9d7035] to-[#c1a35e] rounded-full"></span>
            Free Chapter (optional)
          </h3>
          <p className="text-sm md:text-base text-white/70 mb-8 leading-relaxed">
            Get a preview of the thinking behind Exponential by Design - including the core ideas that underpin the X-Framework.
          </p>
          <button className="px-8 py-3 bg-dark-gray text-white rounded-lg font-medium hover:bg-gray-700 transition-all border border-gray-700 hover:border-gray-600">
            Download the free chapter
          </button>
        </div>
        
      </div>
    </section>
  );
}

