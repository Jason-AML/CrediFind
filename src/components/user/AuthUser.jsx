import { Link } from "react-router-dom";
import backgroundImage from "../../assets/banca-y-seguros-1.png";

export const AuthUser = ({ login = false }) => {
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
              {login ? "Login" : "Register"}
            </h1>

            <p>{login ? "Este es el loggin" : "Este es el registro"}</p>
          </div>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">
                  {login ? "Olvido su contraseña?" : "Necesita ayuda?"}
                </a>
              </div>
              <button className="btn btn-neutral mt-4">
                {login ? "Entrar" : "Registrarse"}
              </button>
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
