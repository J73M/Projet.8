import React from "react";
import "./Rating.css";
import starFilled from "../../assets/star_filled.svg";
import starEmpty from "../../assets/star_empty.svg";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <img
      key={i}
      src={i < Number(rating) ? starFilled : starEmpty}
      alt={i < Number(rating) ? "Étoile remplie" : "Étoile vide"}
      className="star-icon"
    />
  ));

  return <div className="rating">{stars}</div>;
};

export default Rating;
