import { Link } from "react-router-dom";

export const Card = ({ id, image, title, description }) => {
  return (
    <div className="card bg-base-100  w-80  shadow-sm mx-2">
      <figure>
        <img src={image} alt="" className="h-70 w-auto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/servicios/${id}`}
            className="btn hover:text-white hover:scale-105 "
            style={{ backgroundColor: "#BFE7C9" }}
          >
            Consultar
          </Link>
        </div>
      </div>
    </div>
  );
};
