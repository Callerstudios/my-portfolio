const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="max-w-2xl text-gray-300 mb-6">
        I am a frontend developer passionate about building interactive and
        performant applications. With experience in React, Vue, and backend
        systems, I love turning ideas into real projects that provide value to
        users.
      </p>
      <a
        href="/resume.pdf" // link to your resume
        className="bg-lime-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-lime-500 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;
