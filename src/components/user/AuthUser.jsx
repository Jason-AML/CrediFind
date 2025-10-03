import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/banca-y-seguros-1.png";
import { useAuthContext } from "../auth/AuthContext";
import { useState } from "react";

export const AuthUser = ({ showlogin = false }) => {
  const { register, login } = useAuthContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/"); // Redirigir al inicio después del registro
      alert("Registro exitoso");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // Redirigir al inicio después del login
      alert("Login exitoso");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  return (
    <main
      className="flex items-center justify-center bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className=" flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-300 max-w-sm shrink-0 shadow-2xl ">
          <div className="p-6 text-center lg:text-left   left-100 hidden lg:block">
            <h1 className="text-5xl font-bold">
              {showlogin ? "Login" : "Register"}
            </h1>

            <p>{showlogin ? "Este es el loggin" : "Este es el registro"}</p>
          </div>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                inputmodel="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                inputmodel="text"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a className="link link-hover">
                  {showlogin ? "Olvido su contraseña?" : "Necesita ayuda?"}
                </a>
              </div>

              {showlogin ? (
                <button
                  className="btn btn-neutral mt-4"
                  onClick={handleSubmitLogin}
                >
                  Entrar
                </button>
              ) : (
                <button
                  className="btn btn-neutral mt-4"
                  onClick={handleSubmitRegister}
                >
                  Registrarse
                </button>
              )}

              <Link to="/" className="absolute top-4 right-4">
                <i className="bxr  bx-arrow-left-square text-4xl hover:text-blue-500"></i>
              </Link>
            </fieldset>
          </div>
        </div>
      </div>
    </main>
  );
};
