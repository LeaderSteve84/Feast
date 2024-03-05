import './App.css';
import Navbar from './Navbar';
import About from './About';

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
