type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  client: string;
  tags: string[];
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Promotional Landing Page",
    description: "A landing page for a favorite show with responsive design.",
    image: "/project1.png",
    year: "2023",
    client: "Personal",
    tags: ["React", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Site for World News",
    description:
      "Modern blog site with multiple categories and responsive layout.",
    image: "/project2.png",
    year: "2022",
    client: "World News",
    tags: ["Vue", "CSS"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="space-y-12">
        {projects.map((proj, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <p className="text-sm text-gray-400">
                <strong>Year:</strong> {proj.year} &nbsp; | &nbsp;
                <strong>Client:</strong> {proj.client}
              </p>
              <div className="flex gap-2 mt-3">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a href={proj.demo} className="text-lime-400 hover:underline">
                  View Project
                </a>
                <a href={proj.github} className="text-lime-400 hover:underline">
                  See on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
