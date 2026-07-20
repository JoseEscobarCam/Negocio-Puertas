import { motion } from 'framer-motion';

const galleryItems = [
  {
    src: '/images/puerta-interior.jpg',
    title: 'Puerta Interior Blanca',
    category: 'Interiores',
  },
  {
    src: '/images/puerta-seguridad.jpg',
    title: 'Puerta de Seguridad Negra',
    category: 'Seguridad',
  },
  {
    src: '/images/puerta-corrediza.jpg',
    title: 'Puerta Corrediza Moderna',
    category: 'Contemporáneo',
  },
  {
    src: '/images/hero-door.jpg',
    title: 'Entrada Principal',
    category: 'Entrada',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Galería</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Inspiración para tu espacio
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-base sm:text-lg">
            Algunos de nuestros diseños más solicitados. Cada proyecto es único.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">{item.category}</span>
                <h3 className="font-serif text-2xl font-bold text-cream mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
