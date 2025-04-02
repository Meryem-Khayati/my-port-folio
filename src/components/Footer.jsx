import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyPhoneNumber = () => {
    const phoneNumber = "+212 689-708572";

    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch(() => {
          alert("Erreur lors de la copie du numéro.");
        });
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = phoneNumber;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        alert("Erreur lors de la copie du numéro.");
      }
      document.body.removeChild(tempInput);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://github.com/Meryem-Khayati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/meryem-khayati%F0%9F%87%B5%F0%9F%87%B8-0489b8271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:meryemkhayati91@gmail.com" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
          <button onClick={copyPhoneNumber} aria-label="Phone" className="phone-button">
            <FaPhoneAlt size={24} />
            {isCopied && <span className="copy-message">Copied!</span>}
          </button>
        </div>

        <div className="footer-text">
          <p>&copy; Meryem Khayati {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;