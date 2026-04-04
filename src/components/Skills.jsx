import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import a from "../assets/images/technologies/Html.png";
import b from "../assets/images/technologies/Css.png";
import c from "../assets/images/technologies/Javascript.svg";
import d from "../assets/images/technologies/React.svg";
import e from "../assets/images/technologies/Tailwind.png";
import f from "../assets/images/technologies/wordpress.png";
import g from "../assets/images/technologies/mysqll.png";
import h from "../assets/images/technologies/uml.png";
import i from "../assets/images/technologies/java-icon.png";
import j from "../assets/images/technologies/springboot.png";

// Angular SVG inline since it may not be in assets yet
const AngularIcon = () => (
  <svg width="38" height="38" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
    <path fill="#DD0031" d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"/>
    <path fill="#C3002F" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z"/>
    <path fill="#fff" d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z"/>
  </svg>
);

const skills = [
  { name: "HTML", icon: a, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: b, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: c, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "ReactJS", icon: d, link: "https://react.dev/" },
  { name: "Angular", icon: null, link: "https://angular.io/docs", isComponent: true },
  { name: "Tailwind CSS", icon: e, link: "https://tailwindcss.com/docs/" },
  { name: "WordPress", icon: f, link: "https://developer.wordpress.org/" },
  { name: "MySQL", icon: g, link: "https://dev.mysql.com/doc/" },
  { name: "UML", icon: h, link: "https://www.uml-diagrams.org/" },
  { name: "Java", icon: i, link: "https://docs.oracle.com/en/java/" },
  { name: "Spring Boot", icon: j, link: "https://docs.spring.io/spring-boot/docs/current/reference/html/" },
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
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
              staggerChildren: 0.08,
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
            whileHover={{ y: -4 }}
          >
            {skill.isComponent ? (
              <AngularIcon />
            ) : (
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            )}
            <span className="skill-name">{skill.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;