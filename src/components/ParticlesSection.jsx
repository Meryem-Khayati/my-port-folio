import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesSection = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = useCallback(async (container) => {
    if (!container) return; 

    container.interactivity.element.addEventListener("click", (event) => {
      if (!container.particles || !container.particles.array) return; 

      container.particles.array.forEach((particle) => {
        const dx = event.clientX - particle.position.x;
        const dy = event.clientY - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          particle.size.value = 10; 
          setTimeout(() => {
            particle.size.value = 3; 
          }, 500);
        }
      });
    });
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 75, density: { enable: true, value_area: 800 } },
            color: { value: "#8B5DFF" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "none", out_mode: "out" },
            links: { enable: true, distance: 150, color: "#8B5DFF", opacity: 0.4, width: 1 },
          },
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 1 },
              grab: { distance: 200, line_linked: { opacity: 0.5 } },
            },
          },
        }}
      />
      
    </div>
  );
};

export default ParticlesSection;
