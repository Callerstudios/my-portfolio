import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Node.js",
  "Firebase",
  "TailwindCSS",
  "Git",
  "Redux",
  "Express"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 bg-black text-white text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        My Capabilities
      </motion.h2>

      {/* Skills List */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={item}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 12px rgba(132, 204, 22, 0.8)", // lime glow
            }}
            className="bg-gray-800 text-gray-200 px-5 py-2 rounded-full text-sm md:text-base font-medium transition"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
