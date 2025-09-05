import { createContext, useContext, useState } from 'react';

const PedidoContext = createContext();

export const usePedido = () => {
  const context = useContext(PedidoContext);
  if (!context) {
    throw new Error('usePedido debe ser usado dentro de un PedidoProvider');
  }
  return context;
};

export const PedidoProvider = ({ children }) => {
  const [pedidoData, setPedidoData] = useState({
    cliente: "",
    fechaEntrega: null,
    productos: [],
  });
  
  const [pasoActual, setPasoActual] = useState(1);

  const resetPedido = () => {
    setPedidoData({
      cliente: "",
      fechaEntrega: null,
      productos: [],
    });
    setPasoActual(1);
  };

  const updatePedidoData = (newData) => {
    setPedidoData(prev => ({ ...prev, ...newData }));
  };

  const addProducto = (producto) => {
    setPedidoData(prev => ({
      ...prev,
      productos: [...prev.productos, producto]
    }));
  };

  const updateProducto = (id, updatedProducto) => {
    setPedidoData(prev => ({
      ...prev,
      productos: prev.productos.map(p => p.id === id ? updatedProducto : p)
    }));
  };

  const removeProducto = (id) => {
    setPedidoData(prev => ({
      ...prev,
      productos: prev.productos.filter(p => p.id !== id)
    }));
  };

  const value = {
    pedidoData,
    pasoActual,
    setPasoActual,
    resetPedido,
    updatePedidoData,
    addProducto,
    updateProducto,
    removeProducto,
  };

  return (
    <PedidoContext.Provider value={value}>
      {children}
    </PedidoContext.Provider>
  );
}; 