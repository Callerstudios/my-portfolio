
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
];

const Skills = () => {
  return (
    <section className="py-20 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">My Capabilities</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
