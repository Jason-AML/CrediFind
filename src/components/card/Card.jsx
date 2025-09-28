export const Card = ({ image, title, description }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn hover:text-white hover:scale-105 "
            style={{ backgroundColor: "#BFE7C9" }}
          >
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};
