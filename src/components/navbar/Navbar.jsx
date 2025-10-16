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
              <a>Compañia</a>
            </li>
            <li>
              <a>Servicios</a>
              <ul className="p-2">
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Work with us</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CrediFind</a>
      </nav>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Compañia</a>
          </li>
          <li>
            <a>Socios</a>
          </li>
          <li>
            <details>
              <summary>Servicios</summary>
              <ul className="p-2 w-60">
                <li>
                  <a>
                    <i className="bxr  bx-face-alt"></i> About us
                  </a>
                </li>
                <li>
                  <a>
                    <i className="bxr  bx-people-handshake"></i> Work whith us
                  </a>
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
              <Link to="/dashboard">{user.email}</Link>
              <button className="btn btn-primary" onClick={logout}>
                Cerrar Sesion
              </button>
            </>
          ) : (
            <>
              <div className="hidden lg:flex gap-2  ">
                <Link to="/register" className="btn">
                  Registrarse
                </Link>
                <Link
                  to="/login"
                  className="btn "
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
