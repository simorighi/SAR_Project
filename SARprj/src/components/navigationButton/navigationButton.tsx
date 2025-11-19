import "./navigationButton.css";

interface NavigationButtonProps {
  colorBackground: string; // Colore di sfondo del bottone
  borderColor: string; // Colore del bordo del bottone
  textColor: string; // Colore del testo del bottone
  borderWidth?: string; // Opzionale: Spessore del bordo del bottone
}

function NavigationButton(props: NavigationButtonProps) {
  const { colorBackground, borderColor, textColor } = props;

  return (
    <div className="container border rounded-4 mt-5 bacColor hero-container position-relative">
      <div className="cerchio-1"></div>
      <div className="cerchio-2"></div>
      <div className="cerchio-3"></div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center gap-3 my-5">
          <button
            className="btn rounded-0 px-5 pt-3 position-relative overflow-hidden"
            style={{
              backgroundColor: colorBackground,
              borderColor: borderColor,
              borderWidth: props.borderWidth || "2px",
            }}
          >
            <p className="fs-5" style={{color: textColor}}>Learn More</p>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigationButton;