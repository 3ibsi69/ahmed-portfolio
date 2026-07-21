import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Woobia — Livestock Trading E-Commerce Platform",
    description:
      "Built and maintain a large-scale mobile and web platform for animal trading, used by 200+ active users. Implemented offline-first ordering with automatic sync on reconnect, keeping the platform usable during live trading events with unreliable connectivity. Built Excel import/export for bulk product uploads and real-time dashboards for stock, warehouse, and order management.",
    tools: ["React", "NestJS", "Prisma", "PostgreSQL"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://woobia.com/",
    image: ayla,
  },
  {
    id: 2,
    name: "Barbershop Reservation & Management Platform",
    description:
      "Built a booking and business-management platform serving 600+ active users across client, admin, and worker-facing apps. Implemented live appointment visibility and real-time updates via WebSockets, plus push notifications for booking events. Built a dedicated dashboard for owners to track revenue and individual worker earnings.",
    tools: ["React Native", "Expo", "NestJS", "WebSockets", "PostgreSQL"],
    role: "Full Stack Developer",
    code: "",
    demo:
      "https://apps.apple.com/tn/app/%D9%86%D8%AD%D8%AA%D9%87-%D8%AD%D8%AC%D9%88%D8%B2%D8%A7%D8%AA/id6503607747",
    image: travel,
  },
  {
    id: 3,
    name: "Internal CRM & Project Management Platform",
    description:
      "Built a CRM covering project tracking, billing, and staff attendance, now sold to external clients in addition to internal use. Simplified financial tracking and attendance-based work monitoring for client teams, reducing manual admin overhead. Added an AI-assisted chat feature and a dynamic invoice/quotation system with PDF generation and email integration.",
    tools: [
      "React",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "WebSockets",
      "AI Integration",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://hb-lawyer.com/",
    image: crefin,
  },
  {
    id: 4,
    name: "AI Social Media Manager",
    description:
      "AI platform that uses OCR and an LLM-powered ideation module to generate video titles, descriptions, and posting schedules, then cross-posts to YouTube, Facebook, Instagram, and X via OAuth2.",
    tools: ["OCR", "LLM Integration", "OAuth2", "Node.js"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: realEstate,
  },
  {
    id: 5,
    name: "University SAML SSO",
    description:
      "Implemented SAML single sign-on and IP-range-based auto-login for campus network authentication.",
    tools: ["SAML", "SSO", "Node.js"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: ayla,
  },
  {
    id: 6,
    name: "Business Portfolio Platform",
    description:
      "Built an NLP-powered chat assistant for client consultation scheduling.",
    tools: ["NLP", "React", "Node.js"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 7,
    name: "Hotel Photography Desktop App",
    description:
      "Built a cross-platform desktop app with Electron featuring face detection for automatic photo grouping and invoice generation.",
    tools: ["Electron", "React", "NestJS", "Face Detection"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
