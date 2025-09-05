/* 🃏 COMPONENTE CARD - Estilo BROT Landing */
/* Tarjetas modernas con la estética de la landing page */

import React from 'react';
import './Card.css';

const Card = React.forwardRef(({
  children,
  variant = 'default',
  shadow = 'medium',
  hover = false,
  padding = 'medium',
  className = '',
  onClick,
  ...props
}, ref) => {
  const baseClasses = [
    'brot-card',
    `brot-card--${variant}`,
    `brot-card--shadow-${shadow}`,
    `brot-card--padding-${padding}`,
    hover && 'brot-card--hover',
    onClick && 'brot-card--clickable',
    className
  ].filter(Boolean).join(' ');

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      ref={ref}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

const CardHeader = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`brot-card__header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({
  children,
  size = 'medium',
  className = '',
  ...props
}, ref) => {
  return (
    <h3
      ref={ref}
      className={`brot-card__title brot-card__title--${size} ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = 'CardTitle';

const CardContent = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`brot-card__content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({
  children,
  align = 'right',
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`brot-card__footer brot-card__footer--${align} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardContent, CardFooter };