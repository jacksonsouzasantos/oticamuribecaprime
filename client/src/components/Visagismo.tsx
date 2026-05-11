import { motion } from 'framer-motion';
import { Sparkles, Users, Eye, Heart } from 'lucide-react';

/**
 * Visagismo Section Component
 * 
 * Design: Organic Luxury Modernism
 * - Asymmetric layout with flowing cards
 * - Parallax effects on scroll
 * - Warm color palette with sage green accents
 * - Highlights personalized service from Dona Ana and Sr. Galvani
 */

export default function Visagismo() {
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

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const features = [
    {
      icon: Eye,
      title: 'Análise de Rosto',
      description: 'Identificamos o formato do seu rosto para encontrar a armação perfeita.',
    },
    {
      icon: Sparkles,
      title: 'Estilo Personalizado',
      description: 'Consultoria completa sobre cores, materiais e tendências que combinam com você.',
    },
    {
      icon: Heart,
      title: 'Conforto & Elegância',
      description: 'Equilibramos funcionalidade e beleza para sua satisfação total.',
    },
    {
      icon: Users,
      title: 'Atendimento Exclusivo',
      description: 'Dona Ana e Sr. Galvani dedicam tempo integral à sua experiência.',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24"
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
            Visagismo:
            <br />
            <span className="text-accent">A Arte de Escolher Bem</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            variants={cardVariants}
          >
            Cada rosto é único. Nossa consultoria de visagismo analisa proporções, cores e estilo para encontrar as armações que realçam sua beleza natural e personalidade.
          </motion.p>
        </motion.div>

        {/* Main Content: Image + Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Consultation Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/visagismo-consultation-9qcb9jMGRne8JoFe8383Xe.webp"
                alt="Consultoria de Visagismo - Ótica Muribeca Prime"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' as const }}
              >
                <p className="text-sm font-semibold text-foreground">
                  Consultoria Personalizada
                </p>
              </motion.div>
            </div>

            {/* Organic shape accent */}
            <svg
              className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100,10 Q180,40 190,100 Q180,160 100,190 Q20,160 10,100 Q20,40 100,10 Z"
                fill="#D4A574"
              />
            </svg>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-organic group"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-foreground mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Highlight Section */}
        <motion.div
          className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            variants={cardVariants}
          >
            Conheça Nossos Especialistas
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Dona Ana',
                role: 'Especialista em Visagismo',
                description: 'Com mais de 20 anos de experiência, Dona Ana é conhecida por seu olhar atento e dedicação ao atendimento personalizado. Sua paixão é encontrar a armação perfeita para cada cliente.',
              },
              {
                name: 'Sr. Galvani',
                role: 'Consultor de Estilo',
                description: 'Especialista em tendências e qualidade, Sr. Galvani combina conhecimento técnico com sensibilidade estética. Garante que cada cliente saia satisfeito e confiante.',
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                className="card-organic"
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary/50 flex-shrink-0" />
                  <div className="flex-1">
                    <h4
                      className="text-xl font-bold text-foreground mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {person.name}
                    </h4>
                    <p className="text-sm font-semibold text-accent mb-3">
                      {person.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {person.description}
                    </p>
                  </div>
                </div>
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
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
