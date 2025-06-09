import React from 'react';

const Solaire = () => {
  return (
    <section id="solaire" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-dark mb-8">Solaire</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="/src/assets/solaire-solutions.jpg"
              alt="Solutions Énergétiques Solaires"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Nos Solutions en Énergie Solaire</h3>
            <p className="text-gray-600 mb-6">
              Nous proposons des solutions complètes en énergie solaire pour répondre à vos besoins en électricité :
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Installation de panneaux solaires</li>
              <li>• Systèmes d'énergie solaire pour entreprises</li>
              <li>• Solutions d'éclairage solaire</li>
              <li>• Maintenance et entretien</li>
              <li>• Études et conseils personnalisés</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/src/assets/solaire-avantages.jpg"
              alt="Avantages de l'Énergie Solaire"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Avantages</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Énergie renouvelable et propre</li>
              <li>• Réduction des coûts énergétiques</li>
              <li>• Solutions durables</li>
              <li>• Installation professionnelle</li>
              <li>• Support technique continu</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solaire; 