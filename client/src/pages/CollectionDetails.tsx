import { motion } from 'framer-motion';
import { useRoute, useLocation } from 'wouter';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';

/**
 * Collection Details Page
 * 
 * Shows detailed information about eyewear collections
 * with 5+ exemplars per category
 */

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  description: string;
  material: string;
  style: string;
  rating: number;
}

const collections: Record<string, { title: string; products: Product[] }> = {
  premium: {
    title: 'Coleção Premium',
    products: [
      {
      id: 'p1',
      name: 'Aviador Clássico',
      brand: 'Ray-Ban',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Aviador+Classico',
        description: 'Óculos de sol aviador em titânio com lentes polarizadas.',
        material: 'Titânio',
        style: 'Aviador',
        rating: 5,
      },
      {
      id: 'p2',
      name: 'Wayfarer Retro',
      brand: 'Ray-Ban',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Wayfarer+Retro',
        description: 'Clássico intemporável com design retrô sofisticado.',
        material: 'Acetato',
        style: 'Wayfarer',
        rating: 5,
      },
      {
      id: 'p3',
      name: 'Cat Eye Elegante',
      brand: 'Dolce & Gabbana',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Cat+Eye+Elegante',
        description: 'Design feminino sofisticado em acetato premium.',
        material: 'Acetato Premium',
        style: 'Cat Eye',
        rating: 5,
      },
      {
      id: 'p4',
      name: 'Quadrado Moderno',
      brand: 'Prada',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Quadrado+Moderno',
        description: 'Geometria perfeita com acabamento em ouro.',
        material: 'Metal + Acetato',
        style: 'Quadrado',
        rating: 5,
      },
      {
      id: 'p5',
      name: 'Redondo Vintage',
      brand: 'Gucci',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Redondo+Vintage',
        description: 'Inspiração vintage com toque contemporâneo.',
        material: 'Metal Dourado',
        style: 'Redondo',
        rating: 5,
      },
      {
      id: 'p6',
      name: 'Oversized Chique',
      brand: 'Chanel',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Oversized+Chique',
        description: 'Tamanho generoso com design minimalista.',
        material: 'Acetato Premium',
        style: 'Oversized',
        rating: 5,
      },
    ],
  },
  optical: {
    title: 'Coleção Óptica',
    products: [
      {
      id: 'o1',
      name: 'Armação Titanium Pro',
      brand: 'Lindberg',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Titanium+Pro',
        description: 'Armação leve em titânio puro para conforto máximo.',
        material: 'Titânio',
        style: 'Moderno',
        rating: 5,
      },
      {
      id: 'o2',
      name: 'Armação Flex',
      brand: 'Flexon',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Armacao+Flex',
        description: 'Material flexível que se adapta ao rosto.',
        material: 'Flexon',
        style: 'Esportivo',
        rating: 5,
      },
      {
      id: 'o3',
      name: 'Armação Clássica',
      brand: 'Persol',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Armacao+Classica',
        description: 'Design clássico italiano com qualidade excepcional.',
        material: 'Acetato',
        style: 'Clássico',
        rating: 5,
      },
      {
      id: 'o4',
      name: 'Armação Minimalista',
      brand: 'Mykita',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Minimalista',
        description: 'Design minimalista com acabamento perfeito.',
        material: 'Metal',
        style: 'Minimalista',
        rating: 5,
      },
      {
      id: 'o5',
      name: 'Armação Vintage',
      brand: 'Oliver Peoples',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Vintage',
        description: 'Inspiração vintage com tecnologia moderna.',
        material: 'Acetato Premium',
        style: 'Vintage',
        rating: 5,
      },
    ],
  },
  kids: {
    title: 'Coleção Infantil',
    products: [
      {
      id: 'k1',
      name: 'Óculos Colorido',
      brand: 'Miraflex',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Colorido',
        description: 'Armação flexível e colorida para crianças.',
        material: 'Flexon',
        style: 'Divertido',
        rating: 5,
      },
      {
      id: 'k2',
      name: 'Óculos Protetor',
      brand: 'Julbo',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Protetor',
        description: 'Proteção UV completa para atividades ao ar livre.',
        material: 'Policarbonato',
        style: 'Esportivo',
        rating: 5,
      },
      {
      id: 'k3',
      name: 'Óculos Divertido',
      brand: 'Clearly Kids',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Divertido',
        description: 'Design divertido que as crianças adoram.',
        material: 'Acetato',
        style: 'Infantil',
        rating: 5,
      },
      {
      id: 'k4',
      name: 'Óculos Esportivo',
      brand: 'Oakley Youth',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Esportivo',
        description: 'Resistente e confortável para esportes.',
        material: 'O Matter',
        style: 'Esportivo',
        rating: 5,
      },
      {
      id: 'k5',
      name: 'Óculos Elegante',
      brand: 'Prada Kids',
      price: '',
        image: 'https://via.placeholder.com/400x300?text=Elegante',
        description: 'Design elegante para ocasiões especiais.',
        material: 'Acetato Premium',
        style: 'Elegante',
        rating: 5,
      },
    ],
  },
};

export default function CollectionDetails() {
  const [, params] = useRoute('/colecao/:category');
  const [, navigate] = useLocation();

  const category = params?.category as keyof typeof collections;
  const collection = collections[category];

  if (!collection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Coleção não encontrada</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent hover:underline"
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {collection.title}
          </h1>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {collection.products.map((product) => (
            <motion.div
              key={product.id}
              className="card-organic overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-muted rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div>
                <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm">
                  <p>
                    <span className="font-semibold text-foreground">Material:</span>{' '}
                    <span className="text-muted-foreground">{product.material}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Estilo:</span>{' '}
                    <span className="text-muted-foreground">{product.style}</span>
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-end">
                  <motion.a
                    href="https://wa.me/5583988901153?text=Olá! Gostaria de saber mais sobre este produto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-accent/10 rounded-2xl p-8 md:p-12 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Gostou de Algum Produto?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para agendar uma consultoria personalizada com Dona Ana e Sr. Galvani.
          </p>
          <motion.a
            href="https://wa.me/5583988901153?text=Olá! Gostaria de agendar uma consulta para conhecer melhor a coleção."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-accent text-white inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Agendar Consulta
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
