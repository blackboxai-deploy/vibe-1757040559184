import { Navigate } from "react-router-dom";
import { decodeToken } from "../../utils/jwtDecode";

// Constants for route paths
const ROUTES = {
  LOGIN: "/login",
  ADMIN_HOME: "/home/HomeAdmin",
  USER_HOME: "/home/Home"
};

// Constants for user roles
const ROLES = {
  ADMIN: "admin"
};

/**
 * HomeRedirector component handles role-based routing
 * Redirects users to appropriate home page based on their role
 */
export default function HomeRedirector() {
  const token = sessionStorage.getItem("token");
  
  // Redirect to login if no token
  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  try {
    const decoded = decodeToken(token);
    
    // Redirect to login if token is invalid or missing role
    if (!decoded?.rol) {
      return <Navigate to={ROUTES.LOGIN} replace />;
    }

    const rol = decoded.rol.toLowerCase();
    
    // Redirect based on role
    return <Navigate to={rol === ROLES.ADMIN ? ROUTES.ADMIN_HOME : ROUTES.USER_HOME} replace />;
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
}
