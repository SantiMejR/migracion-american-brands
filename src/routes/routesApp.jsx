import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Dama from "../pages/Dama.jsx";
import Caballero from "../pages/Caballero.jsx";
import Marca from "../pages/Marca.jsx";
import Nuevo from "../pages/Nuevo.jsx";
import Ofertas from "../pages/Ofertas.jsx";
import Basico from "../pages/Basico.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import CarritoCompras from "../components/CarritoCompras.jsx";
import Header from "../components/Header.jsx";

export default function RoutesApp() {
  const [carrito, setCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setCarritoVisible(true);
  };

  const quitarDelCarrito = (idx) => {
    setCarrito(carrito.filter((_, i) => i !== idx));
  };

  const mostrarCarrito = () => setCarritoVisible(true);
  const cerrarCarrito = () => setCarritoVisible(false);

  const realizarCompra = () => {
    alert('¡Compra realizada!');
    setCarrito([]);
    setCarritoVisible(false);
  };

  return (
    <Router>
      <Header onCarritoClick={mostrarCarrito} carritoCount={carrito.length} />
      <CarritoCompras
        carrito={carrito}
        visible={carritoVisible}
        onClose={cerrarCarrito}
        onRemove={quitarDelCarrito}
        onCheckout={realizarCompra}
      />
      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/dama" element={<Dama />} />
        <Route path="/caballero" element={<Caballero />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/nuevo" element={<Nuevo />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/basico" element={<Basico />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  );
}