import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import SobreNosotros from './pages/SobreNosotros';
import ProductoDetalles from './pages/ProductoDetalles';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import { useState } from 'react';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert("Agregado con éxito")//creo que todo esto hay que cambiarlo para que funcione bien el carrito
  };

  //useEffect(() => {
  //  document.title = `Carrito: ${cartCount}`
  //}, [cartCount])

  return (
    <BrowserRouter>
      <Navbar carrito={carrito}/>
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