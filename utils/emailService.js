export const sendEventRegistration = async (formData, eventData) => {
  try {
    // Sujet de l'email
    const emailSubject = `🎯 Nouvelle inscription - ${eventData.title}`;

    // Corps de l'email
    const emailBody = `
Bonjour équipe ANDSI,

Une nouvelle inscription a été effectuée via le site web.

═══════════════════════════════════════════════════════
📅 DÉTAILS DE L'ÉVÉNEMENT
• Événement : ${eventData.title}
• Date : ${eventData.date}
• Lieu : ${eventData.location}
• Type : ${eventData.type}

═══════════════════════════════════════════════════════
👤 INFORMATIONS DU PARTICIPANT
• Nom complet : ${formData.firstName} ${formData.lastName}
• Email : ${formData.email}
• Téléphone : ${formData.phone}
• Entreprise : ${formData.company}
• Fonction : ${formData.position}
• Expérience IT : ${formData.experience || "Non renseigné"}

═══════════════════════════════════════════════════════
📋 INFORMATIONS COMPLÉMENTAIRES
• Restrictions alimentaires : ${formData.dietaryRestrictions || "Aucune"}
• Motivations : ${formData.motivation || "Non renseigné"}

═══════════════════════════════════════════════════════
📊 DÉTAILS DE L'INSCRIPTION
• Date d'inscription : ${new Date().toLocaleDateString("fr-FR")}
• Heure d'inscription : ${new Date().toLocaleTimeString("fr-FR")}
• Navigateur : ${navigator.userAgent}

---
Cette inscription a été générée automatiquement depuis le site web ANDSI.
Email de contact du participant : ${formData.email}

Merci de confirmer la réception et l'inscription.

Cordialement,
Système d'inscription ANDSI
    `.trim();

    // Crée le lien mailto vers ton adresse de réception
    const mailtoLink = `mailto:salimdjaffer.23@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Ouvre le client mail par défaut (sans erreur de promesse)
    window.location.href = mailtoLink;

    return {
      success: true,
      method: "mailto",
      message:
        "Votre client email va s'ouvrir avec l'inscription pré-remplie. Cliquez sur \"Envoyer\" pour finaliser.",
    };
  } catch (error) {
    console.error("Erreur mailto:", error);
    return {
      success: false,
      error:
        "Impossible d'ouvrir votre client email. Veuillez contacter directement contact@andsi.dz",
      fallbackEmail: "contact@andsi.dz",
    };
  }
};
