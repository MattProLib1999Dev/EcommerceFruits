import { DisplayProduct, ListProduct, ProductCard } from "../Product/product";

export default function Home() {
  // Esempio: prendiamo il primo prodotto come quello del giorno
  const prodottoDelGiorno = ListProduct[0];

  return (
    <main className="bg-light min-vh-100 py-5">
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark">🍓 Bio Market</h1>
          <p className="lead text-muted">Dalla terra alla tua tavola, con un click.</p>
        </header>

        {/* Catalogo: Passiamo la lista importata */}
        <section>
          <DisplayProduct product={ListProduct} />
        </section>

        <hr className="my-5" />

        {/* Prodotto del giorno */}
        <section className="text-center">
          <h3 className="mb-4 text-secondary">🌟 Prodotto del giorno</h3>
          <div className="d-flex justify-content-center">
            <div style={{ maxWidth: "300px", width: "300px" }}>
              {/* Riutilizziamo la card che hai già creato! */}
              <ProductCard item={prodottoDelGiorno} index={99} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}