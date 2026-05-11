import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Testimonials Section Component
 * 
 * Design: Organic Luxury Modernism
 * - Flowing card arrangement with soft shadows
 * - Star ratings and authentic reviews
 * - Warm color palette
 * - Smooth entrance animations
 */

export default function Testimonials() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'Cliente há 5 anos',
      rating: 5,
      text: 'Atendimento impecável! Dona Ana tem um olho de especialista. Encontrei meus óculos perfeitos em minutos. Voltei várias vezes e sempre saio satisfeita.',
      image: '👩‍🦰',
    },
    {
      name: 'Carlos Mendes',
      role: 'Cliente há 3 anos',
      rating: 5,
      text: 'Sr. Galvani é muito atencioso. Explicou cada detalhe sobre as armações e me ajudou a escolher algo que realmente combina com meu estilo. Recomendo!',
      image: '👨‍💼',
    },
    {
      name: 'Beatriz Costa',
      role: 'Cliente há 2 anos',
      rating: 5,
      text: 'Que lugar especial! A consultoria de visagismo foi transformadora. Nunca pensei que encontraria óculos que realçassem tanto minha beleza. Voltei para comprar mais!',
      image: '👩‍🎨',
    },
    {
      name: 'João Pereira',
      role: 'Cliente há 4 anos',
      rating: 5,
      text: 'Qualidade premium com atendimento personalizado. Cada vez que vou, é uma experiência única. A Ótica Muribeca Prime é referência em João Pessoa.',
      image: '👨‍🎓',
    },
    {
      name: 'Fernanda Oliveira',
      role: 'Cliente há 1 ano',
      rating: 5,
      text: 'Adorei a coleção! Marcas importadas, preços justos e um atendimento que faz toda a diferença. Já indiquei para várias amigas.',
      image: '👩‍💻',
    },
    {
      name: 'Roberto Alves',
      role: 'Cliente há 6 anos',
      rating: 5,
      text: 'Confiança total! Compro lá há anos. Dona Ana e Sr. Galvani conhecem meu gosto e sempre me surpreendem com sugestões incríveis.',
      image: '👨‍🏫',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
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
            variants={cardVariants}
          >
            O Que Nossos Clientes
            <br />
            <span className="text-accent">Dizem Sobre Nós</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Avaliações reais de clientes satisfeitos que encontraram sua armação perfeita conosco.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-organic group"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Header with Avatar and Stars */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary/50 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-foreground"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                {`"${testimonial.text}"`}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {[
              { number: '500+', label: 'Clientes Satisfeitos' },
              { number: '4.9', label: 'Avaliação Google' },
              { number: '28', label: 'Anos de Excelência' },
            ].map((stat, index) => (
              <motion.div key={index} variants={cardVariants}>
                <p
                  className="text-4xl md:text-5xl font-bold text-accent mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
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
            fill="#FFFFFF"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}
