import React from 'react';

const Flexibles = () => {
  return (
    <section id="flexibles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-dark mb-8">Flexibles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Nos Solutions en Flexibles</h3>
            <p className="text-gray-600 mb-6">
              Nous proposons une gamme complète de solutions en flexibles pour vos applications industrielles :
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Flexibles hydrauliques</li>
              <li>• Flexibles pneumatiques</li>
              <li>• Flexibles pour applications spéciales</li>
              <li>• Accessoires et raccords</li>
              <li>• Service de réparation et maintenance</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Pourquoi Nous Choisir ?</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Large gamme de produits</li>
              <li>• Expertise technique</li>
              <li>• Service rapide</li>
              <li>• Support personnalisé</li>
              <li>• Garantie qualité</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flexibles; 