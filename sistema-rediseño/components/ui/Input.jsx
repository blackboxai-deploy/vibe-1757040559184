/* 📝 COMPONENTE INPUT - Estilo BROT Landing */
/* Inputs modernos con la estética de la landing page */

import React, { forwardRef, useState } from 'react';
import './Input.css';

const Input = forwardRef(({
  type = 'text',
  label,
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  variant = 'outline',
  size = 'medium',
  icon,
  iconPosition = 'left',
  clearable = false,
  fullWidth = false,
  className = '',
  value,
  onChange,
  onClear,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const hasValue = value && value.toString().length > 0;
  const hasError = Boolean(error);

  const baseClasses = [
    'brot-input',
    `brot-input--${variant}`,
    `brot-input--${size}`,
    disabled && 'brot-input--disabled',
    hasError && 'brot-input--error',
    isFocused && 'brot-input--focused',
    hasValue && 'brot-input--has-value',
    fullWidth && 'brot-input--full-width',
    className
  ].filter(Boolean).join(' ');

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } });
    }
    if (onClear) {
      onClear();
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={baseClasses}>
      {label && (
        <label className="brot-input__label">
          {label}
          {required && <span className="brot-input__required">*</span>}
        </label>
      )}
      
      <div className="brot-input__wrapper">
        {icon && iconPosition === 'left' && (
          <span className="brot-input__icon brot-input__icon--left">
            {icon}
          </span>
        )}
        
        <input
          ref={ref}
          type={inputType}
          className="brot-input__field"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {type === 'password' && (
          <button
            type="button"
            className="brot-input__icon brot-input__icon--password"
            onClick={togglePassword}
            tabIndex={-1}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
        
        {clearable && hasValue && !disabled && (
          <button
            type="button"
            className="brot-input__icon brot-input__icon--clear"
            onClick={handleClear}
            tabIndex={-1}
          >
            ✕
          </button>
        )}
        
        {icon && iconPosition === 'right' && !clearable && type !== 'password' && (
          <span className="brot-input__icon brot-input__icon--right">
            {icon}
          </span>
        )}
      </div>
      
      {(error || helperText) && (
        <div className="brot-input__helper">
          {error || helperText}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Componente Textarea
const Textarea = forwardRef(({
  label,
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  rows = 4,
  resize = 'vertical',
  variant = 'outline',
  size = 'medium',
  fullWidth = false,
  className = '',
  value,
  onChange,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.toString().length > 0;
  const hasError = Boolean(error);

  const baseClasses = [
    'brot-textarea',
    `brot-textarea--${variant}`,
    `brot-textarea--${size}`,
    `brot-textarea--resize-${resize}`,
    disabled && 'brot-textarea--disabled',
    hasError && 'brot-textarea--error',
    isFocused && 'brot-textarea--focused',
    hasValue && 'brot-textarea--has-value',
    fullWidth && 'brot-textarea--full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {label && (
        <label className="brot-textarea__label">
          {label}
          {required && <span className="brot-textarea__required">*</span>}
        </label>
      )}
      
      <div className="brot-textarea__wrapper">
        <textarea
          ref={ref}
          className="brot-textarea__field"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
      
      {(error || helperText) && (
        <div className="brot-textarea__helper">
          {error || helperText}
        </div>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export { Input, Textarea };