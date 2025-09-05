export async function loginUser(username, password) {
    try {
      const response = await fetch("https://localhost:7211/api/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        return { success: false, message: "Credenciales inválidas" };
      }
  
      const data = await response.json();
      return {
        success: true,
        token: data.token,
        username: data.nombreUsuario,
        role: data.rol
      };
    } catch (err) {
      return { success: false, message: "Error al conectar con el servidor" };
    }
  }
  