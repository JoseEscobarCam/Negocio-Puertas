import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-door.jpg"
          alt="Puerta elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-40 h-40 sm:w-52 sm:h-52 mx-auto rounded-full bg-cream p-2 shadow-2xl">
            <img
              src="/uploads/upload_1.png"
              alt="Logo Puertas El Jefe"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight"
        >
          La entrada perfecta<br />
          <span className="text-gold">para tu hogar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-cream/90 max-w-2xl mx-auto mb-10 font-light"
        >
          Diseño, seguridad y elegancia en cada puerta. En Puertas El Jefe transformamos
          la entrada de tu casa en una obra de arte.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/593978752613?text=Hola%2C%20estoy%20interesado%20en%20las%20puertas%20de%20El%20Jefe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-4 rounded-full text-base font-bold hover:bg-cream hover:text-charcoal transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 border-2 border-cream/50 text-cream px-8 py-4 rounded-full text-base font-semibold hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            Ver productos
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-cream rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
