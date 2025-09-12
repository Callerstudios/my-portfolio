import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-black text-white text-center"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Let&apos;s Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 mb-6"
      >
        Say hello at{" "}
        <a
          href="mailto:your@email.com"
          className="text-lime-400 hover:underline"
        >
          your@email.com
        </a>
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 mb-10"
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 hover:text-lime-300 transition text-lg font-medium"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 hover:text-lime-300 transition text-lg font-medium"
        >
          GitHub
        </a>
        <a
          href="mailto:your@email.com"
          className="text-lime-400 hover:text-lime-300 transition text-lg font-medium"
        >
          Email
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-4 max-w-lg mx-auto text-left"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition w-full"
        >
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
