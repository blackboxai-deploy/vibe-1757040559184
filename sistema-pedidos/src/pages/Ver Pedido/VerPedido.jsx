import React, { useState } from "react";
import Navbar from "../../layouts/Navbar";
import BottomActions from "../../layouts/BottomsActions";
import logo from "../../assets/logo.png";
import "../NuevoPedido/NuevoPedido.css";
import "./VerPedido.css";

const pedidosMock = {
  "2024-06-01": [
    { id: 1, nombre: "Juan Pérez", detalles: "Pan integral, 2kg" },
    { id: 2, nombre: "Ana López", detalles: "Pan blanco, 1kg" },
    { id: 3, nombre: "Carlos Ruiz", detalles: "Pan de centeno, 3kg" },
  ],
  "2024-06-02": [
    { id: 4, nombre: "María Gómez", detalles: "Pan de avena, 1kg" },
    { id: 5, nombre: "Pedro Díaz", detalles: "Pan de maíz, 2kg" },
  ],
};

function getNextDate(dateStr, dir = 1) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + dir);
  return d.toISOString().slice(0, 10);
}

const VerPedido = () => {
  const [fecha, setFecha] = useState("2024-06-01");
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const pedidos = pedidosMock[fecha] || [];

  const handleFechaChange = (dir) => {
    setPedidoSeleccionado(null);
    setFecha((prev) => getNextDate(prev, dir));
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--brot-gold-dark)', padding: '2rem 0' }}>
      <Navbar />
      <div className="form-container">
        <div className="pedido-box" style={{ width: '100%', maxWidth: 1000 }}>
          <h2 className="pedido-titulo">Pedidos</h2>
          <div className="verpedido-content">
            <div className="verpedido-list-section">
              <div className="verpedido-date-nav">
                <button onClick={() => handleFechaChange(-1)} className="arrow-btn">&#8592;</button>
                <span className="verpedido-date">{fecha}</span>
                <button onClick={() => handleFechaChange(1)} className="arrow-btn">&#8594;</button>
              </div>
              <div className="verpedido-list-scroll">
                {pedidos.length === 0 ? (
                  <div className="verpedido-empty">No hay pedidos</div>
                ) : (
                  pedidos.map((pedido) => (
                    <div key={pedido.id} className="verpedido-item">
                      <span>{pedido.nombre}</span>
                      <div className="verpedido-actions">
                        <button onClick={() => setPedidoSeleccionado(pedido)} className="verpedido-view">&#10003;</button>
                        <button className="verpedido-cancel">&#10005;</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="verpedido-detail-section">
              {pedidoSeleccionado ? (
                <div className="verpedido-detail-card">
                  <div className="verpedido-detail-header">
                    <span>Pedido de {pedidoSeleccionado.nombre}</span>
                    <button onClick={() => setPedidoSeleccionado(null)} className="verpedido-detail-close">&#10005;</button>
                  </div>
                  <div className="verpedido-detail-body">
                    <p>{pedidoSeleccionado.detalles}</p>
                  </div>
                  <button onClick={() => setPedidoSeleccionado(null)} className="verpedido-detail-back">&#8592;</button>
                </div>
              ) : (
                <div className="verpedido-logo-card">
                  <img src={logo} alt="logo" className="verpedido-logo" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomActions showBack={true} />
    </div>
  );
};

export default VerPedido;
