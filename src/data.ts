// Keep your existing image imports here; adjust the paths to match your assets folder.
import cobuildImg from "./assets/cobuild.png";
import cvbuilderImg from "./assets/cvbuilder.png";
import playpalImg from "./assets/playpal.png";
import cryptlyImg from "./assets/cryptly.png";

export const profile = {
  name: "Busari Roqeeb",
  role: "Full-stack & Game Developer",
  tagline:
    "I build fast, polished web apps and games, from React interfaces to Node and Firebase backends to Unity gameplay.",
  about:
    "I'm a full-stack developer who enjoys turning ideas into products people actually use. I work across React, TypeScript, Node.js and Firebase on the web, and build games in Unity. I care about clean architecture, smooth interaction and shipping work that holds up in production.",
  email: "busariroqeeb16@gmail.com",
  github: "https://github.com/Callerstudios",
  resume: "/resume.pdf",
  since: "2022",
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  year: string;
  tags: string[];
  demo: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Co Build",
    description:
      "A collaborative learning platform with rooms, modules and interactive dashboards.",
    image: cobuildImg,
    year: "2025",
    tags: ["React", "TypeScript", "Redux", "CSS"],
    demo: "https://co-build-mu.vercel.app/",
  },
  {
    title: "3DSS",
    description: "A character swinging animation built with React and CSS.",
    year: "2025",
    tags: ["React", "CSS", "Animation"],
    demo: "https://3dss.vercel.app/",
    github: "https://github.com/Callerstudios/3dss",
  },
  {
    title: "CV Builder",
    description:
      "A resume builder that generates professional CVs in minutes with custom templates.",
    image: cvbuilderImg,
    year: "2024",
    tags: ["React", "Firebase", "Express"],
    demo: "https://resume-maker-rw61.vercel.app/",
    github: "https://github.com/Callerstudios/resume-maker",
  },
  {
    title: "PlayPal",
    description:
      "A gaming platform where users play, earn coins and spend them in an in-game store.",
    image: playpalImg,
    year: "2024",
    tags: ["React", "Firebase", "Game Dev"],
    demo: "https://games-lab-zeta.vercel.app/",
  },
  {
    title: "Cryptly",
    description:
      "An interactive introduction to encryption with hands-on tools, from Caesar ciphers to modern cryptography.",
    image: cryptlyImg,
    year: "2023",
    tags: ["React", "TypeScript", "Education"],
    demo: "https://cryptly-snowy.vercel.app/",
    github: "https://github.com/Callerstudios/my-encryption-app",
  },
];

export const skillGroups = [
  { title: "Frontend", items: ["React", "TypeScript", "Vue", "Redux", "TailwindCSS", "HTML & CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Firebase"] },
  { title: "Game Dev", items: ["Unity", "C#", "Multiplayer"] },
  { title: "Tools", items: ["Git", "GitHub", "Vercel"] },
];

export const experiences = [
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "Jan 2022 – Present",
    description:
      "Design and build responsive websites and web applications for clients, from first sketch to deployment.",
  },
  {
    role: "Frontend Intern",
    company: "Tech Company", // TODO: replace with the real company name
    period: "Jul 2024 – Dec 2024",
    description:
      "Built reusable UI components and worked alongside backend developers to ship features.",
  },
];
