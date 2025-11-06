import { render, screen, fireEvent } from "@testing-library/react"; // J'importe les fonctions pour tester et simuler les clics
import { describe, it, expect } from "vitest"; // J'importe les fonctions de test
import Collapse from "../components/collapse/collapse.jsx"; // J'importe le composant Collapse

describe("Collapse component", () => {
    
  it("affiche le titre correctement", () => {
    render(<Collapse title="Mon titre" content="Mon contenu" />); // Je rends le composant
    expect(screen.getByText("Mon titre")).toBeInTheDocument(); // Je vérifie que le titre s'affiche
  });

  it("cache le contenu par défaut", () => {
    render(<Collapse title="Titre" content="Contenu caché" />); // Je teste le contenu caché par défaut
    const content = screen.getByText("Contenu caché");
    expect(content.closest(".collapse-content")).not.toHaveClass("open"); // Je vérifie qu'il n'est pas ouvert
  });

  it("affiche le contenu après un clic", () => {
    render(<Collapse title="Titre" content="Contenu visible" />); // Je teste l'ouverture au clic
    const title = screen.getByText("Titre");
    fireEvent.click(title); // Je simule un clic
    const content = screen.getByText("Contenu visible");
    expect(content.closest(".collapse-content")).toHaveClass("open"); // Je vérifie que le contenu est ouvert
  });

  it("affiche le contenu sous forme de liste si content est un tableau", () => {
    const items = ["Élément 1", "Élément 2"];
    render(<Collapse title="Liste" content={items} />); // Je teste avec un tableau
    const title = screen.getByText("Liste");
    fireEvent.click(title); // J'ouvre le collapse
    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument(); // Je vérifie que chaque élément est affiché
    });
  });

  it("fonctionne correctement même si content est vide", () => {
    render(<Collapse title="Vide" content="" />); // Je teste un collapse vide
    const title = screen.getByText("Vide");
    fireEvent.click(title); // Je clique pour ouvrir
    const content = screen.getByText("Vide");
    expect(content).toBeInTheDocument(); // Je vérifie que rien ne casse
  });

  it("toggleCollapse peut être cliqué plusieurs fois sans erreur", () => {
    render(<Collapse title="Toggle" content="Texte" />); // Je teste plusieurs clics
    const title = screen.getByText("Toggle");
    for (let i = 0; i < 3; i++) {
      fireEvent.click(title); // J'ouvre
      expect(screen.getByText("Texte").closest(".collapse-content")).toHaveClass("open"); // Vérification ouvert
      fireEvent.click(title); // Je ferme
      expect(screen.getByText("Texte").closest(".collapse-content")).not.toHaveClass("open"); // Vérification fermé
    }
  });
});
