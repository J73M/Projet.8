import React, { useState } from "react"; // J'importe React et useState pour gérer l'état ouvert/fermé
import "./collapse.css";
import collapseIcon from "../../assets/collapse.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Je garde en état si le collapse est ouvert ou fermé

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Je change l'état quand on clique sur le titre
  };

  return (
    <div className="collapse-box">
      <div className="collapse-title" onClick={toggleCollapse}>
        <span>{title}</span>
        <img
          src={collapseIcon}
          alt="Icône d'ouverture"
          className={`collapse-icon ${isOpen ? "open" : ""}`} // Je tourne l'icône si ouvert
        />
      </div>

      <div
        className={`collapse-content ${isOpen ? "open" : ""}`} // Contenu visible seulement si ouvert
        style={{
          maxHeight: isOpen ? "500px" : "0", // Je gère la hauteur pour l'animation
        }}
      >
        {Array.isArray(content) ? ( // Si le contenu est une liste, je crée un <ul>
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li> // J'affiche chaque élément de la liste
            ))}
          </ul>
        ) : (
          <p>{content}</p> // Sinon j'affiche juste le texte
        )}
      </div>
    </div>
  );
};

export default Collapse; // Je peux utiliser ce composant ailleurs
