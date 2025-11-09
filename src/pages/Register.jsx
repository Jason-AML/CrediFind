import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";
import { useState } from "react";
import backgroundImage from "../assets/bg-formContact.jpg";

export const Register = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(email, password);
      alert(" Registro exitoso");
      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        alert("Este correo ya está registrado. Por favor, inicia sesión.");
      } else if (error.code === "auth/invalid-email") {
        alert("El formato del correo no es válido.");
      } else if (error.code === "auth/weak-password") {
        alert("La contraseña es muy débil. Usa al menos 6 caracteres.");
      } else {
        alert("Ocurrió un error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <main
      className="flex items-center justify-center bg-base-200 min-h-screen "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
      aria-label="Página de autenticación"
    >
      <div className=" flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-300 max-w-sm shrink-0 shadow-2xl ">
          <div className="p-6 text-center lg:text-left   left-100 hidden lg:block">
            <h1 className="text-5xl font-bold">Registro</h1>

            <p>Bienvenido, registrese para continuar</p>
          </div>
          <form className="card-body" onSubmit={handleSubmitRegister}>
            <fieldset className="fieldset">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label" htmlFor="pass">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="btn btn-neutral mt-4 w-full"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Entrar"}
              </button>

              <Link to="/" className="absolute top-4 right-4">
                <i className="bxr  bx-arrow-left-square text-4xl hover:text-blue-500"></i>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
};
