import { useSearchParams, Link } from "react-router-dom";
import { useMemo } from "react";
import "../home-page/vetrina.css"; // Importiamo il nostro CSS personalizzato
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
  { nome: "Ciliegia", prezzo: 5.0, descrizione: "Ciliegie ferrovia croccanti" }
];

export function ProductCard({ item, index }: { item: Product; index: number }) {
  return (
    <div className="custom-card">
      <div className="card-image">
        <img
          src={`https://loremflickr.com/400/300/${item.nome.toLowerCase()}?lock=${index}`}
          alt={item.nome}
        />
      </div>
      <div className="card-content">
        <h3>{item.nome}</h3>
        <p className="description">{item.descrizione}</p>
        <p className="price">€{item.prezzo.toFixed(2)}</p>
      </div>
    </div>
  );
}

export function DisplayProduct({ product }: { product: Product[] }) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const elementiPerPagina = 5;

  const totalPages = Math.ceil(product.length / elementiPerPagina);
  
  const prodottiVisibili = useMemo(() => {
    const start = (currentPage - 1) * elementiPerPagina;
    return product.slice(start, start + elementiPerPagina);
  }, [product, currentPage]);

  return (
    <div className="shop-container">
      <h2 className="shop-title">Prodotti freschi selezionati</h2>
      
      <div className="product-grid">
        {prodottiVisibili.map((item, index) => (
          <ProductCard key={item.nome} item={item} index={index} />
        ))}
      </div>

      <nav className="custom-pagination">
        <Link 
          to={`?page=${currentPage - 1}`} 
          className={`nav-btn ${currentPage <= 1 ? "disabled" : ""}`}
        >
          &laquo; Precedente
        </Link>

        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, i) => (
            <Link 
              key={i + 1} 
              to={`?page=${i + 1}`} 
              className={`page-num ${currentPage === i + 1 ? "active" : ""}`}
            >
              {i + 1}
            </Link>
          ))}
        </div>

        <Link 
          to={`?page=${currentPage + 1}`} 
          className={`nav-btn ${currentPage >= totalPages ? "disabled" : ""}`}
        >
          Successivo &raquo;
        </Link>
      </nav>
    </div>
  );
}