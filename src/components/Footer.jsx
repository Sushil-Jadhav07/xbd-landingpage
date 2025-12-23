export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Xponential By Design
          </p>
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

