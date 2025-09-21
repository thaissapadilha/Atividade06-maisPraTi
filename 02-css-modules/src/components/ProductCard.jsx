import Button from "./Button";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.cardImgImg}
        />
      </div>
      <h3>{product.title}</h3>
      <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
      <div className={styles.stars}>
        <span style={{ color: "#fbbf24" }}>
          {"★".repeat(product.rating ?? 0)}
        </span>
        <span style={{ color: "#d1d5db" }}>
          {"☆".repeat(5 - (product.rating ?? 0))}
        </span>
      </div>
      <div className={styles.actions}>
        {product.tag && <span className={styles.tag}>{product.tag}</span>}
        <Button onClick={() => onAddToCart(product)}>Adicionar</Button>
      </div>
    </div>
  );
}
