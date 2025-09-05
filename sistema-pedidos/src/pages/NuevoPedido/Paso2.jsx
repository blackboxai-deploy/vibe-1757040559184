import { useState, useEffect } from "react";
import Select from "react-select";
import UnidadSwitch from '../../components/UnidadSwitch';
import { usePedido } from "../../context/PedidoContext";

export default function Paso2({ formData, setFormData, onNext, onBack }) {
  const { addProducto, updateProducto, removeProducto } = usePedido();
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [productoActual, setProductoActual] = useState(null);
  const [unidad, setUnidad] = useState(null);
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [listaProductos, setListaProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosDisponibles, setProductosDisponibles] = useState([]);
  const [productosEnPaquete, setProductosEnPaquete] = useState([]);
  const [productoParaPaquete, setProductoParaPaquete] = useState(null);
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7211/api/Producto")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  useEffect(() => {
    const idsEnLista = listaProductos.map(p => p.id);
    const disponibles = productos
      .filter(p => !idsEnLista.includes(p.id) || (editandoId !== null && p.id === editandoId))
      .map((p) => ({
        value: p.id,
        label: `${p.nombre} (${p.codigo})`,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
    setProductosDisponibles(disponibles);
  }, [productos, listaProductos, editandoId]);

  useEffect(() => {
    if (formData.productos && Array.isArray(formData.productos)) {
      setListaProductos(formData.productos);
    }
  }, [formData.productos]);

  const agregarProducto = () => {
    if (productoActual?.tipoP === "PaqueteRepo") {
      const nuevoProducto = {
        id: productoActual.id,
        nombre: productoSeleccionado,
        tipo: "Paquete",
        productos: productosEnPaquete,
      };
      if (editandoId !== null) {
        updateProducto(editandoId, nuevoProducto);
      } else {
        addProducto(nuevoProducto);
      }
      resetForm();
    } else {
      if (!productoSeleccionado || cantidad === "") return;

      const nuevoProducto = {
        id: productoActual.id,
        nombre: productoSeleccionado,
        unidad: unidad ?? "Un",
        cantidad,
        descripcion,
      };

      if (editandoId !== null) {
        updateProducto(editandoId, nuevoProducto);
      } else {
        addProducto(nuevoProducto);
      }

      resetForm();
    }
  };

  const eliminarProducto = (id) => {
    removeProducto(id);
  };

  const editarProducto = (p) => {
    if (p.tipo === "Paquete") {
      const productoAEditar = productos.find(prod => prod.id === p.id);
      if (!productoAEditar) return;
  
      setEditandoId(p.id);
      setProductoActual(productoAEditar);
      setProductoSeleccionado(p.nombre);
      setProductosEnPaquete(p.productos || []);
    } else {
      const productoAEditar = productos.find(prod => prod.id === p.id);
      if (!productoAEditar) return;
  
      setEditandoId(p.id);
      setProductoActual(productoAEditar);
      setProductoSeleccionado(p.nombre);
      setCantidad(p.cantidad);
      setDescripcion(p.descripcion || "");
      setUnidad(p.unidad || "Un");
    }
  };

  const resetForm = () => {
    setProductoSeleccionado("");
    setProductoActual(null);
    setCantidad("");
    setDescripcion("");
    setUnidad(null);
    setProductoParaPaquete(null);
    setProductosEnPaquete([]);
    setEditandoId(null);
  };

  const idsEnPaquete = productosEnPaquete.map(p => p.value);
  const opcionesSandwich = productos
    .filter(p => p.nombre?.toUpperCase().startsWith("SAND.") && !idsEnPaquete.includes(p.id))
    .map((p) => ({
      value: p.id,
      label: `${p.nombre} (${p.codigo})`,
    }));

  return (
    <div className="pedido-box pedido-box-grid productos-grid">
      <h2 className="pedido-titulo">Productos</h2>

      <div className="cont-conteiner">
        <div className="columna-formulario">
          <Select
            placeholder="Buscar producto..."
            options={productosDisponibles}
            value={
              productoSeleccionado
                ? productosDisponibles.find(p => p.label === productoSeleccionado)
                : null
            }
            onChange={(option) => {
              const producto = productos.find(p => p.id === option.value);
              setProductoSeleccionado(option.label);
              setProductoActual(producto);
              setCantidad("");
              setDescripcion("");
              setProductosEnPaquete([]);
              if (producto.tipoP === "Unidades") setUnidad("Un");
              else if (producto.tipoP === "Peso") setUnidad("KG");
              else setUnidad(null);
            }}
            className="input-clientes"
            classNamePrefix="react-select"
          />

          {productoActual?.tipoP === "PaqueteRepo" ? (
            <>
              <Select
                placeholder="Agregar Sang de miga"
                options={opcionesSandwich}
                value={productoParaPaquete}
                onChange={(option) => setProductoParaPaquete(option)}
                className="input-sang"
                classNamePrefix="react-select"
              />
              <button className="btn-form" onClick={() => {
                if (productoParaPaquete && !productosEnPaquete.some(p => p.value === productoParaPaquete.value)) {
                  setProductosEnPaquete([...productosEnPaquete, productoParaPaquete]);
                  setProductoParaPaquete(null);
                }
              }}>
                <i className="bi bi-plus"></i> Agregar al paquete
              </button>
            </>
          ) : (
            <>
              <div className="unidades">
                {['Unidades', 'Peso', 'Mix'].includes(productoActual?.tipoP) ? (
                  <UnidadSwitch
                    tipoP={productoActual.tipoP}
                    unidad={unidad}
                    setUnidad={setUnidad}
                  />
                ) : null}
                <input
                  type="number"
                  placeholder="Cantidad/Peso"
                  className="input-cantidad"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </>
          )}

          <div className="btn-row">
            <button className="btn-form" onClick={resetForm}>
              {editandoId !== null ? (
                <><i className="bi bi-x-lg"></i> Cancelar</>
              ) : (
                <><i className="bi bi-arrow-counterclockwise"></i> Reset</>
              )}
            </button>
            <button className="btn-form" onClick={agregarProducto}>
              {editandoId !== null ? <><i className="bi bi-check-lg"></i> Guardar</> : <><i className="bi bi-plus"></i> Agregar</>}
            </button>
          </div>
        </div>

        <div className="columna-lista">
          <h3>{productoActual?.tipoP === "PaqueteRepo" ? "Incluidos en paquete" : "Productos cargados"}</h3>
          {(productoActual?.tipoP === "PaqueteRepo" ? productosEnPaquete : listaProductos).length === 0 && (
            <p>No hay productos aún.</p>
          )}
          {(productoActual?.tipoP === "PaqueteRepo" ? productosEnPaquete : listaProductos).map((p, index) => (
            <div className={`producto-item${editandoId === (p.id || p.value) ? ' producto-item-editando' : ''}`} key={p.tipo === 'Paquete' ? p.id : (p.value ? `${p.value}-${index}`: p.id)}>
              <div className="producto-nombre">{p.label || p.nombre}</div>
              <button className="btn-editar" onClick={() => editarProducto(p)}>✏️</button>
              <button className="btn-eliminar" onClick={() => {
                if (productoActual?.tipoP === "PaqueteRepo") {
                  setProductosEnPaquete(productosEnPaquete.filter(x => x.value !== p.value));
                } else {
                  eliminarProducto(p.id);
                }
              }}><i className="bi bi-x-lg"></i></button>
            </div>
          ))}
        </div>
      </div>

      <div className="botones-inferiores">
        <button className="btn-form" onClick={onBack}><i className="bi bi-arrow-left"></i> Volver</button>
        <button className="btn-form" onClick={onNext}>Confirmar <i className="bi bi-check-lg"></i></button>
      </div>
    </div>
  );
}
