import { useEffect, useState, useRef } from "react";

export const Carousel = ({ images = [], videos = [] }) => {
  const [slide, setSlide] = useState(0);
  const media = [...videos, ...images];

  const nextSlide = () => setSlide((prev) => (prev + 1) % media.length);
  const prevSlide = () => setSlide((prev) => (prev - 1 + media.length) % media.length);
  const goToSlide = (index) => setSlide(index);

  return (
    <div className="carousel-container">
      {/* Flèche gauche */}
      <button className="arrow arrow-left" onClick={prevSlide}>❮</button>

      {/* Carrousel */}
      <div className="carousel">
        {media.map((src, idx) => (
          <div key={idx} className={slide === idx ? "slide active" : "slide"}>
            {src.endsWith(".mp4") ? (
              <video src={src} controls className="video-slide" />
            ) : (
              <img src={src} alt={`Media ${idx}`} className="image-slide" />
            )}
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button className="arrow arrow-right" onClick={nextSlide}>❯</button>

      {/* Indicateurs (dots) */}
      <div className="carousel-indicators">
        {media.map((_, idx) => (
          <button 
            key={idx} 
            className={slide === idx ? "dot active" : "dot"} 
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};
