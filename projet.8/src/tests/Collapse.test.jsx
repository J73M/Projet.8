import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Collapse from "../components/collapse/collapse.jsx";

describe("Collapse component", () => {
    
  it("affiche le titre correctement", () => {
    render(<Collapse title="Mon titre" content="Mon contenu" />);
    expect(screen.getByText("Mon titre")).toBeInTheDocument();
  });

  it("cache le contenu par défaut", () => {
    render(<Collapse title="Titre" content="Contenu caché" />);
    const content = screen.getByText("Contenu caché");
    expect(content.closest(".collapse-content")).not.toHaveClass("open");
  });

  it("affiche le contenu après un clic", () => {
    render(<Collapse title="Titre" content="Contenu visible" />);
    const title = screen.getByText("Titre");
    fireEvent.click(title);
    const content = screen.getByText("Contenu visible");
    expect(content.closest(".collapse-content")).toHaveClass("open");
  });

  it("affiche le contenu sous forme de liste si content est un tableau", () => {
    const items = ["Élément 1", "Élément 2"];
    render(<Collapse title="Liste" content={items} />);
    const title = screen.getByText("Liste");
    fireEvent.click(title);
    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("fonctionne correctement même si content est vide", () => {
    render(<Collapse title="Vide" content="" />);
    const title = screen.getByText("Vide");
    fireEvent.click(title);
    const content = screen.getByText("Vide");
    expect(content).toBeInTheDocument();
  });

  it("toggleCollapse peut être cliqué plusieurs fois sans erreur", () => {
    render(<Collapse title="Toggle" content="Texte" />);
    const title = screen.getByText("Toggle");
    for (let i = 0; i < 3; i++) {
      fireEvent.click(title);
      expect(screen.getByText("Texte").closest(".collapse-content")).toHaveClass("open");
      fireEvent.click(title);
      expect(screen.getByText("Texte").closest(".collapse-content")).not.toHaveClass("open");
    }
  });
});
