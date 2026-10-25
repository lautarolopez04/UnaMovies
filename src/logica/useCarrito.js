import { useState } from 'react';
/*falta  ver que no se dupliquen y pulir mas cosas */
function useCarrito() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find(
      pelicula => pelicula.id === producto.id
    );
/*lo que esta arriba estaba en APP. */

/*este ternario es para ver si hay una peli del mismo y suma uno mas
manteniendo el dato anerior, si no pone 1  */
    const nuevaCantidad = existente
      ? existente.cantidad + 1
      : 1;
/*mantiene lo de producto solo agregue una nueva propiedad */
    const productoActualizado = {
      ...producto,
      cantidad: nuevaCantidad
    };
/*actualiza el carrito en caso que ya tuviera si no agrega
su primer pelki */
    
    // CORRECCIÓN: Si existe, mapeamos el array. Si no, le agregamos el productoActualizado al final.
    const carritoActualizado = existente 
        ? carrito.map((pelicula) => producto.id === pelicula.id ? productoActualizado : pelicula)
        : [...carrito, productoActualizado];

/*deje el mensaje que estaba en app */
    setCarrito(carritoActualizado);
    alert("Agregado con éxito");
  };

  // FUNCIONES AGREGADAS

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

  // Exportamos todas las funciones para que App.jsx pueda consumirlas
  return { 
      carrito, 
      agregarAlCarrito, 
      sumarCantidad, 
      restarCantidad, 
      eliminarProducto, 
      vaciarCarrito 
  };
}

export default useCarrito;