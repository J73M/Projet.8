import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Banner from "../components/banner/banner.jsx";
import bannerImg from "../assets/banner_about.png";

describe("Banner component", () => {
    
  it("affiche l'image avec le bon alt", () => {
    render(<Banner image={bannerImg} alt="Texte alternatif" />);
    const image = screen.getByAltText("Texte alternatif");
    expect(image).toBeInTheDocument();
  });

  it("affiche le titre si fourni", () => {
    render(<Banner image={bannerImg} alt="Texte" title="Bienvenue" />);
    expect(screen.getByText(/Chez vous, partout et ailleurs/i)).toBeInTheDocument();
  });

  it("ne plante pas si aucun titre n’est fourni", () => {
    render(<Banner image={bannerImg} alt="Texte sans titre" />);
    const image = screen.getByAltText("Texte sans titre");
    expect(image).toBeInTheDocument();
  });
});
