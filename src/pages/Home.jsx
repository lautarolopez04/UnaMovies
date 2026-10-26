import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import productos from '../data/productos';
import Banner from '../components/Banner';

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

  return (
    <>
      <div className="container py-5 text-light">


        <Banner />


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
    </>
  );
};

export default Home;