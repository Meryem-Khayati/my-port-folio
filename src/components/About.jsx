import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import f from "../assets/images/technologies/CV_MeryemKhayati.pdf"

export default function AboutMe() {
    const [hover, setHover] = useState(false);
    const [fileSize, setFileSize] = useState(null);
    const filePath =f; 

    useEffect(() => {
        fetch(filePath)
            .then(response => response.blob()) // Convertir la réponse en Blob
            .then(blob => {
                console.log("Blob Info:", blob); // Debug: Vérifie la structure du blob
                const sizeInMB = (blob.size / (1024 * 1024)).toFixed(2);
                setFileSize(sizeInMB);
            })
            .catch(error => console.error("Erreur de récupération du fichier :", error));
    }, []);

    return (
        <section className="skill" id="skills">
            
                <motion.div 
                    className="skill-bx wow zoomIn"
                    whileInView={{ opacity: 1, x: 0 }}  
                    initial={{ opacity: 0, x: -100 }}   
                    transition={{ duration: 1, ease: "easeOut" }} 
                    viewport={{ once: false, amount: 0.2 }} 
                >
                    <h2>About Me</h2>

                    <p>
                        I'm a Computer Engineering student passionate about web technologies and AI.<br />
                        I love creating intuitive, efficient, and modern digital experiences. Always <br />
                        learning, building, and exploring new ways to turn ideas <br />into impactful digital solutions. <br />
                    </p>

                    
                    <div 
                        className="download-container" 
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                    >
                        {hover && fileSize && <div className="tooltip">Size: {fileSize} MB</div>}
                        <motion.a 
                            href={filePath} 
                            download
                            className={`download-btn ${hover ? "hovered" : ""}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {hover ? <FiDownload size={24} /> : "Download CV"}
                        </motion.a>
                    </div>
                </motion.div>
            
        </section>
    );
}
