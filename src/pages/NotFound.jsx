import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
    <div className="container py-5 text-light">
            <div className="text-center py-5 mb-5 border-bottom border-secondary">
            <h1 className="fw-bold text-light display-5 mb-2">No encontramos eso que buscas en <span className="text-danger">UnaMovies</span></h1>
      
            <Link to="/" className="btn btn-danger px-4 fw-bold">
              Volvé al Inicio para retomar tu camino ➔
            </Link>
            </div>
    </div>
    </>
  )
}

export default NotFound