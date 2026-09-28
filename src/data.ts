import cobuildImg from "./assets/cobuild.png";
import postframeImg from "./assets/postframe.png";
import cvbuilderImg from "./assets/cvbuilder.png";
import playpalImg from "./assets/playpal.png";
import restaurantImg from "./assets/restaurant.png";

export const profile = {
  name: "Busari Roqeeb",
  role: "Full-stack Software Engineer",
  tagline:
    "I build polished web applications and reliable backend systems, from React interfaces to Node.js and ASP.NET Core APIs.",
  about:
    "I'm a full-stack software engineer who enjoys turning ideas into products people can actually use. I work across React, TypeScript, Node.js, Express, ASP.NET Core, and SQL databases. I care about clean architecture, maintainable code, reliable APIs, and building products that hold up beyond the initial prototype.",
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
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "CoBuild",
    description:
      "A collaborative learning platform with real-world users, combining a React frontend with Node.js, Express, and Firestore backend services.",
    image: cobuildImg,
    year: "2025",
    tags: ["React", "TypeScript", "Node.js", "Express", "Firestore"],
    demo: "https://cobuild.cv/",
  },
  {
    title: "Postframe",
    description:
      "A browser-based tool for composing technical content, social posts, quotes, and threads into shareable visual formats.",
    image: postframeImg,
    year: "2026",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demo: "https://postframes.vercel.app/",
    github: "https://github.com/Callerstudios/postframe",
  },
  {
    title: "Restaurant Ordering API",
    description:
      "A REST API for restaurant ordering with JWT authentication, role-based authorization, relational data modeling, and transaction-safe order processing.",
    year: "2026",
    image: restaurantImg,
    tags: ["Node.js", "Express", "TypeScript", "MySQL"],
    demo: "https://restaurant-ordering-api-uav0.onrender.com/docs/",
    github: "https://github.com/Callerstudios/restaurant-ordering-api",
  },
  {
    title: "Developer Habit Tracker",
    description:
      "A REST API for tracking developer habits with JWT authentication, HATEOAS, pagination, filtering, validation, and PostgreSQL persistence.",
    year: "2026",
    tags: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL"],
    github: "https://github.com/Callerstudios/DevHabit",
  },
  {
    title: "CV Builder",
    description:
      "A web application for creating professional CVs with customizable templates and persistent application data.",
    image: cvbuilderImg,
    year: "2024",
    tags: ["React", "Firebase", "Express"],
    demo: "https://simple-resume-maker.vercel.app/",
    github: "https://github.com/Callerstudios/resume-maker",
  },
  {
    title: "Mobile Game API",
    description:
      "A RESTful API for game and player management with JWT authentication, CRUD operations, pagination, filtering, sorting, and OpenAPI documentation.",
    year: "2026",
    tags: ["C#", "ASP.NET Core", "EF Core", "SQLite"],
    github: "https://github.com/Callerstudios/game-api",
  },
  {
    title: "PlayPal",
    description:
      "A gaming platform where users play, earn coins and spend them in an in-game store.",
    image: playpalImg,
    year: "2024",
    tags: ["React", "Firebase", "Game Dev"],
    demo: "https://playpal-games.vercel.app/",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue",
      "Redux",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "Entity Framework Core",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Firestore"],
  },
  {
    title: "Engineering",
    items: [
      "JWT Authentication",
      "RBAC",
      "API Design",
      "Transactions",
      "Validation",
      "OpenAPI",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "Render"],
  },
];

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "Codeware Nigeria",
    period: "Jul 2024 – Dec 2024",
    description:
      "Built web applications and REST APIs using React, Vue.js, TypeScript, Node.js, and Express.js. Developed reusable components, implemented application features, and collaborated with developers to test and debug applications.",
  },
];
