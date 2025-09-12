// src/components/Hero.tsx
import { motion } from "framer-motion";
import myPhoto from "../assets/photo.jpg"

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-8 gap-12"
      id="hero"
    > 
      {/* Text Section */}
      <div className="flex-1">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="text-green-500">Busari Roqeeb</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A passionate{" "}
          <span className="text-green-400">Fullstack Developer </span>
          crafting modern, scalable, and user-friendly web experiences.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-black transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Profile Image Section */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src={myPhoto} // replace with your actual image
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-green-500 object-cover shadow-lg"
          animate={{
            y: [0, -12, 0], // floating effect
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
