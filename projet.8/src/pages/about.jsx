import React from "react";
import Banner from "../components/banner/banner.jsx";
import aboutBanner from "../assets/banner_about.png";
import Collapse from "../components/collapse/collapse.jsx";
import "../styles/about.css";

export default function AboutPage() {

  const aboutData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa, aussi bien pour nos hôtes que pour les voyageurs. Chaque logement répond aux critères de sécurité établis par nos services.",
    },
  ];
  
  return (
    <main className="about-page">
      <Banner image={aboutBanner} alt="Bannière à propos" />

      <div className="collapse-section about-collapses">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  );
}
