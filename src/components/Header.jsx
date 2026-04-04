import { useEffect, useState } from "react";
import '../App.css';

const Header = ({ aboutMeRef, skillsRef, educationRef, projectsRef, contactRef }) => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setshowModal(false);
    }
  };

  return (
    <header
      className="flex"
      style={{
        transition: 'background 0.4s, box-shadow 0.4s',
        background: scrolled ? 'var(--bgHeader)' : 'transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        position: 'sticky',
        top: 0,
        zIndex: 99,
        padding: '0.9rem 2.4rem',
        marginTop: 0,
      }}
    >
      <button
        onClick={() => { setshowModal(true); }}
        className="menu icon-menu flex"
      />

      <div className="logo">
        <div className="firstlogo">Mery<span className="secondlogo">Em</span></div>
      </div>

      <nav>
        <ul className="flex">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutMeRef); }}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(skillsRef); }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(educationRef); }}>
              Education
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(projectsRef); }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button className="icon-close" onClick={() => setshowModal(false)} />
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutMeRef); }}>About</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(skillsRef); }}>Skills</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(educationRef); }}>Education</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(projectsRef); }}>Projects</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;