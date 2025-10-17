import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Navbar = () => {
  const { user, logout, loading } = useAuth();
  return (
    <header className="navbar fixed bg-base-100 shadow-sm z-10000">
      <nav className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" aria-label="Ir a la página principal de la compañía">
                Compañia
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Ir a la página principal de servicios">
                Servicios
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="/" aria-label="Ir a la página acerca de nosotros">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Ir a la página trabaja con nosotros">
                    Work with us
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/" aria-label="Ir a la página de nuestros servicios">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost text-xl"
          to="/"
          aria-label="Ir a la página principal"
        >
          CrediFind
        </Link>
      </nav>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" aria-label="Ir a la página principal de la compañía">
              Compañia
            </Link>
          </li>
          <li>
            <Link to="/" aria-label="Ir a la página sobre nuestros socios">
              Socios
            </Link>
          </li>
          <li>
            <details>
              <summary>Servicios</summary>
              <ul className="p-2 w-60">
                <li>
                  <Link to="/" aria-label="Ir a la página acerca de nosotros">
                    <i className="bxr  bx-face-alt"></i> About us
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Ir a la página trabaja con nosotros">
                    <i className="bxr  bx-people-handshake"></i> Work whith us
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {!loading ? (
          user ? (
            <>
              <Link to="/dashboard" aria-label="Ir al dashboard">
                {user.email}
              </Link>
              <button className="btn btn-primary" onClick={logout}>
                Cerrar Sesion
              </button>
            </>
          ) : (
            <>
              <div className="hidden lg:flex gap-2  ">
                <Link to="/register" aria-label="registrarse" className="btn">
                  Registrarse
                </Link>
                <Link
                  to="/login"
                  className="btn "
                  aria-label="ingresar con su cuenta"
                  style={{ backgroundColor: "#09DC06" }}
                >
                  Iniciar sesion
                </Link>
              </div>
            </>
          )
        ) : (
          <p>cargando</p>
        )}
      </div>
    </header>
  );
};
