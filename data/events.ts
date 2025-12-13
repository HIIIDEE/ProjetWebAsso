export interface UpcomingEvent {
    date: string;
    title: string;
    location: string;
    type: string;
}

export interface PastEvent {
    id?: string | number;
    date: string;
    title: string;
    location: string;
    type: string;
    participants: string;
    description: string;
    image: string;
}

export const upcomingEvents: UpcomingEvent[] = [
    {
        date: "15 Oct",
        title: "Forum National des DSI",
        location: "Centre International de Conférences - Alger",
        type: "Conférence",
    },
    {
        date: "22 Nov",
        title: "Séminaire Cybersécurité",
        location: "Hôtel Hilton - Alger",
        type: "Formation",
    },
    {
        date: "10 Déc",
        title: "Table Ronde - IA & Gouvernance",
        location: "Université USTHB",
        type: "Débat",
    },
];


export const pastEvents: PastEvent[] = [
    {
        id: 1,
        date: "18-20 Nov 2025",
        title: "Cyber Security Meeting",
        location: "Oran",
        type: "Conférence",
        participants: "DSI & Experts",
        description:
            "Le club DSI Algérie partenaire de la première édition du cyber security meeting. Une grande opportunité de visibilité pour l'association avec l'adhésion de nouveaux DSI.",
        image: "/CyberSecurity.png",
    },
    {
        id: 2,
        date: "4-6 Nov 2025",
        title: "ConstanTic 2025 (3ème édition)",
        location: "Hôtel Marriott - Constantine",
        type: "Salon",
        participants: "Acteurs du numérique",
        description:
            "Participation à ConstanTic 2025, événement dédié à la construction d'une société de l'information inclusive et durable. Échange, partage d'expériences et coopération.",
        image: "/ConstanTic.png",
    },
];

