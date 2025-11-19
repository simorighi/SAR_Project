import "./App.css";
/* bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
/* import elements and pages */
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      {/* home page */}
      <Home />

      <footer></footer>
    </div>
  );
}

export default App;
