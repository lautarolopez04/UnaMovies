import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Importamos íconos de react-icons para las flechitas. npm install react-icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import productos from '../data/productos';

const Home = () => {
  
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };


  //const novedadesPeliculas = [ 
  //  { id: 1, title: "ESTRENO - Inception (Blu-Ray 4K)", price: "$15.000,00", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop" },
  //  { id: 2, title: "ESTRENO - Interstellar (Edición Especial)", price: "$18.000,00", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=400&auto=format&fit=crop" },
  //  { id: 3, title: "CLÁSICO - Matrix (Remasterizada)", price: "$12.000,00", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400&auto=format&fit=crop" },
  //  { id: 4, title: "SCIFI - Blade Runner 2049", price: "$14.500,00", image: "https://seventhartstudio.com/wp-content/uploads/2020/10/Blade-Runner-2049.jpg"},
  //  { id: 5, title: "ESTRENO - Dune: Parte Dos", price: "$19.000,00", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop" },
  //  { id: 6, title: "ACCIÓN - John Wick 4", price: "$13.000,00", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop" }
  //];

  return (
    <div className="container py-5 text-light">
        <div className="text-center py-5 mb-5 border-bottom border-secondary">
        <h1 className="fw-bold text-light display-5 mb-2">Bienvenido a <span className="text-danger">UnaMovies</span></h1>
  
        <Link to="/catalogo" className="btn btn-danger px-4 fw-bold">
          Explorar nustro catálogo ➔
        </Link>
    </div>
    <div className="my-5 position-relative">
        <h2 className="text-center fw-bold text-uppercase mb-4 text-light" style={{ letterSpacing: '2px' }}>
          NOVEDADES Y ESTRENOS
        </h2>

        <button 
          onClick={scrollLeft} 
          className="position-absolute start-0 top-50 translate-middle-y btn btn-dark border border-secondary rounded-circle shadow-lg z-3 d-flex align-items-center justify-content-center"
          style={{ width: '45px', height: '45px', marginLeft: '-20px' }}
        >
          <FaChevronLeft size={20} />
        </button>

        <div 
          ref={carouselRef}
          className="d-flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-none"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
        >
          {productos.map((pelicula) => (
            <div
              key={pelicula.id}
              className="flex-shrink-0 d-flex"
              style={{ width: '240px' }}
            >
            <div className="card bg-dark text-light border border-secondary w-100 shadow-sm p-3 text-center">

            <div className="mb-3 overflow-hidden rounded" style={{ height: '280px' }}>
              <img
                src={pelicula.imagen}
                alt={pelicula.nombre}
                className="w-100 h-100 object-fit-cover"
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div className="card-body p-0 d-flex flex-column">
              <p className="card-title fs-6 text-secondary mb-2 flex-grow-1">
                {pelicula.nombre}
              </p>
              <p className="fw-bold fs-5 text-light mb-3">
                {pelicula.precio}
              </p>

            <Link to={`/producto/${pelicula.id}`} className="btn btn-outline-light btn-sm fw-bold">
              Ver Detalle
            </Link>
            </div>

        </div>
  </div>
))}
        </div>

      
        <button 
          onClick={scrollRight} 
          className="position-absolute end-0 top-50 translate-middle-y btn btn-dark border border-secondary rounded-circle shadow-lg z-3 d-flex align-items-center justify-content-center"
          style={{ width: '45px', height: '45px', marginRight: '-20px' }}
        >
          <FaChevronRight size={20} />
        </button>

      </div>

    </div>
  );
};

export default Home;