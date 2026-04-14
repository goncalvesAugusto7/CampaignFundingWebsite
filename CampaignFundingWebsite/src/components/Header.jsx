// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#694A38] shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#F4AC45] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-[#694A38] font-bold text-xl font-['Rubik']">
                V
              </span>
            </div>
            <span className="text-white font-['Rubik'] text-2xl font-semibold tracking-wide">
              Vitrine
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Início", "Produtos", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-['Rubik'] font-medium hover:text-[#F4AC45] transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4AC45] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-[#F4AC45] text-[#694A38] font-['Rubik'] font-semibold px-6 py-2 rounded-full hover:bg-[#92BFB1] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
              Ver Catálogo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {["Início", "Produtos", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white font-['Rubik'] font-medium py-2 hover:text-[#F4AC45] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-[#F4AC45] text-[#694A38] font-['Rubik'] font-semibold px-6 py-3 rounded-full hover:bg-[#92BFB1] hover:text-white transition-all duration-300 mt-4">
              Ver Catálogo
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
