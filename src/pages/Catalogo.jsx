import React, { useState } from 'react';
import productos from '../data/productos';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { MdMovieFilter } from "react-icons/md";

const Catalogo = ({ agregarAlCarrito }) => {
  const [busqueda, setBusqueda] = useState('');
  
  const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container text-light mt-5">
      <div className="d-flex flex-column align-items-center mb-4">
        <h2 className="text-danger fw-bold mb-3"><MdMovieFilter /> Catálogo de Películas</h2>
        
        <div className="d-flex w-50">
          <Form.Control
            type="text"
            placeholder="¿Qué película estás buscando?"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="bg-dark text-light border-secondary shadow-sm"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          />
          <Button variant="danger" className="px-4 fw-bold" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            Buscar
          </Button>
        </div>
      </div>

      <hr className="border-secondary" />

      <Row className="g-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Col key={producto.id} xs={12} md={6} lg={4}>
              <Card className="h-100 bg-dark text-light rounded-4 p-3 shadow">
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
                  <Button as={Link} to={`/producto/${producto.id}`} variant="outline-light">Ver detalle</Button>               
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    disabled={producto.stock === 0}
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    <FiShoppingCart /> {producto.stock > 0 ? 'Agregar' : 'Agotado'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12} className="text-center mt-5">
            <h4 className="text-secondary">No encontramos películas con ese nombre.</h4>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Catalogo;