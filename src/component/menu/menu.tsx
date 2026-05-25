const itemMenu = [
  {
    id: 1,
    nome: "Home",
    link: "/",
    description: "Dalla terra alla tua tavola, con un click."
  },
    {
    id: 2,
    nome: "Shop",
    link: "/shop",
    description: "Esplora il nostro catalogo di prodotti freschi e biologici."
  },
    {
    id: 3,
    nome: "Contact",
    link: "/contact",
    description: "Contattaci per qualsiasi informazione o richiesta."

  },
];








export function Menu () {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Bio Market</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">1</a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">2</a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </>
  )
}