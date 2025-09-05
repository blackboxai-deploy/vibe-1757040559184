import "./Elaboracion.css";
import { useNavigate } from "react-router-dom";
import "../Home/Home.jsx"; // Importar estilos de Home.css
import Navbar from "../../layouts/Navbar.jsx";  
import BottomActions from "../../layouts/BottomsActions.jsx";

export default function Elaboracion() {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      <Navbar />

      <div className="botones-grid">
        <button onClick={() => navigate("/nuevo")} className="circle-btn">PANADERIA</button>
        <button onClick={() => navigate("/ver")} className="circle-btn">SANDWICHERIA</button>
        <button onClick={() => navigate("/elaboracion")} className="circle-btn">PASTELERIA</button>
      </div>

      <BottomActions showBack={true} />
    </div>
  );
}
