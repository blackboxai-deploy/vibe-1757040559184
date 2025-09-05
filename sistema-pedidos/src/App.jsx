import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import HomeRedirector from "./pages/Home/HomeRedirector";
import HomeUsuario from "./pages/Home/Home";
import HomeAdmin from "./pages/Home/HomeAdmin";
import Elaboracion from "./pages/Elaboracion/Elaboracion";
import 'bootstrap-icons/font/bootstrap-icons.css';
import NuevoPedido from "./pages/NuevoPedido/NuevoPedido";
import VerPedido from "./pages/Ver Pedido/VerPedido";
import { PedidoProvider } from "./context/PedidoContext";

function App() {
  return (
    <PedidoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomeRedirector />
              </PrivateRoute>
            }
          />
          <Route
            path="/Home/Home"
            element={
              <PrivateRoute>
                <HomeUsuario />
              </PrivateRoute>
            }
          />
          <Route
            path="/Home/HomeAdmin"
            element={
              <PrivateRoute>
                <HomeAdmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/elaboracion"
            element={
              <PrivateRoute>
                <Elaboracion />
              </PrivateRoute>
            }
          />
          <Route
            path="/nuevo"
            element={
              <PrivateRoute>
                <NuevoPedido />
              </PrivateRoute>
            }
          />
          <Route
            path="/verpedidos"
            element={
              <PrivateRoute>
                <VerPedido />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </PedidoProvider>
  );
}

export default App;
