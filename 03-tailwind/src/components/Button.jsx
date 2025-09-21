import React from "react";

export default function Button({
  children,
  onClick,
  variant = "solid",
  ariaLabel,
  disabled = false,
  ...props
}) {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    solid:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white",
    ghost:
      "text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900",
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.solid}`}
      {...props}
    >
      {children}
    </button>
  );
}
