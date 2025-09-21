import { useState, useEffect } from "react";
import styles from "./App.module.css";
import products from "./products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

export default function App() {
  const [cart, setCart] = useState([]);
  const [dark, setDark] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Adicionado ao carrinho:", product.title);
  }

  function handleToggleTheme() {
    setDark((prev) => !prev);
  }

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onToggleTheme={handleToggleTheme}
        dark={dark}
      />

      <main className={styles.wrapper}>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
      {cartOpen && (
        <div className={styles.cartOverlay} onClick={() => setCartOpen(false)}>
          <div
            className={styles.cartModal}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Carrinho</h2>
            {cart.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <ul className={styles.cartList}>
                {cart.map((item, idx) => (
                  <li key={idx}>
                    {item.title} - R$ {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
            <button
              className={styles.closeCartBtn}
              onClick={() => setCartOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Botão flutuante para abrir o carrinho */}
      <button
        className={styles.cartFloatBtn}
        onClick={() => setCartOpen(true)}
        aria-label="Abrir carrinho"
      >
        🛒
        {cart.length > 0 && (
          <span className={styles.cartBadge}>{cart.length}</span>
        )}
      </button>
    </>
  );
}
