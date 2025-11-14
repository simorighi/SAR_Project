import "./cardTitle.css";
import fotina from "/AF/Site/SAR_Project/SARprj/src/assets/house.jpg";
import architetto from "/AF/Site/SAR_Project/SARprj/src/assets/arrchitetto.jpg";

function CardTitle() {
  const foto2 = fotina;
  const foto1 = architetto;

  return (
    <div className="container position-relative text-center border rounded-4 mt-4" style={{ height: "600px", overflow: "hidden", }}>
      <img
        src={foto1}
        alt="Background"
        className="img-fluid position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: "-1" }}
      />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="display-3 fw-bold text-white text-shadow">
          SAR Progettazioni
        </h1>
        <h2 className="h4 fw-normal text-white text-shadow">
            Soluzioni per la tua casa dei sogni
        </h2>
      </div>
    </div>
  );
}

export default CardTitle;
