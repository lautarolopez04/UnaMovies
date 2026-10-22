import React from 'react'
import productos from "../data/productos"
import { useParams, Link } from 'react-router-dom'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'

function ProductoDetalles() {
  const {id} = useParams();
  const pelicula = productos.find((pelicula)=>pelicula.id == Number(id))

  return (
    <Container className="py-5 text-light">
      <Link to="/catalogo" className="btn btn-outline-secondary mb-4"> Volver </Link>
      <Row className="align-items-center bg-dark p-4 rounded-4 border border-secondary shadow">  

      <Col md={6} className="text-center mb-4 mb-md-0">
        <img src={pelicula.imagen} alt={pelicula.nombre} className="img-fluid rounded-3 shadow" style={{maxHeight: '400px', objectFit: 'cover', width: '100%'}}></img>
      </Col>

      <Col md={6} className="columnaDerecha">
        <Badge bg="danger" className="mb-2 text-uppercase px-3 py-2"> {pelicula.categoria} </Badge>
        <h2 className="fw-bold mb-3">{pelicula.nombre}</h2>
        <h3 className="text-danger fw-bold mb-3">${pelicula.precio}</h3>
        <p className="text-secondary mb-4">{pelicula.descripción}</p>
        <p className="mb-4"> <strong>Disponibles:</strong> {pelicula.stock}</p>       
        <Button variant="danger">Agregar al carrito</Button>
      </Col>
      </Row>
    </Container>
  )
}

export default ProductoDetalles