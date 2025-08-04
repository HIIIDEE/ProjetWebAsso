import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// GET pour tester que l'API fonctionne
export async function GET() {
  return NextResponse.json({
    message: "API send-email fonctionne !",
    status: "OK",
    timestamp: new Date().toISOString(),
  });
}

// POST pour envoyer l'email
export async function POST(request) {
  try {
    const { nom, prenom, email, entreprise, fonction, motivations } =
      await request.json();

    // Vérification des champs requis
    if (!nom || !prenom || !email || !entreprise || !fonction) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "salimdjaffer.23@gmail.com", // Changez par votre vraie adresse email
      subject: `Nouvelle demande d'adhésion - ${nom} ${prenom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Nouvelle Demande d'Adhésion</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Association Nationale de la Promotion du Numérique en Algérie</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 30px; border: 1px solid #e2e8f0;">
            <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">👤 Informations du Candidat</h2>
            
            <div style="display: grid; gap: 15px;">
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <strong style="color: #475569;">Nom complet :</strong> ${nom} ${prenom}
              </div>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                <strong style="color: #475569;">Email :</strong> <a href="mailto:${email}" style="color: #10b981;">${email}</a>
              </div>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <strong style="color: #475569;">Entreprise :</strong> ${entreprise}
              </div>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                <strong style="color: #475569;">Fonction :</strong> ${fonction}
              </div>
            </div>
          </div>
          
          ${
            motivations
              ? `
          <div style="background-color: #eff6ff; padding: 25px; border: 1px solid #bfdbfe;">
            <h2 style="color: #1e40af; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">💭 Motivations et Expérience</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; line-height: 1.6; white-space: pre-line;">${motivations}</div>
          </div>
          `
              : ""
          }
          
          <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; border: 1px solid #f59e0b; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0; display: flex; align-items: center;">
              ⚠️ Rappel des Conditions d'Adhésion
            </h3>
            <ul style="color: #92400e; margin: 15px 0; padding-left: 20px;">
              <li style="margin: 8px 0;">✓ Fonction de DSI ou équivalent</li>
              <li style="margin: 8px 0;">✓ Justificatif d'activité professionnelle</li>
              <li style="margin: 8px 0;">✓ Recommandation de deux membres</li>
              <li style="margin: 8px 0;">✓ Cotisation annuelle</li>
            </ul>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; text-align: center; font-size: 14px; color: #64748b; margin-top: 30px;">
            <p style="margin: 0;">📧 Email envoyé automatiquement depuis le site web ANAPNA</p>
            <p style="margin: 5px 0 0 0;">🕒 ${new Date().toLocaleDateString(
              "fr-FR",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}</p>
          </div>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    console.log(`Email envoyé avec succès pour ${nom} ${prenom}`);

    return NextResponse.json({
      message: "Demande d'adhésion envoyée avec succès",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    return NextResponse.json(
      {
        message: "Erreur lors de l'envoi de l'email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
