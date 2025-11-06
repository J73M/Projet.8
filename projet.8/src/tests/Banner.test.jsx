import { render, screen } from "@testing-library/react"; // J'importe les fonctions pour tester les composants
import { describe, it, expect } from "vitest"; // J'importe les fonctions de test de Vitest
import Banner from "../components/banner/banner.jsx"; // J'importe le composant Banner à tester
import bannerImg from "../assets/banner_about.png"; // J'importe l'image pour le test

describe("Banner component", () => {
    
  it("affiche l'image avec le bon alt", () => {
    render(<Banner image={bannerImg} alt="Texte alternatif" />); // Je rends le composant dans le test
    const image = screen.getByAltText("Texte alternatif"); // Je récupère l'image via son alt
    expect(image).toBeInTheDocument(); // Je vérifie que l'image est bien dans le document
  });

  it("affiche le titre si fourni", () => {
    render(<Banner image={bannerImg} alt="Texte" title="Bienvenue" />); // Je teste avec un titre
    expect(screen.getByText(/Chez vous, partout et ailleurs/i)).toBeInTheDocument(); // Je vérifie que le titre s'affiche
  });

  it("ne plante pas si aucun titre n’est fourni", () => {
    render(<Banner image={bannerImg} alt="Texte sans titre" />); // Je teste sans titre
    const image = screen.getByAltText("Texte sans titre"); // Je récupère l'image
    expect(image).toBeInTheDocument(); // Je vérifie qu'elle est bien là
  });
});
