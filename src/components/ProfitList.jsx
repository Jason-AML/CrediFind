import { ProfitCard } from "./card/ProfitCard";
import beneficios from "../data/profits";
export const ProfitList = () => {
  return (
    <>
      <section className="py-10">
        <h2
          className="text-5xl text-center font-bold"
          style={{ color: "#013205" }}
        >
          Planes de financiamiento
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {beneficios.map((item, index) => (
            <ProfitCard key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};
