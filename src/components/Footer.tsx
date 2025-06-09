import React from 'react';
import { Wrench, MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Usinage de Précision',
    'Fabrication Métallique',
    'Maintenance d\'Équipements',
    'Services Sur Site',
    'Assurance Qualité',
    'Solutions Personnalisées'
  ];

  const quickLinks = [
    { label: 'À Propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Devis Gratuit', href: '#contact' }
  ];

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Labomeca</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Entreprise leader en ingénierie mécanique à Madagascar, livrant des solutions de précision 
              pour l'excellence industrielle depuis 2009.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/80 hover:text-primary-orange transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/80 hover:text-primary-orange transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Informations de Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Zone Industrielle Forello</p>
                  <p>Antananarivo, Madagascar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-orange flex-shrink-0" />
                <div className="text-white/80">
                  <p>+261 20 22 123 45</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-orange flex-shrink-0" />
                <div className="text-white/80">
                  <p>info@labomeca.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Labomeca. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary-orange transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-primary-orange transition-colors duration-300">
                Conditions de Service
              </a>
              <a href="#" className="text-white/60 hover:text-primary-orange transition-colors duration-300">
                Plan du Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;