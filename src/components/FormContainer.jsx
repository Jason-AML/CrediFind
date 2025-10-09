import { useState } from "react";
import bgForm from "../assets/bg-formContact.jpg";
import { motion } from "framer-motion";

export const FormContainer = () => {
  const [form, setForm] = useState({
    name: "",
    plan: "Credito Personal",
    Monthcredit: "6",
    value: "",
  });
  const [presValue, setPresValue] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const MonthCredit = parseInt(form.Monthcredit);
    const valueCredit = parseFloat(form.value);
    let prestamo = 0;
    if (form.plan === "Credito Personal") {
      prestamo = valueCredit / MonthCredit;
      setPresValue(parseFloat(prestamo));
    } else if (form.plan === "Prestamo Empresarial") {
      prestamo = (valueCredit / MonthCredit) * 0.05;
      setPresValue(parseFloat(prestamo));
    }
    console.log(form);
  };
  return (
    <section
      className="h-screen  text-black grid content-center "
      style={{
        backgroundImage: `url(${bgForm})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <form
        action=""
        className="flex flex-col gap-4 p-20 justify-center h-full bg-transparent backdrop-blur-sm  rounded-2xl  shadow-2xl max-w-md mx-auto "
      >
        <h1 className="font-bold text-3xl text-[#F95B4F]">SIMULA TU CRÉDITO</h1>
        <label htmlFor="name" className="flex flex-col">
          Nombre
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-white focus:border-2 rounded-sm "
          />
        </label>
        <label htmlFor="value credit" className="flex flex-col">
          Cuanto quieres que te prestemos?
          <input
            id="value credit"
            type="number"
            name="value"
            className="bg-white focus:border-2 rounded-sm "
            required
            value={form.value}
            onChange={handleChange}
          />
          <p className="text-sm text-gray-600">(*) Monto mínimo $500.000</p>
        </label>
        <label htmlFor="">
          Elige tipo de credito
          <select
            className="select"
            value={form.plan}
            onChange={handleChange}
            name="plan"
            required
          >
            <option disabled hidden>
              Choose your plan
            </option>
            <option value="Credito Personal">Credito Personal</option>
            <option value="Prestamo Empresarial">Prestamo Empresarial</option>
            <option value="Consolidacion de deudas">
              Consolidacion de deudas
            </option>
          </select>
        </label>
        <label htmlFor="">
          Seleccione numero de cuotas
          <select
            className="select"
            value={form.Monthcredit}
            onChange={handleChange}
            required
            name="Monthcredit"
          >
            <option disabled hidden>
              Choose you credit installment
            </option>
            <option value="6">6 Month</option>
            <option value="9">9 Month</option>
            <option value="12">12 Month</option>
            <option value="16">16 Month</option>
            <option value="24">24 Month</option>
          </select>
        </label>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="btn rounded-2xl bg-[#FBB35A] text-white border-none "
          onClick={handleSubmit}
        >
          Conocer mi cuota
        </motion.button>
      </form>
      {presValue && (
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col p-20   bg-white backdrop-blur-sm  rounded-2xl  shadow-2xl justify-center items-center "
        >
          <div className="flex text-center gap-10">
            <div>
              <h2 className="font-bold text-[#2285F7] text-2xl">
                Monto a financiar
              </h2>
              <p>{form.value}</p>
            </div>
            <div>
              <h2 className="font-bold text-[#2285F7] text-2xl">
                Numero de cuotas
              </h2>
              <p>{form.Monthcredit}</p>
            </div>
            <div>
              <h2 className="font-bold text-[#2285F7] text-2xl">
                Tipo de plan
              </h2>
              <p>{form.plan}</p>
            </div>
          </div>
          <div className="card-footer text-center">
            <h2 className="font-bold text-[#2285F7] text-2xl">valor cuota</h2>
            <p>{parseFloat(Math.round(presValue))}</p>
          </div>
          <p className="text-sm text-gray-600 pt-5">
            * Nota: Los valores de la simulación no corresponde a una oferta
            comercial, estos resultado son aproximados, y configuran una
            referencia para el usuario, los cuales podrán variar de acuerdo a
            las políticas de análisis y aprobación del crédito por parte de
            nosotros.
          </p>
        </motion.div>
      )}
    </section>
  );
};
