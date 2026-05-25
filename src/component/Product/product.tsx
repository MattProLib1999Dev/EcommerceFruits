import { useSearchParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { Product } from "../../models/Product";

export const ListProduct: Product[] = [
  {
    nome: "Mela",
    prezzo: 0.4,
    descrizione: "Mela melinda gialla",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    nome: "Pera",
    prezzo: 0.8,
    descrizione: "Pera williams gialla",
    image:
      "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=800&auto=format&fit=crop",
  },
  {
    nome: "Ananas",
    prezzo: 6.0,
    descrizione: "Ananas giallo grande",
    image:
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=800&auto=format&fit=crop",
  },
  {
  nome: "Banana",
  prezzo: 1.0,
  descrizione: "Banana dolce e matura",
  image:
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop",
},
  {
    nome: "Fragola",
    prezzo: 3.5,
    descrizione: "Fragole fresche di bosco",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop",
  },
  {
    nome: "Kiwi",
    prezzo: 1.2,
    descrizione: "Kiwi verde maturazione naturale",
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=800&auto=format&fit=crop",
  },
  {
    nome: "Arancia",
    prezzo: 1.5,
    descrizione: "Arancia rossa di Sicilia",
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=800&auto=format&fit=crop",
  },
  {
    nome: "Uva",
    prezzo: 2.8,
    descrizione: "Uva bianca senza semi",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800&auto=format&fit=crop",
  },
  {
    nome: "Mango",
    prezzo: 4.5,
    descrizione: "Mango esotico dolcissimo",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop",
  },
  {
    nome: "Ciliegia",
    prezzo: 5.0,
    descrizione: "Ciliegie ferrovia croccanti",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop",
  },
];

export function ProductCard({ item }: { item: Product }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        className="card-img-top"
        src={item.image}
        alt={item.nome}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h3 className="h5 fw-bold">{item.nome}</h3>
        <p className="text-muted">{item.descrizione}</p>
        <p className="fw-bold text-success">
          €{item.prezzo.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export function DisplayProduct({
  product,
}: {
  product: Product[];
}) {
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(
    searchParams.get("page") || "1"
  );

  const elementiPerPagina = 6;

  const totalPages = Math.ceil(
    product.length / elementiPerPagina
  );

  const prodottiVisibili = useMemo(() => {
    const start =
      (currentPage - 1) * elementiPerPagina;

    return product.slice(
      start,
      start + elementiPerPagina
    );
  }, [product, currentPage]);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-success mb-5">
        Prodotti freschi selezionati
      </h2>

      <div className="row justify-content-center">
        {prodottiVisibili.map((item) => (
          <ProductCard
            key={item.nome}
            item={item}
          />
        ))}
      </div>

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${
              currentPage <= 1
                ? "disabled"
                : ""
            }`}
          >
            <Link
              to={`?page=${currentPage - 1}`}
              className="page-link"
            >
              &laquo; Precedente
            </Link>
          </li>

          {Array.from(
            { length: totalPages },
            (_, i) => (
              <li
                key={i + 1}
                className={`page-item ${
                  currentPage === i + 1
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  to={`?page=${i + 1}`}
                  className="page-link"
                >
                  {i + 1}
                </Link>
              </li>
            )
          )}

          <li
            className={`page-item ${
              currentPage >= totalPages
                ? "disabled"
                : ""
            }`}
          >
            <Link
              to={`?page=${currentPage + 1}`}
              className="page-link"
            >
              Successivo &raquo;
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}