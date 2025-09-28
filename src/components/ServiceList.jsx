import services from "../data/services.js";
import { Card } from "./card/Card.jsx";

export const ServiceList = () => {
  return (
    <section className="flex flex-col flex-wrap gap-6 p-10 bg-base-200 justify-center">
      <h2
        className="text-center font-bold text-5xl"
        style={{ color: "#013205" }}
      >
        Que servicios necesitas?
      </h2>
      <div className="flex items-center flex-wrap gap-6 p-10 bg-base-200 justify-center  mx-auto">
        {services.map((service) => (
          <Card
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
