import './App.css';
import Navbar from './Navbar';
import About from './About';
import Header from './Header';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="content">
      <About />
     </div>
    </div>
  );
}

export default App;
