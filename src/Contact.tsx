import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { profile } from "./data";

const field =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20";

const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(serviceId, templateId, form, publicKey);

      setForm(empty);
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">Contact</p>
          <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-semibold tracking-tight md:text-4xl">
            Let's build something together
          </h2>
          <p className="mt-5 max-w-md text-zinc-400">
            Have a project, a role or an idea? Send a message and I'll get back to you soon.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <a href={`mailto:${profile.email}`} className="block text-zinc-200 hover:text-emerald-400">
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block text-zinc-200 hover:text-emerald-400">
              github.com/Callerstudios
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={field} name="name" placeholder="Name" value={form.name} onChange={onChange} required />
            <input className={field} type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
          </div>
          <input className={field} name="subject" placeholder="Subject" value={form.subject} onChange={onChange} required />
          <textarea className={field} name="message" placeholder="Message" rows={5} value={form.message} onChange={onChange} required />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" className="min-h-5 text-center text-sm text-zinc-400">
            {status === "sent" && "Message sent. Thank you!"}
            {status === "error" && "Something went wrong. Please try again or email me directly."}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
