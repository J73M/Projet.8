import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Banner from "../components/banner/banner.jsx"; // J'importe le composant Banner à tester
import bannerImg from "../assets/banner_about.png";

describe("Banner component", () => {
  
  it("affiche l'image avec le bon alt", () => {
    render(<Banner image={bannerImg} alt="Texte alternatif" />); // Je rends le composant dans le test
    const image = screen.getByAltText("Texte alternatif"); // Je récupère l'image via son alt
    expect(image).toBeInTheDocument(); // Je vérifie que l'image est bien dans le document
  });

  it("affiche le titre si fourni", () => {
    render(
      <Banner
        image={bannerImg}
        alt="Texte"
        title={
          <>
            Chez vous,<br className="mobile-break" />
            partout et ailleurs
          </>
        }
      />
    );// Je vérifie que le texte complet du titre est bien rendu, même avec le <br>
    expect(
      screen.getByText(/Chez vous,.*partout et ailleurs/i)
    ).toBeInTheDocument();
  });

  it("ne plante pas si aucun titre n’est fourni", () => {
    render(<Banner image={bannerImg} alt="Texte sans titre" />); // Je teste sans titre
    const image = screen.getByAltText("Texte sans titre"); // Je récupère l'image
    expect(image).toBeInTheDocument(); // Je vérifie qu'elle est bien là
  });
});
