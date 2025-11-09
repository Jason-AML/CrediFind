import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";
import { useState } from "react";
import backgroundImage from "../assets/bg-formContact.jpg";

export const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // Redirigir al inicio después del login
      alert("Login exitoso");
      setLoading(false);
    } catch (error) {
      alert("Error: " + error.message);
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
            <h1 className="text-5xl font-bold">Login</h1>

            <p>Bienvenido de nuevo, ingresa tus credenciales.</p>
          </div>
          <form className="card-body" onSubmit={handleSubmitLogin}>
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
              <div>
                <button
                  className="link link-hover text-sm"
                  aria-label="Recuperar contraseña olvidada"
                >
                  Olvido su contraseña?
                </button>
              </div>

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
