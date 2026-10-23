import React from 'react';
import { useState, useEffect } from 'react';

function Carrito({ carrito }) {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    document.title = `Carrito: ${cartCount}`
  }, [cartCount])

  return (
    <div>
      <h2> Productos del carrito:</h2>
      <button onClick={() => setCartCount(cartCount + 1)}>
        Agregar producto
      </button>
      {carrito.map((producto) => (
        <div key={producto.id}>
          <p>{producto.nombre}</p>
          <p>{producto.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Carrito