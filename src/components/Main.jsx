import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import a from "../assets/screenshots/p11.jpg";
import b from "../assets/screenshots/p12.jpg";
import c from "../assets/screenshots/p13.jpg";
import d from "../assets/screenshots/p14.jpg";
import e from "../assets/screenshots/p15.jpg";
import vid from "../assets/videos/AA.mp4"
import img1 from "../assets/screenshots/p21.jpg"
import img2 from "../assets/screenshots/p22.jpg"
import img3 from "../assets/screenshots/p23.jpg"
import img4 from "../assets/screenshots/p24.jpg"
import img5 from "../assets/screenshots/p25.jpg"
import img6 from "../assets/screenshots/p26.jpg"
import i1 from "../assets/screenshots/p31.jpg"
import i2 from "../assets/screenshots/p32.jpg"
import i3 from "../assets/screenshots/p33.jpg"
import i4 from "../assets/screenshots/p34.jpg"
const projects = [
  {
    title: "Web Application for Institution Management:",
    description: "A web application built with React and Spring Boot for managing educational institution data.",
    images: [
      a, b, c, d, e
    ],
    github: "https://github.com/Meryem-Khayati/Web-Application-for-Institution-Management"
  },
  {
    title: "Web Application for Managing Electronic Correspondence",
    description: "A web application built with Spring Boot and React to manage electronic correspondence",
    images: [vid],
    github: "https://github.com/Meryem-Khayati/Web-Application-for-Managing-Electronic-Correspondence-"
  },
  {
    title: "Website for Managing Student Document Requests",
    description: "A website built with WordPress for managing student document requests with the administration.",
    images: [img1,img2,img3,img4,img5,img6],
    github: "https://github.com/Meryem-Khayati/Website-for-Managing-Student-Document-Requests"
  },
  {
    title: "UserCityManager",
    description: "A web application built with JEE for simplified management of user and city data, allowing administrators to add, edit, and delete records efficiently.",
    images: [i1,i2,i3,i4],
    github: "https://github.com/Meryem-Khayati/UserCityManager"
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="text-white p-6 rounded-lg w-full max-w-5xl mx-auto mb-8">
      <h2 className="font-bold text-center mb-14">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border-2 border-indigo-900 p-4 rounded-xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl text-gray-400 font-semibold m-5 text-center">{project.title}</h3>
            <p className="text-xm text-gray-400 text-center">{project.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <button
                className="px-4 py-2 text-purple-400 hover:bg-purple-900 border-2 border-purple-900 p-4 rounded-xl"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentIndex(0);
                }}
              >
                View More
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-950 text-4xl"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md relative">
            <h3 className="text-lg font-semibold text-center">{selectedProject.title}</h3>
            <div className="mt-4 flex justify-center items-center relative">
              <button className="absolute left-0 bg-gray-700 p-2 rounded-full" onClick={prevImage}>
                ◀
              </button>
              <AnimatePresence mode="wait">
                <AnimatePresence mode="wait">
                  {selectedProject.images[currentIndex].endsWith(".mp4") ? (
                    <motion.video
                      key={selectedProject.images[currentIndex]}
                      src={selectedProject.images[currentIndex]}
                      controls
                      className="rounded-lg w-full"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    />
                  ) : (
                    <motion.img
                      key={selectedProject.images[currentIndex]}
                      src={selectedProject.images[currentIndex]}
                      alt="Project"
                      className="rounded-lg w-full"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

              </AnimatePresence>
              <button className="absolute right-0 bg-gray-700 p-2 rounded-full" onClick={nextImage}>
                ▶
              </button>
            </div>
            <button
              className="mt-4 w-full px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
