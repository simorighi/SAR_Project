import './App.css'
import Card from './components/navbar/card/card';
import Navbar from './components/navbar/navbar'
import CardTitle from './components/navbar/cardTitle/cardTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavigationButton from './components/navigationButton/navigationButton';

function App() {
  
  return (
    <div>
    <header>
      <Navbar></Navbar>
    </header>
      <CardTitle/>
      <NavigationButton/>
      <Card/>
    </div>
  )
}

export default App
