import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-stone-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-white">
        <div className="font-serif text-2xl md:text-3xl tracking-wider text-gold-200 uppercase font-medium">
          Martinali Creative
        </div>
        <div className="hidden md:flex space-x-8 text-[11px] tracking-[0.2em] uppercase font-medium">
          <a href="#problem" className="hover:text-gold-400 transition-colors">O Problema</a>
          <a href="#services" className="hover:text-gold-400 transition-colors">Serviços</a>
          <a href="#process" className="hover:text-gold-400 transition-colors">Processo</a>
          <a href="#contact" className="hover:text-gold-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;