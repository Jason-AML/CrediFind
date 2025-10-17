import { useNavigate, useParams } from "react-router-dom";
import services from "../data/services";
import { useEffect } from "react";

export const Services = () => {
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
  const handleFormClick = (e) => {
    navigate("/form");
  };
  return (
    <div className="flex items-center  min-h-screen bg-green-100">
      <div className="flex flex-col lg:flex-row-reverse ">
        <img
          src={servicio.imageOnPage}
          loading="lazy"
          className="max-w-full  shadow-2xl h-screen object-cover w-1/2"
        />
        <div className="p-10 flex flex-col justify-center items-start w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">{servicio.title}</h1>
          <p className="py-6">{servicio.descriptionOnPage}</p>
          <button className="btn btn-primary" onClick={handleFormClick}>
            Adquirir
          </button>
          <div className="flex flex-col justify-around w-full mt-10">
            <h3 className="text-3xl font-bold mb-5">Requisitos</h3>
            <ul>
              {servicio.requirements.map((req, index) => (
                <li key={index} className="">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
