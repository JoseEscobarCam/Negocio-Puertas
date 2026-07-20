import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const features = [
  { icon: Award, text: 'Materiales de primera calidad' },
  { icon: Users, text: 'Atención personalizada' },
  { icon: Clock, text: 'Entrega puntual garantizada' },
  { icon: CheckCircle, text: 'Garantía en todos nuestros productos' },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/puerta-seguridad.jpg"
                  alt="Trabajo de Puertas El Jefe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-charcoal text-cream p-6 sm:p-8 rounded-2xl shadow-xl hidden sm:block">
                <p className="font-serif text-4xl font-bold text-gold">+10</p>
                <p className="text-sm text-cream/80">años de<br />experiencia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Sobre nosotros</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6">
              Calidad que se ve<br />y se siente
            </h2>
            <p className="text-stone text-base sm:text-lg leading-relaxed mb-6">
              En <strong className="text-charcoal">Puertas El Jefe</strong> nos especializamos en la fabricación e instalación
              de puertas de alta calidad. Combinamos diseño, funcionalidad y seguridad para ofrecerte
              productos que transforman cualquier espacio.
            </p>
            <p className="text-stone text-base sm:text-lg leading-relaxed mb-8">
              Nuestro compromiso es brindarte una atención cercana, asesoría experta y resultados
              que superen tus expectativas. Porque la primera impresión importa, y tu puerta es el inicio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-charcoal font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
