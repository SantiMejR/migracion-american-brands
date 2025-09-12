import React from 'react';
import '../styles/CarritoCompras.css';

const CarritoCompras = ({ carrito, visible, onClose, onRemove, onCheckout }) => {
  if (!visible) return null;

  return (
    <div className="carrito-panel">
      <div className="carrito-header">
        <h2>Carrito de Compras</h2>
        <button className="cerrar-carrito" onClick={onClose}>×</button>
      </div>
      <div className="carrito-body">
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {carrito.map((item, idx) => (
              <li key={idx} className="carrito-item">
                <img src={item.imagen} alt={item.titulo} width={60} />
                <div className="carrito-info">
                  <span className="carrito-titulo">{item.titulo}</span>
                  <span className="carrito-descripcion">{item.descripcion}</span>
                  <span className="carrito-precio">${item.precio}</span>
                </div>
                <button className="carrito-quitar" onClick={() => onRemove(idx)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {carrito.length > 0 && (
        <button className="carrito-checkout" onClick={onCheckout}>
          Realizar compra
        </button>
      )}
    </div>
  );
};

export default CarritoCompras;