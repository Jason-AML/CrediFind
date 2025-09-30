import { useNavigate, useParams } from "react-router-dom";
import services from "../data/services";
import { useEffect } from "react";

export const Servicios = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const servicio = services.find((s) => s.id === parseInt(id));
  useEffect(() => {
    if (!servicio) {
      navigate("/not-found");
    }
  }, [servicio, navigate]);

  if (!servicio) {
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{servicio.title}</h1>
      <img src={servicio.image} alt={servicio.title} className="mb-4 w-96" />
      <p>
        <strong>Descripción:</strong> {servicio.description}
      </p>
    </div>
  );
};
