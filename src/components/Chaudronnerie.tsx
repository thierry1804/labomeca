import React from 'react';

const Chaudronnerie = () => {
  return (
    <section id="chaudronnerie" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-dark mb-8">Chaudronnerie Mécano-soudure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/src/assets/chaudronnerie-service.jpg"
              alt="Services de Chaudronnerie"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Nos Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Fabrication de structures métalliques</li>
              <li>• Soudure TIG, MIG, MMA</li>
              <li>• Réalisation de pièces sur mesure</li>
              <li>• Maintenance et réparation</li>
              <li>• Assemblage mécanique</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/src/assets/chaudronnerie-expertise.jpg"
              alt="Expertise en Chaudronnerie"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Notre Expertise</h3>
            <p className="text-gray-600 mb-4">
              Notre équipe de chaudronniers qualifiés met son expertise à votre service pour tous vos projets de fabrication métallique.
            </p>
            <p className="text-gray-600">
              Nous travaillons avec différents matériaux et techniques pour répondre à vos besoins spécifiques en termes de résistance, précision et finition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chaudronnerie; 