import NavigationButton from "../componentsReusable/navigationButton/navigationButton";

function cardNavigation() {
  return (
    <div className="container border rounded-4 mt-5 bacColor hero-container position-relative">
      <div className="cerchio-1"></div>
      <div className="cerchio-2"></div>
      <div className="cerchio-3"></div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center gap-3 my-5">
          <NavigationButton
            colorBackground="#ececec"
            borderColor="#ceb399"
            textColor="#ceb399"
            contentText="Learn More"
            fontSize="fs-5"
            borderWidth="1.5px"
          />
        </div>
      </div>
    </div>
  );
}

export default cardNavigation;
