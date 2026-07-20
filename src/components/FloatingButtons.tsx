import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        href="https://wa.me/593978752613?text=Hola%2C%20estoy%20interesado%20en%20las%20puertas%20de%20El%20Jefe"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      <motion.a
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.4 }}
        href="https://instagram.com/puertaseljefe"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Instagram"
      >
        <Instagram className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
