const Historique = (): JSX.Element => {
  return (
    <section id="historique" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-navy-dark mb-12 text-center">Notre Historique</h2>
        <div className="prose max-w-none">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="md:w-1/4">
              <img
                src="/src/assets/ceo.webp"
                alt="Patrick Labouesse - Fondateur de Labomeca"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                <strong>Patrick Labouesse</strong>, fondateur de Labomeca a créé en 2002 à Antananarivo, son atelier d'usinage, c'est-à-dire de tournage, de fraisage et de rectification, en apportant ses connaissances et son savoir-faire acquis pendant 10 années à Heidelberg Allemagne dans le laboratoire EMBL de biologie moléculaire où il assurait la partie micromécanique.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                Cette expérience professionnelle à la fois de l'acquisition de la connaissance des matières premières, du traitement thermique et leur application lui a permis de mettre en œuvre une gamme multifonction d'une grande qualité au service de l'industrie malgache.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Avec son équipe de cadres nationaux passionnés dont elle a su s'entourer au fil du temps, la société Labomeca prend en charge le service après-vente et la maintenance des matériels de ses clients en innovant notamment dans la mise en place du contrôle à distance de vos groupes électrogènes, prévenant ainsi d'imprévisibles dommages et réduisant de ce fait les coûts d'entretien de vos installations.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Historique; 