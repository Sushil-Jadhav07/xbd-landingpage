export default function VideoSection() {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-white">
            The Hidden Architecture Behind <span className="gradient-text">Exponential Organizations</span>
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
            A short, high-signal preview video (recommended 6 to 8 minutes).
          </p>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9d7035] to-[#c1a35e] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-dark-container to-dark-gray rounded-2xl border-2 border-gray-800 aspect-video overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NSDEovfKwXc"
              title="Exponential by Design - Preview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

