import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 relative bg-white dark:bg-gray-900 transition-colors duration-300" aria-labelledby="contact-heading">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Nous Contacter
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Rejoignez notre communauté de DSI et bénéficiez de notre réseau
                        d'expertise
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border dark:border-gray-700 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-primary-light/20 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Mail className="w-8 h-8 text-primary dark:text-primary-light" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-center mb-4 text-lg">Email</h4>
                            <div className="text-center space-y-2">
                                <a href="mailto:contact@anapna.dz" className="block text-primary dark:text-primary-light hover:text-primary transition-colors">
                                    contact@anapna.dz
                                </a>
                                {/* <a href="mailto:secretariat@anapna.dz" className="block text-primary hover:text-primary transition-colors">
                  secretariat@anapna.dz
                </a> */}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border dark:border-gray-700 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-primary-light/20 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Phone className="w-8 h-8 text-primary dark:text-primary-light" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-center mb-4 text-lg">Téléphone</h4>
                            <div className="text-center space-y-2">
                                <p className="text-gray-600 dark:text-gray-300">+213772394988</p>
                            </div>
                        </div>

                        {/* Carte Interactive - Remplace l'adresse statique */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border dark:border-gray-700 hover:shadow-xl transition-shadow overflow-hidden h-full min-h-[300px] relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51165.68853759918!2d3.04130005!3d36.7262799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad6795639515%3A0x4ba4b4c9d0976f63!2sKouba%2C%20Alger!5e0!3m2!1sfr!2sdz!4v1710330000000!5m2!1sfr!2sdz"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full group-hover:filter-none transition-all duration-500"
                                title="Carte de localisation ANAPNA"
                            ></iframe>
                            <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 border-t border-gray-100 dark:border-gray-800 opacity-90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                <div className="flex items-center justify-center space-x-2">
                                    <MapPin className="w-4 h-4 text-primary dark:text-primary-light" />
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Kouba, Alger</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-br from-primary-light/10 to-accent/10 rounded-xl border border-primary-light dark:border-primary/50 dark:bg-gray-800/50">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl text-center">
                            Conditions d'adhésion
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary dark:bg-primary-light rounded-full mt-2"></div>
                                <p className="text-gray-700 dark:text-gray-300">Fonction de DSI ou équivalent</p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary dark:bg-primary-light rounded-full mt-2"></div>
                                <p className="text-gray-700 dark:text-gray-300">Cotisation annuelle</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary dark:bg-primary-light rounded-full mt-2"></div>
                                <p className="text-gray-700 dark:text-gray-300">Ne pas exercer d'activité commerciale IT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
