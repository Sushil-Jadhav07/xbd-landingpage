
export default function AuthorSection() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Author Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image Placeholder */}
          <div className="flex flex-col items-center">
            <div className="bg-dark-container w-full aspect-[3/4] rounded-xl border border-gray-800 flex items-center justify-center mb-4">
              <div className="text-center">
                <p className="text-white/50 mb-2">Author Image Placeholder</p>
                <p className="text-white/30 text-sm">Professional headshot of Anuj Pandey</p>
              </div>
            </div>
            <p className="text-white/50 text-sm">Caption (optional): Author, Exponential by Design</p>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why learn this from <span className="gradient-text">Anuj Pandey</span>
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p className="text-sm md:text-base ">
                Anuj Pandey is a leading strategist and advisor on exponential growth and organizational design. With over 22 years of experience in digital transformation, ecosystem strategy, and growth architecture, he has helped Fortune 500 companies and high-growth startups design organizations that scale exponentially.
              </p>
              <p className="text-sm md:text-base">
                His work focuses on the intersection of strategy, design, and technology - specifically how organizations must be redesigned to thrive in an era of exponential change. The X-Framework, introduced in Exponential by Design, represents a new blueprint for building organizations that learn, adapt, and scale faster than the market changes.
              </p>
              <p className="text-sm md:text-base ">
                Anuj's approach challenges conventional wisdom about digital transformation, arguing that most failures stem not from technology limitations, but from organizational design that was never intended for exponential environments. His framework provides leaders with actionable architecture for building compounding growth systems.
              </p>
              <p className="text-sm md:text-base ">
                This webinar is your opportunity to learn directly from the architect of the X-Framework and gain insights you can apply immediately to your organization's growth strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Webinar Details Box */}
        <div className="bg-dark-container p-8 rounded-xl border border-gray-800 mb-8">
          <p className="text-base md:text-lg font-bold text-white mb-4">
            This webinar is not a motivational talk. It is a thinking session for leaders who are accountable for growth, relevance, and long-term value creation.
          </p>
          <p className="text-base md:text-lg  italic text-white/90 mb-6">
            "This is not about adopting AI faster - it is about designing organizations that remain intelligent, adaptive, and scalable no matter what technology comes next."
          </p>
          <div className="text-white/70 text-sm mb-4">
            Author of Exponential by Design • 22+ years in digital, ecosystem and growth strategy • Speaker • Advisor • Author
          </div>
          <a href="#" className="text-white underline hover:text-white/80 transition-colors">
            View LinkedIn
          </a>
        </div>

        {/* Free Chapter Box */}
        <div className="bg-dark-container p-8 rounded-xl border border-gray-800 mb-12">
          <h3 className="text-lg md:text-xl font-bold text-white mb-3">Free Chapter (optional)</h3>
          <p className="text-sm md:text-base  text-white/80 mb-6">
            Get a preview of the thinking behind Exponential by Design - including the core ideas that underpin the X-Framework.
          </p>
          <button className="px-6 py-3 bg-dark-gray text-white rounded-lg font-medium hover:bg-gray-800 transition-colors border border-gray-700">
            Download the free chapter
          </button>
        </div>
        
      </div>
    </section>
  );
}

