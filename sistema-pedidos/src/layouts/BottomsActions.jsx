import { useNavigate } from "react-router-dom";

export default function BottomActions({ showBack = false, onBack }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="salir-container">
      {showBack && (
        <button className="btn-volver" onClick={handleBack}>
          <i className="bi bi-arrow-left"></i>
        </button>
      )}
      <button className="btn-sec" onClick={() => navigate("/config")}>
        <i className="bi bi-gear-fill"></i>
      </button>
      <button className="btn-sec" onClick={handleLogout}>
        <i className="bi bi-box-arrow-right"></i>
      </button>
    </div>
  );
}
