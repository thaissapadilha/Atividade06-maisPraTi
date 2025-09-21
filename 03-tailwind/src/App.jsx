import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import ProductCard from "./components/ProductCard";
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
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  function handleToggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  function handleAdd(product) {
    setCartItems((items) => [...items, product]);
  }

  function toggleCart() {
    setCartOpen((open) => !open);
  }

  return (
    <div className="min-h-screen bg-bg text-primary transition-colors duration-200 pt-20">
      <Navbar
        cartCount={cartItems.length}
        onToggleTheme={handleToggleTheme}
        theme={theme}
        onToggleCart={toggleCart}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <section aria-labelledby="produtos">
          <h2 id="produtos" className="sr-only">
            Produtos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

      {cartOpen && (
        <aside className="fixed right-4 top-20 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-4 z-50 text-gray-900 dark:text-gray-100">
          <h3 className="font-semibold text-lg mb-2">Carrinho</h3>
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Seu carrinho está vazio.
            </p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="text-sm flex justify-between">
                  <span className="truncate">{item.title}</span>
                  <span className="font-semibold text-blue-500 dark:text-blue-400">
                    R${item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </aside>
      )}
    </div>
  );
}
