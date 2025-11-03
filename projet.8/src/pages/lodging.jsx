import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/carousel/carousel.jsx";
import PropertyInfo from "../components/propertyInfo/propertyInfo.jsx";
import HostInfo from "../components/hostInfo/hostInfo.jsx";
import Rating from "../components/rating/rating.jsx";
import Collapse from "../components/collapse/collapse.jsx";

export default function LodgingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (!res.ok) {
          navigate("/404", { replace: true });
          return;
        }

        const data = await res.json();
        if (!data || !data.id) {
          navigate("/404", { replace: true });
          return;
        }
        setProperty(data);
      } catch (error) {
        console.error("Erreur lors du fetch de la propriété :", error);
        navigate("/404", { replace: true });
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id, navigate]);

  if (loading) return <p>Chargement...</p>;
  if (!property) return null;

  return (
    <div className="page-container">
      <main className="lodging-page">
        <Carousel pictures={property.pictures} />

        <div className="logement-header">
          <PropertyInfo
            title={property.title}
            location={property.location}
            tags={property.tags}
          />
          <div className="host-rating">
            <HostInfo host={property.host} />
            <Rating rating={property.rating} />
          </div>
        </div>

        <div className="collapse-section">
          <Collapse title="Description" content={property.description} />
          <Collapse title="Équipements" content={property.equipments} />
        </div>
      </main>
    </div>
  );
}
