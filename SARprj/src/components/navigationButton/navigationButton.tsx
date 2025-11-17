import "./navigationButton.css";

function NavigationButton() {
  return (
    <>
      <div className="container border rounded-4 mt-5 bacColor hero-container position-relative">
      <div className="cerchio-1"></div>
      <div className="cerchio-2"></div>
      <div className="cerchio-3"></div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center gap-3 my-5 ">
            <button>
              <p>Learn More</p>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default NavigationButton;
