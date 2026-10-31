import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import SobreNosotros from './pages/SobreNosotros';
import ProductoDetalles from './pages/ProductoDetalles';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import './App.css';
import Footer from './components/Footer';
import useCarrito from './logica/useCarrito';

import { Toast, ToastContainer, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  const { 
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
  } = useCarrito();

  return (
    <BrowserRouter>
     
      <Navbar carrito={carrito} cantidadTotal={cantidadTotalItems} />
      
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999, position: 'fixed' }}>
        <Toast show={mostrarToast} onClose={() => setMostrarToast(false)} bg="dark" delay={3000} autohide>
          <Toast.Header className="bg-dark text-light border-secondary">
            <strong className="me-auto text-success">¡Agregado con éxito!</strong>
          </Toast.Header>
          <Toast.Body className="text-light">
            <p>Se agregó <b>{productoToast}</b> a tu compra.</p>
            <Button as={Link} to="/carrito" variant="outline-danger" size="sm" onClick={() => setMostrarToast(false)}>
              Ver carrito
            </Button>
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Home />} />
        
        <Route path="/catalogo" element={<Catalogo agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<ProductoDetalles agregarAlCarrito={agregarAlCarrito} />} />
        
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto vaciarCarrito={vaciarCarrito} carrito={carrito} />} />
        
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
      <Footer/>
    </BrowserRouter>
  );
}

export default App;