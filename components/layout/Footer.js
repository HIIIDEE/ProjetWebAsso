import React from "react";
import { Network, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">ANAPNA</span>
                <p className="text-sm text-gray-400">
                  Association Nationale de la Promotion du Numérique en Algérie
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Fédérer et accompagner les DSI algériens dans leurs missions
              stratégiques de transformation digitale et de gouvernance IT.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Statuts de l'association
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Règlement intérieur
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Annuaire des membres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Publications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Recevez nos actualités et événements
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary px-4 py-2 rounded-r-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2024 Association Nationale de la Promotion du Numérique en Algérie
            (ANAPNA). Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
