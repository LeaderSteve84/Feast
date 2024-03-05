import './App.css';
import Navbar from './Navbar';
import About from './About';
import Header from './Header';
import Wwedo from './Wwedo';
import DisplayFood from './DisplayFood';

function App() {
  return (
    <div className="App">
      <div className="headerContent">
        <Header />
      </div>
      <div className="navContent">
        <Navbar />
      </div>
      <div className="aboutContent">
        <About />
      </div>
      <div className="moreContent">
        <Wwedo />
      </div>
      <div className="displayFoodContent">
        <DisplayFood />
      </div>
    </div>
  );
}

export default App;
