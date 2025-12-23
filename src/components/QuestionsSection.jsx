import { useState } from 'react';
import ReserveSeatModal from '../common/ReserveSeatModal';

export default function QuestionsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const questions = [
    {
      number: 1,
      title: "Why does AI feel transformational in demos but incremental in production?",
      subtext: "We are investing more than ever, yet pilots do not scale."
    },
    {
      number: 2,
      title: "Why do decisions slow down as we add more data and tools?",
      subtext: "Information abundance should accelerate decisions, not paralyze them."
    },
    {
      number: 3,
      title: "Why do growth curves remain linear despite exponential technology?",
      subtext: "The tools are exponential. The organizations using them are not."
    },
    {
      number: 4,
      title: "Why do transformation programs stall after initial momentum?",
      subtext: "The playbook that worked in the past no longer applies."
    },
    {
      number: 5,
      title: "How do we design for compounding returns, not just efficiency?",
      subtext: "Moving beyond optimization to exponential architecture."
    },
    {
      number: 6,
      title: "What replaces the old org chart in an exponential era?",
      subtext: "New structures for new capabilities."
    },
    {
      number: 7,
      title: "How do we build organizations that learn faster than the market changes?",
      subtext: "From reactive to anticipatory design."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-950 py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(157,112,53,0.05),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight gradient-text max-w-5xl mx-auto">
            The questions every CXO is asking, but few frameworks truly answer
          </h2>
          <p className="text-sm md:text-lg text-white/70 mb-0 max-w-4xl mx-auto">
            These are not tactical AI questions. They are strategic design questions that determine whether your organization will scale exponentially or remain trapped in linear growth patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {questions.map((question) => (
            <div
              key={question.number}
              className="group relative bg-gradient-to-br from-dark-container to-dark-gray p-8 rounded-2xl border border-gray-800 hover:border-[#c1a35e] transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#9d7035]/10 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9d7035]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center text-base font-bold text-white group-hover:bg-gradient-to-br group-hover:from-[#9d7035] group-hover:to-[#c1a35e] transition-all duration-300 shadow-lg">
                  <span>{question.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-3 leading-snug">
                    {question.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed">
                    {question.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:flex-row flex-col justify-between">
          <p className="text-sm md:text-lg text-white/80 mb-6 max-w-4xl">
            This webinar introduces the X-Framework - a new blueprint for designing organizations that learn, adapt, and scale exponentially. Join us to get answers you can take straight to the boardroom.
          </p>
          <div className="flex justify-center items-center">
            <button 
              onClick={handleOpenModal}
              className="px-8 py-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105"
            >
              Reserve My Seat
            </button>
          </div>
        </div>

        {/* Modal Popup */}
        <ReserveSeatModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}

