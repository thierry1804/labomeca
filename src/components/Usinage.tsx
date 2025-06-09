import React from 'react';

const Usinage = () => {
  return (
    <section id="usinage" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-dark mb-8">Usinage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/src/assets/usinage-cnc.jpg"
              alt="Usinage CNC"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Usinage CNC</h3>
            <p className="text-gray-600">
              Précision et qualité dans l'usinage de pièces complexes grâce à nos machines CNC de dernière génération.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/src/assets/usinage-conventionnel.jpg"
              alt="Usinage Conventionnel"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Usinage Conventionnel</h3>
            <p className="text-gray-600">
              Expertise dans l'usinage traditionnel pour des pièces de toutes dimensions et complexités.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/src/assets/prototypage.jpg"
              alt="Prototypage"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Prototypage</h3>
            <p className="text-gray-600">
              Développement rapide de prototypes et de pièces uniques selon vos spécifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usinage; 