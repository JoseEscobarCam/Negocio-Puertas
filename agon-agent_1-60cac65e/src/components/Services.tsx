import { motion } from 'framer-motion';
import { Shield, Home, Sparkles, DoorOpen } from 'lucide-react';

const services = [
  {
    icon: DoorOpen,
    title: 'Puertas de Entrada',
    description: 'Diseños impresionantes que dan la bienvenida con estilo y personalidad a tu hogar o negocio.',
  },
  {
    icon: Home,
    title: 'Puertas Interiores',
    description: 'Elegancia y funcionalidad para cada espacio de tu casa, con acabados de alta calidad.',
  },
  {
    icon: Shield,
    title: 'Puertas de Seguridad',
    description: 'Máxima protección sin sacrificar el diseño. Materiales resistentes y cerraduras de alta seguridad.',
  },
  {
    icon: Sparkles,
    title: 'Diseño Personalizado',
    description: 'Creamos la puerta de tus sueños a la medida, con acabados únicos y materiales premium.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Services() {
  return (
    <section id="productos" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Nuestros productos</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            Puertas para cada estilo
          </h2>
          <p className="text-stone max-w-2xl mx-auto text-base sm:text-lg">
            Desde lo clásico hasta lo contemporáneo, tenemos la puerta ideal para tu proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-cream-dark hover:border-gold/30"
            >
              <div className="w-14 h-14 bg-charcoal rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{service.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
