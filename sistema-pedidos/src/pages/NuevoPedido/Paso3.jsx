import "./Paso3.css"
import { usePedido } from "../../context/PedidoContext";
import { useNavigate } from "react-router-dom";

export default function Paso3({ formData, onBack, onEditStep }) {
  const { resetPedido } = usePedido();
  const navigate = useNavigate();
  const listaProductos = formData.productos || [];

  const handleConfirmarPedido = () => {
    // Aquí puedes agregar la lógica para enviar el pedido al servidor
    console.log("Pedido confirmado:", formData);
    alert("¡Pedido confirmado exitosamente!");
    resetPedido();
    navigate("/home"); // Cambia '/home' si tu lobby es otra ruta
  };

  return (
    <div className="pedido-box">
      <h2 className="pedido-titulo">Resumen del pedido</h2>

      <div className="resumen">
        <div className="bloque-resumen">
          <div className="resumen-header">
            <h3>Detalles del pedido</h3>
            <button className="btn-editar-paso" onClick={() => onEditStep(1)}>✏️ Editar</button>
          </div>
          <p><strong>Cliente:</strong> {formData.cliente}</p>
          <p><strong>Fecha de entrega:</strong> {formData.fechaEntrega ? new Date(formData.fechaEntrega).toLocaleDateString('es-AR') : 'No especificada'}</p>
        </div>

        <div className="bloque-resumen">
          <div className="resumen-header">
            <h3>Productos del pedido</h3>
            <button className="btn-editar-paso" onClick={() => onEditStep(2)}>✏️ Editar</button>
          </div>
          <ul className="resumen-lista-productos">
            {listaProductos.length > 0 ? (
              listaProductos.map((p, index) => (
                <li key={index} className="resumen-producto-item">
                  {p.tipo === "Paquete" ? (
                    <div>
                      <strong>{p.nombre} (Paquete)</strong>
                      <ul className="resumen-sublista-productos">
                        {p.productos.map((sub, i) => (
                          <li key={i}>{sub.label}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <strong>{p.nombre}</strong> - {p.cantidad} {p.unidad}
                      {p.descripcion && <p className="resumen-descripcion"><em>{p.descripcion}</em></p>}
                    </div>
                  )}
                </li>
              ))
            ) : (
              <p>No se han agregado productos.</p>
            )}
          </ul>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn-form" onClick={onBack}>Borrar pedido</button>
        <button className="btn-form" onClick={handleConfirmarPedido}>Confirmar pedido</button>
      </div>
    </div>
  );
}
