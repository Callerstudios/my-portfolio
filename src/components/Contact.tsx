import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      alert(import.meta.env.VITE_EMAILJS_SERVICE_ID!);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false); // always stop loading
    }
  };


  return (
    <motion.form
    id="contact"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="space-y-4 max-w-lg mx-auto text-left w-full p-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-lime-400 outline-none transition"
      />

      <motion.button
        type="submit"
        whileHover={{ scale: loading ? 1 : 1.05 }}
        whileTap={{ scale: loading ? 1 : 0.95 }}
        disabled={loading}
        className={`px-6 py-3 rounded-lg font-semibold w-full transition 
          ${
            loading
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-lime-400 text-black hover:bg-lime-500"
          }
        `}
      >
        {loading ? "Sending..." : "Submit"}
      </motion.button>

      {status && (
        <p className="mt-3 text-center text-sm text-gray-300">{status}</p>
      )}
    </motion.form>
  );
};

export default ContactForm;
