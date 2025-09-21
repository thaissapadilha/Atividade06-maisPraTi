import styles from "./Navbar.module.css";

export default function Navbar({ cartCount, onToggleTheme, dark }) {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>Mini Loja Pratas</h1>

      <div className={styles.actions}>
        <button
          className={`${styles.toggle} ${dark ? styles.active : ""}`}
          onClick={onToggleTheme}
          aria-label="Alternar tema"
        >
          <span className={styles.circle}></span>
        </button>

        <div className={styles.cart}>
          🛒 <span>{cartCount}</span>
        </div>
      </div>
    </header>
  );
}
