import Card from "../components/card/card";
import CardTitle from "../components/cardTitle/cardTitle";
import NavigationButton from "../components/navigationButton/navigationButton";

function Home() {
  return (
    <>
      <CardTitle />
      <NavigationButton
        colorBackground="#ceb399"
        borderColor="#ceb399"
        textColor="#ececec"
      />
      <Card />
    </>
  );
}

export default Home;
