import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Teléfono / WhatsApp', value: '+593978752613', href: 'https://wa.me/593978752613' },
  { icon: Mail, label: 'Correo electrónico', value: 'contacto@puertaseljefe.com', href: 'mailto:contacto@puertaseljefe.com' },
  { icon: MapPin, label: 'Ubicación', value: 'Guayaquil, Guayas', href: '#' },
  { icon: Clock, label: 'Horario', value: 'Lun - Sáb: 8:00 am - 5:30 pm', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${formData.name}. Mi teléfono es ${formData.phone}. ${formData.message}`;
    window.open(
      `https://wa.me/593978752613?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Contacto</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
              ¿Listo para tu nueva puerta?
            </h2>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-10">
              Escríbenos y recibe una cotización personalizada. Estamos listos para ayudarte a elegir
              la puerta perfecta para tu hogar o negocio.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-gold group-hover:text-charcoal transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">{info.label}</p>
                    <p className="text-cream font-medium group-hover:text-gold transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-cream text-charcoal rounded-2xl p-6 sm:p-8 shadow-2xl"
            >
              <h3 className="font-serif text-2xl font-bold mb-6">Solicitar cotización</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Tu teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone mb-2">
                    ¿Qué tipo de puerta necesitas?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-6 py-4 rounded-xl text-base font-bold hover:bg-gold hover:text-charcoal transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
