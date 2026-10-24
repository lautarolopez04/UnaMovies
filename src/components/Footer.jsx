import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaCcVisa, 
  FaCcMastercard, 
  FaCcPaypal 
} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`¡Gracias por suscribirte con: ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="gy-4">
          {/* Columna 1: Info de la marca y Redes */}
          <Col lg={4} md={6}>
            <h5 className={styles.brandTitle}>UNAMOVIES</h5>
            <p className={styles.description}>
              Tu plataforma y tienda favorita para encontrar las mejores películas, coleccionables y merchandising.
            </p>
            
          </Col>

          {/* Columna 2: Navegación Principal */}
          <Col lg={2} md={6} sm={6}>
            <h6 className={styles.sectionTitle}>Navegación</h6>
            <ul className={styles.linkList}>
              <li>
                <Link to="/inicio" className={styles.footerLink}>Inicio</Link>
              </li>
              <li>
                <Link to="/catalogo" className={styles.footerLink}>Catálogo</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className={styles.footerLink}>Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className={styles.footerLink}>Contacto</Link>
              </li>
            </ul>
          </Col>

          {/* Columna 3: Accesos de Compra */}
          <Col lg={2} md={6} sm={6}>
            <h6 className={styles.sectionTitle}>Compras</h6>
            <ul className={styles.linkList}>
              <li>
                <Link to="/carrito" className={styles.footerLink}>Mi Carrito</Link>
              </li>
              <li>
                <Link to="/contacto" className={styles.footerLink}>Soporte</Link>
              </li>
            </ul>
          </Col>

          {/* Columna 4: Newsletter */}
          <Col lg={4} md={6}>
            <h6 className={styles.sectionTitle}>Novedades</h6>
            <p className={styles.description}>
              Suscríbete para recibir ofertas exclusivas y enterarte de los últimos estrenos.
            </p>
            <Form onSubmit={handleSubscribe}>
              <Form.Group className="d-flex gap-2" controlId="footerEmailInput">
                <Form.Control 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  size="sm"
                />
                <Button variant="primary" type="submit" size="sm">
                  Suscribirme
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* Barra Inferior: Copyright y Métodos de Pago */}
        <Row className={`mt-4 pt-3 ${styles.bottomBorder} align-items-center`}>
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} UnaMovies. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <FaCcVisa className={styles.paymentIcon} title="Visa" />
              <FaCcMastercard className={styles.paymentIcon} title="Mastercard" />
              <FaCcPaypal className={styles.paymentIcon} title="PayPal" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;