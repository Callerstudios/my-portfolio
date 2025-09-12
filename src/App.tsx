import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen min-w-screen text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
