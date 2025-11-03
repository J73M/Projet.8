import React from "react";
import "./propertyInfo.css";

const PropertyInfo = ({ title, location, tags }) => {
  return (
    <div className="logement-info">
      <h1>{title}</h1>
      <p className="location">{location}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default PropertyInfo;