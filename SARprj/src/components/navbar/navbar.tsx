import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent pt-3">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#">
          <strong>SAR Progettazioni</strong> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 pe-5 ">
            <li className="nav-item">
              <a className="nav-link active text-dark-emphasis" aria-current="page" href="./pages/home.tsx">
                Home
                <span className="span"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-dark-emphasis" aria-current="page" href="#">
                Studio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-dark-emphasis" aria-current="page" href="#">
                Progetti
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-dark-emphasis" aria-current="page" href="#">
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
