import { useState } from 'react';

function useCarrito() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarToast, setMostrarToast] = useState(false);
  const [productoToast, setProductoToast] = useState('');

  const agregarAlCarrito = (producto) => {
    const cantidadA_Agregar = producto.cantidad || 1;
    const existente = carrito.find(pelicula => pelicula.id === producto.id);

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
      const nuevoCarrito = carrito.map(item => 
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
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