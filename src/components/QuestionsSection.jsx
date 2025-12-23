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
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight gradient-text">
          The questions every CXO is asking, but few frameworks truly answer
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-12 max-w-4xl">
          These are not tactical AI questions. They are strategic design questions that determine whether your organization will scale exponentially or remain trapped in linear growth patterns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {questions.map((question) => (
            <div
              key={question.number}
              className="group bg-dark-container p-6 rounded-xl border border-gray-800 hover:border-[#c1a35e] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 border border-gray-700 flex items-center justify-center text-sm font-semibold group-hover:bg-[#9d7035] group-hover:text-white transition-colors duration-300">
                  <span>{question.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">
                    {question.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/60">
                    {question.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <p className="text-base md:text-lg text-white/80 mb-6 max-w-4xl">
            This webinar introduces the X-Framework - a new blueprint for designing organizations that learn, adapt, and scale exponentially. Join us to get answers you can take straight to the boardroom.
          </p>
          <div className="">
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

