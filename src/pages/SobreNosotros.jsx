import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import tv from '../assets/tv.jpg';
import unahur from '../assets/unahur.jpg';

const SobreNosotros = () => {
  return (
    <Container className="py-5 text-light">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-2">Sobre <span className="text-danger">UnaMovies</span></h1>
        <p className="text-secondary fs-5">El proyecto detrás de la pantalla.</p>
      </div>

      <Card className="bg-dark text-light border border-secondary border-opacity-25 rounded-4 shadow-lg p-4 p-md-5 my-4">
        <Row className="align-items-center g-4">

          <Col md={6} className="d-flex flex-column gap-3">
            <div className="overflow-hidden rounded-3 shadow-sm" style={{ height: '210px' }}>
              <img
                src={tv}
                alt="Vista previa 1"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3 shadow-sm" style={{ height: '210px' }}>
              <img
                src={unahur}
                alt="Vista previa 2"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="p-2">
              <h3 className="fw-bold text-danger mb-3">¿Quiénes somos?</h3>

              <p className="text-secondary fs-6 mb-3">
                <strong className="text-light">UnaMovies</strong> es una tienda online de películas
                creada por un grupo de estudiantes de la Universidad Nacional de Hurlingham
                con el objetivo de ofrecer una experiencia única para los amantes del cine. Acá vas a encontrar una plataforma intuitiva y fácil de usar, donde podés explorar nuestro catálogo ,
                obtener información detallada sobre cada título y realizar compras de manera segura.
              </p>
              <div className="mb-4">
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'Segoe UI', Roboto, sans-serif",
                    fontSize: '1.1rem',
                    color: '#ff4d4d',
                    letterSpacing: '1px'
                  }}
                >
                  Seguinos en nuestras redes:
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <FaInstagram size={17} />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <FaFacebookF size={17} />
                  </a>

                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <FaWhatsapp size={17} />
                  </a>
                </div>
              </div>

              <Link to="/" className="btn btn-outline-light btn-sm fw-bold">
                Volver al Inicio
              </Link>
            </div>
          </Col>

        </Row>
      </Card>
    </Container>
  );
};

export default SobreNosotros;