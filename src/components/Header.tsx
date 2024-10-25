import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-white text-2xl font-bold">Bentofolio</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-purple-400 transition">Home</a>
            <a href="#" className="text-white hover:text-purple-400 transition">Works</a>
            <a href="#" className="text-white hover:text-purple-400 transition">Contact</a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-purple-400 transition">Home</a>
              <a href="#" className="text-white hover:text-purple-400 transition">Works</a>
              <a href="#" className="text-white hover:text-purple-400 transition">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}