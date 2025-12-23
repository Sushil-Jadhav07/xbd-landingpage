export default function VideoSection() {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight gradient-text">
            The Hidden Architecture Behind Exponential Organizations
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
            A short, high-signal preview video (recommended 6 to 8 minutes).
          </p>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9d7035] to-[#c1a35e] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-dark-container to-dark-gray rounded-2xl border-2 border-gray-800 aspect-video flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-white/40 text-sm">Video Embed Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

