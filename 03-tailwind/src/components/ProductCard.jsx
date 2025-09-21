import React from "react";
import Button from "./Button";

const ProductCard = ({ product, onAdd, loading }) => {
  return (
    <div
      className="bg-bg text-primary border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent"
      tabIndex={0}
      aria-label={`Produto: ${product.title}`}
    >
      <div className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800">
        {loading ? (
          <div className="animate-pulse w-full h-full bg-gray-300 dark:bg-gray-700" />
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-sm font-medium leading-snug line-clamp-2"
            title={product.title}
          >
            {product.title}
          </h3>
          {product.tag && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 whitespace-nowrap">
              {product.tag}
            </span>
          )}
        </div>

        <div className="mt-2 flex-1">
          <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
            R$ {product.price.toFixed(2)}
          </div>
          <div
            className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"
            aria-label={`Avaliação ${product.rating} de 5`}
          >
            {"★".repeat(product.rating)}
          </div>
        </div>

        <div className="mt-auto pt-3">
          <Button
            variant="outline"
            ariaLabel={`Adicionar ${product.title} ao carrinho`}
            onClick={() => onAdd(product)}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Adicionar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
