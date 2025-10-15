"use client";

import React, { useState, useEffect } from "react";
import { Network, Code, Shield, Building } from "lucide-react";
import Image from "next/image";

const PageLoader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const loadingSteps = [
    {
      icon: Network,
      text: "Initialisation du système",
      color: "text-primary",
    },
    {
      icon: Shield,
      text: "Sécurisation des connexions",
      color: "text-primary-light",
    },
    { icon: Code, text: "Chargement des composants", color: "text-accent" },
    { icon: Building, text: "Finalisation", color: "text-accent-light" },
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
  }, [loadingSteps.length]);

  const CurrentIcon = loadingSteps[currentStep].icon;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-light/5 via-white to-accent/5 transition-all duration-800 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-primary-light rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-accent-light rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="text-center z-10">
        {/* Logo Animé */}
        <div className="mb-8 relative">
          <div className="w-48 h-32 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl animate-bounce">
            <Image
              src="/logo_napddz.svg"
              alt="Logo ANAPNA"
              width={192}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Cercles animés autour du logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-primary-light rounded-full animate-ping"
                style={{
                  width: `${200 + i * 30}px`,
                  height: `${200 + i * 30}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Étape actuelle avec icône animée */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-light">
            <CurrentIcon
              className={`w-6 h-6 ${loadingSteps[currentStep].color} animate-spin`}
            />
            <span className="text-gray-dark font-medium">
              {loadingSteps[currentStep].text}
            </span>
          </div>
        </div>

        {/* Barre de progression moderne */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-dark/70">Progression</span>
            <span className="text-sm font-semibold text-primary">
              {Math.round(loadingProgress)}%
            </span>
          </div>

          <div className="w-full bg-gray-light rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-primary via-primary-light to-accent rounded-full transition-all duration-300 ease-out relative"
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
              className="w-3 h-3 bg-primary-light rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Texte de chargement */}
        <p className="text-sm text-gray-dark/70 mt-4 animate-pulse">
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
