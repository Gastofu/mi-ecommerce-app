import { useState } from "react";
import { products } from "../data/products.js";
import { ProductCard } from "../components/ProductCard.jsx";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h1>Productos de la tienda</h1>

      {/* Buscador */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar producto por nombre..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-results">
          No se encontraron productos para "{searchTerm}".
        </p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
