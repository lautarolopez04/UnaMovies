import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import SobreNosotros from './pages/SobreNosotros';
import ProductoDetalles from './pages/ProductoDetalles';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import useCarrito from './logica/useCarrito';
import './App.css';

function App() {
  const { carrito, agregarAlCarrito } = useCarrito();
 //PASE LA LOGICA A USE CARRITO.
  //useEffect(() => {
  //  document.title = `Carrito: ${cartCount}`
  //}, [cartCount])

  return (
    <BrowserRouter>
      <Navbar carrito={carrito} />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Home />} />
        <Route
          path="/catalogo"
          element={<Catalogo agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/producto/:id"
          element={<ProductoDetalles agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/carrito"
          element={<Carrito carrito={carrito} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;