import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar ({ cantidadTotal = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 shadow-sm sticky-top py-2" style={{backgroundColor: "#121212"}}>
      <div className="container-fluid">
        <NavLink
          to="/inicio"
          className="navbar-brand d-flex align-items-center p-0"
        >
          <img
            src={logo}
            alt="UnaMovies Logo"
            style={{
              height: "115px",
              width: "auto",
              objectFit: "contain",
              marginTop: "6px",
            }}
          />
        </NavLink>
        <div className="navbar-nav ms-auto flex-row gap-3 nav-hover">
          <NavLink to="/inicio" className="nav-link">
            Inicio
          </NavLink>
          <NavLink to="/catalogo" className="nav-link">
            Catálogo
          </NavLink>
          <NavLink to="/sobre-nosotros" className="nav-link">
            Sobre nosotros
          </NavLink>
          <NavLink to="/contacto" className="nav-link">
            Contáctanos
          </NavLink>

          <NavLink
            to="/carrito"
            className="nav-link text-light d-flex align-items-center gap-1"
          >
            <FiShoppingCart size={18} />
            <span className="badge rounded-pill bg-danger">
              {cantidadTotal}
            </span>
            <span>Carrito</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
