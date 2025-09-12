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
    <section className="py-20 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8">My Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-400">
              {exp.company} • {exp.period}
            </p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
