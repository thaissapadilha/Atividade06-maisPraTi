import React from "react";

export function Button({ children, variant = "solid", onClick, ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}
