import { ProfitCard } from "./ui/card/ProfitCard";

export const ProfitList = ({ data }) => {
  return (
    <>
      <section className="py-10  ">
        <h2
          className="text-5xl text-center font-bold"
          style={{ color: "#013205" }}
        >
          Planes de financiamiento
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {data.map((item, index) => (
            <ProfitCard key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};
