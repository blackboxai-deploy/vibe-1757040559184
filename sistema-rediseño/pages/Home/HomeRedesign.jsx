/* 🏠 COMPONENTE HOME REDISEÑADO - Estilo BROT Landing */
/* Dashboard principal con el nuevo sistema visual */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Button from '../../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import './HomeRedesign.css';

const HomeRedesign = () => {
  const navigate = useNavigate();

  // Datos de ejemplo para estadísticas
  const stats = [
    {
      title: '24',
      subtitle: 'Pedidos Pendientes',
      variant: 'gold',
      trend: '+3 desde ayer'
    },
    {
      title: '156',
      subtitle: 'Pedidos del Mes',
      variant: 'brown',
      trend: '+12% vs mes anterior'
    },
    {
      title: '8',
      subtitle: 'En Elaboración',
      variant: 'pink',
      trend: 'Promedio: 6 por día'
    },
    {
      title: '92%',
      subtitle: 'Satisfacción Cliente',
      variant: 'cream',
      trend: '+2% este mes'
    }
  ];

  const quickActions = [
    {
      title: 'Nuevo Pedido',
      description: 'Crear un nuevo pedido paso a paso',
      icon: '🛒',
      action: () => navigate('/nuevo-pedido'),
      variant: 'primary',
      size: 'xl'
    },
    {
      title: 'Ver Pedidos',
      description: 'Consultar pedidos existentes',
      icon: '📋',
      action: () => navigate('/ver-pedidos'),
      variant: 'secondary',
      size: 'large'
    },
    {
      title: 'Elaboración',
      description: 'Gestionar pedidos en proceso',
      icon: '👨‍🍳',
      action: () => navigate('/elaboracion'),
      variant: 'outline',
      size: 'large'
    }
  ];

  return (
    <div className="home-redesign">
      <Navbar showUserInfo={true} showActions={true} />
      
      <div className="home-redesign__container">
        {/* Header Section */}
        <div className="home-redesign__header wheat-pattern">
          <div className="header-content">
            <h1 className="header-title">Panel de Control</h1>
            <p className="header-subtitle">
              Gestiona todos tus pedidos desde un solo lugar
            </p>
          </div>
          <div className="header-decoration">
            <div className="decoration-circle decoration-circle--1"></div>
            <div className="decoration-circle decoration-circle--2"></div>
            <div className="decoration-circle decoration-circle--3"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="home-redesign__stats">
          <h2 className="section-title">Resumen del Día</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant={stat.variant}
                shadow="medium"
                hover
                className="stat-card"
              >
                <CardContent padding="medium">
                  <div className="stat-number">{stat.title}</div>
                  <div className="stat-label">{stat.subtitle}</div>
                  <div className="stat-trend">{stat.trend}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="home-redesign__actions">
          <h2 className="section-title">Acciones Rápidas</h2>
          
          <div className="actions-grid">
            {/* Acción Principal - Nuevo Pedido */}
            <div className="primary-action">
              <Button
                variant="primary"
                size="xl"
                onClick={quickActions[0].action}
                className="primary-action-btn"
                icon={<span className="action-icon">{quickActions[0].icon}</span>}
              >
                <div className="action-content">
                  <span className="action-title">{quickActions[0].title}</span>
                  <span className="action-description">{quickActions[0].description}</span>
                </div>
              </Button>
            </div>

            {/* Acciones Secundarias */}
            <div className="secondary-actions">
              {quickActions.slice(1).map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant}
                  size={action.size}
                  onClick={action.action}
                  className="secondary-action-btn"
                  icon={<span className="action-icon">{action.icon}</span>}
                >
                  <div className="action-content">
                    <span className="action-title">{action.title}</span>
                    <span className="action-description">{action.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="home-redesign__recent">
          <h2 className="section-title">Actividad Reciente</h2>
          
          <div className="recent-grid">
            <Card variant="default" shadow="medium" className="recent-card">
              <CardHeader>
                <CardTitle size="medium">Últimos Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="recent-list">
                  <div className="recent-item">
                    <div className="recent-info">
                      <span className="recent-client">María González</span>
                      <span className="recent-detail">Pedido #1234 - 3 productos</span>
                    </div>
                    <div className="recent-status recent-status--pending">Pendiente</div>
                  </div>
                  
                  <div className="recent-item">
                    <div className="recent-info">
                      <span className="recent-client">Juan Pérez</span>
                      <span className="recent-detail">Pedido #1233 - 2 productos</span>
                    </div>
                    <div className="recent-status recent-status--processing">En Proceso</div>
                  </div>
                  
                  <div className="recent-item">
                    <div className="recent-info">
                      <span className="recent-client">Ana Silva</span>
                      <span className="recent-detail">Pedido #1232 - 5 productos</span>
                    </div>
                    <div className="recent-status recent-status--completed">Completado</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="cream" shadow="medium" className="recent-card">
              <CardHeader>
                <CardTitle size="medium">Productos Destacados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="featured-products">
                  <div className="featured-item">
                    <span className="featured-name">Pan de Campo</span>
                    <span className="featured-count">15 pedidos hoy</span>
                  </div>
                  <div className="featured-item">
                    <span className="featured-name">Facturas</span>
                    <span className="featured-count">12 pedidos hoy</span>
                  </div>
                  <div className="featured-item">
                    <span className="featured-name">Empanadas</span>
                    <span className="featured-count">8 pedidos hoy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRedesign;