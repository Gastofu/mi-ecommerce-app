import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="product-image"
      />
      <h3 className="product-title">{product.nombre}</h3>
      <p className="product-price">$ {product.precio}</p>
      <p className="product-stock">Stock: {product.stock}</p>
      <Link to={`/producto/${product.id}`} className="product-detail-link">
        Ver detalle
      </Link>
    </article>
  );
}
