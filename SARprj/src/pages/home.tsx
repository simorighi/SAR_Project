import Card from "../components/card/card";
import CardTitle from "../components/cardTitle/cardTitle";
import NavigationButton from "../components/navigationButton/navigationButton";

function Home() {
  return (
    <>
      <CardTitle />
      <NavigationButton
        colorBackground="#ececec"
        borderColor="#ceb399"
        textColor="#ceb399"
      />
      <Card />
    </>
  );
}

export default Home;
