import { Card } from "../components/ui/card/Card";

export const ServiceList = ({ data }) => {
  return (
    <section className="flex flex-col flex-wrap gap-6  bg-base-200 justify-center py-5 ">
      <h2
        className="xl:text-center font-bold text-5xl"
        style={{ color: "#013205" }}
      >
        Que servicios necesitas?
      </h2>
      <div className="flex justify-center flex-wrap gap-6  bg-base-200">
        {data.map((service) => (
          <Card
            key={service.id}
            id={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
