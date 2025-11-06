import React, { useEffect, useState } from "react"; // J'importe React, useState et useEffect pour gérer les données et le cycle de vie
import { Link } from "react-router-dom"; // J'importe Link pour créer des liens vers les logements
import "./gallery.css";

export default function Gallery() {
  const [items, setItems] = useState([]); // Je stocke les logements récupérés
  const [loading, setLoading] = useState(true); // J'indique si les données sont en train de charger
  const [error, setError] = useState(null); // Je stocke une erreur si la récupération échoue

  useEffect(() => {
    let cancelled = false; // Pour éviter les mises à jour après démontage
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8080/api/properties"); // Je récupère les logements depuis mon API
        if (!res.ok) throw new Error(`Erreur ${res.status}`); // Je gère les erreurs de réponse
        const data = await res.json(); // Je transforme la réponse en JSON
        if (!cancelled) {
          setItems(data); // Je mets à jour les logements
          setLoading(false); // Je passe l'état à chargé
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      cancelled = true; // J'empêche les mises à jour après démontage du composant
    };
  }, []);

  if (loading) return <section className="gallery-home">Chargement...</section>; // J'affiche un message pendant le chargement
  if (error) return <section className="gallery-home">Erreur : {error}</section>; // J'affiche un message si erreur

  return (
    <section className="gallery-home">
      {items.map((p) => (
        <Link
          key={p.id} // J'utilise l'ID comme clé unique
          className="card-home"
          to={`/lodging/${p.id}`} // Je crée un lien vers la page du logement
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(10,10,10,0) 42%, rgba(4,4,4,0.205) 99.99%, rgba(0,0,0,0.5) 100%), url(${p.cover})`, // Je mets l'image de couverture en arrière-plan
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-label={p.title} // Pour l'accessibilité
        >
          <span className="card-home-title">{p.title}</span>
        </Link>
      ))}
    </section>
  );
}
