import { motion } from "framer-motion";

export type Project = {
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
    <section id="projects" className="py-20 px-6 md:px-12 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-20">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={proj.image}
              alt={proj.title}
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />

            {/* Project Content */}
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Year:</strong> {proj.year} &nbsp; | &nbsp;
                <strong>Client:</strong> {proj.client}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={proj.demo}
                  className="text-lime-400 font-medium hover:underline"
                >
                  🔗 View Project
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={proj.github}
                  className="text-lime-400 font-medium hover:underline"
                >
                  💻 GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
