import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../utils/jwtDecode";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [saludo, setSaludo] = useState("BUENOS DÍAS");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return navigate("/login");

    const decoded = decodeToken(token);
    if (decoded) {
      setUsuario(decoded.username || "Usuario");
      const hora = new Date().getHours();
      setSaludo(hora < 16 ? "BUENOS DÍAS" : "BUENAS TARDES");

      const hoy = new Date().toLocaleDateString("es-AR");
      setFecha(hoy.toUpperCase());
    }
  }, []);

  return (
    <div className="home-header">
      <img src={logo} alt="Logo Brot" className="logo-home" />
      <p className="bienvenida">¡{saludo}, {usuario.toUpperCase()}!</p>
      <p className="fecha">{fecha}</p>
    </div>
  );
}
