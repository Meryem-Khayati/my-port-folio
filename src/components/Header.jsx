import { useEffect, useState } from "react";
import '../App.css';

const Header = ({ aboutMeRef, skillsRef, educationRef, projectsRef, contactRef }) => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex ">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
      </button>
      <div className="logo">
        <div className="firstlogo ">Mery<span className="secondlogo">Em</span></div>
      </div>

      <nav>
        <ul className="flex">
          <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(aboutMeRef); 
            }}>
              About 
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(skillsRef); 
            }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(educationRef); 
            }}>
              Education
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(projectsRef); 
            }}>
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(aboutMeRef); 
            }}>
              About 
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(skillsRef); 
            }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(educationRef); 
            }}>
              Education
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => { 
                event.preventDefault(); 
                scrollToSection(projectsRef); 
            }}>
              Projects
            </a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
