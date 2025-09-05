import React from 'react';
import './UnidadSwitch.css';

const BUTTONS = {
  Unidades: [
    { value: 'UND', label: 'UND' },
    { value: 'DOC', label: 'DOC' },
  ],
  Peso: [
    { value: 'KG', label: 'KG' },
    { value: 'GRS', label: 'GRS' },
  ],
  Mix: [
    { value: 'UND', label: 'UND' },
    { value: 'DOC', label: 'DOC' },
    { value: 'KG', label: 'KG' },
    { value: 'GRS', label: 'GRS' },
  ],
};

const UnidadSwitch = ({ tipoP, unidad, setUnidad }) => {
  if (!tipoP || !BUTTONS[tipoP]) return null;
  const options = BUTTONS[tipoP];

  return (
    <div className="brot-buttongroup">
      {options.map(opt => (
        <button
          key={opt.value}
          type="button"
          className={`brot-btn ${unidad === opt.value ? 'selected' : ''}`}
          onClick={() => setUnidad(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default UnidadSwitch;
