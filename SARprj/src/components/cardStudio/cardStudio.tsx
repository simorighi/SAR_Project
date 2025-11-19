import NavigationButton from '../navigationButton/navigationButton'
import './cardStudio.css'
import studio from '../../assets/studio.jpg'

function CardStudio(){
    const studioimg = studio;
    return(
        <div className="container my-5 cardShadow rounded-4 p-4 d-flex align-items-center justify-content-center">
           <div className="row">
            <div className="col-5 ms-3 border">
                <h3 className="fs-3 my-4"><strong> Il Nostro Studio </strong></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad labore officiis ducimus ipsum, eaque aspernatur totam earum quas nulla illo mollitia placeat voluptas, vitae voluptate facere explicabo molestias possimus.</p>
                <NavigationButton
                    colorBackground="#ececec"
                    borderColor="#ceb399"
                    textColor="#ceb399"
                    contentText="Scopri di più"
                    fontSize='fs-6'
                />
            </div>
            <div className="col-6 border justify-content-center d-flex align-items-center">
                <img src={studioimg} alt="" className="d-flex justify-content-center h-50" />
            </div>
           </div>
        </div>
    )
}

export default CardStudio