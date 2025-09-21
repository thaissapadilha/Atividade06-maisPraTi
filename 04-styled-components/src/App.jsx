import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { CartSidebar } from "./components/CartSidebar";
import { products } from "./data/products";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  const [loading, setLoading] = useState(true);

  // agora temos um carrinho com itens de verdade
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  function handleToggleTheme() {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  }

  // adiciona produto ao carrinho
  function handleAdd(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function handleToggleCart() {
    setIsCartOpen((prev) => !prev);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar
        cartCount={cartItems.length}
        onToggleTheme={handleToggleTheme}
        isDarkMode={theme === "dark"}
        onToggleCart={handleToggleCart}
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
        <section>
          <h2 style={{ position: "absolute", left: "-9999px" }}>Produtos</h2>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            }}
          >
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={handleAdd}
                loading={loading}
              />
            ))}
          </div>
        </section>
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </ThemeProvider>
  );
}
