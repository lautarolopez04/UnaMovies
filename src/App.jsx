import { useState } from 'react'
import './App.css'
import Inicio from './pages/inicio.jsx'
import Productos from './pages/productos.jsx'
import ProductoDetalles from './pages/productoDetalles.jsx'
import Carrito from './pages/carrito.jsx'
import Contacto from './pages/contacto.jsx'
import NotFound from './pages/notFound.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import { Routes, Route } from 'react-router'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle-producto" element={<ProductoDetalles/>} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
      
  )
}

export default App;
