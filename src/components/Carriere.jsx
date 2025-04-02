import React, { useEffect } from "react";
import { Briefcase, GraduationCap } from "lucide-react"; // Import des icônes

const timelineData = [
  { id: 1, title: "Bachelor’s Degree in Physical Sciences – French Option (2021-2022)", description: "El Amria High School, El Kelâa Des Sraghna", side: "left", icon: <GraduationCap size={24} /> },
  { id: 2, title: "Diploma of University Technology (DUT) in Computer Engineering (2023-2024)", description: "Higher School of Technology (EST), Fkih Ben Salah", side: "right", icon: <GraduationCap size={24} /> },
  { id: 3, title: "Internship at Sultan Moulay Slimane University, Beni Mellal", description: "Website development using WordPress", side: "left", icon: <Briefcase size={24} /> },
  { id: 4, title: "Internship at the Oum Er-Rbia Hydraulic Basin Agency, Beni Mellal", description: "Development of a Web Application for Email Management with Spring Boot and React Js", side: "left", icon: <Briefcase size={24} /> },
  { id: 5, title: "First-Year Engineer's Degree in Computer Engineering and AI (2024-2025)", description: "National School of Applied Sciences (ENSA), Safi", side: "right", icon: <GraduationCap size={24} /> },
];

const Carriere = () => {
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    const items = document.querySelectorAll(".timeline-item .timeline-content");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item)); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div className="global-timeline">
      <h2>My Education</h2>
      <div className="timeline">
        {timelineData.map((item) => (
          <div key={item.id} className={`timeline-item ${item.side}`}>
            <div className="timeline-icon-container">
              <div className="timeline-icon">{item.icon}</div>
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </div>
  );
};

export default Carriere;
