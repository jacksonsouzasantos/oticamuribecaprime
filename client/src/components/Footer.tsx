import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

/**
 * Footer Component
 * 
 * Design: Organic Luxury Modernism
 * - Brand information
 * - Social links
 * - Contact details
 * - Warm color palette
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <footer className="relative w-full bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-2xl font-bold mb-4 text-accent"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Muribeca Prime
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Consultoria de visagismo personalizada e armações premium para realçar sua beleza natural.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/oticamuribeca/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#visagismo" className="hover:text-accent transition-colors">
                  Visagismo
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-accent transition-colors">
                  Coleção
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span>Av. Pres. Epitácio Pessoa, 3280 - Sala 103, João Pessoa - PB</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>(83) 98890-1153</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>contato@oticamuribeca.com.br</span>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Horários</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white">Segunda - Sexta</span>
                <br />
                9h30 - 17h
              </li>
              <li>
                <span className="font-semibold text-white">Sábado</span>
                <br />
                8h - 12h
              </li>
              <li className="pt-2 text-accent">Domingo: Fechado</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8 md:mb-12" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants}>
            &copy; {currentYear} Ótica Muribeca Prime. Todos os direitos reservados.
          </motion.p>
          <motion.div className="flex gap-6" variants={containerVariants}>
            <motion.a
              href="#"
              className="hover:text-accent transition-colors"
              variants={itemVariants}
            >
              Política de Privacidade
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-accent transition-colors"
              variants={itemVariants}
            >
              Termos de Uso
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 pointer-events-none" />
    </footer>
  );
}
