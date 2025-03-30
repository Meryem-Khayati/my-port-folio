import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import "./App.css";
import AboutMe from "./components/About";
import ParticlesSection from "./components/ParticlesSection";
import Skills from "./components/Skills";
import Carriere from "./components/Carriere";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header 
        aboutMeRef={aboutMeRef} 
        skillsRef={skillsRef} 
        educationRef={educationRef} 
        projectsRef={projectsRef} 
        contactRef={contactRef} 
      />
      <Hero contactRef={contactRef} />
      
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      
      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={educationRef}>
        <Carriere />
      </div>

      <div ref={projectsRef}>
        <Main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#121212" }} />
      </div>

      <ParticlesSection />

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
