import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Alert, Container } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";
import { CiCircleAlert } from "react-icons/ci";

function Carrito({ carrito }) {

  return (
    <Container className="py-3">
      <h2 className="text-light fw-bold mb-3"> Productos <FiShoppingCart /> </h2>

      {carrito.length === 0 ? ( 
      <div>
        <Alert variant="light">
          <CiCircleAlert /> El carrito de compras está vacío 
        </Alert> 
        <Button variant="secondary" as={Link} to="/catalogo">Ir al catálogo</Button>  
      </div>
      ) : ( 
      <div>
        <div>
          {carrito.map((producto) => (
          <div key={producto.id} className="bg-dark p-3 mb-4 rounded border border-light d-flex align-items-center justify-content-between">
            <img src={producto.imagen} classname="rounded shadow-sm" style={{width:"7rem", height:"4rem"}}></img>
            <div>
              <p className="mb-1 fw-bold">{producto.nombre}</p>
              <p className="mb-1">{producto.precio}</p>
            </div> 
            <div className="d-flex align-items-center gap-6 border border-secondary rounded px-2 py-2 bg-dark">
              <Button variant="light">-</Button>
                <span className="text-light fw-bold px-2">.</span>
              <Button variant="light">+</Button>
            </div>
          </div>
          ))}
        </div> 
        <div>
          <h3>RESUMEN DE LA COMPRA</h3>
          <p>Cantidad de productos: </p>
          <p>Total a pagar: </p>
        </div>
        <Button variant="secondary" as={Link} to="/catalogo">Agregar más productos</Button>        
      </div>
    )}        
    </Container>
  );
}

export default Carrito