import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';

/**
 * Contact Section Component
 * 
 * Design: Organic Luxury Modernism
 * - Conversion-focused CTA buttons
 * - Contact information with icons
 * - Warm color palette
 * - WhatsApp and Instagram integration
 */

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      details: 'Av. Pres. Epitácio Pessoa, 3280 - Sala 103',
      subtext: 'Empresarial Carlos Alberto Júnior, João Pessoa - PB',
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: 'Segunda a Sexta: 9h30 - 17h',
      subtext: 'Sábado: 8h - 12h',
    },
    {
      icon: Phone,
      title: 'Contato',
      details: '(83) 3222-XXXX',
      subtext: 'Disponível para consultoria',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            variants={itemVariants}
          >
            Vamos Conversar?
            <br />
            <span className="text-accent">Agende Sua Consulta</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Entre em contato conosco para descobrir a armação perfeita para você. Estamos prontos para ajudar!
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.a
            href="https://wa.me/5583988901153?text=Olá! Gostaria de agendar uma consulta na Ótica Muribeca Prime."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-5 h-5" />
            Conversar no WhatsApp
          </motion.a>
          <motion.a
            href="https://www.instagram.com/oticamuribeca/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-pink-600 hover:bg-pink-700 shadow-lg flex items-center justify-center gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span>📸</span>
            Seguir no Instagram
          </motion.a>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="card-organic text-center"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {info.title}
              </h3>
              <p className="text-sm font-semibold text-accent mb-2">{info.details}</p>
              <p className="text-xs text-muted-foreground">{info.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Section (Placeholder) */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg h-96 md:h-96 bg-muted"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-foreground font-semibold mb-2">Localização</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Av. Pres. Epitácio Pessoa, 3280 - Sala 103
                <br />
                João Pessoa - PB
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Organic divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="#F5F1E8"
            opacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}
