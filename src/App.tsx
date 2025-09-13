import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AnimatedCursor from "./components/AnimatedCursor";
import BackgroundName from "./components/BackgroundName";

function App() {
  return (
    <div className="bg-black min-h-screen min-w-screen max-w-screen text-white overflow-x-hidden">
      <BackgroundName/>
      <AnimatedCursor/>
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
