import { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Paso1({ formData, setFormData, onNext }) {
  const hoy = new Date().toLocaleDateString("es-AR");
  const [clientes, setClientes] = useState([]);
  const [mostrarNuevoCliente, setMostrarNuevoCliente] = useState(false);
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: "",
    telefono: "",
    codigo: "",
  });
  const [mostrarBotonNuevoCliente, setMostrarBotonNuevoCliente] = useState(true);

  // 🔄 Cargar clientes al montar
  const cargarClientes = () => {
    fetch("https://localhost:7211/api/Cliente")
      .then((res) => res.json())
      .then((data) =>
        setClientes(
          data.map((c) => ({
            value: c.nombre,
            label: `${c.nombre} (COD : ${c.codigo})`,
          }))
        )
      );
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  const handleAgregarCliente = async () => {
    const clienteNuevo = {
      nombre: nuevoCliente.nombre,
      codigo: nuevoCliente.codigo,
    };

    setMostrarBotonNuevoCliente(false);
    try {
      const response = await fetch("https://localhost:7211/api/Cliente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clienteNuevo),
      });

      if (!response.ok) throw new Error("Error al agregar cliente");

      // ✅ recargar lista + seleccionar el nuevo
      cargarClientes();
      setFormData({ ...formData, cliente: nuevoCliente.nombre });
      setMostrarNuevoCliente(false);
      setNuevoCliente({ nombre: "", codigo: "" });
    } catch (err) {
      console.error("Error:", err);
      alert("No se pudo agregar el cliente.");
    }
  };

  const handleCancelar = () => {
    setMostrarNuevoCliente(false);
    setMostrarBotonNuevoCliente(true);
    setNuevoCliente({ nombre: "", codigo: "" });
  };

  return (
    <div className="pedido-box">
      <h2 className="pedido-titulo">Detalles del pedido</h2>
    
      <div className="input-block">
        <label>Fecha del encargo: {hoy}</label>
      </div>

      <div className="input-block">
        <label>Cliente:</label>
        <Select
          options={clientes}
          placeholder="Buscar cliente..."
          value={
            formData.cliente
              ? { label: formData.cliente, value: formData.cliente }
              : null
          }
          onChange={(option) =>
            setFormData({ ...formData, cliente: option.value })
          }
          className="input-clientes"
          classNamePrefix="react-select"
        />
      </div>

      <div className="input-row">
        <label htmlFor="fechaEntrega">Fecha de entrega:</label>
        <DatePicker
          id="fechaEntrega"
          selected={formData.fechaEntrega}
          onChange={(date) =>
            setFormData({ ...formData, fechaEntrega: date })
          }
          dateFormat="dd/MM/yyyy"
          placeholderText="Seleccionar fecha"
          className="input-fecha"
        />
      </div>

      {mostrarNuevoCliente && (
        <div className="nuevo-cliente-form">
          <div className="input-row">
            <label>Nombre:</label>
            <input
              type="text"
              value={nuevoCliente.nombre}
              onChange={(e) =>
                setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })
              }
            />
          </div>
          <div className="input-row">
            <label>Código:</label>
            <input
              type="text"
              value={nuevoCliente.codigo}
              onChange={(e) =>
                setNuevoCliente({ ...nuevoCliente, codigo: e.target.value })
              }
            />
          </div>

          <div className="btn-row">
            <button className="btn-form" onClick={handleCancelar}>
              <i className="bi bi-x-lg"></i> Cancelar
            </button>
            <button className="btn-form" onClick={handleAgregarCliente}>
              <i className="bi bi-check-lg"></i> Agregar
            </button>
          </div>
        </div>
      )}

      {!mostrarNuevoCliente && (
        <div className="btn-row">
          <button className="btn-form" onClick={() => setMostrarNuevoCliente(true)}>
            <i className="bi bi-plus"></i> Nuevo cliente
          </button>
          <button className="btn-form" onClick={onNext}>
            Siguiente <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      )}


    </div>
  );
}
