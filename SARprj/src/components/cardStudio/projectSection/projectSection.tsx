import Card from "../../componentsReusable/cardGeneral/card";
import "./projectSection.css";

import img0 from "../../../assets/houseImg.jpg";
import img1 from "../../../assets/houseImg.jpg";
import img2 from "../../../assets/houseImg.jpg";

function ProjectSection() {

  const imgProjects =[
    img0, img1, img2
  ]


  const projects = [
    {
      imgSrc: imgProjects[0],
      titleCard: "Progetto 1",
      textCard: "Descrizione del progetto 1",
      textButton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="26"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      ),
    },


    {
      imgSrc: imgProjects[1],
      titleCard: "Progetto 2",
      textCard: "Descrizione del progetto 2",
      textButton: "Scopri di più",
    },


    {
      imgSrc: imgProjects[2],
      titleCard: "Progetto 3",
      textCard: "Descrizione del progetto 3",
      textButton: "Scopri di più",
    },
  ];

  return (
    <div className="container mx-5 my-5 pb-5">
      <div className="row">
        <div className="col-12 overflow-hidden">
          <h3 className="ms-3">
            <strong>I Nostri Progetti</strong>
          </h3>
        </div>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-4" key={index}>
            <Card
              imgSrc={project.imgSrc}
              titleCard={project.titleCard}
              textCard={project.textCard}
              textButton={project.textButton}
              fontSize="fs-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
