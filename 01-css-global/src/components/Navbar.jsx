import React from "react";
import { Cart } from "./Cart";

export function Navbar({ cart, cartOpen, setCartOpen, onToggleTheme }) {
  return (
    <header className="navbar">
      <h1>Mini Loja Pratas</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Switch */}
        <div className="theme-toggle" onClick={onToggleTheme}>
          <div className="circle" />
        </div>

        {/* Carrinho */}
        <Cart cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </div>
    </header>
  );
}
