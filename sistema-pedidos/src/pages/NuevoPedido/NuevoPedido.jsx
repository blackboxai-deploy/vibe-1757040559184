import { Box, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import BottomActions from "../../layouts/BottomsActions";
import Paso1 from "./Paso1";
import Paso2 from "./Paso2";
import Paso3 from "./Paso3";
import "./NuevoPedido.css";
import { usePedido } from "../../context/PedidoContext";

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: 'var(--brot-gold)',
  border: '4px solid var(--brot-black)',
  borderRadius: '9rem',
  margin: '2rem 5rem',
  padding: '4rem',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'auto', // scroll interno si es necesario

}));

export default function NuevoPedido() {
  const navigate = useNavigate();
  const { 
    pedidoData, 
    pasoActual, 
    setPasoActual, 
    resetPedido,
    updatePedidoData 
  } = usePedido();

  const avanzar = () => setPasoActual(p => Math.min(p + 1, 3));
  const retroceder = () => setPasoActual(p => Math.max(p - 1, 1));
  const handleEditStep = (step) => setPasoActual(step);

  const handleBorrarPedido = () => {
    resetPedido();
  };

  const handleBackNavigation = () => {
    // Verificar si hay datos del pedido
    const hasOrderData = pedidoData.cliente || 
                        pedidoData.fechaEntrega || 
                        (pedidoData.productos && pedidoData.productos.length > 0);

    if (hasOrderData) {
      const confirmar = window.confirm(
        "¿Estás seguro que quieres salir? Se perderá todo el pedido que has armado hasta el momento."
      );
      
      if (confirmar) {
        resetPedido();
        navigate(-1);
      }
      // Si no confirma, no hace nada (se queda en la página actual)
    } else {
      // Si no hay datos, navegar directamente
      navigate(-1);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'var(--brot-gold-dark)',
      py: 4
    }}>
      <Navbar />

      <StyledPaper elevation={3}>
        {pasoActual === 1 && (
          <Paso1 
            formData={pedidoData} 
            setFormData={updatePedidoData} 
            onNext={avanzar} 
          />
        )}
        {pasoActual === 2 && (
          <Paso2 
            formData={pedidoData} 
            setFormData={updatePedidoData} 
            onNext={avanzar} 
            onBack={retroceder} 
          />
        )}
        {pasoActual === 3 && (
          <Paso3 
            formData={pedidoData} 
            onBack={handleBorrarPedido} 
            onEditStep={handleEditStep} 
          />
        )}
      </StyledPaper>

      <BottomActions showBack={true} onBack={handleBackNavigation} />
    </Box>
  );
}
