import React from 'react';

const GroupesElectrogenes = () => {
  return (
    <section id="groupes-electrogenes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-dark mb-8">Groupes Électrogènes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/src/assets/groupe-vente.jpg"
              alt="Vente de Groupes Électrogènes"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Vente</h3>
            <p className="text-gray-600">
              Nous proposons une large gamme de groupes électrogènes pour tous vos besoins en alimentation électrique de secours.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/src/assets/groupe-installation.jpg"
              alt="Installation de Groupes Électrogènes"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Installation</h3>
            <p className="text-gray-600">
              Notre équipe d'experts assure l'installation complète de vos groupes électrogènes avec toutes les normes de sécurité.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/src/assets/groupe-maintenance.jpg"
              alt="Maintenance de Groupes Électrogènes"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-navy-dark mb-4">Maintenance</h3>
            <p className="text-gray-600">
              Service de maintenance préventive et curative pour garantir le bon fonctionnement de vos équipements.
            </p>
          </div>
        </div>
        <div className="mt-12 bg-primary-orange/10 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/src/assets/groupe-controle.jpg"
              alt="Contrôle à Distance"
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold text-navy-dark mb-4">Contrôle à Distance</h3>
              <p className="text-gray-600">
                Bénéficiez d'un contrôle à distance de vos groupes électrogènes grâce à notre système de monitoring avancé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupesElectrogenes; 