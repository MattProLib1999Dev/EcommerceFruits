import {
  DisplayProduct,
  ListProduct,
  ProductCard,
} from "../Product/product";

export default function Home() {
  const prodottoDelGiorno = ListProduct[0];

  return (
    <main
      className="min-vh-100"
      style={{
        background:
          "linear-gradient(to bottom, #f8fff8, #eef8ee)",
      }}
    >
      {/* HERO */}
      <section className="py-5 border-bottom">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* TESTO */}
            <div className="col-lg-6">
              <span className="badge bg-success mb-3 fs-6">
                🌱 100% Naturale
              </span>

              <h1 className="display-2 fw-bold text-dark mb-4">
                Bio Market
              </h1>

              <p className="lead text-muted mb-4">
                Frutta fresca, biologica e selezionata ogni giorno.
                <br />
                Dalla terra alla tua tavola, con qualità garantita.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-success btn-lg px-4 shadow">
                  🛒 Acquista ora
                </button>

                <button className="btn btn-outline-dark btn-lg px-4">
                  Scopri di più
                </button>
              </div>
            </div>

            {/* IMMAGINE HERO */}
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop"
                alt="Frutta fresca"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{
                  maxHeight: "450px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGO */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 text-dark">
              🍎 I nostri prodotti
            </h2>
            <p className="text-muted fs-5">
              Solo prodotti freschi e selezionati.
            </p>
          </div>

          <div className="row">
            {ListProduct.map((item, index) => (
              <div
                key={item.nome}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODOTTO DEL GIORNO */}
      <section className="py-5">
        <div className="container">
          <div
            className="rounded-4 shadow-lg p-5"
            style={{
              background:
                "linear-gradient(135deg, #198754, #20c997)",
            }}
          >
            <div className="row align-items-center">
              {/* TESTO */}
              <div className="col-lg-6 text-white mb-4 mb-lg-0">
                <span className="badge bg-light text-success mb-3 fs-6">
                  🌟 Speciale oggi
                </span>

                <h2 className="display-5 fw-bold mb-3">
                  Prodotto del giorno
                </h2>

                <p className="fs-5 opacity-75">
                  Il prodotto più amato dai nostri clienti, fresco e disponibile in quantità limitata.
                </p>

                <button className="btn btn-light btn-lg text-success fw-bold mt-3">
                  Acquista subito
                </button>
              </div>

              {/* CARD CENTRATA */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="w-100" style={{ maxWidth: "350px" }}>
                  <ProductCard item={prodottoDelGiorno} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-4 border-top bg-white">
        <div className="container text-center">
          <p className="text-muted mb-0">
            © 2026 Bio Market · Freschezza, qualità e sostenibilità.
          </p>
        </div>
      </footer>
    </main>
  );
}