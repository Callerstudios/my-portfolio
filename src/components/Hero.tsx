const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-8 bg-black text-white">
      <div className="max-w-lg">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-lime-400">YOUR NAME</span>.
        </h2>
        <p className="text-gray-300 mb-6">
          A software developer specialized in building exceptional websites and
          web applications.
        </p>
        <a
          href="#contact"
          className="bg-lime-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-lime-500 transition"
        >
          Connect With Me
        </a>
      </div>
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          src="/profile.jpg" // replace with your photo
          alt="Profile"
          className="w-72 h-72 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
