import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Années d\'Expérience' },
    { icon: Users, value: '25+', label: 'Ingénieurs Experts' },
    { icon: Clock, value: '500+', label: 'Projets Réalisés' },
    { icon: MapPin, value: '50+', label: 'Clients Industriels' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy-blue-black mb-6">
              Leader en Ingénierie Mécanique à Madagascar
            </h2>
            
            <p className="text-lg text-gray-secondary mb-6 leading-relaxed">
              Depuis 2009, Labomeca est à l'avant-garde de l'excellence en ingénierie mécanique à Madagascar. 
              Notre engagement envers la précision, la qualité et l'innovation nous a fait devenir le partenaire 
              de confiance des entreprises industrielles à travers la nation insulaire.
            </p>
            
            <p className="text-lg text-gray-secondary mb-8 leading-relaxed">
              De l'usinage de précision à la fabrication sur mesure, nous apportons des standards internationaux 
              à l'industrie locale, aidant les entreprises à atteindre l'excellence opérationnelle tout en 
              soutenant la croissance économique de Madagascar.
            </p>

            {/* Mission Statement */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-navy-blue-black mb-3">Notre Mission</h3>
              <p className="text-gray-secondary leading-relaxed">
                Livrer des solutions d'ingénierie mécanique de classe mondiale qui permettent aux industries 
                de Madagascar de rivaliser à l'échelle mondiale tout en favorisant les talents locaux et 
                le développement durable.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-primary-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy-blue-black">{stat.value}</div>
                  <div className="text-sm text-gray-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5691651/pexels-photo-5691651.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Fondateur et équipe de Labomeca"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent"></div>
            </div>

            {/* Founder Quote */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-gray-secondary mb-2 italic">
                    "La qualité n'est pas seulement notre standard, c'est notre engagement envers l'avenir industriel de Madagascar."
                  </p>
                  <div className="text-sm font-semibold text-navy-blue-black">Fondateur & PDG</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;