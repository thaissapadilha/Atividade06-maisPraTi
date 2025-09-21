import { useEffect, useState } from "react";

export function Navbar({ cartCount = 0, onToggleTheme, theme, onToggleCart }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-bg/80 backdrop-blur border-b border-surface/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg">Mini Loja Pratas</div>
          <nav aria-label="main navigation" className="hidden md:flex gap-3" />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema claro/escuro"
            className={`w-16 h-8 rounded-full flex items-center px-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
              theme === "dark" ? "bg-accent" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                theme === "dark" ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>

          <button
            aria-label="Abrir carrinho"
            className="relative focus-ring rounded-md p-2"
            onClick={onToggleCart}
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-gray-900 dark:text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
