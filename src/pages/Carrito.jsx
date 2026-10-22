import React from 'react';
import { useState, useEffect } from 'react';

function Carrito() {
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
    </div>
  )
}

export default Carrito