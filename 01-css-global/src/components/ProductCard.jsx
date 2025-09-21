import React from "react";

export function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <img src={product.image} alt={product.title} />

      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <span className="tag">{product.tag}</span>
        <div className="price">R$ {product.price.toFixed(2)}</div>
        <div className="stars">★ {product.rating}</div>

        <button className="button" onClick={() => onAdd(product)}>
          Adicionar
        </button>
      </div>
    </article>
  );
}
