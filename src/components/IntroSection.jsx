export default function IntroSection() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight gradient-text">
          The AI era did not break organizations. Their design did.
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-4xl leading-relaxed">
          AI tools are everywhere. Budgets are bigger than ever. Talent is more expensive than ever. Yet pilots do not scale, decisions slow down, and growth remains stubbornly linear.
        </p>
        <div className="group bg-dark-container p-4 md:p-6 rounded-xl border border-[#9d7035] max-w-8xl mx-auto transition-all duration-300 cursor-pointer">
          <p className="text-sm md:text-base text-white group-hover:text-white leading-relaxed">
            Over 70% of digital transformations fail - not because of technology, but because organizations were never designed for exponential environments.
          </p>
        </div>
      </div>
    </section>
  );
}

