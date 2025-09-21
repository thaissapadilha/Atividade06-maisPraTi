import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  disabled = false,
  className = "",
}) {
  const theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

  const buttonClass = theme === "dark" ? styles.button : styles.buttonOutline;

  // Permite combinar classes externas com o estilo do botão
  const combinedClassName = `${buttonClass} ${className}`.trim();

  return (
    <button className={combinedClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
