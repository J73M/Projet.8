import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8080/api/properties");
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setItems(data);
          setLoading(false);
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
      cancelled = true;
    };
  }, []);

  if (loading) return <section className="gallery-home">Chargement...</section>;
  if (error) return <section className="gallery-home">Erreur : {error}</section>;

  return (
    <section className="gallery-home">
      {items.map((p) => (
        <Link
          key={p.id}
          className="card-home"
          to={`/lodging/${p.id}`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(10,10,10,0) 42%, rgba(4,4,4,0.205) 99.99%, rgba(0,0,0,0.5) 100%), url(${p.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-label={p.title}
        >
          <span className="card-home-title">{p.title}</span>
        </Link>
      ))}
    </section>
  );
}
