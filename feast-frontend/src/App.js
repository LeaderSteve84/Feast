import './App.css';
import Navbar from './Navbar';
import About from './About';
import Header from './Header';
import Wwedo from './Wwedo';

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
    </div>
  );
}

export default App;
