import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Section Component
 * 
 * Design: Organic Luxury Modernism
 * - Full-width image with organic mask
 * - Warm gradient overlay
 * - Offset text with elegant typography
 * - Smooth scroll indicator
 */

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } as any,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const scrollIndicatorVariants: Variants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Organic Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/hero-eyewear-a2kVo9cKYVVuZiw8rcUHA9.webp"
          alt="Ótica Muribeca Prime - Luxury Eyewear"
          className="w-full h-full object-cover"
        />
        {/* Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        {/* Organic shape overlay for depth */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <motion.div className="flex-1 text-white max-w-xl" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            variants={itemVariants}
          >
            Sua Visão,
            <br />
            <span className="text-amber-200">Nosso Cuidado</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Consultoria de visagismo personalizada para encontrar a armação perfeita que realça sua beleza natural. Atendimento exclusivo com Dona Ana e Sr. Galvani.
          </motion.p>

          <motion.div className="flex gap-4 flex-wrap" variants={itemVariants}>
            <motion.a
              href="https://wa.me/5583988901153?text=Olá! Gostaria de agendar uma consulta na Ótica Muribeca Prime."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-amber-600 hover:bg-amber-700 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              Agendar Consulta
            </motion.a>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#galeria');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-luxury bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              Conheça Nossa Coleção
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Decorative Element (Optional) */}
        <motion.div
          className="hidden lg:flex flex-1 justify-end"
          variants={itemVariants}
        >
          <div className="relative w-80 h-80">
            {/* Organic shape background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#D4A574', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#A8B8A8', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              <path
                d="M150,20 Q250,50 270,150 Q250,250 150,280 Q50,250 30,150 Q50,50 150,20 Z"
                fill="url(#grad1)"
              />
            </svg>
            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-amber-200 text-sm font-semibold tracking-widest uppercase">
                  Desde 1995
                </p>
                <p className="text-white text-4xl font-bold mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Muribeca
                </p>
                <p className="text-gray-300 text-sm mt-2">Excelência em Ótica</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/60 text-sm uppercase tracking-widest">Explore</p>
          <ChevronDown className="w-6 h-6 text-amber-200" />
        </div>
      </motion.div>

      {/* Organic Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 Q300,80 600,30 T1200,30 L1200,120 L0,120 Z"
            fill="#F5F1E8"
          />
        </svg>
      </div>
    </section>
  );
}
