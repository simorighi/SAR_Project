import "./navigationButton.css";
import { useState } from "react";


type FontSizeOptions = "fs-1" | "fs-2" | "fs-3" | "fs-4" | "fs-5" | "fs-6";

interface NavigationButtonProps {
  colorBackground: string;
  borderColor: string;
  textColor: string;
  borderWidth?: string;
  contentText: string;
  fontSize?: FontSizeOptions;
}

function NavigationButton(props: NavigationButtonProps) {
  const { colorBackground, borderColor, textColor, contentText, fontSize } = props;


  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`btn rounded-0 px-5 pt-3 position-relative overflow-hidden`} // Applica la classe dinamica
      style={{
        backgroundColor: isHovered ? textColor : colorBackground,
        borderColor: borderColor,
        color: isHovered ? colorBackground : textColor,
        borderWidth: props.borderWidth || "2px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={` ${fontSize}`}>{contentText}</p>
      <span></span>
    </button>
  );
}

export default NavigationButton;