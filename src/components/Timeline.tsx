import React from 'react';
import { Calendar, Award, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      year: '2009',
      title: 'Fondation de l\'Entreprise',
      description: 'Labomeca a été créée avec la vision de fournir des services d\'ingénierie mécanique de classe mondiale au secteur industriel en croissance de Madagascar.',
      icon: Calendar,
      image: 'https://images.pexels.com/photos/5691651/pexels-photo-5691651.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2012',
      title: 'Premier Contrat Majeur',
      description: 'Obtention de notre premier contrat majeur de maintenance industrielle, établissant notre réputation de fiabilité et de précision.',
      icon: Award,
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2016',
      title: 'Expansion de l\'Équipe',
      description: 'Développement de notre équipe pour inclure des ingénieurs et techniciens spécialisés, améliorant nos capacités de service.',
      icon: Users,
      image: 'https://images.pexels.com/photos/5691669/pexels-photo-5691669.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2020',
      title: 'Équipements Modernes',
      description: 'Investissement dans des machines CNC de pointe et des outils de précision pour livrer un travail de qualité supérieure.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/162568/metal-processing-machine-machining-162568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-navy-blue-black mb-4">
            Notre Parcours
          </h2>
          <p className="text-xl text-gray-secondary max-w-2xl mx-auto">
            Construire l'excellence en ingénierie mécanique depuis 2009
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-orange h-full hidden lg:block"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 lg:px-8">
                  <div className={`bg-white rounded-xl shadow-lg p-8 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className="flex items-center mb-4 justify-center lg:justify-start">
                      <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mr-4">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-primary-orange">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-navy-blue-black mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-6 h-6 bg-primary-orange rounded-full border-4 border-white shadow-lg z-10 my-8 lg:my-0"></div>

                {/* Image */}
                <div className="flex-1 lg:px-8 mt-6 lg:mt-0">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;