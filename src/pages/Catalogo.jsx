import React, { useState } from 'react';
import productos from '../data/productos';
import { Card, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch } from "react-icons/fi";

const Catalogo = ({ agregarAlCarrito }) => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [ordenPrecio, setOrdenPrecio] = useState('');


  const categorias = [...new Set(productos.map(p => p.categoria))];


  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === '' || producto.categoria === categoriaSeleccionada;
    return coincideNombre && coincideCategoria;
  });

  const productosFinales = [...productosFiltrados].sort((a, b) => {
    if (ordenPrecio === 'asc') return a.precio - b.precio;
    if (ordenPrecio === 'desc') return b.precio - a.precio;
    return 0;
  });

  return (
    <div className="container text-light mt-5 pb-5">
      <div className="d-flex flex-column align-items-center mb-4">
        <h2 className="text-danger fw-bold mb-4">🎬 Catálogo de Películas</h2>
        <Row className="w-100 justify-content-center mb-3">
          <Col md={8} lg={6}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Buscar por película..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="bg-dark text-light border-secondary shadow-none"
              />
              <Button variant="danger" className="d-flex align-items-center justify-content-center px-3">
                <FiSearch size={18} />
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Row className="w-100 justify-content-center g-3">
          <Col md={4} lg={3}>
            <Form.Select
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              className="bg-dark text-light border-secondary shadow-none"
            >
              <option value="">Filtrar por categoría...</option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Form.Select>
          </Col>

          <Col md={4} lg={3}>
            <Form.Select
              value={ordenPrecio}
              onChange={(e) => setOrdenPrecio(e.target.value)}
              className="bg-dark text-light border-secondary shadow-none"
            >
              <option value="">Ordenar por precio...</option>
              <option value="asc"> Menor a mayor</option>
              <option value="desc">  Mayor a menor</option>
            </Form.Select>
          </Col>
        </Row>
      </div>

      <hr className="border-secondary my-4" />

      <Row className="g-4">
        {productosFinales.length > 0 ? (
          productosFinales.map((producto) => (
            <Col key={producto.id} xs={12} md={6} lg={4}>
              <Card className="h-100 bg-dark text-light rounded-4 p-3 shadow border-secondary">
                <img
                  className="img-fluid w-100 rounded-3"
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{producto.nombre}</Card.Title>
                  <Card.Text className="text-danger fw-bold fs-5">${producto.precio}</Card.Text>
                  <Card.Text className="text-secondary small">Categoría: {producto.categoria}</Card.Text>
                  <Card.Text className="small">
                    {producto.stock > 0
                      ? `Stock: ${producto.stock}`
                      : <span className="text-danger fw-bold">Sin stock</span>}
                  </Card.Text>

                  <div className="mt-auto d-flex gap-2">
                    <Button as={Link} to={`/producto/${producto.id}`} variant="outline-light" size="sm" className="w-50">
                      Ver detalle
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="w-50"
                      disabled={producto.stock === 0}
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      <FiShoppingCart /> {producto.stock > 0 ? 'Agregar' : 'Agotado'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12} className="text-center mt-5">
            <h4 className="text-secondary">No encontramos películas con esos filtros.</h4>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Catalogo;