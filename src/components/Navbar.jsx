import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm sticky-top">
      <div className="container-fluid">
        <NavLink to="/inicio" className="navbar-brand fw-bold" style={{ color: '#0c2eec',         
    WebkitTextStroke: '1px white', textStroke: '1px white'} }>
  🎬 UnaMovies
</NavLink>

        <div className="navbar-nav ms-auto flex-row gap-3">
          <NavLink to="/inicio" className="nav-link text-light">Inicio</NavLink>
          <NavLink to="/catalogo" className="nav-link text-light">Catálogo</NavLink>
          <NavLink to="/sobre-nosotros" className="nav-link text-light">Sobre nosotros</NavLink>
          <NavLink to="/contacto" className="nav-link text-light">Contáctanos</NavLink>
          <NavLink to="/carrito" className="nav-link text-light">🛒 Carrito</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;