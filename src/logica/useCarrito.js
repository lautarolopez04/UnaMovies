import { useState } from 'react';

function useCarrito() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarToast, setMostrarToast] = useState(false);
  const [productoToast, setProductoToast] = useState('');

  const agregarAlCarrito = (producto) => {
  const cantidadA_Agregar = producto.cantidad || 1;
  const existente = carrito.find(pelicula => pelicula.id === producto.id);

  // 1. Calculamos cuánto tiene sumado actualmente en el carrito
  const cantidadActualEnCarrito = existente ? existente.cantidad : 0;

  // 2. VALIDACIÓN: Si la suma supera el stock disponible, frenamos la ejecución
  if (cantidadActualEnCarrito + cantidadA_Agregar > producto.stock) {
    return; // Sale de la función sin actualizar el carrito ni mostrar el Toast
  }

  // --- Tu código original queda exactamente igual hacia abajo ---
  let carritoActualizado;
  if (existente) {
    carritoActualizado = carrito.map(pelicula => 
      pelicula.id === producto.id 
        ? { ...pelicula, cantidad: pelicula.cantidad + cantidadA_Agregar }
        : pelicula
    );
  } else {
    carritoActualizado = [...carrito, { ...producto, cantidad: cantidadA_Agregar }];
  }

  setCarrito(carritoActualizado);
  setProductoToast(producto.nombre);
  setMostrarToast(true);
  setTimeout(() => setMostrarToast(false), 3000);
};

  const sumarCantidad = (id) => {
  setCarrito((prevCarrito) =>
    prevCarrito.map((item) => {
      if (item.id === id) {
        // Si al sumar 1 supera su stock total, mantiene la cantidad actual
        if (item.cantidad + 1 > item.stock) {
          return item;
        }
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    })
  );
};

  const restarCantidad = (id) => {
      const nuevoCarrito = carrito.map(item => 
          item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
      );
      setCarrito(nuevoCarrito);
  };

  const eliminarProducto = (id) => {
      const nuevoCarrito = carrito.filter(item => item.id !== id);
      setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
      setCarrito([]);
  }

 
  const cantidadTotalItems = carrito.reduce((acum, item) => acum + item.cantidad, 0);

  return { 
      carrito, 
      agregarAlCarrito, 
      sumarCantidad, 
      restarCantidad, 
      eliminarProducto, 
      vaciarCarrito,
      mostrarToast,
      setMostrarToast,
      productoToast,
      cantidadTotalItems
  };
}

export default useCarrito;