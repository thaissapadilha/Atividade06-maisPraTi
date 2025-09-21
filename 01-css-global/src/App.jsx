import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import products from "./data/products";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  function handleAdd(product) {
    setCart((c) => [...c, product]);
  }

  return (
    <>
      <Navbar
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        onToggleTheme={handleToggleTheme}
      />
      <main>
        <section className="products-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} />
          ))}
        </section>
      </main>
    </>
  );
}
