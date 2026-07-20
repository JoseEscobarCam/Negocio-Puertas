import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Productos', href: '#productos' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
              <img
                src="/uploads/upload_1.png"
                alt="Puertas El Jefe"
                className="w-11 h-11 object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-bold leading-none text-charcoal">Puertas</p>
              <p className="text-xs font-semibold tracking-widest text-gold uppercase">El Jefe</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/593978752613?text=Hola%2C%20estoy%20interesado%20en%20las%20puertas%20de%20El%20Jefe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              Cotizar ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-cream-dark overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-base font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-cream-dark"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/593978752613?text=Hola%2C%20estoy%20interesado%20en%20las%20puertas%20de%20El%20Jefe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-5 py-3 rounded-full text-sm font-semibold hover:bg-gold transition-colors mt-2"
              >
                <Phone className="w-4 h-4" />
                Cotizar ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
