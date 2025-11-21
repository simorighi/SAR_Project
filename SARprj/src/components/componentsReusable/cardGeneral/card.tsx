import type React from "react";
import NavigationButton from "../navigationButton/navigationButton";
import "./card.css";

type fontSizeOptions = "fs-1" | "fs-2" | "fs-3" | "fs-4" | "fs-5" | "fs-6";

interface ICardProps {
  imgSrc: string;
  titleCard: string;
  textCard: string;
  textButton: React.ReactNode;
  fontSize?: fontSizeOptions;

}


function Card({ imgSrc, textCard, titleCard, textButton, fontSize = "fs-6" }: ICardProps) {
  return (
    <div className="card bg-transparent border-0" style={{ width: "18rem" }}>
      <img
        src={imgSrc}
        className="card-img-top rounded-2"
        alt="Project Image"
        style={{ height: "13rem" }}
      />
      <div className="card-body border-2 border-black rounded-2 " >
        <h5 className="card-title"><strong>{titleCard}</strong></h5>
        <p className={`card-text  ${fontSize}`}>{textCard}</p>
        <NavigationButton
            colorBackground="#ececec"
            borderColor="#ceb399"
            textColor="#ceb399"
            contentText={textButton}
            fontSize="fs-6"
          />
      </div>
    </div>
  );
}

export default Card;
