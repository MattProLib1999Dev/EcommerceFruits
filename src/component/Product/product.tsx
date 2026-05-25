import { useSearchParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { Product } from "../../models/Product";

export const ListProduct: Product[] = [
  { nome: "Mela", prezzo: 0.4, descrizione: "Mela melinda gialla" },
  { nome: "Pera", prezzo: 0.8, descrizione: "Pera williams gialla" },
  { nome: "Ananas", prezzo: 6.0, descrizione: "Ananas giallo grande" },
  { nome: "Banana", prezzo: 1.0, descrizione: "Banana chiquita matura" },
  { nome: "Fragola", prezzo: 3.5, descrizione: "Fragole fresche di bosco" },
  { nome: "Kiwi", prezzo: 1.2, descrizione: "Kiwi verde maturazione naturale" },
  { nome: "Arancia", prezzo: 1.5, descrizione: "Arancia rossa di Sicilia" },
  { nome: "Uva", prezzo: 2.8, descrizione: "Uva bianca senza semi" },
  { nome: "Mango", prezzo: 4.5, descrizione: "Mango esotico dolcissimo" },
  { nome: "Ciliegia", prezzo: 5.0, descrizione: "Ciliegie ferrovia croccanti" },
];

export function ProductCard({ item, index }: { item: Product; index: number }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://loremflickr.com/400/300/${item.nome.toLowerCase()}?lock=${index}`}
            className="card-img-top"
            alt={item.nome}
          />
          <div className="card-body">
            {" "}
            {}
            <h3 className="card-title h5">{item.nome}</h3>
            <p className="card-text text-muted">{item.descrizione}</p>
            <p className="card-text fw-bold">€{item.prezzo.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DisplayProduct({ product }: { product: Product[] }) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const elementiPerPagina = 6; // Consiglio 6 (o multipli di 3) così si incolonnano perfettamente su 3 colonne!

  const totalPages = Math.ceil(product.length / elementiPerPagina);

  const prodottiVisibili = useMemo(() => {
    const start = (currentPage - 1) * elementiPerPagina;
    return product.slice(start, start + elementiPerPagina);
  }, [product, currentPage]);

  return (
    // container: centra la pagina e dà i margini corretti ai lati
    <div className="container my-5">
      <h2 className="mb-4 text-center text-success fw-bold">Prodotti freschi selezionati</h2>

      {/* Sostituito "product-grid" con Flexbox di Bootstrap per affiancare le card */}
      <div className="d-flex flex-wrap gap-4 justify-content-center mb-5">
        {prodottiVisibili.map((item, index) => (
          <ProductCard key={item.nome} item={item} index={index} />
        ))}
      </div>

      {/* Paginazione trasformata con i componenti standard di Bootstrap */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          
          {/* Pulsante Precedente */}
          <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
            <Link
              to={`?page=${currentPage - 1}`}
              className="page-link"
              tabIndex={currentPage <= 1 ? -1 : 0}
            >
              &laquo; Precedente
            </Link>
          </li>

          {/* Numeri delle pagine */}
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <Link to={`?page=${i + 1}`} className="page-link">
                {i + 1}
              </Link>
            </li>
          ))}

          {/* Pulsante Successivo */}
          <li className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}>
            <Link
              to={`?page=${currentPage + 1}`}
              className="page-link"
              tabIndex={currentPage >= totalPages ? -1 : 0}
            >
              Successivo &raquo;
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}
