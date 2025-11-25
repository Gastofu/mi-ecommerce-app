import { useParams, Link } from "react-router-dom";
import { products } from "../data/products.js";

export function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <section>
        <h1>Producto no encontrado</h1>
        <Link to="/" className="back-link">
          Volver a la tienda
        </Link>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="product-detail-image"
      />
      <div className="product-detail-info">
        <h1>{product.nombre}</h1>
        <p>
          <strong>Precio:</strong> $ {product.precio}
        </p>
        <p>
          <strong>Stock disponible:</strong> {product.stock}
        </p>
        <p>
          <strong>Código de producto:</strong> {product.codigo}
        </p>
        <p>
          <strong>Descripción:</strong> {product.descripcion}</p>

        <Link to="/" className="back-link">
          Volver a la tienda
        </Link>
      </div>
    </section>
  );
}
