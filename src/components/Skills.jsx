import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import a from "../assets/images/technologies/Html.png";
import b from "../assets/images/technologies/Css.png";
import c from "../assets/images/technologies/Javascript.svg";
import d from "../assets/images/technologies/React.svg";
import e from "../assets/images/technologies/Tailwind.png";
import f from "../assets/images/technologies/wordpress.png";
import g from "../assets/images/technologies/mysqll.png"; // Vérifie le nom du fichier
import h from "../assets/images/technologies/uml.png";
import i from "../assets/images/technologies/java-icon.png";
import j from "../assets/images/technologies/springboot.png";

const skills = [
  { name: "HTML", icon: a, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: b, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: c, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "ReactJS", icon: d, link: "https://react.dev/" },
  { name: "Tailwind CSS", icon: e, link: "https://tailwindcss.com/docs/" },
  { name: "WordPress", icon: f, link: "https://developer.wordpress.org/" },
  { name: "MySQL", icon: g, link: "https://dev.mysql.com/doc/" },
  { name: "UML", icon: h, link: "https://www.uml-diagrams.org/" },
  { name: "Java", icon: i, link: "https://docs.oracle.com/en/java/" },
  { name: "Spring Boot", icon: j, link: "https://docs.spring.io/spring-boot/docs/current/reference/html/" }
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="global-skills" ref={ref}>
      <h2>My Skills</h2>
      <motion.div 
        className="skills-container"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.a 
            key={index} 
            href={skill.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="skill-item"
            variants={itemVariants}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
