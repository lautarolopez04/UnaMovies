import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { CiCircleAlert } from "react-icons/ci";

function Carrito({ carrito = [], sumarCantidad, restarCantidad, eliminarProducto }) {

  const cantidadTotal = carrito.reduce((acum, item) => acum + item.cantidad, 0);
  const totalGeneral = carrito.reduce((acum, item) => acum + (item.precio * item.cantidad), 0);

  return (
    <Container className="py-5">
      <h2 className="text-light fw-bold mb-4"> <FiShoppingCart /> Tu Carrito</h2>

      {carrito.length === 0 ? (
        <div className="text-center mt-5">
          <Alert variant="dark" className="border border-secondary text-light bg-dark">
            <CiCircleAlert size={24} className="me-2"/> El carrito de compras está vacío.
          </Alert>
          <Button variant="danger" as={Link} to="/catalogo" className="mt-3">Ir al catálogo</Button>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            {carrito.map((producto) => (
              <div key={producto.id} className="bg-dark p-3 mb-3 rounded border border-secondary d-flex flex-column flex-md-row align-items-center justify-content-between text-light">
                <div className="d-flex align-items-center mb-3 mb-md-0">
                    <img src={producto.imagen} alt={producto.nombre} className="rounded shadow-sm me-3" style={{ width: "80px", height: "120px", objectFit: "cover" }} />
                    <div>
                    <h5 className="mb-1 fw-bold">{producto.nombre}</h5>
                    <p className="mb-0 text-secondary">Precio unitario: ${producto.precio}</p>
                    <p className="mb-0 fw-bold text-danger mt-1">Subtotal: ${producto.precio * producto.cantidad}</p>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2 border border-secondary rounded px-2 py-1 bg-dark">
                    <Button variant="outline-light" size="sm" onClick={() => restarCantidad(producto.id)}>-</Button>
                    <span className="text-light fw-bold px-2">
                      {producto.cantidad}
                    </span>
                    <Button variant="outline-light" size="sm" onClick={() => sumarCantidad(producto.id)}>+</Button>
                  </div>
                  <Button variant="outline-danger" size="sm" onClick={() => eliminarProducto(producto.id)}>
                      <FiTrash2 />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline-secondary" as={Link} to="/catalogo" className="mt-2">Agregar más productos</Button>
          </Col>

          <Col md={4}>
             <Card className="bg-dark text-light border-secondary">
                <Card.Body>
                    <Card.Title className="mb-4 text-center border-bottom border-secondary pb-2">RESUMEN DE LA COMPRA</Card.Title>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Cantidad de productos:</span>
                        <span className="fw-bold">{cantidadTotal}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-4 fs-5 text-danger">
                        <span>Total a pagar:</span>
                        <span className="fw-bold">${totalGeneral}</span>
                    </div>
                    <Button variant="danger" className="w-100" as={Link} to="/contacto">
                        Finalizar Compra
                    </Button>
                </Card.Body>
             </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Carrito;