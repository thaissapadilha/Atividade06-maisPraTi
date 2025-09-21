import React from "react";

export function Cart({ cart, cartOpen, setCartOpen }) {
  return (
    <div
      className={`cart-container ${cartOpen ? "open" : ""}`}
      onClick={() => setCartOpen(!cartOpen)}
    >
      <span className="cart-icon">🛒</span>
      {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}

      <div className="cart-dropdown">
        {cart.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <>
            <h4>Carrinho |</h4>
            {cart.map((item, i) => (
              <div key={i} className="cart-item">
                <span>{item.title}</span>
                <span>R$ {item.price.toFixed(2)}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
