export default function ComparisonSection() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight gradient-text">
          What most organizations get wrong - and what exponential ones do instead
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* BEFORE */}
          <div className="bg-dark-container p-8 rounded-xl border border-gray-800 hover:border-[#c1a35e] transition-all duration-300 cursor-pointer">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">BEFORE (Most Enterprises)</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">AI pilots everywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Projects and dashboards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Siloed teams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Linear growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Strategy decks</span>
              </li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="bg-dark-container p-8 rounded-xl border border-gray-800 hover:border-[#c1a35e] transition-all duration-300 cursor-pointer">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">AFTER (Exponential by Design)</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Intelligence systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Learning loops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Converged ecosystems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm text-base text-white">Compounding growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span className="text-sm md:text-base text-white">Design architecture</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105">
            Yes, I want to design for exponential growth
          </button>
        </div>
      </div>
    </section>
  );
}

