import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import BottomActions from "../../layouts/BottomsActions";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => () => navigate(path);

  return (
    <div className="home-container">
      <Navbar />

      <div className="grid-actions">
        {[
          { icon: <i class="bi bi-cart-plus"></i>, label: "Nuevo pedido", path: "../nuevo" },
          { icon: null, label: "Ver pedidos", path: "/verpedidos" },
          { icon: null, label: "Elaboración", path: "../Elaboracion" }
        ].map(({ label, path, icon }) => (
          <button key={label} onClick={handleNavigation(path)} className="action-btn">
            {icon && <span className="icon">{icon}</span>}
            {label}
          </button>

        ))}
      </div>


      <BottomActions showBack={false} />
    </div>
  );
}
