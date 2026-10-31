import React, { useState } from 'react'
import productos from "../data/productos"
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'

function ProductoDetalles({ agregarAlCarrito }) {
  const { id } = useParams();
  const pelicula = productos.find((pelicula) => pelicula.id == Number(id))  
  
  
  const [contador, setContador] = useState(pelicula.stock > 0 ? 1 : 0)

  const incrementar = () => { if (contador < pelicula.stock) setContador(contador + 1) }
  const eliminar = () => { if (contador > 1) setContador(contador - 1) }

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
          
          
          <p className="mb-4">
            <strong>Disponibles:</strong> {pelicula.stock > 0 ? pelicula.stock : <span className="text-danger"> Sin stock </span>}
          </p>      
          
          <div className="d-flex align-items-center gap-3">
            
            <Button 
  variant={pelicula.stock > 0 ? "danger" : "secondary"} 
  disabled={pelicula.stock === 0}
  onClick={() => {
    agregarAlCarrito({...pelicula, cantidad: contador});
  }}
>
  {pelicula.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
</Button>

           
            {pelicula.stock > 0 && (
              <div className="d-flex align-items-center gap-2 border border-secondary rounded px-2 py-1 bg-dark">
                <Button variant="light" onClick={eliminar}>-</Button>
                <span className="text-light fw-bold px-2">{contador}</span>
                <Button variant="light" onClick={incrementar}>+</Button>
              </div>
            )}
          </div>             
        </Col>
      </Row>
    </Container>
  )
}

export default ProductoDetalles;