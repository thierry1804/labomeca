import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Historique from './components/Historique';
import Usinage from './components/Usinage';
import Chaudronnerie from './components/Chaudronnerie';
import Flexibles from './components/Flexibles';
import GroupesElectrogenes from './components/GroupesElectrogenes';
import Solaire from './components/Solaire';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <main>
        <Hero />
        <Historique />
        <Usinage />
        <Chaudronnerie />
        <Flexibles />
        <GroupesElectrogenes />
        <Solaire />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;