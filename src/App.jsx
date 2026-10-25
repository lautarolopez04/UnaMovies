import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import SobreNosotros from './pages/SobreNosotros';
import ProductoDetalles from './pages/ProductoDetalles';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import './App.css';

import useCarrito from './logica/useCarrito';

function App() {
  
  const { 
    carrito, 
    agregarAlCarrito, 
    sumarCantidad, 
    restarCantidad, 
    eliminarProducto,
    vaciarCarrito
  } = useCarrito();

  return (
    <BrowserRouter>
      {/* Le pasamos la longitud del carrito al Navbar */}
      <Navbar cantidadCarrito={carrito.length}/>
      
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Home />} />
        
        {/* Pasamos agregarAlCarrito al Catálogo y a Detalles */}
        <Route path="/catalogo" element={<Catalogo agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<ProductoDetalles agregarAlCarrito={agregarAlCarrito} />} />
        
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto vaciarCarrito={vaciarCarrito} carrito={carrito} />} />
        
        {/* Pasamos el estado y las funciones modificadoras al Carrito */}
        <Route 
            path="/carrito" 
            element={
                <Carrito 
                    carrito={carrito}
                    sumarCantidad={sumarCantidad}
                    restarCantidad={restarCantidad}
                    eliminarProducto={eliminarProducto}
                />
            }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;