import { useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile, projects, skillGroups, experiences, type Project } from "./data";
import Contact from "./Contact";
import myPhoto from "./assets/profile-photo.jpeg";

const display = "font-['Space_Grotesk',sans-serif]";
const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Section = ({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
    <Reveal>
      <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">{eyebrow}</p>
      <h2 className={`${display} mt-3 text-3xl font-semibold tracking-tight md:text-4xl`}>{title}</h2>
    </Reveal>
    <div className="mt-12">{children}</div>
  </section>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className={`${display} text-lg font-semibold`}>
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a href={profile.resume} className="rounded-full border border-white/15 px-4 py-1.5 text-white transition hover:border-emerald-400 hover:text-emerald-400">
            Resume
          </a>
        </nav>
        <button className="text-zinc-300 md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-5 border-t border-white/10 bg-[#09090b] px-6 py-6 md:hidden"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-300">
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pt-24 md:flex-row md:justify-between">
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for new projects
        </span>
        <h1 className={`${display} mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl`}>
          {profile.name}
        </h1>
        <p className="mt-3 text-xl text-emerald-400">{profile.role}</p>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">{profile.tagline}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
          <a href="#projects" className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300">
            View my work
          </a>
          <a href="#contact" className="rounded-lg border border-white/15 px-6 py-3 font-semibold transition hover:border-emerald-400 hover:text-emerald-400">
            Get in touch
          </a>
        </div>
        <dl className="mt-12 flex justify-center gap-10 md:justify-start">
          {[
            [`${projects.length}`, "Projects"],
            [profile.since, "Building since"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className={`${display} text-2xl font-semibold`}>{v}</dt>
              <dd className="text-sm text-zinc-500">{l}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
          <img src={myPhoto} alt={profile.name} className="h-72 w-72 rounded-2xl object-cover md:h-96 md:w-80" />
        </div>
      </motion.div>
    </div>
  </section>
);

const ProjectCard = ({ p, i }: { p: Project; i: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-emerald-400/40"
  >
    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="block aspect-video overflow-hidden bg-zinc-900">
      {p.image ? (
        <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      ) : (
        <div className={`${display} flex h-full items-center justify-center bg-gradient-to-br from-emerald-500/20 to-zinc-900 text-5xl font-semibold text-emerald-300/80`}>
          {p.title}
        </div>
      )}
    </a>
    <div className="p-6">
      <div className="flex items-baseline justify-between">
        <h3 className={`${display} text-xl font-semibold`}>{p.title}</h3>
        <span className="text-sm text-zinc-500">{p.year}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-5 text-sm font-medium">
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
          Live demo <ArrowUpRight size={16} />
        </a>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
            Source <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const About = () => (
  <Section id="about" eyebrow="About" title="Building things end to end">
    <div className="grid gap-12 md:grid-cols-2">
      <Reveal>
        <p className="text-lg leading-relaxed text-zinc-400">{profile.about}</p>
        <a href={profile.resume} className="mt-8 inline-flex items-center gap-1 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-emerald-400 hover:text-emerald-400">
          Download resume <ArrowUpRight size={16} />
        </a>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-sm font-medium text-emerald-400">{g.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've worked">
    <ol className="relative ml-2 space-y-10 border-l border-white/10 pl-8">
      {experiences.map((e, i) => (
        <li key={e.role} className="relative">
          <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-[#09090b]" />
          <Reveal delay={i * 0.1}>
            <h3 className={`${display} text-xl font-semibold`}>{e.role}</h3>
            <p className="mt-1 text-sm text-zinc-500">
              {e.company} · {e.period}
            </p>
            <p className="mt-3 max-w-2xl text-zinc-400">{e.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen min-w-screen overflow-x-hidden bg-[#09090b] font-['Inter',sans-serif] text-zinc-100 antialiased selection:bg-emerald-400/30">
        <Navbar />
        <main>
          <Hero />
          <Section id="projects" eyebrow="Selected work" title="Projects">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} p={p} i={i} />
              ))}
            </div>
          </Section>
          <About />
          <Experience />
          <Contact />
        </main>
        <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.
        </footer>
      </div>
    </MotionConfig>
  );
}
