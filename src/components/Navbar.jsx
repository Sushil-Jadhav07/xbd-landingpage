import logomain from '../assets/logomain.png';

export default function Navbar() {
  return (
    <header className="bg-black border-b border-gray-900 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          <img 
            src={logomain} 
            alt="XBD - Exponential by Design" 
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
        </div>
      </nav>
    </header>
  );
}

