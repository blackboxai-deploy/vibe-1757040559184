/* 🔘 COMPONENTE BUTTON - Estilo BROT Landing */
/* Migración completa del estilo de botones de la landing page */

import React from 'react';
import './Button.css';

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  onClick,
  ...props
}, ref) => {
  const baseClasses = [
    'brot-button',
    `brot-button--${variant}`,
    `brot-button--${size}`,
    disabled && 'brot-button--disabled',
    loading && 'brot-button--loading',
    fullWidth && 'brot-button--full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      className={baseClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <div className="brot-button__spinner">
          <div className="spinner"></div>
        </div>
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="brot-button__icon brot-button__icon--left">
          {icon}
        </span>
      )}
      
      <span className={`brot-button__text ${loading ? 'brot-button__text--hidden' : ''}`}>
        {children}
      </span>
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="brot-button__icon brot-button__icon--right">
          {icon}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;