import Lottie from "lottie-react";
import devAnimation from "../animation/dev.json";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = ({ contactRef }) => {
  const lottieRef = useRef();

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const toRotate = ["Meryem Khayati", " a Computing Student", " a Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  // Fonction pour scroller vers la section Contact
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero flex ">
      <div className="left-section">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Hello! I'm 
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="typewriter-container"
        >
          <strong className="typewriter title">{text}</strong>
        </motion.div>

        <p className="sub-title specific">
          Passionate about crafting intuitive, efficient, and modern digital solutions. Constantly learning and innovating to transform ideas into impactful experiences.
        </p>

        <div className="all-icons flex">
          <a 
            href="#" 
            className="contact-button" 
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(contactRef);
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
