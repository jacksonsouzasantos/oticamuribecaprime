import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * 
 * Design: Organic Luxury Modernism
 * - Sticky navigation with glassmorphism effect
 * - Smooth scroll to sections
 * - Mobile-responsive menu
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: 'hero' },
    { label: 'Visagismo', href: 'visagismo' },
    { label: 'Coleção', href: 'galeria' },
    { label: 'Depoimentos', href: 'depoimentos' },
    { label: 'Contato', href: 'contato' },
  ];

  const handleNavClick = (targetId: string) => {
    setIsOpen(false);
    
    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-accent/20 flex items-center justify-center bg-white">
            <img
              src="/src/lib/logo.png"
              alt="Ótica Muribeca Prime Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/5583988901153?text=Olá! Gostaria de agendar uma consulta na Ótica Muribeca Prime."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          WhatsApp
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-white/90 backdrop-blur-md border-t border-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-sm font-semibold text-foreground hover:text-accent transition-colors py-3 px-2 rounded hover:bg-accent/10"
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="https://wa.me/5583988901153?text=Olá! Gostaria de agendar uma consulta na Ótica Muribeca Prime."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors text-center block"
                whileHover={{ scale: 1.05 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
