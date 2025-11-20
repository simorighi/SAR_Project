import NavigationButton from "../navigationButton/navigationButton";
import "./cardStudio.css";
import studio from "../../assets/studio.jpg";
import ServiziSection from "./serviziSection/serviziSection";
import ProjectSection from "./projectSection/projectSection";
import CarouselCards from "./projectSection/projectSection";

function CardStudio() {
  const studioimg = studio;
  return (
    <>
    <div className="container cardShadow  rounded-4">
      <div className="row my-5 p-4 d-flex align-items-center justify-content-center">
        <div className="col-5 ">
          <h3 className="fs-3 my-4">
            <strong> Il Nostro Studio </strong>
          </h3>
          <p className="fs-7 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad
            labore officiis ducimus ipsum, eaque aspernatur totam earum quas
            nulla illo mollitia placeat voluptas, vitae voluptate facere
            explicabo molestias possimus.
          </p>
          <NavigationButton
            colorBackground="#ececec"
            borderColor="#ceb399"
            textColor="#ceb399"
            contentText="Scopri di più sullo studio"
            fontSize="fs-6"
          />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center divImg">
          <img src={studioimg} alt="Studio" className="img-fluid rounded-4 mt-4" />
        </div>
      </div>
      <hr />
      <ServiziSection />
      <hr />
      <CarouselCards/>

    </div>
    
    </>
  );
}

export default CardStudio;
