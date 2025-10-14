import React from 'react';

export default function Button({ label, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} data-testid="btn">
      {label}
    </button>
  );
}
