import img from "../assets/Requirements.png";

export const Requeriments = () => {
  return (
    <section className="h-screen bg-[#F8F8F8] text-black  py-10">
      <h2
        className="text-5xl font-bold text-center py-5"
        style={{ color: "#013205" }}
      >
        Que se necesita para solicitarlo?
      </h2>

      <div className="w-[80%]  flex  mx-auto h-[70%]  mt-10 rounded-lg text-white p-5 gap-10 ">
        <div className="mx-auto hidden xl:block ">
          <img src={img} alt="" loading="lazy" className="h-[90%] rounded-lg" />
        </div>
        <div className=" mx-auto flex flex-col justify-center">
          <div className="text-2xl font-bold">
            <h3 className="text-2xl font-bold" style={{ color: "#FFC93A" }}>
              Requisitos Obligatorios
            </h3>
          </div>
          <div>
            <ul
              className="list-disc list-inside text-lg mt-5"
              style={{ color: "#646463ff" }}
            >
              <li>Ser mayor de 18 años.</li>
              <li>Contar con una cuenta bancaria activa.</li>
              <li>Tener un ingreso mensual comprobable.</li>
              <li>No tener antecedentes crediticios negativos.</li>
              <li>Presentar una identificación oficial vigente.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
