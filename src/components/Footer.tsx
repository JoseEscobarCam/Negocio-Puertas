import { Instagram, Facebook, Phone } from 'lucide-react';

const footerLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Productos', href: '#productos' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-charcoal-light text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center overflow-hidden">
                <img
                  src="/uploads/upload_1.png"
                  alt="Puertas El Jefe"
                  className="w-12 h-12 object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-bold leading-none">Puertas</p>
                <p className="text-xs font-semibold tracking-widest text-gold uppercase">El Jefe</p>
              </div>
            </div>
            <p className="text-cream/60 text-sm max-w-xs mx-auto md:mx-0">
              Diseño, seguridad y elegancia en cada puerta que fabricamos.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="font-serif text-lg font-bold mb-4">Enlaces rápidos</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="https://instagram.com/puertaseljefe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/puertaseljefe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/593978752613"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-10 pt-8 text-center">
          <p className="text-cream/50 text-sm">
            © {currentYear} Puertas El Jefe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
