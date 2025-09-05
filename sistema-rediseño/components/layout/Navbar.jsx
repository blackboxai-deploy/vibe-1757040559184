/* 🧭 COMPONENTE NAVBAR - Estilo BROT Landing */
/* Navbar moderno con gradientes y estilo de la landing page */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from '../../utils/jwtDecode';
import Button from '../ui/Button';
import './Navbar.css';

const Navbar = ({ 
  showUserInfo = true, 
  showActions = false, 
  transparent = false,
  className = '' 
}) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [saludo, setSaludo] = useState('BUENOS DÍAS');
  const [fecha, setFecha] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Configurar usuario y saludo
    const token = sessionStorage.getItem('token');
    if (!token) return navigate('/login');

    const decoded = decodeToken(token);
    if (decoded) {
      setUsuario(decoded.username || 'Usuario');
      const hora = new Date().getHours();
      setSaludo(hora < 16 ? 'BUENOS DÍAS' : 'BUENAS TARDES');

      const hoy = new Date().toLocaleDateString('es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      setFecha(hoy.toUpperCase());
    }

    // Scroll handler para transparencia
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (transparent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [navigate, transparent]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  const navbarClasses = [
    'brot-navbar',
    transparent && !isScrolled && 'brot-navbar--transparent',
    isScrolled && 'brot-navbar--scrolled',
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={navbarClasses}>
      <div className="brot-navbar__container">
        {/* Logo y Brand */}
        <div className="brot-navbar__brand">
          <div className="brot-navbar__logo">
            <div className="logo-circle">
              <span className="logo-text">BROT</span>
            </div>
          </div>
          
          {showUserInfo && (
            <div className="brot-navbar__brand-info">
              <h1 className="brot-navbar__title">Sistema de Pedidos</h1>
              <p className="brot-navbar__subtitle">Gestión Integral</p>
            </div>
          )}
        </div>

        {/* Información del Usuario */}
        {showUserInfo && (
          <div className="brot-navbar__user-info">
            <div className="brot-navbar__greeting">
              <span className="greeting-text">{saludo},</span>
              <span className="user-name">{usuario.toUpperCase()}</span>
            </div>
            <div className="brot-navbar__date">
              {fecha}
            </div>
          </div>
        )}

        {/* Acciones */}
        {showActions && (
          <div className="brot-navbar__actions">
            <Button
              variant="ghost"
              size="small"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="brot-navbar__menu-toggle"
            >
              ☰
            </Button>
            
            <Button
              variant="outline"
              size="small"
              onClick={handleLogout}
              className="brot-navbar__logout"
            >
              Cerrar Sesión
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="brot-navbar__mobile-menu">
          <div className="mobile-menu-content">
            <div className="mobile-user-info">
              <p className="mobile-greeting">{saludo}, {usuario}</p>
              <p className="mobile-date">{fecha}</p>
            </div>
            
            <div className="mobile-actions">
              <Button
                variant="outline"
                size="medium"
                fullWidth
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;