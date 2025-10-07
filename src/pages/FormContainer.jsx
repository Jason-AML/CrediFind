import { useState } from "react";
import bgForm from "../assets/bg-formContact.jpg";
export const FormContainer = () => {
  const [form, setForm] = useState({
    name: "",
    identification: "",
    email: "",
    phone: "",
    born: "",
    plan: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <label htmlFor="num-identification">
          Número de identificación
          <input
            id="identification"
            type="number"
            name="identification"
            value={form.identification}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          email
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          Telefono
          <input
            id="phone"
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </label>
        <label className="input">
          <span className="label">Fecha de nacimiento</span>
          <input
            type="date"
            name="born"
            value={form.born}
            onChange={handleChange}
          />
        </label>
        <select
          defaultValue="Choose you plan"
          className="select"
          value={form.plan}
          onChange={handleChange}
          name="plan"
        >
          <option disabled={true}>Choose you plan</option>
          <option>Credito Personal</option>
          <option>Prestamo Empresarial</option>
          <option>Consolidacion de deudas</option>
        </select>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};
