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
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight gradient-text">
          What you will experience live
        </h2>
        <p className="text-base md:text-lg font-bold text-white/80 mb-12 max-w-4xl">
          Structured into three layers: clarity, design, and action - so you leave with a framework and a next-step roadmap.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="bg-dark-container p-8 rounded-xl border border-gray-800 hover:border-[#c1a35e] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">{layer.title}</h3>
              <ul className="space-y-4">
                {layer.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    <span className="text-base md:text-lg text-white">{item}</span>
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

