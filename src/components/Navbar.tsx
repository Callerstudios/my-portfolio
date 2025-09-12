

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-8 border-b border-gray-700 bg-black/80 backdrop-blur-md z-50">
      <h1 className="text-xl font-bold text-white">Busari Roqeeb</h1>
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
    </header>
  );
};

export default Navbar;

