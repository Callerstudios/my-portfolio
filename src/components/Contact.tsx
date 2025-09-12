const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
      <p className="text-gray-300 mb-6">
        Say hello at <span className="text-lime-400">your@email.com</span>
      </p>
      <div className="flex gap-4 mb-8">
        <a href="https://linkedin.com" className="text-lime-400">
          LinkedIn
        </a>
        <a href="https://github.com" className="text-lime-400">
          GitHub
        </a>
        <a href="mailto:your@email.com" className="text-lime-400">
          Email
        </a>
      </div>
      <form className="space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full p-3 rounded bg-gray-800 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-lime-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-lime-500 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
