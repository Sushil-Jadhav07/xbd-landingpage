export default function LayersSection() {
  const layers = [
    {
      title: "LAYER 1 - CLARITY",
      items: [
        "Why pilots do not scale",
        "The real bottleneck leaders do not see",
        "Why the old playbook breaks in the AI era"
      ]
    },
    {
      title: "LAYER 2 - DESIGN",
      items: [
        "The X-Framework explained",
        "Convergence to Divergence to X-Factor",
        "Case patterns you can apply"
      ]
    },
    {
      title: "LAYER 3 - ACTION",
      items: [
        "The 90-day roadmap",
        "What to fix first and what to stop",
        "How to scale without chaos"
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(157,112,53,0.03)_50%,transparent_100%)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight gradient-text">
            What you will experience live
          </h2>
          <p className="text-sm md:text-lg text-white/70 max-w-3xl mx-auto">
            Structured into three layers: clarity, design, and action - so you leave with a framework and a next-step roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-dark-container via-dark-container to-dark-gray p-10 rounded-2xl border-2 border-gray-800 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[#9d7035]/20 hover:-translate-y-1 hover:z-20 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9d7035] to-[#c1a35e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#9d7035] group-hover:to-[#c1a35e] transition-all duration-300">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{layer.title}</h3>
              </div>
              <ul className="space-y-4">
                {layer.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-end gap-4">
                    <span className="text-[#c1a35e] mt-1 text-2xl">→</span>
                    <span className="text-sm md:text-base text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

