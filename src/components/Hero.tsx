import React from 'react';
import { ArrowDown, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/src/assets/hero-bg.jpg"
          alt="Labomeca - Usinage Metal Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            LABOMECA
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8">
            USINAGE METAL SERVICE
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Votre partenaire de confiance pour tous vos besoins en usinage métal et services industriels.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light-orange transition-colors duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;