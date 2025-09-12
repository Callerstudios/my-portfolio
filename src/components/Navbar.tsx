import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Hamburger & Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-8 border-b border-gray-700 bg-black/80 backdrop-blur-md z-50">
      {/* Logo / Name */}
      <h1 className="text-xl font-bold text-white">Busari Roqeeb</h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 text-gray-300">
        <a href="#projects" className="hover:text-lime-400">
          Work
        </a>
        <a href="#about" className="hover:text-lime-400">
          About
        </a>
        <a href="#contact" className="hover:text-lime-400">
          Contact
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-300 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center gap-6 py-6 border-b border-gray-700 md:hidden"
          >
            <a
              href="#projects"
              className="text-gray-300 hover:text-lime-400"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-lime-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-lime-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
