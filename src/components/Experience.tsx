import { motion } from "framer-motion";

const experiences = [
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "Nov 2021 – Present",
    description:
      "Worked on client projects building responsive websites and applications.",
  },
  {
    role: "Frontend Intern",
    company: "Tech Company",
    period: "Sep 2020 – Nov 2021",
    description:
      "Built UI components and collaborated with backend developers.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 bg-black text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        My Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-gray-700 pl-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mb-12 relative"
          >
            {/* Dot */}
            <span className="absolute -left-4 -top-2 w-5 h-5 rounded-full bg-green-500 border-4 border-black"></span>

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {exp.role}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-2">
              {exp.company} • {exp.period}
            </p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
