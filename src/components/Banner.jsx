import React from 'react';
import banner from '../assets/banner.avif';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="p-5 mb-4 bg-dark text-white rounded-3 shadow-lg"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '420px',
                display: 'flex',
                alignItems: 'center'
            }}>


            <div className="container-fluid py-4 text-center">
                <h1 className="display-4 fw-bold mb-3">
                    Bienvenido a <span className="text-danger">UnaMovies</span>
                </h1>
                <p className="col-md-8 mx-auto fs-5 text-light opacity-75 mb-4">
                    Estrenos y clásicos a solo un click. Ponete cómodo y disfrutá.
                </p>
                <Link
                    to="/catalogo"
                    className="btn btn-danger btn-lg px-4 py-2 fw-semibold shadow"
                    style={{
                        transition: 'transform 0.2s ease-in-out',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    VER CATÁLOGO EXCLUSIVO
                </Link>
            </div>

        </div>
    );
};

export default Banner;