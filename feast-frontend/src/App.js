import './App.css';
import Navbar from './Navbar';
import About from './About';
import Header from './Header';

function App() {
  return (
    <div className="App">
     <div className="header">
      <header />
      <Navbar />
     </div>
     <div className="content">
      <About />
     </div>
    </div>
  );
}

export default App;
