export const lightTheme = {
  colors: {
    bg: "#ffffff",
    primary: "#111827",
    secondary: "#6b7280",
    accent: "#2563eb",
    card: "#f9fafb",
  },
  spacing: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
  },
  radius: {
    sm: "0.375rem",
    lg: "0.75rem",
    full: "9999px",
  },
  shadow: {
    md: "0 4px 6px rgba(0,0,0,0.1)",
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    bg: "#111827",
    primary: "#f9fafb",
    secondary: "#d1d5db",
    accent: "#3b82f6",
    card: "#1f2937",
  },
};
