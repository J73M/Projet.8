import React, { useState } from "react"; // J'importe React et useState pour gérer l'état du carousel
import "./carousel.css"; // J'importe le style du carousel

const Carousel = ({ pictures }) => {
  const pics = pictures || []; // Je récupère les images ou un tableau vide
  const [currentIndex, setCurrentIndex] = useState(0); // Je garde l'index de l'image affichée
  const total = pics.length; // Nombre total d'images

  if (total === 0) return null; // Si pas d'image, je n'affiche rien

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1); // Image précédente, boucle au début si nécessaire
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1); // Image suivante, boucle à la fin si nécessaire
  };

  return (
    <div className="carousel">
      <img
        src={pics[currentIndex]} // J'affiche l'image actuelle
        alt={`Slide ${currentIndex + 1}`} // Texte pour l'accessibilité
        className="carousel-image"
      />

      {total > 1 && ( // Si plus d'une image, j'affiche les boutons et le compteur
        <>
          <button className="prev" onClick={prevSlide}>❮</button>
          <button className="next" onClick={nextSlide}>❯</button>
          <div className="carousel-counter">{currentIndex + 1}/{total}</div>
        </>
      )}
    </div>
  );
};

export default Carousel; // Je peux utiliser ce composant ailleurs
