import { useState } from "react";
import bgForm from "../assets/bg-formContact.jpg";
export const FormContainer = () => {
  const [form, setForm] = useState({
    name: "",
    plan: "",
    Monthcredit: "",
    value: "",
  });

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
      console.log(prestamo);
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
        <label htmlFor="name">
          Nombre
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="value credit">
          Cantidad
          <input
            id="value credit"
            type="number"
            name="value"
            value={form.value}
            onChange={handleChange}
          />
        </label>
        <select
          defaultValue="Credito Personal"
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
        <select
          defaultValue="6"
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
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};
