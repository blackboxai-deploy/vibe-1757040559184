import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthServices";
import TextInput from "../components/TextInput";
import "./Login.css";
import logo from "../assets/logo.png";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(form.username, form.password);
    if (!result.success) return setError(result.message);

    sessionStorage.setItem("token", result.token);
    navigate("/home");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <img src={logo} alt="Logo Brot" className="login-logo" />
        <TextInput
          label="Usuario"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <TextInput
          label="Contraseña"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {error && <div className="error">{error}</div>}

        <button type="submit" className="btn-login">Iniciar sesión</button>
      </form>
    </div>
  );
}
