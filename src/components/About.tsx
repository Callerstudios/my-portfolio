// src/components/About.tsx
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section
      className="px-8 py-24 bg-gray-950 flex flex-col md:flex-row items-center gap-12"
      id="about"
    >
      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/profile.jpg" // Replace with your actual profile image
          alt="Profile"
          className="w-64 h-64 rounded-2xl object-cover border-4 border-green-500 shadow-lg"
          animate={{
            y: [0, -10, 0], // floating animation
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Text Content */}
      <div className="max-w-2xl">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-green-500">About Me</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a passionate{" "}
            <span className="text-green-400">Fullstack Developer</span>
            with experience in building responsive and scalable web
            applications. I love working with modern technologies like React,
            Vue, Node.js, and TypeScript to create beautiful, functional, and
            impactful digital solutions.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <a
            href="/resume.pdf"
            className="inline-block mt-2 px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
