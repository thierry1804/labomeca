import React from 'react';
import { ArrowDown, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/162568/metal-processing-machine-machining-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Atelier d'usinage industriel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Solutions d'Ingénierie de Précision pour{' '}
          <span className="text-primary-orange">l'Industrie Malgache</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Spécialisés en Usinage Industriel, Fabrication et Maintenance
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light-orange transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Demander un Devis
          </a>
          <button className="flex items-center space-x-2 text-white hover:text-primary-orange transition-colors duration-300">
            <PlayCircle size={24} />
            <span className="font-medium">Voir Notre Processus</span>
          </button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-orange">15+</div>
            <div className="text-white/80">Années d'Expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-orange">500+</div>
            <div className="text-white/80">Projets Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-orange">50+</div>
            <div className="text-white/80">Clients Industriels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-orange">24/7</div>
            <div className="text-white/80">Support Disponible</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Défiler vers la section services"
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;