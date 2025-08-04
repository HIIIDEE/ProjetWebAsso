"use client";

import React, { useState, useEffect } from "react";
import { Network, Code, Shield, Building } from "lucide-react";

const PageLoader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const loadingSteps = [
    {
      icon: Network,
      text: "Initialisation du système",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      text: "Sécurisation des connexions",
      color: "text-green-500",
    },
    { icon: Code, text: "Chargement des composants", color: "text-purple-500" },
    { icon: Building, text: "Finalisation", color: "text-orange-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Commencer l'animation de sortie
          setTimeout(() => {
            setIsExiting(true);
            // Notifier la fin du chargement après l'animation
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
    }, 1200);

    return () => clearInterval(stepInterval);
  }, []);

  const CurrentIcon = loadingSteps[currentStep].icon;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-all duration-800 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-green-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-purple-200 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-orange-200 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="text-center z-10">
        {/* Logo Animé */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl animate-bounce">
            <Network className="w-12 h-12 text-white" />
          </div>

          {/* Cercles animés autour du logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-blue-300 rounded-full animate-ping"
                style={{
                  width: `${120 + i * 20}px`,
                  height: `${120 + i * 20}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Titre avec animation de frappe */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">ANDSI</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Association Nationale des DSI
        </p>

        {/* Étape actuelle avec icône animée */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border">
            <CurrentIcon
              className={`w-6 h-6 ${loadingSteps[currentStep].color} animate-spin`}
            />
            <span className="text-gray-700 font-medium">
              {loadingSteps[currentStep].text}
            </span>
          </div>
        </div>

        {/* Barre de progression moderne */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Progression</span>
            <span className="text-sm font-semibold text-blue-600">
              {Math.round(loadingProgress)}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${loadingProgress}%` }}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Points de chargement animés */}
        <div className="flex items-center justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Texte de chargement */}
        <p className="text-sm text-gray-500 mt-4 animate-pulse">
          Préparation de votre expérience...
        </p>
      </div>
    </div>
  );
};

// Composant wrapper pour gérer l'état de chargement
const LoaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Délai pour permettre l'animation de sortie
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}
      <div
        className={`transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;
