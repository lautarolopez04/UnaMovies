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
    const carritoActualizado = carrito.map((pelicula) =>
      producto.id === pelicula.id
        ? productoActualizado
        : pelicula
    );

/*deje el mensaje que estaba en app */
    setCarrito([...carrito, producto]);
    alert("Agregado con éxito");
  };

  return { carrito, agregarAlCarrito };
}

export default useCarrito;