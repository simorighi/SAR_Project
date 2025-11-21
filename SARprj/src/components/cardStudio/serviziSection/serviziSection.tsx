import "./serviziSection.css";

function ServiziSection() {
  const numbersvg = 45;

  return (
    <div className="container my-5 p-4">
      <div className="row">
        <div className="col-12 ms-5">
          <h3 className="ms-1 mb-5">
            <strong>I Nostri Servizi</strong>
          </h3>
        </div>
      </div>
      <div className="row mx-5">
        {/* 1 ELEMENTO */}
        <div className="col-3 p-3 d-flex flex-column align-items-center justify-content-center">
          <div className="card servizi-card d-flex flex-column align-items-center justify-content-center">
            <svg
              style={{ color: "#ceb399" }}
              xmlns="http://www.w3.org/2000/svg"
              width={numbersvg}
              height={numbersvg}
              fill="currentColor"
              className="bi bi-house my-3"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <p className="text-center ">Progettazione residenziale</p>
          </div>
        </div>

        {/* 2 ELEMENTO */}
        <div className="col-3 p-3 d-flex flex-column align-items-center justify-content-center">
          <div className="card servizi-card d-flex flex-column align-items-center justify-content-center">
            <svg
              style={{ color: "#ceb399" }}
              xmlns="http://www.w3.org/2000/svg"
              width={numbersvg}
              height={numbersvg}
              fill="currentColor"
              className="bi bi-columns-gap my-3"
              viewBox="0 0 16 16"
            >
              <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
            </svg>
            <p className="text-center">Ristrutturazioni</p>
          </div>
        </div>

        {/* 3 ELEMENTO */}
        <div className="col-3 p-3 d-flex flex-column align-items-center justify-content-center">
          <div className="card servizi-card d-flex flex-column align-items-center justify-content-center">
            <svg
              style={{ color: "#ceb399" }}
              xmlns="http://www.w3.org/2000/svg"
              width={numbersvg}
              height={numbersvg}
              fill="currentColor"
              className="bi bi-shop-window  my-3"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <p className="text-center">Design interni</p>
          </div>
        </div>

        {/* 4 ELEMENTO */}
        <div className="col-3 p-3 d-flex flex-column align-items-center justify-content-center">
          <div className="card servizi-card d-flex flex-column align-items-center justify-content-center">
            <svg
              style={{ color: "#ceb399" }}
              xmlns="http://www.w3.org/2000/svg"
              width={numbersvg}
              height={numbersvg}
              fill="currentColor"
              className="bi bi-file-ruled my-3"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1zm9 6H6v2h7zm0 3H6v2h7zm0 3H6v2h6a1 1 0 0 0 1-1zm-8 2v-2H3v1a1 1 0 0 0 1 1zm-2-3h2v-2H3zm0-3h2V7H3z" />
            </svg>
            <p className="text-center">Pratiche edilizie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiziSection;
