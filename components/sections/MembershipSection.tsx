"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Input from "../ui/Input";
import Button from "../ui/Button";

interface MembershipFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
    message: string;
    birthCertificate: File | null;
    residenceCertificate: File | null;
    workCertificate: File | null;
    criminalRecord: File | null;
}

const MembershipSection: React.FC = () => {
    const [formData, setFormData] = useState<MembershipFormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        message: "",
        birthCertificate: null,
        residenceCertificate: null,
        workCertificate: null,
        criminalRecord: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isConsentGiven, setIsConsentGiven] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const files = (e.target as HTMLInputElement).files;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const validateForm = (): string[] => {
        const errors: string[] = [];

        // Required fields check
        if (!formData.firstName.trim()) errors.push("Le prénom est requis.");
        if (!formData.lastName.trim()) errors.push("Le nom est requis.");
        if (!formData.email.trim()) errors.push("L'email est requis.");
        if (!formData.phone.trim()) errors.push("Le téléphone est requis.");
        if (!formData.company.trim()) errors.push("L'entreprise est requise.");
        if (!formData.jobTitle.trim()) errors.push("La fonction est requise.");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            errors.push("L'format de l'email est invalide.");
        }

        // File validation
        const maxFileSize = 5 * 1024 * 1024; // 5MB
        const requiredFiles = [
            { name: 'birthCertificate', label: 'Extrait de naissance' },
            { name: 'residenceCertificate', label: 'Certificat de résidence' },
            { name: 'workCertificate', label: 'Attestation de travail' },
            { name: 'criminalRecord', label: 'Casier judiciaire' }
        ] as const;

        requiredFiles.forEach(file => {
            if (!formData[file.name]) {
                errors.push(`Le document "${file.label}" est requis.`);
            } else if (formData[file.name] && formData[file.name]!.size > maxFileSize) {
                errors.push(`Le document "${file.label}" dépasse la taille limite de 5MB.`);
            }
        });

        return errors;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            setError(validationErrors.join(" "));
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const dataToSend = new FormData();
        dataToSend.append('prenom', formData.firstName);
        dataToSend.append('nom', formData.lastName);
        dataToSend.append('email', formData.email);
        dataToSend.append('telephone', formData.phone);
        dataToSend.append('entreprise', formData.company);
        dataToSend.append('fonction', formData.jobTitle);
        dataToSend.append('message', formData.message);

        if (formData.birthCertificate) dataToSend.append('birthCertificate', formData.birthCertificate);
        if (formData.residenceCertificate) dataToSend.append('residenceCertificate', formData.residenceCertificate);
        if (formData.workCertificate) dataToSend.append('workCertificate', formData.workCertificate);
        if (formData.criminalRecord) dataToSend.append('criminalRecord', formData.criminalRecord);

        try {
            const response = await fetch('/traitement.php', {
                method: 'POST',
                body: dataToSend
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                setError(null);
                // Réinitialiser le formulaire
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    jobTitle: "",
                    message: "",
                    birthCertificate: null,
                    residenceCertificate: null,
                    workCertificate: null,
                    criminalRecord: null,
                });
            } else {
                setError(data.message || "Une erreur est survenue lors de l'envoi.");
            }
        } catch (error) {
            console.error(error);
            setError("Une erreur est survenue lors de la connexion au serveur.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="membership" className="bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Devenir Membre"
                    subtitle="Rejoignez l'ANAPNA et participez à la transformation numérique de l'Algérie"
                />

                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        {isSuccess ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg
                                        className="w-10 h-10 text-green-600 dark:text-green-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Demande envoyée avec succès !
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    Merci de votre intérêt pour l'ANAPNA. Notre équipe examinera votre
                                    demande et vous contactera très prochainement.
                                </p>
                                {/* <div className="flex justify-center">
                                    <Button
                                        onClick={() => setIsSuccess(false)}
                                        variant="outline"
                                    >
                                        Envoyer une autre demande
                                    </Button>
                                </div> */}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 mb-6">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400 dark:text-red-300" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-red-700 dark:text-red-300">
                                                    {error}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Prénom
                                        </label>
                                        <Input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Votre prénom"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Nom
                                        </label>
                                        <Input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="votre@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Téléphone
                                        </label>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="05 XX XX XX XX"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Entreprise / Organisme
                                        </label>
                                        <Input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Nom de votre structure"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Fonction
                                        </label>
                                        <Input
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            placeholder="Votre poste actuel"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Documents requis</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Extrait de naissance
                                            </label>
                                            <input
                                                type="file"
                                                name="birthCertificate"
                                                onChange={handleChange}
                                                className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-light/10 file:text-primary hover:file:bg-primary-light/20 dark:file:bg-primary/20 dark:file:text-primary-light"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Certificat de résidence
                                            </label>
                                            <input
                                                type="file"
                                                name="residenceCertificate"
                                                onChange={handleChange}
                                                className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-light/10 file:text-primary hover:file:bg-primary-light/20 dark:file:bg-primary/20 dark:file:text-primary-light"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Attestation de travail
                                            </label>
                                            <input
                                                type="file"
                                                name="workCertificate"
                                                onChange={handleChange}
                                                className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-light/10 file:text-primary hover:file:bg-primary-light/20 dark:file:bg-primary/20 dark:file:text-primary-light"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Casier judiciaire
                                            </label>
                                            <input
                                                type="file"
                                                name="criminalRecord"
                                                onChange={handleChange}
                                                className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-light/10 file:text-primary hover:file:bg-primary-light/20 dark:file:bg-primary/20 dark:file:text-primary-light"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message (Optionnel)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:outline-none transition-colors"
                                        placeholder="Parlez-nous de vos motivations..."
                                    ></textarea>
                                </div>


                                {/* Case à cocher pour le consentement (Loi 18-07) */}
                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="consent"
                                            name="consent"
                                            type="checkbox"
                                            required
                                            checked={isConsentGiven}
                                            onChange={(e) => setIsConsentGiven(e.target.checked)}
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="consent" className="font-medium text-gray-700 dark:text-gray-300">
                                            En application de la loi 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, j'autorise l'ANAPNA à traiter mes données personnelles dans le cadre de ma demande d'adhésion.
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className={`w-full transition-colors duration-300 ${!isConsentGiven ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400' : ''}`}
                                        disabled={isSubmitting || !isConsentGiven}
                                        variant="primary"
                                    >
                                        {isSubmitting ? "Envoi en cours..." : "Soumettre ma demande"}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MembershipSection;
