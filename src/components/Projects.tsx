import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  
  const categories = ['tous', 'usinage', 'fabrication', 'maintenance'];
  
  const projects = [
    {
      id: 1,
      title: 'Restauration de Pompe Industrielle',
      category: 'maintenance',
      image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Restauration complète de pompes industrielles lourdes pour opérations minières.',
      client: 'Mining Corp Madagascar',
      year: '2023'
    },
    {
      id: 2,
      title: 'Structure Acier Personnalisée',
      category: 'fabrication',
      image: 'https://images.pexels.com/photos/162568/metal-processing-machine-machining-162568.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Structure acier d\'ingénierie de précision pour installation de fabrication textile.',
      client: 'Madagascar Textiles',
      year: '2023'
    },
    {
      id: 3,
      title: 'Composants CNC de Précision',
      category: 'usinage',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Composants usinés haute précision pour équipements agricoles.',
      client: 'Agri-Tech Solutions',
      year: '2023'
    },
    {
      id: 4,
      title: 'Fabrication Équipement Portuaire',
      category: 'fabrication',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Équipement de chargement personnalisé pour projet d\'expansion du Port de Toamasina.',
      client: 'Autorité Portuaire',
      year: '2022'
    },
    {
      id: 5,
      title: 'Usinage Pales de Turbine',
      category: 'usinage',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Fabrication de pales de turbine de précision pour projet d\'énergie renouvelable.',
      client: 'Green Energy Ltd',
      year: '2022'
    },
    {
      id: 6,
      title: 'Maintenance Ligne d\'Usine',
      category: 'maintenance',
      image: 'https://images.pexels.com/photos/5691669/pexels-photo-5691669.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Programme de maintenance complet pour équipements de transformation alimentaire.',
      client: 'Madagascar Foods',
      year: '2022'
    }
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-navy-blue-black mb-4">
            Nos Projets Récents
          </h2>
          <p className="text-xl text-gray-secondary max-w-2xl mx-auto">
            Démonstration de notre expertise à travers divers secteurs industriels à Madagascar
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 mx-1 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary-orange text-white shadow-md'
                    : 'text-gray-secondary hover:text-primary-orange'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'usinage' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'fabrication' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-navy-blue-black mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-secondary mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="text-sm text-primary-orange font-medium">
                    {project.client}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;