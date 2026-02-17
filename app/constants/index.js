//ici j'optepour cette option pour ne pas créer une base de donnée ou utilisé sanity.io

import {
  backend,
  burpsuite,
  claude,
  creator,
  css,
  docker,
  expressjs,
  git,
  graphql,
  html,
  javascript,
  kalilinux,
  langchain,
  meta,
  metasploit,
  mobile,
  mongodb,
  motion,
  nextjs,
  nmap,
  nodejs,
  openai,
  owaspzap,
  postgresql,
  prisma,
  promptengineer,
  reactjs,
  redux,
  restapi,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  typescript,
  vercelaisdk,
  web,
  wireshark,
  zustand,
} from "../assets";

import mania from "../assets/mania.png";
import sopekoko from "../assets/sopekoko.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React JS", icon: reactjs },
      { name: "Next.js", icon: nextjs },
      { name: "Zustand", icon: zustand },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Framer Motion", icon: motion },
      { name: "Three JS", icon: threejs },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node JS", icon: nodejs },
      { name: "Express", icon: expressjs },
      { name: "MongoDB", icon: mongodb },
      { name: "PostgreSQL", icon: postgresql },
      { name: "Prisma", icon: prisma },
      { name: "REST API", icon: restapi },
      { name: "GraphQL", icon: graphql },
      { name: "Docker", icon: docker },
      { name: "Git", icon: git },
    ],
  },
  {
    title: "Intelligence Artificielle",
    technologies: [
      { name: "Vercel AI SDK", icon: vercelaisdk },
      { name: "OpenAI API", icon: openai },
      { name: "LangChain", icon: langchain },
      { name: "Claude API", icon: claude },
      { name: "RAG", icon: null },
      { name: "Prompt Engineering", icon: promptengineer },
    ],
  },
  {
    title: "Cybersécurité",
    technologies: [
      { name: "Burp Suite", icon: burpsuite },
      { name: "Wireshark", icon: wireshark },
      { name: "Nmap", icon: nmap },
      { name: "Metasploit", icon: metasploit },
      { name: "OWASP ZAP", icon: owaspzap },
      { name: "Kali Linux", icon: kalilinux },
    ],
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Drink",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Vestala",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Aircall",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Bobo",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hicham proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hicham does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hicham optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AnimeQuizz",
    description:
      "Quiz musical pour la Société Générale - Intégration d'un quiz musical avec Next.js et Tailwind CSS pour optimiser la cohésion d'équipe lors des after works",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "React-Query",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/animequizz.jpg",
    source_code_link: "https://github.com/HB78/Anime-quizz",
  },
  {
    name: "LA KIKA",
    description:
      "SITE DE STREAMING - Clone fonctionnel de Netflix pour regarder des films, des séries et les match de football et ce gratuitement.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/lakika.jpg",
    source_code_link: "https://github.com/HB78/La-kika-Streaming-video",
  },
  {
    name: "PHANTOM CHAT",
    description:
      "PHANTOM CHAT - chat post-quantique crypté - Création d'une application de messagerie sécurisée avec chiffrement de bout en bout pour garantir la confidentialité des conversations.",
    tags: [
      {
        name: "Elysia",
        color: "blue-text-gradient",
      },
      {
        name: "Kyber",
        color: "green-text-gradient",
      },
      {
        name: "upstash",
        color: "pink-text-gradient",
      },
      {
        name: "gsap",
        color: "orange-text-gradient",
      },
    ],
    image: "/images/phantom.png",
    source_code_link: "https://github.com/HB78/phantom_chat",
  },
  {
    name: "LASTMODEL",
    description:
      "SITE DE RENCONTRE - Création d'un site de rencontre avec algorithme de matching pour connecter les utilisateurs en fonction de leurs intérêts et préférences.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "BetterAuth",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "blue-text-gradient",
      },
      {
        name: "NUQS",
        color: "orange-text-gradient",
      },
      {
        name: "Arcjet",
        color: "green-text-gradient",
      },
      {
        name: "posthog",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/lastmodel.png",
    source_code_link: "https://github.com/HB78/Lastmodel.net",
  },
  {
    name: "SO-PECKOKO",
    description:
      "SITE GASTRONOMIQUE - Création d'une API REST avec NODEJS EXPRESS et MONGODB.",
    tags: [
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
    ],
    image: sopekoko,
    source_code_link: "https://github.com/HB78/BoubttaHicham_6_20052022",
  },
  {
    name: "GROUPOMANIA",
    description:
      "SPECIALISTE DE LA VENTE - Création d'un réseau social d'entreprise avec MySQL et ReactJS",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: mania,
    source_code_link: "https://github.com/HB78/BoubttaHicham_7_09072022",
  },
];

export {
  experiences,
  projects,
  services,
  techCategories,
  technologies,
  testimonials,
};
