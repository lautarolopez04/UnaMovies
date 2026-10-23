import React from 'react';
import productos from '../data/productos';
import { Card } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Catalogo = ({ agregarAlCarrito }) => {
  return (
    <div className="container text-light mt-5">
      <h2 className="text-danger fw-bold mb-3">🎬 Catálogo de Películas</h2>
      <p className="lead text-secondary">

      </p>
      <hr className="border-secondary" />
      {/*Aca pondria una cards con las pelis*/}
      <Row className="g-4">
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} md={6} lg={4}>
            <Card className="h-100 bg-dark text-light rounded-4 p-3">
              <img
                className="img-fluid w-100"
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                  height: "200px",
                  objectFit: "cover"
                }}
              />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Card.Text>Categoria: {producto.categoria}</Card.Text>
                <Card.Text>
                  {producto.stock > 0
                    ? `Stock: ${producto.stock}`
                    : "Sin stock"}
                </Card.Text>
                <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
                <Button
                  variant="secondary"
                  size="sm"
                  className="ms-2"
                  disabled={producto.stock === 0}
                  onClick={() => {
                    console.log("Película seleccionada:", producto.nombre);
                    agregarAlCarrito(producto);
                  }}
                >
                  🛒 Carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Catalogo;
