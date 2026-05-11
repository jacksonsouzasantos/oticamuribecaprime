import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Gallery Section Component
 * 
 * Design: Organic Luxury Modernism
 * - Staggered product showcase with organic spacing
 * - Hover glow and scale effects
 * - Premium brand highlighting
 * - Warm color palette
 */

export default function Gallery() {
  const [, navigate] = useLocation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const products = [
    {
      name: 'Ray-Ban Clubmaster',
      brand: 'Ray-Ban',
      category: 'Clássico',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/eyewear-gallery-S4xsDWDnnzXxAZuFoQDNWW.webp',
      featured: true,
    },
    {
      name: 'Tom Ford Butterfly',
      brand: 'Tom Ford',
      category: 'Designer',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/eyewear-gallery-S4xsDWDnnzXxAZuFoQDNWW.webp',
      featured: false,
    },
    {
      name: 'Celine Round',
      brand: 'Celine',
      category: 'Moderno',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/eyewear-gallery-S4xsDWDnnzXxAZuFoQDNWW.webp',
      featured: false,
    },
    {
      name: 'Gucci Oversized',
      brand: 'Gucci',
      category: 'Luxo',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/eyewear-gallery-S4xsDWDnnzXxAZuFoQDNWW.webp',
      featured: true,
    },
    {
      name: 'Vintage Round',
      brand: 'Muribeca Select',
      category: 'Retrô',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/eyewear-gallery-S4xsDWDnnzXxAZuFoQDNWW.webp',
      featured: false,
    },
    {
      name: 'Minimal Cat-Eye',
      brand: 'Muribeca Select',
      category: 'Contemporâneo',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/iZfDbutbv3y6uMj5qRtkVY/eyewear-gallery-S4xsDWDnnzXxAZuFoQDNWW.webp',
      featured: false,
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
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
            variants={itemVariants}
          >
            Nossa Coleção
            <br />
            <span className="text-accent">Curada com Excelência</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            variants={itemVariants}
          >
            Selecionamos as melhores marcas e modelos do mercado. Cada peça é escolhida por sua qualidade, design e capacidade de transformar o seu look.
          </motion.p>
        </motion.div>

        {/* Gallery Grid - Staggered Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product, index) => {
            const isFeatured = product.featured;
            const heightClass = isFeatured ? 'h-96 md:h-[500px]' : 'h-64 md:h-80';
            
            return (
              <motion.div
                key={index}
                className={isFeatured ? 'lg:col-span-1 lg:row-span-2' : ''}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Product Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${heightClass}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                        {product.category}
                      </p>
                      <h3
                        className="text-xl md:text-2xl font-bold text-foreground"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-start justify-between mt-4">
                      <p className="text-sm text-muted-foreground">{product.brand}</p>
                      {product.featured && (
                        <div className="flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                        </div>
                      )}
                    </div>
                    <motion.button
                      onClick={() => {
                        // Navigate to appropriate collection based on category
                        const categoryMap: Record<string, string> = {
                          'Clássico': 'premium',
                          'Designer': 'premium',
                          'Moderno': 'optical',
                          'Luxo': 'premium',
                          'Retrô': 'premium',
                          'Contemporâneo': 'optical',
                        };
                        const category = categoryMap[product.category] || 'premium';
                        navigate(`/colecao/${category}`);
                      }}
                      className="w-full py-2 px-4 bg-accent/10 hover:bg-accent/20 text-accent font-semibold rounded-lg transition-colors duration-300 mt-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      Ver Detalhes
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            variants={itemVariants}
          >
            Quer explorar mais? Visite nossa loja para descobrir a coleção completa.
          </motion.p>
          <motion.a
            href="https://wa.me/5583988901153?text=Olá! Gostaria de agendar uma visita para conhecer a coleção completa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-accent hover:bg-accent/90 shadow-lg inline-block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Agendar Visita
          </motion.a>
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
