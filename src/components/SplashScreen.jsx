import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const SplashScreen = ({ onFinish }) => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 1000); // Affiche "Welcome" après 1s
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000); // Fin de l'animation après 9s
  }, [onFinish]);

  return (
    <main style={{ textAlign: "center", color: "white", position: "relative", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 className="typewriter" style={{ fontSize: "2rem", position: "absolute", top: "20px", fontFamily: "Roboto, sans-serif" }}>Hello</h1>
      <div style={{ position: "relative", filter: "brightness(1.5)" }}>
        <Spline scene="https://prod.spline.design/wckPCWfzSKJsGpIG/scene.splinecode" />
      </div>
      {showWelcome && (
        <p
          style={{
            position: "absolute",
            bottom: "20px",
            fontSize: "2rem",
          }}
          className="typewriter"
        >
          Welcome to My Portfolio 
        </p>
      )}
    </main>
  );
};

export default SplashScreen;