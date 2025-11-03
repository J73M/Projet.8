import React, { useState } from "react";
import "./collapse.css";
import collapseIcon from "../../assets/collapse.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-box">
      <div className="collapse-title" onClick={toggleCollapse}>
        <span>{title}</span>
        <img
          src={collapseIcon}
          alt="Icône d'ouverture"
          className={`collapse-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      <div
        className={`collapse-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? "500px" : "0",
        }}
      >
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
