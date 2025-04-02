import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Spline from '@splinetool/react-spline';
import { FiSend } from "react-icons/fi"; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [hover, setHover] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8prqp5n", 
        "template_kf165uh",
        {
          user_email: formData.email,
          message: formData.message,
        },
        "UAOZGnnAWi7umaC_K" 
      )
      .then(
        () => {
          setStatus("Message envoyé !");
          setFormData({ email: "", message: "" });
        },
        (error) => {
          setStatus("Erreur lors de l'envoi.");
          console.error("Erreur:", error);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Section du formulaire */}
        <div className="contact-box">
          <h2>Contact me</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Your message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button 
              type="submit" 
              className={`download-btn  ${hover ? "hovered" : ""}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? <FiSend size={24} /> : "Submit"}
            </button>
          </form>

          {status && <p className="contact-message">{status}</p>}
        </div>

        {/* Section de l'image */}
        <div className="contact-image">
          <Spline scene="https://prod.spline.design/Oahm6pLrXfaV7iY5/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;