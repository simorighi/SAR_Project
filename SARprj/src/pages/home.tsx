import img1 from "../assets/villa1.jpg";
import Header from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header
        title={
          <>
            SAR Progettazioni <br />
          </>
        }
        subtitle="ECCELLENZA NEL DESIGN DAL 1998."
        backgroundImage={img1}
      />
    </>
  );
}

export default Home;