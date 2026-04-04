import React, { useEffect } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Second-Year Engineer's Degree in Computer Engineering and AI (2024–2026)",
    description: "National School of Applied Sciences (ENSA), Safi",
    side: "right",
    icon: <GraduationCap size={20} />,
    type: "education",
  },
  {
    id: 2,
    title: "Internship at Rouandi, Marrakech",
    description: "Development of a web application for license management using Spring Boot and Angular",
    side: "left",
    icon: <Briefcase size={20} />,
    type: "internship",
  },
  {
    id: 3,
    title: "Internship at the Oum Er-Rbia Hydraulic Basin Agency, Beni Mellal",
    description: "Development of a Web Application for Email Management with Spring Boot and React JS",
    side: "left",
    icon: <Briefcase size={20} />,
    type: "internship",
  },
  {
    id: 3,
    title: "Internship at Sultan Moulay Slimane University, Beni Mellal",
    description: "Website development using WordPress",
    side: "right",
    icon: <Briefcase size={20} />,
    type: "internship",
  },
  {
    id: 4,
    title: "Diploma of University Technology (DUT) in Computer Engineering (2023–2024)",
    description: "Higher School of Technology (EST), Fkih Ben Salah",
    side: "left",
    icon: <GraduationCap size={20} />,
    type: "education",
  },
  {
    id: 5,
    title: "Bachelor's Degree in Physical Sciences – French Option (2021–2022)",
    description: "El Amria High School, El Kelâa Des Sraghna",
    side: "right",
    icon: <GraduationCap size={20} />,
    type: "education",
  },
];

const Carriere = () => {
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.4,
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
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="global-timeline">
      <h2>My Career</h2>
      <div className="timeline">
        {timelineData.map((item) => (
          <div key={item.id} className={`timeline-item ${item.side}`}>
            <div className="timeline-icon-container">
              <div className="timeline-icon">{item.icon}</div>
            </div>
            <div className="timeline-content">
              <span className={`timeline-badge ${item.type}`}>
                {item.type === "education" ? "Education" : "Internship"}
              </span>
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