import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AgendaSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [tableRef, tableVisible] = useScrollAnimation({ threshold: 0.1 });

  const agendaItems = [
    {
      topic: "Why Growth in the AI Era Feels Harder — Not Easier",
      topicHighlight: "Harder — Not Easier",
      outcome: "You'll understand why growth has become a design challenge, not an execution gap."
    },
    {
      topic: "The Leadership Paradox of the AI Era",
      topicHighlight: null,
      outcome: "You'll see why leadership instincts that worked for decades now create friction."
    },
    {
      topic: "The Misdiagnosis: Why Most AI Transformations Go Off Track",
      topicHighlight: "Why Most AI Transformations Go Off Track",
      outcome: "You'll recognize the hidden diagnosis error behind stalled AI initiatives."
    },
    {
      topic: "The Structural Reality Inside Organizations",
      topicHighlight: null,
      outcome: "What actually breaks when intelligence enters execution-centric systems"
    },
    {
      topic: "The Design Shift: Introducing the X-Framework",
      topicHighlight: "Introducing the X-Framework",
      outcome: "You'll leave with a new mental model for designing growth in the AI era."
    },
    {
      topic: "Reflection & Closing: Designing for Continuous Reinvention",
      topicHighlight: "Designing for Continuous Reinvention",
      outcome: [
        "What designing for continuous adaptation really means",
        "How leaders can begin the shift without burning out their people"
      ]
    }
  ];

  const renderTopic = (item) => {
    if (item.topicHighlight) {
      const parts = item.topic.split(item.topicHighlight);
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent font-semibold">
            {item.topicHighlight}
          </span>
          {parts[1]}
        </>
      );
    }
    return item.topic;
  };

  return (
    <section id="agenda" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,112,53,0.05),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-white">
          Masterclass <span className="gradient-text">Agenda</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            A structured exploration of exponential growth design principles
          </p>
        </div>

        {/* Agenda Table */}
        <div ref={tableRef} className={`bg-gradient-to-br from-dark-container via-dark-container to-dark-gray rounded-2xl border-2 border-gray-800 overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${tableVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}>
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#9d7035]/20 via-[#9d7035]/15 to-[#c1a35e]/20 border-b-2 border-gray-800">
            <div className="px-6 py-4 md:px-8 md:py-5 border-r border-gray-800">
              <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent text-center">
                Topic
              </h3>
            </div>
            <div className="px-6 py-4 md:px-8 md:py-5">
              <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent text-center">
                Outcome
              </h3>
            </div>
          </div>

          {/* Agenda Items */}
          <div className="divide-y divide-gray-800">
            {agendaItems.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 hover:bg-gray-900/30 transition-colors duration-300"
              >
                {/* Topic Column */}
                <div className="px-6 py-6 md:px-8 md:py-8 border-r border-gray-800">
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    {renderTopic(item)}
                  </p>
                </div>

                {/* Outcome Column */}
                <div className="px-6 py-6 md:px-8 md:py-8">
                  {Array.isArray(item.outcome) ? (
                    <div className="space-y-3">
                      {item.outcome.map((outcome, idx) => (
                        <p key={idx} className="text-white/80 text-base md:text-lg leading-relaxed">
                          {outcome}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                      {item.outcome.includes("actually breaks") ? (
                        <>
                          {item.outcome.split("actually breaks")[0]}
                          <span className="underline decoration-[#c1a35e] decoration-2">actually breaks</span>
                          {item.outcome.split("actually breaks")[1]}
                        </>
                      ) : (
                        item.outcome
                      )}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

