import React from 'react';
import { Cog, Wrench, Hammer, Truck, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: 'Usinage de Précision',
      description: 'Usinage CNC haute précision et tournage pour composants industriels complexes.',
      features: ['Fraisage CNC', 'Opérations de Tournage', 'Rectification de Surface']
    },
    {
      icon: Hammer,
      title: 'Fabrication Métallique',
      description: 'Services de fabrication métallique sur mesure de la conception aux produits finis.',
      features: ['Fabrication Acier', 'Travail Aluminium', 'Conceptions Personnalisées']
    },
    {
      icon: Wrench,
      title: 'Maintenance d\'Équipements',
      description: 'Services de maintenance complets pour maintenir vos machines en fonctionnement efficace.',
      features: ['Maintenance Préventive', 'Réparations d\'Urgence', 'Remplacement de Pièces']
    },
    {
      icon: Truck,
      title: 'Services Sur Site',
      description: 'Services d\'ingénierie mobiles livrés directement dans votre installation industrielle.',
      features: ['Réparations sur Terrain', 'Installation', 'Consultation']
    },
    {
      icon: Shield,
      title: 'Assurance Qualité',
      description: 'Tests rigoureux et contrôle qualité pour garantir des standards exceptionnels.',
      features: ['Tests de Matériaux', 'Contrôle Qualité', 'Certification']
    },
    {
      icon: Settings,
      title: 'Solutions Personnalisées',
      description: 'Solutions d\'ingénierie sur mesure conçues pour vos besoins industriels spécifiques.',
      features: ['Ingénierie de Conception', 'Prototypage', 'Fabrication']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-navy-blue-black mb-4">
            Nos Services d'Ingénierie
          </h2>
          <p className="text-xl text-gray-secondary max-w-2xl mx-auto">
            Solutions complètes d'ingénierie mécanique adaptées au secteur industriel malgache
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-orange/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary-orange" />
              </div>
              
              <h3 className="text-xl font-semibold text-navy-blue-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-secondary mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-secondary">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className="inline-flex items-center text-primary-orange font-semibold hover:text-primary-light-orange transition-colors duration-300"
              >
                En Savoir Plus
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;