"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Logo */}
                <div className="mb-8">
                    <div className="inline-block p-4 bg-primary/10 rounded-full">
                        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-8xl md:text-9xl font-bold text-gray-200 mb-4">404</h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Page non trouvée
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Retour à l'accueil
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full transition-all duration-300 border border-gray-200 hover:border-primary/30"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Page précédente
                    </button>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">Liens utiles :</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/#services" className="text-primary hover:text-primary-dark hover:underline">
                            Nos Services
                        </Link>
                        <Link href="/#membres" className="text-primary hover:text-primary-dark hover:underline">
                            Membres Fondateurs
                        </Link>
                        <Link href="/#contact" className="text-primary hover:text-primary-dark hover:underline">
                            Contact
                        </Link>
                        <Link href="/adhesion/" className="text-primary hover:text-primary-dark hover:underline">
                            Adhésion
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
